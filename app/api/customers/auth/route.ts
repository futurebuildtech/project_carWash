import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Customer from '@/models/Customer';

export async function POST(request: NextRequest) {
  try {
    // 1. Establish connection using Mongoose
    await dbConnect();

    const body = await request.json();
    const { email, phone } = body;

    // 2. Validation
    if (!email && !phone) {
      return NextResponse.json(
        { success: false, message: 'Email or phone is required' }, 
        { status: 400 }
      );
    }

    // 3. Find Customer using the Mongoose Model
    // This replaces the manual db.collection('customers') logic
    const user = await Customer.findOne({
      $or: [
        { email: email || undefined },
        { phone: phone || undefined }
      ]
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Customer not found' }, 
        { status: 404 }
      );
    }

    // 4. Return formatted response
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

  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error', error: error.message }, 
      { status: 500 }
    );
  }
}
