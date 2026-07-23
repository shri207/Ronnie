import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_ITEMS } from '../data/gymData';
import { Dumbbell, UserCheck, IndianRupee, BicepsFlexed, Salad, Clock } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return Dumbbell;
      case 'UserCheck': return UserCheck;
      case 'IndianRupee': return IndianRupee;
      case 'BicepsFlexed': return BicepsFlexed;
      case 'Salad': return Salad;
      case 'Clock': return Clock;
      default: return Dumbbell;
    }
  };

  return (
    <section className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E31E24]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Title */}
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
              WHY CHOOSE
            </span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-wider uppercase leading-none mb-4">
            RO<span className="text-[#E31E24]">NN</span>IE
          </h2>

          <p className="font-sans text-gray-300 text-base md:text-lg tracking-wide">
            Built for results. Backed by passion. Driven by you.
          </p>
        </motion.div>

        {/* 6 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const IconComponent = getIcon(item.icon);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-red rounded-3xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden shadow-2xl"
              >
                {/* Subtle Red Top Glow Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-[#E31E24] shadow-[0_0_15px_#E31E24]" />

                {/* Circular Icon Container */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#1c1c1c] to-[#0d0d0d] border border-[#E31E24]/60 flex items-center justify-center text-[#E31E24] mb-6 shadow-[0_0_20px_rgba(227,30,36,0.3)] group-hover:scale-110 group-hover:border-[#E31E24] transition-all duration-300">
                  <IconComponent className="w-9 h-9" />
                </div>

                {/* Title */}
                <h3 className="font-bebas text-2xl md:text-3xl font-bold text-white tracking-wide uppercase mb-3 group-hover:text-[#E31E24] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
