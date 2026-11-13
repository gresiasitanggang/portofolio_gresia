import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { GALLERY_DATA } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera, Calendar } from 'lucide-react';

interface GallerySectionProps {
  onModalOpenChange?: (isOpen: boolean) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onModalOpenChange,
}) => {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Notify parent component about modal open state to completely hide the top header
  useEffect(() => {
    const isOpen = activeModalIndex !== null;
    if (onModalOpenChange) {
      onModalOpenChange(isOpen);
    }
  }, [activeModalIndex, onModalOpenChange]);

  // Keyboard navigation for carousel modal (Escape to close, Left/Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') setActiveModalIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveModalIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_DATA.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setActiveModalIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_DATA.length) % GALLERY_DATA.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex]);

  const activeItem = activeModalIndex !== null ? GALLERY_DATA[activeModalIndex] : null;

  return (
    <section id="gallery" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title according to rules: Background "GALLERY" overlaid with "Behind the Moments" */}
        <SectionHeading
          largeTitle="GALLERY"
          overlayTitle="Behind the Moments"
          subtitle="If debugging is the process of removing the bugs, then programming must be the process of putting them in"
        />

        {/* Masonry Grid: No hover blur, ONLY title displayed on photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-[230px]">
          {GALLERY_DATA.map((item, idx) => {
            const isTall = idx === 0 || idx === 4 || idx === 7;
            const isWide = idx === 1;

            return (
              <div
                key={item.id}
                onClick={() => setActiveModalIndex(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 ${
                  isTall ? 'sm:row-span-2' : ''
                } ${isWide ? 'lg:col-span-2' : ''} glass-surface-dark border border-white/10 shadow-2xl`}
              >
                {/* Visual Image without blur on hover */}
                {item.imageSrc ? (
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-105`}
                  >
                    <Camera size={36} className="text-white/40" />
                  </div>
                )}

                {/* Scrim Overlay: ONLY the title is shown, no category, date, or location */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-heading font-extrabold text-sm sm:text-base text-white leading-snug drop-shadow-md line-clamp-2">
                      {item.title}
                    </h4>
                  </div>

                  {/* Expand icon indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={14} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Popup Lightbox Carousel Modal: Outside left/right buttons, pagination dots, hides header */}
      {activeItem && activeModalIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-200 select-none"
          onClick={() => setActiveModalIndex(null)}
        >
          {/* Close button in top-right corner with gradient */}
          <button
            onClick={() => setActiveModalIndex(null)}
            className="absolute top-5 right-5 sm:top-7 sm:right-7 w-12 h-12 rounded-full bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-black/90 hover:from-rose-600 hover:to-orange-600 border border-white/20 hover:border-rose-400 text-white flex items-center justify-center transition-all z-30 cursor-pointer shadow-2xl"
            aria-label="Close dialog"
          >
            <X size={22} />
          </button>

          {/* Main Layout: Left Button (Outside) + Photo Container + Right Button (Outside) */}
          <div
            className="relative w-full max-w-5xl flex items-center justify-center gap-2 sm:gap-4 md:gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Outside Previous Button on the Left of the photo with gradient */}
            <button
              onClick={() =>
                setActiveModalIndex(
                  (activeModalIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length
                )
              }
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-gradient-to-r from-blue-950/70 via-slate-900/80 to-blue-900/70 hover:from-blue-600 hover:to-cyan-600 border border-white/20 hover:border-cyan-400 text-white flex items-center justify-center hover:scale-110 shadow-2xl transition-all duration-200 cursor-pointer"
              aria-label="Previous moment"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Photo & Description Container with translucent glassmorphism */}
            <div className="flex-1 max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col glass-surface-dark backdrop-blur-3xl border border-white/15">
              {/* Media viewer */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[55vh] bg-slate-950 flex items-center justify-center overflow-hidden">
                {/* Top Right: Month and Year Photo was Taken */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-slate-950/75 border border-white/20 backdrop-blur-md shadow-xl z-20 flex items-center gap-1.5">
                  <Calendar size={13} className="text-cyan-400" />
                  <span className="font-heading font-bold text-xs text-white tracking-wide">
                    {activeItem.date}
                  </span>
                </div>

                {activeItem.imageSrc ? (
                  <img
                    src={activeItem.imageSrc}
                    alt={activeItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${activeItem.gradient} flex items-center justify-center p-8 text-center`}
                  >
                    <Camera size={48} className="text-white/40" />
                  </div>
                )}
              </div>

              {/* Modal Detail Info */}
              <div className="p-5 sm:p-7 bg-slate-950/60 backdrop-blur-xl text-white">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl md:text-2xl text-white mb-2 leading-snug">
                  {activeItem.title}
                </h3>

                {/* Minimalist Carousel Pagination Dots */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  {GALLERY_DATA.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveModalIndex(dotIdx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activeModalIndex === dotIdx
                          ? 'w-7 bg-cyan-400 shadow-md shadow-cyan-500/50'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Jump to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Outside Next Button on the Right of the photo with gradient */}
            <button
              onClick={() =>
                setActiveModalIndex((activeModalIndex + 1) % GALLERY_DATA.length)
              }
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-gradient-to-r from-blue-900/70 via-slate-900/80 to-blue-950/70 hover:from-cyan-600 hover:to-blue-600 border border-white/20 hover:border-cyan-400 text-white flex items-center justify-center hover:scale-110 shadow-2xl transition-all duration-200 cursor-pointer"
              aria-label="Next moment"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
