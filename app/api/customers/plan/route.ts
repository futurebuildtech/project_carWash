import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { userId, plan } = body;

  if (!userId || !plan) {
    return NextResponse.json({ success: false, message: 'User ID and plan are required' }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();
  const customers = db.collection('customers');

  const planEntry = { ...plan, selectedAt: new Date().toISOString() };
  await customers.updateOne(
    { _id: new ObjectId(userId) },
    {
      $push: { planHistory: planEntry },
      $set: { updatedAt: new Date().toISOString() },
    }
  );

  const user = await customers.findOne({ _id: new ObjectId(userId) });
  if (!user) {
    return NextResponse.json({ success: false, message: 'Customer not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, user: { ...user, id: user._id.toString() } });
}
