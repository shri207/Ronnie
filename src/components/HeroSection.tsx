import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, MessageSquare, Users, Award } from 'lucide-react';

interface HeroSectionProps {
  onOpenJoinModal: (planId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-12 flex flex-col justify-between overflow-hidden bg-[#080808]">
      
      {/* Background Red Atmospheric Smoke and Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Red Glow Radial Orbs */}
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#E31E24]/25 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#E31E24]/15 rounded-full blur-[120px]" />
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/60 to-transparent z-10" />
      </div>

      {/* Main Hero Content Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Headlines & Call to Actions */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Subtitle Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="font-bebas text-lg md:text-xl tracking-[0.2em] text-[#E31E24] uppercase">
              MAKE YOURSELF PROUD
            </span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>

          {/* Large Condensed Display Heading */}
          <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl xl:text-[100px] leading-[0.88] font-black uppercase tracking-tight text-white mb-6">
            <span className="block text-texture-grunge drop-shadow-md">
              BUILD YOUR
            </span>
            <span className="block text-[#E31E24] text-glow-red">
              STRONGEST SELF
            </span>
          </h1>

          {/* Body Description */}
          <p className="font-sans text-gray-300 text-base sm:text-lg md:text-xl max-w-xl font-normal leading-relaxed mb-8">
            Train with discipline, transform with confidence, and become the strongest version of yourself.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onOpenJoinModal('professional')}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E31E24] text-white font-bebas text-xl tracking-wider shadow-[0_0_30px_rgba(227,30,36,0.6)] hover:shadow-[0_0_45px_rgba(227,30,36,0.9)] hover:bg-[#c2141a] transition-all duration-300 border border-red-500/60"
            >
              <span>JOIN NOW</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#141414]/90 text-white font-bebas text-xl tracking-wider border border-white/15 hover:border-[#E31E24]/60 hover:bg-white/5 transition-all duration-300 backdrop-blur-md"
            >
              <span>EXPLORE PROGRAMS</span>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Hero Cinematic Muscular Athlete Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Background Red Smoke and Lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10" />
            
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop"
              alt="Ronnie Fitness Athlete Back Pose"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-125 hover:scale-105 transition-transform duration-700"
            />

            {/* Glowing Red Atmosphere Edge */}
            <div className="absolute inset-0 ring-1 ring-inset ring-[#E31E24]/40 rounded-3xl pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Floating Bottom Statistics Capsule (Exact match from uploaded image) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-30 max-w-7xl mx-auto px-4 md:px-8 w-full mt-auto pt-6"
      >
        <div className="glass-card rounded-2xl p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 shadow-2xl">
          
          {/* Stat 1: Rating */}
          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] shadow-[0_0_15px_rgba(227,30,36,0.3)]">
              <Star className="w-6 h-6 fill-[#E31E24]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bebas text-3xl font-bold text-white leading-none">4.9</span>
              </div>
              <span className="font-rajdhani text-xs font-bold text-gray-400 tracking-wider block uppercase">RATING</span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#E31E24] text-[#E31E24]" />
                ))}
              </div>
            </div>
          </div>

          {/* Stat 2: Reviews */}
          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] shadow-[0_0_15px_rgba(227,30,36,0.3)]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bebas text-3xl font-bold text-[#E31E24] leading-none">78+</span>
              <span className="font-rajdhani text-xs font-bold text-gray-400 tracking-wider block uppercase">REVIEWS</span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#E31E24] text-[#E31E24]" />
                ))}
              </div>
            </div>
          </div>

          {/* Stat 3: Members */}
          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] shadow-[0_0_15px_rgba(227,30,36,0.3)]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bebas text-3xl font-bold text-white leading-none">1000+</span>
              <span className="font-rajdhani text-xs font-bold text-gray-400 tracking-wider block uppercase">MEMBERS</span>
            </div>
          </div>

          {/* Stat 4: Certified Trainers */}
          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] shadow-[0_0_15px_rgba(227,30,36,0.3)]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bebas text-2xl font-bold text-white leading-none uppercase">CERTIFIED</span>
              <span className="font-rajdhani text-xs font-bold text-gray-400 tracking-wider block uppercase">TRAINERS</span>
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
};
