import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const date = url.searchParams.get('date');
  const status = url.searchParams.get('status');
  const tomorrow = url.searchParams.get('tomorrow') === 'true';

  const client = await clientPromise;
  const db = client.db();
  const customersCollection = db.collection('customers');
  const bookingsCollection = db.collection('bookings');

  const customers = await customersCollection.find({}).sort({ createdAt: -1 }).toArray();

  const bookingQuery: any = {};
  if (status) bookingQuery.status = status;
  if (date) bookingQuery.date = date;
  if (tomorrow) {
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    bookingQuery.date = tomorrowDate.toISOString().split('T')[0];
  }

  const bookings = await bookingsCollection.find(bookingQuery).sort({ date: 1, time: 1 }).toArray();

  return NextResponse.json({
    success: true,
    customers: customers.map((customer) => ({
      id: customer._id.toString(),
      name: customer.name,
      phone: customer.phone,
      email: customer.email,
      city: customer.city,
      vehicleType: customer.vehicleType,
      vehicleModel: customer.vehicleModel,
      planHistory: customer.planHistory || [],
    })),
    bookings: bookings.map((booking) => ({
      id: booking._id.toString(),
      userId: booking.userId,
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      service: booking.service,
      vehicle: booking.vehicle,
      city: booking.city,
      date: booking.date,
      time: booking.time,
      status: booking.status,
      createdAt: booking.createdAt,
    })),
  });
}
