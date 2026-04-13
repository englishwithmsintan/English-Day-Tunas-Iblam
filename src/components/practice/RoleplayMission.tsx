/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Volume2, CheckCircle2, Trophy, MessageSquareQuote } from 'lucide-react';
import { RoleplayScenario, GradeLevel, Language } from '../../types';
import { speak } from '../../services/ttsService';

interface RoleplayMissionProps {
  grade: GradeLevel;
  scenarios: RoleplayScenario[];
  theme: { border: string, text: string, bg: string, accent: string, gradient: string };
  language: Language;
}

export const RoleplayMission: React.FC<RoleplayMissionProps> = ({ grade, scenarios, theme, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const currentScenario = scenarios[currentIndex % scenarios.length];

  const handleSpeak = async (text: string, style: 'cheerful' | 'clear' = 'cheerful') => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    await speak(text, style);
    setIsSpeaking(false);
  };

  const completeMission = () => {
    setIsCompleted(true);
    handleSpeak(
      language === 'en' ? "Mission accomplished! You are a true kindness hero!" : "Misi selesai! Kamu adalah pahlawan kebaikan sejati!", 
      "cheerful"
    );
  };

  const nextMission = () => {
    setIsCompleted(false);
    setCurrentIndex(prev => prev + 1);
  };

  if (!currentScenario) return null;

  return (
    <div className={`card border-4 ${theme.border} relative overflow-hidden`}>
      <div className={`absolute top-0 right-0 w-64 h-64 ${theme.accent} opacity-10 rounded-full -mr-32 -mt-32`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-3xl md:text-4xl font-fredoka flex items-center gap-4 ${theme.text}`}>
            🦸 {language === 'en' ? 'Task 5: Roleplay Mission!' : 'Tugas 5: Misi Roleplay!'}
          </h2>
          <div className={`bg-white border-4 ${theme.border} p-3 rounded-2xl shadow-lg rotate-3`}>
            <Trophy className={`w-8 h-8 ${theme.text}`} />
          </div>
        </div>

        <p className="text-xl text-t2 mb-10 leading-relaxed">
          {language === 'en' 
            ? 'Read the scenario and perform the roleplay with your partner! Show us your English Skills in action! 🎬' 
            : 'Baca skenarionya dan lakukan roleplay dengan pasanganmu! Tunjukkan Keterampilan Bahasa Inggrismu dalam aksi! 🎬'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Scenario Card */}
          <div className={`bg-white border-4 ${theme.border} rounded-[40px] p-8 shadow-xl relative`}>
            <div className="absolute -top-4 -left-4 bg-yellow-custom text-white p-3 rounded-2xl shadow-lg font-fredoka font-bold rotate-[-5deg]">
              {language === 'en' ? 'THE MISSION' : 'MISI'}
            </div>
            <h3 className={`text-2xl font-fredoka ${theme.text} mb-4 font-bold mt-2`}>
              {language === 'en' ? currentScenario.title : currentScenario.titleId || currentScenario.title}
            </h3>
            <p className="text-lg text-t1 mb-6 font-medium leading-relaxed">
              {language === 'en' ? currentScenario.scenario : currentScenario.scenarioId || currentScenario.scenario}
            </p>
            
            <div className={`${theme.bg} p-6 rounded-3xl border-2 border-dashed ${theme.border} mb-6`}>
              <div className="flex items-start gap-3">
                <MessageSquareQuote className={`${theme.text} w-6 h-6 mt-1 shrink-0`} />
                <p className="text-lg italic text-t2">
                  {language === 'en' ? currentScenario.npcPrompt : currentScenario.npcPromptId || currentScenario.npcPrompt}
                </p>
              </div>
              <button 
                onClick={() => handleSpeak(currentScenario.npcPrompt.replace(/^[^:]+:\s*/, '').replace(/["*]/g, ''), 'clear')}
                className={`mt-4 flex items-center gap-2 ${theme.text} font-bold hover:underline`}
              >
                <Volume2 className="w-5 h-5" /> {language === 'en' ? 'Listen to prompt' : 'Dengarkan perintah'}
              </button>
            </div>
          </div>

          {/* Action Card */}
          <div className={`bg-gradient-to-br ${theme.gradient} rounded-[40px] p-8 text-white shadow-xl relative`}>
            <div className="absolute -top-4 -right-4 bg-white ${theme.text} p-3 rounded-2xl shadow-lg font-fredoka font-bold rotate-[5deg] text-t1">
              {language === 'en' ? 'YOUR RESPONSE' : 'JAWABANMU'}
            </div>
            <h3 className="text-2xl font-fredoka mb-6 font-bold mt-2">
              {language === 'en' ? 'Try saying these:' : 'Coba katakan ini:'}
            </h3>
            <div className="space-y-4">
              {currentScenario.suggestedPhrases.map((phrase, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.02, x: 5 }}
                  onClick={() => handleSpeak(phrase, 'cheerful')}
                  className="w-full text-left bg-white/20 hover:bg-white/30 p-4 rounded-2xl border-2 border-white/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex flex-col">
                    <span className="text-lg font-fredoka font-medium">"{phrase}"</span>
                    {language === 'id' && currentScenario.suggestedPhrasesId?.[idx] && (
                      <span className="text-sm opacity-80 italic">"{currentScenario.suggestedPhrasesId[idx]}"</span>
                    )}
                  </div>
                  <Volume2 className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                </motion.button>
              ))}
            </div>

            {!isCompleted ? (
              <button
                onClick={completeMission}
                className="mt-10 w-full bg-white text-t1 hover:bg-yellow-custom hover:text-white p-5 rounded-3xl font-fredoka font-bold text-xl shadow-2xl transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                <CheckCircle2 className="w-7 h-7" /> {language === 'en' ? 'I Performed It!' : 'Saya Sudah Melakukannya!'}
              </button>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-10 bg-white/20 p-6 rounded-3xl text-center border-2 border-white/50"
              >
                <p className="text-xl font-fredoka font-bold mb-4">
                  ✨ {language === 'en' ? currentScenario.outcome : currentScenario.outcomeId || currentScenario.outcome}
                </p>
                <button
                  onClick={nextMission}
                  className="bg-white text-t1 px-8 py-3 rounded-2xl font-fredoka font-bold hover:bg-yellow-custom hover:text-white transition-all"
                >
                  {language === 'en' ? 'Next Mission!' : 'Misi Berikutnya!'}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
