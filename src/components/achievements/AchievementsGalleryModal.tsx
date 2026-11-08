/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, X, Star, Lock, CheckCircle2, RotateCcw, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { WeekData, WeekId, Language } from '../../types';
import {
  ACHIEVEMENTS_META,
  getStoredAchievements,
  saveStoredAchievements,
  playVictoryChime,
  triggerAchievementConfetti,
} from '../../services/achievementService';
import { speakQueued } from '../../services/ttsService';

interface AchievementsGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  weeks: WeekData[];
  language: Language;
  onSelectWeek: (weekId: WeekId) => void;
  onReplayCelebration: (week: WeekData) => void;
}

export const AchievementsGalleryModal: React.FC<AchievementsGalleryModalProps> = ({
  isOpen,
  onClose,
  weeks,
  language,
  onSelectWeek,
  onReplayCelebration,
}) => {
  const [selectedBadgeWeekId, setSelectedBadgeWeekId] = useState<WeekId | null>(null);
  const achievements = getStoredAchievements();

  if (!isOpen) return null;

  const totalWeeks = weeks.length;
  const unlockedWeeks = weeks.filter((w) => achievements[w.id]?.unlocked);
  const unlockedCount = unlockedWeeks.length;
  const percentComplete = Math.round((unlockedCount / totalWeeks) * 100);

  const selectedWeek = weeks.find((w) => w.id === selectedBadgeWeekId);
  const selectedMeta = selectedBadgeWeekId ? ACHIEVEMENTS_META[selectedBadgeWeekId] : null;
  const selectedProgress = selectedBadgeWeekId ? achievements[selectedBadgeWeekId] : null;

  const handleResetProgress = () => {
    const confirmText =
      language === 'en'
        ? 'Are you sure you want to reset your achievements? This will lock all badges so you can earn them again.'
        : 'Apakah kamu yakin ingin mengatur ulang prestasimu? Ini akan mengunci semua lencana agar kamu bisa meraihnya lagi.';
    if (window.confirm(confirmText)) {
      saveStoredAchievements({});
      // force reload or close
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/75 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white border-4 sm:border-8 border-yellow-400 rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b-2 border-slate-100 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-yellow-100 text-yellow-600 shadow-inner">
                <Trophy size={32} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-4xl font-fredoka font-black text-slate-900 uppercase tracking-tight">
                  {language === 'en' ? 'Student Achievements' : 'Prestasi Siswa'}
                </h2>
                <p className="text-xs sm:text-sm font-fredoka font-bold text-slate-500">
                  {language === 'en'
                    ? 'Complete Practice & Create in each week to unlock your badges!'
                    : 'Selesaikan Latihan & Kreasi di setiap minggu untuk membuka lencanamu!'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          {/* Progress Overview Card */}
          <div className="my-6 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-50 to-yellow-100 border-2 border-yellow-300 shadow-sm flex-shrink-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  {weeks.slice(0, 5).map((w) => (
                    <span
                      key={w.id}
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-white text-xs ${
                        achievements[w.id]?.unlocked ? 'bg-yellow-400 shadow-sm' : 'bg-slate-200 grayscale opacity-60'
                      }`}
                    >
                      {ACHIEVEMENTS_META[w.id]?.emoji || '⭐'}
                    </span>
                  ))}
                </div>
                <span className="font-fredoka font-black text-slate-800 text-lg sm:text-xl">
                  {unlockedCount} / {totalWeeks} {language === 'en' ? 'Badges Unlocked' : 'Lencana Terbuka'}
                </span>
              </div>
              <span className="font-fredoka font-black text-amber-700 text-base sm:text-lg">
                {percentComplete}% {language === 'en' ? 'Mastered' : 'Tuntas'}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-4 bg-white rounded-full overflow-hidden border border-yellow-300 p-0.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentComplete}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
              />
            </div>
          </div>

          {/* Badges Grid (scrollable) */}
          <div className="flex-1 overflow-y-auto pr-1 -mr-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-4">
              {weeks.map((week) => {
                const meta = ACHIEVEMENTS_META[week.id];
                const progress = achievements[week.id];
                const isUnlocked = !!progress?.unlocked;

                return (
                  <motion.div
                    key={week.id}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (isUnlocked) {
                        onReplayCelebration(week);
                      } else {
                        setSelectedBadgeWeekId(week.id);
                      }
                    }}
                    className={`relative p-5 rounded-3xl border-4 cursor-pointer transition-all ${
                      isUnlocked
                        ? `bg-white ${meta.borderColor} shadow-md hover:shadow-xl`
                        : 'bg-slate-50 border-slate-200 opacity-80 hover:opacity-100 hover:border-slate-300'
                    }`}
                  >
                    {/* Corner badge / star */}
                    {isUnlocked ? (
                      <div className="absolute top-3 right-3 text-amber-500 animate-pulse">
                        <Star className="w-6 h-6 fill-amber-400" />
                      </div>
                    ) : (
                      <div className="absolute top-3 right-3 text-slate-400">
                        <Lock className="w-5 h-5" />
                      </div>
                    )}

                    <div className="flex items-center gap-4">
                      {/* Emoji Icon Container */}
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-md border-2 ${
                          isUnlocked
                            ? `bg-gradient-to-br ${meta.colorGradient} text-white border-white ring-2 ring-yellow-400/50`
                            : 'bg-slate-200 text-slate-400 border-slate-300 grayscale'
                        }`}
                      >
                        {meta.emoji}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-fredoka font-black uppercase tracking-wider text-slate-400">
                          {week.badge.split(' ')[0]} {week.badge.split(' ')[1]}
                        </div>
                        <h3 className="font-fredoka font-black text-base text-slate-900 truncate">
                          {language === 'en' ? meta.badgeTitleEn : meta.badgeTitleId}
                        </h3>
                        <p className="text-xs font-fredoka font-semibold text-slate-500 truncate">
                          {language === 'en' ? meta.badgeRoleEn : meta.badgeRoleId}
                        </p>
                      </div>
                    </div>

                    {/* Progress indicators for Practice & Create */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-fredoka font-bold">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                            progress?.practiceCompleted
                              ? 'bg-emerald-500 text-white'
                              : 'bg-slate-200 text-slate-500'
                          }`}
                        >
                          {progress?.practiceCompleted ? '✓' : '•'}
                        </span>
                        <span className={progress?.practiceCompleted ? 'text-emerald-700' : 'text-slate-500'}>
                          {language === 'en' ? 'Practice' : 'Latih'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                            progress?.createCompleted
                              ? 'bg-emerald-500 text-white'
                              : 'bg-slate-200 text-slate-500'
                          }`}
                        >
                          {progress?.createCompleted ? '✓' : '•'}
                        </span>
                        <span className={progress?.createCompleted ? 'text-emerald-700' : 'text-slate-500'}>
                          {language === 'en' ? 'Create' : 'Kreasi'}
                        </span>
                      </div>

                      {isUnlocked && (
                        <span className="text-[10px] bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-black">
                          {language === 'en' ? 'REPLAY' : 'PUTAR'}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Locked Badge Detail Popover if student clicked a locked badge */}
          {selectedWeek && selectedMeta && !achievements[selectedWeek.id]?.unlocked && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 rounded-2xl bg-slate-50 border-2 border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedMeta.emoji}</span>
                <div>
                  <div className="font-fredoka font-black text-slate-800 text-base">
                    {language === 'en' ? selectedMeta.badgeTitleEn : selectedMeta.badgeTitleId} ({selectedWeek.badge})
                  </div>
                  <div className="text-xs text-slate-600 font-fredoka">
                    {language === 'en'
                      ? 'Complete both Practice and Create in this week to unlock this badge!'
                      : 'Selesaikan Latihan dan Kreasi minggu ini untuk membuka lencana ini!'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onSelectWeek(selectedWeek.id);
                    onClose();
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white font-fredoka font-black text-sm shadow flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <span>{language === 'en' ? 'Go to Week' : 'Buka Minggu Ini'}</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setSelectedBadgeWeekId(null)}
                  className="px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-fredoka font-bold text-xs"
                >
                  {language === 'en' ? 'Close' : 'Tutup'}
                </button>
              </div>
            </motion.div>
          )}

          {/* Footer with Reset option */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-fredoka font-bold flex-shrink-0">
            <span>SDNP Tunas Iblam · English Day Badge Showcase</span>
            <button
              onClick={handleResetProgress}
              className="hover:text-red-500 flex items-center gap-1 transition-colors text-slate-400"
              title="Reset achievements"
            >
              <RotateCcw size={14} />
              <span>{language === 'en' ? 'Reset Progress' : 'Atur Ulang'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
