/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Search, 
  MapPin, 
  Flame, 
  Snowflake, 
  EyeOff, 
  Trophy, 
  User,
  Star,
  Megaphone,
  ArrowRight,
  MousePointerClick,
  ArrowBigLeftDash,
  Volume2,
  VolumeX,
  Sparkles
} from 'lucide-react';
import { GradeLevel, Language } from '../../types';

import { speakQueued, prewarmAudio } from '../../services/ttsService';

interface TreasureGameProps {
  gradeLevel: GradeLevel;
  language: Language;
  theme: { border: string, text: string, bg: string, accent: string, gradient: string };
}

type GameState = 'setup' | 'hunting' | 'found';
type Closeness = 'very_far' | 'far' | 'close' | 'very_close';

const PREPOSITIONS = {
  lower: ['IN', 'ON', 'UNDER'],
  upper: ['IN', 'ON', 'UNDER', 'NEXT TO', 'BEHIND', 'IN FRONT OF', 'BETWEEN', 'ABOVE']
};

export const TreasureGame: React.FC<TreasureGameProps> = ({ gradeLevel, language, theme }) => {
  const [gameState, setGameState] = useState<GameState>('setup');
  const [closeness, setCloseness] = useState<Closeness | null>(null);
  const [selectedPreposition, setSelectedPreposition] = useState<string | null>(null);
  const [round, setRound] = useState(1);
  const [hunterName, setHunterName] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const isUpper = gradeLevel === 'upper';
  const prepositions = isUpper ? PREPOSITIONS.upper : PREPOSITIONS.lower;

  const handleSpeak = async (text: string, style: 'cheerful' | 'clear' | 'playful' | 'gentle' = 'cheerful') => {
    if (isMuted || isSpeaking) return;
    setIsSpeaking(true);
    try {
      prewarmAudio();
      await speakQueued(text, style);
    } finally {
      setIsSpeaking(false);
    }
  };

  const playBeep = (freq: number, type: OscillatorType = 'sine', duration = 0.2) => {
    if (isMuted) return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio context not available", e);
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FACC15', '#FB923C', '#F87171']
    });
  };

  useEffect(() => {
    if (gameState === 'found') {
      triggerConfetti();
      playBeep(880, 'triangle', 0.4);
      setTimeout(() => playBeep(1100, 'triangle', 0.4), 100);
      setTimeout(() => playBeep(1320, 'triangle', 0.4), 200);
    }
  }, [gameState]);

  const getFeedbackConfig = (c: Closeness) => {
    if (isUpper) {
      switch(c) {
        case 'very_far': return { label: 'FREEZING! 🧊', color: 'bg-indigo-600', text: 'text-white', icon: Snowflake, sound: 200, pulse: 3 };
        case 'far': return { label: 'COLD ❄️', color: 'bg-blue-400', text: 'text-white', icon: Snowflake, sound: 300, pulse: 2 };
        case 'close': return { label: 'WARM ☀️', color: 'bg-orange-400', text: 'text-white', icon: Flame, sound: 500, pulse: 1 };
        case 'very_close': return { label: 'HOT! 🔥', color: 'bg-red-600', text: 'text-white', icon: Flame, sound: 800, pulse: 0.5 };
      }
    } else {
      switch(c) {
        case 'very_far': return { label: language === 'en' ? 'VERY FAR' : 'SANGAT JAUH', color: 'bg-blue-500', text: 'text-white', icon: MapPin, sound: 200, pulse: 3 };
        case 'far': return { label: language === 'en' ? 'FAR' : 'JAUH', color: 'bg-blue-300', text: 'text-white', icon: MapPin, sound: 300, pulse: 2 };
        case 'close': return { label: language === 'en' ? 'CLOSE' : 'DEKAT', color: 'bg-green-400', text: 'text-white', icon: MapPin, sound: 500, pulse: 1 };
        case 'very_close': return { label: language === 'en' ? 'VERY CLOSE' : 'SANGAT DEKAT', color: 'bg-green-600', text: 'text-white', icon: MapPin, sound: 800, pulse: 0.5 };
      }
    }
  };

  const handleCloseness = (c: Closeness) => {
    setCloseness(c);
    const cfg = getFeedbackConfig(c);
    playBeep(cfg.sound);
    handleSpeak(cfg.label.replace(/[!🧊❄️☀️🔥]/g, ''), 'cheerful');
  };

  const handlePrepositionSelect = (p: string) => {
    setSelectedPreposition(p);
    playBeep(440, 'sine', 0.1);
    handleSpeak(`Is it ${p} the...?`, 'clear');
  };

  return (
    <div className={`bg-white border-8 ${theme.border} rounded-[60px] shadow-2xl overflow-hidden`}>
      {/* Game Header */}
      <div className={`${theme.gradient} p-6 flex items-center justify-between border-b-8 ${theme.border}`}>
        <div className="flex items-center gap-4 text-white">
          <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
            <Search size={40} strokeWidth={3} />
          </div>
          <div>
            <h2 className="text-4xl font-fredoka font-black uppercase tracking-tight leading-none">
              {language === 'en' ? "Treasure Hunt" : "Berburu Harta Karun"}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-black uppercase bg-white/30 px-2 py-0.5 rounded-md">Mode:</span>
              <span className="text-xs font-bold uppercase">{isUpper ? 'Hot or Cold' : 'Far or Close'}</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl border-2 border-white/20 text-white transition-all active:scale-90"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
          
          {hunterName && (
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white px-6 py-2 rounded-2xl text-gray-800 font-fredoka font-black text-xl shadow-lg border-2 border-yellow-400"
            >
              👣 {hunterName.toUpperCase()}
            </motion.div>
          )}
          <div className="bg-black/10 px-6 py-3 rounded-full text-white font-black text-xl border-2 border-white/20">
            ROUND {round}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[650px]">
        {/* Left: Teacher Controls & Sentence Board */}
        <div className="lg:col-span-4 p-8 bg-gray-100/50 border-r-8 border-gray-100 flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-xl ${theme.bg} ${theme.text}`}>
                  <User size={20} />
                </div>
                <h3 className="text-lg font-fredoka font-black uppercase tracking-tight">
                  {language === 'en' ? "The Hunter" : "Profil Pemburu"}
                </h3>
              </div>
              {hunterName && (
                <span className="flex items-center gap-1 text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-full animate-pulse">
                  <Sparkles size={10} /> READY
                </span>
              )}
            </div>
            <div className="relative group">
              <input
                type="text"
                value={hunterName}
                onChange={(e) => setHunterName(e.target.value)}
                placeholder={language === 'en' ? "Name..." : "Nama..."}
                className="w-full p-6 rounded-3xl border-4 border-gray-200 focus:border-yellow-400 bg-white font-fredoka font-black text-2xl transition-all outline-none shadow-inner group-hover:shadow-md"
              />
              {!hunterName && (
                <motion.div 
                  className="absolute -right-24 top-1/2 -translate-y-1/2 flex items-center gap-2 text-yellow-500 hidden xl:flex"
                  animate={{ x: [10, 0, 10] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowBigLeftDash size={40} fill="currentColor" />
                  <span className="font-black text-[10px] uppercase bg-yellow-400 text-white px-3 py-1 rounded-full shadow-lg">Type Name!</span>
                </motion.div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-xl ${theme.bg} ${theme.text}`}>
                  <Megaphone size={20} />
                </div>
                <h3 className="text-lg font-fredoka font-black uppercase tracking-tight">
                  {language === 'en' ? "Hunter asks:" : "Pemburu bertanya:"}
                </h3>
              </div>
              {selectedPreposition && (
                <button 
                  onClick={() => setSelectedPreposition(null)}
                  className="text-[10px] font-black text-red-500 hover:underline px-2"
                >
                  CLEAR
                </button>
              )}
            </div>

            <div className={`p-6 rounded-[32px] bg-white border-4 ${theme.border} shadow-sm space-y-3`}>
              <div className="space-y-2">
                {prepositions.map(p => (
                  <motion.div 
                    whileHover={{ x: 5 }}
                    onClick={() => handlePrepositionSelect(p)}
                    key={p} 
                    className={`
                      flex gap-4 items-center group cursor-pointer p-2 rounded-2xl transition-all
                      ${selectedPreposition === p ? theme.bg + ' bg-opacity-10 ring-2 ring-' + theme.accent : 'hover:bg-gray-50'}
                    `}
                  >
                    <div className={`w-3 h-3 rounded-full ${theme.bg} ${selectedPreposition === p ? 'opacity-100 scale-125' : 'opacity-20'} group-hover:opacity-100 transition-all`} />
                    <p className={`text-xl font-fredoka font-black ${selectedPreposition === p ? theme.text : 'text-gray-400 group-hover:text-gray-600'} flex items-center gap-2`}>
                      "Is it <span className={`px-2 rounded-lg border transition-all ${selectedPreposition === p ? 'text-yellow-600 bg-yellow-100 border-yellow-300' : 'bg-gray-50 border-gray-100'}`}>{p}</span> the...?"
                      <Volume2 size={16} className="opacity-0 group-hover:opacity-60" />
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto space-y-4">
            <div className="px-2">
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-gray-400 uppercase">
                <MousePointerClick size={12} />
                Game Dashboard
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {gameState === 'setup' ? (
                <div className="relative group">
                  <button 
                    onClick={() => {
                      setGameState('hunting');
                      playBeep(600);
                      prewarmAudio();
                    }}
                    disabled={!hunterName}
                    className={`w-full py-8 rounded-[38px] ${theme.gradient} text-white font-fredoka font-black text-3xl uppercase shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:grayscale disabled:opacity-50 disabled:scale-100 z-10 relative`}
                  >
                    <Star className="animate-spin-slow" size={40} />
                    {language === 'en' ? "Start Hunt!" : "Mulai!"}
                  </button>
                  {hunterName && (
                    <motion.div
                      animate={{ x: [0, 15, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute -right-24 top-1/2 -translate-y-1/2 text-yellow-500 hidden xl:flex items-center gap-2"
                    >
                      <ArrowBigLeftDash size={48} fill="currentColor" />
                      <span className="font-black text-[10px] uppercase bg-yellow-500 text-white px-3 py-1.5 rounded-full shadow-xl">GO!</span>
                    </motion.div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={() => {
                    setGameState('setup');
                    setCloseness(null);
                    setSelectedPreposition(null);
                    setRound(r => r + 1);
                    setHunterName('');
                  }}
                  className={`w-full py-6 rounded-[32px] bg-white border-4 ${theme.border} ${theme.text} font-fredoka font-black text-xl uppercase shadow-md hover:bg-gray-50 transition-all flex items-center justify-center gap-2 active:scale-95`}
                >
                  <ArrowRight size={20} className="rotate-180" />
                  {language === 'en' ? "New hunter" : "Pemburu baru"}
                </button>
              )}
              
              {gameState === 'hunting' && (
                <div className="relative">
                  <button
                    onClick={() => setGameState('found')}
                    className="w-full py-8 rounded-[38px] bg-yellow-400 border-4 border-yellow-500 text-black font-fredoka font-black text-3xl uppercase shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 ring-8 ring-yellow-400/20"
                  >
                    <Trophy size={40} />
                    {language === 'en' ? "SUCCESS!" : "BERHASIL!"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: The Game Arena */}
        <div className="lg:col-span-8 bg-white relative flex flex-col p-12 items-center justify-center overflow-hidden">
          {/* Sonar Pulse Background Element */}
          {gameState === 'hunting' && closeness && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <motion.div
                key={closeness}
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ 
                  repeat: Infinity, 
                  duration: getFeedbackConfig(closeness)?.pulse || 2, 
                  ease: "easeOut" 
                }}
                className={`w-64 h-64 rounded-full ${getFeedbackConfig(closeness)?.color} opacity-20`}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {gameState === 'setup' && (
              <motion.div 
                key="setup"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="text-center space-y-12"
              >
                <div className="relative">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ repeat: Infinity, duration: 3 }}
                    className={`w-80 h-80 rounded-[80px] ${theme.bg} bg-opacity-10 flex items-center justify-center mx-auto border-8 border-dashed ${theme.border} border-opacity-30`}
                  >
                    <EyeOff size={160} className={`${theme.text} opacity-20`} />
                  </motion.div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <User size={100} className={theme.text} />
                  </div>
                </div>
                <div>
                  <h4 className="text-8xl font-fredoka font-black uppercase text-gray-900 tracking-tighter line-tight">
                    {language === 'en' ? 'CLOSE EYES!' : 'TUTUP MATA!'}
                  </h4>
                  <p className="text-3xl font-bold text-gray-400 mt-4 uppercase tracking-[0.2em]">
                    {hunterName ? `Hiding the treasure from ${hunterName}...` : "Select your hunter!"}
                  </p>
                </div>
              </motion.div>
            )}

            {gameState === 'hunting' && (
              <motion.div 
                key="hunting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full flex flex-col items-center justify-between gap-8 z-10"
              >
                <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl gap-6">
                  {hunterName && (
                    <div className="inline-flex items-center gap-4 bg-white border-2 border-gray-100 px-10 py-4 font-fredoka font-black text-3xl uppercase text-gray-400 rounded-full tracking-widest shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]">
                      <Search className="animate-pulse text-yellow-500" /> {hunterName}
                    </div>
                  )}

                  {selectedPreposition && (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-yellow-400 text-white px-8 py-3 rounded-2xl font-fredoka font-black text-2xl uppercase tracking-wider shadow-lg border-4 border-white flex items-center gap-3"
                    >
                      <span>"Is it <span className="underline decoration-white decoration-4">{selectedPreposition}</span> the...?"</span>
                      <button onClick={() => handleSpeak(`Is it ${selectedPreposition} the...?`, 'clear')}>
                        <Volume2 size={24} />
                      </button>
                    </motion.div>
                  )}
                  
                  <div className="w-full min-h-[350px] relative flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {closeness ? (
                        <motion.div
                          key={closeness}
                          initial={{ scale: 0, y: 100, rotate: -10 }}
                          animate={{ scale: 1, y: 0, rotate: 0 }}
                          className={`
                            w-full ${getFeedbackConfig(closeness)?.color} ${getFeedbackConfig(closeness)?.text} 
                            p-12 md:p-16 rounded-[80px] shadow-[0_45px_90px_-25px_rgba(0,0,0,0.4)] border-8 border-white 
                            flex flex-col items-center gap-8 text-center relative overflow-hidden
                          `}
                        >
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }} 
                            transition={{ repeat: Infinity, duration: 1 }}
                          >
                             {React.createElement(getFeedbackConfig(closeness)!.icon, { size: 140 })}
                          </motion.div>
                          <div className="space-y-2">
                            <span className="text-7xl md:text-9xl font-fredoka font-black tracking-tighter uppercase leading-none block">
                                {getFeedbackConfig(closeness)?.label}
                            </span>
                          </div>
                          {/* Intensity Meter */}
                          <div className="absolute bottom-6 left-12 right-12 flex gap-1">
                             {Array.from({length: 10}).map((_, i) => {
                               const intensity = closeness === 'very_far' ? 1 : closeness === 'far' ? 3 : closeness === 'close' ? 7 : 10;
                               return (
                                 <div key={i} className={`h-2 flex-1 rounded-full ${i < intensity ? 'bg-white' : 'bg-black/10'}`} />
                               );
                             })}
                          </div>
                        </motion.div>
                      ) : (
                        <div className="w-full h-full min-h-[300px] bg-gray-50 border-8 border-dashed border-gray-200 rounded-[80px] flex flex-col items-center justify-center gap-8 p-16">
                           <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                             <MapPin size={100} className="text-gray-200" />
                           </motion.div>
                           <p className="text-5xl font-fredoka font-black text-gray-300 uppercase italic text-center leading-tight tracking-tight">
                             Waiting for<br/>a question...
                           </p>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="w-full bg-gray-100/50 p-8 md:p-10 rounded-[50px] border-4 border-white shadow-inner">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px bg-gray-300 flex-1" />
                    <span className="font-black text-xs uppercase text-gray-400 tracking-[0.4em]">Signal Response</span>
                    <div className="h-px bg-gray-300 flex-1" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {(['very_far', 'far', 'close', 'very_close'] as Closeness[]).map((c) => {
                      const cfg = getFeedbackConfig(c);
                      return (
                        <button
                          key={c}
                          onClick={() => handleCloseness(c)}
                          className={`
                            group relative p-8 rounded-[40px] border-4 transition-all flex flex-col items-center justify-center gap-4 hover:scale-[1.05] active:scale-95
                            ${closeness === c 
                              ? 'bg-white shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] ' + theme.border 
                              : 'bg-white/60 border-transparent hover:bg-white'}
                          `}
                        >
                          <div className={`w-16 h-16 rounded-3xl flex items-center justify-center ${cfg?.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                            {React.createElement(cfg!.icon, { size: 32 })}
                          </div>
                          <span className={`
                            ${closeness === c ? theme.text : 'text-gray-500'} 
                            font-black text-xs md:text-sm uppercase tracking-tight text-center leading-tight
                          `}>
                            {cfg?.label}
                          </span>
                          {closeness === c && (
                            <motion.div layoutId="closeness-ring" className={`absolute -inset-2 border-4 ${theme.border} rounded-[48px]`} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {gameState === 'found' && (
              <motion.div 
                key="found"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center space-y-12"
              >
                <div className="relative inline-block">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="absolute -inset-10 bg-yellow-200 blur-3xl opacity-40 rounded-full" />
                  <Trophy size={240} className="text-yellow-400 drop-shadow-[0_25px_50px_rgba(250,204,21,0.5)] animate-bounce relative z-10" />
                </div>
                
                <div className="space-y-6">
                  <h3 className={`text-9xl font-fredoka font-black ${theme.text} uppercase tracking-tighter leading-none`}>
                    {hunterName ? `${hunterName.toUpperCase()}!` : "WINNER!"}
                  </h3>
                  <div className="inline-flex items-center gap-4 bg-gray-50 border-4 border-gray-100 px-12 py-5 rounded-[30px] shadow-sm">
                    <Star className="text-yellow-500 fill-yellow-500" size={40} />
                    <span className="text-4xl font-fredoka font-black text-gray-800 uppercase tracking-tighter">
                       {language === 'en' ? "Master Treasure Hunter" : "Pencari Harta Sejati"}
                    </span>
                    <Star className="text-yellow-500 fill-yellow-500" size={40} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 justify-center">
                  {[
                    { text: '🛡️ Seeker', color: 'bg-blue-50' }, 
                    { text: '🎯 Precise', color: 'bg-green-50' }, 
                    { text: '💎 Expert', color: 'bg-yellow-50' }
                  ].map(t => (
                    <motion.div 
                      whileHover={{ y: -5 }}
                      key={t.text} 
                      className={`px-10 py-5 rounded-[35px] ${t.color} border-4 border-white shadow-xl font-fredoka font-black text-3xl uppercase tracking-tighter text-gray-800`}
                    >
                      {t.text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
