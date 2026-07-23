import React from 'react';
import { motion } from 'motion/react';
import { PROGRAMS } from '../data/gymData';
import { Dumbbell, BicepsFlexed, Flame, Weight, HeartPulse, UserCheck, ArrowRight } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgram: (programId: string) => void;
  onOpenJoinModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram, onOpenJoinModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell': return Dumbbell;
      case 'BicepsFlexed': return BicepsFlexed;
      case 'Flame': return Flame;
      case 'Weight': return Weight;
      case 'HeartPulse': return HeartPulse;
      case 'UserCheck': return UserCheck;
      default: return Dumbbell;
    }
  };

  return (
    <section id="programs" className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Red Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#E31E24]/15 rounded-full blur-[140px] pointer-events-none" />

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
              OUR PROGRAMS
            </span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-wider uppercase leading-none mb-4">
            TRAIN LIKE A <span className="text-[#E31E24]">CHAMPION</span>
          </h2>

          <p className="font-sans text-gray-300 text-base md:text-lg">
            Programs designed to transform your body, elevate your strength, and unlock your best self.
          </p>
        </motion.div>

        {/* 6 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PROGRAMS.map((program, index) => {
            const IconComponent = getIcon(program.iconName);
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden border border-[#E31E24]/40 hover:border-[#E31E24] transition-all duration-300 group flex flex-col justify-between shadow-2xl hover:shadow-[0_0_30px_rgba(227,30,36,0.3)]"
              >
                {/* Image & Icon Overlay Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                  
                  {/* Floating Red Icon */}
                  <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-[#121212]/90 border border-[#E31E24] flex items-center justify-center text-[#E31E24] shadow-[0_0_20px_rgba(227,30,36,0.5)] backdrop-blur-md">
                    <IconComponent className="w-7 h-7" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bebas text-3xl font-bold text-white tracking-wide uppercase mb-1 group-hover:text-[#E31E24] transition-colors">
                      {program.title}
                    </h3>
                    <span className="font-bebas text-sm tracking-widest text-[#E31E24] uppercase block mb-3">
                      {program.subtitle}
                    </span>
                    <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6">
                      {program.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectProgram(program.id)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white font-bebas text-base tracking-wider hover:border-[#E31E24] hover:text-[#E31E24] transition-all group-hover:translate-x-1"
                  >
                    <span>EXPLORE PROGRAM</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] flex-shrink-0">
              <Dumbbell className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bebas text-2xl text-white tracking-wide uppercase">
                READY TO TRANSFORM?
              </h4>
              <p className="font-sans text-xs text-gray-400">
                Join Ronnie Fitness & Gym and start your journey today.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenJoinModal}
            className="flex-shrink-0 px-8 py-3.5 rounded-xl bg-[#E31E24] text-white font-bebas text-lg tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(227,30,36,0.6)] hover:bg-[#c2141a] transition-all"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
