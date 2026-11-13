import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { Github, AlertCircle, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onModalOpenChange?: (isOpen: boolean) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onModalOpenChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const categories = ['All', 'Software Engineering', 'Machine Learning', 'Digital Media'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  // Notify parent component about modal open state to hide website header
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
        setActiveModalIndex((prev) =>
          prev !== null ? (prev + 1) % filteredProjects.length : 0
        );
      }
      if (e.key === 'ArrowLeft') {
        setActiveModalIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredProjects.length) % filteredProjects.length
            : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, filteredProjects.length]);

  const activeProject: ProjectItem | null =
    activeModalIndex !== null ? filteredProjects[activeModalIndex] : null;

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title according to rules: Background "PROJECTS" overlaid with "Featured Works" */}
        <SectionHeading
          largeTitle="PROJECTS"
          overlayTitle="Featured Works"
          subtitle="I'm not just a good programmer. I'm a great programmer with good habits."
        />

        {/* Interactive Filter Tabs (All with gradients) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveModalIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all duration-300 focus:outline-none cursor-pointer ${
                selectedCategory === cat
                  ? 'gradient-btn-primary shadow-lg shadow-blue-950/40 text-white font-bold'
                  : 'text-slate-300 hover:text-white gradient-btn-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: Cards are fully clickable to open detailed carousel popup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveModalIndex(idx)}
              className="rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 glass-surface-dark backdrop-blur-2xl border border-white/10 hover:border-cyan-500/50 hover:-translate-y-1.5 shadow-2xl group cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveModalIndex(idx);
                }
              }}
              aria-label={`Open details for ${project.title}`}
            >
              <div>
                {/* Visual Demonstration Mockup Image Banner (Category moved to description) */}
                <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Scrim with Project Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-5 flex items-end">
                    <h4 className="font-heading font-extrabold text-lg text-white drop-shadow-md leading-tight group-hover:text-cyan-300 transition-colors">
                      {project.title.split('—')[0]}
                    </h4>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  {/* Category Tag: moved to top of project description */}
                  <div className="mb-3">
                    <span className="px-2.5 py-1 rounded-xl text-[10px] font-mono uppercase tracking-wider bg-white/5 text-cyan-300 border border-cyan-500/30 inline-block">
                      {project.category}
                    </span>
                  </div>

                  {/* Concise Project Description */}
                  <p className="font-poppins text-xs sm:text-sm text-slate-200 leading-relaxed mb-4 line-clamp-3">
                    {project.challenges}
                  </p>

                  {/* Interactive Visual Cue to Open Popup */}
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-heading font-semibold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all">
                    <span>View project details</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Carousel Popup Modal: concept identical to Gallery modal */}
      {activeProject && activeModalIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-200 select-none"
          onClick={() => setActiveModalIndex(null)}
        >
          {/* Close button in top-right corner */}
          <button
            onClick={() => setActiveModalIndex(null)}
            className="absolute top-5 right-5 sm:top-7 sm:right-7 w-12 h-12 rounded-full bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-black/90 hover:from-rose-600 hover:to-orange-600 border border-white/20 hover:border-rose-400 text-white flex items-center justify-center transition-all z-30 cursor-pointer shadow-2xl"
            aria-label="Close project modal"
          >
            <X size={22} />
          </button>

          {/* Main Layout: Outside Left Button + 2-Column Modal Container + Outside Right Button */}
          <div
            className="relative w-full max-w-8xl flex items-center justify-center gap-2 sm:gap-4 md:gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Outside Previous Button on Left */}
            <button
              onClick={() =>
                setActiveModalIndex(
                  (activeModalIndex - 1 + filteredProjects.length) %
                    filteredProjects.length
                )
              }
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-gradient-to-r from-blue-950/70 via-slate-900/80 to-blue-900/70 hover:from-blue-600 hover:to-cyan-600 border border-white/20 hover:border-cyan-400 text-white flex items-center justify-center hover:scale-110 shadow-2xl transition-all duration-200 cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft size={32} />
            </button>

            {/* 2-Column Modal Container: Left Image + Right Detail Description */}
            <div className="flex-1 max-w-7xl rounded-3xl overflow-hidden shadow-2xl flex flex-col bg-slate-950 border border-white/15">
              <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[82vh] overflow-y-auto lg:overflow-hidden">
                
                {/* LEFT COLUMN (Cols 1-5): Project Demonstration Mockup Image */}
                <div className="lg:col-span-5 relative bg-black flex items-center justify-center min-h-[240px] sm:min-h-[300px] lg:min-h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                  <img
                    src={activeProject.imageSrc}
                    alt={activeProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Category Pill on top-left of modal photo */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-300">
                      {activeProject.category}
                    </span>
                  </div>
                </div>

                {/* RIGHT COLUMN (Cols 6-12): Detailed Information */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[82vh] overflow-y-auto">
                  <div>
                    {/* Title and Duration side-by-side */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="font-heading font-black text-xl sm:text-2xl text-white leading-snug">
                        {activeProject.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shrink-0 self-start sm:self-auto">
                        {activeProject.duration}
                      </span>
                    </div>

                    {/* Subtitle: "Associated with ..." */}
                    <p className="font-heading font-semibold text-xs sm:text-sm text-emerald-400 mb-4">
                      {activeProject.associatedWith}
                    </p>

                    {/* Full Project Description */}
                    <ul className="list-disc list-outside ml-4 space-y-2 font-poppins text-xs sm:text-sm text-slate-200 leading-relaxed mb-5">
                      {activeProject.description.map((point, index) => (
                        <li key={index} className="pl-1">
                          {point}
                        </li>))}
                    </ul>

                    {/* Technical Challenge Callout */}
                    <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/25 mb-5">
                      <div className="flex items-start gap-2.5">
                        <AlertCircle size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-xs font-heading font-bold text-cyan-300 uppercase tracking-wider mb-1">
                            Project Purpose
                          </span>
                          <p className="font-poppins text-xs sm:text-sm text-slate-200 leading-relaxed">
                            {activeProject.challenges}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills / Technologies Section */}
                    <div className="mb-6">
                      <span className="block text-xs font-heading font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Technologies & Skills
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {activeProject.techStack.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2.5 py-1 rounded-xl text-[11px] sm:text-xs font-mono font-medium bg-white/5 text-cyan-200 border border-cyan-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Code Button Link */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold gradient-btn-primary hover:brightness-110 shadow-lg shadow-blue-950/40 transition-all duration-300 cursor-pointer"
                    >
                      <Github size={15} />
                      <span>View Repo & Documentation</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Minimalist Carousel Pagination Dots at Bottom */}
              <div className="p-3 bg-slate-950/90 border-t border-white/10 flex items-center justify-center gap-2">
                {filteredProjects.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveModalIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeModalIndex === dotIdx
                        ? 'w-7 bg-cyan-400 shadow-md shadow-cyan-500/50'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Jump to project ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Outside Next Button on Right */}
            <button
              onClick={() =>
                setActiveModalIndex(
                  (activeModalIndex + 1) % filteredProjects.length
                )
              }
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-gradient-to-r from-blue-900/70 via-slate-900/80 to-blue-950/70 hover:from-cyan-600 hover:to-blue-600 border border-white/20 hover:border-cyan-400 text-white flex items-center justify-center hover:scale-110 shadow-2xl transition-all duration-200 cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
