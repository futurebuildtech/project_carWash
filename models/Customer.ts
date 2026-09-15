import mongoose, { Schema, model, models } from 'mongoose';

const CustomerSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  carModel: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
}, { collection: 'carwash' }); // Matches your Atlas collection name

export default models.Customer || model('Customer', CustomerSchema);
