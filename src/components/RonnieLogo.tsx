import React from 'react';

interface RonnieLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  layout?: 'horizontal' | 'vertical' | 'auto';
}

export const RonnieLogo: React.FC<RonnieLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  layout = 'horizontal'
}) => {
  // Height classes for the transparent logo image
  const logoHeightClasses = {
    sm: 'h-11 md:h-13',
    md: 'h-14 md:h-16',
    lg: 'h-20 md:h-24',
    xl: 'h-28 md:h-32'
  };

  const titleTextSize = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-4xl md:text-5xl'
  };

  const subtitleTextSize = {
    sm: 'text-[9px] md:text-[10px] tracking-[0.2em]',
    md: 'text-[11px] md:text-[12px] tracking-[0.25em]',
    lg: 'text-[13px] md:text-[15px] tracking-[0.3em]',
    xl: 'text-[16px] md:text-[18px] tracking-[0.35em]'
  };

  const isVertical = layout === 'vertical';

  return (
    <div className={`inline-flex ${isVertical ? 'flex-col items-center text-center gap-3' : 'items-center gap-3.5'} select-none group cursor-pointer ${className}`}>
      
      {/* Transparent Logo Graphic with Glowing Red Drop Shadows */}
      <div className="relative flex-shrink-0">
        {/* Red Ambient Glow Shadow Halo */}
        <div className="absolute -inset-2 bg-[#E31E24]/30 rounded-full blur-xl opacity-60 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-300 pointer-events-none" />
        
        {/* Transparent Logo Image with Shadow Effects */}
        <img
          src="/images/logo-transparent.png"
          alt="Ronnie Fitness & Gym Transparent Logo"
          className={`relative ${logoHeightClasses[size]} w-auto object-contain filter drop-shadow-[0_0_15px_rgba(227,30,36,0.75)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-all duration-300`}
        />
      </div>

      {/* Brand Typography Text Block */}
      <div className="flex flex-col justify-center leading-none">
        {/* Main Title: RONNIE with Red Glow */}
        <div className={`flex items-center ${isVertical ? 'justify-center' : ''}`}>
          <span className={`font-bebas ${titleTextSize[size]} font-black italic tracking-wider text-[#E31E24] drop-shadow-[0_0_12px_rgba(227,30,36,0.8)]`}>
            RONNIE
          </span>
        </div>

        {/* Subtitle: FITNESS & GYM */}
        <div className={`flex items-center gap-1 mt-0.5 ${isVertical ? 'justify-center' : ''}`}>
          <span className={`font-rajdhani ${subtitleTextSize[size]} font-bold text-white uppercase`}>
            FITNESS <span className="text-[#E31E24] font-black">&amp;</span> GYM
          </span>
        </div>

        {/* Tagline: Make Yourself Proud */}
        {showTagline && (
          <span className={`font-serif italic text-[10px] md:text-[11px] text-[#E31E24] font-semibold tracking-wide mt-1 opacity-90 ${isVertical ? 'text-center' : ''}`}>
            Make Yourself Proud
          </span>
        )}
      </div>

    </div>
  );
};
