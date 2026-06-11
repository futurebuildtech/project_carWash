import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function GET(_request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ success: false, message: 'Customer ID is required' }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();
  const customers = db.collection('customers');

  try {
    const user = await customers.findOne({ _id: new ObjectId(id) });

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
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Invalid customer ID' }, { status: 400 });
  }
}
