import React from 'react';
import { ArrowRight } from 'lucide-react';

const HERO_PHOTO = 'images/me_portrait.png';

export const HomeSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-10 md:pt-36 md:pb-16 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* 3-Section Layout: Left, Center Image, Right in ONE horizontally & vertically aligned row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0 relative">
          
          {/* LEFT SECTION (Cols 1-4): "Hi, I'm" + Name + Distinctly Colored Explore Button */}
          <div className="lg:col-span-4 flex flex-col items-start text-left z-20">
            {/* "Hi, I'm" with Glassmorphism and high contrast */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full mb-4 glass-surface-dark backdrop-blur-md border border-white/15">
              <span className="font-poppins text-sm md:text-base font-semibold tracking-wide text-white">
                Hi, I'm
              </span>
            </div>

            {/* Hero Name: High-contrast Emerald & Mint Gradient (differentiated from blue Explore button) */}
            <h1 className="font-heading font-black tracking-tight text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-300 bg-clip-text text-transparent drop-shadow-sm">
                Gresia Sitanggang
              </span>
            </h1>

            {/* Buttons: Explore Works (Royal Blue/Cobalt Gradient) & Career Journey (Secondary) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => scrollTo('projects')}
                className="group px-6 py-3 rounded-full text-sm font-heading font-bold flex items-center gap-2 gradient-btn-primary focus:outline-none cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('experience')}
                className="px-5 py-3 rounded-full text-sm font-heading font-semibold gradient-btn-secondary focus:outline-none cursor-pointer"
              >
                <span>Experiences</span>
              </button>
            </div>
          </div>

          {/* CENTER SECTION (Cols 5-8): Enlarged Static Hero Photo - NO background, NO border, touches metrics below */}
          <div className="lg:col-span-4 flex items-end justify-center relative my-4 lg:my-0 z-10">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] flex items-end justify-center lg:-mb-10 xl:-mb-12">
              <img
                src={HERO_PHOTO}
                alt="Gresia Sitanggang"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain max-h-[580px] lg:max-h-[640px] scale-105 lg:scale-115 origin-bottom select-none pointer-events-none"
              />
            </div>
          </div>

          {/* RIGHT SECTION (Cols 9-12): Right-aligned Summary & Keywords with NO background, slightly overlapping photo */}
          <div className="lg:col-span-4 flex flex-col items-end text-right z-20 lg:-ml-12 xl:-ml-16">
            <div className="max-w-md">
              {/* Right-aligned summary paragraph with no background */}
              <p className="font-poppins text-sm md:text-base text-slate-100 leading-relaxed font-normal text-right drop-shadow-md">
                Computer Engineering student with interest and project experience in web development, relational databases, and machine learning pipelines. Skilled in building web applications, developing data-driven solutions, and implementing machine learning workflows. Interested in applying technical problem-solving skills to software engineering and information technology environments.
              </p>

              {/* Keywords: Right-aligned, no divider line, uniform high-contrast color */}
              <div className="mt-4 text-right">
                <p className="font-poppins text-xs md:text-sm text-slate-200 leading-relaxed">
                  <strong className="text-white font-bold">Keywords:</strong>{' '}
                  Software Engineering · Web Development<p> Machine Learning & Deep Learning · Data Processing</p>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION DIVIDER & METRIC CAPSULE: Touches bottom of enlarged photo, with thin horizontal divider line in center */}
      <div className="relative mt-8 md:mt-12 w-full">
        {/* Thin horizontal line across the center of this element, slightly contrasting with the background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent z-0 pointer-events-none"
        />

        {/* Centered Pill Capsule connected to bottom of hero photo */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-full px-6 sm:px-10 py-4 glass-surface-dark backdrop-blur-2xl border border-white/12 shadow-2xl">
            <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
              <div className="px-3">
                <span className="block font-heading font-extrabold text-xl sm:text-2xl text-white tabular-nums">
                  44+
                </span>
                <span className="text-xs sm:text-sm font-poppins text-slate-300">
                  Skills on LinkedIn
                </span>
              </div>
              <div className="px-3">
                <span className="block font-heading font-extrabold text-xl sm:text-2xl text-white tabular-nums">
                  5+
                </span>
                <span className="text-xs sm:text-sm font-poppins text-slate-300">
                  Projects & Experiences
                </span>
              </div>
              <div className="px-3">
                <span className="block font-heading font-extrabold text-xl sm:text-2xl text-white tabular-nums">
                  12+
                </span>
                <span className="text-xs sm:text-sm font-poppins text-slate-300">
                  Certifications
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
