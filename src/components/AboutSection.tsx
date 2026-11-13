import React from 'react';
import { SectionHeading } from './SectionHeading';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title according to rules: Background "ABOUT ME" overlaid with "Gresia Sitanggang" */}
        <SectionHeading
          largeTitle="ABOUT ME"
          overlayTitle="Gresia Sitanggang"
          subtitle="Computer Engineering Student at UNNES"
        />

        {/* Translucent Glassmorphic Card blending smoothly with background */}
        <div className="p-8 sm:p-12 md:p-14 rounded-3xl backdrop-blur-2xl shadow-2xl text-center relative overflow-hidden glass-surface-dark border border-white/10 text-white">
          {/* 5-Line Centered Paragraph with High Contrast */}
          <p className="font-poppins text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose text-center max-w-5xl mx-auto font-normal text-white">
            I am a 5th semester Computer Engineering student at Semarang State University with a strong passion for building reliable software systems and intelligent data workflows. My technical interests sit at the intersection of backend web development, secure database architecture, and applied machine learning. Whether I am designing role-based access controls for an inventory system or automating model retraining pipelines, I enjoy turning complex requirements into structured, practical solutions. Beyond coding, my experience leading digital initiatives and technical operations in student organizations has taught me how to communicate clearly and collaborate effectively across diverse teams. Currently, I am looking for internship opportunities where I can contribute to real-world IT systems while continuing to grow as a software and machine learning engineer.
          </p>
        </div>
      </div>
    </section>
  );
};
