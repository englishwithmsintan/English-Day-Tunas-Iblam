/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

let audioContext: AudioContext | null = null;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  }
  return audioContext;
}

export async function speak(text: string, style: 'cheerful' | 'clear' = 'cheerful'): Promise<void> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `${style === 'cheerful' ? 'Say cheerfully and friendly for kids: ' : 'Say clearly: '}${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      await playRawPcm(base64Audio);
    }
  } catch (error) {
    console.error("Gemini TTS Error, falling back to browser speech:", error);
    // Fallback to browser speech if Gemini fails
    return new Promise((resolve) => {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = style === 'clear' ? 0.8 : 1.0;
      utterance.pitch = style === 'cheerful' ? 1.2 : 1.0;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.speak(utterance);
    });
  }
}

async function playRawPcm(base64Data: string) {
  const ctx = getAudioContext();
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }

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
    // Gemini TTS returns 16-bit PCM
    nowBuffering[i] = dataView.getInt16(i * 2, true) / 32768;
  }

  const source = ctx.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(ctx.destination);
  source.start();
}

