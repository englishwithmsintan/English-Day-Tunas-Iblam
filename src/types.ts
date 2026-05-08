/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type GradeLevel = 'lower' | 'upper';
export type Language = 'en' | 'id';

export type WeekId = 'break-the-ice' | 'early-bird' | 'penny-thoughts' | 'getting-to-know' | 'whats-the-scoop' | 'lend-a-hand' | 'hunting-high-low' | 'pat-on-back';

export interface VocabularyItem {
  word: string;
  meaning: string;
  meaningId?: string;
  example: string;
  exampleId?: string;
  emoji: string;
  image?: string;
  gesture?: string;
  gestureId?: string;
}

export interface ScrambleItem {
  situation: string;
  situationId?: string;
  words: string[];
  answer: string;
}

export interface ChatChoice {
  text: string;
  textId?: string;
  points: number;
  feedback: string;
  feedbackId?: string;
}

export interface ChatTurn {
  npc?: string;
  npcId?: string;
  choices: ChatChoice[];
}

export interface ChatSituation {
  npc: string;
  npcId?: string;
  turns: ChatTurn[];
}

export interface QuizItem {
  situation: string;
  situationId?: string;
  options: string[];
  optionsId?: string[];
  correctIndex: number;
}

export interface MeterItem {
  text: string;
  textId?: string;
  score: number;
  explanation: string;
  explanationId?: string;
  betterVersion?: string;
  betterVersionId?: string;
}

export interface RoleplayScenario {
  title: string;
  titleId?: string;
  scenario: string;
  scenarioId?: string;
  npcPrompt: string;
  npcPromptId?: string;
  suggestedPhrases: string[];
  suggestedPhrasesId?: string[];
  outcome: string;
  outcomeId?: string;
}

export interface ComicScene {
  character: string;
  expression: string;
  dialogue: string;
}

export interface ComicSituation {
  title: string;
  scenes: {
    prompt: string;
    options: {
      text: string;
      expression: string;
    }[];
  }[];
}

export interface WeekData {
  id: WeekId;
  title: string;
  titleId?: string;
  badge: string;
  description: string;
  descriptionId?: string;
  goals: {
    lower: string;
    lowerId?: string;
    upper: string;
    upperId?: string;
  };
  keyPhrases: {
    lower: string[];
    lowerId?: string[];
    upper: string[];
    upperId?: string[];
  };
  vocab: {
    lower: VocabularyItem[];
    upper: VocabularyItem[];
  };
  scramble: {
    lower: ScrambleItem[];
    upper: ScrambleItem[];
  };
  chat: {
    lower: ChatSituation[];
    upper: ChatSituation[];
  };
  quiz: QuizItem[];
  meter?: {
    lower: MeterItem[];
    upper: MeterItem[];
  };
  share: {
    lower: {
      title: string;
      titleId?: string;
      description: string;
      descriptionId?: string;
      activity: string;
      activityId?: string;
    };
    upper: {
      title: string;
      titleId?: string;
      description: string;
      descriptionId?: string;
      activity: string;
      activityId?: string;
    };
    assessment?: {
      lower: string[];
      lowerId?: string[];
      upper: string[];
      upperId?: string[];
    };
  };
  materials?: string[];
  materialsId?: string[];
  review?: {
    title: string;
    titleId?: string;
    activity: string;
    activityId?: string;
    connection: string;
    connectionId?: string;
  };
  physicalOutput?: {
    lower: {
      title: string;
      titleId?: string;
      steps: string[];
      stepsId?: string[];
      keep: string;
      keepId?: string;
      example?: string;
      exampleId?: string;
    };
    upper: {
      title: string;
      titleId?: string;
      steps: string[];
      stepsId?: string[];
      keep: string;
      keepId?: string;
      example?: string;
      exampleId?: string;
    };
  };
  alternativeOutputs?: {
    type: string;
    typeId?: string;
    lower: string;
    lowerId?: string;
    upper: string;
    upperId?: string;
  }[];
  templates?: {
    title: string;
    titleId?: string;
    content: string;
    image?: string;
  }[];
  lessonTasks?: {
    title: string;
    titleId?: string;
    time: string;
    lower: string;
    lowerId?: string;
    upper: string;
    upperId?: string;
  }[];
  comics?: {
    lower: ComicSituation[];
    upper: ComicSituation[];
  };
  roleplay?: {
    lower: RoleplayScenario[];
    upper: RoleplayScenario[];
  };
  sentenceFrames?: {
    lower: { en: string; id: string }[];
    upper: { en: string; id: string }[];
  };
}
