/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link, MessageSquare, Gamepad2, Share2, ChevronDown, Scissors, Languages } from 'lucide-react';
import { WeekData, WeekId, Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  timeElapsed: number;
  selectedWeek: WeekData;
  weeks: WeekData[];
  onWeekSelect: (id: WeekId) => void;
  gradeLevel: string;
  setGradeLevel: (level: any) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeTab, 
  setActiveTab, 
  timeElapsed,
  selectedWeek,
  weeks,
  onWeekSelect,
  gradeLevel,
  setGradeLevel,
  language,
  setLanguage
}) => {
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const tabs = [
    { id: 'connect', label: language === 'en' ? 'Connect & Review' : 'Hubungkan & Tinjau', icon: <Link className="w-5 h-5" /> },
    { id: 'vocab', label: language === 'en' ? 'Vocabulary' : 'Kosakata', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'practice', label: language === 'en' ? 'Explore & Practice' : 'Jelajahi & Latih', icon: <Gamepad2 className="w-5 h-5" /> },
    ...(selectedWeek.physicalOutput ? [{ id: 'create', label: language === 'en' ? 'Create & Display' : 'Buat & Pajang', icon: <Scissors className="w-5 h-5" /> }] : []),
    { id: 'share', label: language === 'en' ? 'Share & Assess' : 'Bagikan & Nilai', icon: <Share2 className="w-5 h-5" /> },
  ];

  const emojis = ['🤝', '🙏', '💬', '🤲', '😊', '✋', '💪', '❤️', '🌟', '👋'];

  const themeColors: Record<string, { border: string, text: string, bg: string, accent: string, gradient: string }> = {
    'break-the-ice': { border: 'border-blue-400', text: 'text-blue-600', bg: 'bg-blue-50', accent: 'bg-blue-100', gradient: 'from-blue-400 to-blue-600' },
    'early-bird': { border: 'border-yellow-400', text: 'text-yellow-600', bg: 'bg-yellow-50', accent: 'bg-yellow-100', gradient: 'from-yellow-400 to-yellow-600' },
    'penny-thoughts': { border: 'border-green-400', text: 'text-green-600', bg: 'bg-green-50', accent: 'bg-green-100', gradient: 'from-green-400 to-green-600' },
    'getting-to-know': { border: 'border-purple-400', text: 'text-purple-600', bg: 'bg-purple-50', accent: 'bg-purple-100', gradient: 'from-purple-400 to-purple-600' },
    'whats-the-scoop': { border: 'border-red-400', text: 'text-red-600', bg: 'bg-red-50', accent: 'bg-red-100', gradient: 'from-red-400 to-red-600' },
    'lend-a-hand': { border: 'border-teal-400', text: 'text-teal-600', bg: 'bg-teal-50', accent: 'bg-teal-100', gradient: 'from-teal-400 to-teal-600' },
  };

  const theme = themeColors[selectedWeek.id] || { border: 'border-teal-400', text: 'text-teal-600', bg: 'bg-teal-50', accent: 'bg-teal-100', gradient: 'from-teal-400 to-teal-600' };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${theme.bg}`}>
      {/* Floating Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {emojis.map((emoji, i) => (
          <div
            key={i}
            className="floating-emoji"
            style={{
              left: `${(i * 10) + 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Week Selector, Grade Toggle & Stopwatch */}
      <div className="fixed top-3 left-4 right-4 flex flex-col md:flex-row justify-between items-center gap-3 z-50 pointer-events-none">
        <div className="flex flex-col md:flex-row items-center gap-3 pointer-events-auto w-full md:w-auto">
          {/* Smaller, Adjusted Week Selector with Scroller */}
          <div className="relative max-w-full md:max-w-none">
            <div className={`bg-white/90 backdrop-blur-sm border-2 ${theme.border} rounded-2xl p-1 shadow-lg flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth`}>
              {weeks.map((week) => (
                <button
                  key={week.id}
                  onClick={() => onWeekSelect(week.id)}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-fredoka font-bold text-xs transition-all whitespace-nowrap active:scale-95
                    ${selectedWeek.id === week.id 
                      ? `bg-gradient-to-br ${theme.gradient} text-white shadow-md` 
                      : 'bg-transparent text-t2 hover:bg-bg-darker'}
                  `}
                >
                  <span className="text-base">{week.badge.split(' ')[2]}</span>
                  <span className="hidden sm:inline">W{week.badge.split(' ')[1]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Smaller Grade Toggle */}
          <div className="flex gap-1 p-1 bg-white/90 backdrop-blur-sm border-2 border-bg-darker rounded-2xl shadow-lg">
            <button
              onClick={() => setGradeLevel('lower')}
              className={`px-3 py-1.5 rounded-xl font-fredoka font-bold text-[10px] uppercase tracking-wider transition-all active:scale-95 ${
                gradeLevel === 'lower' ? 'bg-yellow-custom text-white shadow-sm' : 'text-t3 hover:text-t2'
              }`}
            >
              🎒 1–3
            </button>
            <button
              onClick={() => setGradeLevel('upper')}
              className={`px-3 py-1.5 rounded-xl font-fredoka font-bold text-[10px] uppercase tracking-wider transition-all active:scale-95 ${
                gradeLevel === 'upper' ? 'bg-yellow-custom text-white shadow-sm' : 'text-t3 hover:text-t2'
              }`}
            >
              📖 4–6
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            className="flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm border-2 border-bg-darker rounded-2xl shadow-lg hover:bg-bg-darker transition-all active:scale-95 text-t2 font-fredoka font-bold text-xs"
          >
            <Languages className={`w-4 h-4 ${theme.text}`} />
            {language === 'en' ? 'EN' : 'ID'}
          </button>

          <div className="bg-white/90 backdrop-blur-sm border-2 border-cyan-custom rounded-2xl p-1.5 px-4 shadow-lg text-center">
            <div className="font-fredoka text-xl text-cyan-custom font-black leading-none">
              {formatTime(timeElapsed)}
            </div>
            <div className="text-[8px] text-t3 uppercase tracking-widest font-black mt-0.5">Timer</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 pt-24 md:p-8 md:pt-24 relative z-10">
        {/* Header */}
        <header className={`bg-white border-4 ${theme.border} rounded-[48px] p-8 md:p-12 mb-12 text-center shadow-xl relative overflow-hidden`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={selectedWeek.id}
            className="relative z-10"
          >
            <div className="font-fredoka text-sm text-t3 uppercase tracking-[3px] mb-4 font-bold">
              SDNP Tunas Iblam · English Day 2025/2026
            </div>
            <h1 className="text-4xl md:text-7xl font-fredoka text-t1 mb-6 leading-tight uppercase tracking-tight">
              {language === 'en' ? selectedWeek.title : selectedWeek.titleId || selectedWeek.title}
            </h1>
            <div className={`inline-flex items-center gap-3 bg-white border-4 ${theme.border} px-8 py-3 rounded-full font-fredoka font-bold text-xl ${theme.text} shadow-lg rotate-1`}>
              {selectedWeek.badge}
            </div>
          </motion.div>
          
          {/* Animated background shapes */}
          <div className={`absolute top-0 left-0 w-32 h-32 ${theme.accent} rounded-full -ml-16 -mt-16 animate-pulse opacity-50`} />
          <div className={`absolute bottom-0 right-0 w-40 h-40 ${theme.accent} rounded-full -mr-20 -mb-20 animate-pulse delay-700 opacity-50`} />
        </header>

        {/* Navigation with Scroller */}
        <nav className="relative mb-12">
          <div className="flex overflow-x-auto gap-4 no-scrollbar pb-2 px-4 -mx-4 md:mx-0 md:px-0 md:justify-center md:flex-wrap scroll-smooth">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-4 rounded-2xl font-fredoka font-bold text-lg transition-all duration-300 whitespace-nowrap
                  ${activeTab === tab.id 
                    ? `bg-white border-4 ${theme.border} ${theme.text} shadow-xl scale-105 md:scale-110 -translate-y-1` 
                    : `bg-white border-2 border-bg-darker text-t2 hover:${theme.bg} hover:${theme.border} hover:${theme.text}`}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};
