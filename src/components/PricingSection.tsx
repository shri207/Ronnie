import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../data/gymData';
import { HeartPulse, Dumbbell, Crown, CheckCircle2, ClipboardList, Sparkles, Shield, Droplets, Lock, Users, Cross, Percent } from 'lucide-react';

interface PricingSectionProps {
  onOpenJoinModal: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenJoinModal }) => {
  const getPlanIcon = (id: string) => {
    switch (id) {
      case 'starter': return HeartPulse;
      case 'professional': return Dumbbell;
      case 'elite': return Crown;
      default: return Dumbbell;
    }
  };

  return (
    <section id="membership" className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Background Red Atmosphere */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#E31E24]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="font-bebas text-xl tracking-[0.2em] text-[#E31E24] uppercase">
              CHOOSE YOUR PLAN
            </span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-wider uppercase leading-none mb-3">
            BUILT FOR <span className="text-[#E31E24]">EVERY GOAL</span>
          </h2>

          <p className="font-sans text-gray-300 text-base md:text-lg">
            Simple. Transparent. Powerful.
          </p>
        </motion.div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan, index) => {
            const IconComponent = getPlanIcon(plan.id);
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'glass-card-red border-2 border-[#E31E24] shadow-[0_0_40px_rgba(227,30,36,0.6)] lg:-translate-y-4'
                    : 'glass-card border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E31E24] text-white font-bebas text-sm tracking-widest px-4 py-1 rounded-full shadow-[0_0_15px_#E31E24] uppercase flex items-center gap-1">
                    <span>★ MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Icon Circle */}
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#1a1a1a] border border-[#E31E24]/60 flex items-center justify-center text-[#E31E24] mb-4 shadow-[0_0_20px_rgba(227,30,36,0.3)]">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Plan Name & Tagline */}
                  <div className="text-center mb-6">
                    <h3 className="font-bebas text-3xl md:text-4xl font-black text-white tracking-wider uppercase mb-1">
                      {plan.name}
                    </h3>
                    <span className="font-bebas text-sm tracking-widest text-[#E31E24] uppercase">
                      {plan.tagline}
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8 pb-6 border-b border-white/10">
                    <div className="font-bebas text-5xl md:text-6xl font-black text-white leading-none">
                      ₹{plan.price}
                    </div>
                    <span className="font-rajdhani text-xs font-bold text-gray-400 uppercase tracking-widest block mt-2">
                      {plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-gray-300 font-sans text-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#E31E24] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenJoinModal(plan.id)}
                  className={`w-full py-4 rounded-xl font-bebas text-xl tracking-wider transition-all duration-300 ${
                    isPopular
                      ? 'bg-[#E31E24] text-white shadow-[0_0_25px_rgba(227,30,36,0.7)] hover:bg-[#c2141a]'
                      : 'bg-[#E31E24] text-white hover:bg-[#c2141a] shadow-[0_0_15px_rgba(227,30,36,0.3)]'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner: Registration Fee & Included Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          {/* Left: Registration Fee */}
          <div className="lg:col-span-3 flex items-center gap-4 pr-6 border-r-0 lg:border-r border-white/10">
            <div className="w-14 h-14 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] flex-shrink-0">
              <ClipboardList className="w-7 h-7" />
            </div>
            <div>
              <span className="font-rajdhani text-xs font-bold text-gray-400 uppercase tracking-wider block">
                REGISTRATION FEE
              </span>
              <div className="font-bebas text-3xl font-black text-[#E31E24] leading-none">
                ₹500
              </div>
              <span className="text-[10px] text-gray-400 font-sans uppercase">
                ONE-TIME PAYMENT
              </span>
            </div>
          </div>

          {/* Center: Included With All Plans */}
          <div className="lg:col-span-6 text-center">
            <span className="font-bebas text-sm tracking-[0.2em] text-[#E31E24] uppercase block mb-3">
              INCLUDED WITH ALL PLANS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              <div className="flex flex-col items-center gap-1.5 p-2">
                <Droplets className="w-5 h-5 text-gray-300" />
                <span className="text-[10px] font-rajdhani font-bold text-gray-300 uppercase leading-tight">CLEAN & HYGIENIC ENVIRONMENT</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2">
                <Droplets className="w-5 h-5 text-gray-300" />
                <span className="text-[10px] font-rajdhani font-bold text-gray-300 uppercase leading-tight">SHOWER FACILITY</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2">
                <Lock className="w-5 h-5 text-gray-300" />
                <span className="text-[10px] font-rajdhani font-bold text-gray-300 uppercase leading-tight">LOCKER FACILITY</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2">
                <Users className="w-5 h-5 text-gray-300" />
                <span className="text-[10px] font-rajdhani font-bold text-gray-300 uppercase leading-tight">COMMUNITY ACCESS</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2 col-span-2 sm:col-span-1">
                <Cross className="w-5 h-5 text-gray-300" />
                <span className="text-[10px] font-rajdhani font-bold text-gray-300 uppercase leading-tight">FIRST AID SUPPORT</span>
              </div>
            </div>
          </div>

          {/* Right: Special Offers */}
          <div className="lg:col-span-3 flex items-center gap-4 pl-0 lg:pl-6 border-l-0 lg:border-l border-white/10">
            <div className="w-14 h-14 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] flex-shrink-0">
              <Percent className="w-7 h-7" />
            </div>
            <div>
              <span className="font-bebas text-base text-white tracking-wider uppercase block">
                SPECIAL OFFERS
              </span>
              <p className="text-xs text-gray-400 font-sans">
                DISCOUNTS ON ANNUAL MEMBERSHIPS
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
