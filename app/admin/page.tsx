'use client';

import Header from '@/components/Header';
import { useUserStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { BarChart3, Users, TrendingUp, Calendar, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  const { user, isAuthenticated } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated || user?.name !== 'Admin') {
      router.push('/');
    }
  }, [isAuthenticated, user, router]);

  const stats = [
    { label: 'Total Revenue', value: '₹2,45,899', icon: TrendingUp, color: 'gold' },
    { label: 'Active Members', value: '1,234', icon: Users, color: 'gold' },
    { label: 'Today Bookings', value: '42', icon: Calendar, color: 'gold' },
    { label: 'Pending Issues', value: '3', icon: AlertCircle, color: 'red' },
  ];

  return (
    <div className="min-h-screen pb-16">
      <Header />

      <div className="pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <BarChart3 size={32} className="text-gold" />
            <h1 className="text-4xl font-bold text-gold">Admin Dashboard</h1>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="card-premium glass rounded-2xl p-6 border border-gold border-opacity-20 animate-scale-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                      <p className="text-3xl font-bold text-gold">{stat.value}</p>
                    </div>
                    <Icon className="text-gold opacity-50" size={28} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 glass card-premium rounded-2xl p-8 border border-gold border-opacity-20 animate-fade-in">
              <h2 className="text-2xl font-bold text-gold mb-6">Revenue Overview</h2>
              <div className="space-y-4">
                {['This Week', 'Last Week', 'Last Month'].map((period) => (
                  <div key={period}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{period}</span>
                      <span className="text-gold font-bold">₹45,320</span>
                    </div>
                    <div className="w-full bg-lightGray rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-gold to-darkGold h-3 rounded-full"
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <button className="w-full btn-premium text-black py-4 rounded-xl font-bold shadow-glow-gold transition transform hover:scale-105">
                📊 Generate Report
              </button>
              <button className="w-full glass-light border border-gold border-opacity-20 text-gold py-4 rounded-xl font-bold hover:border-opacity-100 transition">
                ⚙️ Settings
              </button>
              <button className="w-full glass-light border border-gold border-opacity-20 text-gold py-4 rounded-xl font-bold hover:border-opacity-100 transition">
                📧 Send Reminder
              </button>
            </div>
          </div>

          {/* Members List */}
          <div className="glass card-premium rounded-2xl p-8 border border-gold border-opacity-20 mt-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-gold mb-6">Recent Members</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gold border-opacity-20">
                    <th className="text-left py-3 px-4 text-gold font-semibold">Name</th>
                    <th className="text-left py-3 px-4 text-gold font-semibold">Phone</th>
                    <th className="text-left py-3 px-4 text-gold font-semibold">Plan</th>
                    <th className="text-left py-3 px-4 text-gold font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="border-b border-gold border-opacity-10 hover:bg-glassLight transition">
                      <td className="py-3 px-4 text-gray-300">Customer {i}</td>
                      <td className="py-3 px-4 text-gray-400">98765432{i}0</td>
                      <td className="py-3 px-4 text-gold">Monthly</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-3 py-1 bg-gradient-gold text-black rounded-full text-xs font-bold">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
