/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Volume2, Sparkles, ClipboardList, History } from 'lucide-react';
import { GradeLevel, WeekData, Language } from '../types';
import { speak } from '../services/ttsService';

interface ConnectSectionProps {
  gradeLevel: GradeLevel;
  setGradeLevel: (grade: GradeLevel) => void;
  weekData: WeekData;
  theme: { border: string, text: string, bg: string, accent: string, gradient: string };
  language: Language;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ gradeLevel, setGradeLevel, weekData, theme, language }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = async (text: string) => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    await speak(text, 'cheerful');
    setIsSpeaking(false);
  };

  const phrases = gradeLevel === 'lower' ? weekData.keyPhrases.lower : weekData.keyPhrases.upper;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Review Section */}
      {weekData.review && (
        <div className={`bg-white border-4 ${theme.border} rounded-[32px] p-6 shadow-lg relative overflow-hidden`}>
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-xl ${theme.bg} ${theme.text}`}>
              <History size={24} />
            </div>
            <h3 className={`text-xl font-fredoka font-black ${theme.text} uppercase tracking-tight`}>
              {language === 'en' ? weekData.review.title : weekData.review.titleId}
            </h3>
          </div>
          <div className="bg-bg-light p-4 rounded-2xl border-2 border-bg-darker">
            <p className="text-t2 font-fredoka font-bold mb-2">
              <span className={theme.text}>{language === 'en' ? 'Activity:' : 'Aktivitas:'}</span> {language === 'en' ? weekData.review.activity : weekData.review.activityId}
            </p>
            <p className="text-t3 font-fredoka font-bold italic text-sm">
              ✨ {language === 'en' ? weekData.review.connection : weekData.review.connectionId}
            </p>
          </div>
        </div>
      )}

      <div className={`card border-4 ${theme.border}`}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div className="flex-1">
            <h2 className={`text-3xl md:text-4xl mb-4 flex items-center gap-4 ${theme.text} font-black`}>
              🎭 {language === 'en' ? 'Theme Reveal:' : 'Tema Hari Ini:'} "{language === 'en' ? weekData.title : weekData.titleId || weekData.title}"
            </h2>
            <p className="text-xl text-t2 leading-relaxed font-fredoka font-medium">
              {language === 'en' ? weekData.description : weekData.descriptionId || weekData.description}
            </p>
          </div>

          {/* Materials Needed */}
          {weekData.materials && (
            <div className={`w-full md:w-72 bg-bg-light border-2 ${theme.border} border-dashed rounded-3xl p-5`}>
              <h3 className={`text-sm font-fredoka font-black ${theme.text} uppercase tracking-widest mb-3 flex items-center gap-2`}>
                <ClipboardList size={16} />
                {language === 'en' ? 'Materials Needed' : 'Bahan yang Dibutuhkan'}
              </h3>
              <ul className="space-y-1.5">
                {(language === 'en' ? weekData.materials : weekData.materialsId)?.map((item, i) => (
                  <li key={i} className="text-[11px] font-fredoka font-bold text-t3 flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${theme.bg}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className={`bg-white border-4 ${theme.border} rounded-[40px] p-8 md:p-12 mb-8 text-center shadow-inner relative overflow-hidden`}>
          <p className={`text-2xl md:text-3xl font-fredoka ${theme.text} relative z-10 font-bold`}>
            {language === 'en' 
              ? '🤔 Learning about each other helps us build a better community!' 
              : '🤔 Mengenal satu sama lain membantu kita membangun komunitas yang lebih baik!'}
          </p>
          <div className={`absolute inset-0 ${theme.accent} opacity-30 pointer-events-none`} />
        </div>

        <div className="flex items-start gap-4 mb-8">
          <div className={`${theme.accent} p-3 rounded-xl mt-1`}>
            <Lightbulb className={`${theme.text} w-6 h-6`} />
          </div>
          <div>
            <p className={`text-xl ${theme.text} font-semibold`}>
              {language === 'en' 
                ? 'Today we become explorers of our own stories and talents!' 
                : 'Hari ini kita menjadi penjelajah cerita dan bakat kita sendiri!'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            key={`goal-${gradeLevel}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`
              rounded-[40px] p-10 text-center shadow-xl flex flex-col justify-center text-white relative overflow-hidden bg-gradient-to-br ${theme.gradient}
            `}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12" />
            <div className="text-sm uppercase tracking-[2px] opacity-80 font-fredoka mb-4 font-bold">
              {language === 'en' ? 'Our Goal Today' : 'Tujuan Kita Hari Ini'}
            </div>
            <div className="text-2xl md:text-3xl font-fredoka leading-tight font-bold">
              {gradeLevel === 'lower' 
                ? (language === 'en' ? weekData.goals.lower : weekData.goals.lowerId || weekData.goals.lower) 
                : (language === 'en' ? weekData.goals.upper : weekData.goals.upperId || weekData.goals.upper)}
            </div>
          </motion.div>

          <div className={`${theme.bg} p-8 rounded-[40px] border-2 border-white shadow-inner`}>
            <h3 className={`text-2xl font-fredoka ${theme.text} mb-6 flex items-center gap-2 font-bold`}>
              <Sparkles className="w-6 h-6" /> {language === 'en' ? 'Key Phrases' : 'Ungkapan Kunci'}
            </h3>
            <div className="space-y-4">
              {phrases.map((phrase, idx) => {
                const phraseId = gradeLevel === 'lower' 
                  ? weekData.keyPhrases.lowerId?.[idx] 
                  : weekData.keyPhrases.upperId?.[idx];
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleSpeak(phrase)}
                    className={`w-full text-left bg-white hover:${theme.bg} p-5 rounded-2xl border-2 border-transparent hover:${theme.border} transition-all group flex items-center justify-between shadow-sm`}
                  >
                    <div className="flex flex-col">
                      <span className="text-lg text-t1 font-fredoka font-medium">"{phrase}"</span>
                      {language === 'id' && phraseId && (
                        <span className="text-sm text-t3 font-fredoka italic">"{phraseId}"</span>
                      )}
                    </div>
                    <Volume2 className={`w-5 h-5 ${theme.text} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
