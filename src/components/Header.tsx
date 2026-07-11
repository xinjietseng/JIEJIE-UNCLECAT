/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Award, Zap } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: '雙人檔案' },
    { id: 'comics', label: '爆笑漫畫' },
    { id: 'game', label: '台港大對決' },
    { id: 'collabs', label: '品牌合作' },
    { id: 'shop', label: '限量周邊' },
    { id: 'contact', label: '商務洽談' },
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-[#F5F5F0]/95 backdrop-blur-md py-3 border-[#1A1A1A]' 
            : 'bg-transparent py-5 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavClick('hero')}
          >
            <div className="w-11 h-11 rounded-full border border-[#1A1A1A] flex items-center justify-center text-xs font-display italic font-bold text-[#1A1A1A] bg-white">
              J&C
            </div>
            <div>
              <h1 className="font-display font-black text-lg md:text-xl tracking-tight text-[#1A1A1A] flex items-center gap-1.5">
                爵爵 & 貓叔
                <span className="text-[10px] bg-[#1A1A1A] text-[#F5F5F0] px-1.5 py-0.5 uppercase font-mono tracking-widest hidden sm:inline-block">HK ✕ TW</span>
              </h1>
              <p className="text-[11px] text-[#1A1A1A]/70 font-mono tracking-wider">OFFICIAL PORTFOLIO</p>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white border border-[#1A1A1A] p-1 rounded-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => onNavClick(item.id)}
                  className={`px-4 py-1.5 rounded-full font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-200 relative ${
                    isActive 
                      ? 'text-[#F5F5F0] bg-[#1A1A1A] font-bold' 
                      : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full bg-[#1A1A1A] -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Business Inquiry Call To Action */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              id="cta-business-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavClick('contact')}
              className="px-5 py-2 bg-[#1A1A1A] text-[#F5F5F0] font-sans font-bold text-xs uppercase tracking-wider rounded-none border border-[#1A1A1A] transition-all duration-200 flex items-center gap-1.5"
            >
              合作洽談 <ArrowUpRight size={14} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-inquiry-btn"
              onClick={() => onNavClick('contact')}
              className="px-3 py-1.5 bg-[#1A1A1A] text-[#F5F5F0] border border-[#1A1A1A] text-xs font-semibold uppercase tracking-wider"
            >
              合作洽談
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 border border-[#1A1A1A] rounded-none text-[#1A1A1A] hover:bg-white transition-colors"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[64px] left-0 w-full bg-[#F5F5F0] border-b border-[#1A1A1A] z-40 lg:hidden shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              <p className="text-xs font-mono text-[#1A1A1A] uppercase tracking-widest flex items-center gap-1 border-b border-[#1A1A1A]/20 pb-2">
                <Zap size={12} /> 目錄選單 / MENU
              </p>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => {
                      setIsOpen(false);
                      onNavClick(item.id);
                    }}
                    className={`py-3 px-4 rounded-none text-left font-sans font-bold text-sm flex items-center justify-between border ${
                      isActive 
                        ? 'bg-[#1A1A1A] text-[#F5F5F0] border-[#1A1A1A]' 
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-[#1A1A1A]/60">0{navItems.indexOf(item) + 1}</span>
                  </button>
                );
              })}
              <div className="pt-4 border-t border-[#1A1A1A]/10 mt-2">
                <p className="text-[10px] text-[#1A1A1A]/60 font-mono text-center">
                  © 2026 JIEJIE & UNCLE CAT. ALL RIGHTS RESERVED.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
