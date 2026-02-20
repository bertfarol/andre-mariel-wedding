import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Add a new guest
export async function POST(request: NextRequest) {
  try {
    const { name, hasPlusOne } = await request.json();
    const trimmedName = name?.trim();

    if (!trimmedName) {
      return NextResponse.json(
        { error: "Guest name is required" },
        { status: 400 }
      );
    }

    // 1. Check if the guest already exists
    const existingGuest = await prisma.guest.findFirst({
      where: {
        name: {
          equals: trimmedName,
          mode: 'insensitive', // Makes "John Doe" and "john doe" match
        },
      },
    });

    if (existingGuest) {
      return NextResponse.json(
        { error: "This guest is already on the list" },
        { status: 409 } // 409 Conflict is the standard status for duplicates
      );
    }

    // 2. Proceed with creation if no duplicate found
    const guest = await prisma.guest.create({
      data: {
        name: trimmedName,
        hasPlusOne: !!hasPlusOne,
      },
    });

    return NextResponse.json({ success: true, guest });
  } catch (error) {
    console.error("Error adding guest:", error);
    return NextResponse.json(
      { error: "Failed to add guest" },
      { status: 500 }
    );
  }
}

// Get all guests with their RSVP status
export async function GET() {
  try {
    const guests = await prisma.guest.findMany({
      include: {
        rsvp: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    
    return NextResponse.json(guests);
  } catch (error) {
    console.error("Error fetching guests:", error);
    return NextResponse.json(
      { error: "Failed to fetch guests" },
      { status: 500 }
    );
  }
}

// Delete a guest
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { error: "Guest ID is required" },
        { status: 400 }
      );
    }
    
    // First delete any RSVP associated with this guest
    await prisma.rsvp.deleteMany({
      where: { guestId: id },
    });
    
    // Then delete the guest
    await prisma.guest.delete({
      where: { id },
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting guest:", error);
    return NextResponse.json(
      { error: "Failed to delete guest" },
      { status: 500 }
    );
  }
}

// Update a guest
export async function PATCH(request: NextRequest) {
  try {
    const { id, name, hasPlusOne } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        { error: "Guest ID is required" },
        { status: 400 }
      );
    }
    
    const guest = await prisma.guest.update({
      where: { id },
      data: {
        ...(name !== undefined && { name: name.trim() }),
        ...(hasPlusOne !== undefined && { hasPlusOne }),
      },
    });
    
    return NextResponse.json({ success: true, guest });
  } catch (error) {
    console.error("Error updating guest:", error);
    return NextResponse.json(
      { error: "Failed to update guest" },
      { status: 500 }
    );
  }
}
