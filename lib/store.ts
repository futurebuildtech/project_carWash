import { create } from 'zustand';

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  vehicleType: 'bike' | 'car';
  vehicleModel: string;
  area: string;
  city: string;
  pincode: string;
  address: string;
}

export interface ServiceSelection {
  id: string;
  name: string;
  price: number;
  washes: number;
  validity: string;
  features: string[];
  icon: string;
  vehicleType: 'bike' | 'car';
  selectedAt: string;
}

export interface Membership {
  id: string;
  userId: string;
  type: 'single' | 'gold' | 'diamond' | 'platinum';
  vehicleType: 'bike' | 'car';
  remainingWashes: number;
  usedWashes: number;
  expiryDate: string;
  startDate: string;
  amount: number;
}

export interface Booking {
  id: string;
  userId: string;
  membershipId: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  createdAt: string;
}

interface UserStore {
  user: User | null;
  memberships: Membership[];
  bookings: Booking[];
  selectedService: ServiceSelection | null;
  serviceHistory: ServiceSelection[];
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
  setSelectedService: (service: ServiceSelection) => void;
  addServiceHistory: (service: ServiceSelection) => void;
  addMembership: (membership: Membership) => void;
  addBooking: (booking: Booking) => void;
  updateMembership: (membership: Membership) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  memberships: [],
  bookings: [],
  selectedService: null,
  serviceHistory: [],
  isAuthenticated: false,
  setUser: (user: User) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false, selectedService: null }),
  setSelectedService: (service: ServiceSelection) => set({ selectedService: service }),
  addServiceHistory: (service: ServiceSelection) =>
    set((state) => ({ serviceHistory: [...state.serviceHistory, service] })),
  addMembership: (membership: Membership) =>
    set((state) => ({ memberships: [...state.memberships, membership] })),
  addBooking: (booking: Booking) =>
    set((state) => ({ bookings: [...state.bookings, booking] })),
  updateMembership: (membership: Membership) =>
    set((state) => ({
      memberships: state.memberships.map((m) => (m.id === membership.id ? membership : m)),
    })),
}));
