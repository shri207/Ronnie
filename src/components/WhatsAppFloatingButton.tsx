import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';
import { GYM_PHONE_DISPLAY, GYM_WHATSAPP_LINK } from '../data/gymData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      
      {/* Quick Popup Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-80 md:w-96 bg-[#121212] border border-[#25D366]/40 rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(37,211,102,0.3)] font-sans"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#128C7E] to-[#25D366] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/images/logo-transparent.png"
                    alt="Ronnie Gym Logo"
                    className="w-10 h-10 rounded-full bg-black/40 p-1 object-contain border border-white/30"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#128C7E]" />
                </div>
                <div>
                  <h4 className="font-bebas text-lg tracking-wider text-white uppercase leading-tight">
                    Ronnie Fitness &amp; Gym
                  </h4>
                  <span className="text-[11px] text-white/90 font-medium block">
                    Online • Typically replies instantly
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-black/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#0a0a0a] space-y-3">
              <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-3 max-w-[85%] text-xs text-gray-200 shadow-md">
                <p className="font-semibold text-[#25D366] mb-1">Welcome to Ronnie Fitness &amp; Gym! 💪</p>
                <p>How can we help you today? Reach out on WhatsApp for membership plans, personal training, or workout schedules!</p>
                <span className="text-[10px] text-gray-400 block text-right mt-1">Just now</span>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 bg-[#141414] border-t border-white/10 flex items-center justify-between gap-2">
              <span className="text-xs text-gray-400">Call/WhatsApp: <strong className="text-white">{GYM_PHONE_DISPLAY}</strong></span>
              <a
                href={GYM_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-bebas text-base tracking-wider hover:bg-[#20ba5a] transition-all shadow-[0_0_15px_rgba(37,211,102,0.4)]"
              >
                <span>CHAT NOW</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating WhatsApp Icon Button */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Pulsing Outer Ring */}
        <div className="absolute -inset-2 bg-[#25D366] rounded-full blur-md opacity-50 animate-ping pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.7)] border-2 border-white/20 transition-transform duration-300"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8 fill-white" />
          )}
        </button>
      </motion.div>

    </div>
  );
};
