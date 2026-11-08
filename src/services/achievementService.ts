/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import confetti from 'canvas-confetti';
import { WeekId, Language } from '../types';
import { getAudioContext } from './ttsService';

export interface WeekAchievementMeta {
  weekId: WeekId;
  badge: string; // e.g. "Week 1 🧊"
  emoji: string;
  badgeTitleEn: string;
  badgeTitleId: string;
  badgeRoleEn: string;
  badgeRoleId: string;
  descriptionEn: string;
  descriptionId: string;
  colorGradient: string;
  bgLight: string;
  borderColor: string;
}

export interface WeekProgress {
  practiceCompleted: boolean;
  createCompleted: boolean;
  unlocked: boolean;
  unlockedAt?: number;
}

export const ACHIEVEMENTS_META: Record<WeekId, WeekAchievementMeta> = {
  'break-the-ice': {
    weekId: 'break-the-ice',
    badge: 'Week 1 🧊',
    emoji: '🧊',
    badgeTitleEn: 'Ice Breaker Master',
    badgeTitleId: 'Master Pencair Suasana',
    badgeRoleEn: 'Personal Storyteller',
    badgeRoleId: 'Pencerita Pengalaman',
    descriptionEn: 'Shared past-tense memories and crafted a personal story card!',
    descriptionId: 'Membagikan cerita masa lalu dan membuat kartu cerita pribadi!',
    colorGradient: 'from-blue-400 to-indigo-600',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-400',
  },
  'early-bird': {
    weekId: 'early-bird',
    badge: 'Week 2 🐦',
    emoji: '🐦',
    badgeTitleEn: 'Early Bird Champion',
    badgeTitleId: 'Juara Burung Pagi',
    badgeRoleEn: 'Routine Master',
    badgeRoleId: 'Ahli Rutinitas Harian',
    descriptionEn: 'Mastered daily schedule priorities and created a routine planner!',
    descriptionId: 'Menguasai jadwal harian dan membuat panduan rutinitas!',
    colorGradient: 'from-amber-400 to-orange-500',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-400',
  },
  'penny-thoughts': {
    weekId: 'penny-thoughts',
    badge: 'Week 3 💰',
    emoji: '💰',
    badgeTitleEn: 'Thoughtful Critic',
    badgeTitleId: 'Pengkritik Bijak',
    badgeRoleEn: 'Opinion Leader',
    badgeRoleId: 'Pemberi Opini Sopan',
    descriptionEn: 'Compared choices politely and crafted an opinion showcase!',
    descriptionId: 'Membandingkan pilihan secara santun dan membuat karya opini!',
    colorGradient: 'from-emerald-400 to-teal-600',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-400',
  },
  'getting-to-know': {
    weekId: 'getting-to-know',
    badge: 'Week 4 💫',
    emoji: '💫',
    badgeTitleEn: 'Friendship Star',
    badgeTitleId: 'Bintang Persahabatan',
    badgeRoleEn: 'Super Connector',
    badgeRoleId: 'Penghubung Sahabat',
    descriptionEn: 'Interviewed classmates, shared hobbies, and built friendship bonds!',
    descriptionId: 'Mewawancarai teman, membagikan hobi, dan merajut persahabatan!',
    colorGradient: 'from-purple-400 to-fuchsia-600',
    bgLight: 'bg-purple-50',
    borderColor: 'border-purple-400',
  },
  'whats-the-scoop': {
    weekId: 'whats-the-scoop',
    badge: 'Week 5 📰',
    emoji: '📰',
    badgeTitleEn: 'Star Reporter',
    badgeTitleId: 'Wartawan Bintang',
    badgeRoleEn: 'Junior Journalist',
    badgeRoleId: 'Jurnalis Cilik',
    descriptionEn: 'Investigated 5W+1H questions and published a breaking news craft!',
    descriptionId: 'Menyelidiki pertanyaan 5W+1H dan menerbitkan karya berita utama!',
    colorGradient: 'from-rose-400 to-red-600',
    bgLight: 'bg-rose-50',
    borderColor: 'border-rose-400',
  },
  'lend-a-hand': {
    weekId: 'lend-a-hand',
    badge: 'Week 6 🤝',
    emoji: '🤝',
    badgeTitleEn: 'Helping Hand Hero',
    badgeTitleId: 'Pahlawan Penolong',
    badgeRoleEn: 'Polite Helper',
    badgeRoleId: 'Penolong Santun',
    descriptionEn: 'Practiced courteous requests and drew the "Polite Hand" project!',
    descriptionId: 'Melatih permohonan sopan dan menggambar proyek "Tangan Sopan"!',
    colorGradient: 'from-teal-400 to-cyan-600',
    bgLight: 'bg-teal-50',
    borderColor: 'border-teal-400',
  },
  'hunting-high-low': {
    weekId: 'hunting-high-low',
    badge: 'Week 7 🔍',
    emoji: '🔍',
    badgeTitleEn: 'Treasure Explorer',
    badgeTitleId: 'Penjelajah Harta Karun',
    badgeRoleEn: 'Navigator Scout',
    badgeRoleId: 'Pramuka Petualang',
    descriptionEn: 'Located hidden gems using prepositions and created a classroom map!',
    descriptionId: 'Menemukan harta karun dengan kata depan dan membuat peta kelas!',
    colorGradient: 'from-lime-500 to-green-600',
    bgLight: 'bg-lime-50',
    borderColor: 'border-lime-500',
  },
  'pat-on-back': {
    weekId: 'pat-on-back',
    badge: 'Week 8 👏',
    emoji: '👏',
    badgeTitleEn: 'Praise & Kindness Champion',
    badgeTitleId: 'Juara Pujian & Kebaikan',
    badgeRoleEn: 'Compliment Maker',
    badgeRoleId: 'Pemberi Pujian',
    descriptionEn: 'Spread compliments, said thank you, and designed the Praise Star!',
    descriptionId: 'Menyebarkan pujian, berterima kasih, dan mendesain Bintang Pujian!',
    colorGradient: 'from-pink-400 to-rose-600',
    bgLight: 'bg-pink-50',
    borderColor: 'border-pink-400',
  },
  'how-are-you-feeling': {
    weekId: 'how-are-you-feeling',
    badge: 'Week 9 😊',
    emoji: '😊',
    badgeTitleEn: 'Emotion Explorer',
    badgeTitleId: 'Penjelajah Perasaan',
    badgeRoleEn: 'Empathy Leader',
    badgeRoleId: 'Pemimpin Empati',
    descriptionEn: 'Expressed emotions honestly and created the Mood Thermometer!',
    descriptionId: 'Mengungkapkan emosi dengan jujur dan membuat Termometer Suasana Hati!',
    colorGradient: 'from-amber-400 to-pink-500',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-400',
  },
};

