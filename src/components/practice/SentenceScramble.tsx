/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, RotateCcw, Volume2, Star } from 'lucide-react';
import { GradeLevel, WeekData, Language } from '../../types';
import { speak } from '../../services/ttsService';

interface SentenceScrambleProps {
  grade: GradeLevel;
  weekData: WeekData;
  theme: { border: string, text: string, bg: string, accent: string, gradient: string };
  language: Language;
}

export const SentenceScramble: React.FC<SentenceScrambleProps> = ({ grade, weekData, theme, language }) => {
  const data = grade === 'lower' ? weekData.scramble.lower : weekData.scramble.upper;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userSentence, setUserSentence] = useState<string[]>([]);
  const [wordBank, setWordBank] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentItem = data[currentIndex % data.length];

  useEffect(() => {
    resetLevel();
  }, [grade, currentIndex, weekData.id]);

  const resetLevel = () => {
    const item = data[currentIndex % data.length];
    if (!item) return;
    setUserSentence([]);
    setWordBank([...item.words].sort(() => Math.random() - 0.5));
    setFeedback(null);
  };

  const addWord = (word: string, index: number) => {
    setUserSentence([...userSentence, word]);
    const newBank = [...wordBank];
    newBank.splice(index, 1);
    setWordBank(newBank);
  };

  const removeWord = (word: string, index: number) => {
    const newUserSentence = [...userSentence];
    newUserSentence.splice(index, 1);
    setUserSentence(newUserSentence);
    setWordBank([...wordBank, word]);
  };

  const checkSentence = () => {
    const attempt = userSentence.join(' ').replace(/ \?/g, '?').replace(/ \./g, '.').replace(/ ,/g, ',');
    if (attempt.toLowerCase() === currentItem.answer.toLowerCase()) {
      setScore(score + 1);
      setFeedback({ type: 'success', message: `🎉 Correct! "${currentItem.answer}"` });
      handleSpeak("Well done! That is correct!", "cheerful");
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 2500);
    } else {
      setFeedback({ type: 'error', message: '❌ Not quite — check the word order and try again! 💪' });
      handleSpeak("Oops! Try again! Check the order.", "clear");
    }
  };

  const handleSpeak = async (text: string, style: 'cheerful' | 'clear' = 'cheerful') => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    await speak(text, style);
    setIsSpeaking(false);
  };

  const hearCurrentSentence = () => {
    const text = userSentence.join(' ').replace(/ \?/g, '?').replace(/ \./g, '.').replace(/ ,/g, ',');
    if (text.trim()) handleSpeak(text, "clear");
  };

  if (!currentItem) return null;

  return (
    <div className={`card border-4 ${theme.border}`}>
      <h2 className={`text-3xl md:text-4xl mb-6 flex items-center gap-4 ${theme.text}`}>
        🧩 {language === 'en' ? 'Task 1: Build the Sentence!' : 'Tugas 1: Susun Kalimatnya!'}
      </h2>
      <p className="text-xl text-t2 mb-8">
        {language === 'en' 
          ? 'Tap a word from the Word Bank to add it to your sentence. Tap a word in your sentence to remove it.' 
          : 'Ketuk kata dari Bank Kata untuk menambahkannya ke kalimatmu. Ketuk kata di kalimatmu untuk menghapusnya.'}
      </p>

      <div className={`bg-white p-8 rounded-[40px] border-4 ${theme.border} shadow-inner`}>
        <div className="flex justify-between items-center mb-8">
          <span className="font-fredoka text-2xl text-yellow-custom font-bold">
            Q {(currentIndex % data.length) + 1}/{data.length}
          </span>
          <span className={`font-fredoka text-2xl ${theme.text} flex items-center gap-2 font-bold`}>
            <Star className={`fill-current`} /> {score}
          </span>
        </div>

        <div className={`${theme.bg} rounded-[32px] p-8 mb-8 text-center font-fredoka text-2xl text-t1 border-2 border-white shadow-sm`}>
          {language === 'en' ? currentItem.situation : currentItem.situationId || currentItem.situation}
        </div>

        <div className="space-y-8">
          <div>
            <p className={`font-fredoka ${theme.text} text-sm mb-3 uppercase tracking-widest font-bold`}>
              {language === 'en' ? 'Your sentence (tap to remove):' : 'Kalimatmu (ketuk untuk menghapus):'}
            </p>
            <div className={`min-h-[100px] p-6 rounded-[32px] border-4 border-dashed flex flex-wrap gap-3 items-center transition-colors ${theme.bg} ${theme.border.replace('border-', 'border-opacity-20 border-')}`}>
              <AnimatePresence>
                {userSentence.map((word, i) => (
                  <motion.button
                    key={`${word}-${i}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    onClick={() => removeWord(word, i)}
                    className={`px-5 py-3 rounded-2xl font-fredoka font-bold text-lg shadow-lg transition-all hover:scale-105 active:scale-95 bg-gradient-to-br ${theme.gradient} text-white`}
                  >
                    {word}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div>
            <p className="font-fredoka text-t3 text-sm mb-3 uppercase tracking-widest font-bold">
              {language === 'en' ? 'Word bank (tap to add):' : 'Bank kata (ketuk untuk menambah):'}
            </p>
            <div className={`min-h-[100px] p-6 rounded-[32px] ${theme.bg} flex flex-wrap gap-3 items-center border-2 border-white shadow-inner`}>
              {wordBank.map((word, i) => (
                <button
                  key={`${word}-${i}`}
                  onClick={() => addWord(word, i)}
                  className={`px-5 py-3 rounded-2xl bg-white border-2 border-bg-darker text-t1 font-fredoka font-bold text-lg hover:${theme.border} hover:${theme.text} transition-all hover:-translate-y-1 shadow-sm active:scale-95`}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-12">
          <button
            onClick={checkSentence}
            className={`bg-gradient-to-r ${theme.gradient} text-white px-10 py-5 rounded-3xl font-fredoka font-bold text-xl shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95`}
          >
            <CheckCircle2 className="w-7 h-7" /> {language === 'en' ? 'Check!' : 'Periksa!'}
          </button>
          <button
            onClick={hearCurrentSentence}
            disabled={userSentence.length === 0 || isSpeaking}
            className={`bg-white border-4 ${theme.border} px-10 py-5 rounded-3xl font-fredoka font-bold text-xl text-t1 hover:${theme.bg} transition-all flex items-center gap-3 disabled:opacity-50 active:scale-95`}
          >
            <Volume2 className={`w-7 h-7 ${theme.text}`} /> {language === 'en' ? 'Hear it!' : 'Dengarkan!'}
          </button>
          <button
            onClick={resetLevel}
            className="bg-white border-4 border-red-custom text-red-custom px-10 py-5 rounded-3xl font-fredoka font-bold text-xl hover:bg-red-custom hover:text-white transition-all flex items-center gap-3 active:scale-95"
          >
            <RotateCcw className="w-7 h-7" /> {language === 'en' ? 'Clear' : 'Hapus'}
          </button>
        </div>

        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`mt-8 p-6 rounded-2xl font-fredoka text-xl text-center border-2 ${
                feedback.type === 'success' ? 'bg-green-custom/20 border-green-custom text-green-custom' : 'bg-red-custom/20 border-red-custom text-red-custom'
              }`}
            >
              {feedback.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
