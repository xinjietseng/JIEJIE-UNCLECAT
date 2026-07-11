/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CULTURE_QUESTIONS } from '../data';
import { Award, RefreshCw, Volume2, HelpCircle, AlertCircle, Sparkles, Star } from 'lucide-react';

export default function CultureGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const currentQuestion = CULTURE_QUESTIONS[currentQuestionIndex];

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswerIndex(index);
    setIsAnswered(true);
    
    if (index === currentQuestion.correctAnswerIndex) {
      setScore(score + 20);
    }
  };

  const handleNext = () => {
    setShowHint(false);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);

    if (currentQuestionIndex < CULTURE_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
    setScore(0);
    setGameFinished(false);
    setShowHint(false);
  };

  const getRankInfo = (finalScore: number) => {
    if (finalScore === 100) {
      return {
        rank: '港台混血神級社畜 👑',
        desc: '天啊！你根本是活生生的台港文化活字典！去茶餐廳點餐老細都要對你肅然起敬！趕緊去買份蛋餅配凍奶茶慶祝一下！',
        color: 'text-[#1A1A1A]',
        bg: 'border-[#1A1A1A]'
      };
    } else if (finalScore >= 60) {
      return {
        rank: '資深茶餐廳常客 🥤',
        desc: '非常厲害！你對港台兩地的俚語相當熟悉，去香港旅遊或與香港朋友交流絕對游刃有餘，頂多只會被貓叔冷眼吐槽一次！',
        color: 'text-[#1A1A1A]',
        bg: 'border-[#1A1A1A]'
      };
    } else if (finalScore >= 20) {
      return {
        rank: '初級港台觀光客 ✈️',
        desc: '還可以喔！大致知道一些常見詞彙，不過還有很大的努力空間，建議天天閱讀爵爵與貓叔的漫畫，保證你戰力瞬間飆升！',
        color: 'text-[#1A1A1A]/80',
        bg: 'border-[#1A1A1A]'
      };
    } else {
      return {
        rank: '下巴拉長面壁思過者 🗿',
        desc: '呃... 你可能不太懂港台話。沒關係，現在立刻點一杯半糖微冰珍奶，坐在角落好好把這五題背下來，再重新挑戰！',
        color: 'text-[#1A1A1A]/60',
        bg: 'border-[#1A1A1A]/30'
      };
    }
  };

  const rank = getRankInfo(score);

  return (
    <section id="game" className="py-24 bg-[#F5F5F0] border-t border-[#1A1A1A]/20 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <Sparkles size={12} className="text-[#1A1A1A]" /> INTERACTIVE GAME / 港台文化大挑戰
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#1A1A1A] uppercase tracking-tight">
            台港用語大作戰
          </h2>
          <p className="text-[#1A1A1A]/80 text-sm mt-3 max-w-xl mx-auto font-sans">
            你有多懂台灣與香港的生活用語？答對有獎，答錯將面臨爵爵與貓叔的無情精神吐槽！
          </p>
          <div className="h-[2px] w-12 bg-[#1A1A1A] mx-auto mt-4" />
        </div>

        {/* Game Container */}
        <div className="bg-white border border-[#1A1A1A] rounded-none p-6 md:p-10 brutalist-shadow-dark min-h-[460px] flex flex-col justify-between">
          
          {!gameFinished ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}
                className="flex-1 flex flex-col justify-between"
              >
                {/* Game Header Progress */}
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-4 mb-6">
                  <span className="text-xs font-mono font-bold text-[#1A1A1A]/50">
                    問題 {currentQuestionIndex + 1} / {CULTURE_QUESTIONS.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#1A1A1A] font-bold bg-[#F5F5F0] border border-[#1A1A1A]/20 px-2.5 py-1 rounded-none">
                      目前得分: {score}
                    </span>
                  </div>
                </div>

                {/* Question Area */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-[#1A1A1A] font-bold px-2.5 py-1 bg-white border border-[#1A1A1A] rounded-none uppercase">
                    台灣用語
                  </span>
                  <h3 className="font-serif italic font-bold text-3xl md:text-4xl text-[#1A1A1A] mt-3 flex items-center gap-3">
                    「{currentQuestion.phraseTW}」
                    <span className="text-sm font-sans font-normal text-[#1A1A1A]/60">
                      在廣東話中通常叫什麼？
                    </span>
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/60 font-mono mt-2">
                    語意釋義：{currentQuestion.meaning}
                  </p>
                </div>

                {/* Choices Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {currentQuestion.choices.map((choice, index) => {
                    let btnStyle = 'border-[#1A1A1A]/20 bg-white text-[#1A1A1A] hover:border-[#1A1A1A]';
                    
                    if (isAnswered) {
                      if (index === currentQuestion.correctAnswerIndex) {
                        // Correct answer
                        btnStyle = 'border-[#1A1A1A] bg-[#1A1A1A] text-[#F5F5F0] font-bold';
                      } else if (index === selectedAnswerIndex) {
                        // User chose incorrect
                        btnStyle = 'border-[#1A1A1A]/40 bg-[#F5F5F0] text-[#1A1A1A]/50 font-medium line-through';
                      } else {
                        btnStyle = 'border-[#1A1A1A]/5 bg-white text-[#1A1A1A]/30 cursor-not-allowed';
                      }
                    }

                    return (
                      <button
                        key={index}
                        id={`game-choice-${index}`}
                        onClick={() => handleAnswerClick(index)}
                        disabled={isAnswered}
                        className={`w-full text-left p-4 rounded-none border cursor-pointer transition-all duration-200 text-sm md:text-base flex items-center justify-between ${btnStyle}`}
                      >
                        <span className="font-serif font-bold italic">{choice}</span>
                        <span className="text-xs font-mono text-[#1A1A1A]/40">0{index + 1}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Roasts/Feedback Block */}
                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 bg-[#F5F5F0] rounded-none border border-[#1A1A1A] mb-6 flex flex-col gap-4 relative overflow-hidden"
                  >
                    {selectedAnswerIndex === currentQuestion.correctAnswerIndex ? (
                      <div className="absolute top-2 right-2 text-[#1A1A1A] font-mono text-[9px] font-bold uppercase tracking-wider border border-[#1A1A1A] px-2 py-0.5 rounded-none">
                        ✦ 答對了！
                      </div>
                    ) : (
                      <div className="absolute top-2 right-2 text-[#1A1A1A]/60 font-mono text-[9px] font-bold uppercase tracking-wider border border-[#1A1A1A]/30 px-2 py-0.5 rounded-none">
                        ✦ 答錯啦！
                      </div>
                    )}

                    {/* Jiejie Quote */}
                    <div className="flex gap-3 items-start">
                      <div className="w-9 h-9 shrink-0 rounded-none bg-white border border-[#1A1A1A] flex items-center justify-center font-serif italic font-bold text-xs text-[#1A1A1A]">
                        TW
                      </div>
                      <div>
                        <p className="text-xs font-mono font-bold text-[#1A1A1A]">爵爵 🗣️ :</p>
                        <p className="text-xs text-[#1A1A1A]/80 italic mt-0.5 leading-relaxed font-serif">
                          「{currentQuestion.jiejieRoast}」
                        </p>
                      </div>
                    </div>

                    {/* Cat Quote */}
                    <div className="flex gap-3 items-start border-t border-[#1A1A1A]/10 pt-3">
                      <div className="w-9 h-9 shrink-0 rounded-none bg-white border border-[#1A1A1A] flex items-center justify-center font-serif italic font-bold text-xs text-[#1A1A1A]">
                        HK
                      </div>
                      <div>
                        <p className="text-xs font-mono font-bold text-[#1A1A1A]">貓叔 🗣️ :</p>
                        <p className="text-xs text-[#1A1A1A]/80 italic mt-0.5 leading-relaxed font-serif">
                          「{currentQuestion.catRoast}」
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Action Controls */}
                <div className="flex items-center justify-between border-t border-[#1A1A1A]/10 pt-4 mt-2">
                  <button
                    id="game-hint-btn"
                    onClick={() => setShowHint(!showHint)}
                    disabled={isAnswered}
                    className={`text-xs font-mono font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-none border border-[#1A1A1A]/10 transition-colors ${
                      isAnswered 
                        ? 'text-[#1A1A1A]/30 cursor-not-allowed border-transparent' 
                        : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F5F5F0]'
                    }`}
                  >
                    <HelpCircle size={14} /> {showHint ? '隱藏提示' : '求救提示'}
                  </button>

                  <button
                    id="game-next-btn"
                    onClick={handleNext}
                    disabled={!isAnswered}
                    className={`px-5 py-2.5 rounded-none border font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all duration-150 cursor-pointer ${
                      !isAnswered
                        ? 'opacity-30 bg-[#F5F5F0] text-[#1A1A1A]/40 border-[#1A1A1A]/10 cursor-not-allowed'
                        : 'bg-[#1A1A1A] text-[#F5F5F0] border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A]'
                    }`}
                  >
                    {currentQuestionIndex === CULTURE_QUESTIONS.length - 1 ? '看結算分數' : '下一題 / NEXT'}
                  </button>
                </div>

                {/* Hint Text Block */}
                {showHint && !isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-3 bg-[#F5F5F0] border border-[#1A1A1A]/20 text-[#1A1A1A] rounded-none text-xs font-mono leading-relaxed"
                  >
                    💡 提示：{currentQuestion.hint}
                  </motion.div>
                )}

              </motion.div>
            </AnimatePresence>
          ) : (
            /* GAME FINISHED SCOREBOARD SCREEN */
            <motion.div
              id="game-scoreboard"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center flex flex-col items-center justify-center py-6"
            >
              <div className="w-16 h-16 bg-[#1A1A1A] text-[#F5F5F0] rounded-full border border-[#1A1A1A] flex items-center justify-center mb-6">
                <Award size={32} />
              </div>

              <h3 className="font-serif italic font-bold text-3xl text-[#1A1A1A] mb-2">
                挑戰結束！
              </h3>
              <p className="text-[#1A1A1A]/60 text-xs font-mono uppercase tracking-widest mb-6">
                FINAL SCORE REPORT
              </p>

              {/* Score Display */}
              <div className="relative mb-8">
                <div className="text-7xl md:text-8xl font-serif italic font-black text-[#1A1A1A] tracking-tighter">
                  {score}<span className="text-lg text-[#1A1A1A]/50 font-mono">/100</span>
                </div>
                {score === 100 && (
                  <div className="absolute -top-3 -right-6 bg-[#1A1A1A] text-[#F5F5F0] text-[10px] font-bold px-2 py-0.5 rounded-none uppercase transform rotate-[15deg]">
                    PERFECT!
                  </div>
                )}
              </div>

              {/* Rank Card */}
              <div className={`max-w-md w-full p-6 bg-white rounded-none border border-[#1A1A1A] brutalist-shadow-dark mb-8 text-center`}>
                <h4 className={`font-serif italic font-bold text-xl md:text-2xl mb-3 ${rank.color}`}>
                  {rank.rank}
                </h4>
                <p className="text-[#1A1A1A]/80 text-xs md:text-sm leading-relaxed font-sans">
                  {rank.desc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  id="game-restart-btn"
                  onClick={handleRestart}
                  className="px-6 py-3 bg-[#1A1A1A] text-[#F5F5F0] font-sans font-bold text-xs uppercase tracking-wider rounded-none border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] transition-all duration-150 flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCw size={14} /> 重新挑戰 / RETRY
                </button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}

