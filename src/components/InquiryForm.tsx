/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle2, User, Building2, HelpCircle, Coins, Sparkles } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    type: 'merch',
    budget: 'mid',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.company.trim()) newErrors.company = '請填寫公司或品牌名稱';
    if (!formData.name.trim()) newErrors.name = '請填寫聯絡人姓名';
    if (!formData.email.trim()) {
      newErrors.email = '請填寫電子信箱';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '信箱格式不正確';
    }
    if (!formData.message.trim()) newErrors.message = '請簡述您的合作企劃';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F5F0] border-t border-[#1A1A1A] relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
            <Mail size={12} className="text-[#1A1A1A]" /> BUSINESS INQUIRIES / 合作洽談
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#1A1A1A] uppercase tracking-tight">
            跟我們聯名 ✦ 搶佔社群
          </h2>
          <p className="text-[#1A1A1A]/80 text-sm mt-3 max-w-xl mx-auto font-sans">
            歡迎各大品牌、企業、出版社前來洽談插畫委託、社群曝光或商品聯名授權。
          </p>
          <div className="h-[2px] w-12 bg-[#1A1A1A] mx-auto mt-4" />
        </div>

        {/* Form Container with Editorial Style */}
        <div className="bg-white border border-[#1A1A1A] rounded-none p-6 md:p-10 brutalist-shadow-dark min-h-[500px] flex flex-col justify-center">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-wider flex items-center gap-1">
                      <Building2 size={12} /> 品牌 / 公司名稱
                    </label>
                    <input
                      type="text"
                      id="input-company"
                      placeholder="例如：王道銀行 / 韋恩咖啡"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full px-4 py-3 bg-white rounded-none border text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-colors ${
                        errors.company ? 'border-red-600' : 'border-[#1A1A1A]/30'
                      }`}
                    />
                    {errors.company && <p className="text-red-600 text-[11px] font-mono">{errors.company}</p>}
                  </div>

                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-wider flex items-center gap-1">
                      <User size={12} /> 聯絡人姓名
                    </label>
                    <input
                      type="text"
                      id="input-name"
                      placeholder="例如：王小明 經理"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 bg-white rounded-none border text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-colors ${
                        errors.name ? 'border-red-600' : 'border-[#1A1A1A]/30'
                      }`}
                    />
                    {errors.name && <p className="text-red-600 text-[11px] font-mono">{errors.name}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-wider flex items-center gap-1">
                      <Mail size={12} /> 電子信箱
                    </label>
                    <input
                      type="email"
                      id="input-email"
                      placeholder="service@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 bg-white rounded-none border text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-colors ${
                        errors.email ? 'border-red-600' : 'border-[#1A1A1A]/30'
                      }`}
                    />
                    {errors.email && <p className="text-red-600 text-[11px] font-mono">{errors.email}</p>}
                  </div>

                  {/* Collab Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-wider flex items-center gap-1">
                      <HelpCircle size={12} /> 合作類型
                    </label>
                    <select
                      id="select-type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-none border border-[#1A1A1A]/30 text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="merch">周邊商品聯名開發</option>
                      <option value="social">社群圖文推廣 campaign</option>
                      <option value="illustration">插畫形象授權委託</option>
                      <option value="book">圖書出版或海外經紀</option>
                    </select>
                  </div>
                </div>

                {/* Budget level selection */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-wider flex items-center gap-1">
                    <Coins size={12} /> 您的專案預算級距
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { id: 'low', title: '小資預算 💰', desc: '預備好迎接貓叔的冷笑' },
                      { id: 'mid', title: '正常標準 💵', desc: '爵爵下巴會露出微笑' },
                      { id: 'high', title: '充足大氣 💎', desc: '我們可以為您爬喜馬拉雅山' }
                    ].map((budget) => (
                      <button
                        key={budget.id}
                        type="button"
                        id={`budget-choice-${budget.id}`}
                        onClick={() => setFormData({ ...formData, budget: budget.id })}
                        className={`p-3.5 rounded-none border text-left cursor-pointer transition-all ${
                          formData.budget === budget.id
                            ? 'border-[#1A1A1A] bg-[#F5F5F0] text-[#1A1A1A]'
                            : 'border-[#1A1A1A]/20 bg-white text-[#1A1A1A]/60 hover:border-[#1A1A1A]'
                        }`}
                      >
                        <p className="text-xs font-bold font-serif italic">{budget.title}</p>
                        <p className="text-[10px] font-mono text-[#1A1A1A]/50 mt-1">{budget.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles size={12} className="text-[#1A1A1A]" /> 合作企劃簡述 (與我們分享您的好主意！)
                  </label>
                  <textarea
                    id="input-message"
                    rows={4}
                    placeholder="例如：我們希望與爵爵貓叔推出一款「防小人除怨氣」的限量辦公室鍵盤，希望能授權插圖..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 bg-white rounded-none border text-sm text-[#1A1A1A] focus:outline-none focus:ring-1 focus:ring-[#1A1A1A] transition-colors resize-none ${
                      errors.message ? 'border-red-600' : 'border-[#1A1A1A]/30'
                    }`}
                  />
                  {errors.message && <p className="text-red-600 text-[11px] font-mono">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#1A1A1A] text-[#F5F5F0] font-sans font-bold uppercase tracking-wider text-sm rounded-none border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 rounded-full border-2 border-[#F5F5F0] border-t-transparent animate-spin" />
                        <span>傳送合作怨念中...</span>
                      </>
                    ) : (
                      <>
                        <span>送出合作洽談 / SEND INQUIRY</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* SUBMITTED SUCCESS STATE WITH FUN DECORATIVE ROAST ANIMATION */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6 flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 bg-[#1A1A1A] text-[#F5F5F0] border border-[#1A1A1A] rounded-none flex items-center justify-center brutalist-shadow-dark">
                  <CheckCircle2 size={44} className="text-[#F5F5F0]" />
                </div>

                <div>
                  <h3 className="font-serif italic font-bold text-3xl text-[#1A1A1A]">
                    提案接收成功！
                  </h3>
                  <p className="text-[#1A1A1A]/60 text-xs font-mono tracking-widest mt-1">
                    老細/乾爹！我們收到您的神祕力量了！
                  </p>
                </div>

                {/* Highly custom, hilarious response card */}
                <div className="max-w-md w-full bg-[#F5F5F0] p-6 rounded-none border border-[#1A1A1A] brutalist-shadow-dark space-y-5 text-left">
                  {/* Jiejie gratitude */}
                  <div className="flex gap-3 items-start">
                    <div className="w-9 h-9 shrink-0 rounded-none bg-[#1A1A1A] border border-[#1A1A1A] flex items-center justify-center font-display font-black text-xs text-[#F5F5F0]">
                      TW
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-[#1A1A1A]">爵爵 🗣️ :</p>
                      <p className="text-xs text-[#1A1A1A]/80 italic mt-0.5 leading-relaxed font-sans font-light">
                        「哇哇哇！乾爹好！公司名稱聽起來就很霸氣耶！我已經把下巴拉長到 200 公分準備好畫畫了，保證用光速回信給您！啵啵啵！」
                      </p>
                    </div>
                  </div>

                  {/* Cat gratitude */}
                  <div className="flex gap-3 items-start border-t border-[#1A1A1A]/10 pt-4">
                    <div className="w-9 h-9 shrink-0 rounded-none bg-[#1A1A1A] border border-[#1A1A1A] flex items-center justify-center font-display font-black text-xs text-[#F5F5F0]">
                      HK
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold text-[#1A1A1A]">貓叔 🗣️ :</p>
                      <p className="text-xs text-[#1A1A1A]/80 italic mt-0.5 leading-relaxed font-sans font-light">
                        「{formData.budget === 'low' ? '小資預算喔？嘖，看在你有誠意的份上，我可以少寫一句吐槽。' : formData.budget === 'high' ? '充足大氣！老細！我們現在立刻開始寫合約！需要我爬喜馬拉雅山宣傳也可以！' : '正常標準預算，嗯，算你合情合理。'} 合作案已放進我的金庫，稍後會由信鴿在 24 小時內聯絡您的信箱：{formData.email}。」
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back button */}
                <div>
                  <button
                    id="back-to-form-btn"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        company: '',
                        name: '',
                        email: '',
                        type: 'merch',
                        budget: 'mid',
                        message: ''
                      });
                    }}
                    className="text-xs font-mono text-[#1A1A1A]/50 hover:text-[#1A1A1A] hover:underline cursor-pointer"
                  >
                    填寫另一份合作企劃 / SEND ANOTHER ONE
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
