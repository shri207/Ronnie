import React from 'react';
import { motion } from 'motion/react';
import { Star, Bookmark, Users, ShieldCheck } from 'lucide-react';

export const StatisticsSection: React.FC = () => {
  const stats = [
    {
      icon: Star,
      value: '4.9',
      label: 'RATING',
      subtext: 'Rated 4.9 out of 5 by our amazing members',
      showStars: true
    },
    {
      icon: Bookmark,
      value: '78+',
      label: 'REVIEWS',
      subtext: 'Positive reviews from satisfied members'
    },
    {
      icon: Users,
      value: '1000+',
      label: 'HAPPY MEMBERS',
      subtext: 'A growing community achieving their goals'
    },
    {
      icon: ShieldCheck,
      value: 'CERTIFIED TRAINERS',
      label: 'EXPERT TEAM',
      subtext: 'Highly certified & experienced trainers to guide you',
      isTextVal: true
    }
  ];

  return (
    <section className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Background Red Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E31E24]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
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
              OUR STRENGTH IN NUMBERS
            </span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-wider uppercase leading-none mb-4">
            REAL RESULTS. <span className="text-[#E31E24]">REAL PEOPLE.</span>
          </h2>

          <p className="font-sans text-gray-300 text-base md:text-lg">
            Numbers that reflect our commitment to your transformation.
          </p>
        </motion.div>

        {/* 4 Large Glass Glowing Number Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card-red rounded-3xl p-8 flex flex-col items-center text-center border border-[#E31E24]/50 shadow-[0_0_30px_rgba(227,30,36,0.25)] hover:border-[#E31E24] hover:shadow-[0_0_40px_rgba(227,30,36,0.5)] hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-[#1c1c1c] border border-[#E31E24] flex items-center justify-center text-[#E31E24] mb-6 shadow-[0_0_20px_rgba(227,30,36,0.4)]">
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Big Glowing Value */}
                <div className={`font-bebas font-black text-white text-glow-red tracking-wide mb-2 ${
                  stat.isTextVal ? 'text-3xl leading-tight' : 'text-6xl md:text-7xl'
                }`}>
                  {stat.value}
                </div>

                {/* Label */}
                <span className="font-bebas text-lg tracking-widest text-[#E31E24] uppercase mb-2">
                  {stat.label}
                </span>

                {/* Stars if Rating */}
                {stat.showStars && (
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E31E24] text-[#E31E24]" />
                    ))}
                  </div>
                )}

                {/* Subtext */}
                <p className="font-sans text-xs text-gray-400 max-w-xs leading-relaxed">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Slogan Banner */}
        <div className="flex items-center justify-center gap-4 text-center">
          <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#E31E24]" />
          <span className="font-bebas text-lg md:text-2xl tracking-[0.25em] text-[#E31E24] uppercase">
            STRONGER BODIES. STRONGER MINDS. STRONGER TOGETHER.
          </span>
          <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#E31E24]" />
        </div>

      </div>
    </section>
  );
};
