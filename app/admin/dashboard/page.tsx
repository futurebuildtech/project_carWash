'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Users, Calendar} from 'lucide-react';

export default function AdminDashboard() {
  const [data, setData] = useState({ bookings: [], customers: [] });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('bookings');

useEffect(() => {
  const fetchData = async () => {
    try {
      // UPDATED PATH: Added /overview to match your folder structure
      const response = await fetch('/api/admin/overview', { 
        cache: 'no-store',
        headers: { 'Content-Type': 'application/json' }
      }); 

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result.success) {
        setData({ 
          bookings: result.bookings || [], 
          customers: result.customers || [] 
        });
      }
    } catch (error) {
      console.error("Dashboard Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);


  return (
    <main className="min-h-screen bg-[#080829] text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h1 className="text-5xl font-black tracking-tighter uppercase">
                EXPRESS <span className="bg-gradient-to-b from-[#F9E2AF] via-[#D4AF37] to-[#AA8A2E] bg-clip-text text-transparent italic">WASH PANEL</span>
              </h1>
              <p className="text-zinc-500 font-bold text-[10px] tracking-widest uppercase mt-2">Welcome back, Krishna</p>
            </div>
            
            {/* Tab Switcher */}
            <div className="flex bg-zinc-900/60 p-1 rounded-2xl border border-gold/20 backdrop-blur-xl">
              <button 
                onClick={() => setActiveTab('bookings')}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'bookings' ? 'bg-gold text-black' : 'text-zinc-500 hover:text-gold'}`}
              >
                <Calendar size={14} /> Bookings ({data.bookings.length})
              </button>
              <button 
                onClick={() => setActiveTab('customers')}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeTab === 'customers' ? 'bg-gold text-black' : 'text-zinc-500 hover:text-gold'}`}
              >
                <Users size={14} /> Customers ({data.customers.length})
              </button>
            </div>
          </div>

          {loading ? (
            <div className="h-96 flex items-center justify-center text-gold font-black tracking-[0.5em] animate-pulse uppercase">Synchronizing with Atlas...</div>
          ) : (
            <div className="rounded-[2.5rem] border border-gold/20 bg-zinc-900/40 backdrop-blur-3xl overflow-hidden shadow-2xl">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gold/5 border-b border-gold/10">
                    <th className="p-6 text-[9px] font-black text-gold uppercase tracking-[0.3em]">Client Info</th>
                    <th className="p-6 text-[9px] font-black text-gold uppercase tracking-[0.3em]">Contact</th>
                    <th className="p-6 text-[9px] font-black text-gold uppercase tracking-[0.3em]">{activeTab === 'bookings' ? 'Booking Date' : 'City'}</th>
                    <th className="p-6 text-[9px] font-black text-gold uppercase tracking-[0.3em]">Vehicle / Notes</th>
                    <th className="p-6 text-[9px] font-black text-gold uppercase tracking-[0.3em]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {(activeTab === 'bookings' ? data.bookings : data.customers).map((item: any) => (
                    <tr key={item._id} className="hover:bg-gold/5 transition-all group">
                      <td className="p-6">
                        <p className="font-black text-sm uppercase tracking-tight">{item.name}</p>
                        <p className="text-[10px] text-zinc-500 font-bold">{new Date(item.createdAt).toLocaleDateString()}</p>
                      </td>
                      <td className="p-6 font-bold text-zinc-400 text-sm">{item.mobile || item.phone}</td>
                      <td className="p-6">
                        <p className="text-sm font-bold text-white">{activeTab === 'bookings' ? item.date : (item.city || 'N/A')}</p>
                        {activeTab === 'bookings' && <p className="text-[10px] text-gold font-black uppercase">Service Scheduled</p>}
                      </td>
                      <td className="p-6 text-sm font-bold text-zinc-400">{item.notes || item.vehicleModel || 'N/A'}</td>
                      <td className="p-6">
                        <span className="px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest bg-gold/10 text-gold border border-gold/20">
                          {item.status || 'Active'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {(activeTab === 'bookings' ? data.bookings : data.customers).length === 0 && (
                <div className="p-20 text-center text-zinc-600 font-black uppercase tracking-widest text-xs">No records found in database</div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
