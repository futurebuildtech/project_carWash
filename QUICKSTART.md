# 🚀 EXPRESSWASH40 - Quick Start Guide

## ⚡ Get Running in 5 Minutes

### Step 1: Install Dependencies
```bash
cd expresswash40
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
```
http://localhost:3000
```

---

## 🎯 Demo Accounts & Test Credentials

### Customer Login
- **Phone:** `9876543210`
- **OTP:** `123456`

### Demo User Details
- **Name:** John Doe
- **Vehicle:** Honda City (Car)
- **Address:** Rajahmundry

### Admin Login
- **Access:** Login with phone, then visit `/admin`
- **Admin Name:** "Admin" (change in user store)

---

## 📱 Pages & Routes

### Public Routes
- `/` - Homepage
- `/auth/login` - OTP Login
- `#plans` - Membership Plans
- `#services` - Services

### Protected Routes
- `/dashboard` - Customer Dashboard
- `/booking` - Book Wash Service
- `/admin` - Admin Dashboard

---

## 🎨 Glassmorphism & Animations

All premium effects are automatically applied via CSS classes:

### Use Glassmorphism
```jsx
<div className="glass">Content</div>
<div className="glass-dark">Dark variant</div>
<div className="glass-light">Light variant</div>
```

### Apply Animations
```jsx
<div className="animate-fade-in">Fade in</div>
<div className="animate-slide-up">Slide up</div>
<div className="animate-scale-in">Scale in</div>
<div className="animate-float">Float</div>
<div className="animate-pulse-gold">Pulse gold</div>
```

### Premium Cards
```jsx
<div className="card-premium glass rounded-2xl p-8">
  Premium content with hover effects
</div>
```

---

## 💳 Membership Plans Quick Reference

### Bike Plans
```
Single:    ₹199   → 1 wash
Gold:      ₹599   → 5 washes (POPULAR)
Diamond:   ₹1,599 → 15 washes
Platinum:  ₹2,999 → 40 washes
```

### Car Plans
```
Single:        ₹499   → 1 wash
Monthly:       ₹1,499 → 4 washes (POPULAR)
Quarterly:     ₹3,999 → 12 washes
Half-Yearly:   ₹7,499 → 30 washes
```

---

## 📧 Email Configuration (Optional)

For real email sending, set up Gmail App Password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Create App Password for Mail
4. Add to `.env.local`:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-password
```

---

## 🛠️ Key Technologies

| Tech | Purpose |
|------|---------|
| Next.js 14 | React Framework |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Zustand | State Management |
| Lucide Icons | Beautiful Icons |

---

## 🎨 Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  gold: '#D4AF37',      // Change primary color
  darkGold: '#C9A227',  // Change hover color
  black: '#1a1a1a',     // Change dark bg
  darkBg: '#0d0d0d',    // Change deep dark
  lightGray: '#2a2a2a', // Change secondary bg
}
```

---

## 📱 Add New Membership Plan

Edit `lib/constants.ts`:

```typescript
export const MEMBERSHIP_PLANS = {
  car: [
    {
      id: 'car-new-plan',
      name: 'Your Plan',
      price: 9999,
      washes: 50,
      validity: '12 months',
      features: ['Feature 1', 'Feature 2'],
      icon: '👑',
      featured: true,
    }
  ]
};
```

---

## 🌍 Add New City

Edit `lib/constants.ts`:

```typescript
export const CITIES = [
  'Rajahmundry',
  'Visakhapatnam',
  'Vijayawada',
  'Your City'
];
```

---

## 📊 Admin Dashboard

Access admin features at `/admin` after login.

Features:
- 📈 Revenue overview
- 👥 Active members count
- 📅 Today's bookings
- ⚠️ Pending issues
- 📋 Member management
- 💰 Financial reports

---

## 🔧 Available Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start               # Start production server

# Quality
npm run lint            # Check code quality
```

---

## 📁 Project Structure Quick Guide

```
App Routes
├── /                    → Home with hero & plans
├── /auth/login         → OTP login
├── /dashboard          → User dashboard
├── /booking            → Book wash
└── /admin              → Admin panel

Components
├── Header.tsx          → Navigation
├── PremiumHero.tsx     → Hero with animations
├── Features.tsx        → Service features
├── MembershipPlans.tsx → Plans display
└── Footer.tsx          → Footer

Utilities
├── lib/store.ts        → Zustand state
├── lib/constants.ts    → Plans & data
├── lib/bookings.ts     → Booking logic
└── lib/email.ts        → Email service
```

---

## 🎯 Features Matrix

| Feature | Status | Notes |
|---------|--------|-------|
| OTP Auth | ✅ | Simulated in demo |
| Membership Plans | ✅ | Fully implemented |
| Booking System | ✅ | 6 AM - 10 PM slots |
| Dashboard | ✅ | Membership tracking |
| Admin Panel | ✅ | Revenue reports |
| Glassmorphism | ✅ | All components |
| Animations | ✅ | 15+ animations |
| Mobile Responsive | ✅ | Mobile-first |
| Email Service | ⚙️ | Needs config |
| Payments | 🔄 | Ready for integration |
| Database | 🔄 | Ready for integration |
| WhatsApp | 🔄 | Ready for integration |

---

## 🚀 Deploy to Production

### Vercel (Recommended)
```bash
# Push to GitHub
git push

# Go to vercel.com
# Import repository
# Add environment variables
# Deploy automatically
```

### Docker
```bash
docker build -t expresswash40 .
docker run -p 3000:3000 expresswash40
```

---

## ❓ Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Styles not loading?
```bash
rm -rf .next
npm run build
npm run dev
```

### Component not updating?
Make sure to use `'use client'` in client components

---

## 📞 Support

- **Email:** hello@expresswash40.com
- **Phone:** +91 9876 543210

---

## 🎓 Next Steps

1. ✅ Get it running locally
2. ✅ Explore the dashboard
3. ✅ Check admin panel
4. ✅ Review code structure
5. ⬜ Integrate real database
6. ⬜ Setup payments
7. ⬜ Configure email
8. ⬜ Deploy to production

---

**Happy Coding! 🚗✨**

For full documentation, see [README.md](./README.md)
