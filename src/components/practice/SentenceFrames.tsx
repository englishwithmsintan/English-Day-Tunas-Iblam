import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Volume2, Sparkles } from 'lucide-react';
import { GradeLevel, Language } from '../../types';
import { speakQueued, prewarmAudio } from '../../services/ttsService';

interface SentenceFramesProps {
  grade: GradeLevel;
  frames: { en: string; id: string }[];
  theme: any;
  language: Language;
}

export const SentenceFrames: React.FC<SentenceFramesProps> = ({ grade, frames, theme, language }) => {
  const handleSpeak = (text: string) => {
    prewarmAudio();
    speakQueued(text, 'playful');
  };

  // Fun color palette for the cards - using slightly darker text for better contrast
  const cardColors = [
    'bg-yellow-100 border-yellow-400 text-yellow-950',
    'bg-pink-100 border-pink-400 text-pink-950',
    'bg-blue-100 border-blue-400 text-blue-950',
    'bg-green-100 border-green-400 text-green-950',
    'bg-purple-100 border-purple-400 text-purple-950',
    'bg-orange-100 border-orange-400 text-orange-950',
  ];

  return (
    <div className="space-y-8 py-4">
      <div className="text-center space-y-2">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`inline-flex items-center gap-3 px-6 py-2 rounded-full ${theme.bg} ${theme.text} mb-2 shadow-sm`}
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="font-fredoka font-black uppercase tracking-wider">
            {language === 'en' ? 'Try these Phrases!' : 'Coba Ungkapan Ini!'}
          </span>
        </motion.div>
        <h3 className="text-3xl md:text-5xl font-fredoka font-black text-[#185b74] tracking-tight">
          {language === 'en' ? 'Ways to Give a Compliment 💬' : 'Cara Memberi Pujian 💬'}
        </h3>
        <p className="text-xl text-black font-bold">
          {language === 'en' ? 'Tap a card to hear how to say it!' : 'Ketuk kartu untuk mendengar cara mengucapkannya!'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {frames.map((frame, index) => {
          const colorClass = cardColors[index % cardColors.length];
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 0.5 : -0.5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25, delay: index * 0.05 }}
              onClick={() => handleSpeak(frame.en)}
              className={`relative overflow-hidden p-7 rounded-[32px] border-b-8 transition-all text-left shadow-lg ${colorClass} group`}
            >
              <div className="flex items-center gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-fredoka font-black leading-tight italic drop-shadow-sm">
                      "{frame.en}"
                    </span>
                    <Volume2 className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="text-sm font-fredoka font-bold uppercase tracking-widest">
                    {frame.id}
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/50 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-sm">
                  <MessageSquare className="w-7 h-7" />
                </div>
              </div>
              
              {/* Decorative bubbles in card background */}
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
