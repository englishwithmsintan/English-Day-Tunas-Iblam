/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { GradeLevel, WeekData, Language } from '../types';
import { SentenceScramble } from './practice/SentenceScramble';
import { ChatSimulator } from './practice/ChatSimulator';
import { PoliteQuiz } from './practice/PoliteQuiz';
import { PolitenessMeter } from './practice/PolitenessMeter';
import { RoleplayMission } from './practice/RoleplayMission';
import { LessonTasks } from './practice/LessonTasks';
import { TreasureGame } from './practice/TreasureGame';
import { SentenceFrames } from './practice/SentenceFrames';

interface PracticeSectionProps {
  gradeLevel: GradeLevel;
  weekData: WeekData;
  theme: { border: string, text: string, bg: string, accent: string, gradient: string };
  language: Language;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({ gradeLevel, weekData, theme, language }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <LessonTasks grade={gradeLevel} weekData={weekData} theme={theme} language={language} />

      <div className="space-y-16">
        {weekData.id === 'hunting-high-low' ? (
          <TreasureGame gradeLevel={gradeLevel} language={language} theme={theme} />
        ) : (
          <>
            {weekData.sentenceFrames && (gradeLevel === 'lower' ? weekData.sentenceFrames.lower.length > 0 : weekData.sentenceFrames.upper.length > 0) && (
              <SentenceFrames 
                grade={gradeLevel} 
                frames={gradeLevel === 'lower' ? weekData.sentenceFrames.lower : weekData.sentenceFrames.upper} 
                theme={theme} 
                language={language}
                title={weekData.id === 'how-are-you-feeling' ? 'Ways to Express Feelings 💬' : undefined}
                titleId={weekData.id === 'how-are-you-feeling' ? 'Cara Mengungkapkan Perasaan 💬' : undefined}
              />
            )}
            {weekData.scramble && (gradeLevel === 'lower' ? weekData.scramble.lower.length > 0 : weekData.scramble.upper.length > 0) && (
              <SentenceScramble grade={gradeLevel} weekData={weekData} theme={theme} language={language} />
            )}
            {weekData.chat && (gradeLevel === 'lower' ? weekData.chat.lower.length > 0 : weekData.chat.upper.length > 0) && (
              <ChatSimulator grade={gradeLevel} weekData={weekData} theme={theme} language={language} />
            )}
            {weekData.quiz && weekData.quiz.length > 0 && (
              <PoliteQuiz weekData={weekData} theme={theme} language={language} />
            )}
            {weekData.meter && (gradeLevel === 'lower' ? weekData.meter.lower.length > 0 : weekData.meter.upper.length > 0) && (
              <PolitenessMeter grade={gradeLevel} weekData={weekData} theme={theme} language={language} />
            )}
          </>
        )}
        {weekData.roleplay && (
          <RoleplayMission 
            grade={gradeLevel} 
            scenarios={gradeLevel === 'lower' ? weekData.roleplay.lower : weekData.roleplay.upper} 
            theme={theme} 
            language={language}
          />
        )}
      </div>
    </motion.div>
  );
};
