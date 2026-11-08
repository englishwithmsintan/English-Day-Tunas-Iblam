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
import { AchievementCelebrationModal } from './components/achievements/AchievementCelebrationModal';
import { AchievementsGalleryModal } from './components/achievements/AchievementsGalleryModal';
import { AnimatePresence, motion } from 'motion/react';
import { GradeLevel, WeekId, Language } from './types';
import { WEEKS } from './constants';
import { prewarmAudio, preloadVoices } from './services/ttsService';
import {
  getStoredAchievements,
  setWeekSectionStatus,
  WeekProgress,
} from './services/achievementService';

export default function App() {
  const [activeTab, setActiveTab] = useState('connect');
  const [gradeLevel, setGradeLevel] = useState<GradeLevel>('lower');
  const [language, setLanguage] = useState<Language>('en');
  const [selectedWeekId, setSelectedWeekId] = useState<WeekId>('break-the-ice');
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [achievements, setAchievements] = useState<Record<string, WeekProgress>>(() => getStoredAchievements());
  const [celebrationWeek, setCelebrationWeek] = useState<typeof WEEKS[0] | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const selectedWeek = WEEKS.find(w => w.id === selectedWeekId) || WEEKS[0];

  useEffect(() => {
    // TTS Optimizations
    preloadVoices();
    
    const handleFirstInteraction = () => {
      prewarmAudio();
      // Remove after first use
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const handleToggleSectionComplete = (weekId: WeekId, section: 'practice' | 'create') => {
    const current = achievements[weekId];
    const currentStatus = section === 'practice' ? !!current?.practiceCompleted : !!current?.createCompleted;
    const { newlyUnlocked } = setWeekSectionStatus(weekId, section, !currentStatus);
    const updated = getStoredAchievements();
    setAchievements(updated);

    if (newlyUnlocked) {
      const week = WEEKS.find(w => w.id === weekId) || selectedWeek;
      setCelebrationWeek(week);
    }
  };

  const themeColors: Record<string, { border: string, text: string, bg: string, accent: string, gradient: string }> = {
    'break-the-ice': { border: 'border-blue-400', text: 'text-blue-600', bg: 'bg-blue-50', accent: 'bg-blue-100', gradient: 'from-blue-400 to-blue-600' },
    'early-bird': { border: 'border-yellow-400', text: 'text-yellow-600', bg: 'bg-yellow-50', accent: 'bg-yellow-100', gradient: 'from-yellow-400 to-yellow-600' },
    'penny-thoughts': { border: 'border-green-400', text: 'text-green-600', bg: 'bg-green-50', accent: 'bg-green-100', gradient: 'from-green-400 to-green-600' },
    'getting-to-know': { border: 'border-purple-400', text: 'text-purple-600', bg: 'bg-purple-50', accent: 'bg-purple-100', gradient: 'from-purple-400 to-purple-600' },
    'whats-the-scoop': { border: 'border-red-400', text: 'text-red-600', bg: 'bg-red-50', accent: 'bg-red-100', gradient: 'from-red-400 to-red-600' },
    'lend-a-hand': { border: 'border-teal-400', text: 'text-teal-600', bg: 'bg-teal-50', accent: 'bg-teal-100', gradient: 'from-teal-400 to-teal-600' },
    'hunting-high-low': { border: 'border-green-400', text: 'text-green-600', bg: 'bg-green-50', accent: 'bg-green-100', gradient: 'from-green-400 to-green-600' },
    'pat-on-back': { border: 'border-rose-400', text: 'text-rose-600', bg: 'bg-rose-50', accent: 'bg-rose-100', gradient: 'from-rose-400 to-rose-600' },
    'how-are-you-feeling': { border: 'border-amber-400', text: 'text-amber-600', bg: 'bg-amber-50', accent: 'bg-amber-100', gradient: 'from-amber-400 to-pink-500' },
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
            isPracticeCompleted={!!achievements[selectedWeek.id]?.practiceCompleted}
            onTogglePracticeComplete={() => handleToggleSectionComplete(selectedWeek.id, 'practice')}
            onViewBadge={() => setCelebrationWeek(selectedWeek)}
          />
        );
      case 'create':
        return (
          <CreateSection 
            gradeLevel={gradeLevel} 
            weekData={selectedWeek}
            theme={theme}
            language={language}
            isCreateCompleted={!!achievements[selectedWeek.id]?.createCompleted}
            onToggleCreateComplete={() => handleToggleSectionComplete(selectedWeek.id, 'create')}
            onViewBadge={() => setCelebrationWeek(selectedWeek)}
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
    <>
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
        achievements={achievements}
        onOpenAchievementsGallery={() => setIsGalleryOpen(true)}
        onReplayCelebration={(week) => setCelebrationWeek(week)}
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

      {/* Achievement Celebration Modal */}
      {celebrationWeek && (
        <AchievementCelebrationModal
          isOpen={!!celebrationWeek}
          onClose={() => setCelebrationWeek(null)}
          weekData={celebrationWeek}
          language={language}
          onOpenGallery={() => {
            setCelebrationWeek(null);
            setIsGalleryOpen(true);
          }}
          onNavigateToShare={() => {
            setCelebrationWeek(null);
            setActiveTab('share');
          }}
        />
      )}

      {/* All Achievements Gallery Modal */}
      <AchievementsGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        weeks={WEEKS}
        language={language}
        onSelectWeek={(weekId) => {
          setSelectedWeekId(weekId);
          setIsGalleryOpen(false);
        }}
        onReplayCelebration={(week) => {
          setIsGalleryOpen(false);
          setCelebrationWeek(week);
        }}
      />
    </>
  );
}

