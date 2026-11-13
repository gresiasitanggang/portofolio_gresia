import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title according to rules: Background "EDUCATION" overlaid with "Academic Background" */}
        <SectionHeading
          largeTitle="EDUCATION"
          overlayTitle="Academic Background"
          subtitle="You might think that programmers aren't artists, but programming is an extremely creative profession. It's logic based creativity."
        />

        {/* Roadmap with Elegant Vertical Connecting Line */}
        <div className="relative pl-6 sm:pl-10 md:pl-12">
          {/* Vertical subtle connector line */}
          <div
            aria-hidden="true"
            className="absolute left-2.5 sm:left-4 md:left-5 top-4 bottom-4 w-0.5 rounded-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-blue-500 opacity-60"
          />

          <div className="space-y-10">
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.id} className="relative group">
                
                {/* Node icon circle */}
                <div
                  className="absolute -left-6 sm:-left-10 md:-left-12 top-2 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg"
                >
                  <GraduationCap size={16} />
                </div>

                {/* Education Card in Pure Glassmorphism */}
                <div
                  className="p-6 sm:p-8 rounded-3xl glass-surface-dark backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:translate-x-1"
                >
                  {/* Top Bar: Institution Name & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="font-heading font-black text-lg sm:text-xl md:text-2xl text-white">
                      {edu.institution}
                    </h3>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-heading bg-white/10 text-white border border-white/15 shrink-0 self-start sm:self-auto">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Degree */}
                  <p className="font-heading font-semibold text-sm sm:text-base text-cyan-300 mb-3">
                    {edu.degree}
                  </p>

                  {/* 2-Line Description */}
                  <p className="font-poppins text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Combined Coursework & Academic Standing (No emojis, no separate colored background badge) */}
                  <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/8 space-y-2">
                    <p className="font-poppins text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <strong className="text-white font-semibold">Key Coursework:</strong> {edu.coursework}
                    </p>
                    <p className="font-poppins text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <strong className="text-white font-semibold">Academic Standing:</strong> {edu.gpaOrRank}
                    </p>
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
