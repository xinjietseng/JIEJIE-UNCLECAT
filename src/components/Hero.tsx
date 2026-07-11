/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Flame, Star, Sparkles, MessageSquare, Coffee, ShieldAlert } from 'lucide-react';

interface HeroProps {
  onExploreClick: (sectionId: string) => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  // Floating fun tags
  const floatingTags = [
    { text: 'りしれ供お', color: 'bg-brand-yellow text-black border-black rotate-[-6deg]', top: '20%', left: '10%', rotate: -6 },
    { text: '死撚開！', color: 'bg-brand-pink text-white border-black rotate-[8deg]', top: '15%', right: '12%', rotate: 8 },
    { text: '凍檸茶少甜', color: 'bg-brand-neon text-black border-black rotate-[-3deg]', bottom: '25%', left: '15%', rotate: -3 },
    { text: '撐住你！☕', color: 'bg-white text-black border-black rotate-[12deg]', bottom: '30%', right: '14%', rotate: 12 },
    { text: '防小人 👣', color: 'bg-brand-yellow text-black border-black rotate-[5deg]', top: '50%', left: '5%', rotate: 5 },
    { text: '社畜保佑 🛐', color: 'bg-[#7F7F7A] text-[#F5F5F0] border-black rotate-[-8deg]', top: '48%', right: '8%', rotate: -8 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-bg-dark"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(26,26,26,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(26,26,26,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Decorative Editorial Watermarks */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#E4E4E0]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#7F7F7A]/5 blur-3xl pointer-events-none" />

      {/* Floating tag elements */}
      {floatingTags.map((tag, i) => (
        <motion.div
          key={i}
          id={`floating-tag-${i}`}
          className={`absolute hidden md:block px-4 py-2 rounded-none border font-sans font-bold text-xs md:text-sm shadow-sm cursor-pointer pointer-events-auto ${tag.color}`}
          style={{ top: tag.top, left: tag.left, right: tag.right }}
          animate={{
            y: [0, -12, 0],
            rotate: [tag.rotate, tag.rotate + 4, tag.rotate]
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.15, rotate: 0, zIndex: 10 }}
        >
          {tag.text}
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Street Tag */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#1A1A1A] text-[#1A1A1A] text-xs font-mono font-bold tracking-widest uppercase mb-6"
        >
          <Flame size={12} className="text-[#1A1A1A]" />
          <span>PORTFOLIO VOL. 02 - 港台爆笑碰撞</span>
          <Star size={12} className="fill-[#1A1A1A] text-[#1A1A1A]" />
        </motion.div>

        {/* Large Typography Brand Name */}
        <div className="relative mb-6">
          <motion.h1
            id="hero-main-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-7xl md:text-9xl tracking-tighter leading-none select-none text-[#1A1A1A] uppercase"
          >
            爵爵<span className="text-[#1A1A1A]/30 inline-block font-sans italic font-light transform rotate-[-4deg] mx-1 md:mx-3">&</span>貓叔
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-40 md:w-80 bg-[#1A1A1A] mx-auto mt-4"
          />
        </div>

        {/* Dynamic Tagline */}
        <motion.p
          id="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl font-serif font-light italic max-w-2xl text-[#1A1A1A] mb-10 leading-relaxed"
        >
          台港頂尖搞笑插畫組合！用<span className="text-[#1A1A1A] font-bold not-italic underline decoration-1 underline-offset-4">誇張拉長下巴</span>與<span className="text-[#1A1A1A] font-bold not-italic underline decoration-1 underline-offset-4">傲嬌毒舌吐槽</span>，點破社畜日常、文化差異與人生無奈！
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          id="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-btn-primary"
            onClick={() => onExploreClick('comics')}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#1A1A1A] text-[#F5F5F0] font-sans font-bold text-xs uppercase tracking-wider rounded-none border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
          >
            線上漫畫連載 <Sparkles size={14} className="fill-[#F5F5F0]" />
          </button>
          <button
            id="hero-btn-secondary"
            onClick={() => onExploreClick('game')}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#1A1A1A] font-sans font-bold text-xs uppercase tracking-wider rounded-none border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F5F0] transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
          >
            港台用語大作戰 <MessageSquare size={14} />
          </button>
        </motion.div>

        {/* Creative Interactive Character Avatars inside Hero */}
        <div className="mt-16 w-full flex items-center justify-center gap-8 md:gap-20">
          {/* Jiejie Character Avatar Wrapper */}
          <motion.div
            id="hero-jiejie-face"
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => onExploreClick('about')}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-none bg-white border border-[#1A1A1A] p-2 flex items-center justify-center relative overflow-hidden transition-all duration-300">
              {/* Custom SVG Jiejie character illustration placeholder */}
              <svg viewBox="0 0 100 120" className="w-full h-full text-white">
                <rect x="15" y="10" width="70" height="70" rx="35" fill="#f3f4f6" />
                {/* Jiejie's crazy eyes */}
                <ellipse cx="38" cy="40" rx="6" ry="6" fill="#000" />
                <ellipse cx="62" cy="40" rx="6" ry="6" fill="#000" />
                {/* White of eye reflections */}
                <circle cx="36" cy="38" r="2" fill="#fff" />
                <circle cx="60" cy="38" r="2" fill="#fff" />
                {/* Sweat drop on forehead */}
                <path d="M72,25 C72,27 70,29 68,29 C66,29 66,27 68,25 C68,23 72,21 72,25 Z" fill="#38bdf8" />
                {/* Jiejie's massive long chin /下巴 - signature style */}
                <path d="M30,70 L50,115 L70,70 Z" fill="#f3f4f6" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
                {/* Face outlines */}
                <circle cx="38" cy="40" r="1" fill="#fff" />
                {/* Big wide open mouth on the chin */}
                <path d="M38,68 Q50,92 62,68 Z" fill="#ef4444" stroke="#000" strokeWidth="3" />
                {/* Hair stubbles/ears */}
                <path d="M12,40 Q5,40 15,30 Z" fill="#000" />
                <path d="M88,40 Q95,40 85,30 Z" fill="#000" />
              </svg>
              <div className="absolute top-1.5 right-1.5 bg-[#E4E4E0] border border-[#1A1A1A] text-[#1A1A1A] text-[9px] font-mono font-extrabold px-1.5 rounded uppercase">TW</div>
            </div>
            <span className="mt-3 font-serif italic text-sm text-[#1A1A1A]/90 group-hover:underline transition-colors">台灣代表 / 爵爵</span>
          </motion.div>

          {/* Uncle Cat Character Avatar Wrapper */}
          <motion.div
            id="hero-cat-face"
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => onExploreClick('about')}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-none bg-white border border-[#1A1A1A] p-2 flex items-center justify-center relative overflow-hidden transition-all duration-300">
              {/* Custom SVG Uncle Cat character illustration placeholder */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                {/* Cat Ear Hood */}
                <path d="M15,50 C15,25 85,25 85,50 C85,75 15,75 15,50 Z" fill="#374151" />
                {/* Left Ear */}
                <path d="M18,35 L12,12 L38,28 Z" fill="#374151" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
                <path d="M22,32 L17,17 L34,27 Z" fill="#f43f5e" />
                {/* Right Ear */}
                <path d="M82,35 L88,12 L62,28 Z" fill="#374151" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
                <path d="M78,32 L83,17 L66,27 Z" fill="#f43f5e" />
                {/* Inside Face */}
                <circle cx="50" cy="55" r="30" fill="#fcd34d" />
                {/* Sarcastic squinty eyes */}
                <path d="M30,48 L44,48" stroke="#000" strokeWidth="4" strokeLinecap="round" />
                <path d="M56,48 L70,48" stroke="#000" strokeWidth="4" strokeLinecap="round" />
                {/* Sarcastic eyebrows */}
                <path d="M28,42 Q37,38 42,44" stroke="#000" strokeWidth="3" fill="none" />
                <path d="M72,42 Q63,38 58,44" stroke="#000" strokeWidth="3" fill="none" />
                {/* Cat nose */}
                <polygon points="47,56 53,56 50,60" fill="#000" />
                {/* Smug mouth */}
                <path d="M42,65 Q50,60 58,65" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Blushing cheeks */}
                <circle cx="28" cy="58" r="4" fill="#f43f5e" opacity="0.6" />
                <circle cx="72" cy="58" r="4" fill="#f43f5e" opacity="0.6" />
              </svg>
              <div className="absolute top-1.5 right-1.5 bg-[#1A1A1A] border border-[#1A1A1A] text-white text-[9px] font-mono font-extrabold px-1.5 rounded uppercase">HK</div>
            </div>
            <span className="mt-3 font-serif italic text-sm text-[#1A1A1A]/90 group-hover:underline transition-colors">香港代表 / 貓叔</span>
          </motion.div>
        </div>

        {/* Achievement ticker bar */}
        <div className="w-full mt-20 border-y border-[#1A1A1A] py-3.5 overflow-hidden relative bg-white">
          <div className="flex gap-12 whitespace-nowrap animate-marquee">
            <span className="text-xs font-mono font-semibold text-[#1A1A1A] uppercase flex items-center gap-2">
              🏆 2014 體驗趣味第一名
            </span>
            <span className="text-xs font-mono font-semibold text-[#1A1A1A] uppercase flex items-center gap-2">
              ⚡ YAHOO 2015 瘋跨界超人氣大獎
            </span>
            <span className="text-xs font-mono font-semibold text-[#1A1A1A] uppercase flex items-center gap-2">
              📚 暢銷圖書《爵爵港港好》/《爵爵厚多士》/《瘋愛吧！驅魔》
            </span>
            <span className="text-xs font-mono font-semibold text-[#1A1A1A] uppercase flex items-center gap-2">
              💼 聯名合作：王道銀行 / 韋恩咖啡 / FOODPANDA / DUREX
            </span>
            <span className="text-xs font-mono font-semibold text-[#1A1A1A] uppercase flex items-center gap-2">
              🔥 臉書及IG百萬累計觸及、台港文化首席插畫家
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
