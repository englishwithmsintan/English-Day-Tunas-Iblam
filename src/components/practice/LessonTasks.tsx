import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Users, Play, Volume2 } from 'lucide-react';
import { GradeLevel, WeekData, Language } from '../../types';
import { speakQueued, prewarmAudio } from '../../services/ttsService';

interface LessonTasksProps {
  grade: GradeLevel;
  weekData: WeekData;
  theme: any;
  language: Language;
}

export const LessonTasks: React.FC<LessonTasksProps> = ({ grade, weekData, theme, language }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = async (text: string) => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    try {
      prewarmAudio();
      await speakQueued(text, 'cheerful');
    } finally {
      setIsSpeaking(false);
    }
  };

  if (!weekData.lessonTasks || weekData.lessonTasks.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg ${theme.bg} ${theme.text}`}>
          <Play size={20} />
        </div>
        <h3 className={`text-2xl font-fredoka font-black ${theme.text} uppercase tracking-tight`}>
          {weekData.id === 'hunting-high-low' 
            ? (language === 'en' ? 'The Treasure Games' : 'Permainan Harta Karun')
            : (language === 'en' ? 'Classroom Activities' : 'Aktivitas Kelas')}
        </h3>
      </div>

      <div className="grid gap-4">
        {weekData.lessonTasks.map((task, index) => {
          const taskContent = grade === 'lower' 
            ? (language === 'en' ? task.lower : task.lowerId || task.lower) 
            : (language === 'en' ? task.upper : task.upperId || task.upper);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white border-4 ${theme.border} rounded-3xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-start md:items-center relative`}
            >
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 bg-bg-light rounded-2xl border-2 border-bg-darker">
                <Clock size={24} className={theme.text} />
                <span className="text-xs font-black text-t3 mt-1">{task.time}</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Users size={16} className={theme.text} />
                    <h4 className="text-lg font-fredoka font-black text-t2 uppercase tracking-tight">
                      {language === 'en' ? task.title : task.titleId || task.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => handleSpeak(taskContent)}
                    className={`p-2 hover:${theme.bg} rounded-xl transition-all ${theme.text} opacity-50 hover:opacity-100`}
                  >
                    <Volume2 size={20} />
                  </button>
                </div>
                <p className="text-t2 font-fredoka font-bold leading-relaxed whitespace-pre-line">
                  {taskContent}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
