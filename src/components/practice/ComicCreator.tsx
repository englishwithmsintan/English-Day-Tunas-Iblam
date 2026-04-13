import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Send, RefreshCcw, Trophy, Sparkles, User } from 'lucide-react';
import { ComicSituation, ComicScene } from '../../types';

interface ComicCreatorProps {
  comicSituations: ComicSituation[];
  theme: { border: string, text: string, bg: string, accent: string, gradient: string };
}

export const ComicCreator: React.FC<ComicCreatorProps> = ({ comicSituations, theme }) => {
  const [currentSituationIndex, setCurrentSituationIndex] = useState(0);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [completedScenes, setCompletedScenes] = useState<ComicScene[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const situation = comicSituations[currentSituationIndex];
  const scene = situation.scenes[currentSceneIndex];

  const handleOptionSelect = (option: { text: string, expression: string }) => {
    const newScene: ComicScene = {
      character: 'Student',
      expression: option.expression,
      dialogue: option.text
    };

    const newCompleted = [...completedScenes, newScene];
    setCompletedScenes(newCompleted);

    if (currentSceneIndex < situation.scenes.length - 1) {
      setCurrentSceneIndex(currentSceneIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setCurrentSceneIndex(0);
    setCompletedScenes([]);
    setIsFinished(false);
  };

  return (
    <div className={`card border-4 ${theme.border} overflow-hidden relative`}>
      <div className={`absolute top-0 right-0 w-32 h-32 ${theme.accent} opacity-10 rounded-full -mr-16 -mt-16`} />
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${theme.gradient} text-white shadow-lg`}>
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className={`text-2xl font-fredoka ${theme.text}`}>Comic Creator</h3>
            <p className="text-t3 text-sm font-bold uppercase tracking-wider">{situation.title}</p>
          </div>
        </div>
        
        {!isFinished && (
          <div className="bg-bg-darker px-4 py-2 rounded-full text-t2 font-fredoka font-bold text-sm">
            Scene {currentSceneIndex + 1} of {situation.scenes.length}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key="creator"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            {/* Scene Prompt */}
            <div className={`${theme.bg} p-6 rounded-[32px] border-2 border-white shadow-inner relative`}>
              <div className="absolute -top-3 left-8 bg-white px-4 py-1 rounded-full border-2 border-bg-darker text-xs font-bold text-t3 uppercase">The Situation</div>
              <p className="text-xl font-fredoka text-t2 leading-relaxed italic">
                "{scene.prompt}"
              </p>
            </div>

            {/* Character Preview */}
            <div className="flex justify-center py-8">
              <div className="relative">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center shadow-xl border-4 border-white`}>
                  <User className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-lg border-2 border-bg-darker text-2xl">
                  ❓
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-4">
              {scene.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className={`
                    group text-left p-6 rounded-[24px] border-4 border-bg-darker bg-white hover:${theme.border} transition-all active:scale-[0.98] shadow-sm hover:shadow-md relative overflow-hidden
                  `}
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-fredoka font-bold text-t2 group-hover:text-t1 transition-colors">
                      {option.text}
                    </span>
                    <div className={`p-2 rounded-lg bg-bg-darker group-hover:${theme.bg} transition-colors`}>
                      <Send className={`w-5 h-5 ${theme.text}`} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-6 py-2 rounded-full font-fredoka font-bold text-lg mb-4">
                <Trophy className="w-5 h-5" /> Comic Finished!
              </div>
              <h4 className={`text-3xl font-fredoka ${theme.text}`}>Your Story Outcome</h4>
            </div>

            {/* Comic Strip Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedScenes.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white border-4 border-bg-darker rounded-[32px] p-6 shadow-lg relative"
                >
                  <div className="absolute -top-3 left-6 bg-t1 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">Panel {idx + 1}</div>
                  <div className="flex flex-col items-center gap-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center border-2 border-white shadow-md`}>
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <div className="bg-bg-darker p-4 rounded-2xl w-full relative">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-bg-darker rotate-45" />
                      <p className="text-center font-fredoka font-bold text-t1 italic">"{s.dialogue}"</p>
                    </div>
                    <div className="text-xs font-bold text-t3 uppercase tracking-widest flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Expression: {s.expression}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={reset}
              className={`w-full bg-gradient-to-r ${theme.gradient} text-white py-4 rounded-2xl font-fredoka font-bold text-xl shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95`}
            >
              <RefreshCcw className="w-6 h-6" /> Create Another Story
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
