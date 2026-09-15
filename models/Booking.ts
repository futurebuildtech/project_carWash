import mongoose, { Schema, model, models } from 'mongoose';

const BookingSchema = new Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: String, required: true },
  notes: { type: String }, // This is the Vehicle Model field in your form
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
}, { collection: 'bookings' }); // Saves to a 'bookings' collection in Atlas

export default models.Booking || model('Booking', BookingSchema);
