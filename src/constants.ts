/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WeekData } from './types';

export const WEEKS: WeekData[] = [
  {
    id: 'break-the-ice',
    title: 'BREAK THE ICE',
    badge: 'Week 1 🧊',
    description: 'Personal stories and weekend activities. Let\'s get to know each other through our stories!',
    goals: {
      lower: 'I can tell a personal story with background details using simple past tense.',
      upper: 'I can tell a detailed story using past continuous, descriptive adjectives, and sequencing.'
    },
    keyPhrases: {
      lower: [
        'Yesterday, I went to the park.',
        'I played with my friends.',
        'It was a very fun day!',
        'I felt happy and excited.'
      ],
      upper: [
        'While I was walking home, I saw something strange.',
        'Suddenly, the lights went out!',
        'Eventually, we found our way back.',
        'Meanwhile, my parents were waiting for me.'
      ]
    },
    vocab: {
      lower: [
        { word: 'yesterday', meaning: 'kemarin', example: 'Yesterday, I went to the park.', emoji: '📅', image: 'https://loremflickr.com/400/400/cartoon,calendar' },
        { word: 'weekend', meaning: 'akhir pekan', example: 'My weekend was very fun!', emoji: '🎈', image: 'https://loremflickr.com/400/400/cartoon,party' },
        { word: 'played', meaning: 'bermain (lampau)', example: 'I played Roblox with my friends.', emoji: '🎮', image: 'https://loremflickr.com/400/400/cartoon,gaming' },
        { word: 'went', meaning: 'pergi (lampau)', example: 'We went to my grandma\'s house.', emoji: '🚗', image: 'https://loremflickr.com/400/400/cartoon,travel' },
        { word: 'saw', meaning: 'melihat (lampau)', example: 'I saw a big bird in the garden.', emoji: '👁️', image: 'https://loremflickr.com/400/400/cartoon,eye' },
        { word: 'happy', meaning: 'senang', example: 'I felt happy because I ate ice cream.', emoji: '😊', image: 'https://loremflickr.com/400/400/cartoon,happy' },
      ],
      upper: [
        { word: 'narrative', meaning: 'cerita/narasi', example: 'I wrote a long narrative about my trip.', emoji: '📖', image: 'https://loremflickr.com/400/400/cartoon,book' },
        { word: 'background', meaning: 'latar belakang', example: 'The background of the story is a forest.', emoji: '🌲', image: 'https://loremflickr.com/400/400/cartoon,forest' },
        { word: 'sequence', meaning: 'urutan', example: 'Please tell the events in sequence.', emoji: '🔢', image: 'https://loremflickr.com/400/400/cartoon,numbers' },
        { word: 'suddenly', meaning: 'tiba-tiba', example: 'Suddenly, it started to rain!', emoji: '⚡', image: 'https://loremflickr.com/400/400/cartoon,lightning' },
        { word: 'eventually', meaning: 'akhirnya', example: 'Eventually, we found the lost key.', emoji: '🏁', image: 'https://loremflickr.com/400/400/cartoon,finish' },
        { word: 'meanwhile', meaning: 'sementara itu', example: 'Meanwhile, my brother was sleeping.', emoji: '⏳', image: 'https://loremflickr.com/400/400/cartoon,clock' },
      ]
    },
    scramble: {
      lower: [
        { situation: 'Tell about your yesterday 📅', words: ['Yesterday', ',', 'I', 'went', 'to', 'the', 'zoo', '.'], answer: 'Yesterday, I went to the zoo.' },
        { situation: 'What did you play? 🎮', words: ['I', 'played', 'football', 'with', 'my', 'brother', '.'], answer: 'I played football with my brother.' },
      ],
      upper: [
        { situation: 'A sudden event ⚡', words: ['Suddenly', ',', 'a', 'loud', 'noise', 'came', 'from', 'the', 'kitchen', '.'], answer: 'Suddenly, a loud noise came from the kitchen.' },
        { situation: 'While you were doing something ⏳', words: ['While', 'I', 'was', 'studying', ',', 'my', 'cat', 'jumped', 'on', 'the', 'table', '.'], answer: 'While I was studying, my cat jumped on the table.' },
      ]
    },
    chat: {
      lower: [
        {
          npc: '👋 Friend: "Hi! How was your weekend?"',
          turns: [
            {
              choices: [
                { text: 'It was great! I went to the beach.', points: 3, feedback: 'Great job using "went"!' },
                { text: 'I play games.', points: 1, feedback: 'Try using the past tense "played".' },
                { text: 'Boring.', points: 0, feedback: 'Try to say more details!' }
              ]
            }
          ]
        }
      ],
      upper: [
        {
          npc: '🎤 Interviewer: "Tell me about a memorable day you had recently."',
          turns: [
            {
              choices: [
                { text: 'Last Sunday, while I was walking in the park, I saw a rare bird.', points: 3, feedback: 'Excellent use of past continuous!' },
                { text: 'I went to the mall and bought a shirt.', points: 2, feedback: 'Good, but try adding more background details.' },
                { text: 'I don\'t remember.', points: 0, feedback: 'Try to think of any small event!' }
              ]
            }
          ]
        }
      ]
    },
    quiz: [
      { situation: 'Which sentence is in the past tense?', options: ['I go to school.', 'I went to school.', 'I am going to school.', 'I will go to school.'], correctIndex: 1 },
    ],
    meter: {
      lower: [
        { text: '"I go to the park yesterday."', score: 1, explanation: 'Should use "went" for yesterday. 😞', betterVersion: 'I went to the park yesterday.' },
      ],
      upper: [
        { text: '"I was study when the phone rang."', score: 2, explanation: 'Should be "was studying". 😐', betterVersion: 'I was studying when the phone rang.' },
      ]
    },
    share: {
      lower: {
        title: 'Emotion Snapshot',
        description: 'Draw a picture of your favorite weekend activity and tell your partner about it.',
        activity: 'In my picture, I am ____. I went to ____ with ____. I felt ____.'
      },
      upper: {
        title: 'Extended Narrative',
        description: 'Write a short story about a surprising event. Use sequence words like First, Then, Suddenly, and Eventually.',
        activity: 'First, ____. Meanwhile, ____. Suddenly, ____. Eventually, ____.'
      }
    }
  },
  {
    id: 'early-bird',
    title: 'EARLY BIRD GETS THE WORM',
    badge: 'Week 2 🐦',
    description: 'Daily routines and time management. Learn how to organize your day!',
    goals: {
      lower: 'I can sort my daily routines into morning, afternoon, and night.',
      upper: 'I can use priority words like "necessary" and "optional" to fix a bad schedule.'
    },
    keyPhrases: {
      lower: [
        'I wake up in the morning.',
        'I must brush my teeth.',
        'I play with friends in the afternoon.',
        'I sleep at night.'
      ],
      upper: [
        'Homework is necessary for learning.',
        'Playing games is optional.',
        'Study is my first priority.',
        'I have a very busy schedule.'
      ]
    },
    vocab: {
      lower: [
        { word: 'morning', meaning: 'pagi', example: 'I wake up in the morning.', emoji: '🌅', image: 'https://loremflickr.com/400/400/cartoon,sunrise' },
        { word: 'afternoon', meaning: 'siang/sore', example: 'I play with friends in the afternoon.', emoji: '☀️', image: 'https://loremflickr.com/400/400/cartoon,sun' },
        { word: 'night', meaning: 'malam', example: 'I sleep at night.', emoji: '🌙', image: 'https://loremflickr.com/400/400/cartoon,moon' },
        { word: 'must', meaning: 'harus', example: 'I must brush my teeth.', emoji: '❗', image: 'https://loremflickr.com/400/400/cartoon,alert' },
        { word: 'can', meaning: 'bisa/boleh', example: 'I can play Roblox at night.', emoji: '🎮', image: 'https://loremflickr.com/400/400/cartoon,controller' },
      ],
      upper: [
        { word: 'necessary', meaning: 'perlu/penting', example: 'Homework is necessary for learning.', emoji: '✅', image: 'https://loremflickr.com/400/400/cartoon,check' },
        { word: 'optional', meaning: 'pilihan/tidak wajib', example: 'Playing games is optional.', emoji: '🎮', image: 'https://loremflickr.com/400/400/cartoon,joystick' },
        { word: 'priority', meaning: 'prioritas', example: 'Study is my first priority.', emoji: '🔝', image: 'https://loremflickr.com/400/400/cartoon,star' },
        { word: 'schedule', meaning: 'jadwal', example: 'I have a very busy schedule.', emoji: '📅', image: 'https://loremflickr.com/400/400/cartoon,calendar' },
      ]
    },
    scramble: {
      lower: [
        { situation: 'Morning routine 🌅', words: ['I', 'must', 'wake', 'up', 'early', '.'], answer: 'I must wake up early.' },
      ],
      upper: [
        { situation: 'Setting priorities 🔝', words: ['Homework', 'is', 'more', 'necessary', 'than', 'video', 'games', '.'], answer: 'Homework is more necessary than video games.' },
      ]
    },
    chat: {
      lower: [
        {
          npc: '🌅 Mom: "It\'s 7:00 AM! What must you do now?"',
          turns: [
            {
              choices: [
                { text: 'I must eat breakfast and go to school.', points: 3, feedback: 'Perfect morning routine!' },
                { text: 'I can play games.', points: 1, feedback: 'Maybe after school? Now you must get ready!' },
                { text: 'I want to sleep.', points: 0, feedback: 'Wake up, early bird!' }
              ]
            }
          ]
        }
      ],
      upper: [
        {
          npc: '📅 Messy Max: "I have so much homework, but I want to play games for 5 hours. What should I do?"',
          turns: [
            {
              choices: [
                { text: 'You should do your homework first because it is necessary.', points: 3, feedback: 'Great advice on priorities!' },
                { text: 'Just play games, homework is optional.', points: 0, feedback: 'Oh no! Homework is usually necessary!' },
                { text: 'Do both at the same time.', points: 1, feedback: 'That might be difficult to focus.' }
              ]
            }
          ]
        }
      ]
    },
    quiz: [
      { situation: 'When do you usually brush your teeth?', options: ['In the morning', 'At night', 'Both morning and night', 'In the afternoon'], correctIndex: 2 },
    ],
    meter: {
      lower: [
        { text: '"I can wake up at 6 AM."', score: 3, explanation: 'Good, but usually we say "must" for waking up for school. 🙂', betterVersion: 'I must wake up at 6 AM.' },
      ],
      upper: [
        { text: '"Playing games is necessary for school."', score: 1, explanation: 'Games are usually optional. 😞', betterVersion: 'Playing games is optional.' },
      ]
    },
    share: {
      lower: {
        title: 'The 4-Box Mission',
        description: 'Fold a paper into 4 boxes. Draw one MUST activity for morning, afternoon, night, and one CAN activity.',
        activity: 'In the morning, I must ____. In the afternoon, I must ____. At night, I must ____. I can ____ anytime!'
      },
      upper: {
        title: 'The Life Coach Pitch',
        description: 'Look at Messy Max\'s schedule and rewrite it to be more productive.',
        activity: 'Max should ____ first because it is necessary. Then, he can ____.'
      }
    }
  },
  {
    id: 'penny-thoughts',
    title: 'A PENNY FOR YOUR THOUGHTS',
    badge: 'Week 3 💰',
    description: 'Comparisons and giving opinions. Which one is better?',
    goals: {
      lower: 'I can compare two things and give my opinion.',
      upper: 'I can make persuasive sentences comparing products based on price and quality.'
    },
    keyPhrases: {
      lower: [
        'This pencil is very cheap.',
        'That car is very expensive.',
        'I think apples are better than oranges.',
        'Rain is worse than sun for a picnic.'
      ],
      upper: [
        'He gave a very persuasive speech.',
        'Metal has better durability than glass.',
        'I recommend this book to everyone.',
        'Be careful, glass is fragile.'
      ]
    },
    vocab: {
      lower: [
        { word: 'cheap', meaning: 'murah', example: 'This pencil is very cheap.', emoji: '🪙', image: 'https://loremflickr.com/400/400/cartoon,coin' },
        { word: 'expensive', meaning: 'mahal', example: 'That car is very expensive.', emoji: '💎', image: 'https://loremflickr.com/400/400/cartoon,diamond' },
        { word: 'better', meaning: 'lebih baik', example: 'I think apples are better than oranges.', emoji: '👍', image: 'https://loremflickr.com/400/400/cartoon,thumb' },
        { word: 'worse', meaning: 'lebih buruk', example: 'Rain is worse than sun for a picnic.', emoji: '👎', image: 'https://loremflickr.com/400/400/cartoon,down' },
      ],
      upper: [
        { word: 'persuasive', meaning: 'persuasif/meyakinkan', example: 'He gave a very persuasive speech.', emoji: '🗣️', image: 'https://loremflickr.com/400/400/cartoon,speech' },
        { word: 'durability', meaning: 'daya tahan', example: 'Metal has better durability than glass.', emoji: '🛡️', image: 'https://loremflickr.com/400/400/cartoon,shield' },
        { word: 'recommend', meaning: 'merekomendasikan', example: 'I recommend this book to everyone.', emoji: '⭐', image: 'https://loremflickr.com/400/400/cartoon,star' },
        { word: 'fragile', meaning: 'rapuh', example: 'Be careful, glass is fragile.', emoji: '📦', image: 'https://loremflickr.com/400/400/cartoon,box' },
      ]
    },
    scramble: {
      lower: [
        { situation: 'Comparing pencils ✏️', words: ['Mechanical', 'pencil', 'is', 'better', 'than', 'wooden', 'pencil', '.'], answer: 'Mechanical pencil is better than wooden pencil.' },
      ],
      upper: [
        { situation: 'Persuading someone 🗣️', words: ['I', 'recommend', 'the', 'metal', 'cup', 'because', 'it', 'is', 'stronger', '.'], answer: 'I recommend the metal cup because it is stronger.' },
      ]
    },
    chat: {
      lower: [
        {
          npc: '✏️ Friend: "Should I buy the $5 mechanical pencil or the $1 wooden pencil?"',
          turns: [
            {
              choices: [
                { text: 'The wooden pencil is better because it is cheaper.', points: 3, feedback: 'Good reasoning!' },
                { text: 'The mechanical pencil is better because it is cool.', points: 2, feedback: 'Nice opinion!' },
                { text: 'Buy both.', points: 1, feedback: 'That\'s one way to solve it!' }
              ]
            }
          ]
        }
      ],
      upper: [
        {
          npc: '🥤 Customer: "I need a cup that won\'t break easily. What do you suggest?"',
          turns: [
            {
              choices: [
                { text: 'I recommend the metal cup because it has better durability.', points: 3, feedback: 'Excellent use of "durability"!' },
                { text: 'The glass cup is better because it is pretty.', points: 1, feedback: 'But glass is fragile!' },
                { text: 'The metal cup is more expensive but stronger.', points: 2, feedback: 'Good comparison of price and strength.' }
              ]
            }
          ]
        }
      ]
    },
    quiz: [
      { situation: 'Which word is used to compare two things?', options: ['Good', 'Better', 'Best', 'Well'], correctIndex: 1 },
    ],
    meter: {
      lower: [
        { text: '"This pencil is more cheap."', score: 2, explanation: 'Should be "cheaper". 😐', betterVersion: 'This pencil is cheaper.' },
      ],
      upper: [
        { text: '"The metal cup is more better than glass."', score: 1, explanation: 'Never use "more" with "better". 😞', betterVersion: 'The metal cup is better than glass.' },
      ]
    },
    share: {
      lower: {
        title: 'Comparing from Memory',
        description: 'Look at two objects and tell your partner which one you prefer and why.',
        activity: 'I think the ____ is better because it is ____.'
      },
      upper: {
        title: '30-Second Sales Pitch',
        description: 'Pick an object and try to "sell" it to the class by comparing it to another object.',
        activity: 'You should buy ____ because ____. It is better than ____ since ____.'
      }
    }
  },
  {
    id: 'getting-to-know',
    title: 'GETTING TO KNOW YOU',
    badge: 'Week 4 💫',
    description: 'Abilities and experiences. Discover what makes your friends special!',
    goals: {
      lower: 'I can ask about abilities using "CAN".',
      upper: 'I can ask about experiences using present perfect and follow up with simple past.'
    },
    keyPhrases: {
      lower: [
        'Can you swim?',
        'I can cook noodles.',
        'Can you draw a cat?',
        'She can sing beautifully.'
      ],
      upper: [
        'I had an amazing experience.',
        'Have you ever been to Bali?',
        'I visited a museum last year.',
        'I tried surfing yesterday.'
      ]
    },
    vocab: {
      lower: [
        { word: 'can', meaning: 'bisa', example: 'Can you swim?', emoji: '👍', image: 'https://loremflickr.com/400/400/cartoon,swim' },
        { word: 'cook', meaning: 'memasak', example: 'I can cook noodles.', emoji: '👨‍🍳', image: 'https://loremflickr.com/400/400/cartoon,chef' },
        { word: 'draw', meaning: 'menggambar', example: 'Can you draw a cat?', emoji: '🎨', image: 'https://loremflickr.com/400/400/cartoon,art' },
        { word: 'sing', meaning: 'menyanyi', example: 'She can sing beautifully.', emoji: '🎤', image: 'https://loremflickr.com/400/400/cartoon,singer' },
      ],
      upper: [
        { word: 'experience', meaning: 'pengalaman', example: 'I had an amazing experience.', emoji: '💡', image: 'https://loremflickr.com/400/400/cartoon,idea' },
        { word: 'ever', meaning: 'pernah', example: 'Have you ever been to Bali?', emoji: '🤔', image: 'https://loremflickr.com/400/400/cartoon,thinking' },
        { word: 'visited', meaning: 'mengunjungi', example: 'I visited a museum last year.', emoji: '✈️', image: 'https://loremflickr.com/400/400/cartoon,museum' },
        { word: 'tried', meaning: 'mencoba', example: 'I tried surfing yesterday.', emoji: '🏄', image: 'https://loremflickr.com/400/400/cartoon,surf' },
      ]
    },
    scramble: {
      lower: [
        { situation: 'Asking a friend ❓', words: ['Can', 'you', 'play', 'the', 'piano', '?'], answer: 'Can you play the piano?' },
      ],
      upper: [
        { situation: 'Asking about travel ✈️', words: ['Have', 'you', 'ever', 'visited', 'another', 'country', '?'], answer: 'Have you ever visited another country?' },
      ]
    },
    chat: {
      lower: [
        {
          npc: '🎨 Friend: "I can draw a dragon! What can you do?"',
          turns: [
            {
              choices: [
                { text: 'I can sing very well.', points: 3, feedback: 'Great! Sharing talents is fun.' },
                { text: 'I cannot do anything.', points: 1, feedback: 'Everyone has a talent! Think harder!' },
                { text: 'Can you draw a house?', points: 2, feedback: 'Good follow-up question!' }
              ]
            }
          ]
        }
      ],
      upper: [
        {
          npc: '🤔 Classmate: "Have you ever tried a new sport?"',
          turns: [
            {
              choices: [
                { text: 'Yes, I have. I tried archery last summer.', points: 3, feedback: 'Perfect! Present perfect + simple past details.' },
                { text: 'No, I haven\'t, but I want to try karate.', points: 3, feedback: 'Great way to keep the conversation going!' },
                { text: 'I like sports.', points: 1, feedback: 'Try to answer the "Have you ever" question directly.' }
              ]
            }
          ]
        }
      ]
    },
    quiz: [
      { situation: 'How do you answer "Can you swim?"', options: ['Yes, I do.', 'Yes, I can.', 'Yes, I am.', 'Yes, I will.'], correctIndex: 1 },
    ],
    meter: {
      lower: [
        { text: '"I can to play guitar."', score: 2, explanation: 'No "to" after "can". 😐', betterVersion: 'I can play guitar.' },
      ],
      upper: [
        { text: '"Have you ever went to Japan?"', score: 2, explanation: 'Should be "Have you ever been" or "Have you ever gone". 😐', betterVersion: 'Have you ever been to Japan?' },
      ]
    },
    share: {
      lower: {
        title: 'Talent Bingo',
        description: 'Find friends who can do different things and write their names.',
        activity: 'In our class, Budi can draw. Sari can sing.'
      },
      upper: {
        title: 'Experience Interview',
        description: 'Interview your partner about their experiences using "Have you ever...?"',
        activity: 'I found out that my partner has visited a beach. He went there last year.'
      }
    }
  },
  {
    id: 'whats-the-scoop',
    title: "WHAT'S THE SCOOP?",
    badge: 'Week 5 📰',
    description: 'Reporting information and news. Become a school reporter!',
    goals: {
      lower: 'I can report what someone said using "said" and "told".',
      upper: 'I can report information using advanced reporting verbs like "explained" and "claimed".'
    },
    keyPhrases: {
      lower: [
        'He said he was happy.',
        'She told me the news.',
        'This is my news report.',
        'The witness saw the cat.'
      ],
      upper: [
        'She explained how it happened.',
        'He claimed he found the book.',
        'They mentioned the party.',
        'My source is the teacher.'
      ]
    },
    vocab: {
      lower: [
        { word: 'said', meaning: 'mengatakan', example: 'He said he was happy.', emoji: '🗣️', image: 'https://loremflickr.com/400/400/cartoon,talk' },
        { word: 'told', meaning: 'memberitahu', example: 'She told me the news.', emoji: '📢', image: 'https://loremflickr.com/400/400/cartoon,megaphone' },
        { word: 'report', meaning: 'laporan', example: 'This is my news report.', emoji: '📰', image: 'https://loremflickr.com/400/400/cartoon,newspaper' },
        { word: 'witness', meaning: 'saksi', example: 'The witness saw the cat.', emoji: '👁️', image: 'https://loremflickr.com/400/400/cartoon,detective' },
      ],
      upper: [
        { word: 'explained', meaning: 'menjelaskan', example: 'She explained how it happened.', emoji: '📖', image: 'https://loremflickr.com/400/400/cartoon,teacher' },
        { word: 'claimed', meaning: 'mengklaim', example: 'He claimed he found the book.', emoji: '💡', image: 'https://loremflickr.com/400/400/cartoon,claim' },
        { word: 'mentioned', meaning: 'menyebutkan', example: 'They mentioned the party.', emoji: '💬', image: 'https://loremflickr.com/400/400/cartoon,chat' },
        { word: 'source', meaning: 'sumber', example: 'My source is the teacher.', emoji: '🔍', image: 'https://loremflickr.com/400/400/cartoon,search' },
      ]
    },
    scramble: {
      lower: [
        { situation: 'Reporting news 📰', words: ['The', 'witness', 'said', 'that', 'the', 'cat', 'was', 'scared', '.'], answer: 'The witness said that the cat was scared.' },
      ],
      upper: [
        { situation: 'Explaining a situation 📖', words: ['The', 'teacher', 'explained', 'why', 'the', 'class', 'was', 'cancelled', '.'], answer: 'The teacher explained why the class was cancelled.' },
      ]
    },
    chat: {
      lower: [
        {
          npc: '🎤 Reporter: "What did your friend say about the game?"',
          turns: [
            {
              choices: [
                { text: 'He said that it was very exciting.', points: 3, feedback: 'Great reporting!' },
                { text: 'He told me he win.', points: 2, feedback: 'Good, but try "he won".' },
                { text: 'Game is good.', points: 1, feedback: 'Try to use "said" or "told".' }
              ]
            }
          ]
        }
      ],
      upper: [
        {
          npc: '📺 News Anchor: "What did the witness claim happened at the canteen?"',
          turns: [
            {
              choices: [
                { text: 'The witness claimed that someone took the lunch by mistake.', points: 3, feedback: 'Excellent use of "claimed"!' },
                { text: 'He said someone took it.', points: 1, feedback: 'Try using a more specific reporting verb.' },
                { text: 'He mentioned that the field was flooded.', points: 2, feedback: 'Good, but check if it matches the canteen story!' }
              ]
            }
          ]
        }
      ]
    },
    quiz: [
      { situation: 'Which word needs an object (like "me" or "him")?', options: ['Said', 'Told', 'Mentioned', 'Claimed'], correctIndex: 1 },
    ],
    meter: {
      lower: [
        { text: '"She said me that she was late."', score: 2, explanation: 'Should be "She told me" or "She said that". 😐', betterVersion: 'She told me that she was late.' },
      ],
      upper: [
        { text: '"He explained me the problem."', score: 2, explanation: 'Should be "He explained the problem to me". 😐', betterVersion: 'He explained the problem to me.' },
      ]
    },
    share: {
      lower: {
        title: 'News Reporter Simulation',
        description: 'Interview a "witness" about a school event and report it to the class.',
        activity: 'The witness said that ____. He/She felt ____.'
      },
      upper: {
        title: 'Breaking News Broadcast',
        description: 'Create a detailed news report using advanced reporting verbs.',
        activity: 'The witness explained that ____. He also mentioned that ____.'
      }
    }
  },
  {
    id: 'lend-a-hand',
    title: 'LEND A HAND',
    badge: 'Week 6 🤝',
    description: 'Polite requests and helpfulness. Learn how to ask for help the right way!',
    descriptionId: 'Permintaan sopan dan sikap suka menolong. Pelajari cara meminta bantuan dengan benar!',
    goals: {
      lower: 'I can ask for help politely using "Could you please...?"',
      lowerId: 'Saya bisa meminta bantuan dengan sopan menggunakan "Could you please...?"',
      upper: 'I can make polite requests using "Would you mind...?"',
      upperId: 'Saya bisa membuat permintaan sopan menggunakan "Would you mind...?"'
    },
    materials: [
      'PPT Slides (Display Mode)',
      'Request scenario cards (simple situations)',
      'Plain paper (for hand tracing)',
      'Index cards or half-sheets of paper (for UG request cards)',
      'Crayons, markers, colored pencils',
      'Pencils'
    ],
    materialsId: [
      'Slide PPT (Mode Tampilan)',
      'Kartu skenario permintaan (situasi sederhana)',
      'Kertas polos (untuk menjiplak tangan)',
      'Kartu indeks atau setengah lembar kertas (untuk kartu permintaan UG)',
      'Krayon, spidol, pensil warna',
      'Pensil'
    ],
    review: {
      title: 'WEEK 5 REVIEW',
      titleId: 'TINJAUAN MINGGU 5',
      activity: 'Quick vocabulary game or sharing activity.',
      activityId: 'Permainan kosakata cepat atau aktivitas berbagi.',
      connection: 'Last week we learned about Rules. This week, we learn how to ask for help politely!',
      connectionId: 'Minggu lalu kita belajar tentang Aturan. Minggu ini, kita belajar cara meminta bantuan dengan sopan!'
    },
    keyPhrases: {
      lower: [
        'Could you please help me?',
        'Could you please open the door?',
        'Could you please carry these books?',
        'Could you please share your crayons?'
      ],
      lowerId: [
        'Bisakah kamu membantu saya?',
        'Bisakah kamu membukakan pintunya?',
        'Bisakah kamu membawakan buku-buku ini?',
        'Bisakah kamu berbagi krayon?'
      ],
      upper: [
        'Would you mind opening the window?',
        'Would you mind helping me carry this?',
        'Would you mind explaining again?',
        'Would you mind passing the paper?'
      ],
      upperId: [
        'Apakah Anda keberatan membukakan jendelanya?',
        'Apakah Anda keberatan membantu saya membawakan ini?',
        'Apakah Anda keberatan menjelaskan lagi?',
        'Apakah Anda keberatan memberikan kertas itu?'
      ]
    },
    vocab: {
      lower: [
        { word: 'help', meaning: 'membantu', meaningId: 'membantu', example: 'Could you please help me?', exampleId: 'Bisakah kamu membantu saya?', emoji: '🤲', image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjFjY3c0aGoyZ3UycWc3d2N3NmNsYnpqMjl2OXk4MzBvM2Q2ZDd1OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/phJ6eMRFYI6CQ/giphy.gif' },
        { word: 'please', meaning: 'tolong', meaningId: 'tolong', example: 'Could you please open the door?', exampleId: 'Tolong bukakan pintunya.', emoji: '🙏', image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHdzczFhdG85dXI0eXN1b2lsZzI5cXV3YnN6ZzBmN2w5ZmFxamRoNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zZbf6UpZslp3nvFjIR/giphy.webp' },
        { word: 'carry', meaning: 'membawa', meaningId: 'membawa', example: 'Could you please carry these books?', exampleId: 'Bisakah kamu bantu membawakan buku ini?', emoji: '📚', image: 'https://media.tenor.com/nuCeLTABSTsAAAAM/jalan-book.gif' },
        { word: 'open', meaning: 'membuka', meaningId: 'membuka', example: 'Could you please open the window?', exampleId: 'Bisakah kamu membukakan jendelanya?', emoji: '🚪', image: 'https://media.tenor.com/5A5JktUc8HkAAAAM/cat-door.gif' },
        { word: 'share', meaning: 'berbagi', meaningId: 'berbagi', example: 'Can you share your crayons with me?', exampleId: 'Bisakah kamu berbagi krayon dengan saya?', emoji: '↔️', image: 'https://media.tenor.com/dgjNDMb_w2IAAAAM/summer-friends.gif' },
        { word: 'borrow', meaning: 'meminjam', meaningId: 'meminjam', example: 'Can I borrow your eraser, please?', exampleId: 'Bolehkah saya meminjam penghapusmu?', emoji: '🫳', image: 'https://media.tenor.com/58v2JCMvUEQAAAAM/steal-funny.gif' },
        { word: 'sorry', meaning: 'maaf', meaningId: 'maaf', example: "I'm sorry, I can't right now.", exampleId: 'Maaf, saya tidak bisa sekarang.', emoji: '🙇', image: 'https://media.tenor.com/AhHan4Njj1EAAAAM/lee-funny.gif' },
        { word: 'thank you', meaning: 'terima kasih', meaningId: 'terima kasih', example: 'Thank you for helping me!', exampleId: 'Terima kasih sudah membantu saya!', emoji: '❤️', image: 'https://media.tenor.com/E7HE7oJ-kMIAAAAm/youre-welcome-yw.webp' },
      ],
      upper: [
        { word: 'assist', meaning: 'membantu (formal)', meaningId: 'membantu (formal)', example: 'Could you please assist me with this?', exampleId: 'Bisakah Anda membantu saya dengan ini?', emoji: '🤝', image: 'https://media.tenor.com/RsrT-r7yqpYAAAAM/toy-story-buzz-lightyear.gif' },
        { word: 'mind', meaning: 'keberatan', meaningId: 'keberatan', example: 'Would you mind opening the door?', exampleId: 'Apakah Anda keberatan membukakan pintu?', emoji: '🤔', image: 'https://media.tenor.com/yxueLwFC-ZcAAAAm/cat-thinking.webp' },
        { word: 'certainly', meaning: 'tentu saja', meaningId: 'tentu saja', example: 'Yes, certainly! I\'ll do it now.', exampleId: 'Ya, tentu saja! Saya akan melakukannya sekarang.', emoji: '👍', image: 'https://media.tenor.com/e2ITpfUYmi0AAAAm/of-course-purple-exclamation-lines-around-of-course-in-blue-bubble-letters.webp' },
        { word: 'help', meaning: 'membantu', meaningId: 'membantu', example: 'Could you please help me?', exampleId: 'Bisakah kamu membantu saya?', emoji: '🤲', image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjFjY3c0aGoyZ3UycWc3d2N3NmNsYnpqMjl2OXk4MzBvM2Q2ZDd1OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/phJ6eMRFYI6CQ/giphy.gif' },
        { word: 'please', meaning: 'tolong', meaningId: 'tolong', example: 'Could you please open the door?', exampleId: 'Tolong bukakan pintunya.', emoji: '🙏', image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHdzczFhdG85dXI0eXN1b2lsZzI5cXV3YnN6ZzBmN2w5ZmFxamRoNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zZbf6UpZslp3nvFjIR/giphy.webp' },
        { word: 'carry', meaning: 'membawa', meaningId: 'membawa', example: 'Could you please carry these books?', exampleId: 'Bisakah kamu membawakan buku ini?', emoji: '📚', image: 'https://media.tenor.com/nuCeLTABSTsAAAAM/jalan-book.gif' },
        { word: 'open', meaning: 'membuka', meaningId: 'membuka', example: 'Could you please open the window?', exampleId: 'Bisakah kamu membukakan jendelanya?', emoji: '🚪', image: 'https://media.tenor.com/6yA5LQTCWl8AAAAM/levi-attack-on-titan.gif' },
        { word: 'thank you', meaning: 'terima kasih', meaningId: 'terima kasih', example: 'No problem. Thank you anyway!', exampleId: 'Tidak masalah. Terima kasih!', emoji: '❤️', image: 'https://media.tenor.com/E7HE7oJ-kMIAAAAm/youre-welcome-yw.webp' },
      ]
    },
    scramble: {
      lower: [
        { 
          situation: 'Your hands are full of books 📦', 
          situationId: 'Tanganmu penuh dengan buku 📦',
          words: ['Could', 'you', 'please', 'open', 'the', 'door', '?'], 
          answer: 'Could you please open the door?' 
        },
        { 
          situation: 'You forgot your pencil ✏️', 
          situationId: 'Kamu lupa membawa pensil ✏️',
          words: ['Could', 'you', 'please', 'lend', 'me', 'a', 'pencil', '?'], 
          answer: 'Could you please lend me a pencil?' 
        },
      ],
      upper: [
        { 
          situation: 'You need one more day for homework 📝', 
          situationId: 'Kamu butuh satu hari lagi untuk PR 📝',
          words: ['Would', 'you', 'mind', 'giving', 'me', 'one', 'more', 'day', '?'], 
          answer: 'Would you mind giving me one more day?' 
        },
        { 
          situation: 'Classmate is talking too loudly 🔊', 
          situationId: 'Teman sekelas berbicara terlalu keras 🔊',
          words: ['Would', 'you', 'mind', 'lowering', 'your', 'voice', 'a', 'little', '?'], 
          answer: 'Would you mind lowering your voice a little?' 
        },
      ]
    },
    chat: {
      lower: [
        {
          npc: '📦 Rafi: "My hands are really full! I can\'t open the door."',
          npcId: '📦 Rafi: "Tanganku penuh sekali! Aku tidak bisa membuka pintu."',
          turns: [
            {
              choices: [
                { 
                  text: 'Open the door already!', 
                  textId: 'Buka pintunya sekarang!',
                  points: 0, 
                  feedback: 'That\'s a command, not an offer!',
                  feedbackId: 'Itu perintah, bukan tawaran!'
                },
                { 
                  text: 'Could you please wait?', 
                  textId: 'Bisakah kamu menunggu?',
                  points: 1, 
                  feedback: 'He needs help now!',
                  feedbackId: 'Dia butuh bantuan sekarang!'
                },
                { 
                  text: 'I\'ll help! Let me open it for you.', 
                  textId: 'Aku bantu! Biar aku bukakan untukmu.',
                  points: 3, 
                  feedback: 'Wonderful — you offered help politely! 😊',
                  feedbackId: 'Luar biasa — kamu menawarkan bantuan dengan sopan! 😊'
                }
              ]
            }
          ]
        }
      ],
      upper: [
        {
          npc: '📝 Teacher: "Homework is due tomorrow morning, everyone."',
          npcId: '📝 Guru: "Tugas harus dikumpulkan besok pagi, semuanya."',
          turns: [
            {
              choices: [
                { 
                  text: 'Would you mind giving me one more day? I was sick yesterday.', 
                  textId: 'Apakah Anda keberatan memberi saya satu hari lagi? Saya sakit kemarin.',
                  points: 3, 
                  feedback: 'Excellent! Formal plus reason equals very polite! ⭐',
                  feedbackId: 'Luar biasa! Formal ditambah alasan sama dengan sangat sopan! ⭐'
                },
                { 
                  text: 'I need more time!', 
                  textId: 'Saya butuh lebih banyak waktu!',
                  points: 0, 
                  feedback: 'Too direct and demanding!',
                  feedbackId: 'Terlalu langsung dan menuntut!'
                },
                { 
                  text: 'Can I have more time?', 
                  textId: 'Bolehkah saya minta waktu lebih?',
                  points: 2, 
                  feedback: 'Would you mind sounds even more formal.',
                  feedbackId: 'Would you mind terdengar lebih formal.'
                }
              ]
            }
          ]
        }
      ]
    },
    quiz: [
      { 
        situation: 'Which sounds the most polite?', 
        situationId: 'Mana yang terdengar paling sopan?',
        options: [
          'Give me a pencil.', 
          'Could you please lend me a pencil?', 
          'Pencil! Now!', 
          'I want your pencil.'
        ], 
        optionsId: [
          'Berikan aku pensil.',
          'Bisakah kamu meminjamkan aku pensil?',
          'Pensil! Sekarang!',
          'Aku mau pensilmu.'
        ],
        correctIndex: 1 
      },
    ],
    meter: {
      lower: [
        { 
          text: '"Give me that ruler."', 
          textId: '"Berikan penggaris itu."',
          score: 1, 
          explanation: 'No please — sounds like a command! 😞', 
          explanationId: 'Tanpa kata "please" — terdengar seperti perintah! 😞',
          betterVersion: 'Could you please pass the ruler?' 
        },
      ],
      upper: [
        { 
          text: '"Do my homework for me."', 
          textId: '"Kerjakan PR-ku."',
          score: 1, 
          explanation: 'Demanding and rude! 😞', 
          explanationId: 'Menuntut dan kasar! 😞',
          betterVersion: 'Could you please help me with my homework?' 
        },
      ]
    },
    physicalOutput: {
      lower: {
        title: '“Polite Hand” Drawing',
        titleId: 'Gambar "Tangan Sopan"',
        steps: [
          'Trace your hand on a piece of paper.',
          'Inside the hand, write ONE polite request: "Could you please help me?" or "Could you please open the door?"',
          'Decorate with colors. (No cutting, just draw, write, color).',
        ],
        stepsId: [
          'Jiplak tanganmu di selembar kertas.',
          'Di dalam gambar tangan, tulis SATU permintaan sopan: "Could you please help me?" atau "Could you please open the door?"',
          'Hias dengan warna. (Tidak perlu digunting, cukup gambar, tulis, warnai).',
        ],
        keep: 'The class can display it on the classroom wall.',
        keepId: 'Guru akan memajangnya di dinding kelas.',
        example: 'Could you please help me?',
        exampleId: 'Could you please help me? (Bisakah kamu membantu saya?)'
      },
      upper: {
        title: '“Request Card”',
        titleId: '“Kartu Permintaan”',
        steps: [
          'Receive one small card.',
          'Write ONE polite request using "Would you mind...?"',
          'Example: "Would you mind opening the window?" or "Would you mind helping me carry this?"',
          'Decorate simply with drawings or borders.',
        ],
        stepsId: [
          'Terima satu kartu kecil (kartu indeks atau setengah lembar).',
          'Tulis SATU permintaan sopan menggunakan "Would you mind...?"',
          'Contoh: "Would you mind opening the window?" atau "Would you mind helping me carry this?"',
          'Hias secara sederhana dengan gambar atau bingkai.',
        ],
        keep: 'The class can display it on the classroom wall.',
        keepId: 'Guru akan memajangnya di dinding kelas.',
        example: 'Would you mind opening the window?',
        exampleId: 'Would you mind opening the window? (Apakah Anda keberatan membukakan jendelanya?)'
      }
    },
    alternativeOutputs: [
      { 
        type: 'Poster', 
        typeId: 'Poster',
        lower: 'Draw 4 situations + speech bubbles with "Could you please...?"', 
        lowerId: 'Gambar 4 situasi + gelembung bicara dengan "Could you please...?"',
        upper: 'Create a flowchart of polite request → response → thank you',
        upperId: 'Buat diagram alur permintaan sopan → tanggapan → terima kasih'
      },
      { 
        type: 'Politeness Traffic Light', 
        typeId: 'Lampu Lalu Lintas Kesopanan',
        lower: 'Red (Rude), Yellow (Okay), Green (Polite) circles with examples.', 
        lowerId: 'Lingkaran Merah (Kasar), Kuning (Biasa), Hijau (Sopan) dengan contoh.',
        upper: 'Same, but write more complex example phrases for each color.',
        upperId: 'Sama, tapi tulis frasa contoh yang lebih kompleks untuk setiap warna.'
      }
    ],
    share: {
      lower: {
        title: 'Gallery Walk & Class Favorite',
        titleId: 'Gallery Walk & Favorit Kelas',
        description: 'Stand by your desk and showcase your drawing. Choose a friend to make your request to!',
        descriptionId: 'Berdirilah di samping mejamu dan pamerkan gambarmu. Pilih seorang teman untuk mengajukan permintaanmu!',
        activity: 'A: "Could you please ______?" B: "Yes, certainly!" (Then vote for the favorite and draw 😊/😐/😞)',
        activityId: 'A: "Could you please ______?" B: "Yes, certainly!" (Lalu pilih favorit dan gambar 😊/😐/😞)',
      },
      assessment: {
        lower: ['I can ask "Could you please...?"', 'I remember to say thank you.'],
        lowerId: ['Saya bisa bertanya "Bolehkah kamu...?"', 'Saya ingat untuk mengucapkan terima kasih.'],
        upper: ['I learned to ask: "Would you mind...?"', 'I will use more polite phrases.'],
        upperId: ['Saya belajar bertanya: "Apakah kamu keberatan...?"', 'Saya akan menggunakan lebih banyak ungkapan sopan.']
      },
      upper: {
        title: 'Speed Requesting & Awards',
        titleId: 'Speed Requesting & Penghargaan',
        description: 'Stand in two lines and rotate to practice your requests with different partners.',
        descriptionId: 'Berdirilah dalam dua baris dan berputar untuk melatih permintaanmu dengan pasangan yang berbeda.',
        activity: 'A: "Would you mind ______?" B: "Not at all!" (Award the Request Master and self-assess)',
        activityId: 'A: "Would you mind ______?" B: "Not at all!" (Berikan penghargaan Request Master dan penilaian diri)'
      }
    },
    lessonTasks: [
      {
        title: 'PART 3: CREATE',
        titleId: 'BAGIAN 3: MEMBUAT',
        time: '10 min',
        lower: '“Polite Hand” Drawing: Trace your hand and write ONE polite request inside. Decorate but do NOT cut.',
        lowerId: 'Gambar "Tangan Sopan": Jiplak tanganmu dan tulis SATU permintaan sopan di dalamnya. Hias tapi JANGAN digunting.',
        upper: '“Request Card”: Write ONE polite request using “Would you mind…?” on your card and decorate simply.',
        upperId: '“Kartu Permintaan”: Tulis SATU permintaan sopan menggunakan “Would you mind…?” di kartumu dan hias dengan sederhana.'
      },
      {
        title: 'PART 4: SHARE & ASSESS',
        titleId: 'BAGIAN 4: BERBAGI & PENILAIAN',
        time: '15 min',
        lower: 'Gallery Walk & Invite a Friend (8m), Class Favorite Vote (4m), Self-Assessment (3m).',
        lowerId: 'Gallery Walk & Undang Teman (8m), Pemilihan Favorit Kelas (4m), Penilaian Diri (3m).',
        upper: 'Speed Requesting (8m), “Best Request” Award (4m), Self-Assessment (3m).',
        upperId: 'Speed Requesting (8m), Penghargaan "Permintaan Terbaik" (4m), Penilaian Diri (3m).'
      }
    ],
    templates: [
      {
        title: 'Lower Grades – Hand Drawing Template',
        titleId: 'Templat Gambar Tangan – Kelas Bawah',
        image: 'https://i.pinimg.com/736x/c3/96/1d/c3961d275caef78ecfe74cac6d7e9a2a.jpg',
        content: `Instructions:
1. Trace your hand on a blank paper.
2. Write "Could you please...?" inside.
3. Decorate it beautifully!`
      },
      {
        title: 'Upper Grades – Request Card Template',
        titleId: 'Templat Kartu Permintaan – Kelas Atas',
        image: 'https://i.pinimg.com/736x/05/a5/83/05a583b9d4a42bdcdca8e0313d02769e.jpg',
        content: `Instructions:
1. Use the image for inspiration.
2. Write ONE polite request using “Would you mind…?”
3. Examples:
   • Would you mind opening the window?
   • Would you mind helping me carry this?
4. Decorate simply with a border or drawing.`
      }
    ],
    roleplay: {
      lower: [
        {
          title: 'The Helpful Hero 🦸',
          titleId: 'Pahlawan Penolong 🦸',
          scenario: 'Your friend is carrying too many heavy books and they are about to fall!',
          scenarioId: 'Temanmu membawa terlalu banyak buku berat dan hampir jatuh!',
          npcPrompt: 'Friend: "Oh no! These books are so heavy! I think I\'m going to drop them!"',
          npcPromptId: 'Teman: "Oh tidak! Buku-buku ini berat sekali! Sepertinya aku akan menjatuhkannya!"',
          suggestedPhrases: ['Could you please let me help?', 'Can I carry some for you?', 'I can help you!'],
          suggestedPhrasesId: ['Bolehkah saya membantu?', 'Bisa saya bawakan sebagian?', 'Saya bisa membantumu!'],
          outcome: 'You saved the books! Your friend is very happy and says "Thank you so much!"',
          outcomeId: 'Kamu menyelamatkan buku-bukunya! Temanmu sangat senang dan berkata "Terima kasih banyak!"'
        }
      ],
      upper: [
        {
          title: 'The Polite Negotiator 🤝',
          titleId: 'Negosiator Sopan 🤝',
          scenario: 'You need to borrow a special laptop from the teacher for your project, but the teacher is very busy.',
          scenarioId: 'Kamu perlu meminjam laptop khusus dari guru untuk proyekmu, tetapi guru sangat sibuk.',
          npcPrompt: 'Teacher: "I have so much grading to do right now. What is it that you need?"',
          npcPromptId: 'Guru: "Saya punya banyak sekali tugas untuk dinilai sekarang. Apa yang kamu butuhkan?"',
          suggestedPhrases: ['Would you mind if I borrowed the laptop?', 'Could you please assist me with the project equipment?', 'I was wondering if I could use the laptop for a moment?'],
          suggestedPhrasesId: ['Apakah Anda keberatan jika saya meminjam laptop?', 'Bisakah Anda membantu saya dengan peralatan proyek?', 'Saya bertanya-tanya apakah saya bisa menggunakan laptop sebentar?'],
          outcome: 'The teacher was impressed by your politeness and let you borrow the laptop! Success!',
          outcomeId: 'Guru terkesan dengan kesopananmu dan mengizinkanmu meminjam laptop! Berhasil!'
        }
      ]
    }
  },
  {
    id: 'hunting-high-low',
    title: 'HUNTING HIGH AND LOW',
    titleId: 'MENCARI KE SANA KEMARI',
    badge: 'Week 7 🔍',
    description: 'Today we are treasure hunters! We will give clues to help our friends find hidden treasure while learning prepositions.',
    descriptionId: 'Hari ini kita adalah pemburu harta karun! Kita akan memberikan petunjuk untuk membantu teman-teman menemukan harta karun tersembunyi sambil mempelajari kata depan.',
    goals: {
      lower: "I can say where things are using in, on, and under.",
      lowerId: 'Saya bisa menyebutkan di mana benda berada menggunakan in, on, dan under.',
      upper: "I can describe positions using 6+ prepositions and give helpful directions.",
      upperId: 'Saya bisa menjelaskan posisi menggunakan 6+ kata depan dan memberikan petunjuk yang bermanfaat.'
    },
    materials: [
      'PPT Slides (display mode)',
      '1 "treasure" (sticker, candy, or small eraser)',
      'Small sticky notes or slips of paper (3 per pair)',
      'A small box (for the "IN" demonstration)'
    ],
    materialsId: [
      'Slide PPT (mode tampilan)',
      '1 "harta karun" (stiker, permen, atau penghapus kecil)',
      'Catatan tempel kecil atau potongan kertas (3 per pasangan)',
      'Kotak kecil (untuk demonstrasi "IN")'
    ],
    
    keyPhrases: {
      lower: [
        'Is it IN the box?',
        'Is it ON the table?',
        'Is it UNDER the chair?',
        'FAR / VERY FAR',
        'CLOSE / VERY CLOSE'
      ],
      lowerId: [
        'Apakah itu di dalam kotak?',
        'Apakah itu di atas meja?',
        'Apakah itu di bawah kursi?',
        'JAUH / SANGAT JAUH',
        'DEKAT / SANGAT DEKAT'
      ],
      upper: [
        'Is it NEXT TO the bookshelf?',
        'Is it BEHIND the door?',
        'Is it IN FRONT OF the board?',
        'Is it BETWEEN the desks?',
        'Is it ABOVE the clock?',
        'FAR / CLOSE / VERY CLOSE'
      ],
      upperId: [
        'Apakah itu di samping rak buku?',
        'Apakah itu di belakang pintu?',
        'Apakah itu di depan papan tulis?',
        'Apakah itu di antara meja?',
        'JAUH / DEKAT / SANGAT DEKAT'
      ]
    },
    vocab: {
      lower: [
        { word: 'in', meaning: 'inside something', meaningId: 'di dalam', example: 'Is it in the box?', exampleId: 'Apakah itu di dalam kotak?', emoji: '📥', image: 'https://i.pinimg.com/736x/58/bf/43/58bf431957ad133406a248de203e7add.jpg' },
        { word: 'on', meaning: 'on top of something', meaningId: 'di atas', example: 'Is it on the table?', exampleId: 'Apakah itu di atas meja?', emoji: '🔝', image: 'https://i.pinimg.com/736x/78/8e/27/788e27a72d09c681408d63c8953e05a7.jpg' },
        { word: 'under', meaning: 'below something', meaningId: 'di bawah', example: 'Is it under the chair?', exampleId: 'Apakah itu di bawah kursi?', emoji: '📉', image: 'https://i.pinimg.com/736x/9d/90/1d/9d901dec09989f2f70b4aeab8ce73309.jpg' }
      ],
      upper: [
        { word: 'in', meaning: 'inside something', meaningId: 'di dalam', example: 'Is it in the box?', exampleId: 'Apakah itu di dalam kotak?', emoji: '📥', image: 'https://i.pinimg.com/736x/58/bf/43/58bf431957ad133406a248de203e7add.jpg' },
        { word: 'on', meaning: 'on top of something', meaningId: 'di atas', example: 'Is it on the table?', exampleId: 'Apakah itu di atas meja?', emoji: '🔝', image: 'https://i.pinimg.com/736x/78/8e/27/788e27a72d09c681408d63c8953e05a7.jpg' },
        { word: 'under', meaning: 'below something', meaningId: 'di bawah', example: 'Is it under the chair?', exampleId: 'Apakah itu di bawah kursi?', emoji: '📉', image: 'https://i.pinimg.com/736x/9d/90/1d/9d901dec09989f2f70b4aeab8ce73309.jpg' },
        { word: 'next to', meaning: 'beside something', meaningId: 'di samping', example: 'Is it next to the book?', exampleId: 'Apakah itu di samping buku?', emoji: '➡️', image: 'https://i.pinimg.com/736x/f5/6b/d6/f56bd6e4da565bb3c26d6625b49750b2.jpg' },
        { word: 'behind', meaning: 'at the back of', meaningId: 'di belakang', example: 'Is it behind the door?', exampleId: 'Apakah itu di belakang pintu?', emoji: '🔙', image: 'https://i.pinimg.com/736x/60/44/e4/6044e401c38edd1ede6b9b28da2ef98b.jpg' },
        { word: 'in front of', meaning: 'at the front', meaningId: 'di depan', example: 'Is it in front of the teacher?', exampleId: 'Apakah itu di depan guru?', emoji: '🏠', image: 'https://i.pinimg.com/1200x/80/36/a9/8036a9d0dffedb88ef62ac2071e14db8.jpg' },
        { word: 'between', meaning: 'in the middle of two things', meaningId: 'di antara', example: 'Is it between two desks?', exampleId: 'Apakah itu di antara dua meja.', emoji: '↔️', image: 'https://i.pinimg.com/736x/8d/a2/6a/8da26a5798ce1f1742834306dd8ff259.jpg' },
        { word: 'above', meaning: 'higher than something', meaningId: 'di atas (mengambang)', example: 'Is it above the clock?', exampleId: 'Apakah itu di atas jam?', emoji: '☁️', image: 'https://i.pinimg.com/736x/d3/74/d9/d374d94efbb18c5b9e6f7f115ee6f7dd.jpg' }
      ]
    },
    scramble: {
      lower: [
        { situation: 'Asking if it is "IN" 📥', situationId: 'Bertanya apakah itu di dalam 📥', words: ['Is', 'it', 'in', 'the', 'box', '?'], answer: 'Is it in the box?' },
        { situation: 'Asking if it is "ON" 🔝', situationId: 'Bertanya apakah itu di atas 🔝', words: ['Is', 'it', 'on', 'the', 'table', '?'], answer: 'Is it on the table?' }
      ],
      upper: [
        { situation: 'Checking "NEXT TO" ➡️', situationId: 'Memeriksa "di samping" ➡️', words: ['Is', 'it', 'next', 'to', 'the', 'book', '?'], answer: 'Is it next to the book?' },
        { situation: 'Checking "BEHIND" 🔙', situationId: 'Memeriksa "di belakang" 🔙', words: ['Is', 'it', 'behind', 'the', 'door', '?'], answer: 'Is it behind the door?' }
      ]
    },
    chat: {
      lower: [
        {
          npc: '🔎 Hunter: "I am looking for the treasure! Give me a question hint!"',
          npcId: '🔎 Pemburu: "Aku mencari harta karun! Beri aku petunjuk pertanyaan!"',
          turns: [
            {
              choices: [
                { text: "Is it UNDER the chair?", textId: 'Apakah itu di bawah kursi?', points: 3, feedback: 'Perfect question! ⭐', feedbackId: 'Pertanyaan sempurna! ⭐' },
                { text: "It is under the chair.", textId: 'Itu di bawah kursi.', points: 1, feedback: 'Ask it as a question!', feedbackId: 'Tanyakan sebagai pertanyaan!' }
              ]
            }
          ]
        }
      ],
      upper: [
        {
          npc: '🔎 Partner: "I need to find the gold! Is it somewhere near the desk?"',
          npcId: '🔎 Partner: "Aku perlu menemukan emasnya! Apakah ada di dekat meja?"',
          turns: [
            {
              choices: [
                { text: "Is it NEXT TO the pencil case?", textId: 'Apakah itu di samping kotak pensil?', points: 3, feedback: 'Great question! 🎯', feedbackId: 'Pertanyaan bagus! 🎯' },
                { text: "Is it BEHIND the door?", textId: 'Apakah itu di belakang pintu?', points: 3, feedback: 'Good use of "behind"!', feedbackId: 'Penggunaan "behind" yang bagus!' }
              ]
            }
          ]
        }
      ]
    },
    quiz: [
      { situation: 'Which word means "di bawah"?', situationId: 'Kata mana yang berarti "di bawah"?', options: ['In', 'On', 'Under', 'Next to'], optionsId: ['In', 'On', 'Under', 'Next to'], correctIndex: 2 },
      { situation: 'The treasure is hidden. You can\'t see it because it is _____ the door.', situationId: 'Harta karunnya tersembunyi. Kamu tidak bisa melihatnya karena itu _____ pintu.', options: ['On', 'Behind', 'In front of', 'Between'], optionsId: ['On', 'Behind', 'In front of', 'Between'], correctIndex: 1 }
    ],
    meter: {
      lower: [
        { text: "It's UNDER the chair.", textId: 'Itu di bawah kursi.', score: 3, explanation: 'Clear and correct!', explanationId: 'Jelas dan benar!', betterVersion: '' },
      ],
      upper: [
        { text: "The treasure is BETWEEN the two books.", textId: 'Harta karunnya di antara dua buku.', score: 3, explanation: 'Excellent use of "between"! 💎', explanationId: 'Penggunaan "between" yang luar biasa! 💎', betterVersion: '' }
      ]
    },
    physicalOutput: {
      lower: {
        title: 'CREATE - Treasure Map',
        titleId: 'KREASI - Peta Harta Karun',
        steps: [
          'Draw a simple map of the classroom.',
          'Mark an X: "My treasure is HERE!"',
          'Write ONE clue as a QUESTION: "Is it UNDER the chair?"',
          'No cutting, just draw and write.'
        ],
        stepsId: [
          'Gambar peta sederhana dari ruang kelas.',
          'Beri tanda X: "Harta karunku ada di SINI!"',
          'Tulis SATU petunjuk sebagai PERTANYAAN: "Is it UNDER the chair?"',
          'Tidak perlu menggunting, cukup gambar dan tulis.'
        ],
        keep: 'Keep it in your notebook.',
        keepId: 'Simpan di buku catatanmu.',
        example: 'X marks the spot. Question: "Is it UNDER the table?"',
        exampleId: 'Tanda X. Pertanyaan: "Is it UNDER the table?"'
      },
      upper: {
        title: 'CREATE - Clue Card Challenge',
        titleId: 'KREASI - Tantangan Kartu Petunjuk',
        steps: [
          'Write 4 clues as QUESTIONS for a hidden treasure.',
          'Must use 4 different prepositions: IN, ON, UNDER, NEXT TO.',
          'Trade with a partner.',
          'Partner asks the questions to find treasure using FAR/CLOSE.'
        ],
        stepsId: [
          'Tulis 4 petunjuk sebagai PERTANYAAN untuk harta karun.',
          'Wajib menggunakan 4 kata depan: IN, ON, UNDER, NEXT TO.',
          'Tukar dengan teman.',
          'Teman menanyakan pertanyaan untuk menemukan harta karun menggunakan FAR/CLOSE.'
        ],
        keep: 'Write it in your journal.',
        keepId: 'Tulis di jurnalmu.',
        example: '1. Is it NEXT TO the clock? 2. Is it BEHIND the book?',
        exampleId: '1. Is it NEXT TO the clock? 2. Is it BEHIND the book?'
      }
    },
    lessonTasks: [
      {
        title: 'Practice Game',
        titleId: 'Permainan Latihan',
        time: '7 min',
        lower: '• Choose a hunter.\n• Hide the gold.\n• Class practices "CLOSE" or "FAR" as the hunter asks "Is it ON the...?"',
        lowerId: '• Pilih pemburu.\n• Sembunyikan emas.\n• Kelas berlatih "CLOSE" atau "FAR" saat pemburu bertanya "Is it ON the...?"',
        upper: '• Use "Hot or Cold" rules.\n• Hunter must use complex prepositions like "BEHIND" or "NEXT TO".',
        upperId: '• Gunakan aturan "Hot or Cold".\n• Pemburu harus menggunakan kata depan kompleks seperti "BEHIND" atau "NEXT TO".',
      },
  
    ],
    share: {
      lower: {
        title: 'SHOWCASE: Blindfold Challenge',
        titleId: 'SHOWCASE: Tantangan Penutup Mata',
        description: 'One student closes eyes. Partner guides with clues: "Walk NEXT TO the desk. Stop! It\'s UNDER the chair!"',
        descriptionId: 'Satu siswa menutup mata. Partner memandu dengan petunjuk: "Jalan di SAMPING meja. Berhenti! Itu di BAWAH kursi!"',
        activity: 'A: "Is it UNDER the chair?" B: "Yes! Class: CHEER!"',
        activityId: 'A: "Apakah di BAWAH kursi?" B: "Ya! Kelas: BERSORAK!"'
      },
      upper: {
        title: 'SHOWCASE: Beat the Clock',
        titleId: 'SHOWCASE: Kalahkan Waktu',
        description: 'Pairs race to find hidden treasure using FULL sentences: "It\'s NEXT TO the bookshelf, not NEXT TO the door!"',
        descriptionId: 'Pasangan berlomba menemukan harta tersembunyi menggunakan kalimat LENGKAP: "Itu di SAMPING rak buku, bukan di SAMPING pintu!"',
        activity: 'A: "Is it BEHIND the board?" B: "YES! You are the Master Treasure Hunter!"',
        activityId: 'A: "Apakah di BELAKANG papan?" B: "YA! Kamu adalah Master Treasure Hunter!"',
      },
      assessment: {
        lower: ['I placed a treasure sticker on my hand.', 'I told my partner where it is: "It\'s ON my hand!"'],
        lowerId: ['Saya menempelkan stiker harta di tangan.', 'Saya memberi tahu teman di mana itu: "It\'s ON my hand!"'],
        upper: ['I found the treasure using full sentences.', 'I wrote my favorite clue in my journal.'],
        upperId: ['Saya menemukan harta menggunakan kalimat lengkap.', 'Saya menulis petunjuk favorit saya di jurnal.']
      }
    },
    templates: [
      {
        title: 'TREASURE MAP TEMPLATE',
        titleId: 'TEMPLAT PETA HARTA KARUN',
        image: 'https://i.pinimg.com/736x/b7/86/16/b78616713be928da4440933a74eec459.jpg',
        content: '[Template for drawing your own treasure map]'
      },
      {
        title: 'Clue card template',
        titleId: 'Templat kartu petunjuk',
        image: 'https://i.pinimg.com/1200x/6b/70/1e/6b701ef598a338186411917011f8fb8e.jpg',
        content: '[Template for writing clues behind/under/on top of things]'
      }
    ],
    roleplay: {
      lower: [
        {
          title: 'Where Is My Eraser? 🔎',
          titleId: 'Di Mana Penghapusku? 🔎',
          scenario: 'Your friend lost their eraser and you are helping them look for it.',
          scenarioId: 'Temanmu kehilangan penghapusnya dan kamu membantunya mencari.',
          npcPrompt: 'Friend: "Oh no! I can\'t find my eraser! Where is it?"',
          npcPromptId: 'Teman: "Oh tidak! Aku tidak bisa menemukan penghapusku! Di mana itu?"',
          suggestedPhrases: ["It's in your bag.", "It's on the teacher's desk.", "It's under your chair."],
          suggestedPhrasesId: ['Itu di dalam tasmu.', 'Itu di atas meja guru.', 'Itu di bawah kursimu.'],
          outcome: 'Your friend found the eraser and is very happy! Success!',
          outcomeId: 'Temanmu menemukan penghapusnya dan merasa sangat senang! Berhasil!'
        }
      ],
      upper: [
        {
          title: 'Classroom Detective 🕵️‍♂️',
          titleId: 'Detektif Kelas 🕵️‍♂️',
          scenario: 'One student hides the Class Mascot. You have to give directions to find it.',
          scenarioId: 'Satu siswa menyembunyikan Maskot Kelas. Kamu harus memberikan petunjuk untuk menemukannya.',
          npcPrompt: 'Classmate: "Okay, I hid the mascot. Give me a hint!"',
          npcPromptId: 'Teman sekelas: "Oke, aku sudah sembunyikan maskotnya. Beri aku petunjuk!"',
          suggestedPhrases: ["It's behind the blue curtains.", "It's next to the bookshelf.", "It's in front of the window."],
          suggestedPhrasesId: ['Itu di belakang tirai biru.', 'Itu di samping rak buku.', 'Itu di depan jendela.'],
          outcome: 'You safely guided your classmate to the hidden mascot!',
          outcomeId: 'Kamu berhasil memandu teman sekelasmu ke maskot yang tersembunyi!'
        }
      ]
    }
  },
  {
    id: 'pat-on-back',
    title: 'PAT ON THE BACK',
    titleId: 'BERIKAN PUJIAN',
    badge: 'Week 8 👏',
    description: "IDIOM: 'Pat on the Back' = to give someone praise or recognition for something they did well. Example: 'She gave him a pat on the back for finishing his homework on time.'",
    descriptionId: "IDIOM: 'Pat on the Back' = memberikan pujian atau pengakuan kepada seseorang atas sesuatu yang mereka kerjakan dengan baik. Contoh: 'Dia memberikan pujian kepadanya karena menyelesaikan PR tepat waktu.'",
    goals: {
      lower: "I can give a simple compliment using 'Good job!' or 'Nice!'",
      lowerId: 'Saya bisa memberikan pujian sederhana menggunakan "Good job!" atau "Nice!"',
      upper: "I can give a specific compliment using 'You are good at...' and respond politely",
      upperId: 'Saya bisa memberikan pujian spesifik menggunakan "You are good at..." dan menanggapi dengan sopan'
    },
    materials: [
      'PPT Slides (display mode)',
      'Small slips of paper (1 per student)',
      'A hat, bowl, or small box',
      'Paper for star craft (1 per student)',
      'Markers or crayons',
      'Scissors (optional)'
    ],
    materialsId: [
      'Slide PPT (mode tampilan)',
      'Potongan kertas kecil (1 per siswa)',
      'Topi, mangkuk, atau kotak kecil',
      'Kertas untuk kerajinan bintang (1 per siswa)',
      'Spidol atau krayon',
      'Gunting (opsional)'
    ],
    keyPhrases: {
      lower: [
        'Good job, [Name]!',
        'Great work, [Name]!',
        'Nice smile, [Name]!',
        'You are kind, [Name]!',
        'You are funny, [Name]!',
        'Good job on drawing, [Name]!',
        'RESPONSE: Thank you!'
      ],
      lowerId: [
        'Kerja bagus, [Name]!',
        'Pekerjaan hebat, [Name]!',
        'Senyum yang manis, [Name]!',
        'Kamu baik, [Name]!',
        'Kamu lucu, [Name]!',
        'Kerja bagus dalam menggambar, [Name]!',
        'TANGGAPAN: Terima kasih!'
      ],
      upper: [
        'You are good at ______.',
        'I like your ______ because ______.',
        'Thank you for ______.',
        'I admire how you ______.',
        'You have improved at ______.',
        'RESPONSES: Thank you! / I appreciate that!'
      ],
      upperId: [
        'Kamu pintar dalam ______.',
        'Aku suka ______ mu karena ______.',
        'Terima kasih atas ______.',
        'Aku kagum bagaimana kamu ______.',
        'Kamu telah meningkat dalam ______.',
        'TANGGAPAN: Terima kasih! / Saya menghargai itu!'
      ]
    },
    vocab: {
      lower: [
        { word: 'good', meaning: 'baik/bagus', meaningId: 'baik/bagus', example: 'Good job!', exampleId: 'Kerja bagus!', emoji: '👍', image: 'src/assets/images/regenerated_image_1777862534560.jpg' },
        { word: 'great', meaning: 'hebat', meaningId: 'hebat', example: 'Great work!', exampleId: 'Pekerjaan hebat!', emoji: '🙌', image: 'https://media.tenor.com/q-GJP35YYd4AAAAm/ebichu-great-job.webp' },
        { word: 'nice', meaning: 'bagus', meaningId: 'bagus', example: 'Nice drawing!', exampleId: 'Gambar yang bagus!', emoji: '😊', image: 'https://media.tenor.com/N5oakgmYvTMAAAAm/doraemon-dorami.webp' },
        { word: 'proud', meaning: 'bangga', meaningId: 'bangga', example: "I'm proud of you!", exampleId: 'Aku bangga padamu!', emoji: '🦁', image: 'https://media.tenor.com/UAKZiKaBOzIAAAAm/dog-gag.webp' },
        { word: 'awesome', meaning: 'keren', meaningId: 'keren', example: 'Awesome!', exampleId: 'Keren!', emoji: '💥', image: 'https://media.tenor.com/LZaTQSHkX5sAAAAm/plan-b-planbee.webp' },
        { word: 'thank you', meaning: 'terima kasih', meaningId: 'terima kasih', example: 'Thank you!', exampleId: 'Terima kasih!', emoji: '🙏', image: 'https://media.tenor.com/9Jlp55r7G1oAAAAm/milk-and-mocha.webp' }
      ],
      upper: [
        { word: 'good', meaning: 'baik/bagus', meaningId: 'baik/bagus', example: 'Good job!', exampleId: 'Kerja bagus!', emoji: '👍', image: 'https://media.tenor.com/0HvAgQ02sHYAAAAm/nice.webp' },
        { word: 'great', meaning: 'hebat', meaningId: 'hebat', example: 'Great work!', exampleId: 'Pekerjaan hebat!', emoji: '🙌', image: 'https://media.tenor.com/bQsP43yE344AAAAM/minions.gif' },
        { word: 'nice', meaning: 'bagus', meaningId: 'bagus', example: 'Nice drawing!', exampleId: 'Gambar yang bagus!', emoji: '😊', image: 'https://media.tenor.com/72l6j2teSr4AAAAM/nice.gif' },
        { word: 'proud', meaning: 'bangga', meaningId: 'bangga', example: "I'm proud of you!", exampleId: 'Aku bangga padamu!', emoji: '🦁', image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDNnd2tzOHE4dDRxaHd6ZG5wb2k2OXVqdHByMzhsOTF3OWl2Y2hsayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hs7Pvg2O3dFqliXKAl/200.webp' },
        { word: 'awesome', meaning: 'keren', meaningId: 'keren', example: 'Awesome!', exampleId: 'Keren!', emoji: '💥', image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2VpdnJwZDk4bTBma2tvYXduOXhzamRxaGpkbHlpanI4Yzk1ejh5ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohzdIuqJoo8QdKlnW/100.webp' },
        { word: 'thank you', meaning: 'terima kasih', meaningId: 'terima kasih', example: 'Thank you!', exampleId: 'Terima kasih!', emoji: '🙏', image: 'https://media.tenor.com/LSkCk2Re7EAAAAm/ty.webp' },
        { word: 'talented', meaning: 'berbakat', meaningId: 'berbakat', example: 'You are talented at art.', exampleId: 'Kamu berbakat dalam seni.', emoji: '⭐', image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWhwaG52c3BoZGNxNGE0bWp0aDc0aDd4NmZ3Z3pxdGRwc2k0N2lseCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dDU4QMhWK8yVa/giphy.webp' },
        { word: 'hard work', meaning: 'kerja keras', meaningId: 'kerja keras', example: 'That was hard work!', exampleId: 'Itu adalah kerja keras!', emoji: '💪', image: 'https://media.tenor.com/p_UIyQ16z58AAAAm/abster-abstract.webp' },
        { word: 'appreciate', meaning: 'menghargai', meaningId: 'menghargai', example: 'I appreciate your help.', exampleId: 'Saya menghargai bantuanmu.', emoji: '💖', image: 'https://media.tenor.com/MmWv57ablikAAAAM/dj-khaled-i-appreciate-you.gif' },
        { word: 'admire', meaning: 'mengagumi', meaningId: 'mengagumi', example: 'I admire your patience.', exampleId: 'Saya mengagumi kesabaranmu.', emoji: '👀', image: 'https://media.tenor.com/jniJ6APTKvkAAAAM/in-love-anticipation.gif' },
        { word: 'improve', meaning: 'meningkat', meaningId: 'meningkat', example: "You've improved so much!", exampleId: 'Kamu sudah banyak meningkat!', emoji: '📈', image: 'https://media.tenor.com/P-kTdpK4oMEAAAAm/shremp-shremps.webp' }
      ]
    },
    scramble: {
      lower: [
        { situation: 'Giving a compliment 🌟', situationId: 'Memberikan pujian 🌟', words: ['You', 'are', 'good', 'at', 'singing', '.'], answer: 'You are good at singing.' }
      ],
      upper: [
        { situation: 'Admiring a quality 💖', situationId: 'Mengagumi sebuah kualitas 💖', words: ['I', 'admire', 'your', 'patience', 'in', 'class', '.'], answer: 'I admire your patience in class.' }
      ]
    },
    chat: {
      lower: [
        {
          npc: '👩 Teacher: "You did a great job on your drawing today!"',
          npcId: '👩 Guru: "Kamu melakukan pekerjaan hebat pada gambarmu hari ini!"',
          turns: [
            {
              choices: [
                { text: 'Thank you!', textId: 'Terima kasih!', points: 3, feedback: 'Perfect response! 😊', feedbackId: 'Tanggapan sempurna! 😊' },
                { text: 'I know.', textId: 'Aku tahu.', points: 1, feedback: 'A bit too confident, try being polite!', feedbackId: 'Sedikit terlalu percaya diri, cobalah bersikap sopan!' }
              ]
            }
          ]
        }
      ],
      upper: [
        {
          npc: '🤝 Friend: "I really appreciate how you helped me with my math homework."',
          npcId: '🤝 Teman: "Aku sangat menghargai bantuanmu dengan PR matematikaku."',
          turns: [
            {
              choices: [
                { text: 'You\'re welcome! I\'m happy to help.', textId: 'Sama-sama! Aku senang membantu.', points: 3, feedback: 'Kind and professional! ⭐', feedbackId: 'Baik dan profesional! ⭐' },
                { text: 'It was easy.', textId: 'Itu gampang.', points: 1, feedback: 'Try to acknowledge their appreciation more warmly!', feedbackId: 'Cobalah untuk mengakui apresiasi mereka dengan lebih hangat!' }
              ]
            }
          ]
        }
      ]
    },
    quiz: [
      { situation: 'Which phrase is a compliment?', situationId: 'Frasa mana yang merupakan pujian?', options: ['Go away.', 'Good job!', 'I am hungry.', 'Where is it?'], optionsId: ['Pergi sana.', 'Kerja bagus!', 'Aku lapar.', 'Di mana itu?'], correctIndex: 1 },
      { situation: 'How should you respond to a compliment?', situationId: 'Bagaimana seharusnya kamu menanggapi pujian?', options: ['Say "Thank you"', 'Run away', 'Say "No"', 'Ignore it'], optionsId: ['Ucapkan "Terima kasih"', 'Lari', 'Ucapkan "Tidak"', 'Abaikan'], correctIndex: 0 }
    ],
    physicalOutput: {
      lower: {
        title: 'CREATE - Simple Star',
        titleId: 'KREASI - Bintang Sederhana',
        steps: [
          'Draw a big star on your paper.',
          'Write ONE compliment word in the center (GOOD, NICE, GREAT, KIND, SMART).',
          'On the other side, write a sentence with that compliment word.',
          'Color and decorate your star.'
        ],
        stepsId: [
          'Gambar bintang besar di kertasmu.',
          'Tulis SATU kata pujian di tengah (GOOD, NICE, GREAT, KIND, SMART).',
          'Di sisi balik, tulis satu kalimat dengan kata pujian tersebut.',
          'Warnai dan hias bintangmu.'
        ],
        keep: 'Practice saying: "Good job, friend!"',
        keepId: 'Berlatihlah mengucapkan: "Good job, friend!"',
        example: 'Star with "GREAT" in the middle.',
        exampleId: 'Bintang dengan kata "GREAT" di tengah.'
      },
      upper: {
        title: 'CREATE - Star Compliment',
        titleId: 'KREASI - Bintang Pujian',
        steps: [
          'Draw a big star on your paper.',
          'Write ONE compliment word in the center (GOOD, NICE, GREAT, KIND, SMART).',
          'On the other side, write a sentence with that compliment word.',
          'Color and decorate your star.'
        ],
        stepsId: [
          'Gambar bintang besar di kertasmu.',
          'Tulis SATU kata pujian di tengah (GOOD, NICE, GREAT, KIND, SMART).',
          'Di sisi balik, tulis satu kalimat dengan kata pujian tersebut.',
          'Warnai dan hias bintangmu.'
        ],
        keep: 'Give it to the person you wrote about!',
        keepId: 'Berikan kepada orang yang kamu tulis!',
        example: 'Dear friend, I give you a pat on the back because...',
        exampleId: 'Temanku, aku memberimu pujian karena...'
      }
    },
    lessonTasks: [],
    sentenceFrames: {
      lower: [
        { en: "You are [GOOD]!", id: "Kamu sangat [BAIK]!" },
        { en: "Great work, friend!", id: "Kerja hebat, teman!" },
        { en: "That is so [NICE]!", id: "Itu sangat [BAGUS]!" },
        { en: "Awesome job!", id: "Pekerjaan yang keren!" },
        { en: "I'm proud of you!", id: "Aku bangga padamu!" },
        { en: "You are smart!", id: "Kamu pintar!" }
      ],
      upper: [
        { en: "I really admire your [ADMIRE]!", id: "Aku sangat mengagumi [KEUNGGULAN]mu!" },
        { en: "You are talented at [ART]!", id: "Kamu berbakat dalam [SENI]!" },
        { en: "I appreciate your hard work!", id: "Aku menghargai kerja kerasmu!" },
        { en: "Give yourself a pat on the back for [IMPROVING]!", id: "Pujilah dirimu sendiri atas [PENINGKATAN]mu!" },
        { en: "That's an awesome achievement!", id: "Itu adalah pencapaian yang keren!" },
        { en: "I'm so proud of your progress!", id: "Aku sangat bangga dengan kemajuanmu!" }
      ]
    },
    share: {
      lower: {
        title: 'SHOWCASE: Hold Up Stars',
        titleId: 'SHOWCASE: Angkat Bintang',
        description: 'Hold up your stars. 3 students share their word aloud. Class repeats with gesture.',
        descriptionId: 'Angkat bintangmu. 3 siswa membagikan kata-kata mereka. Kelas mengulang dengan gerakan.',
        activity: 'Thumbs up check: "I can give a compliment today!"',
        activityId: 'Cek jempol ke atas: "Saya bisa memberikan pujian hari ini!"'
      },
      upper: {
        title: 'SHOWCASE: Exchange Stars',
        titleId: 'SHOWCASE: Tukar Bintang',
        description: 'Exchange stars with a partner. Partner reads compliments aloud.',
        descriptionId: 'Tukar bintang dengan pasangan. Pasangan membaca pujian dengan keras.',
        activity: 'Quick Write: "One compliment I received was..."',
        activityId: 'Tulis Cepat: "Satu pujian yang saya terima adalah..."',
      },
      assessment: {
        lower: ['I can give a simple compliment.', 'I used gestures for vocab.'],
        lowerId: ['Saya bisa memberikan pujian sederhana.', 'Saya menggunakan gerakan untuk kosakata.'],
        upper: ['I can give specific compliments with "because".', 'I can respond politely to praise.'],
        upperId: ['Saya bisa memberikan pujian spesifik dengan "because".', 'Saya bisa menanggapi pujian dengan sopan.']
      }
    },
    templates: [
      {
        title: 'MY STAR (Lower Grades)',
        titleId: 'BINTANGKU (Kelas Kecil)',
        image: 'https://i.pinimg.com/736x/c1/c2/c3/c1c2c3c4c5c6c7c8c9c0c1c2c3c4c5c6.jpg',
        content: "[Simple Star Template for one-word compliments]"
      },
      {
        title: 'STAR CARD (Upper Grades)',
        titleId: 'KARTU BINTANG (Kelas Besar)',
        image: 'https://i.pinimg.com/736x/d1/d2/d3/d1d2d3d4d5d6d7d8d9d0d1d2d3d4d5d6.jpg',
        content: "[Detailed Star Template for front/back specific compliments]"
      }
    ],
    roleplay: {
      lower: [
        {
          title: 'The Kind Friend 💖',
          titleId: 'Teman yang Baik 💖',
          scenario: 'Your friend just finished a beautiful drawing. What do you say?',
          scenarioId: 'Temanmu baru saja menyelesaikan gambar yang indah. Apa yang kamu katakan?',
          npcPrompt: 'Friend: "Look at my new drawing of a space cat! Do you like it?"',
          npcPromptId: 'Teman: "Lihat gambar baru kucing angkasaku! Kamu suka?"',
          suggestedPhrases: ["Good job! It looks awesome.", "I like the colors you used.", "You are so talented!"],
          suggestedPhrasesId: ['Kerja bagus! Kelihatannya keren.', 'Aku suka warna yang kamu gunakan.', 'Kamu sangat berbakat!'],
          outcome: 'Your friend is beaming with pride and thanks you for the kind words!',
          outcomeId: 'Temanmu berseri-seri dengan bangga dan berterima kasih atas kata-kata baikmu!'
        }
      ],
      upper: [
        {
          title: 'Appreciation Master 🏅',
          titleId: 'Master Apresiasi 🏅',
          scenario: 'A classmate helped you understand a difficult math problem after class.',
          scenarioId: 'Seorang teman sekelas membantumu memahami soal matematika yang sulit setelah kelas.',
          npcPrompt: 'Classmate: "I\'m glad you finally understood that equation. It was tricky!"',
          npcPromptId: 'Teman sekelas: "Aku senang kamu akhirnya mengerti persamaan itu. Itu memang sulit!"',
          suggestedPhrases: ["I really appreciate your help.", "I admire how clearly you explain things.", "Thank you! You made it so much easier."],
          suggestedPhrasesId: ['Aku sangat menghargai bantuanmu.', 'Aku kagum betapa jelasnya kamu menjelaskan sesuatu.', 'Terima kasih! Kamu membuatnya jadi jauh lebih mudah.'],
          outcome: 'Your classmate feels valued and the friendship grows stronger! Positive vibes!',
          outcomeId: 'Teman sekelasmu merasa dihargai dan persahabatan kalian semakin kuat! Aura positif!'
        }
      ]
    }
  },
  {
    id: 'how-are-you-feeling',
    title: 'HOW ARE YOU FEELING?',
    badge: 'Week 9 😊',
    description: 'Expressing emotions and showing empathy. Let\'s talk about how we feel!',
    descriptionId: 'Mengekspresikan emosi dan menunjukkan empati. Mari bicara tentang perasaan kita!',
    goals: {
      lower: 'I can name 4 basic feelings and say how I feel today.',
      lowerId: 'Saya bisa menyebutkan 4 perasaan dasar dan mengatakan bagaimana perasaan saya hari ini.',
      upper: 'I can explain why I feel a certain way and respond to others with empathy.',
      upperId: 'Saya bisa menjelaskan mengapa saya merasakan hal tertentu dan merespons orang lain dengan empati.'
    },
    keyPhrases: {
      lower: [
        'How are you feeling?',
        'I feel happy today!',
        'I am sad because I lost my toy.',
        'It is okay to feel angry.'
      ],
      lowerId: [
        'Bagaimana perasaanmu?',
        'Aku merasa senang hari ini!',
        'Aku sedih karena mainanku hilang.',
        'Tidak apa-apa merasa marah.'
      ],
      upper: [
        'I feel nervous about the test.',
        'I am excited for the weekend!',
        'I understand how you feel.',
        'Is there anything I can do to help?'
      ],
      upperId: [
        'Aku merasa gugup menghadapi ujian.',
        'Aku bersemangat menyambut akhir pekan!',
        'Aku mengerti perasaanmu.',
        'Apa ada yang bisa aku bantu?'
      ]
    },
    vocab: {
      lower: [
        { word: 'happy', meaning: 'senang/bahagia', meaningId: 'senang/bahagia', example: 'I feel happy today!', exampleId: 'Aku merasa senang hari ini!', emoji: '😊', image: 'https://media.tenor.com/dEN66mMlhB8AAAAm/i-love-you.webp' },
        { word: 'sad', meaning: 'sedih', meaningId: 'sedih', example: 'I am sad right now.', exampleId: 'Aku sedang sedih sekarang.', emoji: '😢', image: 'https://media.tenor.com/EKrsFntSuSgAAAAm/sad.webp' },
        { word: 'angry', meaning: 'marah', meaningId: 'marah', example: 'It\'s okay to be angry.', exampleId: 'Tidak apa-apa merasa marah.', emoji: '😠', image: 'https://media.tenor.com/BrJjmVscA4YAAAAm/bubu-angry-bubu-fierce.webp' },
        { word: 'sleepy', meaning: 'mengantuk', meaningId: 'mengantuk', example: 'I am so sleepy.', exampleId: 'Aku sangat mengantuk.', emoji: '😴', image: 'https://media.tenor.com/nnY3r1WPbnAAAAAm/sleepy.webp' },
      ],
      upper: [
        { word: 'nervous', meaning: 'gugup', meaningId: 'gugup', example: 'I feel nervous about the test.', exampleId: 'Aku merasa gugup menghadapi ujian.', emoji: '😟', image: 'https://media.tenor.com/j8mTlPBfReMAAAAM/spongbobe.gif' },
        { word: 'excited', meaning: 'bersemangat', meaningId: 'bersemangat', example: 'I am excited for the trip!', exampleId: 'Aku bersemangat untuk karyawisata!', emoji: '🤩', image: 'https://media.tenor.com/j8mTlPBfReMAAAAM/spongbobe.gif' },
        { word: 'confused', meaning: 'bingung', meaningId: 'bingung', example: 'I am a bit confused.', exampleId: 'Aku agak bingung.', emoji: '🤔', image: 'https://media.tenor.com/CqTcYek3taEAAAAM/spongebob-spongebob-meme.gif' },
        { word: 'empathy', meaning: 'empati', meaningId: 'empati', example: 'Show empathy to your friends.', exampleId: 'Tunjukkan empati kepada teman-temanmu.', emoji: '🤝', image: 'https://media.tenor.com/CksAc6UQZDoAAAAM/fluffy-anto.gif' },
      ]
    },
    scramble: {
      lower: [
        { situation: 'How you feel today 🌟', words: ['I', 'feel', 'happy', 'because', 'it', 'is', 'sunny', '.'], answer: 'I feel happy because it is sunny.' },
      ],
      upper: [
        { situation: 'Feeling before a test 📝', words: ['I', 'am', 'nervous', 'about', 'the', 'math', 'test', 'today', '.'], answer: 'I am nervous about the math test today.' },
      ]
    },
    physicalOutput: {
      lower: {
        title: 'Feeling Face Craft',
        titleId: 'Kerajinan Wajah Perasaan',
        steps: [
          'Draw a big circle on your paper.',
          'Divide it into 4 parts.',
          'Draw 4 different feelings: Happy, Sad, Angry, Sleepy.',
          'Label them in English.'
        ],
        stepsId: [
          'Gambar lingkaran besar di kertasmu.',
          'Bagi menjadi 4 bagian.',
          'Gambar 4 perasaan berbeda: Happy, Sad, Angry, Sleepy.',
          'Beri label dalam bahasa Inggris.'
        ],
        keep: 'Use your "Feeling Face" to show how you feel!',
        keepId: 'Gunakan "Feeling Face"-mu untuk menunjukkan perasaanmu!',
        example: 'Happy 😊, Sad 😢',
        exampleId: 'Siswa menunjukkan gambar wajah senang.'
      },
      upper: {
        title: 'Emotion Shield',
        titleId: 'Perisai Emosi',
        steps: [
          'Draw a shield shape.',
          'In the center, write "MY EMOTIONS".',
          'Write 3 feelings you often feel and WHY.',
          'On the borders, write ways to show empathy to others.'
        ],
        stepsId: [
          'Gambar bentuk perisai.',
          'Di tengah, tulis "MY EMOTIONS".',
          'Tulis 3 perasaan yang sering kamu rasakan dan ALASANNYA.',
          'Di pinggirannya, tulis cara menunjukkan empati kepada orang lain.'
        ],
        keep: 'Keep your shield as a reminder to be kind.',
        keepId: 'Simpan perisaimu sebagai pengingat untuk bersikap baik.',
        example: 'I feel excited when I play games.',
        exampleId: 'Perisai dengan tulisan "I feel excited when..."'
      }
    },
    sentenceFrames: {
      lower: [
        { en: "I feel [HAPPY]!", id: "Aku merasa [SENANG]!" },
        { en: "Why do you feel [SAD]?", id: "Mengapa kamu merasa [SEDIH]?" },
        { en: "I am [SLEEPY] today.", id: "Aku [MENGANTUK] hari ini." }
      ],
      upper: [
        { en: "I am [EXCITED] for the weekend!", id: "Aku [BERSEMANGAT] menyambut akhir pekan!" },
        { en: "I feel [NERVOUS] because of the test.", id: "Aku merasa [GUGUP] karena ujian." },
        { en: "I understand that you feel [CONFUSED].", id: "Aku mengerti bahwa kamu merasa [BINGUNG]." }
      ]
    },
    chat: {
      lower: [
        {
          npc: '😊 Friend: "I got a new puppy today! I feel so happy!"',
          npcId: '😊 Teman: "Aku punya anak anjing baru hari ini! Aku merasa sangat senang!"',
          turns: [
            {
              choices: [
                { text: "That's awesome! I'm happy for you!", textId: "Itu luar biasa! Aku ikut senang!", points: 3, feedback: "Great way to join their happiness!", feedbackId: "Cara bagus untuk ikut merasakan kebahagiaan mereka!" },
                { text: "Okay.", textId: "Oke.", points: 1, feedback: "Try to say more to show you care.", feedbackId: "Coba katakan lebih banyak untuk menunjukkan kamu peduli." }
              ]
            }
          ]
        }
      ],
      upper: [
        {
          npc: '😟 Classmate: "I\'m really nervous about the school play tomorrow. What if I forget my lines?"',
          npcId: '😟 Teman Sekelas: "Aku sangat gugup soal pertunjukan sekolah besok. Bagaimana kalau aku lupa dialognya?"',
          turns: [
            {
              choices: [
                { text: "I understand how you feel. You've practiced a lot, you'll be great!", textId: "Aku mengerti perasaanmu. Kamu sudah berlatih banyak, kamu akan hebat!", points: 3, feedback: "Perfect empathy and encouragement!", feedbackId: "Empati dan penyemangat yang sempurna!" },
                { text: "Don't be nervous.", textId: "Jangan gugup.", points: 1, feedback: "Try to show you understand their feeling first.", feedbackId: "Coba tunjukkan kamu mengerti perasaan mereka dulu." }
              ]
            }
          ]
        }
      ]
    },
    quiz: [
      {
        situation: 'If a friend is crying, how might they feel?',
        situationId: 'Jika seorang teman menangis, bagaimana kira-kira perasaan mereka?',
        options: ['Happy', 'Sad', 'Angry', 'Sleepy'],
        optionsId: ['Senang', 'Sedih', 'Marah', 'Mengantuk'],
        correctIndex: 1
      }
    ],
    share: {
      lower: {
        title: 'Emotion Circle',
        titleId: 'Lingkaran Emosi',
        description: 'Sit in a circle. Show your feeling face and say "I feel..."',
        descriptionId: 'Duduk melingkar. Tunjukkan wajah perasaanmu dan katakan "I feel..."',
        activity: 'Pass the emotion: "How are you feeling?"'
      },
      upper: {
        title: 'Empathy Pairs',
        titleId: 'Pasangan Empati',
        description: 'Tell a partner how you feel. Partner responds with empathy.',
        descriptionId: 'Beritahu pasangan perasaanmu. Pasangan merespons dengan empati.',
        activity: 'Practice saying: "I understand how you feel."'
      }
    },
    roleplay: {
      lower: [
        {
          title: 'The Lost Toy 🧸',
          titleId: 'Mainan yang Hilang 🧸',
          scenario: 'Your friend lost their favorite toy. How do they feel? How can you help?',
          scenarioId: 'Temanmu kehilangan mainan favoritnya. Bagaimana perasaannya? Bagaimana kamu bisa membantu?',
          npcPrompt: 'Friend: "I can\'t find my teddy bear anywhere... I\'m so sad."',
          npcPromptId: 'Teman: "Aku tidak bisa menemukan boneka beruangku... Aku sangat sedih."',
          suggestedPhrases: ["Don't worry, I can help you find it.", "It's okay to feel sad.", "Let's look under the table!"],
          suggestedPhrasesId: ['Jangan khawatir, aku bisa membantumu mencarinya.', 'Tidak apa-apa merasa sedih.', 'Mari kita cari di bawah meja!'],
          outcome: 'You helped your friend find the toy and they feel much better!',
          outcomeId: 'Kamu membantu temanmu menemukan mainannya dan mereka merasa jauh lebih baik!'
        }
      ],
      upper: [
        {
          title: 'Testing Jitters 📝',
          titleId: 'Gugup Ujian 📝',
          scenario: 'Your friend is very nervous about an upcoming English test.',
          scenarioId: 'Temanmu sangat gugup menghadapi ujian bahasa Inggris yang akan datang.',
          npcPrompt: 'Friend: "I\'ve studied for hours but I\'m still so nervous! What if I fail?"',
          npcPromptId: 'Teman: "Aku sudah belajar berjam-jam tapi aku masih gugup! Bagaimana kalau aku gagal?"',
          suggestedPhrases: ["I understand how you feel. I am nervous too.", "You have studied hard, you will be fine!", "Let's review together for 10 minutes."],
          suggestedPhrasesId: ['Aku mengerti perasaanmu. Aku juga gugup.', 'Kamu sudah belajar keras, kamu akan baik-baik saja!', 'Mari kita tinjau bersama selama 10 menit.'],
          outcome: 'Your friend feels calmer and more confident. Empathy wins!',
          outcomeId: 'Temanmu merasa lebih tenang dan percaya diri. Empati menang!'
        }
      ]
    }
  }
];

