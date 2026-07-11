/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MERCH_DATA } from '../data';
import { MerchItem } from '../types';
import { ShoppingBag, Star, Info, X, DollarSign, Sparkles } from 'lucide-react';

export default function MerchShowcase() {
  const [currency, setCurrency] = useState<'TWD' | 'HKD'>('TWD');
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [latestAddedItem, setLatestAddedItem] = useState<MerchItem | null>(null);

  const handleAddToBag = (item: MerchItem) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: (prevCart[item.id] || 0) + 1
    }));
    setLatestAddedItem(item);
    setShowCartPopup(true);
    
    // Auto hide the funny popup after 4 seconds
    setTimeout(() => {
      setShowCartPopup(false);
    }, 4000);
  };

  const getCartTotalItems = () => {
    let total = 0;
    Object.keys(cart).forEach((key) => {
      total += cart[key] || 0;
    });
    return total;
  };

  const clearCart = () => {
    setCart({});
  };

  // Funny customized shopping quotes for each item
  const getFunnyCartRoast = (itemId: string) => {
    switch (itemId) {
      case 'merch-1':
        return '【りしれ供お帽T】逮捕成功！穿去開會時記得一直盯著老闆，下巴抬高20度，保證全辦公室沒人敢指使你幹活！';
      case 'merch-2':
        return '【死撚開潮T】帶回家！社恐必備戰袍！坐捷運或地鐵時如果有人想擠過來，直接把背後的貓叔亮給他看，萬邪不侵！';
      case 'merch-3':
        return '【踩小人防滑襪】裝袋完成！彰化神襪發威！每走一步都是對隔壁部門無良八婆或背骨仔的降維打擊！踏碎他們！';
      case 'merch-4':
        return '【阿猩健身盲盒】成功解鎖！阿猩的爆汗肌肉正在散發公益的光芒，請把它放在電腦桌旁，代替你每天對著螢幕爆青筋！';
      default:
        return '神祕周邊裝袋！即將迎來充滿歡笑與吐槽的精采人生！';
    }
  };

  return (
    <section id="shop" className="py-24 border-t border-[#1A1A1A] bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs font-mono text-[#1A1A1A]/70 uppercase tracking-widest mb-2 flex items-center justify-center md:justify-start gap-1.5">
              <ShoppingBag size={12} className="text-[#1A1A1A]" /> EXCLUSIVE MERCH / 潮流限量周邊
            </p>
            <h2 className="font-display font-black text-4xl md:text-6xl text-[#1A1A1A] uppercase tracking-tight">
              限量潮物 ✦ 怨氣周邊
            </h2>
            <p className="text-[#1A1A1A]/80 text-sm mt-2 font-sans">
              穿上最頂的街頭極簡態度，不用開口，直接讓周邊替你高分貝吐槽！
            </p>
          </div>

          {/* Controls: Currency Toggle & Virtual Cart Info */}
          <div className="flex items-center gap-4">
            {/* Currency Selector */}
            <div className="flex bg-[#F5F5F0] border border-[#1A1A1A]/20 p-1 rounded-none">
              <button
                id="currency-twd-btn"
                onClick={() => setCurrency('TWD')}
                className={`px-3 py-1.5 rounded-none font-mono text-xs font-bold transition-all cursor-pointer ${
                  currency === 'TWD' ? 'bg-[#1A1A1A] text-[#F5F5F0]' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                TWD ($)
              </button>
              <button
                id="currency-hkd-btn"
                onClick={() => setCurrency('HKD')}
                className={`px-3 py-1.5 rounded-none font-mono text-xs font-bold transition-all cursor-pointer ${
                  currency === 'HKD' ? 'bg-[#1A1A1A] text-[#F5F5F0]' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                HKD (HK$)
              </button>
            </div>

            {/* Virtual Shopping bag counter */}
            <div className="relative p-3 bg-white border border-[#1A1A1A] rounded-none brutalist-shadow-dark flex items-center justify-center">
              <ShoppingBag size={18} className="text-[#1A1A1A]" />
              {getCartTotalItems() > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#1A1A1A] text-[#F5F5F0] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#F5F5F0]">
                  {getCartTotalItems()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Merch Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MERCH_DATA.map((item) => {
            const price = currency === 'TWD' ? `${item.priceTWD}` : `${item.priceHKD}`;
            const currencySymbol = currency === 'TWD' ? 'NT$' : 'HK$';
            const inCartCount = cart[item.id] || 0;

            return (
              <motion.div
                key={item.id}
                id={`merch-card-${item.id}`}
                whileHover={{ y: -4 }}
                className="bg-white border border-[#1A1A1A] rounded-none p-4 flex flex-col justify-between relative brutalist-shadow-dark hover:bg-[#F5F5F0]/20 transition-all duration-300 overflow-hidden"
              >
                {/* Hot item Tag */}
                {item.isHot && (
                  <div className="absolute top-3 left-3 z-10 bg-[#1A1A1A] text-[#F5F5F0] text-[8px] font-mono font-bold px-2 py-0.5 rounded-none border border-[#1A1A1A] transform rotate-[-4deg] uppercase shadow-sm">
                    HOT SELLER
                  </div>
                )}

                {/* Main Product Image Container */}
                <div className="aspect-square bg-[#F5F5F0] rounded-none overflow-hidden mb-4 border border-[#1A1A1A]/10 relative group">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info and price */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="text-[9px] font-mono font-bold bg-[#F5F5F0] text-[#1A1A1A]/60 px-1.5 py-0.5 rounded-none border border-[#1A1A1A]/5">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif italic font-bold text-sm md:text-base text-[#1A1A1A] tracking-tight leading-snug line-clamp-2 min-h-[44px]">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#1A1A1A]/70 mt-2 line-clamp-3 leading-relaxed font-sans font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono text-[#1A1A1A]/50 uppercase">PRICE</p>
                      <p className="font-mono font-bold text-base md:text-lg text-[#1A1A1A]">
                        {currencySymbol} {price}
                      </p>
                    </div>

                    <button
                      id={`add-to-bag-btn-${item.id}`}
                      onClick={() => handleAddToBag(item)}
                      className="px-4 py-2 bg-[#1A1A1A] text-[#F5F5F0] font-sans font-bold text-xs rounded-none border border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>裝入購物袋</span>
                      {inCartCount > 0 && (
                        <span className="bg-[#F5F5F0] text-[#1A1A1A] w-3.5 h-3.5 rounded-full text-[9px] font-bold flex items-center justify-center">
                          {inCartCount}
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clear Cart link option */}
        {getCartTotalItems() > 0 && (
          <div className="text-center mt-10">
            <button
              id="clear-cart-btn"
              onClick={clearCart}
              className="text-xs font-mono text-[#1A1A1A]/50 hover:text-[#1A1A1A] hover:underline flex items-center gap-1 mx-auto cursor-pointer"
            >
              清空虛擬購物車 / CLEAR CART
            </button>
          </div>
        )}

      </div>

      {/* FLOATING FUNNY BAG ADDED NOTIFICATION POPUP */}
      <AnimatePresence>
        {showCartPopup && latestAddedItem && (
          <motion.div
            id="shopping-notification-popup"
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white border border-[#1A1A1A] rounded-none p-5 shadow-2xl brutalist-shadow-dark"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#F5F5F0] border border-[#1A1A1A]/20 rounded-none flex items-center justify-center text-2xl shrink-0">
                🎒
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono text-[#1A1A1A]/60 uppercase font-bold tracking-widest flex items-center gap-1">
                    <Sparkles size={11} /> VIRTUAL CART / 購物袋快報
                  </span>
                  <button
                    id="close-cart-popup-btn"
                    onClick={() => setShowCartPopup(false)}
                    className="text-[#1A1A1A]/40 hover:text-[#1A1A1A]"
                  >
                    <X size={14} />
                  </button>
                </div>
                <h4 className="font-serif italic font-bold text-sm text-[#1A1A1A] mt-1">
                  裝袋成功！
                </h4>
                <p className="text-[11px] text-[#1A1A1A]/80 font-sans mt-2 leading-relaxed italic border-l-2 border-[#1A1A1A] pl-2 py-0.5 font-light">
                  {getFunnyCartRoast(latestAddedItem.id)}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
