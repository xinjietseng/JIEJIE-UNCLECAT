/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Comic {
  id: string;
  title: string;
  publishDate: string;
  category: 'office' | 'culture' | 'relationship' | 'daily';
  description: string;
  panels: string[]; // SVGs or custom drawing descriptions / URL paths
}

export interface Collaboration {
  id: string;
  brandName: string;
  projectTitle: string;
  year: string;
  category: 'finance' | 'lifestyle' | 'gaming' | 'food' | 'fmcg';
  logoPlaceholder: string;
  imageUrl: string;
  tagline: string;
  story: string;
  achievement: string;
}

export interface MerchItem {
  id: string;
  title: string;
  priceTWD: number;
  priceHKD: number;
  imageUrl: string;
  description: string;
  tags: string[];
  isHot?: boolean;
}

export interface CultureQuestion {
  id: string;
  phraseTW: string;
  phraseHK: string;
  meaning: string;
  choices: string[];
  correctAnswerIndex: number;
  hint: string;
  jiejieRoast: string;
  catRoast: string;
}
