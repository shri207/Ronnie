import React from 'react';
import { motion } from 'motion/react';
import { TRAINERS } from '../data/gymData';
import { Instagram, Facebook, Youtube, Dumbbell, Star, Award, Trophy, Users } from 'lucide-react';

export const TrainersSection: React.FC = () => {
  return (
    <section id="trainers" className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Side Vertical Watermarks */}
      <div className="hidden xl:block absolute left-4 top-1/3 -rotate-90 origin-left font-bebas text-sm tracking-[0.3em] text-white/20 select-none uppercase">
        DISCIPLINE STRENGTH
      </div>
      <div className="hidden xl:block absolute left-4 bottom-12 -rotate-90 origin-left font-bebas text-sm tracking-[0.3em] text-[#E31E24]/30 select-none uppercase">
        MAKE YOURSELF PROUD
      </div>
      <div className="hidden xl:block absolute right-4 top-1/2 rotate-90 origin-right font-bebas text-sm tracking-[0.3em] text-white/20 select-none uppercase">
        STRONGER EVERYDAY
      </div>

      {/* Red Ambient Backdrop Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#E31E24]/15 rounded-full blur-[150px] pointer-events-none" />

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
              OUR EXPERT
            </span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-wider uppercase leading-none mb-4">
            TRAIN<span className="text-[#E31E24]">ERS</span>
          </h2>

          <p className="font-sans text-gray-300 text-base md:text-lg">
            Learn. Train. Transform. With the best by your side.
          </p>
        </motion.div>

        {/* 3 Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-red rounded-3xl overflow-hidden border border-[#E31E24]/50 hover:border-[#E31E24] transition-all duration-300 group flex flex-col justify-between shadow-2xl hover:shadow-[0_0_35px_rgba(227,30,36,0.4)]"
            >
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden bg-[#1a1a1a]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />
              </div>

              {/* Information Section */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-[#121212]/90">
                <div>
                  <h3 className="font-bebas text-3xl font-black text-white tracking-wide uppercase mb-0.5">
                    {trainer.name}
                  </h3>
                  <span className="font-bebas text-xs tracking-widest text-[#E31E24] uppercase block mb-4">
                    {trainer.role}
                  </span>

                  {/* Specialization & Experience */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10 mb-4 text-xs font-sans">
                    <div className="flex items-center gap-2">
                      <Dumbbell className="w-4 h-4 text-[#E31E24]" />
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase">SPECIALIZATION</span>
                        <span className="text-white font-semibold">{trainer.specialization}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#E31E24]" />
                      <div>
                        <span className="text-gray-400 block text-[10px] uppercase">EXPERIENCE</span>
                        <span className="text-white font-semibold">{trainer.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="font-sans text-xs text-gray-300 italic leading-relaxed mb-6">
                    "{trainer.quote}"
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <a
                    href={trainer.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E31E24] hover:border-[#E31E24] transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={trainer.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E31E24] hover:border-[#E31E24] transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={trainer.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E31E24] hover:border-[#E31E24] transition-all"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          <div className="flex items-center gap-4 p-2">
            <Users className="w-8 h-8 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-3xl font-black text-white leading-none block">10K+</span>
              <span className="font-rajdhani text-xs font-bold text-gray-400 uppercase">Happy Members</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <Award className="w-8 h-8 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-2xl font-black text-white leading-none block uppercase">Certified</span>
              <span className="font-rajdhani text-xs font-bold text-gray-400 uppercase">Expert Trainers</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <Dumbbell className="w-8 h-8 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-3xl font-black text-white leading-none block">100+</span>
              <span className="font-rajdhani text-xs font-bold text-gray-400 uppercase">Transformations</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 pt-4 md:pt-2">
            <Trophy className="w-8 h-8 text-[#E31E24]" />
            <div>
              <span className="font-bebas text-3xl font-black text-white leading-none block">4.9</span>
              <span className="font-rajdhani text-xs font-bold text-gray-400 uppercase">Member Rating</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
