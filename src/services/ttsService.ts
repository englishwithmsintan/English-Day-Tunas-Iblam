/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

console.log("TTS: Service initialized. API Key present:", !!process.env.GEMINI_API_KEY);

let audioContext: AudioContext | null = null;

export function getAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    try {
      audioContext = new AudioContextClass({ sampleRate: 24000 });
    } catch (e) {
      console.warn("TTS: Could not create AudioContext with 24kHz, using default", e);
      audioContext = new AudioContextClass();
    }
  }
  return audioContext;
}

export async function prewarmAudio() {
  const ctx = getAudioContext();
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }
  console.log("TTS: AudioContext pre-warmed. State:", ctx.state);
}

async function playRawPcm(base64Data: string) {
  return new Promise<void>((resolve, reject) => {
    let timeoutId: any;
    try {
      const ctx = getAudioContext();

      const binaryString = atob(base64Data);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      const arrayBuffer = bytes.buffer;
      const audioBuffer = ctx.createBuffer(1, arrayBuffer.byteLength / 2, 24000);
      const nowBuffering = audioBuffer.getChannelData(0);
      const dataView = new DataView(arrayBuffer);

      for (let i = 0; i < arrayBuffer.byteLength / 2; i++) {
        nowBuffering[i] = dataView.getInt16(i * 2, true) / 32768;
      }

      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);

      timeoutId = setTimeout(() => {
        console.warn("Audio playback timed out");
        resolve();
      }, 10000);

      source.onended = () => {
        clearTimeout(timeoutId);
        resolve();
      };

      source.start();
    } catch (e) {
      if (timeoutId) clearTimeout(timeoutId);
      reject(e);
    }
  });
}

