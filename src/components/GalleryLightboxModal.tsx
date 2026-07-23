import React from 'react';
import { GalleryItem } from '../types';
import { X } from 'lucide-react';

interface GalleryLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in" onClick={onClose}>
      <div className="relative max-w-4xl w-full bg-[#121212] border border-[#E31E24]/60 rounded-3xl p-4 overflow-hidden shadow-[0_0_50px_rgba(227,30,36,0.5)]" onClick={(e) => e.stopPropagation()}>
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-black/80 hover:bg-[#E31E24] text-white transition-colors border border-white/20 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative w-full max-h-[75vh] min-h-[300px] flex items-center justify-center rounded-2xl overflow-hidden mb-4 bg-black/60">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl"
          />
        </div>

        <div className="p-2 flex justify-between items-center font-sans">
          <div>
            <span className="font-bebas text-xs text-[#E31E24] tracking-widest uppercase block">{item.category}</span>
            <h3 className="font-bebas text-2xl text-white tracking-wide">{item.title}</h3>
          </div>
          <span className="font-bebas text-sm text-gray-400 border border-white/10 px-3 py-1 rounded-full">RONNIE FITNESS GYM</span>
        </div>

      </div>
    </div>
  );
};
