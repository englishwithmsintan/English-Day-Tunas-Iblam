/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link, MessageSquare, Gamepad2, Share2, ChevronDown, Scissors, Languages } from 'lucide-react';
import { WeekData, WeekId, Language } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  timeElapsed: number;
  selectedWeek: WeekData;
  weeks: WeekData[];
  onWeekSelect: (id: WeekId) => void;
  gradeLevel: string;
  setGradeLevel: (level: any) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeTab, 
  setActiveTab, 
  timeElapsed,
  selectedWeek,
  weeks,
  onWeekSelect,
  gradeLevel,
  setGradeLevel,
  language,
  setLanguage
}) => {
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const tabs = [
    { id: 'connect', label: language === 'en' ? 'Connect & Review' : 'Hubungkan & Tinjau', icon: <Link className="w-5 h-5" /> },
    { id: 'vocab', label: language === 'en' ? 'Vocabulary' : 'Kosakata', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'practice', label: language === 'en' ? 'Explore & Practice' : 'Jelajahi & Latih', icon: <Gamepad2 className="w-5 h-5" /> },
    ...(selectedWeek.physicalOutput ? [{ id: 'create', label: language === 'en' ? 'Create & Display' : 'Buat & Pajang', icon: <Scissors className="w-5 h-5" /> }] : []),
    { id: 'share', label: language === 'en' ? 'Share & Assess' : 'Bagikan & Nilai', icon: <Share2 className="w-5 h-5" /> },
  ];

  const emojis = ['🤝', '🙏', '💬', '🤲', '😊', '✋', '💪', '❤️', '🌟', '👋'];

  const themeColors: Record<string, { border: string, text: string, bg: string, accent: string, gradient: string }> = {
    'break-the-ice': { border: 'border-blue-400', text: 'text-blue-600', bg: 'bg-blue-50', accent: 'bg-blue-100', gradient: 'from-blue-400 to-blue-600' },
    'early-bird': { border: 'border-yellow-400', text: 'text-yellow-600', bg: 'bg-yellow-50', accent: 'bg-yellow-100', gradient: 'from-yellow-400 to-yellow-600' },
    'penny-thoughts': { border: 'border-green-400', text: 'text-green-600', bg: 'bg-green-50', accent: 'bg-green-100', gradient: 'from-green-400 to-green-600' },
    'getting-to-know': { border: 'border-purple-400', text: 'text-purple-600', bg: 'bg-purple-50', accent: 'bg-purple-100', gradient: 'from-purple-400 to-purple-600' },
    'whats-the-scoop': { border: 'border-red-400', text: 'text-red-600', bg: 'bg-red-50', accent: 'bg-red-100', gradient: 'from-red-400 to-red-600' },
    'lend-a-hand': { border: 'border-teal-400', text: 'text-teal-600', bg: 'bg-teal-50', accent: 'bg-teal-100', gradient: 'from-teal-400 to-teal-600' },
    'hunting-high-low': { border: 'border-green-400', text: 'text-green-600', bg: 'bg-green-50', accent: 'bg-green-100', gradient: 'from-green-400 to-green-600' },
    'pat-on-back': { border: 'border-rose-400', text: 'text-rose-600', bg: 'bg-rose-50', accent: 'bg-rose-100', gradient: 'from-rose-400 to-rose-600' },
  };

  const theme = themeColors[selectedWeek.id] || { border: 'border-teal-400', text: 'text-teal-600', bg: 'bg-teal-50', accent: 'bg-teal-100', gradient: 'from-teal-400 to-teal-600' };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${theme.bg}`}>
      {/* Floating Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {emojis.map((emoji, i) => (
          <div
            key={i}
            className="floating-emoji"
            style={{
              left: `${(i * 10) + 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Week Selector, Grade Toggle & Stopwatch */}
      <div className="fixed top-3 left-4 right-4 flex flex-col md:flex-row justify-between items-center gap-3 z-50 pointer-events-none">
        <div className="flex flex-col md:flex-row items-center gap-3 pointer-events-auto w-full md:w-auto">
          {/* Smaller, Adjusted Week Selector with Scroller */}
          <div className="relative max-w-full md:max-w-none">
            <div className={`bg-white/90 backdrop-blur-sm border-2 ${theme.border} rounded-2xl p-1 shadow-lg flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth`}>
              {weeks.map((week) => (
                <button
                  key={week.id}
                  onClick={() => onWeekSelect(week.id)}
                  className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-fredoka font-bold text-xs transition-all whitespace-nowrap active:scale-95
                    ${selectedWeek.id === week.id 
                      ? `bg-gradient-to-br ${theme.gradient} text-white shadow-md` 
                      : 'bg-transparent text-t2 hover:bg-bg-darker'}
                  `}
                >
                  <span className="font-black text-sm">{week.badge.split(' ')[1]}</span>
                  <span className="text-base">{week.badge.split(' ')[2]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Smaller Grade Toggle */}
          <div className="flex gap-1 p-1 bg-white/90 backdrop-blur-sm border-2 border-bg-darker rounded-2xl shadow-lg">
            <button
              onClick={() => setGradeLevel('lower')}
              className={`px-3 py-1.5 rounded-xl font-fredoka font-bold text-[10px] uppercase tracking-wider transition-all active:scale-95 ${
                gradeLevel === 'lower' ? 'bg-yellow-custom text-white shadow-sm' : 'text-t3 hover:text-t2'
              }`}
            >
              🎒 1–3
            </button>
            <button
              onClick={() => setGradeLevel('upper')}
              className={`px-3 py-1.5 rounded-xl font-fredoka font-bold text-[10px] uppercase tracking-wider transition-all active:scale-95 ${
                gradeLevel === 'upper' ? 'bg-yellow-custom text-white shadow-sm' : 'text-t3 hover:text-t2'
              }`}
            >
              📖 4–6
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            className="flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm border-2 border-bg-darker rounded-2xl shadow-lg hover:bg-bg-darker transition-all active:scale-95 text-t2 font-fredoka font-bold text-xs"
          >
            <Languages className={`w-4 h-4 ${theme.text}`} />
            {language === 'en' ? 'EN' : 'ID'}
          </button>

          <div className="bg-white/90 backdrop-blur-sm border-2 border-cyan-custom rounded-2xl p-1.5 px-4 shadow-lg text-center">
            <div className="font-fredoka text-xl text-cyan-custom font-black leading-none">
              {formatTime(timeElapsed)}
            </div>
            <div className="text-[8px] text-t3 uppercase tracking-widest font-black mt-0.5">Timer</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 pt-24 md:p-8 md:pt-24 relative z-10">
        {/* Header */}
        <header className={`bg-white border-4 ${theme.border} rounded-[48px] p-8 md:p-12 mb-12 text-center shadow-xl relative overflow-hidden`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={selectedWeek.id}
            className="relative z-10"
          >
            <div className="font-fredoka text-sm text-t3 uppercase tracking-[3px] mb-4 font-bold">
              SDNP Tunas Iblam · English Day 2025/2026
            </div>
            <div className="flex justify-center mb-6">
              <img 
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFRUXFhcaGBYYFRgbGxcZGxgYIB0aHh8gHSkgGCAlGyIaJjIhJSkrLi8vGh81ODMsNygvLisBCgoKDg0OGxAQGy0lICYvLy01LTUtLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAACAwADAQAAAAAAAAAAAAAABgQFBwECAwj/xABJEAACAQMBBAcEBwQHBwQDAAABAgMABBEhBQYSMRMiQVFhcYEHMpGhFCNCUmJysTOCwdEWJEOSorLwFVNUY3PS4USDk8IXNDX/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EAD0RAAEDAgQDBAgEBQQDAQAAAAEAAgMEEQUSITETQVEyYXGBBhQikaGxwdEVQuHwIyQzUvFTYoKSNENyFv/aAAwDAQACEQMRAD8A3GiIoiKIiiIoiKIiiIoiKIiiIoiKIiiKPfXaxRvI5wqKWJ8AM1gmwut42GR4Y3cqs3V3gS9h6RRwsGKsmclddPiMGtGPzi6s1lG6lfkd5FXVSKmuRREURFERREURFERREURFERREURFERREURFERREURFERREURFERREURFEXBNEsqbau9NrAeFpQz9kcfXc/urk1o6RoVuGhnl1DbDqdB71VraXG0GVrlDBaqQwtyevMezpPur+Dt7ajyueddArRkiowWxHM8/m5Dw+6k7U2LJHL9JsuFZSAJIjokygacvdYYGG9Ky9paczVHDVMezg1F7cjzH6Lmx3xgZhHODay8jHN1f7rHqsPEVkTN2OiSYbKBmi9sdRr7xyTDHIGGVII7wc1IDdc9zXNNiF2zWVhc0RFERREURFERREURFERREURFERREURFERREURFERREURcMcanlRN0rPvW87tHYQ9PwnDTMeGFT3cWpY+QqHil2jBf5LpigbE0OqXZe7dy7DZu0pP2l7HF+GGEHH7z5J+ApkkO7rLHHo2dmMu7yfoF1/oaH/b3dzN4GTgH+DFOFftElZ/E8n9JjW+V/mrfZWwLa2GIYUTxAyT5k6n41u1jW7BVZquabtuJUy7uFjRnc4VVLMT2ADJNbEqBjC9wa3cqFsPawuY+MK0bAlXjb3kI5ZHiuGHgwrDXZhopqiAwvyk3HUc1KvrCKZeGWNXXuZQayQDuo4ppIzdhIVA+5FuusDzW5/wCXK/CP3SSBUfBHLRXxikzv6gDvED5hcjYV8n7LaLHuEsMb/EgA/OsFj+Tlg1dM7tQjyJXSXbN7ajNzbrNGOctuSSB3lG1x5E0zPb2h7lsKamn0hfY9HfcJg2ZtGK4jWWJw6NyI/Q9x8Kka4OFwqE0L4XljxYqXWyiRREURFERREURFERREURFERREURFERREURFERREqbzs11OlgjFVK9JcMuhEYOAmeziP6VE/wBo5V1KMNgiNU4XOzR39fJMdnapEixxqFRRgKBgAVI1oaLBc6SR0ji5xuSvfNZWih3m1oIhmSaNPzOBWC4DmpmU8snZaT5Jfv8A2h2MfuyGU9yI3+YgL86hNRGOa6MOB1cm7bDvIS42/kMzBrhZOBWysCKCCQdGkYnrkaEKAAD31H6w2+q6BwOeMWjtfr9l2v8Afi3ZxNB0sUwGDxRhkkX7rgNnTsI1Hyo6dt7tWI8GqA3JIAW+Oo8FcbK9pNrIAJuKFvFSy/3lGnqBW7Klp3VWowCpYf4ftD3fNMljt61m/Zzxt4Bxn4c6mD2nYrmSUc8fbYR5KxzWyrINYRJ+1LcbPuVuoxwwTOEuEA0VmOFlA7NSc1C72DfkutC/1uEwv7TRdp8Nx9k3g1PdcnxQzgcyBmiyASu1FhFERREURFERREURFERREURFERREURUN/DJJd8KTSRcMHEOEggkuRqp0OnrUZBLtCrjHNZDctBuT8hzXfpryL3kS4X70Z6N/7jEq3ow8qzchYywSbEt7jqPf+iqt2rhBNfXU31WZVU9JhSqpGuAc8u/1rVp1LlbrI3GOGFmunLXUlV+3faXEmVtk6U/fYlUHlplvl51FJVBug1Vyj9HpZBmmOUdOf6JH2pvXeXB687Kv3IyUHy1Pqaqume7mvQQYVSwbNBPfqq6LZszo0qwyMgyWk4SQMc+t21oGOOtlaNTBG4RFwB6X+im7u7AlvHZIioKgElieWfAVvHHnNlXra5lI0OcL3VtcbhzCOSSO4gm6MEsqE50BJGdRnTkcVu6nIFwbqlHjrXSNY+MtvzKUmbAzVe3Vd0G4ur7eDdSezRJJOFlcgZXPVJGcEH1qZ8Lmi65VJisVU4sGhHxVdtXY01uVE0fAWGV1U5Axrpy7K0exzN1cp6yKoBEZvZe+yt47q3P1Vw+B9hmLr8CdPTFZZK5uxUc+G0sw9tg8RofenbYntO1C3UWP+ZHkj1XmPQmrLKrk5efqvR4jWB1+4/dNO2Zor2xn6KRXDRPgqc4YKSM9oIYDSp3Wcw2XHp2S01UziNtqFD2DPeXVtC4eOBGRdVBkdtMZ1wqfBqyzMRqpKllPBM5ti4+4fqu+09iRxdFIWkkkE8HXkcsRmRQcDknoBTIAVGyoc+7bACx0ATQKkVBc0RFERREURFERREURFERREURcE0RQZds26nDTxg9xdf51qXAc1MKeU6hp9yg2l5HLekxurgW4zwsD/aHurAILtFM+N7KcZh+Y/IKu3r34htCY0HSzfdB6qH8R7PIa+VRSTtZpuVboMIkqiHO9lvXr4LJNpbRkndnlbJduIj7OcAaDloAB6VQe8vOq9tBSxQtDWDbTvVvudu39NkbiYrHGMvw6u2c4Vez1qSGLOddlRxTEfVGjKNTt0U/eTdqNIhJbWt2mATJ0mCoUdp65IP5dK3liba7QQqeH4k90uSeRpvta+/uTruekiWFkqxh1fJk1HVRxI2defWKjHcTVmMFrWiy4WJOa+slde1tvEWCh7v7A+hbSdUH1MsTFD90qwynpnTw8qw2LI8kbKasrvWqNubtNOv3Xe1ljniv7a0RLadXlVtBiTrOofPc2CM4yufKs6ODg3QrVzJIHwzTnM0gEd23y+Ky60smadISMMZFQju6wB+WaoAe3Yr2M04bAZG7Wutm2jdQ3Fw9hIM/VRyA+Ic6eYwp9a6TiC7IV4SOOWKEVTTzI+H6pa3p2K99tJYVPDHFEhkb7qszHA/EcHHl4VBJEXvXUoKxtJRGQ9pxNh4f5Xbe60tGsJegiUG3dY1fhwQQV4sHmeZGTz1862la0Rmy0w2acVjeI4+1rZKGydzru5i6aNU4Dnh4n4S2O4YPzIqs2ne4XC78+LU8EvDde/dyVarT2sjKC8Mg6rAaZ8COTDHnUZLmmytEQVTA4gOG4T9uDvnEscdpMOj4V4UkyOFtdAfun5ac6tQzC2Vy81i+ESZ3Tx6g7jmE0b27QijjQPIinpoTgsM4EiknHcBmrD3NA1K49HBJI45Wk6Fe0W9dkxwLqEn84rIlZ1WHYfUtFywq2hmVwGVgwPIggg1sCDsqrmlpsQvSsrVFERREURFERREURFEULa+047aJpZDhV+JJ0AA7ST2Vq5waLlTU8D55Axm5S3Fsm42gOku2aGA6pbRnhJU8ulbmSR9kYxUeUv1O3RdE1ENJ7MADnc3Hr/tVtb7qWUYwttF6oCfia2ELANlUfX1Mhu55Wbb9bRsi3RWkEfEp606jhwQfdQjGfE8uyqcro9mhepwemqrcSdxtyb9SlFRzxk45nBOPEns9arArvZmjQkLQdx7W0+gyyzQCQh+GQ8PE3AcYIHPQHkuunfV2BrchJC8ri81SKtrY32G415rtc7rzWEyzW07rbNpI4XjaNeziXHXHLXGR29tDGWOuDosfiUdZEY5mAvG3efop8+88VqsxN8bwuuIogq9XQ6sygAA6anHLka24wbzuq0eHS1DmgRZLbn9ClG52zdX0MdtFC3Rx4GIuM8WBw9Y6Ljw/lULnueMoC7UdFS0chmlfqettPLdWNvutteVVDO0aqMKGnwVGOWEz5c62EcxVZ+I4ZGSWtBJ7vuvb/APF1w+rzxZ7cq7a+ZOtPVXHcrH/6OBujYzbxH2Q3stuB7txFp+Fh886U9UPVP/0kR3jPvH2UObcvacLiWPDuvJ0lBcaY048dmnPlWOFK3XdTNxbD5m8N4sDytp8F5T70bTtlZZR0ZYjMjw4fIxyYdU8gNQdKxxZRujcOw6dwdGfK+nu3Vku+UdzZtBeORIzqCyowBTjXXIyAQM66cq34rXNs4qs/CZaeoEtMLtHfzTHs7ZHD/UHV5LYKssFxplWDZCkgY4lOoONQdama2wyHZcqeoz/zIID9i36+aXE2VLtS9k6cqscBMcksYxx8LEDGc4Y8z3eoqHJxHnNyXW9aZh1I3h6ufrY8rpL2pHHHK8aSdIisVVjpxAeHn29tVXWBsF6Cne+WJr3ixI2VvuZtG1gk4bmCNkY/tCgLRn+K8vLnUsMjAfaC5+K0s8rM0LiCOXX9VsQ2ZbOg+piZCBjqKQRjTGndV8NaeS8TxpmnVxBCpLvdQwMZtnt0MnMxHWGTwK/ZPiKjMOXVmnyV1leJQI6kZh1/MFbbu7aW6jJ4SkiHhliPONu7xHce2pGPzBVaqlMDuoOoPUK2rdVUURFERREURFERREpHF9fEc7e0IyOYec9/5BjTvqG+d/cPmurf1Wmv+Z/wb+qa6lsuUsy3/wB9CS9rbnAHVklB5ntRf0J9KpzzHsheqwfCLgTzDwH1KSNiWsUk8ccr9HGzAFu4dg8M8s9marMALgHbL0NZJJFA58YuRyWmba2r/s14IktI/oj4UuDrknDZ0wTg51PW11q893DsANF4+npzXNfI6Q5xrb9/sLs93bbMuJstwRzRrIkYXOHBIIUdxBBx4H0wS2M3vujYp6+NthctNr93iknZ020toM0ayysrEdIeIrGvhkch+Ec+2oAZX6LvzMoKEBxaLjbqf31TvsH2c28QBn+vfuIwg8OHOvrmrEdO0andcKsx6eXSP2R8fenKCBUAVVVQOQAAHwFT6LiOe55u43XpWVquaIuKIisFF5zRKwIZQwPMEAj4GnKy2a5zTdpslHbfs7tpgTD/AFd+fVGU9U5fDFQPp2OGmi7NJjtRDo/2h37+9Iu1IdpbOHRmaVYzorIxMfkCR9WfDTwqu4SR8136d1BXe0GjN0O/6q4h3gikt7ewtOKNpmCTO2jLxEBzn7bNk6/zFbiQaMbzVB2HyRySVM+obqByNtvABTdrbXsdnyCzjskmxwiU4XiywGBqpMjEEHGRzFbPfHGcuW6gpqerrIzUOlLd7b2089Esb+bFS0uuGMYjdA6j7uSwK+mPn4VBUMDH6LtYNWOqYLyHUGyn7g73G2cQTN9QxAUk/siT8lPb3eVbwTZTY7KpjGFiZpliHtDfv/X5rXgc1fXjbWStvF/VLiO+XRGKxXAHIqSQkh8VYgZ7jjuqB92uDh5rpUn8xE6nO+7fqPMJqVgRkcjU65hBBsVzREURFERREURUO9u2jbxhYhxTyngiUfeP2j3Ad9RyPyjTdXqGmEz8z9GN1JUndrY62lukQOSNXbtZz7zHzP8ACssZlbZRVlQaiUvPl3BVXtA3i+iQcKH62UMqfhHIv6Z08SKjnkyN71dwih9Zmuey3U/ZZPsHZEl3MIYyAxBJZuQA5k9p1x8aosYXmwXsqqqZRxcRw02sjbmxJrR+CdMZ5MNVbyOPlz8Kw+MsOoSlr4aoXjPkd0x7ub89DA0Vwhn4MGHQHBHIMTyA0IbU1Oyos2zlyq7BeLNxITlB7X6L12DsCfasxurlisR7tCwB0RPuqO/z7STRsRlOYqOqrYsOi9Xp9XfvU961Gxso4UEcSBEXkoGlXQ0AWC8nLK+V2Z5uV6zSBVLHkAT8KyVq0ZiAsWv9/r2SQvHMYkz1UCIcDszlSSe/Wue6offQr3MGB0rYwHtueZuVpm5O3jeW/SOAHVij45cQAOR3ZBGlXYX523XlcSovVZ8g2OoTBUi56KIou1b0QQySsCQilsDtwOVauNhdSwxGWQMHMrHJt+79pOMTcIzkRhE4AM+6crxHzznyrn+sPve69u3AqQMyltz1uVrG621vpdrHORwluIMO5lYqfTIyPAir0b87cy8dXU3q07oun+VYXVskilHUMpGCpGQa3IB3VdkjmODmmxWVb37mvZt9JtiTEpD45mEqQQfFQe08sfCjLCWHO1etw3Fm1LDTz7kWv1v9VM2fvbazSpK9i73uAoMaqwY94JYY07SNBUglY45suqgnwuphYWNlAj/fd9Vex7ri5n+k34Vn4QEgDZSNBnAblxnJJPZk1uYs7rvXO/EDBHwaW9uZ5krKNpIgll6LPRCV1QnUYBOBn8uvfiqUgyk2Xs6ZxMTM/asLrSfZlvN0i/RJSS6DMbH7SD7Oe9f08jVunluMpXlccw/hO4zBod+4/qnfaFmk0TxSDKOpUjwNWXC4suFFI6J4e3cKg3Ou3j47Gc/WwY4GP9pDyRh34Gh7qiiNhlO4V6vja+1THs7fudzTRUy5qKIiiLjNEVXt3b0Vqo4zl20SJdXduwAD9eVaOeArVNSSTnTQczyCr93tkyNKb26H17jhSPORBHn3R+I6ZNYawk5nbqernY1vq8PZG5/uPXw6K/u7lYkaR2CqoJJPYBW5cALlUY43SODWi5KwbeTbDXdw8x90nCDuQcvU8z4k1y5H5nXK+h4fSNpYQwb8/FM26250NzFDNHdsJA2ZQuhUZ90faRsacXI5NTxwhwBuuNiGKzQyPjfGMp2urreHfCJJ5bW5ti0WNCR7xA54PME8iKkfMAS1w0VKiwuSSNs0D/avt0SruVux9NmZ3Urbo2SB9o5yIwTqQBzPd4moYYs5udl2MUxD1SIRtN3kfs/ZbNDGFAVQAAMADkAOyr+gXiCS43K71lYVbtza8FtGXncKpyAOZbwAGpNaPe1ouVZpqaWd4bGLlYFdcHG3RghOI8IOMhc6A405Vy3EE3C+jQh4jAfvbVab7M9uWqxC2z0cpYsQ3KRj2g8uQxw89Ku08jbZea8njlFUcQzHVvyC0GrS84iixdU29O1LaGBxct1XUrwDVnzpgD+PKo5HtaNVeoaaeWUcEajnyWEvjJ4c4ycZxnHZnGmcc8VzDbkvorb5Rfdat7Ot4rYwx2ozHIobquffJYklW5HJPLnV6ne0tDV4zGqCobM6c6g8xy0TzVlcBcMudDTdAbFZNvvu61hMt3bZWMuDp/ZP/wBra/EjtFUZo3MdnavX4VXNrIzTTb294Vz7P5hJDdXVzNxO7cDkt7kYUYH4cknQeHbUkDtC5yo4yzhyxwwtsALjvKod7d4BNGLS1tisCkYbonycciox1R4nU5qKWTMMrBoujhlHwn+sTyDP0uPilW0upIJFkTKyIcjIIwe4j+FV2OLDddyWKOeItOoK3zY+0kuYUmT3XGfI9oPiDXVa4OFwvm88DoJDG7cKDvLsdpgssLcFxCS0T9h70bvVv5GsPZfXmpqSobGS1+rHaH7jvC89395UnJilHQ3K+/C3PzX7w8qw199DutqqhMQzsOZh5j69EwVIqKKIlzfbZ1xLDxW8zoyZJRGK9IO0cQ1BxnFRyNJGi6OGzwxy/wAVoIPXWy89ztl2vRJcxKWd1GZJSXkB+0pLajB547q1ja21ws188+cxPNgOQ0HirHam3FhkWIRySSMCVVF5gc+scKMadvbUheBoq0NK6RhfcADqfokb2k3c5hQTER8b9WBG4uquvFI2BxHOMADAPaeytUk5dV38Dij4xLNbDtH5DoljdHd76bMY+MoqqWZgAT3AYPef0qtFFxCuziVd6nGHgXJOya9m7kIkjPbbSKyRHr4VCV8HAYaeBqyyHKbtcuJPjDpWBssFwdtfloqveq5mvbqKzDJIyHh6REwGYjLMRk4Cr2Z760mJe7KFbw+OOjp31TgRfkenL4rUdjbNS2hSGMYVQBntY9rHvJOtXGtDRYLytRUPqJDI/cqbW1lAlXejeeaJjDa20s03awjcxpnxxhj4ZA8agkkI0aNV1aGhikHEmkDW+OpSDtLdjaEiyXV1pwqzEu+SABnhVRkL5VWdFIfacvR0+JUUZbBANzbQfG6VqrldyyuNg7tzXgcwlOJMZVmKnXOCNPCpGROcLtXNq8QipSGyg2Kc9ibZ2hZER3dtNLDyEqgyMg8SueIeeD51ZY+RmjhdcGrpaKqBfTvDXdDpfwVvt3eqb9nZW0srkDMhicImQD2gAnUaZFSPlOzBqqVHh8J9upkDR0uLlIu1t1r4pJdXTDqjLF5Mt4AADA1xgDSq0kb7Fzl6KmxOja5sFON+5K4quu0rvYe7E94jPBwEowBUsVOcZyNKkjiL9QudW4jDTODJQdQnHYW8F/aERXttNJHyEqoXZR2ZK54x48/OrTJHt0eFwKyjo6i8lM8A9Dp/haHG+QCORAI9atBedIsbLyvrNJo2jkUMjAgg9xrDhcWK3ikdE8PYbELGbe6m2TeOvD0gAwVJ4RKp91jocEHw7CK51zE63Je3fEzFKZrgbHr0PMLTrLabzRw3KtHFbmPjlDAllI5gNkAAa9bHZ46XQ42B2C8lJAI5HQm5dewWS73bTjubqSaJeFTgZ+/gY48dmRjTuAqjK8PdcL2uF00kFOGPOvy7leezfbc0UjQIvSoQX6POGyMBimdCeWVOM8/OSnkINlzsepInASnQ7X5ef3Wk2e8FvI4jEgWQ8opMpIdMnqtgnTuq6HAryr6WRgzWuOo1C425si2nXiuEU8AJD8mTA1IYaisOY07rNPUTRuAjO/LkfJUO4FrO3FcPNMYHyIYpXLnhzo7E8j3DxqKEHflyV/FHxAiNrRmG5Atr0TnVhcdBoiVtzU6Ke+tweqk/Gg+6JQWwPAEGoY9C5q6dec8UUvMix/4q23itGeFmT9rH9ZEe51Bx6EZB8CakcLhVKZ4a8A7HQrI9+dsi7ueNTmNY1VPUcRPxOPSudO/M9e1wel9Xg13JuqbZ99JBIssTFXU6Hv8AAjtB7q0a8sNwuhPBHOwskFwVo20NuJd7LnlwYX6okIXR2BHVDfaBGneM1dMgdGSF5OOidT4gyI+0L6Lw9keyBiS5K9vRx+QwWI9cD0NaUrN3FTekNXdzYBy1K0mri8wiiIpZEo+0+96OyKjnIyr6cz8hUFQ4hi7GBw8SqBPLVY4K5q94nP2V3vBeGM/2sZA8WXrY/u8R9Ks0hs4hef8ASGEupw/+0/PRa9XQXi0URJPtYvOG0WP/AHki/BDxfqBVapNm2Xd9Hos9Tn/tHz0WSCqC9unf2T3nDdSRk6SRZH5kYfwLfCrFMTmsvO+kUOaFsnQ2961qr68aisoiiJA9rGyA0KXIHWjIVj3oxwPPDEfE1WqWXbm6L0Po9VFkpgcdDr5hQthL9OsFE9z0VvbjgcLgFgoGC7HkAuNB65rRntx6nRS1f8nVkxszPdqL8r9FVbcn2THC8VtG8krDSbVgDnPvMeWnJRUb3QgWaFfpI8SfM2SY2aOW3wH1VBu7f/R7mGX7rjP5W6rf4SaijdlcCupXwGop3x9R8tVsexI1nke7brdZ0h/DGpwWH52Gc93DXRYM3tLwdQXRNEA7ifH9F4e0CUi0MYODM8cIx+NsH5ZrWY+zbrot8MaDOHH8oJ9yYYIVRVRRhVAAHcByqUCwsFRc4uJJXpRarisoljYP/wDR2gfC2HriT/xULO27yXTqf/EhH/19EyTsArE8gCflUuwuucwXcAvm9a5Ol9V9PsbaJ/t9i7HugoiuWilwMji4STjXqyL391WckLuyV5qSuxOmcc7Lj3/I/NdN+o0tLK2s0fjHE8jNp1sFjrj8Tf4RSYBjQ0LfCnvqauSpkHK3ht9loe7Oz/o9rFFjBVBxfmOp+dW2NDW2Xmq2fjTuf1KtK3VVFEQaIst9r13xTQRA+4rsR4sVA+QPxqlVnYL1vo3HZj39bfC6qd2NzXvIJZs8OARF3O4Oufw8x5+VaRw5mZlcr8WZTTNjAv18FT7Dujb3cTsCpSUBgdCNeFgfQmo2HK7VXaxrailcGnQi/wBVv4Oa6YXzohc1lYWS+1m94rpIhyjiBP5nJ0/uhfjVCpN3WXsfR2G0DpOp+Sh7C3JkuLSS4yQ2MwJ9/Gc5/NyHxrEcBc0lTVeMshqWxjb8x6f45qq3Wu+gvYXbTEgVs9nF1Tnu51HEcr9VcxGMT0jg3XS4W9iuovniDREURRNr2QnhkibUOjL8RWrm5hZTU8pila8cisZ3Z20lqLmGZWeOaMoyrz4hxDtOmhI9B3VQjcI7gr3FdSOqeFLEbEG/yKXgKr2XVFzuu1ZWVue4zA2FtjsjUeo0PzrqRG7AvnOJi1XJ4qF7Qh9XansW9gJ8uuP1IrWbYeKlwvtSD/Y76JrqZcxFYRcGsolfczryXs/37llU96xdQfoT61FHqSe9dLEBkbFH0aD5nVWW9k5js7hhzEbfMYraQ2YSoKCMSVDGnmQsR2FYdPcRQk4DuAT4cz8hXMjGZwC9/WTmCB0g5BPd3t/Z1tMbP6CpRWCO5SPmcZJBGW885PZmreeMHLZebZR108PrPFPW1z+wqDeDYCRbSjtk1ikaJlQknhVm6yjw0PofConsAlA5LoUla59A+V3aF9ep5FbPir68SuayiKIuKwVhY9tO0baW1ZI1PVV+Bmx7qRnDH45x4mqJBklsvawTDD8PDjuRcd5K1uytEijWOMBUQAKAOQFXg0AWC8fJI57i9x1Kzf2p7ucJ+mRjQ4EoA5HkH/QH0qnUx2OYL0+AVwI9WkPh9k8bpX3T2cEh1YxqG/MBhvmDVqN2ZoK8/XxcKoe0bXPuVvW6qrHI7A7T2nLjPRcZLt3RroAPzYwPMnsqgGmSRezM4w+gaPzEbd5+y1+GEIqqoAVQAAOQA5CrwAC8a9xcSTuVlftR3c6N/pUY6khxIAPcfGjeAbHx86pTxWOYL1uBV+dnq8h1G3f3LS9iXomgilH20Unzxr86uNcHC4XlqiIxSuYeRU01soUURFEWGbasY/8AaUsUj9FG1wxZ8gcCueLOug59tc17f4hBXv6Wd/4e17Bchu3WyZ13T2UsTTNdl4lIVnEqlQTyHVGh5VMIY7XJXGdi2Ih2TJYnlb7pZ312PHaXRiizwcCMMkk65B1PiKhnYGusF2sIqpKmHPJvey0b2YT8Vgg+67r/AItP1q3Tn2F5fHowysdbuUn2hQlrGVhzj4ZB5owIreUXYVXwpwFU0Hnp71f20wdFccmUEeRGa3BVF7cri08l6VlaLpO2FY9wJ+VCt2auAS/uAP6lGfvM7HzLtUcfZV3Ez/MEdLD3Bd9/2xYT/lH6isTdgrbCRerZ4rGNlGXpk6EEyg8SADOSoLcu3QHSudGDm0Xu6vh8Fwl7Ox80/WW+NvcyJnZzSXXZhYz1hzPETxKAe0jSrQnaTbLqvLy4XLBGSJgI/E/JVIeZttJ9Ix0gkTKqcqo6MFVBwM4BGvfmtHE8XVdACNuEnhbWPnrqtfq+vFooi6uwAJJwBzPdRZAubBZFfb+zfTGmiOYeHgWM8mXXD+DZOc92B5UHVJzabL2cGBxmmDJO1e9/p4K69nu1bGCJi06rPIcyF8r2nCjOhAyeXaTUsL2AXJ1XPxelrJJAAw5G6Cyb33lsxzuYv74qfis6riigqHbMKr73e7Zzq0b3EbKwII1IIPZoK1MsZFiVZjwuua4Oaw3Cg+z2+hRXtkuI5FEjGHrdYxnXBBAOQcj0qOEtAy3U2KxTOcJXsIJAv4q73h2/Dbo4aVFk4W4ELDJONNPOpXva1UqSjlneMrSQlrcza+zrOAR/SU6RsGRzxdZsAaEjkOQ/81FHJG0WuupiNLXVMheYzYaDwTPHvRZtyuYj++Kl4rOq5bqCpbuw+5V23d6dn9E6SSrKrAgonWYjwxy89K1fKy2pVilw+s4gcxpBHMrNtj71zW8kOHYwxFgI8DLIxOeLGhbljux55pxzFpHRepqcJjmjeSPbOt+/7LbLS5WVFkQ5V1DKe8EZFdILwsjHRuLXbhetFoiiwViO/URbaMqqMszIABzLFVAHqcCuZPcyWC97g7wyhDnHQXVxuwlzZrJFPs+WaKQhioCN1hjsJwamizs0LVQxF9NVubJFMA4ac9lQb47RkuLkySwtCeFQqMNeAFsE+Z4qhncS65Fl1cJgZDT5WODtdSOqffZIf6rIO6Y/5Vq1S/015r0hH8yPAJr23EHt5lPIxuP8Jqd/ZK5FOS2VpHUKHubKXsbZjzMS/pWI+yFNiLQ2qeB1VzW6pLrImQR3jFCtmnKQUtbhTYhe3bR7eV42HhxEqfIjtqKI6W6Lo4kz22yDZwB+6kb9pmwuPBM/AikwuwrXCjarjv1WN7CuJI7iJ4VDyq/UUnAYkEYzkYyCdc1zmEhwIXua1jJIHNkNhbdbRDBIYZJYoEt7qRdePhbrDlxFCeIevnXSANrgWK8E57BIGPcXMHTT5rM3iuLfakLXbK0rSRsWU5BDdUDkOXLGO6qZBEouvWB8M2HPEAs0A6fFbPXQXh0URIPtR3g6OMWsbdeTWTvEeungWPyB76q1MoAyheiwGg4r+M8aDbxWWVQXskURFERREePaNQe0HvHdRYIBFiuWJJJJJJ1JJySe8ntrKw1rWizRYLisLZFERRFyKItG9lm8HO0kP4ovmWT+I9e6rtLJplK8nj9Ba1QweP0K0qri8uiiLHb2QPtvOcAXKa/k4c/pXPc4cZe1hYWYUR1afip+8+/F3DeTRwvGY0ZQuU4uaKTqCM6k1tLO9ryG2UGH4JBNTNkluCfulDbe15buTpZuHiCheqpAwCSNCT3mq75C7Urt0lHFTNLGXstO9k8eLNm+9K/ywKvU3YXkvSA/zdugCu98doCCzmc8yhVR3s2gA8cmpJXZW3XOoITNUNb3/BSd3rIwW0MR5pGoPnjX51lgs0ArSql4szn9SrGt1XXFESxt6xlgm+nWycZ4cTwjnKg5Mv41Gcd9RPBBzBdKmljlj9XmNv7T0P2KlptGG+tZREwPEjKVOjKSDoy81PnWbh7dFEYZaWZufrv9lhtpOUZHU8JBUhvunv8ASuY02K+hSta6MhwuLbJ7urbaObhG2g/HFb9MoRQBICG0B0K4xjOvvDlVw8S515LzUclF/DIhHtOy68tlU742wEVpdRvI3Sx545JGkYOMEYLE4wc6DuqKUWs5XcLkJfLTuA0PIAC3kthsLoSxpIvJ1DD1Gavg3F14uVhjeWHko+3dqpawPM/JRoO1m7FHiTWr3hjblS0tO6olEbeawbaF488ryyau5yf4AeAGB6VzHEuNyvo1PC2CMRs2Cj1opkURFERRF3hXLKO9gPia2bqVHM7LG49xUnbEQSeVRyWRgPQ0eLGyjpXl8LXHmFDrVWEURFERRF6W87RuroeFkYMp7iDpWWmxutJI2yMLHDQhbvuxtpby3SVcAnR1z7rDmP4jwIrqRvztuvnNbSupZjG7y7wrOaQKpY8gCT6VuToqzWlxACxfdTZq317I03WTMkrL97LZA8teVc+NofIbr21fO6jo2sZo7QeGiuRtrYshKPZiPBI4hEBy/Icj1qXiQX2VD1PFGtD2yXvrv90m7YEInkFvnoc9TJJJGB36881Vltms3ZeipDMYm8btc1qW519DabNieZ1QNxNqdWJY6Ac2J7hV6MiOMXXjcRikqa1wYL8vcu9hBJtCZLmZDHbRHighcdZ35CVgeXbgeINZbeQgkaLSR7KSMxRm7zuRsB0H1ThU65KKIiiLg1hEm7U2PHc3WbbMMiH665jJHZpHj3XbkTkaAd5FQuYCfZ3XWgq3Qw2ls4HZp+fUBZXtjZ7W80kLalGIz3jsPhkVz3sLXEFe2pJhUQiQc0/bO3zsY4YZJgz3KwCJgqkkgcxqQmpGde+rgmYACd15efCat0z2x6Nvf98103zW4uLNCtl0UMZEg668arwsPcXQDB76TAuYCAtsLfDTVJzSXcdO73q39lu1OltOiJ60LcPmh1U/qPSt6Z4LLKpjlPw6nMNna+aXPahtKSV1VQTbxlgXXVTIDhgxHu8PLBxzNQ1DiTYbLp4DDHG0ucfbPLu/VIqtnlrVVelKKwsrqzgcyB60Rcqc8snyBNFgkBcdIM4zr3dtEuFIsRmWMf8AMT/MK2buFDUj+C/wPyUzeMf1qf8A6r/rW0vaKiw//wAZngqwuOWRnu7ajVu65OnMEeODWbJcdV1Eq/eHxFYS67UWUE0RN3s32nJBKzYP0ZhiRzoiHsbiOmezA7/CrNO5zT3Lz+OQRyxix9sbDme5PPtI2p0Nm6g4eUhF8j7x/u59SKszvys05rgYNT8apbfYa/b4pC3Ss7uBW2hEIxFGr8YkZh0iAdYLhTrkaE41qtEx7fbC9Fic9NM4Ur75iRtyPfqrq83lsJcfTNnSIzDIYxjreRyG+VSOfGe02y58WH1bD/LzA27/AKarPI1LEADUkADxJwB8ap816pzsrSTyC1aLdeOx6K4YGYRqBLx9Yxg4+sQHRQvaB2eVX2xBhBXiZcRfVF0Y9m+1tL9x63TyjAgEHIPIirK4pBB1XaiwiiIoipN57qVVVUVwjEiWZBxNEmmcKOsWOuCAQOfdWjyVbpGMcSXHUbDqfHZS9ivB0SrblTGuQOE8jnXPbnOc51zmsstbRRTiQOJkGqzX2sWAS5jlH9pHgj8SHn6ggelU6plnBy9X6OTF0LozyN/eoW4cCSC8i4FeZ7ciENgdYB8gHs1Ka+FaQ6ghTY057DE8EhoOvw/VPO0L8Q3lsJpujT6NJxKT1GccPPsGnFg+FXC7K4AnkvOwwmWB5jbc5hr3arPN0duLa3nGNIHZlYHsQk8J8OHT0zVKJwa/uXqMSo3VFJY9sC/nzXfbUF5Z3U06iSJXlkYSLgo6FyRnGRjB5N31l/EYSRzWKV1HVU7InEEgAW2IKiPvM76yW9nKfvNAcnz4XANacY8wFK3C2N7Ejx4H7grz/wBuDss7IePQuf1kpxf9oW/qDv8AWk94+y7rvNcL7ghj/wCnAi/rk1njO5LX8KhJu4uPiV2bfG9/4px5BB/9axxn9Vn8Jo/9MfH7rn+lt0w+sdJh92WNGB+AB+dOO/xWv4RTbsu3wKlbGW0uJ4if6pIJEPDq0MmGBKrnWMnxONe2t2FjiORUFUaqnhe3ttsRf8w+6k70QWkF3MzsbmRnLdCvVjTOuHbmx8F9azKGNcSdSosONXPTtY32Gj83M+CgDe+5X9kIYF7oogMepJJrT1hx20Vv8HgOry53iV0G+l9/xTfBP+2scZ/Vbfg9H/Yg72XR98xSf9SFG/TFZ47lg4PBf2bjwK6jeEH37Kyb/wBpl/8AvWON/tCz+GkbSvHmPsuTvJw6x2dnH49EWI8stj5U43QBYOGA9uV5Hj+i6K95tB1A45sEYAAEafoq/rWW8SQ23CObSUTCbhvxJ+qm+0DbourohDmKLKL3E56zep08h41tPJmNhsosFoxT0+Z3ad+wEz7MnsZLa0lluCPosQVoOLRpAF5pjLniGg1zkVMCxwBJ2XEqI6plRKxrO2d+7x5aLy9ou0WNqiTBBI8weNFzlIgp1Ynm2uDy97wpUOGQXUuCQ2qS5l7AWPeUsbhbP6a+iBxwpmRv3Rp/iK/OoIG3euzjE3CpHdTp+/JbHfbShj0kkUE/Z5sfJRqfhXRzBeFZDI4+yFXbrF1MkYjcW4OYGccJAPOPhJ4sKeRIGhA7K0bfYbKxV5SA64zcwPn9+9MFSKkiiIoiKIqvaGx4WJk1icD9rGeBsD7xGjDwbIrQtCsRzyD2dx0OqRzsKS+spbqRjJM37AlRkRI2QMDQFxxZI7x3VXMZkYXHdd1lY2jqWxMFmjteJ+yzyGVkYMjMjA5DAkMD+oqkCWr1jmskbZwBBVxsjZN1tKU9ZnIA4pZGJC9wz3+AqVjHym659TVU+Hs2AvsAFI3j3KuLOPpGKyR6BmQEcOTgZB7CdM+IrMkDmaqKhxiGqdktlPzTb7Nt5RKn0SYgsoxGWPvqPs69qj4jyqxTygjKd1x8cw/gv48Wx37j+qaLrdWykOWtYSe8RqD8RUxhYdbLjsxGqYLCR3vUb+g2z/8AhU+f86cJnRSfitYf/YV7R7oWK8rSH1jU/rTgsHILU4lVneQ+9ShsC0H/AKWD/wCFP5Vnhs6KL1yo/wBR3vKjXe6NjJztYh4qgQ/FcVjhM6KWPEqpm0h990lbzezcopktGZgASYm1OPwt2nwPxqtJTAatXdocfzODKkef3Ci7q+z+S4AluS0SHUJqHfxOfcHz8q0ipydXKbEMcZETHBYnryH3T5abnWMeMW0bEdrqHP8AizVwQsHJedkxOrf/AOwjwNlLbd60PO1g/wDhT+VZ4beihFbU/wCo7/sfuo0u51g3O0hHkgH6Vjgx9ApW4lVjaQ+9eB3F2f8A8Ovxb+dODH0W/wCK1f8AeV7W251jGcraxE97Lxf5s0ETByWjsSqnCxkPvVF7Qd41tovo0HCsjjXhwOjQ5105E8h6moppMgs1dHB8PdVScWXVo+JWXWNm8rrFEvE7HCqP9aAD5CqLQXGwXsJ5o4GF79AE13Xs4u1jLho3YAngUkHyBIwT8KsGmcBdcSP0hgdJlIIHVKEjMTlixbkeIkkeGuvpVY3Oi7zQwC7ABfonTZu6zrs43Y4hOG6VeEsrGEYDJkHI4l4j8BVpkP8ADzc15ypxIOrOAbZLW6jNyPvstI2DbW/RJLAigSKr8QHWbIzktzY+J1q2y1rheYqXS5yx5OhsrPFbquuaIiiIoiKIqXfOYpY3LLoRE36VHIfZKuYewPqWNdtcKRsCEJbQqOQiT/KKyzRosoqp5dK5x3uVlntE3e+jT9Kg+qmJP5X5sPDPMetUqiLK6/VevwOvE8XDcfab8Qrf2VbYijEkEjBGZgyknAbTBGe8d1SUzgAWqn6QUkj3NlaLjZMHtC21ClpLEWVpJVKKgIJ1+0e4Dn6VLO8BhF1zMIo5ZKlrgLAG5Kx6LjXEi8Q4WGHGcK3Ma8gfCqFua9xJw3/w3cxt3LW9yN81uQIZiFnA56BZPEePeKvQz5tDuvFYphTqdxezVnyTnVhcVFERREURFERREURFERREURKm+u+CWa9HHhp2Gi9ifib+A7aglmDdBuuvhmFvqnZnaMHx7gsduLhpHLuxZ2OWY8ye8/67K5znFxuV7mKNkbQ1gsArrcjaSW95HJJomGUn7vEMA/HHoTUkLg14KoYvTvmpnNZvp81sl3tmCOPpXlQJjOeIHPl3nwroucLXXho6WV78jWm6x/Yey/8AaN84wREWaSTswhbRfAnl8e6qMbM717SqqTQ0gF/atYeP6LaniHAVxgcJGOzGOVdDlZeGDjmuqD2ePmyUdiPIo8lc4rSLsq7iY/mCeoB94TJUi565oiKIiiIoijbRtBNE8TcnUqfUc6wRcWUkUhjeHjkqXce9L24hk0mgPRSL4ryPiCMYNaRuuLdFcxGINl4jey7UK22vs1LmJ4ZBlWGPEHsI7iDrWXtDhZVYJ3wSCRm4WE7wbHe1maGQZxybGjr2MP8AWhrmvYWmxX0OirGVUQe3zHQquVAOQAqJW9tlpW4Vqy2cxu+FbNlyocAE5zxNnsXljOueXjfibZhLtl5HGJWvqm+r3Mg3t8AljePdnoD0kDGaBgHV11ZBnTixy15N4HuqF8dtW7LrUWIiccOYZXbWOxV5uv7RWjAju8uvZKBlh+YD3vMa+BqSOot21Qr8CD7vp9D0+y0rZ20Yp0DxSK6ntU/6xVwEEXC8vLBJC7LILFSqyokURFERREURFEXhd3ccSl5HVFHMscCsEgbreON8jsrBcrOt5/aPkGOz5cjMwIP7gP6n4VUkquTQvS0OA6h9R/1+6UdkbAur0u0SlsZLOzY4m7sn3mPy7cVXax0huF3aivpqMBjtO7u/RP279javs8QTwmI8fRzZGGWXXhcnszpg8utjlVtjWmPI4Ly9XUTtrOLE6/MeHRZ5vBsWSzmMUmvardjr3j+I7KpPYWGy9VQ1rKqPM3zHQqBZ2RkdUjTidzhQBqSf9c61a0k6KzLMyFhe7YLc90tgLZQBObnWRu9u7yHIV1IogwL57iFa6rlLztyC995tqLbW0kh1OMKvaztooHrWXuyhRUcJmmDR+wF13T2e1vaRRt7/AAgv+dtWHxNI22aAs1swlnc5u19PDkret1VRREURFERREURLG8GypY5Re2n7VRiWLkJ07j+IdhqJ7SDmH+V0aadjmerz9nkf7T9la7C2zHdRiSM+DofejbtVh2EVu0gi6rVFO+B+V3keRHUKHvdu2l9FwnqyLqj45HuPep7R/KtZIw8KfD8QfSSZhsdwsWvLKS3lMcqAOhBKsMqe78yn51zXNLHWK93FMypizRnQ/D9Vbb0b2SXojTgEcagZRWyGfvOg0HYOypJZS8AKnQ4VHSFzycxPO2w/e6Z9oyLsnZyxJrPODxN3ZGWP7oOAO/Xvqd9oo7DdcaFrsRrTI7Rrfoqa53GMdrExci5ldVSHGh4sdXvXhXLFvPSouBdup1V4Y0HVDgB/DHP6+eyo7iC5sJipZoZBg5R9GHYe5x5iojmidZdRjqavizAZh3jUJk2Z7TLhMCaNJh3g8DfoQflUzatw3C5M/o7E7+m63xTLZ+0u0YddZYz3FOL5rmpxUsK5cno/VN7Nj5qzj34sCM/SUHg2QfmK347OqpnCqsG3DK5bfewH/qoz5ZP6CnHj6rH4XV/6ZVdee0myT3ekkPcqEfM4FaGoYNlbiwCrfuAPNLm0/afM2RDCsY+8zcbfAAAfE1G6q00C6kPo5G3WV9+4aJMv9pzXDcU0rSHsy2g8hyX0FVnPLtSu7BSwwttG0D5+9Mm5O7lvdJNLcOyrFzAOAARnjJ8NdOWlSRRh1yVysWxCame2OIann9FcbME2yJcOxlsZT+1XURk8nOPd0540OMjXSpYwYTYm7Vzqh0eJMu0ZZW8uvcrTeHb626vDcp08M0bGKRCMuCPccd4zo/LwzUj5A3tc1UoaB9Q4OiNnNOoPLvH2WaXN/cXJjSR3lZQEReZJ8O8nvNUs7n6Fetjp4KVrntFuZK1TcbdAWi9LLhp2HpGD9lfHvPbirsMOTU7rx+K4oap2RujR8e8pl2jfx28bSysEReZP6eJPdU5dbUrmQwvmeGMFyUubLtZb6ZLq4UxwprBAeZP+9fx7h2VEGl7sxV+Z7KVhhiN3Hd30CbRUy5a5oiKIiiIoiKIiiLgiiwlPeGxe1kN/bry//ZiH9rGPtD8ajJzUTxl9pvmurSytnZ6tL/xPQ9PApj2feJNGssbcSOMgjuqRrg4XC58sbo3FjtwlnfzYMU5hd8qeLoy45gPnhPcQH4dD2E1DLG15F108LrpKfMG687eG/wAFmO8GwJrNwkw0OeFx7r+Xccdh/wDNUJGOYdV6+jxCKrbdnmFe7M32ThjW8thcGL9nIOHiHdkHAz4iphUaDMLrm1GDOzF1O/KHbjkmDd7axupZtozjgitlKRLnRdMufFuEgZ8cVOx2Y5zsFy6ylFM1lLGbufqfp5K0l2fFdSW+0HA6IWzMVbsLAEZ7DhS+fKtyA45uSqsnlp2PpG9ouA07vuk3d3dyO+kmuJB0NtxkIFwuWJAAGdAB295PhVZkQeS7ku1WYhJRxshYcz7alVe1N2HW/wDoUJ4icFS2nVKlssQOwA9nZWjoSH5Ar1PibXUnrEmltDbqpN5uNKqStHPDM0OekjTiDLgZI7cnHYcVsac20N1DFjcbnta5rm5tjyVDsmxNxMkKsFLnAY5wNKhazM7KurUz8CJ0pFwE0bM3E47qW2lnwYlRiUT3w2eWTp3dtTtprusSuJPjhELZWM3uNeVl73W7lkLOa5hMwaBj+2BAdlx1eEjVTyyKyYWZcwUEWI1bp2wvIs7pyuvTfrZ8ctrbXlugCsFVlReQb3dB3Np+8KSsuzM1bYTUuhnkp5j716+zmB4XliuY2jSaLiHGMZCnDeI0Yc8Vmna5pIdsVpjczJsj4TctNtPgoN/v46rJbwwQrCAY4wRxAKCRnHJgR2frWr6gtOUDRTwYGHFssjzm3KWNn2M11IscQMjAYAJ0Rc/BFz/4qFrS82XZnmhpGF79PmfuVo25+6SW90Sx6SSKJSW+yJJOLRR4IOfPrmrkUIY5eUxHFZKiGw0BO3cOvmn1mABJ0A1NWFwQLmyT7RP9pz9M2tnCx6JTymkBwZD3qNQBUP8AUN+S6rz6lFkb/Udv3Dp5pxFTrklc0RFERREURFERREURFEXBFESrsCI2l5NaD9lIpnhH3dQJE/vEEeZqFoyOLV06l3rFO2b8w9k/Qq03lsZZogsXBxiSNsvnh6jBuzU8uVbvBI0VWklZE+772sRp3qJd7EnnQrNcqQw1RYE4Pg3EfnWCwkWJUjKmOJ+aNtrc76pJ2r7M5kBMEiy/gYBD6HOPjiqz6Yjs6r0dP6Qxu9mZtu/dJ08c0BaJxJEWHWQ5UMAQdRybXGtVXAt0K7Uboaiz2WPQ9FeR73ObMWTLwp1VMi5LdFnrDh78aDXWpmzXblK58mEAVJqWHXe3+7l8UwtvhYcMFssEhgQoQ3ucDq2hIJGcHUnlUwnYPZ5Ll/hNYc8znAON++4UjbUIk2vE8VwsbdACj4DKzBpAU5jmp5Z/Ssv1kFjyUdO9zMOc17CRm17ttfep20LYy29y19AkDxqwWeNx9YADhhglh2dVu/FbEXaS4WKrQODJ4xTuLgSLg8vH7rL9jTdHPC/LhljJ8BxDPyzVFh9oEr2VZGX07m9QtO2peCHbMLFgElt+jY55EGQgn1wPWrhIEoPULyMMJkwx/Vrrj4LvcbywW0szy3vTK3uW6KG4O8ZUenWI0rfiNbe5UbMPnqGNDIrW3dtf3/RJuyN+ZbaF4oo11kd0LEkRq5JKhRjOp7+2qwnLWkLvS4JHPI173cgDbmQqTaW1bi7cCV2lY+6gGnooqJ8jnrow01PRj2AB3ph2J7OrmYcUpEC9gI4nPoDhfX4CpWUrnau0XMqvSCGM5Yxm+Setk7ryW0YSG6Kjt+pjwx72+0T61bbHlFgvNVNcKh5fI258Sp2xLGeOWd52jbpChBjDL7q4OQScdnaa2aCL3UM8kbmtEYOnVV++0rSdDZIcG5YhyOyFcdJ8QQPWtZNfY6qzhzWsz1DvyDT/AOjsmO0t1jRUQYVQAAOwCtwLCy5z3l7i525XtWy1RREURFERREURFERREURFESlvftCO3urKV2CgGUM3cpUfxqKRwa4XXUoYHzQysaL6A+a9/wCmtudVjuXX7y20pHx4axxm9/uWv4XLzLR/yC9bbfOyc8JmEbHslUx/5gKyJW81G/Dahuobfw1+SvUcMMggg8iDkVIqRBboQo209lw3C8M0aSD8Sg48jzB8RWC0O0IUsNRLCbxuISPtj2YI3WtpTH+BwWX0Ocj51WfSjdq71N6RSNFpm379ktXfs/vkziNZB+Bxk+hxUPq8i60WOUj9yR5KluNh3MQ69tMoGuejYgeOQCBUXDeNwVfjrKaTQSNPmF4O0zAcXTMvZnpCvmM6UObvW4NOx2mUHyXmInPJHPkjH9BWA09Fvxo72Lh7wpNrsy4n1jhmlz9oIxH946fOtgxz+SikqKeAWc5re64CubLcK+cfslj/ADuAfgM1uKd6oy47SN5k+AV/sz2XsSDcTgD7kY1P7x/gKlbS9SubP6Ri1oma9T9k9bI2BbWo+piVT2tjLHzY6mrLIgzZefqKyef+o4nu5e5WR0qRVt1S329tnEeFp1ZxzROuw9FyRUZlaNFbjw+oeL5SB1Og+Kj/ANM4OfRXWPvfRZsf5a14o6H3KT8MlP5m/wDYKBs3a8N1tNWjbiC2zAaEEMXGQQdQcYrAeHSaKeWmlgoyHC13f4TkKnXIXNERREURFERREURFERREURFEUW52fFIyu8auyZ4SwBxnnisFoOpUjJnsBDTYFSQtZUaj3lhFKCskauDzDKDWCAd1JHM+M3aSEuTbpNCeKwna3P8Au2JeE+HCclf3ahMRHYNl0G4i2T2almbvGh+Fl2t97DEwiv4/oznlJnML+TfZPgayJMuj9Fh+HiQZ6Z2YdPzDyTJBcI44kYMO8EEfKpt1znMcw2cLKPtPasFuvFNIsY/EQPh2mtXODRqVJFTyTGzG3SzJJPtTqqrwWX2mbqyTjuUc1Q6anU1EbyjoF0miKg1dZ0nIcm+PUq32XIYGFrKcjH1Dn7aD7B/Gox5jXvrcHLoVTm/ijjN8x39fArvt6RiFtojwyS5ywx9XGPffz1AHiw8ay7oFinsCZX6gfE8gqh9ny7NJe2RpbU6vbg5eM9rxk889q5qO3DOmoVwTMrjaYgP5O5HuP3V3sbeG2uhmKUE9qE4YHuKnUGpGvDtlSnopoDZ48+StGIGpOBW6rAX0CXNob3RBuitlN1N9yPBVfF35KPnUTpRs3VX4cOeRnlORvU8/AKKu7tzdda+nIQ8reElUA7mYYZ61yOd2j5KU1kMGlM3X+46n3bBMGzNjW9uoWGJEA7hr8eZqVrA3YKjLUyym73EqditlAoy7OiEvTCNRJgjjAGcHszWthe6lM0hZkJ06KVWVEisoiiIoiKIiiIoiKIiiIoiKIiiIoiKIiiLzuIFdSrqGU8wQCDRbNcWm7TZL0+4lgzcXQcB/5bMn+UioeAzor7MVqmi2f36qRs3c+ygbiSBeL7zZY/Fs1lsLGm4CjlxGplFnONvcr2pFSUPalgs8ZRsjtVh7yMOTKewg1gi4UsMpidmH+QomwtmyR8ck7K8znBZRgBFyEUDs01PixrDWnc7reola6zYxZo+f7+Ct63VdU21d1rS5PFLAjN97GG+I1qMxNcblW4a6eEWY42UNNxbHtiLgdjyOy/AsRWOCzopjitUfzK9srKOJQsaKijsUAD5VuAALBUZJXyHM83KkVstEURFERREURFERREURFERREURFERREURFERREURFERREURFERREVhEURFZRFERREURArCIrKIrCIrKIoiKIiiIoiKIiiIoi//Z" 
                alt="SDNP Tunas Iblam Logo" 
                className="h-24 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-4xl md:text-7xl font-fredoka text-t1 mb-6 leading-tight uppercase tracking-tight">
              {language === 'en' ? selectedWeek.title : selectedWeek.titleId || selectedWeek.title}
            </h1>
            <div className={`inline-flex items-center gap-3 bg-white border-4 ${theme.border} px-8 py-3 rounded-full font-fredoka font-bold text-xl ${theme.text} shadow-lg rotate-1`}>
              {selectedWeek.badge}
            </div>
          </motion.div>
          
          {/* Animated background shapes */}
          <div className={`absolute top-0 left-0 w-32 h-32 ${theme.accent} rounded-full -ml-16 -mt-16 animate-pulse opacity-50`} />
          <div className={`absolute bottom-0 right-0 w-40 h-40 ${theme.accent} rounded-full -mr-20 -mb-20 animate-pulse delay-700 opacity-50`} />
        </header>

        {/* Navigation with Scroller */}
        <nav className="relative mb-12">
          <div className="flex overflow-x-auto gap-4 no-scrollbar pb-2 px-4 -mx-4 md:mx-0 md:px-0 md:justify-center md:flex-wrap scroll-smooth">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-4 rounded-2xl font-fredoka font-bold text-lg transition-all duration-300 whitespace-nowrap
                  ${activeTab === tab.id 
                    ? `bg-white border-4 ${theme.border} ${theme.text} shadow-xl scale-105 md:scale-110 -translate-y-1` 
                    : `bg-white border-2 border-bg-darker text-t2 hover:${theme.bg} hover:${theme.border} hover:${theme.text}`}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer Credit */}
        <footer className="mt-16 pb-8 text-center">
          <p className="font-fredoka text-sm text-t3 font-bold opacity-60 uppercase tracking-widest">
            Created by Intan Fazillah, S.S.
          </p>
        </footer>
      </div>
    </div>
  );
};
