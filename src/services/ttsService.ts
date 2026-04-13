/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

console.log("TTS: Service initialized. API Key present:", !!process.env.GEMINI_API_KEY);

let audioContext: AudioContext | null = null;

function getAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    try {
      // Try to force 24kHz as Gemini returns 24kHz PCM
      audioContext = new AudioContextClass({ sampleRate: 24000 });
    } catch (e) {
      console.warn("TTS: Could not create AudioContext with 24kHz, using default", e);
      audioContext = new AudioContextClass();
    }
  }
  return audioContext;
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
      
      // Safety timeout to prevent hanging
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

export async function speak(text: string, style: 'cheerful' | 'clear' = 'cheerful'): Promise<void> {
  if (!text) return;
  
  console.log(`TTS: Attempting "${text}" (${style})`);

  // Try Gemini TTS first
  if (process.env.GEMINI_API_KEY) {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{ role: 'user', parts: [{ text: `${style === 'cheerful' ? 'Say this in a youthful, energetic, and fun way for kids: ' : 'Say clearly: '}${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
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

  // Fallback to Browser TTS
  console.log("TTS: Using browser fallback");
  return new Promise((resolve) => {
    try {
      if (!window.speechSynthesis) {
        console.error("TTS: Browser does not support speechSynthesis");
        return resolve();
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = style === 'cheerful' ? 1.1 : (style === 'clear' ? 0.8 : 1.0);
      utterance.pitch = style === 'cheerful' ? 1.3 : 1.0;
      
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
