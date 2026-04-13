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
        <SentenceScramble grade={gradeLevel} weekData={weekData} theme={theme} language={language} />
        <ChatSimulator grade={gradeLevel} weekData={weekData} theme={theme} language={language} />
        <PoliteQuiz weekData={weekData} theme={theme} language={language} />
        <PolitenessMeter grade={gradeLevel} weekData={weekData} theme={theme} language={language} />
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
