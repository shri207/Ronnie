import React from 'react';
import { motion } from 'motion/react';
import { RonnieLogo } from './RonnieLogo';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onJoinToday: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onJoinToday }) => {
  return (
    <section className="relative py-20 bg-[#080808] overflow-hidden border-t border-b border-red-600/30">
      
      {/* Background Red Atmospheric Smoke */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#E31E24]/25 rounded-full blur-[180px] animate-pulse-glow" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="mb-6">
              <RonnieLogo size="md" showTagline={false} />
            </div>

            <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl xl:text-[90px] font-black tracking-tight text-white uppercase leading-[0.88] mb-6">
              <span className="block text-texture-grunge">DISCIPLINE</span>
              <span className="block text-[#E31E24] text-glow-red">BUILDS</span>
              <span className="block text-texture-grunge">FREEDOM</span>
            </h2>

            <p className="font-sans text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
              Join Ronnie Fitness & Gym and become <span className="text-[#E31E24] font-semibold">stronger</span> every day.
            </p>

            <button
              onClick={onJoinToday}
              className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-[#E31E24] text-white font-bebas text-2xl tracking-wider shadow-[0_0_40px_rgba(227,30,36,0.8)] hover:bg-[#c2141a] transition-all hover:scale-105 border border-red-400"
            >
              <span>JOIN TODAY</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* Right Athlete Image Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-2 border-[#E31E24]/60 box-glow-red shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop"
                alt="Muscular Athlete Artwork"
                className="w-full h-full object-cover filter brightness-90 contrast-125 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
