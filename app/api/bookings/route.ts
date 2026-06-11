import { NextRequest, NextResponse } from 'next/server';
import { isSlotBooked, addBooking } from '@/lib/bookings';
import { sendBookingConfirmation, sendSlotBookedNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, city, service, vehicle } = body;

    // Check if slot is already booked
    if (isSlotBooked(date, time, city)) {
      // Send slot booked notification
      await sendSlotBookedNotification(email, date, time, city);
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'This slot is already booked. A notification has been sent to your email.' 
        },
        { status: 400 }
      );
    }

    // Create booking
    const booking = {
      id: Date.now().toString(),
      date,
      time,
      city,
      name,
      email,
      phone,
      service,
      vehicle,
    };

    addBooking(booking);

    // Send confirmation email
    await sendBookingConfirmation(email, name, date, time, service, city);

    return NextResponse.json({
      success: true,
      message: 'Booking confirmed! Check your email for details.',
      booking,
    });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing booking' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ success: true, message: 'Booking API is working' });
}
