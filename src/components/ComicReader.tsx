/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMICS_DATA } from '../data';
import { Comic } from '../types';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Calendar, Globe, HelpCircle } from 'lucide-react';

export default function ComicReader() {
  const [selectedComicIndex, setSelectedComicIndex] = useState(0);
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'culture' | 'office'>('all');

  const filteredComics = COMICS_DATA.filter(comic => {
    if (categoryFilter === 'all') return true;
    return comic.category === categoryFilter;
  });

  const activeComic: Comic | undefined = filteredComics[selectedComicIndex] || filteredComics[0];

  // Reset panel index when selected comic changes
  const handleComicSelect = (index: number) => {
    setSelectedComicIndex(index);
    setCurrentPanelIndex(0);
  };

  const nextPanel = () => {
    if (activeComic && currentPanelIndex < activeComic.panels.length - 1) {
      setCurrentPanelIndex(currentPanelIndex + 1);
    }
  };

  const prevPanel = () => {
    if (currentPanelIndex > 0) {
      setCurrentPanelIndex(currentPanelIndex - 1);
    }
  };

  // Helper to highlight Cantonese slang/phrases and add interactive tooltips
  const renderPanelTextWithGlossary = (text: string) => {
    // We can replace known slang with highlight tags or just return as is with styling.
    // For a highly interactive look, let's parse things like "雪櫃" "老細" "返工" etc.
    const glossary: { [key: string]: string } = {
      '雪櫃': '【冰箱】廣東話用語，指保存冷凍食物的櫃子。',
      '老細': '【老闆】廣東話用語。口語化稱呼，含有一點點怨氣與親切感。',
      '返工': '【去上班】指返回工作崗位，開始一天的社畜勞動。',
      '放工': '【下班】重獲自由、靈魂歸位的時刻。',
      '佢邊日心情好過': '【他哪一天心情好過】廣東話，吐槽老闆每天都在臭臉。',
      '理得佢死': '【管他去死】極致傲嬌廣東話吐槽，指完全不在乎對方的看法。',
      '大安站': '【大安捷運站】台北捷運的核心轉乘站之一，人潮洶湧。',
      '蛋餅': '【台灣經典早餐】蛋餅皮加蛋，配醬油膏，社畜的心靈糧食。'
    };

    let processedText: React.ReactNode[] = [text];

    // Simple word segmenter replacement for demonstration
    Object.keys(glossary).forEach((slang) => {
      const tempArray: React.ReactNode[] = [];
      processedText.forEach((node) => {
        if (typeof node === 'string') {
          const parts = node.split(slang);
          parts.forEach((part, index) => {
            tempArray.push(part);
            if (index < parts.length - 1) {
              tempArray.push(
                <span
                  key={slang + index}
                  className="px-1.5 py-0.5 mx-0.5 rounded-none bg-[#1A1A1A] text-[#F5F5F0] hover:bg-[#F5F5F0] hover:text-[#1A1A1A] border border-[#1A1A1A] font-bold transition-all duration-150 cursor-help relative group inline-block"
                >
                  {slang}
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-[#1A1A1A] border border-[#1A1A1A] text-[#F5F5F0] text-[11px] rounded-none shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-30 font-normal leading-normal whitespace-normal">
                    {glossary[slang]}
                  </span>
                </span>
              );
            }
          });
        } else {
          tempArray.push(node);
        }
      });
      processedText = tempArray;
    });

    return processedText;
  };

  return (
    <section id="comics" className="py-24 relative bg-[#F5F5F0] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <p className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <BookOpen size={12} className="text-[#1A1A1A]" /> WEBCOMIC / 線上四格漫畫
          </p>
          <h2 className="font-display font-black text-4xl md:text-6xl text-[#1A1A1A] uppercase tracking-tight">
            爆笑漫畫 ✦ 連載中
          </h2>
          <p className="text-[#1A1A1A]/80 text-xs md:text-sm mt-3 font-sans">
            滑鼠懸停在 <span className="text-[#1A1A1A] font-extrabold underline underline-offset-2">黑框標籤</span> 上可查看台港黑話解釋！
          </p>
          <div className="h-[2px] w-12 bg-[#1A1A1A] mx-auto mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar: Comic List & Filter */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#1A1A1A] rounded-none p-5 brutalist-shadow-dark">
              <h4 className="font-serif italic font-bold text-lg text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span>📚 故事列表 / CHANNELS</span>
              </h4>
              
              {/* Category Filter */}
              <div className="flex gap-2 mb-4">
                {(['all', 'culture', 'office'] as const).map((filter) => (
                  <button
                    key={filter}
                    id={`comic-filter-${filter}`}
                    onClick={() => {
                      setCategoryFilter(filter);
                      setSelectedComicIndex(0);
                      setCurrentPanelIndex(0);
                    }}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-none border cursor-pointer transition-all duration-150 ${
                      categoryFilter === filter
                        ? 'bg-[#1A1A1A] text-[#F5F5F0] border-[#1A1A1A]'
                        : 'bg-white text-[#1A1A1A]/70 border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                    }`}
                  >
                    {filter === 'all' ? '全部' : filter === 'culture' ? '台港文化' : '社畜日常'}
                  </button>
                ))}
              </div>

              {/* Comic items list */}
              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {filteredComics.length === 0 ? (
                  <p className="text-xs text-[#1A1A1A]/50 text-center py-4">暫無該分類漫畫連載...</p>
                ) : (
                  filteredComics.map((comic, index) => {
                    const isSelected = index === selectedComicIndex;
                    return (
                      <button
                        key={comic.id}
                        id={`comic-list-item-${comic.id}`}
                        onClick={() => handleComicSelect(index)}
                        className={`w-full text-left p-3 rounded-none border cursor-pointer transition-all duration-200 flex items-center gap-3 ${
                          isSelected
                            ? 'bg-[#1A1A1A] text-[#F5F5F0] border-[#1A1A1A] font-bold'
                            : 'bg-white text-[#1A1A1A]/80 border-[#1A1A1A]/10 hover:border-[#1A1A1A]'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold border text-xs shrink-0 ${
                          isSelected ? 'bg-[#F5F5F0] text-[#1A1A1A] border-[#F5F5F0]' : 'bg-[#F5F5F0] text-[#1A1A1A] border-[#1A1A1A]/20'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h5 className="text-xs md:text-sm font-bold truncate">{comic.title}</h5>
                          <p className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-[#F5F5F0]/70' : 'text-[#1A1A1A]/50'}`}>
                            {comic.publishDate} • {comic.category === 'culture' ? '文化對比' : '社畜日常'}
                          </p>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Comic Description Card */}
            {activeComic && (
              <div className="bg-[#F5F5F0] border border-[#1A1A1A]/25 rounded-none p-5 font-sans space-y-3">
                <p className="text-xs font-mono text-[#1A1A1A] font-bold uppercase tracking-wider">
                  ✦ 故事簡介 / DESCRIPTION
                </p>
                <p className="text-xs md:text-sm text-[#1A1A1A]/80 leading-relaxed font-light">
                  {activeComic.description}
                </p>
                <div className="flex items-center gap-3 pt-2 text-[11px] text-[#1A1A1A]/60 font-mono">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {activeComic.publishDate}</span>
                  <span className="flex items-center gap-1"><Globe size={12} /> JIEJIE & CAT</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Area: Interactive Comic Reader Screen */}
          <div className="lg:col-span-8">
            {activeComic ? (
              <div className="bg-white border border-[#1A1A1A] rounded-none p-6 md:p-8 brutalist-shadow-dark relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                
                {/* Comic Canvas Header */}
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-4 mb-6">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#1A1A1A] text-[#F5F5F0] rounded-none border border-[#1A1A1A]">
                    PANEL {currentPanelIndex + 1} OF {activeComic.panels.length}
                  </span>
                  <h3 className="font-serif italic font-bold text-lg md:text-2xl text-[#1A1A1A]">
                    {activeComic.title}
                  </h3>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]/20" />
                  </div>
                </div>

                {/* Main Panel Content with Animation */}
                <div className="flex-1 flex flex-col items-center justify-center py-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeComic.id}-${currentPanelIndex}`}
                      initial={{ opacity: 0, scale: 0.98, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -5 }}
                      transition={{ duration: 0.15 }}
                      className="w-full max-w-xl bg-[#F5F5F0] border border-[#1A1A1A] rounded-none p-6 md:p-10 shadow-sm relative text-center flex flex-col items-center justify-center min-h-[260px]"
                    >
                      {/* Comic bubble quote styling */}
                      <div className="absolute top-0 left-6 transform -translate-y-1/2 bg-[#1A1A1A] text-[#F5F5F0] font-mono font-bold text-[10px] px-3 py-1 rounded-none border border-[#1A1A1A] uppercase tracking-widest">
                        PANEL {currentPanelIndex + 1}
                      </div>

                      {/* Comic text rendering with interactive terms */}
                      <p className="text-base sm:text-lg md:text-xl font-serif italic leading-relaxed text-[#1A1A1A] text-left whitespace-pre-wrap">
                        {renderPanelTextWithGlossary(activeComic.panels[currentPanelIndex])}
                      </p>

                      {/* Cute hand-drawn style decorative elements */}
                      <div className="absolute bottom-3 right-4 opacity-5 font-sans font-extrabold text-5xl pointer-events-none select-none text-[#1A1A1A]">
                        {"( ✧Д✧)"}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center justify-center gap-2 my-4">
                  {activeComic.panels.map((_, i) => (
                    <button
                      key={i}
                      id={`comic-panel-dot-${i}`}
                      onClick={() => setCurrentPanelIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentPanelIndex ? 'w-8 bg-[#1A1A1A] border border-[#1A1A1A]' : 'w-2 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between border-t border-[#1A1A1A]/10 pt-5 mt-4">
                  <button
                    id="comic-prev-btn"
                    onClick={prevPanel}
                    disabled={currentPanelIndex === 0}
                    className={`px-5 py-2.5 rounded-none border font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-150 cursor-pointer ${
                      currentPanelIndex === 0
                        ? 'opacity-30 bg-[#F5F5F0] text-[#1A1A1A]/40 border-[#1A1A1A]/10 cursor-not-allowed'
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F5F0]'
                    }`}
                  >
                    <ArrowLeft size={14} /> 上一格 / PREV
                  </button>

                  <button
                    id="comic-next-btn"
                    onClick={nextPanel}
                    disabled={currentPanelIndex === activeComic.panels.length - 1}
                    className={`px-5 py-2.5 rounded-none border font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-150 cursor-pointer ${
                      currentPanelIndex === activeComic.panels.length - 1
                        ? 'opacity-30 bg-[#F5F5F0] text-[#1A1A1A]/40 border-[#1A1A1A]/10 cursor-not-allowed'
                        : 'bg-[#1A1A1A] text-[#F5F5F0] border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A]'
                    }`}
                  >
                    下一格 / NEXT <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            ) : (
              <div className="bg-white border border-[#1A1A1A] p-12 text-center text-[#1A1A1A]/50 font-serif italic">
                載入中...
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
