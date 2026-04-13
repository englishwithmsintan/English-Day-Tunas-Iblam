/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Sparkles, Pin, PartyPopper } from 'lucide-react';
import { GradeLevel, WeekData, Language } from '../types';
import { speak } from '../services/ttsService';

interface Note {
  id: string;
  text: string;
  rotation: number;
  color: string;
}

interface ShareSectionProps {
  gradeLevel: GradeLevel;
  weekData: WeekData;
  theme: { border: string, text: string, bg: string, accent: string, gradient: string };
  language: Language;
}

export const ShareSection: React.FC<ShareSectionProps> = ({ gradeLevel, weekData, theme, language }) => {
  const [notes, setNotes] = useState<Note[]>([
    { id: '1', text: 'Thank you, Budi, for helping me carry my books! 📚', rotation: -1.5, color: 'bg-yellow-custom' },
    { id: '2', text: 'Thank you, Sari, for explaining the lesson again! ✨', rotation: 1.2, color: 'bg-[#98e8c8]' },
    { id: '3', text: 'Thank you, Dani, for opening the door for me! 🚪', rotation: -0.8, color: 'bg-[#f4c6e8]' },
  ]);

  const addNote = async (name: string, what: string) => {
    const text = `Thank you, ${name}, for ${what}! 💛`;
    const colors = ['bg-yellow-custom', 'bg-[#98e8c8]', 'bg-[#f4c6e8]', 'bg-[#aed4f7]'];
    const newNote: Note = {
      id: Date.now().toString(),
      text,
      rotation: (Math.random() * 4) - 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setNotes([newNote, ...notes]);
    await speak(text, 'cheerful');
  };

  const celebrate = () => {
    speak("Congratulations everyone! You did a great job today!", "cheerful");
  };

  const shareData = gradeLevel === 'lower' ? weekData.share.lower : weekData.share.upper;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className={`card border-4 ${theme.border}`}>
        <h2 className={`text-3xl md:text-4xl mb-6 flex items-center gap-4 ${theme.text}`}>
          🎤 {language === 'en' ? 'Share & Assess' : 'Bagikan & Nilai'}
        </h2>
        
        <div className="space-y-8">
          <div className={`${theme.bg} p-8 rounded-[40px] border-2 border-white shadow-inner`}>
            <h3 className={`text-2xl font-fredoka ${theme.text} mb-4 flex items-center gap-2 font-bold`}>
              <Trophy className="w-6 h-6" /> {shareData.title}
            </h3>
            <p className="text-t2 text-lg mb-6 font-medium">
              {shareData.description}
            </p>
            
            <div className={`bg-white rounded-[32px] p-8 border-4 ${theme.border} shadow-lg`}>
              <p className={`text-2xl font-fredoka ${theme.text} mb-6 text-center font-bold`}>
                📝 {language === 'en' ? 'Helping Hands Wall' : 'Dinding Tangan Penolong'}
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <button onClick={() => addNote('Budi', 'helping carry the books')} className={`bg-white border-2 border-bg-darker px-6 py-3 rounded-full font-fredoka font-bold hover:${theme.border} transition-all flex items-center gap-2 shadow-sm active:scale-95`}><Pin className={`w-4 h-4 ${theme.text}`} /> Budi</button>
                <button onClick={() => addNote('Sari', 'explaining the lesson')} className={`bg-white border-2 border-bg-darker px-6 py-3 rounded-full font-fredoka font-bold hover:${theme.border} transition-all flex items-center gap-2 shadow-sm active:scale-95`}><Pin className={`w-4 h-4 ${theme.text}`} /> Sari</button>
                <button onClick={() => addNote('Dani', 'opening the door')} className={`bg-white border-2 border-bg-darker px-6 py-3 rounded-full font-fredoka font-bold hover:${theme.border} transition-all flex items-center gap-2 shadow-sm active:scale-95`}><Pin className={`w-4 h-4 ${theme.text}`} /> Dani</button>
                <button onClick={() => addNote('our class', 'being so polite today')} className={`bg-gradient-to-r ${theme.gradient} text-white px-8 py-3 rounded-full font-fredoka font-bold shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2 active:scale-95`}><Sparkles className="w-4 h-4" /> Whole Class!</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {notes.map((note) => (
                    <motion.div
                      key={note.id}
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: note.rotation }}
                      exit={{ scale: 0 }}
                      className={`${note.color} p-6 rounded-lg shadow-xl text-bg-dark font-bold text-lg min-h-[120px] flex items-center justify-center text-center`}
                    >
                      {note.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Self Assessment */}
        <div className={`mt-12 bg-white text-t1 rounded-[48px] p-8 md:p-12 shadow-2xl border-4 ${theme.border} relative overflow-hidden`}>
          <div className={`absolute top-0 left-0 w-32 h-32 ${theme.accent} opacity-10 rounded-full -ml-16 -mt-16`} />
          
          <div className="text-center border-b-4 border-bg-darker pb-6 mb-10 relative z-10">
            <h3 className={`text-4xl font-fredoka mb-2 ${theme.text}`}>
              📋 {language === 'en' ? 'Self-Assessment' : 'Penilaian Diri'}
            </h3>
            <p className="text-t3 font-bold uppercase tracking-widest">
              {gradeLevel === 'lower' ? (language === 'en' ? 'Lower' : 'Kelas Rendah') : (language === 'en' ? 'Upper' : 'Kelas Tinggi')} — {weekData.badge}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <p className={`text-2xl font-fredoka font-bold ${theme.text}`}>
                {language === 'en' ? 'How do you feel today?' : 'Bagaimana perasaanmu hari ini?'}
              </p>
              <div className="flex gap-6">
                {gradeLevel === 'lower' ? (
                  ['😊', '😐', '😞'].map((emoji) => (
                    <button key={emoji} className="text-6xl grayscale hover:grayscale-0 hover:scale-125 transition-all focus:grayscale-0 focus:scale-125 drop-shadow-sm">{emoji}</button>
                  ))
                ) : (
                  [(language === 'en' ? 'shy' : 'malu'), (language === 'en' ? 'okay' : 'biasa'), (language === 'en' ? 'confident' : 'percaya diri')].map((feel) => (
                    <button key={feel} className={`px-6 py-3 rounded-2xl border-2 border-bg-darker font-fredoka font-bold capitalize hover:${theme.bg} hover:${theme.border} transition-all`}>
                      {feel}
                    </button>
                  ))
                )}
              </div>
            </div>
            <div className="space-y-6">
              <p className={`text-2xl font-fredoka font-bold ${theme.text}`}>
                {gradeLevel === 'lower' 
                  ? (language === 'en' ? 'I can do these:' : 'Saya bisa melakukan ini:') 
                  : (language === 'en' ? 'Polite phrases I learned:' : 'Ungkapan sopan yang saya pelajari:')}
              </p>
              <div className="space-y-3">
                {(gradeLevel === 'lower' 
                  ? [
                      (language === 'en' ? 'I can ask "Could you please...?"' : 'Saya bisa bertanya "Bolehkah kamu...?"'), 
                      (language === 'en' ? 'I remember to say thank you.' : 'Saya ingat untuk mengucapkan terima kasih.')
                    ]
                  : [
                      (language === 'en' ? `I learned to ask: "Would you mind...?"` : `Saya belajar bertanya: "Apakah kamu keberatan...?"`), 
                      (language === 'en' ? 'I will use more polite phrases.' : 'Saya akan menggunakan lebih banyak ungkapan sopan.')
                    ]
                ).map((item, idx) => (
                  <label key={idx} className="flex items-center gap-4 text-xl font-fredoka cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input type="checkbox" className={`peer w-8 h-8 rounded-xl border-4 border-bg-darker appearance-none checked:bg-gradient-to-br ${theme.gradient} transition-all cursor-pointer`} />
                      <Sparkles className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                    <span className={`group-hover:${theme.text} transition-colors font-bold text-t2 text-lg`}>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={celebrate}
          className={`mt-12 w-full bg-gradient-to-r ${theme.gradient} px-10 py-6 rounded-full font-fredoka font-bold text-2xl shadow-2xl hover:-translate-y-2 transition-all flex items-center justify-center gap-4`}
        >
          <PartyPopper className="w-8 h-8" />
          {language === 'en' ? 'Celebrate Our Progress!' : 'Rayakan Kemajuan Kita!'}
        </button>
      </div>
    </motion.div>
  );
};
