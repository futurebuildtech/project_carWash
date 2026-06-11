import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const {
    name,
    phone,
    email,
    area,
    city,
    pincode,
    address,
    vehicleType,
    vehicleModel,
    plan,
  } = body;

  if (!phone || !email || !name) {
    return NextResponse.json({ success: false, message: 'Name, email, and phone are required' }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();
  const customers = db.collection('customers');

  const query = { $or: [{ phone }, { email }] };
  const existing = await customers.findOne(query);
  const planEntry = plan ? { ...plan, selectedAt: new Date().toISOString() } : null;

  if (existing) {
    const update: any = {
      $set: {
        name,
        phone,
        email,
        area,
        city,
        pincode,
        address,
        vehicleType,
        vehicleModel,
        updatedAt: new Date().toISOString(),
      },
    };

    if (planEntry) {
      update.$push = { planHistory: planEntry };
    }

    await customers.updateOne({ _id: existing._id }, update);
    const saved = await customers.findOne({ _id: existing._id });

    return NextResponse.json({
      success: true,
      user: {
        id: saved!._id.toString(),
        name: saved!.name,
        phone: saved!.phone,
        email: saved!.email,
        vehicleType: saved!.vehicleType,
        vehicleModel: saved!.vehicleModel,
        area: saved!.area,
        city: saved!.city,
        pincode: saved!.pincode,
        address: saved!.address,
        planHistory: saved!.planHistory || [],
      },
    });
  }

  const newCustomer = {
    name,
    phone,
    email,
    area,
    city,
    pincode,
    address,
    vehicleType,
    vehicleModel,
    planHistory: planEntry ? [planEntry] : [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const result = await customers.insertOne(newCustomer);
  return NextResponse.json({
    success: true,
    user: {
      id: result.insertedId.toString(),
      ...newCustomer,
    },
  });
}
