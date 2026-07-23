import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/gymData';
import { Star, Trophy, Dumbbell, Users, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Background Red Atmospheric Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#E31E24]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="font-bebas text-xl tracking-[0.2em] text-[#E31E24] uppercase">
              WHAT OUR MEMBERS SAY
            </span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-wider uppercase leading-none mb-4">
            REAL PEOPLE. <span className="text-[#E31E24]">REAL RESULTS.</span>
          </h2>

          <p className="font-sans text-gray-300 text-base md:text-lg">
            We're proud to be a part of our members' transformation journey.
          </p>
        </motion.div>

        {/* Top Google Review Summary Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-red rounded-3xl p-6 border border-[#E31E24]/40 max-w-4xl mx-auto mb-16 shadow-[0_0_30px_rgba(227,30,36,0.2)] grid grid-cols-1 md:grid-cols-3 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {/* Rating */}
          <div className="flex items-center gap-4 p-2">
            <span className="font-bebas text-6xl font-black text-white leading-none">4.9</span>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E31E24] text-[#E31E24]" />
                ))}
              </div>
              <span className="font-bebas text-sm text-white tracking-wider block">OUT OF 5</span>
              <span className="text-[10px] text-gray-400 font-sans">Based on Google Reviews</span>
            </div>
          </div>

          {/* Google Badge & Reviews */}
          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <div className="w-12 h-12 rounded-full bg-[#E31E24]/20 border border-[#E31E24] flex items-center justify-center text-[#E31E24] font-black font-bebas text-2xl shadow-[0_0_15px_rgba(227,30,36,0.4)]">
              G
            </div>
            <div>
              <span className="font-bebas text-3xl font-bold text-white leading-none block">78+</span>
              <span className="font-rajdhani text-xs font-bold text-gray-400 uppercase tracking-widest">REVIEWS</span>
            </div>
          </div>

          {/* Happy Members */}
          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bebas text-3xl font-bold text-white leading-none block">1000+</span>
              <span className="font-rajdhani text-xs font-bold text-gray-400 uppercase tracking-widest">HAPPY MEMBERS</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Member Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-red rounded-3xl p-8 border border-[#E31E24]/40 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-2xl"
            >
              {/* Background Quote Watermark */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-[#E31E24]/10 pointer-events-none" />

              <div>
                {/* Header Profile */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#E31E24]"
                    />
                    <div>
                      <h3 className="font-bebas text-xl font-bold text-white tracking-wide">
                        {t.author}
                      </h3>
                      <div className="flex gap-0.5 mt-0.5">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#E31E24] text-[#E31E24]" />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 font-sans block mt-0.5">
                        {t.dateAgo}
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-[#E31E24] font-bebas font-bold">
                    G
                  </div>
                </div>

                {/* Review Headline */}
                <h4 className="font-bebas text-2xl text-[#E31E24] tracking-wide uppercase mb-3">
                  {t.title}
                </h4>

                {/* Body Text */}
                <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6">
                  "{t.review}"
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-rajdhani font-bold text-gray-400 tracking-wider uppercase">
                <span>STRONGER EVERYDAY</span>
                <span className="text-[#E31E24]">VERIFIED REVIEW</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          <div className="flex items-center gap-4 p-2">
            <Trophy className="w-7 h-7 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-lg text-white block">TOP RATED GYM</span>
              <span className="text-xs text-gray-400 font-sans">Trusted by hundreds of fitness enthusiasts.</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <Dumbbell className="w-7 h-7 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-lg text-white block">QUALITY EQUIPMENT</span>
              <span className="text-xs text-gray-400 font-sans">Premium machines for maximum performance.</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <Users className="w-7 h-7 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-lg text-white block">STRONG COMMUNITY</span>
              <span className="text-xs text-gray-400 font-sans">A supportive environment that pushes you forward.</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <ShieldCheck className="w-7 h-7 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-lg text-white block">SAFE & HYGIENIC</span>
              <span className="text-xs text-gray-400 font-sans">Clean, secure and well maintained always.</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
