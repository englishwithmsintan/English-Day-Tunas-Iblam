/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Music, Trophy, RefreshCcw } from 'lucide-react';
import { GradeLevel, WeekData, VocabularyItem, Language } from '../types';
import { speak } from '../services/ttsService';

interface VocabSectionProps {
  gradeLevel: GradeLevel;
  weekData: WeekData;
  theme: { border: string, text: string, bg: string, accent: string, gradient: string };
  language: Language;
}

interface GameCard {
  id: number;
  content: string;
  type: 'word' | 'meaning';
  isFlipped: boolean;
  isMatched: boolean;
  pairId: string;
}

export const VocabSection: React.FC<VocabSectionProps> = ({ gradeLevel, weekData, theme, language }) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [gameCards, setGameCards] = useState<GameCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);
  const [showGame, setShowGame] = useState(false);

  const vocab = gradeLevel === 'lower' ? weekData.vocab.lower : weekData.vocab.upper;

  const handleSpeak = async (text: string, style: 'cheerful' | 'clear' = 'cheerful') => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    try {
      await speak(text, style);
    } finally {
      setIsSpeaking(false);
    }
  };

  const initGame = () => {
    const cards: GameCard[] = [];
    vocab.forEach((item) => {
      // Add word card
      cards.push({
        id: Math.random(),
        content: item.image || item.emoji,
        type: 'word',
        isFlipped: false,
        isMatched: false,
        pairId: item.word
      });
      // Add meaning card
      cards.push({
        id: Math.random(),
        content: item.meaning,
        type: 'meaning',
        isFlipped: false,
        isMatched: false,
        pairId: item.word
      });
    });
    setGameCards(cards.sort(() => Math.random() - 0.5));
    setSelectedCards([]);
    setMatches(0);
  };

  useEffect(() => {
    setFlippedIndex(null);
    if (showGame) initGame();
  }, [showGame, weekData, gradeLevel]);

  const handleCardClick = (index: number) => {
    if (selectedCards.length === 2 || gameCards[index].isFlipped || gameCards[index].isMatched) return;

    const newCards = [...gameCards];
    newCards[index].isFlipped = true;
    setGameCards(newCards);

    const newSelected = [...selectedCards, index];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      if (gameCards[first].pairId === gameCards[second].pairId) {
        setTimeout(() => {
          setGameCards(prev => {
            const matched = [...prev];
            matched[first].isMatched = true;
            matched[second].isMatched = true;
            return matched;
          });
          setSelectedCards([]);
          setMatches(m => m + 1);
          handleSpeak("Great match!", "cheerful");
        }, 500);
      } else {
        setTimeout(() => {
          setGameCards(prev => {
            const reset = [...prev];
            reset[first].isFlipped = false;
            reset[second].isFlipped = false;
            return reset;
          });
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  const renderSentence = (sentence: string, word: string) => {
    const regex = new RegExp(`(${word})`, 'gi');
    const parts = sentence.split(regex);
    return (
      <>
        {parts.map((part, i) => (
          regex.test(part) ? (
            <strong key={i} className="font-bold text-yellow-custom">{part}</strong>
          ) : (
            <span key={i}>{part}</span>
          )
        ))}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className={`card border-4 ${theme.border}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className={`text-3xl md:text-4xl mb-2 flex items-center gap-4 ${theme.text}`}>
              🗣 {language === 'en' ? 'Vocabulary Blast' : 'Ledakan Kosakata'}
            </h2>
            <p className="text-xl text-t2">
              {language === 'en' ? 'Tap cards to flip them and learn! 🚀' : 'Ketuk kartu untuk membaliknya dan belajar! 🚀'}
            </p>
          </div>
          <button
            onClick={() => setShowGame(!showGame)}
            className={`px-8 py-4 rounded-2xl font-fredoka font-bold text-lg transition-all flex items-center gap-2 shadow-lg active:scale-95 ${
              showGame 
                ? 'bg-pink-custom text-white shadow-pink-custom/30' 
                : `bg-white border-2 border-bg-darker text-t2 hover:${theme.border} hover:${theme.text}`
            }`}
          >
            {showGame 
              ? (language === 'en' ? '📖 Back to Cards' : '📖 Kembali ke Kartu') 
              : (language === 'en' ? '🎮 Play Memory Game' : '🎮 Main Game Memori')}
          </button>
        </div>

        {!showGame ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {vocab.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setFlippedIndex(flippedIndex === i ? null : i);
                  if (flippedIndex !== i) {
                    handleSpeak(item.word, 'clear');
                  }
                }}
                className="relative h-72 cursor-pointer perspective-1000"
              >
                <motion.div
                  animate={{ rotateY: flippedIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                  className="w-full h-full relative preserve-3d"
                >
                  {/* Front */}
                  <div className={`absolute inset-0 backface-hidden bg-white border-2 border-bg-darker rounded-3xl p-4 flex flex-col items-center justify-center text-center hover:${theme.border} transition-colors group overflow-hidden`}>
                    {item.image ? (
                      <div className={`w-full h-32 mb-3 rounded-2xl overflow-hidden ${theme.accent} opacity-30 relative`}>
                        <img 
                          src={item.image} 
                          alt={item.word} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-sm">
                          <span className="text-xl">{item.emoji}</span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-6xl mb-4 group-hover:scale-110 transition-transform">{item.emoji}</span>
                    )}
                    <div className="font-fredoka text-2xl text-t1 font-bold">{item.word}</div>
                    <div className="mt-2 text-t3 text-xs font-medium uppercase tracking-wider opacity-60">
                      {language === 'en' ? 'Tap to flip ✨' : 'Ketuk untuk balik ✨'}
                    </div>
                  </div>

                  {/* Back */}
                  <div className={`absolute inset-0 backface-hidden bg-gradient-to-br ${theme.gradient} rounded-3xl p-6 flex flex-col items-center justify-center text-center rotate-y-180 shadow-inner`}>
                    <div className="text-2xl font-bold text-white mb-2 drop-shadow-sm">🇮🇩 {language === 'en' ? item.meaning : item.meaningId || item.meaning}</div>
                    <div className="w-full h-1 bg-white/30 rounded-full my-4" />
                    <div className="text-base font-medium text-white leading-tight mb-6 px-2">
                      "{renderSentence(language === 'en' ? item.example : item.exampleId || item.example, item.word)}"
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(item.example, 'cheerful');
                      }}
                      className={`bg-white ${theme.text} hover:bg-yellow-custom hover:text-white p-4 rounded-2xl transition-all shadow-lg active:scale-95`}
                    >
                      <Volume2 className="w-8 h-8" />
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-[40px] border-4 border-bg-darker shadow-inner">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-pink-custom p-3 rounded-2xl shadow-lg">
                  <Trophy className="text-white w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-fredoka text-t1">{language === 'en' ? 'Memory Match' : 'Cocokkan Memori'}</h3>
                  <p className="text-t2 font-bold">{language === 'en' ? 'Matches:' : 'Kecocokan:'} <span className="text-pink-custom">{matches}</span> / {vocab.length}</p>
                </div>
              </div>
              <button
                onClick={initGame}
                className="p-4 bg-bg-darker/50 hover:bg-bg-darker rounded-2xl transition-all text-t2 hover:text-t1 flex items-center gap-2 font-bold"
              >
                <RefreshCcw className="w-5 h-5" /> {language === 'en' ? 'Reset' : 'Ulang'}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gameCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCardClick(idx)}
                  className={`
                    h-32 rounded-2xl cursor-pointer perspective-1000 transition-all
                    ${card.isMatched ? 'opacity-40 grayscale pointer-events-none' : ''}
                  `}
                >
                  <motion.div
                    animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full relative preserve-3d"
                  >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-bg-darker border-2 border-white rounded-2xl flex items-center justify-center text-4xl shadow-md">
                      ❓
                    </div>
                    {/* Back */}
                    <div className={`
                      absolute inset-0 backface-hidden rounded-2xl flex items-center justify-center text-center p-2 rotate-y-180 font-fredoka font-bold overflow-hidden
                      ${card.type === 'word' ? `bg-gradient-to-br ${theme.gradient} text-white` : 'bg-yellow-custom text-white'}
                    `}>
                      {card.type === 'word' && card.content.startsWith('http') ? (
                        <img 
                          src={card.content} 
                          alt="match" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <span className={card.type === 'word' ? 'text-4xl' : 'text-lg'}>{card.content}</span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {matches === vocab.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 text-center p-8 bg-gradient-to-r from-teal-custom/10 to-cyan-custom/10 rounded-3xl border-2 border-cyan-custom/30"
              >
                <h4 className="text-3xl font-fredoka text-t1 mb-4">🎉 {language === 'en' ? 'Amazing Job!' : 'Luar Biasa!'}</h4>
                <p className="text-xl text-t2 mb-6">{language === 'en' ? 'You matched all the words!' : 'Kamu mencocokkan semua kata!'}</p>
                <button
                  onClick={initGame}
                  className="bg-cyan-custom text-white px-10 py-4 rounded-2xl font-fredoka font-bold text-xl shadow-xl shadow-cyan-custom/20 hover:-translate-y-1 transition-all"
                >
                  {language === 'en' ? 'Play Again' : 'Main Lagi'}
                </button>
              </motion.div>
            )}
          </div>
        )}

        {/* Sentence Gallery */}
        <div className={`mt-16 bg-white p-8 md:p-12 rounded-[48px] border-4 ${theme.border} shadow-xl relative overflow-hidden`}>
          <div className={`absolute top-0 right-0 w-32 h-32 ${theme.accent} opacity-20 rounded-full -mr-16 -mt-16`} />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-custom/5 rounded-full -ml-12 -mb-12" />
          
          <div className="flex items-center gap-4 mb-10 relative z-10">
            <div className={`bg-gradient-to-br ${theme.gradient} p-4 rounded-2xl shadow-lg rotate-3`}>
              <Music className="text-white w-8 h-8" />
            </div>
            <div>
              <h3 className={`text-3xl font-fredoka ${theme.text}`}>🎵 {language === 'en' ? 'Sentence Gallery' : 'Galeri Kalimat'}</h3>
              <p className="text-t2">{language === 'en' ? 'Listen and repeat these fun sentences!' : 'Dengarkan dan ulangi kalimat seru ini!'}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {vocab.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className={`bg-white border-2 border-bg-darker hover:${theme.border} rounded-3xl p-6 flex items-center justify-between group transition-all shadow-sm`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <p className={`${theme.text} font-fredoka font-bold text-sm uppercase tracking-wider`}>{item.word}</p>
                    <button
                      onClick={() => handleSpeak(item.word, 'clear')}
                      className={`p-1.5 hover:${theme.bg} rounded-full transition-colors shadow-sm`}
                    >
                      <Volume2 className={`w-4 h-4 ${theme.text}`} />
                    </button>
                  </div>
                  <p className="text-xl font-fredoka text-t1 leading-snug">
                    "{renderSentence(language === 'en' ? item.example : item.exampleId || item.example, item.word)}"
                  </p>
                  <div className="mt-2 inline-block bg-yellow-100 text-yellow-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">
                    {language === 'en' ? 'Copy this!' : 'Salin ini!'}
                  </div>
                </div>
                <button
                  onClick={() => handleSpeak(item.example, 'cheerful')}
                  disabled={isSpeaking}
                  className={`ml-4 bg-white hover:${theme.bg} group-hover:shadow-lg p-5 rounded-2xl transition-all disabled:opacity-50 border-2 border-transparent hover:${theme.border}`}
                >
                  <Volume2 className={`w-7 h-7 ${theme.text}`} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
