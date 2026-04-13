/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, Volume2, Lightbulb } from 'lucide-react';
import { GradeLevel, WeekData, Language } from '../../types';
import { speak } from '../../services/ttsService';

interface PolitenessMeterProps {
  grade: GradeLevel;
  weekData: WeekData;
  theme: { border: string, text: string, bg: string, accent: string, gradient: string };
  language: Language;
}

export const PolitenessMeter: React.FC<PolitenessMeterProps> = ({ grade, weekData, theme, language }) => {
  const data = grade === 'lower' ? weekData.meter.lower : weekData.meter.upper;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentItem = data[currentIndex % data.length];

  useEffect(() => {
    setSelectedScore(null);
    setShowResult(false);
  }, [grade, currentIndex, weekData.id]);

  const handleSpeak = async (text: string, style: 'cheerful' | 'clear' = 'cheerful') => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    await speak(text, style);
    setIsSpeaking(false);
  };

  const nextItem = () => {
    if (data.length === 0) return;
    setCurrentIndex(prev => prev + 1);
    const next = data[(currentIndex + 1) % data.length];
    handleSpeak(next.text.replace(/"/g, ''), 'clear');
  };

  const handleVote = (score: number) => {
    if (!currentItem) return;
    setSelectedScore(score);
    setShowResult(true);
    const isCorrect = score === currentItem.score;
    const faces = ['😞', '😐', '🙂', '😊'];
    const msg = isCorrect 
      ? `That is correct! ${currentItem.explanation.replace(/[😞😐🙂😊]/g, '')}`
      : `The answer is ${faces[currentItem.score - 1]}. ${currentItem.explanation.replace(/[😞😐🙂😊]/g, '')}`;
    handleSpeak(msg, 'cheerful');
  };

  const options = [
    { score: 1, emoji: '😞', label: language === 'en' ? 'Rude' : 'Kasar', color: 'text-red-custom', bg: 'bg-red-custom/20', border: 'border-red-custom' },
    { score: 2, emoji: '😐', label: language === 'en' ? 'Okay' : 'Biasa', color: 'text-yellow-custom', bg: 'bg-yellow-custom/15', border: 'border-yellow-custom' },
    { score: 3, emoji: '🙂', label: language === 'en' ? 'Polite' : 'Sopan', color: 'text-cyan-custom', bg: 'bg-cyan-custom/12', border: 'border-cyan-custom' },
    { score: 4, emoji: '😊', label: language === 'en' ? 'Very Polite' : 'Sangat Sopan', color: 'text-green-custom', bg: 'bg-green-custom/15', border: 'border-green-custom' },
  ];

  if (!currentItem) return null;

  return (
    <div className={`card border-4 ${theme.border}`}>
      <h2 className={`text-3xl md:text-4xl mb-6 flex items-center gap-4 ${theme.text}`}>
        😊 {language === 'en' ? 'Task 4: Politeness Meter!' : 'Tugas 4: Meteran Kesopanan!'}
      </h2>
      <p className="text-xl text-t2 mb-8">
        {language === 'en' ? 'Hear a sentence — then vote together! How polite is it? 🗳️' : 'Dengarkan sebuah kalimat — lalu pilih bersama! Seberapa sopankah itu? 🗳️'}
      </p>

      <div className={`bg-white p-8 rounded-[40px] border-4 ${theme.border} shadow-inner`}>
        <button
          onClick={nextItem}
          className={`bg-white border-4 ${theme.border} px-10 py-5 rounded-3xl font-fredoka font-bold text-xl text-t1 hover:${theme.bg} transition-all flex items-center gap-3 mx-auto mb-8 shadow-sm active:scale-95`}
        >
          <RefreshCw className={`w-7 h-7 ${theme.text}`} /> {language === 'en' ? 'New Sentence!' : 'Kalimat Baru!'}
        </button>

        <div className={`${theme.bg} rounded-[32px] p-10 mb-10 text-center min-h-[140px] flex items-center justify-center font-fredoka text-3xl text-t1 border-2 border-white shadow-sm leading-relaxed font-bold`}>
          {language === 'en' ? currentItem.text : currentItem.textId || currentItem.text}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {options.map((opt) => (
            <button
              key={opt.score}
              onClick={() => handleVote(opt.score)}
              className={`
                flex flex-col items-center gap-3 p-6 rounded-[32px] transition-all border-4 shadow-sm active:scale-95
                ${opt.bg} ${opt.border}
                ${selectedScore === opt.score ? 'scale-110 shadow-xl ring-4 ring-cyan-custom/20' : 'hover:scale-105 opacity-80 hover:opacity-100'}
              `}
            >
              <span className="text-6xl mb-2 drop-shadow-sm">{opt.emoji}</span>
              <span className={`font-fredoka font-bold text-xl ${opt.color}`}>{opt.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className={`p-8 rounded-[32px] font-fredoka text-xl text-center border-4 shadow-sm ${
                selectedScore === currentItem.score ? 'bg-green-custom/10 border-green-custom text-green-custom' : 'bg-yellow-custom/10 border-yellow-custom text-yellow-custom'
              }`}>
                <span className="font-bold">
                  {selectedScore === currentItem.score 
                    ? (language === 'en' ? '✅ You got it! ' : '✅ Kamu benar! ') 
                    : (language === 'en' ? `The answer is ${options[currentItem.score - 1].emoji} — ` : `Jawabannya adalah ${options[currentItem.score - 1].emoji} — `)}
                </span>
                {language === 'en' ? currentItem.explanation : currentItem.explanationId || currentItem.explanation}
              </div>

              {grade === 'upper' && currentItem.betterVersion && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`bg-white border-4 ${theme.border} rounded-[40px] p-10 shadow-xl relative overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${theme.accent} opacity-10 rounded-full -mr-16 -mt-16`} />
                  <div className={`flex items-center gap-4 ${theme.text} font-fredoka font-bold mb-6 relative z-10 text-2xl`}>
                    <Lightbulb className="w-8 h-8" />
                    💡 {language === 'en' ? 'More polite version:' : 'Versi yang lebih sopan:'}
                  </div>
                  <p className="text-3xl font-nunito mb-8 leading-relaxed text-t1 font-bold relative z-10">
                    {currentItem.betterVersion}
                  </p>
                  <button
                    onClick={() => handleSpeak(currentItem.betterVersion!, 'clear')}
                    className={`bg-gradient-to-r ${theme.gradient} text-white px-10 py-5 rounded-3xl font-fredoka font-bold text-xl shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3 relative z-10 active:scale-95`}
                  >
                    <Volume2 className="w-7 h-7" /> {language === 'en' ? 'Hear it!' : 'Dengarkan!'}
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
