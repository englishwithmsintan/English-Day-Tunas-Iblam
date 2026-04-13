/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { ConnectSection } from './components/ConnectSection';
import { VocabSection } from './components/VocabSection';
import { PracticeSection } from './components/PracticeSection';
import { ShareSection } from './components/ShareSection';
import { CreateSection } from './components/CreateSection';
import { AnimatePresence, motion } from 'motion/react';
import { GradeLevel, WeekId, Language } from './types';
import { WEEKS } from './constants';

export default function App() {
  const [activeTab, setActiveTab] = useState('connect');
  const [gradeLevel, setGradeLevel] = useState<GradeLevel>('lower');
  const [language, setLanguage] = useState<Language>('en');
  const [selectedWeekId, setSelectedWeekId] = useState<WeekId>('break-the-ice');
  const [timeElapsed, setTimeElapsed] = useState(0);

  const selectedWeek = WEEKS.find(w => w.id === selectedWeekId) || WEEKS[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const themeColors: Record<string, { border: string, text: string, bg: string, accent: string, gradient: string }> = {
    'break-the-ice': { border: 'border-blue-400', text: 'text-blue-600', bg: 'bg-blue-50', accent: 'bg-blue-100', gradient: 'from-blue-400 to-blue-600' },
    'early-bird': { border: 'border-yellow-400', text: 'text-yellow-600', bg: 'bg-yellow-50', accent: 'bg-yellow-100', gradient: 'from-yellow-400 to-yellow-600' },
    'penny-thoughts': { border: 'border-green-400', text: 'text-green-600', bg: 'bg-green-50', accent: 'bg-green-100', gradient: 'from-green-400 to-green-600' },
    'getting-to-know': { border: 'border-purple-400', text: 'text-purple-600', bg: 'bg-purple-50', accent: 'bg-purple-100', gradient: 'from-purple-400 to-purple-600' },
    'whats-the-scoop': { border: 'border-red-400', text: 'text-red-600', bg: 'bg-red-50', accent: 'bg-red-100', gradient: 'from-red-400 to-red-600' },
    'lend-a-hand': { border: 'border-teal-400', text: 'text-teal-600', bg: 'bg-teal-50', accent: 'bg-teal-100', gradient: 'from-teal-400 to-teal-600' },
  };

  const theme = themeColors[selectedWeek.id] || { border: 'border-teal-custom', text: 'text-teal-custom', bg: 'bg-bg', accent: 'bg-bg-darker', gradient: 'from-teal-custom to-cyan-custom' };

  const renderContent = () => {
    switch (activeTab) {
      case 'connect':
        return (
          <ConnectSection 
            gradeLevel={gradeLevel} 
            setGradeLevel={setGradeLevel} 
            weekData={selectedWeek}
            theme={theme}
            language={language}
          />
        );
      case 'vocab':
        return (
          <VocabSection 
            gradeLevel={gradeLevel} 
            weekData={selectedWeek}
            theme={theme}
            language={language}
          />
        );
      case 'practice':
        return (
          <PracticeSection 
            gradeLevel={gradeLevel} 
            weekData={selectedWeek}
            theme={theme}
            language={language}
          />
        );
      case 'create':
        return (
          <CreateSection 
            gradeLevel={gradeLevel} 
            weekData={selectedWeek}
            theme={theme}
            language={language}
          />
        );
      case 'share':
        return (
          <ShareSection 
            gradeLevel={gradeLevel} 
            weekData={selectedWeek}
            theme={theme}
            language={language}
          />
        );
      default:
        return <ConnectSection gradeLevel={gradeLevel} setGradeLevel={setGradeLevel} weekData={selectedWeek} theme={theme} />;
    }
  };

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      timeElapsed={timeElapsed}
      selectedWeek={selectedWeek}
      weeks={WEEKS}
      onWeekSelect={setSelectedWeekId}
      gradeLevel={gradeLevel}
      setGradeLevel={setGradeLevel}
      language={language}
      setLanguage={setLanguage}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedWeekId}-${activeTab}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

