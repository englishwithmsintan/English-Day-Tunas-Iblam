import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Palette, Lightbulb, CheckCircle2, Download, Sparkles } from 'lucide-react';
import { GradeLevel, WeekData, Language } from '../types';

interface CreateSectionProps {
  gradeLevel: GradeLevel;
  weekData: WeekData;
  theme: any;
  language: Language;
}

export const CreateSection: React.FC<CreateSectionProps> = ({ gradeLevel, weekData, theme, language }) => {
  if (!weekData.physicalOutput) return null;

  const output = gradeLevel === 'lower' ? weekData.physicalOutput.lower : weekData.physicalOutput.upper;

  return (
    <div className="space-y-8">
      {/* Main Activity Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-white border-4 ${theme.border} rounded-[32px] p-8 shadow-xl relative overflow-hidden`}
      >
        <div className={`absolute top-0 right-0 w-32 h-32 ${theme.bg} rounded-bl-full -mr-10 -mt-10 opacity-50`} />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-2xl ${theme.bg} ${theme.text}`}>
              <Scissors size={32} />
            </div>
            <div>
              <h2 className={`text-3xl font-fredoka font-black ${theme.text} uppercase tracking-tight`}>
                {language === 'en' ? output.title : output.titleId || output.title}
              </h2>
              <p className="text-t3 font-fredoka font-bold">
                {language === 'en' ? 'Physical Output Activity' : 'Aktivitas Hasil Karya Fisik'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-fredoka font-black text-t2 flex items-center gap-2">
                <Palette size={24} className={theme.text} />
                {language === 'en' ? 'How to Make It:' : 'Cara Membuatnya:'}
              </h3>
              <ul className="space-y-3">
                {(language === 'en' ? output.steps : output.stepsId || output.steps).map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-bg-light p-4 rounded-2xl border-2 border-transparent hover:border-bg-darker transition-all"
                  >
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full ${theme.bg} ${theme.text} flex items-center justify-center font-black text-sm`}>
                      {index + 1}
                    </span>
                    <p className="text-t2 font-fredoka font-bold leading-tight pt-1">{step}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className={`p-6 rounded-3xl ${theme.bg} border-2 ${theme.border} border-dashed`}>
                <h3 className={`text-lg font-fredoka font-black ${theme.text} mb-2 flex items-center gap-2`}>
                  <CheckCircle2 size={20} />
                  {language === 'en' ? 'What to do with it?' : 'Apa yang harus dilakukan?'}
                </h3>
                <p className="text-t2 font-fredoka font-bold italic">
                  "{language === 'en' ? output.keep : output.keepId || output.keep}"
                </p>
              </div>

              {/* Student Example Box */}
              {output.example && (
                <div className="bg-yellow-50 border-4 border-yellow-200 rounded-3xl p-6 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-white px-3 py-0.5 rounded-bl-xl font-black text-[10px] uppercase tracking-widest">
                    {language === 'en' ? 'Copy this!' : 'Salin ini!'}
                  </div>
                  <h4 className="text-lg font-fredoka text-yellow-700 mb-3 font-black flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> {language === 'en' ? 'Student Example' : 'Contoh Siswa'}
                  </h4>
                  <div className="bg-white p-4 rounded-2xl border-2 border-yellow-100 shadow-inner italic text-base text-t1 font-fredoka font-bold">
                    {language === 'en' ? output.example : output.exampleId || output.example}
                  </div>
                </div>
              )}

              {weekData.alternativeOutputs && (
                <div className="space-y-4">
                  <h3 className="text-xl font-fredoka font-black text-t2 flex items-center gap-2">
                    <Lightbulb size={24} className="text-yellow-500" />
                    {language === 'en' ? 'Other Options:' : 'Pilihan Lainnya:'}
                  </h3>
                  <div className="grid gap-3">
                    {weekData.alternativeOutputs.map((alt, index) => (
                      <div key={index} className="bg-white border-2 border-bg-darker p-4 rounded-2xl shadow-sm">
                        <div className="font-black text-xs text-t3 uppercase tracking-widest mb-1">
                          {language === 'en' ? alt.type : alt.typeId || alt.type}
                        </div>
                        <div className="text-sm font-fredoka font-bold text-t2">
                          {gradeLevel === 'lower' 
                            ? (language === 'en' ? alt.lower : alt.lowerId || alt.lower) 
                            : (language === 'en' ? alt.upper : alt.upperId || alt.upper)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Templates Section */}
      {weekData.templates && (
        <div className="grid md:grid-cols-2 gap-6">
          {weekData.templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white border-4 border-bg-darker rounded-[32px] p-6 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-fredoka font-black text-t2 uppercase tracking-tight">
                  {template.title}
                </h3>
                <button className={`p-2 rounded-xl ${theme.bg} ${theme.text} hover:scale-110 transition-transform`}>
                  <Download size={20} />
                </button>
              </div>
              <div className="bg-bg-light rounded-2xl p-4 font-mono text-xs text-t3 whitespace-pre-wrap border-2 border-dashed border-bg-darker">
                {template.content}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};
