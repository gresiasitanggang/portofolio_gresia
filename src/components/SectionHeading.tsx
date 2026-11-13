import React from 'react';

interface SectionHeadingProps {
  largeTitle: string;    // e.g. "ABOUT ME", "EDUCATION", "EXPERIENCE", etc. (subtle, very transparent Playfair Display)
  overlayTitle: string;  // e.g. "Gresia Sitanggang", "Academic Background", "Knowledge Showcase" (Solid plain text)
  subtitle?: string;     // One descriptive paragraph in font Poppins
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  largeTitle,
  overlayTitle,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`relative mb-14 md:mb-16 select-none ${centered ? 'text-center' : 'text-left'}`}>
      {/* Dual-layer Title Container */}
      <div className="relative inline-flex flex-col items-center justify-center w-full">
        {/* Layer 1: Giant underlay title (subtle background aura, strictly single-line) */}
        <span
          aria-hidden="true"
          className="font-playfair font-black tracking-tight text-white/[0.06] uppercase leading-none pointer-events-none text-[63px] sm:text-[87px] md:text-[111px] lg:text-[143px] xl:text-[160px] whitespace-nowrap"
        >
          {largeTitle}
        </span>

        {/* Layer 2: Plain overlaid standard title - Strictly single line, solid high contrast uniform color, no background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white drop-shadow-sm whitespace-nowrap">
            {overlayTitle}
          </h2>
        </div>
      </div>

      {/* Layer 3: Sub-paragraph in font Poppins */}
      {subtitle && (
        <p className="mt-5 max-w-2xl mx-auto font-poppins text-sm md:text-base text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
