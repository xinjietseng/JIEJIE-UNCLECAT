/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import ComicReader from './components/ComicReader';
import CultureGame from './components/CultureGame';
import BentoGrid from './components/BentoGrid';
import MerchShowcase from './components/MerchShowcase';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Handle smooth scrolling with precise Header offset correction
  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 85; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Scroll spy to detect active viewport section and highlight nav menu correctly
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'comics', 'game', 'collabs', 'shop', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset slightly for faster triggering

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#1A1A1A] selection:text-[#F5F5F0] bg-[#F5F5F0] text-[#1A1A1A] overflow-hidden">
      {/* Dynamic top ticker / warning strip */}
      <div className="bg-brand-pink text-[#F5F5F0] text-[11px] font-mono py-1.5 px-4 text-center border-b border-[#1A1A1A] select-none relative z-50 flex items-center justify-center gap-1.5 font-bold uppercase tracking-widest">
        <span>⚠️ 【警報】社畜怨氣值過高！請速點擊各區塊漫畫及遊戲以舒壓開運！ ⚠️</span>
      </div>

      {/* Fixed Header */}
      <Header activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Single-View Content Blocks */}
      <main className="flex-grow">
        <Hero onExploreClick={handleNavClick} />
        
        <div id="about">
          <Profile />
        </div>

        <div id="comics">
          <ComicReader />
        </div>

        <div id="game">
          <CultureGame />
        </div>

        <div id="collabs">
          <BentoGrid />
        </div>

        <div id="shop">
          <MerchShowcase />
        </div>

        <div id="contact">
          <InquiryForm />
        </div>
      </main>

      {/* Creative Footer */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}
