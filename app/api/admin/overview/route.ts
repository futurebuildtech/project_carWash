import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Booking from '@/models/Booking';
import Customer from '@/models/Customer';

export async function GET(request: NextRequest) {
  try {
    // 1. Connect to MongoDB Atlas
    await dbConnect();

    // 2. Fetch all Bookings and Customers
    // We use Promise.all to fetch both at the same time for speed
    const [bookings, customers] = await Promise.all([
      Booking.find({}).sort({ createdAt: -1 }),
      Customer.find({}).sort({ createdAt: -1 })
    ]);

    // 3. Return the data
    return NextResponse.json({
      success: true,
      bookings,
      customers
    });
  } catch (error: any) {
    console.error("Admin API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
