/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Send, Star, RefreshCw } from 'lucide-react';
import { GradeLevel, WeekData, Language } from '../../types';
import { speak } from '../../services/ttsService';

interface ChatSimulatorProps {
  grade: GradeLevel;
  weekData: WeekData;
  theme: { border: string, text: string, bg: string, accent: string, gradient: string };
  language: Language;
}

interface Message {
  text: string;
  side: 'left' | 'right';
  type?: 'hint';
}

export const ChatSimulator: React.FC<ChatSimulatorProps> = ({ grade, weekData, theme, language }) => {
  const data = grade === 'lower' ? weekData.chat.lower : weekData.chat.upper;
  const [currentSituationIndex, setCurrentSituationIndex] = useState<number | null>(null);
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    setMessages([]);
    setCurrentSituationIndex(null);
    setIsGameOver(false);
  }, [grade, weekData.id]);

  const startNewChat = () => {
    if (data.length === 0) return;
    const idx = Math.floor(Math.random() * data.length);
    setCurrentSituationIndex(idx);
    setCurrentTurnIndex(0);
    setTotalPoints(0);
    setIsGameOver(false);
    const initialNpcMessage = language === 'en' ? data[idx].npc : data[idx].npcId || data[idx].npc;
    setMessages([{ text: initialNpcMessage, side: 'left' }]);
    handleSpeak(initialNpcMessage.replace(/^[^:]+:\s*/, '').replace(/["*]/g, ''), 'cheerful');
  };

  const handleSpeak = async (text: string, style: 'cheerful' | 'clear' = 'cheerful') => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    await speak(text, style);
    setIsSpeaking(false);
  };

  const pickChoice = (choiceIndex: number) => {
    if (currentSituationIndex === null || isGameOver) return;
    
    const situation = data[currentSituationIndex];
    const turn = situation.turns[currentTurnIndex];
    const choice = turn.choices[choiceIndex];
    
    const newMessages = [...messages];
    newMessages.push({ text: language === 'en' ? choice.text : choice.textId || choice.text, side: 'right' });
    newMessages.push({ text: language === 'en' ? choice.feedback : choice.feedbackId || choice.feedback, side: 'left', type: 'hint' });
    
    setMessages(newMessages);
    setTotalPoints(prev => prev + choice.points);
    handleSpeak(choice.text, 'cheerful');

    const nextTurnIndex = currentTurnIndex + 1;
    if (nextTurnIndex < situation.turns.length) {
      const nextTurn = situation.turns[nextTurnIndex];
      setTimeout(() => {
        if (nextTurn.npc) {
          const npcMsg = language === 'en' ? nextTurn.npc! : nextTurn.npcId || nextTurn.npc!;
          setMessages(prev => [...prev, { text: npcMsg, side: 'left' }]);
          handleSpeak(npcMsg.replace(/^[^:]+:\s*/, '').replace(/["*]/g, ''), 'cheerful');
        }
        setCurrentTurnIndex(nextTurnIndex);
      }, 1500);
    } else {
      setTimeout(() => {
        const maxPoints = situation.turns.reduce((acc, t) => acc + Math.max(...t.choices.map(c => c.points)), 0);
        const percentage = Math.round((totalPoints + choice.points) / maxPoints * 100);
        
        let endMsg = "";
        if (percentage >= 80) endMsg = language === 'en' ? "🏆 Amazing! You are a politeness expert! ⭐" : "🏆 Luar biasa! Kamu ahli kesopanan! ⭐";
        else if (percentage >= 50) endMsg = language === 'en' ? "👏 Good job! You were very polite! 😊" : "👏 Kerja bagus! Kamu sangat sopan! 😊";
        else endMsg = language === 'en' ? "💪 Keep practising! You can be even more polite! 💭" : "💪 Teruslah berlatih! Kamu bisa lebih sopan lagi! 💭";

        setMessages(prev => [...prev, { text: endMsg, side: 'left', type: 'hint' }]);
        setIsGameOver(true);
        handleSpeak(endMsg.replace(/[🏆👏💪⭐😊💭!]/g, ''), 'cheerful');
      }, 1500);
    }
  };

  const currentTurn = currentSituationIndex !== null ? data[currentSituationIndex]?.turns[currentTurnIndex] : null;

  return (
    <div className={`card border-4 ${theme.border}`}>
      <h2 className={`text-3xl md:text-4xl mb-6 flex items-center gap-4 ${theme.text}`}>
        💬 {language === 'en' ? 'Task 2: What Do You Say?' : 'Tugas 2: Apa yang Kamu Katakan?'}
      </h2>
      <p className="text-xl text-t2 mb-8">
        {language === 'en' 
          ? 'Your classmate is talking to you! Tap the best reply. Green = polite! 🎤' 
          : 'Teman sekelasmu sedang berbicara padamu! Ketuk jawaban terbaik. Hijau = sopan! 🎤'}
      </p>

      <div className={`bg-white p-8 rounded-[40px] border-4 ${theme.border} shadow-inner`}>
        <div 
          ref={scrollRef}
          className={`${theme.bg} rounded-[32px] p-6 mb-8 min-h-[300px] max-h-[400px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-bg-darker border-2 border-white shadow-inner`}
        >
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-t3 gap-4">
              <MessageCircle className="w-16 h-16 opacity-10" />
              <p className="font-fredoka font-bold">
                {language === 'en' ? 'Press Start Chat to begin! 👇' : 'Tekan Mulai Chat untuk memulai! 👇'}
              </p>
            </div>
          ) : (
            messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.side === 'right' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.type === 'hint' ? (
                  <div className="w-full bg-yellow-custom/10 border-2 border-yellow-custom/20 rounded-2xl p-4 text-yellow-custom text-sm text-center font-fredoka font-bold">
                    {msg.text}
                  </div>
                ) : (
                  <div className={`
                    max-w-[85%] p-4 px-6 rounded-[24px] font-nunito text-lg leading-relaxed shadow-sm
                    ${msg.side === 'left' 
                      ? 'bg-white border-2 border-bg-darker rounded-tl-none text-t1' 
                      : `bg-gradient-to-br ${theme.gradient} text-white rounded-tr-none`}
                  `}>
                    {msg.text}
                  </div>
                )}
              </motion.div>
            ))
          )}
        </div>

        <div className="space-y-3">
          {currentTurn && !isGameOver && (
            <div className="grid gap-3">
              {currentTurn.choices.map((choice, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => pickChoice(i)}
                  className={`w-full text-left bg-white border-2 border-bg-darker p-5 rounded-2xl hover:${theme.border} hover:${theme.bg} transition-all text-lg font-nunito font-bold shadow-sm active:scale-95`}
                >
                  {language === 'en' ? choice.text : choice.textId || choice.text}
                </motion.button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-6 mt-10 flex-wrap">
          <button
            onClick={startNewChat}
            className={`bg-gradient-to-r ${theme.gradient} text-white px-10 py-5 rounded-3xl font-fredoka font-bold text-xl shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95`}
          >
            <RefreshCw className="w-7 h-7" /> {messages.length > 0 ? (language === 'en' ? 'New Chat!' : 'Chat Baru!') : (language === 'en' ? 'Start Chat!' : 'Mulai Chat!')}
          </button>
          {grade === 'upper' && currentSituationIndex !== null && (
            <div className={`flex items-center gap-3 font-fredoka text-2xl ${theme.text} font-bold bg-white px-6 py-4 rounded-2xl shadow-sm border-2 ${theme.border}`}>
              <Star className={`fill-current w-8 h-8`} /> {language === 'en' ? 'Politeness:' : 'Kesopanan:'} {totalPoints} pts
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
