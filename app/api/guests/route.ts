import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q");

    let guests;
    
    if (query && query.length > 0) {
      guests = await prisma.guest.findMany({
        where: {
          name: {
            contains: query,
            mode: "insensitive",
          },
        },
        orderBy: {
          name: "asc",
        },
      });
    } else {
      guests = await prisma.guest.findMany({
        orderBy: {
          name: "asc",
        },
      });
    }

    return NextResponse.json(guests);
  } catch (error) {
    console.error("Error fetching guests:", error);
    return NextResponse.json(
      { error: "Failed to fetch guests" },
      { status: 500 }
    );
  }
}
