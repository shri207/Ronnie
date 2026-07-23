import React from 'react';
import { motion } from 'motion/react';
import { RonnieLogo } from './RonnieLogo';
import { X, Check, ArrowRight, UserCheck, Dumbbell, Salad, Users } from 'lucide-react';

interface TransformationSectionProps {
  onStartJourney: () => void;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({ onStartJourney }) => {
  return (
    <section className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Background Red Smoke and Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E31E24]/20 rounded-full blur-[180px] animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Logo Badge */}
        <div className="flex justify-center mb-6">
          <RonnieLogo size="lg" showTagline={false} />
        </div>

        {/* Main Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl xl:text-[90px] font-black text-white tracking-wider uppercase leading-none mb-2">
            MAKE YOURSELF <span className="text-[#E31E24]">PROUD</span>
          </h2>
        </motion.div>

        {/* Main Split Transformation View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: BEFORE Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 glass-card-red rounded-3xl p-6 border border-[#E31E24]/50 flex flex-col items-center text-center shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-[2px] bg-[#E31E24]" />
              <span className="font-bebas text-2xl tracking-widest text-white uppercase">
                BEFORE
              </span>
              <div className="w-6 h-[2px] bg-[#E31E24]" />
            </div>

            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
                alt="Before Transformation"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-3 w-full text-left font-sans text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-5 h-5 rounded-full bg-red-950 border border-red-600 flex items-center justify-center text-red-500 flex-shrink-0">
                  <X className="w-3 h-3" />
                </div>
                <span>Low Energy</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-5 h-5 rounded-full bg-red-950 border border-red-600 flex items-center justify-center text-red-500 flex-shrink-0">
                  <X className="w-3 h-3" />
                </div>
                <span>No Confidence</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-5 h-5 rounded-full bg-red-950 border border-red-600 flex items-center justify-center text-red-500 flex-shrink-0">
                  <X className="w-3 h-3" />
                </div>
                <span>No Strength</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-5 h-5 rounded-full bg-red-950 border border-red-600 flex items-center justify-center text-red-500 flex-shrink-0">
                  <X className="w-3 h-3" />
                </div>
                <span>Unhealthy Lifestyle</span>
              </div>
            </div>
          </motion.div>

          {/* Center Column: Quote & CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-center text-center p-4"
          >
            {/* Red Glowing Chevron Arrows */}
            <div className="flex items-center gap-1 text-[#E31E24] text-3xl font-black mb-6 text-glow-red animate-pulse">
              <span>❯</span>
              <span>❯</span>
              <span>❯</span>
            </div>

            <p className="font-sans text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-sm">
              Every rep. Every drop of sweat. Every choice you make today brings you closer to a stronger tomorrow.
            </p>

            <div className="font-bebas text-lg md:text-xl text-[#E31E24] tracking-widest uppercase mb-8">
              TRANSFORM TODAY.<br />
              INTO THE BEST VERSION OF YOU.
            </div>

            <button
              onClick={onStartJourney}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E31E24] text-white font-bebas text-2xl tracking-wider flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(227,30,36,0.8)] hover:bg-[#c2141a] transition-all hover:scale-105"
            >
              <span>START YOUR JOURNEY</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Right Column: AFTER Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 glass-card-red rounded-3xl p-6 border-2 border-[#E31E24] flex flex-col items-center text-center shadow-[0_0_40px_rgba(227,30,36,0.4)]"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-[2px] bg-[#E31E24]" />
              <span className="font-bebas text-2xl tracking-widest text-[#E31E24] uppercase">
                AFTER
              </span>
              <div className="w-6 h-[2px] bg-[#E31E24]" />
            </div>

            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-[#E31E24]">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop"
                alt="After Transformation"
                className="w-full h-full object-cover filter contrast-125 brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-3 w-full text-left font-sans text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>High Energy</span>
              </div>
              <div className="flex items-center gap-2 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>More Confidence</span>
              </div>
              <div className="flex items-center gap-2 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Strong Body</span>
              </div>
              <div className="flex items-center gap-2 text-white font-medium">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Healthy Lifestyle</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Feature Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          <div className="flex items-center gap-4 p-2">
            <UserCheck className="w-7 h-7 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-lg text-white block uppercase">EXPERT TRAINERS</span>
              <span className="text-xs text-gray-400 font-sans">Guidance you can trust</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <Dumbbell className="w-7 h-7 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-lg text-white block uppercase">MODERN EQUIPMENT</span>
              <span className="text-xs text-gray-400 font-sans">Train with the best</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <Salad className="w-7 h-7 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-lg text-white block uppercase">NUTRITION SUPPORT</span>
              <span className="text-xs text-gray-400 font-sans">Fuel your transformation</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <Users className="w-7 h-7 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-lg text-white block uppercase">SUPPORTIVE COMMUNITY</span>
              <span className="text-xs text-gray-400 font-sans">Stronger together</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
