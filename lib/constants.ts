export type ServicePlan = {
  id: string;
  name: string;
  price: number;
  washes: number;
  validity: string;
  features: string[];
  icon: string;
  featured?: boolean;
  vehicleType: 'bike' | 'car';
};

export const MEMBERSHIP_PLANS: Record<'bike' | 'car', ServicePlan[]> = {
  bike: [
    {
      id: 'bike-single',
      name: 'Single Wash',
      price: 199,
      washes: 1,
      validity: '30 days',
      features: ['1 Bike Wash', '24/7 Support', 'Easy Cancellation'],
      icon: '🚲',
      vehicleType: 'bike',
    },
    {
      id: 'bike-gold',
      name: 'Gold',
      price: 599,
      washes: 5,
      validity: '3 months',
      features: ['5 Premium Washes', 'Priority Booking', 'Free Dry Cleaning', 'Monthly Offers'],
      icon: '✨',
      featured: true,
      vehicleType: 'bike',
    },
    {
      id: 'bike-diamond',
      name: 'Diamond',
      price: 1599,
      washes: 15,
      validity: '6 months',
      features: ['15 Premium Washes', 'Priority Support', 'Free Detailing', 'Referral Bonus'],
      icon: '💎',
      vehicleType: 'bike',
    },
    {
      id: 'bike-platinum',
      name: 'Platinum',
      price: 2999,
      washes: 40,
      validity: '12 months',
      features: ['40 Premium Washes', '24/7 VIP Support', 'Free Protection Coat', 'Unlimited Perks'],
      icon: '👑',
      vehicleType: 'bike',
    },
  ],
  car: [
    {
      id: 'car-single',
      name: 'Single Wash',
      price: 499,
      washes: 1,
      validity: '30 days',
      features: ['1 Car Wash', '24/7 Support', 'Easy Cancellation'],
      icon: '🚗',
      vehicleType: 'car',
    },
    {
      id: 'car-monthly',
      name: 'Monthly',
      price: 1499,
      washes: 4,
      validity: '1 month',
      features: ['4 Washes Monthly', 'Priority Booking', 'Free Interior Vacuum'],
      icon: '⭐',
      featured: true,
      vehicleType: 'car',
    },
    {
      id: 'car-quarterly',
      name: 'Quarterly',
      price: 3999,
      washes: 12,
      validity: '3 months',
      features: ['12 Washes', 'Free Wax Coating', 'Free Engine Detailing', 'Exclusive Offers'],
      icon: '💎',
      vehicleType: 'car',
    },
    {
      id: 'car-halfyearly',
      name: 'Half-Yearly',
      price: 7499,
      washes: 30,
      validity: '6 months',
      features: ['30 Premium Washes', 'VIP Support', 'Free Ceramic Coating', 'Referral Rewards'],
      icon: '👑',
      vehicleType: 'car',
    },
  ],
};

export const ALL_SERVICE_PLANS: ServicePlan[] = [
  ...MEMBERSHIP_PLANS.bike,
  ...MEMBERSHIP_PLANS.car,
];

export const getServicePlanById = (id: string) => ALL_SERVICE_PLANS.find((plan) => plan.id === id);

export const TIME_SLOTS = [
  '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM',
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM', '10:00 PM'
];
