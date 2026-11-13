import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Search, Award, ExternalLink } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCerts = CERTIFICATIONS_DATA.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title: Background "CERTIFICATIONS", Standard Title "Knowledge Showcase" */}
        <SectionHeading
          largeTitle="CERTIFICATIONS"
          overlayTitle="Knowledge Showcase"
          subtitle="Keep learning and progressing for future career"
        />

        {/* Quick Filter Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="px-4 py-2.5 rounded-2xl flex items-center gap-2.5 glass-surface-dark border border-white/10">
            <Search size={15} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Filter by keyword, skill, or issuer (e.g. AWS, Kubernetes, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm font-poppins text-white placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-2.5 py-1 rounded-full text-xs font-heading font-semibold gradient-btn-secondary text-slate-200 hover:text-white cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 18 Certifications in a Compact, Sleek List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-3xl transition-all duration-300 flex flex-col justify-between glass-surface-dark backdrop-blur-2xl border border-white/10 hover:border-cyan-500/40 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                {/* Header row: Issuer Name & Year (Icon removed, divider removed) */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-heading font-semibold text-cyan-300 truncate max-w-[200px]">
                    {cert.issuer}
                  </span>

                  <span className="text-xs font-mono font-medium text-slate-400">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Certification Title */}
                <h4 className="font-heading font-bold text-sm sm:text-base text-white leading-snug group-hover:text-cyan-200 transition-colors mb-4">
                  {cert.title}
                </h4>
              </div>

              {/* 3 Glassmorphism Skill Divs underneath (e.g. ETL, Python, Deep Learning style) */}
              <div className="grid grid-cols-3 gap-1.5 pt-2">
                {cert.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2 rounded-xl text-center glass-surface-dark border border-white/10 backdrop-blur-md"
                  >
                    <span className="block text-[10px] sm:text-[11px] font-heading font-medium text-slate-200 truncate" title={skill}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* At the end of the list: External Link Button with Gradient */}
        <div className="mt-14 text-center">
          <a
            href="https://www.linkedin.com/in/gresia-sitanggang/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-heading font-extrabold gradient-btn-primary hover:brightness-110 shadow-xl transition-all duration-300"
          >
            <Award size={18} className="text-cyan-200" />
            <span>View All 13 Certificates on LinkedIn</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};
