import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { SkillsSection } from './components/SkillsSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState<boolean>(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  // Set dark theme text styling on body
  useEffect(() => {
    document.body.classList.add('text-slate-100');
  }, []);

  // Section Observer for active header navigation highlighting
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'education',
      'experience',
      'projects',
      'certifications',
      'skills',
      'gallery',
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Permanent Independent Fullscreen Background Mesh: Midnight Black, Dark Blue, and glowing Orange */}
      <div
        className="fixed inset-0 bg-independent-mesh pointer-events-none -z-50"
        aria-hidden="true"
      />

      {/* Floating Curved Oval Rectangular Header (Hidden when Gallery or Projects Carousel Modal is Open) */}
      <Header
        activeSection={activeSection}
        isHidden={isGalleryModalOpen || isProjectModalOpen}
      />

      {/* Main Single-Page Sections */}
      <main className="relative z-10">
        <HomeSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection onModalOpenChange={setIsProjectModalOpen} />
        <CertificationsSection />
        <SkillsSection />
        <GallerySection onModalOpenChange={setIsGalleryModalOpen} />
      </main>

      {/* Translucent Glassmorphic Footer */}
      <Footer />
    </div>
  );
}
