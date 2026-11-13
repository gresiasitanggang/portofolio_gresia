import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  isHidden?: boolean;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'skills', label: 'Skills' },
  { id: 'gallery', label: 'Gallery' },
];

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  isHidden = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (isHidden) {
    return null;
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-3xl pointer-events-auto transition-all duration-300 px-4 py-2.5 sm:py-3 flex items-center justify-between gap-4 floating-header-dark ${
          scrolled ? 'shadow-2xl scale-[0.99]' : ''
        }`}
      >
        {/* Brand Lockup */}
        <button
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none shrink-0 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-2xl flex items-center justify-center font-heading font-black text-sm transition-all duration-300 bg-gradient-to-tr from-[#2d459d] via-[#1dfcff] to-[#2aa23f] text-slate-950 shadow-md shadow-cyan-900/40">
            GS
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-tight text-white leading-tight group-hover:text-cyan-300 transition-colors">
              Gresia Sitanggang
            </span>
            <span className="text-[10px] font-poppins text-slate-400 font-medium">
              Software & AI
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links with animated active indicator */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-[#2d459d]/80 to-[#1dfcff]/70 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Hamburger */}
        <div className="lg:hidden flex items-center shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation"
            className="w-9 h-9 rounded-2xl flex items-center justify-center text-slate-200 hover:bg-slate-800/50 transition-colors focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Modal */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-5xl mx-auto mt-2 p-4 rounded-3xl pointer-events-auto transition-all animate-in fade-in slide-in-from-top-3 duration-200 floating-header-dark">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-3 py-2.5 rounded-xl text-xs font-heading font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                      : 'text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-poppins">
              sitangganggresia@gmail.com
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
