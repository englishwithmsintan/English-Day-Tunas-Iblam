/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Play, RotateCcw, Trophy } from 'lucide-react';
import { WeekData, Language } from '../../types';
import { speakQueued, prewarmAudio } from '../../services/ttsService';

interface PoliteQuizProps {
  weekData: WeekData;
  theme: { border: string, text: string, bg: string, accent: string, gradient: string };
  language: Language;
}

export const PoliteQuiz: React.FC<PoliteQuizProps> = ({ weekData, theme, language }) => {
  const quizItems = weekData.quiz;
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentItem = currentIndex !== null ? quizItems[currentIndex] : null;

  useEffect(() => {
    setCurrentIndex(null);
    setIsGameOver(false);
    setFeedback(null);
    setSelectedOption(null);
  }, [weekData.id]);

  const handleSpeak = async (text: string, style: 'cheerful' | 'clear' = 'cheerful') => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    prewarmAudio();
    await speakQueued(text, style);
    setIsSpeaking(false);
  };

  const startQuiz = () => {
    if (quizItems.length === 0) return;
    setCurrentIndex(0);
    setScore(0);
    setLives(3);
    setIsGameOver(false);
    setFeedback(null);
    setSelectedOption(null);
    handleSpeak(quizItems[0].situation, 'cheerful');
  };

  const handleAnswer = (index: number) => {
    if (currentIndex === null || isGameOver || selectedOption !== null) return;
    
    setSelectedOption(index);
    const item = quizItems[currentIndex];
    const isCorrect = index === item.correctIndex;

    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedback({ 
        type: 'success', 
        message: language === 'en' ? '🎉 Correct! Well done!' : '🎉 Benar! Bagus sekali!' 
      });
      handleSpeak(language === 'en' ? 'Correct! Well done!' : 'Benar! Bagus sekali!', 'cheerful');
    } else {
      setLives(prev => prev - 1);
      setFeedback({ 
        type: 'error', 
        message: language === 'en' ? '❌ Not quite — look at the green answer!' : '❌ Kurang tepat — lihat jawaban yang hijau!' 
      });
      handleSpeak(language === 'en' ? 'Oops! Look at the green answer.' : 'Ups! Lihat jawaban yang hijau.', 'clear');
    }

    setTimeout(() => {
      const currentLives = isCorrect ? lives : lives - 1;
      if (currentLives <= 0 || currentIndex + 1 >= quizItems.length) {
        setIsGameOver(true);
        const finalScore = score + (isCorrect ? 1 : 0);
        const pct = Math.round(finalScore / quizItems.length * 100);
        handleSpeak(pct >= 80 ? 'Wow, amazing score! Well done!' : 'Good effort! Let us play again!', 'cheerful');
      } else {
        setCurrentIndex(prev => prev! + 1);
        setSelectedOption(null);
        setFeedback(null);
        handleSpeak(quizItems[currentIndex + 1].situation, 'cheerful');
      }
    }, 2500);
  };

  return (
    <div className={`card border-4 ${theme.border}`}>
      <h2 className={`text-3xl md:text-4xl mb-6 flex items-center gap-4 ${theme.text}`}>
        ⚡ {language === 'en' ? 'Pick the Correct One!' : 'Pilih yang Benar!'}
      </h2>
      <p className="text-xl text-t2 mb-8">
        {language === 'en' ? 'Which sounds the most perfect? Tap your answer! 🎯' : 'Mana yang terdengar paling benar? Ketuk jawabanmu! 🎯'}
      </p>

      <div className={`bg-white p-8 rounded-[40px] border-4 ${theme.border} shadow-inner`}>
        <div className="flex justify-between items-center mb-8">
          <span className="font-fredoka text-2xl text-t3 font-bold">
            {currentIndex !== null ? `Q ${currentIndex + 1}/${quizItems.length}` : 'Q –'}
          </span>
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <Heart 
                key={i} 
                className={`w-10 h-10 drop-shadow-sm transition-all ${i < lives ? 'text-red-custom fill-red-custom scale-110' : 'text-bg-darker fill-bg-darker opacity-30'}`} 
              />
            ))}
          </div>
          <span className={`font-fredoka text-2xl ${theme.text} flex items-center gap-2 font-bold`}>
            <Trophy className="w-8 h-8" /> {score}
          </span>
        </div>

        <div className={`${theme.bg} rounded-[32px] p-8 mb-8 text-center min-h-[140px] flex items-center justify-center font-fredoka text-2xl text-t1 border-2 border-white shadow-sm relative group`}>
          {isGameOver 
            ? (language === 'en' ? '🎉 Quiz finished!' : '🎉 Kuis selesai!') 
            : (currentItem 
                ? (language === 'en' ? currentItem.situation : currentItem.situationId || currentItem.situation) 
                : (language === 'en' ? 'Press Start to begin! 🚀' : 'Tekan Mulai untuk memulai! 🚀'))}
          {currentItem && !isGameOver && (
            <button
              onClick={() => handleSpeak(language === 'en' ? currentItem.situation : currentItem.situationId || currentItem.situation)}
              className="absolute top-2 right-2 p-2 rounded-xl opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-all bg-white/50"
            >
              <Play size={20} className={theme.text} />
            </button>
          )}
        </div>

        <div className="grid gap-4">
          {!isGameOver && currentItem && currentItem.options.map((opt, i) => (
            <button
              key={i}
              disabled={selectedOption !== null}
              onClick={() => handleAnswer(i)}
              className={`
                w-full text-left p-6 rounded-[24px] font-nunito text-lg transition-all border-4 font-bold shadow-sm active:scale-95
                ${selectedOption === null 
                  ? `bg-white border-bg-darker hover:${theme.border} hover:${theme.bg}` 
                  : i === currentItem.correctIndex 
                    ? 'bg-green-custom text-white border-green-custom' 
                    : i === selectedOption 
                      ? 'bg-red-custom text-white border-red-custom' 
                      : 'bg-white border-bg-darker opacity-30'}
              `}
            >
              <div className="flex items-center justify-between gap-4">
                <span>{language === 'en' ? opt : currentItem.optionsId?.[i] || opt}</span>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSpeak(opt, 'clear');
                  }}
                  className={`p-2 rounded-lg hover:bg-black/5 transition-all ${selectedOption !== null && (i === currentItem.correctIndex || i === selectedOption) ? 'text-white' : theme.text}`}
                >
                  <Play size={18} />
                </div>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`mt-8 p-6 rounded-2xl font-fredoka text-xl text-center border-2 ${
                feedback.type === 'success' ? 'bg-green-custom/20 border-green-custom text-green-custom' : 'bg-red-custom/20 border-red-custom text-red-custom'
              }`}
            >
              {feedback.message}
            </motion.div>
          )}
        </AnimatePresence>

        {isGameOver && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-8 p-10 bg-white border-4 ${theme.border} rounded-[40px] text-center shadow-xl`}
          >
            <div className="text-7xl mb-6">
              {Math.round(score / quizItems.length * 100) >= 80 ? '🏆' : '👏'}
            </div>
            <div className={`text-4xl font-fredoka mb-2 ${theme.text}`}>
              {language === 'en' ? 'Score:' : 'Skor:'} {score}/{quizItems.length}
            </div>
            <p className="text-xl text-t2 mb-8 font-bold">
              {Math.round(score / quizItems.length * 100) >= 80 
                ? (language === 'en' ? 'Amazing Politeness Expert!' : 'Ahli Kesopanan yang Luar Biasa!') 
                : (language === 'en' ? 'Good effort! Let\'s try again!' : 'Usaha yang bagus! Ayo coba lagi!')}
            </p>
            <button
              onClick={startQuiz}
              className={`bg-gradient-to-r ${theme.gradient} text-white px-12 py-5 rounded-3xl font-fredoka font-bold text-2xl shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto active:scale-95`}
            >
              <RotateCcw className="w-7 h-7" /> {language === 'en' ? 'Play Again!' : 'Main Lagi!'}
            </button>
          </motion.div>
        )}

        {!currentItem && !isGameOver && (
          <button
            onClick={startQuiz}
            className={`mt-8 w-full bg-gradient-to-r ${theme.gradient} text-white px-12 py-6 rounded-[32px] font-fredoka font-bold text-3xl shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-4 active:scale-95`}
          >
            <Play className="w-10 h-10 fill-white" /> {language === 'en' ? 'Start Quiz!' : 'Mulai Kuis!'}
          </button>
        )}
      </div>
    </div>
  );
};
