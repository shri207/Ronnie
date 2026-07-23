import React from 'react';
import { PROGRAMS } from '../data/gymData';
import { X, Check, Calendar, Dumbbell, UserCheck, Salad, ArrowRight } from 'lucide-react';

interface ProgramDetailModalProps {
  programId: string | null;
  onClose: () => void;
  onOpenJoinModal: (planId?: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  programId,
  onClose,
  onOpenJoinModal
}) => {
  if (!programId) return null;

  const program = PROGRAMS.find(p => p.id === programId) || PROGRAMS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in" onClick={onClose}>
      <div className="relative w-full max-w-3xl bg-[#121212] border border-[#E31E24]/60 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(227,30,36,0.5)] overflow-hidden max-h-[90vh] overflow-y-auto font-sans" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-[#E31E24] text-white transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 rounded-2xl overflow-hidden mb-6 border border-white/10">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="font-bebas text-xs text-[#E31E24] tracking-widest uppercase block">OFFICIAL PROGRAM</span>
            <h3 className="font-bebas text-4xl text-white font-black uppercase tracking-wider">{program.title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
          {program.detailedDescription}
        </p>

        {/* Schedule & Coach */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-[#E31E24]" />
            <div>
              <span className="text-[10px] text-gray-400 uppercase block">RECOMMENDED SCHEDULE</span>
              <span className="font-bebas text-lg text-white">{program.schedule}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
            <UserCheck className="w-6 h-6 text-[#E31E24]" />
            <div>
              <span className="text-[10px] text-gray-400 uppercase block">LEAD INSTRUCTOR</span>
              <span className="font-bebas text-lg text-white">{program.leadTrainer}</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="font-bebas text-xl text-white tracking-wider uppercase mb-3">PROGRAM HIGHLIGHTS</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(program.highlights || []).map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                <Check className="w-4 h-4 text-[#E31E24]" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenJoinModal('professional');
            }}
            className="flex-1 py-3.5 rounded-xl bg-[#E31E24] text-white font-bebas text-xl tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(227,30,36,0.6)]"
          >
            <span>JOIN THIS PROGRAM</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};
