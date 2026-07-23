import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/gymData';
import { Plus, Minus, ChevronDown, HeadphoneOff, Headphones, ArrowRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('f1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Background Red Atmospheric Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#E31E24]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        
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
              FAQ
            </span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-wider uppercase leading-none mb-4">
            FREQUENTLY ASKED <span className="text-[#E31E24]">QUESTIONS</span>
          </h2>

          <p className="font-sans text-gray-300 text-base md:text-lg">
            Everything you need to know before you begin your transformation.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'glass-card-red border-2 border-[#E31E24] shadow-[0_0_25px_rgba(227,30,36,0.35)]'
                    : 'glass-card border border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left font-bebas text-xl md:text-2xl text-white tracking-wide uppercase"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isOpen ? 'bg-[#E31E24] text-white shadow-[0_0_15px_#E31E24]' : 'bg-white/5 border border-white/10 text-[#E31E24]'
                    }`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                    <span>{faq.question}</span>
                  </div>

                  <ChevronDown className={`w-6 h-6 text-[#E31E24] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 font-sans text-sm md:text-base text-gray-300 leading-relaxed pl-20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-2xl mx-auto shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] flex-shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bebas text-2xl text-white tracking-wide uppercase">
                STILL HAVE QUESTIONS?
              </h4>
              <p className="font-sans text-xs text-gray-400">
                Our team is here to help you!
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 px-8 py-3.5 rounded-xl border border-[#E31E24] text-[#E31E24] font-bebas text-lg tracking-wider flex items-center gap-2 hover:bg-[#E31E24] hover:text-white transition-all shadow-[0_0_15px_rgba(227,30,36,0.2)]"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
