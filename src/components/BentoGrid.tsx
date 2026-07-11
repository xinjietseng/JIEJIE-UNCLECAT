/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLLABORATIONS_DATA } from '../data';
import { Collaboration } from '../types';
import { Briefcase, Calendar, X, ExternalLink, ArrowRight, Award, BadgeCheck } from 'lucide-react';

export default function BentoGrid() {
  const [selectedCollab, setSelectedCollab] = useState<Collaboration | null>(null);

  return (
    <>
      <section id="collabs" className="py-24 border-t border-[#1A1A1A] bg-[#F5F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <p className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <Briefcase size={12} className="text-[#1A1A1A]" /> COLLABORATIONS / 商業聯名精選
          </p>
          <h2 className="font-display font-black text-4xl md:text-6xl text-[#1A1A1A] uppercase tracking-tight">
            品牌跨界 ✦ 頂級合作
          </h2>
          <p className="text-[#1A1A1A]/80 text-sm mt-3 max-w-xl mx-auto font-sans">
            各大知名品牌爭相聯名！將實用功能融入瘋狂爆笑，每次合作都引爆社群話題。
          </p>
          <div className="h-[2px] w-12 bg-[#1A1A1A] mx-auto mt-4" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8 auto-rows-[240px] md:auto-rows-[180px]">
          
          {COLLABORATIONS_DATA.map((collab, index) => {
            // Define unique Bento grid spanning per item for visual rhythm
            let gridSpan = 'md:col-span-3 md:row-span-2'; // Default
 
            if (index === 1) {
              gridSpan = 'md:col-span-3 md:row-span-1'; // O-Bank Card
            } else if (index === 2) {
              gridSpan = 'md:col-span-3 md:row-span-1'; // World Gym
            } else if (index === 3) {
              gridSpan = 'md:col-span-6 md:row-span-2'; // Durex (Large Banner)
            }
 
            return (
              <motion.div
                key={collab.id}
                id={`bento-card-${collab.id}`}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedCollab(collab)}
                className={`group rounded-none border border-[#1A1A1A] p-6 flex flex-col justify-between cursor-pointer overflow-hidden relative transition-all duration-300 bg-white hover:bg-[#F5F5F0]/40 brutalist-shadow-dark ${gridSpan}`}
              >
                {/* Decorative background image overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-[0.06] group-hover:opacity-[0.12] group-hover:scale-[1.03] transition-all duration-500 pointer-events-none"
                  style={{ backgroundImage: `url(${collab.imageUrl})` }}
                />
                
                {/* Top bar with Category Badge & Year */}
                <div className="flex items-center justify-between relative z-20">
                  <span className="w-10 h-10 rounded-none bg-white border border-[#1A1A1A] flex items-center justify-center text-lg shrink-0">
                    {collab.logoPlaceholder}
                  </span>
                  <span className="text-[10px] font-mono bg-[#1A1A1A] text-[#F5F5F0] border border-[#1A1A1A] px-2.5 py-1 rounded-none">
                    {collab.year}
                  </span>
                </div>
 
                {/* Bottom Info Section */}
                <div className="relative z-20 mt-4">
                  <p className="text-[10px] font-mono text-[#1A1A1A]/60 uppercase tracking-widest font-bold mb-1">
                    {collab.brandName}
                  </p>
                  <h3 className="font-serif italic font-bold text-xl md:text-2xl text-[#1A1A1A] group-hover:underline transition-all leading-tight">
                    {collab.projectTitle}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 mt-2 line-clamp-2 md:line-clamp-1 font-sans font-light">
                    {collab.tagline}
                  </p>
                </div>
 
                {/* Hover Quick view indicator */}
                <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-[10px] font-mono text-[#1A1A1A]/60">
                  <span>閱讀故事 / STORY</span> <ArrowRight size={12} />
                </div>
              </motion.div>
            );
          })}
 
        </div>
 
      </div>
    </section>
 
      {/* DETAIL OVERLAY POPUP / MODAL */}
      <AnimatePresence>
        {selectedCollab && (
          <motion.div
            id="collab-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A1A1A]/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCollab(null)}
          >
            <motion.div
              initial={{ scale: 0.98, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 10 }}
              transition={{ duration: 0.15 }}
              className="bg-white border border-[#1A1A1A] rounded-none w-full max-w-2xl overflow-hidden shadow-2xl relative brutalist-shadow-dark"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Banner Image */}
              <div 
                className="h-48 bg-cover bg-center relative flex items-end p-6 border-b border-[#1A1A1A]"
                style={{ backgroundImage: `url(${selectedCollab.imageUrl})` }}
              >
                {/* Overlay shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90" />
                
                {/* Title Overlay info */}
                <div className="relative z-10 flex items-center gap-4">
                  <span className="w-14 h-14 bg-white text-[#1A1A1A] border border-[#1A1A1A] rounded-none flex items-center justify-center text-2xl shadow-sm transform rotate-[-2deg]">
                    {selectedCollab.logoPlaceholder}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono bg-[#1A1A1A] text-[#F5F5F0] border border-[#1A1A1A] px-2 py-0.5 rounded-none uppercase tracking-widest font-bold">
                      {selectedCollab.brandName}
                    </span>
                    <h3 className="font-serif italic font-bold text-2xl md:text-3xl text-[#1A1A1A] mt-1 leading-none">
                      {selectedCollab.projectTitle}
                    </h3>
                  </div>
                </div>
 
                {/* Close Button */}
                <button
                  id="modal-close-btn"
                  onClick={() => setSelectedCollab(null)}
                  className="absolute top-4 right-4 p-1.5 bg-white hover:bg-[#F5F5F0] border border-[#1A1A1A] rounded-none text-[#1A1A1A] cursor-pointer transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
 
              {/* Modal Body Content */}
              <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                
                {/* Story Block */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-[#1A1A1A] font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <BadgeCheck size={14} /> 企劃理念 & 故事 / BRAND STORY
                  </h4>
                  <p className="text-[#1A1A1A]/80 text-sm md:text-base leading-relaxed font-sans font-light">
                    {selectedCollab.story}
                  </p>
                </div>
 
                {/* Achievement Block */}
                <div className="p-5 bg-[#F5F5F0] rounded-none border border-[#1A1A1A]/20 space-y-2">
                  <h4 className="text-xs font-mono text-[#1A1A1A] font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Award size={14} /> 合作成果與榮譽 / MILESTONES
                  </h4>
                  <p className="text-[#1A1A1A] font-serif font-medium text-sm md:text-base leading-relaxed italic">
                    {selectedCollab.achievement}
                  </p>
                </div>
 
                {/* Footer specs */}
                <div className="flex justify-between items-center pt-4 border-t border-[#1A1A1A]/10 text-xs font-mono text-[#1A1A1A]/50">
                  <span className="flex items-center gap-1"><Calendar size={12} /> 發布年份: {selectedCollab.year}</span>
                  <span className="text-[#1A1A1A]/70">#跨界幽默 #流量密碼</span>
                </div>
              </div>
 
              {/* Action bar */}
              <div className="bg-[#F5F5F0] border-t border-[#1A1A1A] px-6 py-4 flex justify-end">
                <button
                  id="modal-cta-btn"
                  onClick={() => setSelectedCollab(null)}
                  className="px-5 py-2.5 bg-white text-[#1A1A1A] font-sans font-bold text-xs uppercase tracking-wider rounded-none border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F5F0] transition-colors cursor-pointer"
                >
                  關閉視窗 / CLOSE
                </button>
              </div>
 
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
