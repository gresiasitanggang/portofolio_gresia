import React from 'react';
import { Mail, MapPin, Linkedin, Github, Instagram, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-16 glass-surface-dark backdrop-blur-2xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Footer Layout with Translucent Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* LEFT COLUMN (Cols 1-5): Brand, Narrative & Copyright 2026 */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-2xl flex items-center justify-center font-heading font-black text-sm bg-gradient-to-tr from-[#1d4ed8] via-[#0284c7] to-[#10b981] text-slate-950 shadow-md">
                GS
              </div>
              <h3 className="font-heading font-black text-xl text-white tracking-tight">
                Gresia Sitanggang
              </h3>
            </div>

            <p className="font-poppins text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Computer Engineering student with interest and project experience in web development, relational databases, and machine learning pipelines. 
            </p>

            {/* Copyright placed directly below the narrative on the left */}
            <p className="mt-6 font-poppins text-xs text-slate-400">
              © 2026 Gresia Sitanggang. All rights reserved.
            </p>
          </div>

          {/* CENTER COLUMN (Cols 6-8): Contact & Back to Top Button */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">
              Direct Contact
            </h4>

            <div className="space-y-3.5 font-poppins text-xs sm:text-sm text-slate-200 mb-6">
              <a
                href="mailto:sitangganggresia@gmail.com"
                className="group flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-emerald-500/15 text-emerald-400 shrink-0">
                  <Mail size={15} />
                </div>
                <span className="font-medium group-hover:underline">
                  sitangganggresia@gmail.com
                </span>
              </a>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-cyan-500/15 text-cyan-400 shrink-0 mt-0.5">
                  <MapPin size={15} />
                </div>
                <div>
                  <span className="block font-medium text-white">
                    Semarang, Indonesia
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Available for Global Remote Roles
                  </span>
                </div>
              </div>
            </div>

            {/* Back to top button placed directly below direct contact in the center */}
            <button
              onClick={scrollToTop}
              className="px-5 py-2.5 rounded-full flex items-center gap-2 font-heading font-semibold text-xs gradient-btn-secondary hover:text-white cursor-pointer shadow-lg"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>

          {/* RIGHT COLUMN (Cols 9-12): Social Media & External Portfolio Link */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">
              Connect & Portfolio
            </h4>

            <div className="flex flex-col gap-2.5 w-full md:w-auto">
              <a
                href="https://linkedin.com/in/gresia-sitanggang"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-2xl flex items-center justify-between gap-3 text-xs font-heading font-semibold transition-all duration-300 glass-surface-dark border border-white/10 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/30"
              >
                <span className="flex items-center gap-2">
                  <Linkedin size={14} className="text-[#0a66c2]" />
                  <span>LinkedIn Profile</span>
                </span>
                <ExternalLink size={12} className="opacity-70" />
              </a>

              <a
                href="https://github.com/gresiasitanggang"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-2xl flex items-center justify-between gap-3 text-xs font-heading font-semibold transition-all duration-300 glass-surface-dark border border-white/10 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/30"
              >
                <span className="flex items-center gap-2">
                  <Github size={14} />
                  <span>GitHub Repositories</span>
                </span>
                <ExternalLink size={12} className="opacity-70" />
              </a>

              <a
                href="https://www.instagram.com/gresia.dastg/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-2xl flex items-center justify-between gap-3 text-xs font-heading font-semibold transition-all duration-300 glass-surface-dark border border-white/10 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/30"
              >
                <span className="flex items-center gap-2">
                  <Instagram size={14} className="text-cyan-400" />
                  <span>Instagram Account</span>
                </span>
                <ExternalLink size={12} className="opacity-70" />
              </a>

              {/* External Product Portfolio Link */}
              <a
                href="https://drive.google.com/drive/folders/1oFFTmNgP5gP_bts13Ck7sOdJ0C1slKIU?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-2xl flex items-center justify-between gap-3 text-xs font-heading font-semibold transition-all duration-300 glass-surface-dark border border-white/10 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/30"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink size={14} className="text-emerald-400" />
                  <span>External Portfolio</span>
                </span>
                <ExternalLink size={12} className="opacity-70" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
