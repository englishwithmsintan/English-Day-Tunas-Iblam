import React from 'react';
import { motion } from 'motion/react';
import { Clock, Users, Play } from 'lucide-react';
import { GradeLevel, WeekData, Language } from '../../types';

interface LessonTasksProps {
  grade: GradeLevel;
  weekData: WeekData;
  theme: any;
  language: Language;
}

export const LessonTasks: React.FC<LessonTasksProps> = ({ grade, weekData, theme, language }) => {
  if (!weekData.lessonTasks) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg ${theme.bg} ${theme.text}`}>
          <Play size={20} />
        </div>
        <h3 className={`text-2xl font-fredoka font-black ${theme.text} uppercase tracking-tight`}>
          {language === 'en' ? 'Classroom Activities' : 'Aktivitas Kelas'}
        </h3>
      </div>

      <div className="grid gap-4">
        {weekData.lessonTasks.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white border-4 ${theme.border} rounded-3xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-start md:items-center`}
          >
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 bg-bg-light rounded-2xl border-2 border-bg-darker">
              <Clock size={24} className={theme.text} />
              <span className="text-xs font-black text-t3 mt-1">{task.time}</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Users size={16} className={theme.text} />
                <h4 className="text-lg font-fredoka font-black text-t2 uppercase tracking-tight">
                  {language === 'en' ? task.title : task.titleId || task.title}
                </h4>
              </div>
              <p className="text-t2 font-fredoka font-bold leading-relaxed">
                {grade === 'lower' 
                  ? (language === 'en' ? task.lower : task.lowerId || task.lower) 
                  : (language === 'en' ? task.upper : task.upperId || task.upper)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
