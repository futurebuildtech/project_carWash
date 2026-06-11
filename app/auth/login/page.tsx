'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useUserStore, User } from '@/lib/store';
import Header from '@/components/Header';
import { Phone, Lock } from 'lucide-react';
import { getServicePlanById } from '@/lib/constants';

const STORAGE_KEY = 'expresswash40-users';

const getRegisteredUsers = () => {
  if (typeof window === 'undefined') return [] as User[];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') as User[];
  } catch {
    return [] as User[];
  }
};

const findRegisteredUser = (phone: string) => {
  return getRegisteredUsers().find((user) => user.phone === phone);
};

export default function LoginPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser, setSelectedService } = useUserStore();

  const planId = searchParams.get('plan') || '';

  const getPlan = () => (planId ? getServicePlanById(planId) : undefined);


  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const existingUser = findRegisteredUser(phone);
      setLoading(false);

      if (!existingUser) {
        router.push(`/auth/register?phone=${encodeURIComponent(phone)}${planId ? `&plan=${encodeURIComponent(planId)}` : ''}`);
        return;
      }

      setStep('otp');
    }, 1000);
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const existingUser = findRegisteredUser(phone);
      if (existingUser) {
        setUser(existingUser);
        const selectedPlan = getPlan();
        if (selectedPlan) {
          setSelectedService({
            ...selectedPlan,
            selectedAt: new Date().toISOString(),
          });
        }
        setLoading(false);
        router.push('/dashboard');
        return;
      }

      setLoading(false);
      router.push(`/auth/register?phone=${encodeURIComponent(phone)}${planId ? `&plan=${encodeURIComponent(planId)}` : ''}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Animated background */}
          <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-gold to-transparent opacity-5 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="text-6xl mb-4">🚗</div>
              <h1 className="text-3xl font-bold text-gold mb-2">Welcome Back</h1>
              <p className="text-gray-400">Login to your ExpressWash40 account</p>
            </div>

            {/* Login Form */}
            <div className="glass card-premium rounded-2xl p-8 border border-gold border-opacity-20 animate-scale-in">
              <form onSubmit={step === 'phone' ? handleSendOTP : handleVerifyOTP} className="space-y-6">
                {step === 'phone' ? (
                  <>
                    <div>
                      <label className="block text-gold font-semibold mb-3">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-3 text-gold" size={20} />
                        <input
                          type="tel"
                          placeholder="+91 9876543210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-lightGray border border-gold border-opacity-20 text-gray-300 placeholder-gray-600 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-premium text-black py-3 rounded-lg font-bold transition disabled:opacity-50"
                    >
                      {loading ? 'Sending OTP...' : 'Send OTP'}
                    </button>
                    <p className="text-center text-gray-400 text-sm mt-4">
                      New customer?{' '}
                      <Link
                        href={`/auth/register?phone=${encodeURIComponent(phone)}${planId ? `&plan=${encodeURIComponent(planId)}` : ''}`}
                        className="text-gold hover:text-darkGold font-semibold"
                      >
                        Register first
                      </Link>
                    </p>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-gold font-semibold mb-3">Enter OTP</label>
                      <p className="text-gray-400 text-sm mb-4">OTP sent to {phone}</p>
                      <div className="relative">
                        <Lock className="absolute left-4 top-3 text-gold" size={20} />
                        <input
                          type="text"
                          placeholder="000000"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                          maxLength={6}
                          className="w-full bg-lightGray border border-gold border-opacity-20 text-gray-300 placeholder-gray-600 pl-12 pr-4 py-3 rounded-lg text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading || otp.length !== 6}
                      className="w-full btn-premium text-black py-3 rounded-lg font-bold transition disabled:opacity-50"
                    >
                      {loading ? 'Verifying...' : 'Verify & Login'}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setStep('phone');
                        setOtp('');
                      }}
                      className="w-full glass-light border border-gold border-opacity-20 text-gold py-3 rounded-lg font-semibold hover:border-opacity-100 transition"
                    >
                      Change Phone Number
                    </button>
                  </>
                )}
              </form>

              {/* Demo Login Info */}
              <div className="mt-6 pt-6 border-t border-gold border-opacity-20">
                <p className="text-gray-400 text-sm text-center mb-3">Demo OTP: 123456</p>
                <button
                  onClick={() => {
                    const demoUser: User = {
                      id: '1',
                      name: 'John Doe',
                      phone: '9876543210',
                      email: 'john@example.com',
                      vehicleType: 'car',
                      vehicleModel: 'Honda City',
                      area: 'NTR Nagar',
                      city: 'Rajahmundry',
                      pincode: '533101',
                      address: 'Rajahmundry, Andhra Pradesh',
                    };
                    setUser(demoUser);
                    router.push('/dashboard');
                  }}
                  className="w-full text-gold hover:text-darkGold transition text-sm font-semibold"
                >
                  Demo Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
