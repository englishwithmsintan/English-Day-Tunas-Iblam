/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Sparkles, Pin, PartyPopper, Volume2 } from 'lucide-react';
import { GradeLevel, WeekData, Language } from '../types';
import { speakQueued, prewarmAudio } from '../services/ttsService';

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
  const [notes, setNotes] = useState<Note[]>([]);

  const [participants, setParticipants] = useState<{ id: string, name: string, act: string }[]>([
    { id: 'p1', name: '', act: '' },
    { id: 'p2', name: '', act: '' },
    { id: 'p3', name: '', act: '' },
  ]);

  const addParticipant = () => {
    prewarmAudio();
    setParticipants([...participants, { id: Date.now().toString(), name: '', act: '' }]);
  };

  const updateParticipant = (id: string, field: 'name' | 'act', value: string) => {
    setParticipants(participants.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const addNote = async (name: string, what: string) => {
    if (!name.trim()) return;
    prewarmAudio();
    const text = `Thank you, ${name}, for ${what || (language === 'en' ? 'being helpful' : 'sudah membantu')}! 💛`;
    const colors = ['bg-yellow-custom', 'bg-[#98e8c8]', 'bg-[#f4c6e8]', 'bg-[#aed4f7]'];
    const newNote: Note = {
      id: Date.now().toString(),
      text,
      rotation: (Math.random() * 4) - 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setNotes([newNote, ...notes]);
    await speakQueued(text, 'cheerful');
  };

  const celebrate = () => {
    prewarmAudio();
    const message = language === 'en' 
      ? "Congratulations everyone! You did a great job today! Let's keep learning together!" 
      : "Selamat semuanya! Kalian luar biasa hari ini! Ayo terus belajar bersama!";
    speakQueued(message, "playful");
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
            
            <div className={`bg-white rounded-[32px] p-8 border-4 ${theme.border} shadow-lg relative`}>
              <div className="absolute -top-4 right-8 bg-white px-4 py-1 rounded-full border-2 border-bg-darker text-xs font-black uppercase tracking-widest text-t3">
                {language === 'en' ? 'Activity Prompt' : 'Panduan Aktivitas'}
              </div>

              {/* Chat Bubbles for Activity */}
              <div className="mb-10 space-y-6 bg-bg-light p-8 rounded-[40px] border-2 border-dashed border-bg-darker relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-20 rounded-full -mr-12 -mt-12" />
                {(() => {
                  const activityText = language === 'en' ? shareData.activity : (shareData.activityId || shareData.activity);
                  
                  // Improved Regex to catch dialogue even without quotes
                  const matchA = activityText.match(/A:\s*(".*?"|[^B\(]+)/);
                  const matchB = activityText.match(/B:\s*(".*?"|[^\(]+)/);
                  const instructions = activityText.match(/\(([^)]+)\)/);

                  const stripQuotes = (str: string) => str.trim().replace(/^"|"$/g, '');

                  return (
                    <div className="space-y-6 relative z-10">
                      {matchA && (
                        <div className="flex flex-col items-start max-w-[90%]">
                          <span className={`text-[12px] font-black uppercase tracking-[0.1em] ${theme.text} mb-2 ml-4 flex items-center gap-2`}>
                            <div className={`w-2 h-2 rounded-full ${theme.bg} border border-bg-darker`} />
                            {language === 'en' ? 'Student A' : 'Siswa A'}
                          </span>
                          <div className={`bg-white border-4 ${theme.border} p-5 rounded-3xl rounded-tl-none shadow-lg relative group`}>
                            <p className="text-xl font-fredoka font-bold text-t1 leading-tight">
                              {stripQuotes(matchA[1])}
                            </p>
                            <button
                              onClick={() => speakQueued(stripQuotes(matchA[1]), 'cheerful')}
                              className="absolute -right-2 -top-2 p-2 bg-white rounded-full border-2 border-bg-darker shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Volume2 size={16} className={theme.text} />
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {matchB && (
                        <div className="flex flex-col items-end max-w-[90%] ml-auto">
                          <span className={`text-[12px] font-black uppercase tracking-[0.1em] ${theme.text} mb-2 mr-4 flex items-center gap-2 flex-row-reverse`}>
                            <div className={`w-2 h-2 rounded-full bg-white border border-bg-darker`} />
                            {language === 'en' ? 'Student B' : 'Siswa B'}
                          </span>
                          <div className={`bg-gradient-to-br ${theme.gradient} p-5 rounded-3xl rounded-tr-none shadow-lg relative text-white border-2 border-white/20 group`}>
                            <p className="text-xl font-fredoka font-bold leading-tight">
                              {stripQuotes(matchB[1])}
                            </p>
                            <button
                              onClick={() => speakQueued(stripQuotes(matchB[1]), 'cheerful')}
                              className="absolute -left-2 -top-2 p-2 bg-white rounded-full border-2 border-bg-darker shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Volume2 size={16} className={theme.text} />
                            </button>
                          </div>
                        </div>
                      )}

                      {instructions && (
                        <div className="text-center pt-6 mt-6 border-t-2 border-bg-darker border-dotted">
                          <div className="inline-block px-6 py-2 bg-white rounded-full border-2 border-bg-darker shadow-sm">
                            <p className="text-md font-fredoka font-bold text-t3 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-yellow-500" />
                              {instructions[1]}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              {(weekData.id === 'lend-a-hand' || notes.length > 0) && (
                <>
                  <p className={`text-2xl font-fredoka ${theme.text} mb-6 text-center font-bold`}>
                    📝 {language === 'en' ? 'Helping Hands Wall' : 'Dinding Tangan Penolong'}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {participants.map((p) => (
                        <div key={p.id} className="bg-bg-light p-4 rounded-2xl border-2 border-bg-darker flex flex-col gap-2">
                           <input 
                            type="text" 
                            placeholder={language === 'en' ? "Student Name" : "Nama Siswa"} 
                            value={p.name}
                            onChange={(e) => updateParticipant(p.id, 'name', e.target.value)}
                            className="w-full px-3 py-1 rounded-xl border border-bg-darker font-fredoka font-bold text-sm focus:ring-2 focus:ring-teal-400 outline-none"
                          />
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              placeholder={language === 'en' ? "Helped with..." : "Membantu..."} 
                              value={p.act}
                              onChange={(e) => updateParticipant(p.id, 'act', e.target.value)}
                              className="flex-1 px-3 py-1 rounded-xl border border-bg-darker font-fredoka text-xs focus:ring-2 focus:ring-teal-400 outline-none"
                            />
                            <button 
                              onClick={() => addNote(p.name, p.act)}
                              disabled={!p.name}
                              className={`p-2 rounded-xl text-white shadow-md active:scale-95 transition-all ${p.name ? `bg-gradient-to-r ${theme.gradient}` : 'bg-gray-300'}`}
                            >
                              <Pin className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                      <button 
                        onClick={addParticipant}
                        className="border-4 border-dashed border-bg-darker rounded-2xl p-4 flex flex-col items-center justify-center text-t3 hover:bg-bg-light transition-all group"
                      >
                        <PartyPopper className="w-8 h-8 mb-1 group-hover:scale-110 transition-transform" />
                        <span className="font-fredoka font-black text-xs uppercase tracking-widest">
                          {language === 'en' ? '+ Add Student' : '+ Tambah Siswa'}
                        </span>
                      </button>
                    </div>
                    
                    <div className="flex justify-center">
                      <button 
                        onClick={() => {
                          prewarmAudio();
                          addNote('our class', language === 'en' ? 'being so polite today' : 'sudah sangat sopan hari ini');
                        }} 
                        className={`bg-gradient-to-r ${theme.gradient} text-white px-8 py-3 rounded-full font-fredoka font-bold shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2 active:scale-95`}
                      >
                        <Sparkles className="w-4 h-4" /> 
                        {language === 'en' ? 'Whole Class!' : 'Seluruh Kelas!'}
                      </button>
                    </div>
                  </div>
                </>
              )}
              
              {notes.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {notes.map((note) => (
                      <motion.div
                        key={note.id}
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: note.rotation }}
                        exit={{ scale: 0 }}
                        className={`${note.color} p-6 rounded-lg shadow-xl text-bg-dark font-bold text-lg min-h-[120px] flex items-center justify-center text-center relative group/note`}
                      >
                        {note.text}
                        <button
                          onClick={() => {
                            prewarmAudio();
                            speakQueued(note.text, 'cheerful');
                          }}
                          className="absolute bottom-2 right-2 p-1.5 bg-white/50 rounded-full opacity-0 group-hover/note:opacity-100 transition-opacity hover:bg-white"
                        >
                          <Volume2 size={12} className="text-bg-dark" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
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
                    <button 
                      key={emoji} 
                      onClick={() => {
                        prewarmAudio();
                        const labels = { '😊': 'happy', '😐': 'okay', '😞': 'sad' };
                        speakQueued(labels[emoji as keyof typeof labels] || emoji, 'playful');
                      }}
                      className="text-6xl grayscale hover:grayscale-0 hover:scale-125 transition-all focus:grayscale-0 focus:scale-125 drop-shadow-sm"
                    >
                      {emoji}
                    </button>
                  ))
                ) : (
                  [(language === 'en' ? 'shy' : 'malu'), (language === 'en' ? 'okay' : 'biasa'), (language === 'en' ? 'confident' : 'percaya diri')].map((feel) => (
                    <button 
                      key={feel} 
                      onClick={() => {
                        prewarmAudio();
                        speakQueued(feel, 'gentle');
                      }}
                      className={`px-6 py-3 rounded-2xl border-2 border-bg-darker font-fredoka font-bold capitalize hover:${theme.bg} hover:${theme.border} transition-all`}
                    >
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
                  : (language === 'en' ? 'My progress today:' : 'Kemajuan saya hari ini:')}
              </p>
              <div className="space-y-3">
                {(() => {
                  const defaultLower = [
                    (language === 'en' ? 'I can follow directions.' : 'Saya bisa mengikuti arahan.'), 
                    (language === 'en' ? 'I learned new words.' : 'Saya belajar kata-kata baru.')
                  ];
                  const defaultUpper = [
                    (language === 'en' ? 'I used full sentences.' : 'Saya menggunakan kalimat lengkap.'), 
                    (language === 'en' ? 'I helped my partner.' : 'Saya membantu pasangan saya.')
                  ];
                  
                  const assessmentItems = gradeLevel === 'lower' 
                    ? (weekData.share.assessment?.lowerId && language === 'id' ? weekData.share.assessment.lowerId : weekData.share.assessment?.lower) || defaultLower
                    : (weekData.share.assessment?.upperId && language === 'id' ? weekData.share.assessment.upperId : weekData.share.assessment?.upper) || defaultUpper;

                  return assessmentItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group/item">
                      <label className="flex items-center gap-4 text-xl font-fredoka cursor-pointer flex-1">
                        <div className="relative flex items-center justify-center">
                          <input 
                            type="checkbox" 
                            onChange={() => prewarmAudio()}
                            className={`peer w-8 h-8 rounded-xl border-4 border-bg-darker appearance-none checked:bg-gradient-to-br ${theme.gradient} transition-all cursor-pointer`} 
                          />
                          <Sparkles className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                        <span className={`group-hover/item:${theme.text} transition-colors font-bold text-t2 text-lg`}>{item}</span>
                      </label>
                      <button
                        onClick={() => {
                          prewarmAudio();
                          speakQueued(item as string, 'cheerful');
                        }}
                        className={`opacity-0 group-hover/item:opacity-40 hover:!opacity-100 transition-all p-2 rounded-xl hover:${theme.bg} ${theme.text}`}
                      >
                        <Volume2 size={18} />
                      </button>
                    </div>
                  ));
                })()}
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
