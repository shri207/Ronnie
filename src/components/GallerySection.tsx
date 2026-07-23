import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';
import { Camera, ArrowRight, Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenJoinModal: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox, onOpenJoinModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', ...Array.from(new Set(GALLERY_ITEMS.map(item => item.category)))];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Background Atmosphere Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#E31E24]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="font-bebas text-xl tracking-[0.2em] text-[#E31E24] uppercase">
              OUR GALLERY
            </span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>

          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-wider uppercase leading-none mb-4">
            BUILT IN <span className="text-[#E31E24]">DISCIPLINE.</span> SHOWN IN <span className="text-[#E31E24]">RESULTS.</span>
          </h2>

          <p className="font-sans text-gray-300 text-base md:text-lg">
            Moments from the gym. Real people. Real progress.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-bebas text-sm md:text-base tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#E31E24] text-white shadow-[0_0_15px_rgba(227,30,36,0.6)]'
                    : 'bg-[#141414] text-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => onOpenLightbox(item)}
              className="relative group rounded-2xl overflow-hidden aspect-[4/3] bg-[#1a1a1a] border border-white/10 hover:border-[#E31E24] cursor-pointer shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bebas text-xs text-[#E31E24] tracking-widest block uppercase">
                      {item.category}
                    </span>
                    <h4 className="font-bebas text-lg text-white tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E31E24] text-white flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Motivation Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] flex-shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bebas text-2xl text-white tracking-wide uppercase">
                MORE MOMENTS, MORE MOTIVATION
              </h4>
              <p className="font-sans text-xs text-gray-400">
                Every rep. Every drop of sweat. Every step forward.
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
