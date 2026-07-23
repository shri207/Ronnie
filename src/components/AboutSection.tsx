import React from 'react';
import { motion } from 'motion/react';
import { Dumbbell, UserCheck, HeartPulse, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Dumbbell,
      title: 'MODERN EQUIPMENT',
      description: 'State-of-the-art machines and premium equipment for a complete workout experience.'
    },
    {
      icon: UserCheck,
      title: 'CERTIFIED TRAINERS',
      description: 'Expert and certified trainers who guide, motivate, and help you achieve your fitness goals.'
    },
    {
      icon: HeartPulse,
      title: 'STRENGTH & CARDIO',
      description: 'Comprehensive training programs for strength building, endurance, and overall fitness.'
    },
    {
      icon: Users,
      title: 'SUPPORTIVE COMMUNITY',
      description: 'A friendly, motivating community that inspires you to stay consistent and achieve more.'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Background Red Atmosphere */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#E31E24]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Framed Bicep Curl Athlete Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#E31E24]/80 box-glow-red p-2 bg-[#121212]">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                
                {/* Background Vertical Watermark Text */}
                <div className="absolute left-6 top-8 z-10 pointer-events-none select-none flex flex-col gap-1 font-bebas text-2xl tracking-widest leading-none">
                  <span className="text-white/40">DISCIPLINE</span>
                  <span className="text-white/40">STRENGTH</span>
                  <span className="text-white/40">CONFIDENCE</span>
                  <span className="text-[#E31E24]">YOU</span>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop"
                  alt="Ronnie Athlete Bicep Curl"
                  className="w-full h-full object-cover filter brightness-90 contrast-125 hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text and 2x2 Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="font-bebas text-xl tracking-[0.2em] text-[#E31E24] uppercase">
                ABOUT US
              </span>
              <div className="w-8 h-[2px] bg-[#E31E24]" />
            </div>

            {/* Headline */}
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-none mb-6">
              MORE THAN <span className="text-[#E31E24]">JUST A GYM</span>
            </h2>

            {/* Description Paragraph */}
            <p className="font-sans text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
              Ronnie Fitness & Gym is built on the belief that true transformation comes from discipline, dedication, and the right environment. We're not just a gym—we're a community that pushes you to be stronger every day, inside and out.
            </p>

            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl p-6 border border-white/10 hover:border-[#E31E24]/60 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] mb-4 group-hover:scale-110 shadow-[0_0_15px_rgba(227,30,36,0.2)] transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bebas text-xl md:text-2xl text-white tracking-wide mb-2 group-hover:text-[#E31E24] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