export async function speak(text: string, style: 'cheerful' | 'clear' | 'playful' | 'gentle' = 'playful'): Promise<void> {
  if (!text) return;

  console.log(`TTS: Attempting "${text}" (${style})`);

  // Try Gemini TTS first
  if (process.env.GEMINI_API_KEY) {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      // 🎯 RECONSTRUCTED: Premium prompts for the most human-like, friendly female teacher voice
      const stylePrompts = {
        cheerful: `You are a warm, bubbly, and very expressive female teacher speaking directly to a young child. Talk with a high-pitched, melodic, and joyful tone. Imagine you have a big smile on your face and you are clapping your hands! Add natural pauses, tiny happy chuckles, and emphasize positive words with more energy. YOU ARE NOT A ROBOT. You are a kind person who loves teaching. Say this clearly and enthusiastically: "${text}"`,

        playful: `You are a silly, energetic, and fun big sister or youth counselor. Use a bouncy, bright female voice filled with excitement. Sound spontaneous and lighthearted, like you are in the middle of a fun game. Add natural energy and warmth to every word. Make the child laugh with your tone! Say this: "${text}"`,

        clear: `You are a patient, nurturing female mentor explaining something important to a young student. Speak clearly, moderately slow, and with extreme kindness. Your voice should sound soft, reassuring, and very bright. Pronounce each word perfectly but keep the emotion warm and human. Say this: "${text}"`,

        gentle: `You are a loving storyteller with a soft, affectionate female voice. Speak gracefully and tenderly, like you are reading a magical story to a small child who is listening closely. Your voice should feel calm, safe, and full of love. Very human, very soothing. Say this: "${text}"`
      };

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-exp",
        contents: [{ 
          role: 'user', 
          parts: [{ text: stylePrompts[style] || stylePrompts.playful }] 
        }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              // 🎯 Aoife is a warm, friendly female voice model
              prebuiltVoiceConfig: { voiceName: 'Aoife' },
            },
          },
        },
      });

      const audioPart = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
      const base64Audio = audioPart?.inlineData?.data;

      if (base64Audio) {
        console.log("TTS: Gemini success");
        await playRawPcm(base64Audio);
        return;
      }
    } catch (error) {
      console.warn("TTS: Gemini failed", error);
    }
  } else {
    console.log("TTS: No API key found, skipping Gemini");
  }

  // 🎯 IMPROVED Browser TTS Fallback - much more kid-friendly
  console.log("TTS: Using browser fallback");
  return new Promise((resolve) => {
    try {
      if (!window.speechSynthesis) {
        console.error("TTS: Browser does not support speechSynthesis");
        return resolve();
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);

      const voices = window.speechSynthesis.getVoices();

      // 🎯 PRIORITY VOICE SELECTION for kid-friendly, high-quality voices
      const voicePriority = [
        // Premium Neural/Natural voices (macOS/Edge/Safari)
        v => v.name.includes('Natural') && v.lang.startsWith('en'),
        v => v.name.includes('Neural') && v.lang.startsWith('en'),
        
        // Google High-Quality voices
        v => v.name.includes('Google US English') && v.name.includes('Female'),
        v => v.name.includes('Google UK English Female'),
        v => v.name.includes('Google AU English') && v.name.includes('Female'),
        
        // Natural sounding macOS voices
        v => v.name.includes('Samantha'), 
        v => v.name.includes('Victoria'),
        v => v.name.includes('Karen'),
        v => v.name.includes('Tessa'),
        v => v.name.includes('Moira'),
        
        // Standard female voices
        v => v.lang === 'en-US' && v.name.includes('Female'),
        v => v.lang === 'en-GB' && v.name.includes('Female'),
        v => v.lang.startsWith('en') && v.name.includes('Female'),
        
        // General English (avoiding most robotic ones if possible)
        v => v.lang.startsWith('en') && !v.name.includes('Microsoft'),
        v => v.lang.startsWith('en')
      ];

      let selectedVoice = null;
      for (const criteria of voicePriority) {
        selectedVoice = voices.find(criteria);
        if (selectedVoice) {
          console.log("TTS: Selected voice:", selectedVoice.name);
          break;
        }
      }

      if (selectedVoice) utterance.voice = selectedVoice;

      utterance.lang = 'en-US';

      // 🎯 MUCH MORE EXPRESSIVE RATE/PITCH SETTINGS
      const styleSettings = {
        cheerful: { rate: 1.15, pitch: 1.3, volume: 1.0 },
        playful: { rate: 1.1, pitch: 1.4, volume: 1.0 },
        clear: { rate: 0.9, pitch: 1.15, volume: 0.95 },
        gentle: { rate: 0.85, pitch: 1.05, volume: 0.9 }
      };

      const settings = styleSettings[style] || styleSettings.playful;
      utterance.rate = settings.rate;
      utterance.pitch = settings.pitch;
      utterance.volume = settings.volume;

      const timeout = setTimeout(() => {
        console.warn("TTS: Browser fallback timed out");
        resolve();
      }, 5000);

      utterance.onend = () => {
        clearTimeout(timeout);
        resolve();
      };
      utterance.onerror = (e) => {
        console.error("TTS: Browser fallback error", e);
        clearTimeout(timeout);
        resolve();
      };

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error("TTS: Browser fallback critical failure", e);
      resolve();
    }
  });
}

// 🎯 NEW: Add a queue system to prevent overlapping speech
let speechQueue: string[] = [];
let isSpeaking = false;

export async function speakQueued(text: string, style?: 'cheerful' | 'clear' | 'playful' | 'gentle'): Promise<void> {
  speechQueue.push(text);
  if (isSpeaking) return;

  isSpeaking = true;
  while (speechQueue.length > 0) {
    const next = speechQueue.shift();
    if (next) await speak(next, style);
  }
  isSpeaking = false;
}

// 🎯 NEW: Pre-load voices to avoid delay
export function preloadVoices() {
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      const voices = window.speechSynthesis.getVoices();
      console.log("TTS: Voices loaded:", voices.length);
      voices.forEach(v => console.log("  -", v.name, v.lang));
    };
  }
}
