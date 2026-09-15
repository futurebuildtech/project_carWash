import dbConnect from '@/lib/dbConnect';
import Booking from '@/models/Booking';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    // Create the booking in MongoDB Atlas
    const newBooking = await Booking.create(body);

    return NextResponse.json({ success: true, data: newBooking }, { status: 201 });
  } catch (error: any) {
    console.error("Booking Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
