import { prisma } from "@/lib/prisma";
import { sendRSVPConfirmation } from "@/lib/email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      guestId, 
      attending, 
      plusOneName, 
      email, 
      sendConfirmation, 
      message 
    } = body;

    // Validate required fields
    if (!guestId || attending === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if guest exists
    const guest = await prisma.guest.findUnique({
      where: { id: guestId },
    });

    if (!guest) {
      return NextResponse.json(
        { error: "Guest not found" },
        { status: 404 }
      );
    }

    // Check if RSVP already exists for this guest
    const existingRsvp = await prisma.rsvp.findUnique({
      where: { guestId },
    });

    let rsvp;

    if (existingRsvp) {
      // Update existing RSVP
      rsvp = await prisma.rsvp.update({
        where: { guestId },
        data: {
          attending,
          plusOneName: attending && guest.hasPlusOne ? plusOneName : null,
          email: email || null,
          sendConfirmation: sendConfirmation || false,
          message: message || null,
        },
        include: {
          guest: true,
        },
      });
    } else {
      // Create new RSVP
      rsvp = await prisma.rsvp.create({
        data: {
          guestId,
          attending,
          plusOneName: attending && guest.hasPlusOne ? plusOneName : null,
          email: email || null,
          sendConfirmation: sendConfirmation || false,
          message: message || null,
        },
        include: {
          guest: true,
        },
      });
    }

    // Send confirmation email if requested
    let emailSent = false;
    if (sendConfirmation && email) {
      try {
        await sendRSVPConfirmation({
          to: email,
          guestName: guest.name,
          attending,
          plusOneName: attending && guest.hasPlusOne ? plusOneName : null,
        });
        emailSent = true;
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        // Don't fail the RSVP if email fails
      }
    }

    return NextResponse.json({ 
      success: true, 
      rsvp,
      emailSent,
      message: existingRsvp ? "RSVP updated" : "RSVP created"
    });
  } catch (error) {
    console.error("Error creating RSVP:", error);
    return NextResponse.json(
      { error: "Failed to create RSVP", details: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const rsvps = await prisma.rsvp.findMany({
      include: {
        guest: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(rsvps);
  } catch (error) {
    console.error("Error fetching RSVPs:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSVPs" },
      { status: 500 }
    );
  }
}
