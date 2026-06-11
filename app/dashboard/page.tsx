'use client';

import Header from '@/components/Header';
import { useUserStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Calendar, Droplets, TrendingUp, Bell } from 'lucide-react';

export default function Dashboard() {
  const { user, isAuthenticated, selectedService, serviceHistory } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  if (!user) return null;

  const completedServices = serviceHistory.length;

  const upcomingBooking = {
    date: '2026-06-08',
    time: '10:00 AM',
    status: 'Scheduled',
  };

  return (
    <div className="min-h-screen pb-16">
      <Header />

      <div className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="glass card-premium rounded-2xl p-8 border border-gold border-opacity-20 mb-8 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-4xl font-bold text-gold mb-2">Welcome back, {user.name}! 👋</h1>
                <p className="text-gray-400">{user.vehicleType === 'car' ? '🚗' : '🏍️'} {user.vehicleModel}</p>
              </div>
              <button className="mt-4 md:mt-0 glass-light border border-gold border-opacity-20 text-gold px-6 py-3 rounded-lg hover:border-opacity-100 transition flex items-center gap-2">
                <Bell size={20} />
                Notifications
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Membership Status */}
            <div className="card-premium glass rounded-2xl p-6 border border-gold border-opacity-20 animate-scale-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gold font-semibold">Selected Package</h3>
                <Droplets className="text-gold" />
              </div>
              {selectedService ? (
                <>
                  <p className="text-3xl font-bold text-gold mb-2">{selectedService.name}</p>
                  <p className="text-gray-400 text-sm">{selectedService.vehicleType === 'car' ? 'Car Service' : 'Bike Service'}</p>
                  <div className="mt-4 bg-lightGray rounded-lg p-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Washes Included</span>
                      <span className="text-gold font-bold">{selectedService.washes}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Validity</span>
                      <span className="text-gold font-bold">{selectedService.validity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Price</span>
                      <span className="text-gold font-bold">₹{selectedService.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs mt-3">Selected on {new Date(selectedService.selectedAt).toLocaleDateString()}</p>
                </>
              ) : (
                <div>
                  <p className="text-gray-300 mb-4">No service selected yet.</p>
                  <button
                    onClick={() => router.push('/services')}
                    className="glass-light border border-gold border-opacity-20 text-gold px-4 py-3 rounded-lg font-semibold hover:border-opacity-100 transition"
                  >
                    Browse Services
                  </button>
                </div>
              )}
            </div>

            {/* Next Booking */}
            <div className="card-premium glass rounded-2xl p-6 border border-gold border-opacity-20 animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gold font-semibold">Next Booking</h3>
                <Calendar className="text-gold" />
              </div>
              <p className="text-3xl font-bold text-gold mb-2">{upcomingBooking.time}</p>
              <p className="text-gray-400 text-sm mb-3">{upcomingBooking.date}</p>
              <div className="inline-block px-3 py-1 bg-gradient-gold rounded-full">
                <span className="text-black text-xs font-bold">{upcomingBooking.status}</span>
              </div>
              <button className="mt-4 w-full glass-light border border-gold border-opacity-20 text-gold py-2 rounded-lg hover:border-opacity-100 transition text-sm font-semibold">
                Reschedule
              </button>
            </div>

            {/* Quick Stats */}
            <div className="card-premium glass rounded-2xl p-6 border border-gold border-opacity-20 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gold font-semibold">Statistics</h3>
                <TrendingUp className="text-gold" />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Total Washes</p>
                  <p className="text-2xl font-bold text-gold">24</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Services Completed</p>
                  <p className="text-2xl font-bold text-gold">{completedServices}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Member Since</p>
                  <p className="text-gold font-semibold">3 months ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-slide-up">
            <button
              onClick={() => router.push('/booking')}
              className="btn-premium text-black py-4 rounded-xl font-bold text-lg shadow-glow-gold transition transform hover:scale-105"
            >
              📅 Book Next Wash
            </button>
            <button
              onClick={() => router.push('/services')}
              className="glass-light border border-gold border-opacity-20 text-gold py-4 rounded-xl font-bold text-lg hover:border-opacity-100 transition"
            >
              💳 Choose Another Package
            </button>
          </div>

          {/* Booking History */}
          <div className="glass card-premium rounded-2xl p-8 border border-gold border-opacity-20 animate-fade-in">
            <h2 className="text-2xl font-bold text-gold mb-6">Recent Bookings</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-light rounded-lg p-4 border border-gold border-opacity-10 flex justify-between items-center hover:border-opacity-20 transition">
                  <div>
                    <p className="text-gold font-semibold">Wash #{i}</p>
                    <p className="text-gray-400 text-sm">2026-06-0{i} • 10:00 AM</p>
                  </div>
                  <span className={`px-4 py-2 rounded-lg font-semibold ${
                    i === 1 ? 'bg-gradient-gold text-black' : 'glass-light text-gray-300'
                  }`}>
                    {i === 1 ? 'Scheduled' : 'Completed'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
