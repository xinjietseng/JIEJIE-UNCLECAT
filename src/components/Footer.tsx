/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Instagram, Facebook, Youtube, Globe, Heart } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const socialLinks = [
    { icon: <Facebook size={18} />, label: 'Facebook', url: 'https://www.facebook.com/jiejieandunclecat' },
    { icon: <Instagram size={18} />, label: 'Instagram', url: 'https://www.instagram.com/jiejie_unclecat' },
    { icon: <Youtube size={18} />, label: 'YouTube', url: 'https://www.youtube.com' },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F5F0] border-t border-[#1A1A1A] py-16 relative overflow-hidden">
      {/* Background large textured typography */}
      <div className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 font-display font-black text-7xl md:text-[12rem] text-[#1A1A1A]/[0.02] tracking-tighter uppercase whitespace-nowrap select-none pointer-events-none">
        JIEJIE ✕ CAT
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Logo Brand / Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#1A1A1A] border border-[#1A1A1A] rounded-none flex items-center justify-center transform rotate-[-4deg]">
                <span className="font-display font-black text-base text-[#F5F5F0]">J&C</span>
              </div>
              <h3 className="font-serif italic font-bold text-xl text-[#1A1A1A]">爵爵 ✕ 貓叔</h3>
            </div>
            <p className="text-xs md:text-sm text-[#1A1A1A]/70 leading-relaxed max-w-sm font-light font-sans">
              台港人氣插畫品牌，陪伴社畜們走過無數次遲到、翻白眼、咖啡成癮、加班熬夜的生活。不保證能解決你的生活難題，但絕對能讓你大笑三秒鐘！
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  id={`footer-social-${i}`}
                  className="w-10 h-10 rounded-none bg-white border border-[#1A1A1A]/25 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F5F0] hover:border-[#1A1A1A] flex items-center justify-center transition-all"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Directory Shortcuts */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono text-[#1A1A1A] font-bold uppercase tracking-widest border-b border-[#1A1A1A]/10 pb-2">
              目錄捷徑 / NAV MAP
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
              <button onClick={() => onNavClick('about')} className="text-left text-[#1A1A1A]/70 hover:text-[#1A1A1A] cursor-pointer transition-colors py-1 font-sans font-light">雙人檔案</button>
              <button onClick={() => onNavClick('comics')} className="text-left text-[#1A1A1A]/70 hover:text-[#1A1A1A] cursor-pointer transition-colors py-1 font-sans font-light">爆笑漫畫</button>
              <button onClick={() => onNavClick('game')} className="text-left text-[#1A1A1A]/70 hover:text-[#1A1A1A] cursor-pointer transition-colors py-1 font-sans font-light">台港大對決</button>
              <button onClick={() => onNavClick('collabs')} className="text-left text-[#1A1A1A]/70 hover:text-[#1A1A1A] cursor-pointer transition-colors py-1 font-sans font-light">品牌合作</button>
              <button onClick={() => onNavClick('shop')} className="text-left text-[#1A1A1A]/70 hover:text-[#1A1A1A] cursor-pointer transition-colors py-1 font-sans font-light">限量周邊</button>
              <button onClick={() => onNavClick('contact')} className="text-left text-[#1A1A1A]/70 hover:text-[#1A1A1A] cursor-pointer transition-colors py-1 font-sans font-light">商務洽談</button>
            </div>
          </div>

          {/* Quick info / localization */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono text-[#1A1A1A] font-bold uppercase tracking-widest border-b border-[#1A1A1A]/10 pb-2">
              基地位置 / BASES
            </h4>
            <div className="space-y-3 text-xs md:text-sm text-[#1A1A1A]/70 font-sans font-light">
              <p className="flex items-center gap-2">
                <span>🇹🇼</span> 台灣：台北市大安區、屏東縣勝利新村 (合作展點)
              </p>
              <p className="flex items-center gap-2">
                <span>🇭🇰</span> 香港：九龍旺角、銅鑼灣合作聯名展間
              </p>
              <p className="text-[10px] text-[#1A1A1A]/50 font-mono">
                EMAIL: info@jiejieandcat.com / jiejie港港好@gmail.com
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll-to-top bar */}
        <div className="mt-16 pt-8 border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#1A1A1A]/50">
          <p className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span>© 2026 JIEJIE & UNCLE CAT. ALL RIGHTS RESERVED.</span>
            <span className="text-[#1A1A1A]"><Heart size={10} className="fill-[#1A1A1A]" /></span>
            <span>MADE IN TAIWAN & HONG KONG.</span>
          </p>

          <button
            id="scroll-to-top-btn"
            onClick={handleScrollTop}
            className="px-4 py-2 bg-white border border-[#1A1A1A] rounded-none text-[#1A1A1A]/70 hover:bg-[#1A1A1A] hover:text-[#F5F5F0] flex items-center gap-1.5 cursor-pointer transition-colors group"
          >
            <span>回頂部 / SCROLL TOP</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
