import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Building2, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title according to rules: Background "EXPERIENCE" overlaid with "Career Journey" */}
        <SectionHeading
          largeTitle="EXPERIENCE"
          overlayTitle="Track Record"
          subtitle="No experience, No bright future"
        />

        {/* Roadmap Timeline with consistent vertical structure */}
        <div className="relative pl-6 sm:pl-10 md:pl-12">
          {/* Vertical subtle connector line */}
          <div
            aria-hidden="true"
            className="absolute left-2.5 sm:left-4 md:left-5 top-4 bottom-4 w-0.5 rounded-full bg-gradient-to-b from-cyan-500 via-teal-500 to-emerald-500 opacity-60"
          />

          <div className="space-y-10">
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="relative group">
                
                {/* Node icon circle */}
                <div
                  className="absolute -left-6 sm:-left-10 md:-left-12 top-2 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg"
                >
                  <Briefcase size={16} />
                </div>

                {/* Experience Card in Pure Glassmorphism */}
                <div
                  className="p-6 sm:p-8 rounded-3xl glass-surface-dark backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:translate-x-1"
                >
                  {/* Top Header: Position & Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="font-heading font-black text-lg sm:text-xl md:text-2xl text-white">
                      {exp.position}
                    </h3>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-heading bg-white/10 text-white border border-white/15 shrink-0 self-start sm:self-auto">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Company & Location */}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-poppins text-slate-300 mb-5">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Building2 size={14} className="text-emerald-400" />
                      {exp.company}
                    </span>
                    <span className="text-slate-500">·</span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <MapPin size={13} className="text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bulleted Achievements */}
                  <div className="space-y-2.5">
                    {exp.achievements.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className="text-emerald-400 shrink-0 mt-1"
                        />
                        <p className="font-poppins text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
