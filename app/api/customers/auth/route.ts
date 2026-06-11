import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, phone } = body;

  if (!email && !phone) {
    return NextResponse.json({ success: false, message: 'Email or phone is required' }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();
  const customers = db.collection('customers');

  const user = await customers.findOne({ $or: [{ email }, { phone }] });

  if (!user) {
    return NextResponse.json({ success: false, message: 'Customer not found' }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    user: {
      id: user._id.toString(),
      name: user.name,
      phone: user.phone,
      email: user.email,
      vehicleType: user.vehicleType,
      vehicleModel: user.vehicleModel,
      area: user.area,
      city: user.city,
      pincode: user.pincode,
      address: user.address,
      planHistory: user.planHistory || [],
    },
  });
}
