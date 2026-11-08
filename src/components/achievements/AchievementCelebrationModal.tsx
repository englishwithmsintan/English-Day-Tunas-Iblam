/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Sparkles, CheckCircle2, Award, ArrowRight, Volume2, X } from 'lucide-react';
import { WeekData, Language } from '../../types';
import { ACHIEVEMENTS_META, triggerAchievementConfetti, playVictoryChime } from '../../services/achievementService';
import { speakQueued } from '../../services/ttsService';

interface AchievementCelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  weekData: WeekData;
  language: Language;
  onOpenGallery: () => void;
  onNavigateToShare?: () => void;
}

export const AchievementCelebrationModal: React.FC<AchievementCelebrationModalProps> = ({
  isOpen,
  onClose,
  weekData,
  language,
  onOpenGallery,
  onNavigateToShare,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const meta = ACHIEVEMENTS_META[weekData.id];

  useEffect(() => {
    if (isOpen) {
      triggerAchievementConfetti();
      playVictoryChime();

      // Cheerful voice announcement
      const spokenText =
        language === 'en'
          ? `Congratulations! You unlocked the ${meta?.badgeTitleEn || weekData.title} badge! Outstanding work!`
          : `Selamat! Kamu membuka lencana ${meta?.badgeTitleId || weekData.title}! Kerja yang luar biasa!`;

      speakQueued(spokenText, 'cheerful').catch(() => {});
    }
  }, [isOpen, weekData.id, language]);

  if (!isOpen || !meta) return null;

  const handleSpeak = async () => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    try {
      const text =
        language === 'en'
          ? `Congratulations! You mastered both Practice and Create for ${weekData.title}! You earned the ${meta.badgeTitleEn} badge!`
          : `Selamat! Kamu telah menyelesaikan Latihan dan Kreasi untuk ${weekData.title}! Kamu mendapatkan lencana ${meta.badgeTitleId}!`;
      await speakQueued(text, 'cheerful');
    } finally {
      setIsSpeaking(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="relative w-full max-w-xl bg-white border-8 border-yellow-400 rounded-[48px] p-6 sm:p-10 shadow-2xl text-center overflow-hidden z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Sparkles background elements */}
          <div className="absolute top-2 left-6 text-yellow-400 animate-spin" style={{ animationDuration: '6s' }}>
            <Sparkles size={36} />
          </div>
          <div className="absolute top-10 right-16 text-amber-400 animate-bounce">
            <Sparkles size={28} />
          </div>
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-yellow-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-100 rounded-full blur-2xl opacity-60 pointer-events-none" />

          {/* Grand Header */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 border-2 border-yellow-400 text-yellow-800 text-xs sm:text-sm font-fredoka font-black uppercase tracking-widest mb-4 shadow-sm animate-pulse">
            <Trophy size={18} className="text-yellow-600" />
            {language === 'en' ? 'Achievement Unlocked!' : 'Prestasi Terbuka!'}
          </div>

          {/* Big Animated 3D-Style Badge */}
          <div className="relative my-4 flex justify-center">
            <motion.div
              animate={{
                rotate: [0, -5, 5, -3, 3, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br ${meta.colorGradient} p-2 shadow-2xl flex items-center justify-center border-4 border-white ring-8 ring-yellow-300/60`}
            >
              <div className="w-full h-full rounded-full bg-white/95 flex flex-col items-center justify-center p-3 shadow-inner">
                <span className="text-5xl sm:text-6xl drop-shadow-md select-none">
                  {meta.emoji}
                </span>
                <span className="font-fredoka font-black text-xs sm:text-sm text-slate-800 uppercase tracking-wider mt-1">
                  {meta.badge.split(' ')[0]} {meta.badge.split(' ')[1]}
                </span>
                <span className="text-[10px] font-fredoka font-bold text-amber-600 uppercase tracking-widest">
                  ★ MASTERED ★
                </span>
              </div>
            </motion.div>
          </div>

          {/* Badge Title & Role */}
          <h2 className="text-3xl sm:text-4xl font-fredoka font-black text-slate-900 uppercase tracking-tight mt-3">
            {language === 'en' ? meta.badgeTitleEn : meta.badgeTitleId}
          </h2>
          <div className="text-base sm:text-lg font-fredoka font-bold text-amber-600 mb-4 flex items-center justify-center gap-2">
            <Award size={20} />
            {language === 'en' ? meta.badgeRoleEn : meta.badgeRoleId} · {weekData.title}
          </div>

          {/* Praise message */}
          <p className="text-base sm:text-lg text-slate-600 font-fredoka font-semibold max-w-md mx-auto mb-6 leading-relaxed">
            {language === 'en' ? meta.descriptionEn : meta.descriptionId}
          </p>

          {/* Checkboxes of completed milestones */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-4 sm:p-5 mb-6 text-left max-w-md mx-auto space-y-2">
            <div className="flex items-center gap-3 text-emerald-600 font-fredoka font-bold text-sm sm:text-base">
              <CheckCircle2 size={22} className="flex-shrink-0" />
              <span>
                {language === 'en' ? 'Explore & Practice Section Completed' : 'Seksi Jelajahi & Latih Selesai'}
              </span>
            </div>
            <div className="flex items-center gap-3 text-emerald-600 font-fredoka font-bold text-sm sm:text-base">
              <CheckCircle2 size={22} className="flex-shrink-0" />
              <span>
                {language === 'en' ? 'Create & Display Hands-on Project Finished' : 'Proyek Buat & Pajang Selesai'}
              </span>
            </div>
          </div>

          {/* Audio voice replay */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleSpeak}
              disabled={isSpeaking}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-800 text-sm font-fredoka font-bold transition-all active:scale-95 shadow-sm"
            >
              <Volume2 size={18} />
              {language === 'en' ? 'Hear Celebration' : 'Dengarkan Ucapan'}
            </button>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                onClose();
                onOpenGallery();
              }}
              className="flex-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-fredoka font-black text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Trophy size={22} />
              {language === 'en' ? 'All Badges' : 'Semua Lencana'}
            </button>

            {onNavigateToShare ? (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToShare();
                }}
                className="flex-1 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-fredoka font-black text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{language === 'en' ? 'Share & Assess' : 'Bagikan & Nilai'}</span>
                <ArrowRight size={20} />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="flex-1 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-fredoka font-black text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                {language === 'en' ? 'Keep Learning!' : 'Lanjut Belajar!'}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