const STORAGE_KEY = 'tunas_iblam_english_achievements_v1';

export function getStoredAchievements(): Record<string, WeekProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse achievements', e);
    return {};
  }
}

export function saveStoredAchievements(data: Record<string, WeekProgress>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save achievements', e);
  }
}

export function getWeekProgress(weekId: WeekId): WeekProgress {
  const all = getStoredAchievements();
  return all[weekId] || {
    practiceCompleted: false,
    createCompleted: false,
    unlocked: false,
  };
}

export function setWeekSectionStatus(
  weekId: WeekId,
  section: 'practice' | 'create',
  completed: boolean
): { newlyUnlocked: boolean; progress: WeekProgress } {
  const all = getStoredAchievements();
  const current = all[weekId] || {
    practiceCompleted: false,
    createCompleted: false,
    unlocked: false,
  };

  const wasUnlocked = current.unlocked;

  const updated: WeekProgress = {
    ...current,
    practiceCompleted: section === 'practice' ? completed : current.practiceCompleted,
    createCompleted: section === 'create' ? completed : current.createCompleted,
  };

  // If both are completed, unlock the badge!
  const isNowUnlocked = updated.practiceCompleted && updated.createCompleted;
  updated.unlocked = isNowUnlocked;
  if (isNowUnlocked && !wasUnlocked) {
    updated.unlockedAt = Date.now();
  }

  all[weekId] = updated;
  saveStoredAchievements(all);

  const newlyUnlocked = isNowUnlocked && !wasUnlocked;
  return { newlyUnlocked, progress: updated };
}

export function getTotalUnlockedCount(): number {
  const all = getStoredAchievements();
  return Object.values(all).filter((p) => p.unlocked).length;
}

/**
 * Play a joyful synthesized victory chime fanfare using the browser AudioContext
 */
export function playVictoryChime(): void {
  try {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;
    
    // Joyful melodic fanfare arpeggio: C5 -> E5 -> G5 -> C6 -> E6
    const notes = [
      { freq: 523.25, time: 0, duration: 0.18, gainVal: 0.15 },
      { freq: 659.25, time: 0.12, duration: 0.18, gainVal: 0.15 },
      { freq: 783.99, time: 0.24, duration: 0.22, gainVal: 0.16 },
      { freq: 1046.50, time: 0.36, duration: 0.45, gainVal: 0.18 },
      { freq: 1318.51, time: 0.45, duration: 0.6, gainVal: 0.15 },
    ];

    notes.forEach(({ freq, time, duration, gainVal }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + time);

      gain.gain.setValueAtTime(0, now + time);
      gain.gain.linearRampToValueAtTime(gainVal, now + time + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + time + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + time);
      osc.stop(now + time + duration + 0.05);
    });
  } catch (e) {
    console.warn('Audio chime could not be played', e);
  }
}

/**
 * Multi-burst colorful confetti celebration for badge achievement!
 */
export function triggerAchievementConfetti(): void {
  const duration = 2500;
  const end = Date.now() + duration;

  // Center explosion
  confetti({
    particleCount: 70,
    spread: 90,
    origin: { y: 0.55 },
    colors: ['#38bdf8', '#fbbf24', '#34d399', '#f472b6', '#a78bfa', '#fb923c'],
  });

  // Animated side cannons
  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#38bdf8', '#fbbf24', '#34d399', '#f472b6'],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ['#38bdf8', '#fbbf24', '#34d399', '#f472b6'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
}
