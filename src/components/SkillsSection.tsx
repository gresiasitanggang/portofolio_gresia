import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';
import { Linkedin } from 'lucide-react';

// Pemetaan warna statis agar ter-compile sempurna oleh Tailwind CSS
const THEME_STYLES: Record<
  SkillItem['colorTheme'],
  { badge: string; dot: string }> = {
  cobalt: {
    badge: 'border-cyan-500/30 bg-cyan-950/30 text-cyan-300',
    dot: 'bg-cyan-400',},
  emerald: {
    badge: 'border-emerald-500/30 bg-emerald-950/30 text-emerald-300',
    dot: 'bg-emerald-400',},
  plum: {
    badge: 'border-[#6f3dbf]/50 bg-[#6f3dbf]/20 text-[#c4a6f5]',
    dot: 'bg-[#C788FF]',},
  };

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title according to rules: Background "SKILLS" overlaid with "Capabilities & Expertise" */}
        <SectionHeading
          largeTitle="SKILLS"
          overlayTitle="Capabilities & Expertise"
          subtitle="Create opportunities without limit"
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
          {SKILLS_DATA.map((skill) => {
            const theme = THEME_STYLES[skill.colorTheme] || THEME_STYLES.cobalt;

            return (
              <div
                key={skill.id}
                className="px-4 py-3 rounded-2xl border transition-all duration-200 flex items-center justify-between group glass-surface-dark border-white/8 hover:-translate-y-0.5 hover:border-white/15 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${theme.dot} shadow-sm shrink-0`} />
                  <span className="font-heading font-semibold text-xs sm:text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                </div>

                <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-lg border ${theme.badge}`}>
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>

        {/* At the end of the skills list: 1 External Link Button to LinkedIn */}
        <div className="mt-14 text-center">
          <a
            href="https://www.linkedin.com/in/gresia-sitanggang/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-heading font-bold shadow-lg transition-all duration-300 gradient-btn-primary hover:brightness-110"
          >
            <Linkedin size={18} className="text-white" />
            <span>View Complete Skills Assessment on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};