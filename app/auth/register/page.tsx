'use client';

 import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
// import Header from '@/components/Header';
import { useUserStore, User } from '@/lib/store';
import { Phone, Mail } from 'lucide-react';
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

const saveRegisteredUsers = (users: User[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setUser, setSelectedService } = useUserStore();

  const planId = searchParams.get('plan') || '';
  const selectedPlan = planId ? getServicePlanById(planId) : undefined;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('Rajahmundry');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const phoneQuery = searchParams.get('phone');
    if (phoneQuery) setPhone(phoneQuery);
  }, [searchParams]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newUser: User = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      area,
      city,
      pincode,
      address,
      vehicleType: 'car',
      vehicleModel: 'Honda City',
    };

    setTimeout(() => {
      const users = getRegisteredUsers();
      const existingIndex = users.findIndex((user) => user.phone === phone);

      if (existingIndex >= 0) {
        users[existingIndex] = newUser;
      } else {
        users.push(newUser);
      }

      saveRegisteredUsers(users);
      setUser(newUser);
      if (selectedPlan) {
        setSelectedService({
          ...selectedPlan,
          selectedAt: new Date().toISOString(),
        });
      }
      setLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-xl mx-auto">
          <div className="relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <div className="text-6xl mb-4">📝</div>
              <h1 className="text-3xl font-bold text-gold mb-2">Register for ExpressWash40</h1>
              <p className="text-gray-400">Create your account once and login directly thereafter.</p>
              {selectedPlan && (
                <div className="mt-4 glass-light inline-flex flex-col rounded-3xl border border-gold border-opacity-20 px-5 py-4 text-left mx-auto max-w-xl">
                  <span className="text-sm uppercase tracking-[0.3em] text-gray-400">Selected Package</span>
                  <span className="text-xl font-bold text-gold">{selectedPlan.name} ({selectedPlan.vehicleType.toUpperCase()})</span>
                  <span className="text-gray-300 text-sm">₹{selectedPlan.price} • {selectedPlan.washes} washes • {selectedPlan.validity}</span>
                </div>
              )}
            </div>

            <div className="glass card-premium rounded-3xl p-8 border border-gold border-opacity-20 shadow-glow-gold animate-scale-in">
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-gold font-semibold mb-3">Full Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-lightGray border border-gold border-opacity-20 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gold font-semibold mb-3">Mobile Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3 text-gold" size={20} />
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        placeholder="9876543210"
                        className="w-full bg-lightGray border border-gold border-opacity-20 text-gray-300 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-gold font-semibold mb-3">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3 text-gold" size={20} />
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-lightGray border border-gold border-opacity-20 text-gray-300 pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gold font-semibold mb-3">City</label>
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      placeholder="Rajahmundry"
                      className="w-full bg-lightGray border border-gold border-opacity-20 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-gold font-semibold mb-3">Area</label>
                    <input
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      type="text"
                      placeholder="NTR Nagar"
                      className="w-full bg-lightGray border border-gold border-opacity-20 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gold font-semibold mb-3">Pincode</label>
                    <input
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      type="text"
                      placeholder="533101"
                      className="w-full bg-lightGray border border-gold border-opacity-20 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gold font-semibold mb-3">Address</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House no, street, landmark"
                    className="w-full min-h-[120px] resize-none bg-lightGray border border-gold border-opacity-20 text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-premium text-black py-3 rounded-lg font-bold transition disabled:opacity-50"
                >
                  {loading ? 'Registering...' : 'Register Now'}
                </button>
              </form>

              <p className="mt-6 text-center text-gray-400 text-sm">
                Already registered?{' '}
                {/* <Link href="/auth/login" className="text-gold hover:text-darkGold font-semibold">
                  Login here
                </Link> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
