import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Palette, Lightbulb, CheckCircle2, Download, Sparkles, Printer, Info, ArrowRight } from 'lucide-react';
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
    <div className="space-y-12">
      {/* Main Activity Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`bg-white border-4 ${theme.border} rounded-[48px] p-8 md:p-12 shadow-2xl relative overflow-hidden`}
      >
        <div className={`absolute top-0 right-0 w-64 h-64 ${theme.bg} rounded-bl-full -mr-20 -mt-20 opacity-30 blur-3xl`} />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-6">
              <div className={`p-6 rounded-[32px] ${theme.bg} ${theme.text} shadow-inner`}>
                <Scissors size={48} className="animate-bounce" />
              </div>
              <div>
                <h2 className={`text-4xl md:text-5xl font-fredoka font-black ${theme.text} uppercase tracking-tight leading-none mb-2`}>
                  {language === 'en' ? output.title : output.titleId || output.title}
                </h2>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full ${theme.bg} ${theme.text} text-xs font-black uppercase tracking-widest`}>
                    {language === 'en' ? 'Physical Activity' : 'Aktivitas Fisik'}
                  </span>
                  <span className="text-t3 font-fredoka font-bold text-sm">
                    {language === 'en' ? 'Fun Hands-on Project' : 'Proyek Tangan yang Seru'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Steps Column */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-2xl ${theme.bg} flex items-center justify-center`}>
                  <Palette size={24} className={theme.text} />
                </div>
                <h3 className="text-2xl font-fredoka font-black text-t1 uppercase tracking-tight">
                  {language === 'en' ? 'Step-by-Step Guide' : 'Panduan Langkah demi Langkah'}
                </h3>
              </div>
              
              <div className="space-y-4 relative">
                {/* Vertical Line for steps */}
                <div className="absolute left-6 top-8 bottom-8 w-1 bg-bg-darker rounded-full hidden md:block" />
                
                {(language === 'en' ? output.steps : output.stepsId || output.steps).map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative flex items-start gap-6 bg-white p-6 rounded-[32px] border-2 border-bg-darker hover:border-purple-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${theme.bg} ${theme.text} flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform z-10`}>
                      {index + 1}
                    </div>
                    <div className="pt-1">
                      <p className="text-lg text-t2 font-fredoka font-bold leading-snug">{step}</p>
                    </div>
                    <ArrowRight className={`absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 ${theme.text} opacity-0 group-hover:opacity-20 group-hover:translate-x-2 transition-all`} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Action Box */}
              <div className={`p-8 rounded-[40px] ${theme.bg} border-4 ${theme.border} border-dashed relative overflow-hidden group`}>
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <Info size={120} />
                </div>
                <h3 className={`text-xl font-fredoka font-black ${theme.text} mb-4 flex items-center gap-3`}>
                  <CheckCircle2 size={28} />
                  {language === 'en' ? 'What to do next?' : 'Apa selanjutnya?'}
                </h3>
                <p className="text-xl text-t1 font-fredoka font-black leading-tight">
                  "{language === 'en' ? output.keep : output.keepId || output.keep}"
                </p>
              </div>

              {/* Student Example Box */}
              {output.example && (
                <div className="bg-yellow-50 border-4 border-yellow-200 rounded-[40px] p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-white px-6 py-2 rounded-bl-3xl font-black text-xs uppercase tracking-widest shadow-md">
                    {language === 'en' ? 'Copy this!' : 'Salin ini!'}
                  </div>
                  <h4 className="text-xl font-fredoka text-yellow-700 mb-6 font-black flex items-center gap-3">
                    <Sparkles className="w-6 h-6 animate-pulse" /> 
                    {language === 'en' ? 'Student Example' : 'Contoh Siswa'}
                  </h4>
                  <div className="bg-white p-6 rounded-[32px] border-2 border-yellow-100 shadow-inner italic text-xl text-t1 font-fredoka font-bold leading-relaxed">
                    {language === 'en' ? output.example : output.exampleId || output.example}
                  </div>
                </div>
              )}

              {/* Other Options */}
              {weekData.alternativeOutputs && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-fredoka font-black text-t1 flex items-center gap-3">
                    <Lightbulb size={32} className="text-yellow-500" />
                    {language === 'en' ? 'Other Options' : 'Pilihan Lain'}
                  </h3>
                  <div className="grid gap-4">
                    {weekData.alternativeOutputs.map((alt, index) => (
                      <motion.div 
                        key={index} 
                        whileHover={{ x: 10 }}
                        className="bg-white border-2 border-bg-darker p-5 rounded-[28px] shadow-sm flex items-center gap-4"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-bg-light flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">💡</span>
                        </div>
                        <div>
                          <div className="font-black text-[10px] text-t3 uppercase tracking-widest mb-1">
                            {language === 'en' ? alt.type : alt.typeId || alt.type}
                          </div>
                          <div className="text-base font-fredoka font-bold text-t2 leading-tight">
                            {gradeLevel === 'lower' 
                              ? (language === 'en' ? alt.lower : alt.lowerId || alt.lower) 
                              : (language === 'en' ? alt.upper : alt.upperId || alt.upper)}
                          </div>
                        </div>
                      </motion.div>
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
        <div className="space-y-8">
          <div className="flex items-center gap-4 px-4">
            <div className="w-12 h-12 rounded-2xl bg-white border-2 border-bg-darker flex items-center justify-center shadow-sm">
              <Printer size={24} className="text-t2" />
            </div>
            <div>
              <h2 className="text-3xl font-fredoka font-black text-t1 uppercase tracking-tight">
                {language === 'en' ? 'Project Templates' : 'Templat Proyek'}
              </h2>
              <p className="text-t3 font-fredoka font-bold">
                {language === 'en' ? 'Handy guides for your project' : 'Panduan praktis untuk proyekmu'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {weekData.templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-4 border-bg-darker rounded-[48px] p-8 shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-fredoka font-black text-t1 uppercase tracking-tight">
                    {language === 'en' ? template.title : template.titleId || template.title}
                  </h3>
                  <button className={`p-4 rounded-2xl ${theme.bg} ${theme.text} hover:scale-110 active:scale-95 transition-all shadow-lg`}>
                    <Download size={24} />
                  </button>
                </div>
                <div className="bg-bg-light rounded-[32px] p-8 font-mono text-sm text-t2 whitespace-pre-wrap border-2 border-dashed border-bg-darker shadow-inner leading-relaxed group-hover:bg-white transition-colors text-left uppercase">
                  {template.image && (
                    <div className="mb-6 rounded-2xl overflow-hidden border-2 border-bg-darker bg-white p-2">
                       <img 
                        src={template.image} 
                        alt={template.title} 
                        className="w-full h-auto object-contain rounded-xl shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  {template.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
