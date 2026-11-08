/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Trophy, Sparkles, Award, RotateCcw } from 'lucide-react';
import { WeekData, Language } from '../../types';
import { ACHIEVEMENTS_META, getWeekProgress } from '../../services/achievementService';

interface SectionCompletionCardProps {
  section: 'practice' | 'create';
  weekData: WeekData;
  language: Language;
  theme: { border: string; text: string; bg: string; accent: string; gradient: string };
  isCompleted: boolean;
  onToggleComplete: () => void;
  onViewBadge?: () => void;
}

export const SectionCompletionCard: React.FC<SectionCompletionCardProps> = ({
  section,
  weekData,
  language,
  theme,
  isCompleted,
  onToggleComplete,
  onViewBadge,
}) => {
  const meta = ACHIEVEMENTS_META[weekData.id];
  const progress = getWeekProgress(weekData.id);
  const otherSectionCompleted =
    section === 'practice' ? progress.createCompleted : progress.practiceCompleted;
  const bothCompleted = isCompleted && otherSectionCompleted;

  const sectionNameEn = section === 'practice' ? 'Explore & Practice' : 'Create & Display';
  const sectionNameId = section === 'practice' ? 'Jelajahi & Latih' : 'Buat & Pajang';
  const otherSectionNameEn = section === 'practice' ? 'Create & Display' : 'Explore & Practice';
  const otherSectionNameId = section === 'practice' ? 'Buat & Pajang' : 'Jelajahi & Latih';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative mt-12 rounded-[40px] p-6 sm:p-8 border-4 overflow-hidden transition-all shadow-xl ${
        bothCompleted
          ? 'bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-yellow-400 ring-4 ring-yellow-300/40'
          : isCompleted
          ? 'bg-emerald-50 border-emerald-400'
          : `bg-white ${theme.border}`
      }`}
    >
      {/* Decorative background sparkles */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-yellow-200 rounded-bl-full opacity-30 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-center md:text-left">
          {/* Status Icon */}
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center text-3xl sm:text-4xl shadow-md flex-shrink-0 transition-transform ${
              bothCompleted
                ? `bg-gradient-to-br ${meta?.colorGradient || 'from-yellow-400 to-amber-500'} text-white animate-bounce`
                : isCompleted
                ? 'bg-emerald-500 text-white'
                : `${theme.bg} ${theme.text}`
            }`}
          >
            {bothCompleted ? (
              meta?.emoji || '🏆'
            ) : isCompleted ? (
              <CheckCircle2 size={36} />
            ) : section === 'practice' ? (
              '🎯'
            ) : (
              '✂️'
            )}
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span
                className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                  bothCompleted
                    ? 'bg-yellow-200 text-yellow-900'
                    : isCompleted
                    ? 'bg-emerald-200 text-emerald-900'
                    : `${theme.bg} ${theme.text}`
                }`}
              >
                {bothCompleted
                  ? (language === 'en' ? '🏆 Week Badge Unlocked!' : '🏆 Lencana Minggu Ini Terbuka!')
                  : isCompleted
                  ? (language === 'en' ? '✓ Section Completed (1/2)' : '✓ Bagian Selesai (1/2)')
                  : (language === 'en' ? 'Achievement Milestone' : 'Tonggak Prestasi')}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-fredoka font-black text-slate-900 uppercase tracking-tight">
              {bothCompleted
                ? (language === 'en'
                    ? `${meta?.badgeTitleEn || weekData.title} Unlocked!`
                    : `${meta?.badgeTitleId || weekData.title} Terbuka!`)
                : isCompleted
                ? (language === 'en'
                    ? `${sectionNameEn} Completed!`
                    : `${sectionNameId} Selesai!`)
                : (language === 'en'
                    ? `Finished this section?`
                    : `Sudah selesai bagian ini?`)}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 font-fredoka font-semibold max-w-xl">
              {bothCompleted
                ? (language === 'en'
                    ? `Awesome work! You completed both Practice and Create sections for ${weekData.title}!`
                    : `Luar biasa! Kamu telah menyelesaikan Latihan dan Kreasi untuk ${weekData.title}!`)
                : isCompleted
                ? (language === 'en'
                    ? `Great job! Now complete the ${otherSectionNameEn} section to earn the ${meta?.badgeTitleEn || weekData.badge} badge!`
                    : `Bagus sekali! Sekarang selesaikan bagian ${otherSectionNameId} untuk membuka lencana ${meta?.badgeTitleId || weekData.badge}!`)
                : (language === 'en'
                    ? `Mark this section as done to track your progress toward the ${weekData.badge} badge.`
                    : `Tandai bagian ini selesai untuk melangkah menuju lencana ${weekData.badge}.`)}
            </p>
          </div>
        </div>

        {/* Buttons / Actions */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center">
          {bothCompleted && onViewBadge && (
            <button
              onClick={onViewBadge}
              className="px-6 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white font-fredoka font-black text-base shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2"
            >
              <Sparkles size={20} />
              <span>{language === 'en' ? 'Celebration & Badge' : 'Perayaan & Lencana'}</span>
            </button>
          )}

          <button
            onClick={onToggleComplete}
            className={`px-6 py-4 rounded-2xl font-fredoka font-black text-base shadow-md transition-all active:scale-95 flex items-center gap-2 ${
              isCompleted
                ? 'bg-white border-2 border-emerald-400 text-emerald-700 hover:bg-emerald-100'
                : `bg-gradient-to-r ${theme.gradient} text-white hover:scale-105 shadow-lg`
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 size={20} className="text-emerald-600" />
                <span>{language === 'en' ? 'Completed ✓ (Tap to Undo)' : 'Selesai ✓ (Batal)'}</span>
              </>
            ) : (
              <>
                <Award size={20} />
                <span>
                  {section === 'practice'
                    ? (language === 'en' ? 'Mark Practice as Done! ✓' : 'Tandai Latihan Selesai! ✓')
                    : (language === 'en' ? 'I Made My Project! ✓' : 'Saya Sudah Membuat Proyekku! ✓')}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
