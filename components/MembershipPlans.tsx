'use client';

import { Check } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '@/lib/constants';
import { useState } from 'react';

export default function MembershipPlans() {
  const [activeType, setActiveType] = useState<'bike' | 'car'>('car');

  const plans = MEMBERSHIP_PLANS[activeType];

  return (
    <section id="plans" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-gold">Premium Memberships</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan that fits your lifestyle. Unlock premium benefits and savings.
          </p>
        </div>

        {/* Type Selector */}
        <div className="flex justify-center gap-4 mb-12 animate-slide-up">
          {(['car', 'bike'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-8 py-3 rounded-lg font-bold transition duration-300 ${
                activeType === type
                  ? 'btn-premium text-black shadow-glow-gold'
                  : 'glass-light border border-gold border-opacity-20 text-gold hover:border-opacity-40'
              }`}
            >
              {type === 'car' ? '🚗 Car' : '🏍️ Bike'}
            </button>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`card-premium rounded-2xl overflow-hidden border transition duration-300 animate-scale-in`}
              style={{
                animationDelay: `${index * 0.1}s`,
                borderColor: plan.featured ? '#D4AF37' : 'rgba(212, 175, 55, 0.2)',
              }}
            >
              {plan.featured && (
                <div className="bg-gradient-to-r from-gold to-darkGold px-6 py-2 text-black text-center font-bold">
                  ⭐ FEATURED
                </div>
              )}

              <div className={`${plan.featured ? 'glass' : 'glass-light'} p-8 h-full flex flex-col border-0`}>
                {/* Icon and Name */}
                <div className="mb-6">
                  <div className="text-5xl mb-3">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.validity}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gold">₹{plan.price}</span>
                    <span className="text-gray-400 ml-2">/plan</span>
                  </div>
                  <p className="text-gold text-sm mt-2">{plan.washes} washes included</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className={`w-full py-3 rounded-lg font-bold transition duration-300 ${
                  plan.featured
                    ? 'btn-premium text-black shadow-glow-gold'
                    : 'glass-light border border-gold border-opacity-30 text-gold hover:border-opacity-100'
                }`}>
                  Get {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-400 mb-4">Need help choosing? </p>
          <button className="text-gold hover:text-darkGold transition font-semibold underline">
            View Comparison →
          </button>
        </div>
      </div>
    </section>
  );
}
