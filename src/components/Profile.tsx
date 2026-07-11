/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Skull, Zap, Swords, HelpCircle } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'all' | 'jiejie' | 'cat'>('all');

  // Stats for Jiejie
  const jiejieStats = [
    { label: '白爛爆笑度', value: 95, color: 'bg-brand-yellow' },
    { label: '下巴延伸長度', value: 120, color: 'bg-brand-orange' },
    { label: '熱情好客度', value: 90, color: 'bg-brand-neon' },
    { label: '抗壓耐操性', value: 75, color: 'bg-blue-500' },
  ];

  // Stats for Uncle Cat
  const catStats = [
    { label: '毒舌吐槽力', value: 150, color: 'bg-brand-pink' },
    { label: '冷眼旁觀度', value: 95, color: 'bg-purple-500' },
    { label: '社恐警報器', value: 110, color: 'bg-brand-orange' },
    { label: '金錢渴望度', value: 98, color: 'bg-brand-neon' },
  ];

  return (
    <section id="about" className="py-24 border-t border-[#1A1A1A] relative bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <p className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <Swords size={12} className="text-[#1A1A1A]" /> THE DUO / 雙人合體
          </p>
          <h2 className="font-display font-black text-4xl md:text-6xl text-[#1A1A1A] uppercase tracking-tight">
            雙人檔案 & 趣怪故事
          </h2>
          <div className="h-[2px] w-12 bg-[#1A1A1A] mx-auto mt-4" />
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-2 mb-12">
          {['all', 'jiejie', 'cat'].map((tab) => (
            <button
              key={tab}
              id={`profile-tab-${tab}`}
              onClick={() => setActiveTab(tab as any)}
              className={`px-5 py-2.5 rounded-none font-sans font-bold text-xs uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#1A1A1A] text-[#F5F5F0] border-[#1A1A1A]'
                  : 'bg-white text-[#1A1A1A]/70 border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
              }`}
            >
              {tab === 'all' ? '全部檔案' : tab === 'jiejie' ? '台灣代表 ✦ 爵爵' : '香港代表 ✦ 貓叔'}
            </button>
          ))}
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* JIEJIE CARD */}
          {(activeTab === 'all' || activeTab === 'jiejie') && (
            <motion.div
              id="jiejie-profile-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-none border border-[#1A1A1A] p-6 md:p-8 flex flex-col justify-between relative brutalist-shadow-dark"
            >
              <div className="absolute top-4 right-4 bg-[#1A1A1A] text-white px-3 py-1 text-xs font-mono font-bold rounded-none transform rotate-[2deg] border border-[#1A1A1A]">
                TAIWAN 🇹🇼
              </div>

              <div>
                {/* Character Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-[#F5F5F0] rounded-none border border-[#1A1A1A] p-1 flex items-center justify-center shrink-0">
                    {/* Jiejie head SVG */}
                    <svg viewBox="0 0 100 120" className="w-full h-full text-[#1A1A1A]">
                      <rect x="15" y="10" width="70" height="70" rx="35" fill="#f3f4f6" />
                      <ellipse cx="38" cy="40" rx="6" ry="6" fill="#000" />
                      <ellipse cx="62" cy="40" rx="6" ry="6" fill="#000" />
                      <path d="M72,25 C72,27 70,29 68,29 C66,29 66,27 68,25 C68,23 72,21 72,25 Z" fill="#38bdf8" />
                      <path d="M30,70 L50,115 L70,70 Z" fill="#f3f4f6" stroke="#000" strokeWidth="4" />
                      <path d="M38,68 Q50,92 62,68 Z" fill="#ef4444" stroke="#000" strokeWidth="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-[#1A1A1A]">爵爵 (Jiejie)</h3>
                    <p className="text-xs font-mono text-[#1A1A1A]/70">熱情白爛 ✕ 100cm超長下巴 ✕ 台灣魂</p>
                  </div>
                </div>

                {/* Profile content */}
                <div className="space-y-4 mb-8 text-[#1A1A1A]/85 text-sm md:text-base leading-relaxed font-light">
                  <p>
                    出生於台灣彰化，曾在香港打拼工作多年。深受港台兩地生活文化衝擊，決定用最白爛的手繪線條，把香港的高壓與台灣的熱情融合成一幅幅令人噴飯的漫畫。
                  </p>
                  <p className="bg-[#F5F5F0] p-4 rounded-none border border-[#1A1A1A]/20 font-mono text-xs text-[#1A1A1A] flex items-start gap-2">
                    <span className="text-black font-extrabold shrink-0">招牌大絕：</span>
                    「100公分拉長下巴攻擊」，專治各種生活不順眼，只要表情夠崩壞，就沒有過不去的坎！
                  </p>

                  {/* Bullet facts */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="p-3 bg-[#F5F5F0]/50 rounded-none border border-[#1A1A1A]/10">
                      <p className="text-xs font-mono text-[#1A1A1A]/60 mb-1 flex items-center gap-1">
                        <Heart size={12} className="text-[#1A1A1A]" /> 最愛事物
                      </p>
                      <p className="text-xs font-semibold text-[#1A1A1A]">超濃咖啡、蛋餅、彰化肉圓</p>
                    </div>
                    <div className="p-3 bg-[#F5F5F0]/50 rounded-none border border-[#1A1A1A]/10">
                      <p className="text-xs font-mono text-[#1A1A1A]/60 mb-1 flex items-center gap-1">
                        <Skull size={12} className="text-[#1A1A1A]" /> 討厭事物
                      </p>
                      <p className="text-xs font-semibold text-[#1A1A1A]">打卡鐘、不給請假的老闆</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Bars */}
              <div className="space-y-3.5 pt-4 border-t border-[#1A1A1A]/10">
                <p className="text-xs font-mono text-[#1A1A1A]/60 uppercase tracking-widest flex items-center gap-1">
                  <Zap size={12} /> 戰鬥力數值 / STATS
                </p>
                {jiejieStats.map((stat, i) => (
                  <div key={i} id={`jiejie-stat-${i}`}>
                    <div className="flex justify-between text-xs font-mono font-medium mb-1">
                      <span className="text-[#1A1A1A]/70">{stat.label}</span>
                      <span className="text-[#1A1A1A] font-extrabold">{stat.value}%</span>
                    </div>
                    <div className="h-1.5 bg-[#F5F5F0] rounded-none overflow-hidden border border-[#1A1A1A]/15">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(stat.value, 100)}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-[#1A1A1A] rounded-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* UNCLE CAT CARD */}
          {(activeTab === 'all' || activeTab === 'cat') && (
            <motion.div
              id="cat-profile-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-none border border-[#1A1A1A] p-6 md:p-8 flex flex-col justify-between relative brutalist-shadow-dark"
            >
              <div className="absolute top-4 right-4 bg-[#1A1A1A] text-white px-3 py-1 text-xs font-mono font-bold rounded-none transform rotate-[-2deg] border border-[#1A1A1A]">
                HONG KONG 🇭🇰
              </div>

              <div>
                {/* Character Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-[#F5F5F0] rounded-none border border-[#1A1A1A] p-1 flex items-center justify-center shrink-0">
                    {/* Uncle Cat head SVG */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#1A1A1A]">
                      <path d="M15,50 C15,25 85,25 85,50 C85,75 15,75 15,50 Z" fill="#374151" />
                      <path d="M18,35 L12,12 L38,28 Z" fill="#374151" stroke="#000" strokeWidth="2" />
                      <path d="M22,32 L17,17 L34,27 Z" fill="#f43f5e" />
                      <path d="M82,35 L88,12 L62,28 Z" fill="#374151" stroke="#000" strokeWidth="2" />
                      <path d="M78,32 L83,17 L66,27 Z" fill="#f43f5e" />
                      <circle cx="50" cy="55" r="30" fill="#fcd34d" />
                      <path d="M30,48 L44,48" stroke="#000" strokeWidth="4" />
                      <path d="M56,48 L70,48" stroke="#000" strokeWidth="4" />
                      <polygon points="47,56 53,56 50,60" fill="#000" />
                      <path d="M42,65 Q50,60 58,65" stroke="#000" strokeWidth="3" fill="none" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-[#1A1A1A]">貓叔 (Uncle Cat)</h3>
                    <p className="text-xs font-mono text-[#1A1A1A]/70">極致毒舌 ✕ 優雅傲嬌 ✕ 冷靜吐槽 ✕ 香港代表</p>
                  </div>
                </div>

                {/* Profile content */}
                <div className="space-y-4 mb-8 text-[#1A1A1A]/85 text-sm md:text-base leading-relaxed font-light">
                  <p>
                    土生土長香港人。外表高冷、頂著貓頭套，內心充滿了香港人極致的「效率與冷幽默」。擅長用一句話就把爵爵那無限延伸的下巴一秒塞回去。
                  </p>
                  <p className="bg-[#F5F5F0] p-4 rounded-none border border-[#1A1A1A]/20 font-mono text-xs text-[#1A1A1A] flex items-start gap-2">
                    <span className="text-black font-extrabold shrink-0">招牌大絕：</span>
                    「社交距離一萬米 + 廣東話冷血吐槽」，對抗世界上的所有假鬼假怪與愚蠢，非常優雅，但非常痛。
                  </p>

                  {/* Bullet facts */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="p-3 bg-[#F5F5F0]/50 rounded-none border border-[#1A1A1A]/10">
                      <p className="text-xs font-mono text-[#1A1A1A]/60 mb-1 flex items-center gap-1">
                        <Heart size={12} className="text-[#1A1A1A]" /> 最愛事物
                      </p>
                      <p className="text-xs font-semibold text-[#1A1A1A]">凍檸茶少甜、港式絲襪奶茶、放工</p>
                    </div>
                    <div className="p-3 bg-[#F5F5F0]/50 rounded-none border border-[#1A1A1A]/10">
                      <p className="text-xs font-mono text-[#1A1A1A]/60 mb-1 flex items-center gap-1">
                        <Skull size={12} className="text-[#1A1A1A]" /> 討厭事物
                      </p>
                      <p className="text-xs font-semibold text-[#1A1A1A]">畫大餅、強迫無酬加班、過度熱情</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Bars */}
              <div className="space-y-3.5 pt-4 border-t border-[#1A1A1A]/10">
                <p className="text-xs font-mono text-[#1A1A1A]/60 uppercase tracking-widest flex items-center gap-1">
                  <Zap size={12} /> 戰鬥力數值 / STATS
                </p>
                {catStats.map((stat, i) => (
                  <div key={i} id={`cat-stat-${i}`}>
                    <div className="flex justify-between text-xs font-mono font-medium mb-1">
                      <span className="text-[#1A1A1A]/70">{stat.label}</span>
                      <span className="text-[#1A1A1A] font-extrabold">{stat.value}%</span>
                    </div>
                    <div className="h-1.5 bg-[#F5F5F0] rounded-none overflow-hidden border border-[#1A1A1A]/15">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(stat.value, 100)}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-[#1A1A1A] rounded-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>

        {/* Dynamic Duo Story Banner */}
        <motion.div
          id="duo-story-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#F5F5F0] border border-[#1A1A1A] rounded-none p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8"
        >
          <div className="shrink-0 flex items-center justify-center relative w-16 h-16 bg-[#1A1A1A] text-[#F5F5F0] border border-[#1A1A1A] rounded-none transform rotate-[-4deg]">
            <span className="font-display font-black text-3xl">⚔️</span>
          </div>

          <div className="flex-1">
            <h4 className="font-serif italic font-bold text-lg md:text-xl text-[#1A1A1A] mb-2">
              當「熱情白爛的彰化青年」碰上「傲嬌冷靜的香港貓叔」
            </h4>
            <p className="text-[#1A1A1A]/75 text-sm md:text-base leading-relaxed font-light">
              爵爵和貓叔從 2013 年起開始在網路連載，至今已超過十餘載！他們以極具對比的「台港視角」，生動刻畫兩地的生活習慣、茶餐廳黑話、社畜打卡血淚。因為經歷過不同的文化洗禮，他們的創作不僅僅是「搞笑」，更是兩地人心目中無比真實、無比溫馨的生活縮影，笑中帶淚，看完又能元氣滿滿地迎接明天的打卡！
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
