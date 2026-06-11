'use client';

export default function PremiumHero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 px-4 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-gold to-transparent opacity-10 blur-3xl rounded-full animate-float"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-gold to-transparent opacity-5 blur-3xl rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main heading */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-block px-4 py-2 glass-light rounded-full border border-gold border-opacity-30 mb-6">
              <span className="text-gold text-sm font-semibold">🌟 Premium Wash Experience</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-2 animate-slide-up">Premium Wash.</span>
              <span className="block gradient-gold animate-slide-up" style={{animationDelay: '0.2s'}}>Luxury Care.</span>
            </h1>
          </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
          Premium doorstep car and bike washing with luxury experience. Choose your membership and let us handle the rest.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 animate-scale-in" style={{animationDelay: '0.6s'}}>
          <div className="glass-light rounded-lg p-6 border border-gold border-opacity-20">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">5000+</div>
            <div className="text-gray-400 text-sm md:text-base">Happy Customers</div>
          </div>
          <div className="glass-light rounded-lg p-6 border border-gold border-opacity-20">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">50K+</div>
            <div className="text-gray-400 text-sm md:text-base">Washes Done</div>
          </div>
          <div className="glass-light rounded-lg p-6 border border-gold border-opacity-20">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">4.9★</div>
            <div className="text-gray-400 text-sm md:text-base">Rating</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.8s'}}>
          <a href="#plans" className="btn-premium text-black px-8 py-4 rounded-lg font-bold text-lg shadow-glow-gold">
            Choose Plan
          </a>
          <a href="#about" className="glass-light border border-gold border-opacity-40 text-gold px-8 py-4 rounded-lg font-bold text-lg hover:border-gold hover:border-opacity-100 transition">
            Learn More
          </a>
        </div>

        {/* Feature tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: '1s' }}>
          {['🚗 Doorstep Service', '⚡ Express 30min', '💎 Premium Quality', '📱 Easy Booking'].map((tag, i) => (
            <span key={i} className="glass-light px-4 py-2 rounded-full text-gold text-sm border border-gold border-opacity-20">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.25fr_0.95fr] animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="glass-light rounded-[2rem] border border-gold border-opacity-20 p-8 shadow-glow-gold">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Overall Reach</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gold">Premium Wash Performance</h3>
              </div>
              <span className="inline-flex items-center rounded-full bg-gold/15 text-gold px-4 py-2 text-sm font-semibold">
                6+ years of trusted service
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl overflow-hidden bg-[#111]/90 border border-gold/10 p-6">
                <div className="mb-6 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-black/20 p-6 flex items-end justify-center">
                  <span className="text-6xl">🚘</span>
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-3">Car Washing</p>
                <div className="space-y-2">
                  <p className="text-gray-300">Monthly plan built for city sedans, SUVs and premium cars.</p>
                  <p className="text-lg text-gold font-semibold">₹1,499 / 4 washes</p>
                  <p className="text-gray-400 text-sm">Doorstep service, interior detail, premium polish.</p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden bg-[#111]/90 border border-gold/10 p-6">
                <div className="mb-6 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-black/20 p-6 flex items-end justify-center">
                  <span className="text-6xl">🏍️</span>
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-3">Bike Washing</p>
                <div className="space-y-2">
                  <p className="text-gray-300">Fast monthly cleanups for bikes, scooters and performance rides.</p>
                  <p className="text-lg text-gold font-semibold">₹599 / 5 washes</p>
                  <p className="text-gray-400 text-sm">Spotless shine, wheel polish, eco-friendly wash.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-[2rem] border border-gold border-opacity-20 p-8 shadow-glow-gold">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Monthly Membership</p>
              <h3 className="text-3xl font-bold text-gold">Monthly Plan Highlights</h3>
            </div>
            <div className="space-y-4">
              <div className="glass-light rounded-3xl border border-gold/15 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Car Monthly</p>
                    <p className="text-2xl font-bold text-gold">₹1,499</p>
                  </div>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs text-gold uppercase tracking-[0.2em]">Best Seller</span>
                </div>
                <p className="mt-3 text-gray-400 text-sm">4 premium washes, doorstep pickup, interior sanitization, express service.</p>
              </div>
              <div className="glass-light rounded-3xl border border-gold/15 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Bike Monthly</p>
                    <p className="text-2xl font-bold text-gold">₹599</p>
                  </div>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs text-gold uppercase tracking-[0.2em]">Super Value</span>
                </div>
                <p className="mt-3 text-gray-400 text-sm">5 fast washes, premium foam, chain care, glossy finish.</p>
              </div>
              <div className="glass-light rounded-3xl border border-gold/15 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Customer Success</p>
                    <p className="text-2xl font-bold text-gold">5000+</p>
                  </div>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-xs text-gold uppercase tracking-[0.2em]">Trusted</span>
                </div>
                <p className="mt-3 text-gray-400 text-sm">From premium sedans to daily commutes, our members love the shine.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
