'use client';

import Header from '@/components/Header';
import { useUserStore } from '@/lib/store';
import { useState } from 'react';
import { TIME_SLOTS } from '@/lib/constants';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function BookingPage() {
  const { user } = useUserStore();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking confirmed! Check your email for details.');
  };

  return (
    <div className="min-h-screen pb-16">
      <Header />

      <div className="pt-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="glass card-premium rounded-2xl p-8 border border-gold border-opacity-20 animate-fade-in">
                <h1 className="text-4xl font-bold text-gold mb-8">Book Your Wash</h1>

                <form onSubmit={handleBooking} className="space-y-6">
                  {/* Vehicle Info */}
                  <div className="glass-light rounded-lg p-6 border border-gold border-opacity-10">
                    <p className="text-gray-400 text-sm mb-2">Vehicle</p>
                    <p className="text-xl text-gold font-semibold">{user?.vehicleModel}</p>
                    <p className="text-gray-500 text-sm">{user?.vehicleType === 'car' ? '🚗 Car' : '🏍️ Bike'}</p>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="block text-gold font-semibold mb-3 flex items-center gap-2">
                      <Calendar size={20} />
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-lightGray border border-gold border-opacity-20 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                      required
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-gold font-semibold mb-3 flex items-center gap-2">
                      <Clock size={20} />
                      Select Time Slot
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2 rounded-lg font-semibold transition ${
                            selectedTime === slot
                              ? 'btn-premium text-black'
                              : 'glass-light border border-gold border-opacity-20 text-gold hover:border-opacity-100'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-gold font-semibold mb-3 flex items-center gap-2">
                      <MapPin size={20} />
                      Service Location
                    </label>
                    <input
                      type="text"
                      value={user?.address || ''}
                      disabled
                      className="w-full bg-lightGray border border-gold border-opacity-10 text-gray-500 px-4 py-3 rounded-lg"
                    />
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="block text-gold font-semibold mb-3">Special Notes (Optional)</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any special instructions for our team..."
                      className="w-full bg-lightGray border border-gold border-opacity-20 text-gray-300 placeholder-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                      rows={4}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-premium text-black py-4 rounded-lg font-bold text-lg shadow-glow-gold transition transform hover:scale-105"
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Pricing Card */}
              <div className="glass card-premium rounded-2xl p-6 border border-gold border-opacity-20 mb-6 animate-scale-in">
                <h3 className="text-gold font-bold mb-4">Booking Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Service</span>
                    <span className="text-gold font-semibold">Premium Wash</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Date</span>
                    <span className="text-gold font-semibold">{selectedDate || 'Select date'}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Time</span>
                    <span className="text-gold font-semibold">{selectedTime || 'Select time'}</span>
                  </div>
                  <div className="border-t border-gold border-opacity-20 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-gold font-bold">Amount</span>
                      <span className="text-gold font-bold text-lg">Membership</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="glass card-premium rounded-2xl p-6 border border-gold border-opacity-20 animate-fade-in">
                <h3 className="text-gold font-bold mb-4">Service Benefits</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Professional detailing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Eco-friendly products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Quick 30 min service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">✓</span>
                    <span>Free dry cleaning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
