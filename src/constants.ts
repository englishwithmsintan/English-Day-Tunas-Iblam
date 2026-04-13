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
    title: 'LEND A HAND!',
    badge: 'Week 6 🤝',
    description: 'Polite requests and helpfulness. Learn how to ask for help the right way!',
    descriptionId: 'Permintaan sopan dan sikap suka menolong. Pelajari cara meminta bantuan dengan benar!',
    goals: {
      lower: 'I can ask for help politely using "Could you please...?"',
      lowerId: 'Saya bisa meminta bantuan dengan sopan menggunakan "Could you please...?"',
      upper: 'I can make and respond to polite requests using "Would you mind...?"',
      upperId: 'Saya bisa membuat dan menanggapi permintaan sopan menggunakan "Would you mind...?"'
    },
    materials: [
      'PPT Slides (Display Mode)',
      'Request scenario cards',
      'Cardstock paper (for hand-shaped cutouts)',
      'Colored paper (red, yellow, green for Politeness Traffic Light)',
      'Markers, crayons, colored pencils',
      'Scissors, glue sticks',
      'String or yarn',
      'Hole punch',
      'Sticky notes',
      'Large poster paper',
      'Small reward stickers'
    ],
    materialsId: [
      'Slide PPT (Mode Tampilan)',
      'Kartu skenario permintaan',
      'Kertas karton (untuk potongan bentuk tangan)',
      'Kertas warna (merah, kuning, hijau untuk Lampu Lalu Lintas Kesopanan)',
      'Spidol, krayon, pensil warna',
      'Gunting, lem stik',
      'Tali atau benang',
      'Pelubang kertas',
      'Catatan tempel (Sticky notes)',
      'Kertas poster besar',
      'Stiker hadiah kecil'
    ],
    review: {
      title: 'Week 5 Review: Rule Charades',
      titleId: 'Tinjauan Minggu 5: Tebak Gerakan Aturan',
      activity: 'Act out a rule (e.g., "Don\'t run in the hallway"), others guess using "You must..." or "You must not..."',
      activityId: 'Peragakan sebuah aturan (misal: "Jangan lari di koridor"), yang lain menebak menggunakan "You must..." atau "You must not..."',
      connection: 'Last week was about rules. This week is about asking for help politely!',
      connectionId: 'Minggu lalu tentang aturan. Minggu ini tentang meminta bantuan dengan sopan!'
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
        { word: 'help', meaning: 'membantu', meaningId: 'membantu', example: 'Could you please help me?', exampleId: 'Bisakah kamu membantu saya?', emoji: '🤲', image: 'https://loremflickr.com/400/400/cartoon,help' },
        { word: 'please', meaning: 'tolong', meaningId: 'tolong', example: 'Could you please open the door?', exampleId: 'Tolong bukakan pintunya.', emoji: '🙏', image: 'https://loremflickr.com/400/400/cartoon,pray' },
        { word: 'carry', meaning: 'membawa', meaningId: 'membawa', example: 'Could you please carry these books?', exampleId: 'Bisakah kamu bantu membawakan buku ini?', emoji: '📚', image: 'https://loremflickr.com/400/400/cartoon,carry' },
        { word: 'open', meaning: 'membuka', meaningId: 'membuka', example: 'Could you please open the window?', exampleId: 'Bisakah kamu membukakan jendelanya?', emoji: '🚪', image: 'https://loremflickr.com/400/400/cartoon,door' },
        { word: 'share', meaning: 'berbagi', meaningId: 'berbagi', example: 'Can you share your crayons with me?', exampleId: 'Bisakah kamu berbagi krayon dengan saya?', emoji: '↔️', image: 'https://loremflickr.com/400/400/cartoon,share' },
        { word: 'borrow', meaning: 'meminjam', meaningId: 'meminjam', example: 'Can I borrow your eraser, please?', exampleId: 'Bolehkah saya meminjam penghapusmu?', emoji: '🫳', image: 'https://loremflickr.com/400/400/cartoon,borrow' },
        { word: 'sorry', meaning: 'maaf', meaningId: 'maaf', example: "I'm sorry, I can't right now.", exampleId: 'Maaf, saya tidak bisa sekarang.', emoji: '🙇', image: 'https://loremflickr.com/400/400/cartoon,sorry' },
        { word: 'thank you', meaning: 'terima kasih', meaningId: 'terima kasih', example: 'Thank you for helping me!', exampleId: 'Terima kasih sudah membantu saya!', emoji: '❤️', image: 'https://loremflickr.com/400/400/cartoon,heart' },
      ],
      upper: [
        { word: 'assist', meaning: 'membantu (formal)', meaningId: 'membantu (formal)', example: 'Could you please assist me with this?', exampleId: 'Bisakah Anda membantu saya dengan ini?', emoji: '🤝', image: 'https://loremflickr.com/400/400/cartoon,handshake' },
        { word: 'mind', meaning: 'keberatan', meaningId: 'keberatan', example: 'Would you mind opening the door?', exampleId: 'Apakah Anda keberatan membukakan pintu?', emoji: '🤔', image: 'https://loremflickr.com/400/400/cartoon,think' },
        { word: 'certainly', meaning: 'tentu saja', meaningId: 'tentu saja', example: 'Yes, certainly! I\'ll do it now.', exampleId: 'Ya, tentu saja! Saya akan melakukannya sekarang.', emoji: '👍', image: 'https://loremflickr.com/400/400/cartoon,ok' },
        { word: 'help', meaning: 'membantu', meaningId: 'membantu', example: 'Could you please help me?', exampleId: 'Bisakah kamu membantu saya?', emoji: '🤲', image: 'https://loremflickr.com/400/400/cartoon,help' },
        { word: 'please', meaning: 'tolong', meaningId: 'tolong', example: 'Could you please open the door?', exampleId: 'Tolong bukakan pintunya.', emoji: '🙏', image: 'https://loremflickr.com/400/400/cartoon,pray' },
        { word: 'carry', meaning: 'membawa', meaningId: 'membawa', example: 'Could you please carry these books?', exampleId: 'Bisakah kamu membawakan buku ini?', emoji: '📚', image: 'https://loremflickr.com/400/400/cartoon,carry' },
        { word: 'open', meaning: 'membuka', meaningId: 'membuka', example: 'Could you please open the window?', exampleId: 'Bisakah kamu membukakan jendelanya?', emoji: '🚪', image: 'https://loremflickr.com/400/400/cartoon,door' },
        { word: 'thank you', meaning: 'terima kasih', meaningId: 'terima kasih', example: 'No problem. Thank you anyway!', exampleId: 'Tidak masalah. Terima kasih!', emoji: '❤️', image: 'https://loremflickr.com/400/400/cartoon,heart' },
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
        title: 'Helping Hand Request Cards',
        titleId: 'Kartu Permintaan Tangan Penolong',
        steps: [
          'Trace your hand on cardstock paper.',
          'On the Thumb, write: "Could you please help me?"',
          'On the Index, write: "Could you please share?"',
          'On the Middle, write: "Could you please open?"',
          'On the Ring, write: "Could you please carry?"',
          'On the Pinky, write: "Could you please borrow?"',
          'Decorate and cut out your hand!'
        ],
        stepsId: [
          'Jiplak tanganmu di atas kertas karton.',
          'Di Jempol, tulis: "Could you please help me?"',
          'Di Telunjuk, tulis: "Could you please share?"',
          'Di Jari Tengah, tulis: "Could you please open?"',
          'Di Jari Manis, tulis: "Could you please carry?"',
          'Di Kelingking, tulis: "Could you please borrow?"',
          'Hias dan gunting tanganmu!'
        ],
        keep: 'Take home or paste in your book.',
        keepId: 'Bawa pulang atau tempel di bukumu.',
        example: 'Could you please help me open my bottle?',
        exampleId: 'Could you please help me open my bottle? (Bisakah kamu bantu saya membuka botol?)'
      },
      upper: {
        title: '"Would You Mind?" Accordion Book',
        titleId: 'Buku Akordion "Would You Mind?"',
        steps: [
          'Take a strip of paper (30cm x 10cm).',
          'Fold it into 6 panels (accordion style).',
          'On each panel, write one polite request using "Would you mind...?" + gerund.',
          'Draw a small illustration for each request.',
          'Examples: "Would you mind opening the window?", "Would you mind explaining again?"'
        ],
        stepsId: [
          'Ambil selembar kertas panjang (30cm x 10cm).',
          'Lipat menjadi 6 panel (gaya akordion).',
          'Di setiap panel, tulis satu permintaan sopan menggunakan "Would you mind...?" + gerund.',
          'Gambar ilustrasi kecil untuk setiap permintaan.',
          'Contoh: "Would you mind opening the window?", "Would you mind explaining again?"'
        ],
        keep: 'Fold and store in your book or take home.',
        keepId: 'Lipat dan simpan di bukumu atau bawa pulang.',
        example: 'Would you mind explaining the math problem again?',
        exampleId: 'Would you mind explaining the math problem again? (Apakah Anda keberatan menjelaskan soal matematika itu lagi?)'
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
        type: 'Mobile', 
        typeId: 'Gantungan (Mobile)',
        lower: 'Hang hand-shaped requests from a hanger using string', 
        lowerId: 'Gantung permintaan berbentuk tangan dari gantungan baju menggunakan tali',
        upper: 'Hang request/response pairs (e.g., "Would you mind..." and "Not at all!")',
        upperId: 'Gantung pasangan permintaan/tanggapan (misal: "Would you mind..." dan "Not at all!")'
      },
      { 
        type: 'Comic Strip', 
        typeId: 'Komik Strip',
        lower: '3-panel comic: 1. Problem, 2. Request, 3. Help + Thank you', 
        lowerId: 'Komik 3 panel: 1. Masalah, 2. Permintaan, 3. Bantuan + Terima kasih',
        upper: '4-panel comic with a polite refusal + graceful acceptance',
        upperId: 'Komik 4 panel dengan penolakan sopan + penerimaan yang anggun'
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
    lessonTasks: [
      { 
        title: 'TASK 1: MODEL & DRILL', 
        titleId: 'TUGAS 1: MODEL & LATIHAN',
        time: '5 min', 
        lower: 'Teacher models "Could you please...?" with gestures. Students repeat. Practice responses: "Yes, certainly!" and "Sorry, I can\'t."', 
        lowerId: 'Guru mencontohkan "Could you please...?" dengan gerakan. Siswa mengulangi. Latih tanggapan: "Yes, certainly!" dan "Sorry, I can\'t."',
        upper: 'Teacher models "Would you mind + gerund?" Explain gerund rule. Practice responses: "Not at all!" and "I\'m sorry, I\'m busy."',
        upperId: 'Guru mencontohkan "Would you mind + gerund?" Jelaskan aturan gerund. Latih tanggapan: "Not at all!" dan "I\'m sorry, I\'m busy."'
      },
      { 
        title: 'TASK 2: REQUEST CHAIN GAME', 
        titleId: 'TUGAS 2: PERMAINAN RANTAI PERMINTAAN',
        time: '10 min', 
        lower: 'Circle chain: A asks B "Could you please smile?" B responds and asks C. Continue.', 
        lowerId: 'Rantai lingkaran: A bertanya pada B "Could you please smile?" B menjawab dan bertanya pada C. Lanjutkan.',
        upper: 'Circle chain with polite refusals: "Would you mind passing this?" → "I\'m sorry, I can\'t right now."',
        upperId: 'Rantai lingkaran dengan penolakan sopan: "Would you mind passing this?" → "I\'m sorry, I can\'t right now."'
      },
      { 
        title: 'TASK 3: SCENARIO ROLE-PLAY', 
        titleId: 'TUGAS 3: ROLE-PLAY SKENARIO',
        time: '10 min', 
        lower: 'Pairs practice 4 simple scenarios (need pencil, can\'t reach book, don\'t understand, hands full). Use sentence frames.', 
        lowerId: 'Berpasangan melatih 4 skenario sederhana (butuh pensil, tidak bisa menjangkau buku, tidak paham, tangan penuh). Gunakan bingkai kalimat.',
        upper: 'Pairs practice formal scenarios (teacher extension, borrowing equipment, principal\'s time, lowering voice). Include accepting refusal gracefully.',
        upperId: 'Berpasangan melatih skenario formal (perpanjangan waktu guru, meminjam peralatan, waktu kepala sekolah, merendahkan suara). Termasuk menerima penolakan dengan anggun.'
      }
    ],
    share: {
      lower: {
        title: 'Thank You Circle',
        titleId: 'Lingkaran Terima Kasih',
        description: 'Sit in a circle and recognize friends who helped you this week.',
        descriptionId: 'Duduk melingkar dan hargai teman-teman yang membantumu minggu ini.',
        activity: '______ helped me. Thank you for ______! (Response: You\'re welcome!)',
        activityId: '______ membantuku. Terima kasih untuk ______! (Tanggapan: You\'re welcome!)'
      },
      upper: {
        title: 'Thank You Sticky Notes',
        titleId: 'Catatan Tempel Terima Kasih',
        description: 'Write a thank you note to someone who helped you and stick it on the wall.',
        descriptionId: 'Tulis catatan terima kasih kepada seseorang yang membantumu dan tempelkan di dinding.',
        activity: 'Thank you, ______, for ______. (Stick on Helping Hands poster)',
        activityId: 'Thank you, ______, for ______. (Tempel di poster Tangan Penolong)'
      }
    },
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
    id: 'kindred-spirits',
    title: 'KINDRED SPIRITS',
    titleId: 'SAHABAT SEJATI',
    badge: 'Week 7 ✨',
    description: 'Giving helpful feedback and accepting suggestions positively. Like kindred spirits who help each other grow!',
    descriptionId: 'Memberikan umpan balik yang bermanfaat dan menerima saran dengan positif. Seperti sahabat sejati yang saling membantu untuk berkembang!',
    goals: {
      lower: 'I can give a compliment using an adverb (nicely, loudly, clearly).',
      lowerId: 'Saya bisa memberikan pujian menggunakan kata keterangan (dengan baik, dengan keras, dengan jelas).',
      upper: 'I can give helpful feedback using the sandwich method and accept suggestions positively.',
      upperId: 'Saya bisa memberikan umpan balik yang bermanfaat menggunakan metode sandwich dan menerima saran dengan positif.'
    },
    materials: [
      'PPT Slides (Display Mode)',
      'Task cards for mini-performances',
      'Adverb cards',
      'Feedback sentence starters',
      'Cardstock paper',
      'Colored paper (red/yellow/green)',
      'Markers, crayons, colored pencils',
      'Scissors, glue sticks, rulers',
      'Large poster paper',
      'Peer evaluation forms',
      'Improvement plan worksheets',
      '“Growth Mindset” posters',
      'Hole punch + brass fasteners',
      'Yarn or string'
    ],
    materialsId: [
      'Slide PPT (Mode Tampilan)',
      'Kartu tugas untuk pertunjukan mini',
      'Kartu kata keterangan',
      'Kalimat pembuka umpan balik',
      'Kertas karton',
      'Kertas warna (merah/kuning/hijau)',
      'Spidol, krayon, pensil warna',
      'Gunting, lem stik, penggaris',
      'Kertas poster besar',
      'Formulir evaluasi teman',
      'Lembar kerja rencana perbaikan',
      'Poster "Growth Mindset"',
      'Pelubang kertas + pengancing kuningan',
      'Benang atau tali'
    ],
    review: {
      title: 'Week 6 Review: Lend a Hand',
      titleId: 'Tinjauan Minggu 6: Ulurkan Tangan',
      activity: 'Quick activity: Two truths and a lie or vocabulary recap game.',
      activityId: 'Aktivitas cepat: Dua kebenaran dan satu kebohongan atau permainan rekap kosakata.',
      connection: 'Last week we practiced asking for help. This week, we learn how to give helpful feedback and accept suggestions positively—like kindred spirits who help each other grow!',
      connectionId: 'Minggu lalu kita berlatih meminta bantuan. Minggu ini, kita belajar cara memberikan umpan balik yang bermanfaat dan menerima saran dengan positif—seperti sahabat sejati yang saling membantu untuk berkembang!'
    },
    keyPhrases: {
      lower: [
        'You sang loudly!',
        'You drew nicely.',
        'Your colors are good.',
        'I like your door.'
      ],
      lowerId: [
        'Kamu bernyanyi dengan keras!',
        'Kamu menggambar dengan bagus.',
        'Warnamu bagus.',
        'Aku suka pintumu.'
      ],
      upper: [
        'You spoke clearly and confidently.',
        'Maybe you could speak more slowly.',
        'Thank you for telling me kindly.',
        'I see your point. I\'ll work on that.'
      ],
      upperId: [
        'Kamu berbicara dengan jelas dan percaya diri.',
        'Mungkin kamu bisa berbicara lebih lambat.',
        'Terima kasih sudah memberitahuku dengan baik.',
        'Aku mengerti maksudmu. Aku akan memperbaikinya.'
      ]
    },
    vocab: {
      lower: [
        { word: 'good', meaning: 'bagus', meaningId: 'bagus', example: 'You did a good job!', exampleId: 'Kamu melakukan pekerjaan yang bagus!', emoji: '👍', image: 'https://loremflickr.com/400/400/cartoon,good' },
        { word: 'better', meaning: 'lebih baik', meaningId: 'lebih baik', example: 'This is better than before.', exampleId: 'Ini lebih baik dari sebelumnya.', emoji: '📈', image: 'https://loremflickr.com/400/400/cartoon,better' },
        { word: 'loudly', meaning: 'dengan keras', meaningId: 'dengan keras', example: 'You sang loudly!', exampleId: 'Kamu bernyanyi dengan keras!', emoji: '📢', image: 'https://loremflickr.com/400/400/cartoon,loud' },
        { word: 'softly', meaning: 'dengan lembut', meaningId: 'dengan lembut', example: 'Please speak softly.', exampleId: 'Tolong bicara dengan lembut.', emoji: '🤫', image: 'https://loremflickr.com/400/400/cartoon,soft' },
        { word: 'clearly', meaning: 'dengan jelas', meaningId: 'dengan jelas', example: 'You spoke clearly.', exampleId: 'Kamu berbicara dengan jelas.', emoji: '✨', image: 'https://loremflickr.com/400/400/cartoon,clear' },
        { word: 'quickly', meaning: 'dengan cepat', meaningId: 'dengan cepat', example: 'He ran quickly.', exampleId: 'Dia berlari dengan cepat.', emoji: '⚡', image: 'https://loremflickr.com/400/400/cartoon,fast' },
        { word: 'slowly', meaning: 'dengan lambat', meaningId: 'dengan lambat', example: 'Walk slowly, please.', exampleId: 'Tolong jalan dengan lambat.', emoji: '🐢', image: 'https://loremflickr.com/400/400/cartoon,slow' },
        { word: 'well', meaning: 'dengan baik', meaningId: 'dengan baik', example: 'You drew well.', exampleId: 'Kamu menggambar dengan baik.', emoji: '👌', image: 'https://loremflickr.com/400/400/cartoon,well' },
        { word: 'nicely', meaning: 'dengan bagus', meaningId: 'dengan bagus', example: 'You colored it nicely.', exampleId: 'Kamu mewarnainya dengan bagus.', emoji: '🎨', image: 'https://loremflickr.com/400/400/cartoon,nice' },
        { word: 'carefully', meaning: 'dengan hati-hati', meaningId: 'dengan hati-hati', example: 'Cut the paper carefully.', exampleId: 'Gunting kertasnya dengan hati-hati.', emoji: '🔍', image: 'https://loremflickr.com/400/400/cartoon,careful' }
      ],
      upper: [
        { word: 'kindly', meaning: 'dengan baik hati', meaningId: 'dengan baik hati', example: 'She spoke kindly to me.', exampleId: 'Dia berbicara dengan baik hati kepadaku.', emoji: '❤️', image: 'https://loremflickr.com/400/400/cartoon,kind' },
        { word: 'specifically', meaning: 'secara spesifik', meaningId: 'secara spesifik', example: 'Can you tell me specifically?', exampleId: 'Bisakah kamu memberitahuku secara spesifik?', emoji: '📍', image: 'https://loremflickr.com/400/400/cartoon,specific' },
        { word: 'effectively', meaning: 'secara efektif', meaningId: 'secara efektif', example: 'You worked effectively.', exampleId: 'Kamu bekerja secara efektif.', emoji: '⚙️', image: 'https://loremflickr.com/400/400/cartoon,effective' }
      ]
    },
    scramble: {
      lower: [
        { situation: 'Giving a compliment 📢', situationId: 'Memberikan pujian 📢', words: ['You', 'sang', 'the', 'song', 'loudly', '!'], answer: 'You sang the song loudly!' },
        { situation: 'Drawing feedback 🎨', situationId: 'Masukan menggambar 🎨', words: ['You', 'drew', 'the', 'house', 'nicely', '.'], answer: 'You drew the house nicely.' }
      ],
      upper: [
        { situation: 'Using the sandwich method 🥪', situationId: 'Menggunakan metode sandwich 🥪', words: ['Maybe', 'you', 'could', 'speak', 'more', 'slowly', '.'], answer: 'Maybe you could speak more slowly.' },
        { situation: 'Accepting feedback kindly ❤️', situationId: 'Menerima masukan dengan baik ❤️', words: ['Thank', 'you', 'for', 'telling', 'me', 'kindly', '.'], answer: 'Thank you for telling me kindly.' }
      ]
    },
    chat: {
      lower: [
        {
          npc: '🎨 Friend: "I finished my drawing! What do you think?"',
          npcId: '🎨 Teman: "Aku sudah selesai menggambar! Bagaimana menurutmu?"',
          turns: [
            {
              choices: [
                { text: 'You drew nicely! I like the colors.', textId: 'Kamu menggambar dengan bagus! Aku suka warnanya.', points: 3, feedback: 'Great compliment!', feedbackId: 'Pujian yang bagus!' },
                { text: 'It is good.', textId: 'Itu bagus.', points: 1, feedback: 'Try to use an adverb!', feedbackId: 'Coba gunakan kata keterangan!' },
                { text: 'I don\'t like it.', textId: 'Aku tidak suka.', points: 0, feedback: 'That\'s not very kind!', feedbackId: 'Itu tidak terlalu baik!' }
              ]
            }
          ]
        }
      ],
      upper: [
        {
          npc: '🎤 Partner: "How was my presentation? I was a bit nervous."',
          npcId: '🎤 Partner: "Bagaimana presentasiku? Aku agak gugup."',
          turns: [
            {
              choices: [
                { text: 'You spoke clearly, but maybe you could speak more slowly. But you did really well!', textId: 'Kamu berbicara dengan jelas, tapi mungkin kamu bisa berbicara lebih lambat. Tapi kamu melakukannya dengan sangat baik!', points: 3, feedback: 'Perfect sandwich method! ⭐', feedbackId: 'Metode sandwich yang sempurna! ⭐' },
                { text: 'You were too fast.', textId: 'Kamu terlalu cepat.', points: 1, feedback: 'Try to be more encouraging.', feedbackId: 'Coba lebih menyemangati.' },
                { text: 'It was okay.', textId: 'Itu oke saja.', points: 1, feedback: 'Be more specific!', feedbackId: 'Lebih spesifiklah!' }
              ]
            }
          ]
        }
      ]
    },
    quiz: [
      { situation: 'What is the "Sandwich Method" for feedback?', situationId: 'Apa itu "Metode Sandwich" untuk umpan balik?', options: ['Bread, Meat, Bread', 'Compliment, Suggestion, Encouragement', 'Shouting, Crying, Laughing', 'Ignoring, Talking, Leaving'], optionsId: ['Roti, Daging, Roti', 'Pujian, Saran, Semangat', 'Berteriak, Menangis, Tertawa', 'Mengabaikan, Berbicara, Pergi'], correctIndex: 1 },
      { situation: 'Which word is an adverb?', situationId: 'Kata mana yang merupakan kata keterangan?', options: ['Good', 'Nice', 'Loudly', 'Clear'], optionsId: ['Good', 'Nice', 'Loudly', 'Clear'], correctIndex: 2 }
    ],
    meter: {
      lower: [
        { text: '"You sing good."', textId: '"Kamu menyanyi bagus."', score: 1, explanation: 'Should use "well" or "loudly". 😞', explanationId: 'Harusnya menggunakan "well" atau "loudly". 😞', betterVersion: 'You sing well!' },
      ],
      upper: [
        { text: '"Your drawing is bad, do it better."', textId: '"Gambarmu jelek, buat lebih baik."', score: 1, explanation: 'Too rude! Use the sandwich method. 😞', explanationId: 'Terlalu kasar! Gunakan metode sandwich. 😞', betterVersion: 'I like your colors, but maybe you could add more detail. You are doing great!' }
      ]
    },
    physicalOutput: {
      lower: {
        title: 'Adverb Flip Book',
        titleId: 'Buku Lipat Kata Keterangan',
        steps: [
          'Take 4 small cards and staple them together.',
          'Cover: Write "How Did I Do?" and draw a face.',
          'Page 1: Write "You did it LOUDLY!" and draw a picture.',
          'Page 2: Write "You did it SOFTLY!" and draw a picture.',
          'Page 3: Write "You did it QUICKLY!" and draw a picture.',
          'Page 4: Write "You did it SLOWLY!" and draw a picture.'
        ],
        stepsId: [
          'Ambil 4 kartu kecil dan staples menjadi satu.',
          'Sampul: Tulis "How Did I Do?" dan gambar wajah.',
          'Hal 1: Tulis "You did it LOUDLY!" dan buat gambar.',
          'Hal 2: Tulis "You did it SOFTLY!" dan buat gambar.',
          'Hal 3: Tulis "You did it QUICKLY!" dan buat gambar.',
          'Hal 4: Tulis "You did it SLOWLY!" dan buat gambar.'
        ],
        keep: 'Store in your book or take home.',
        keepId: 'Simpan di bukumu atau bawa pulang.',
        example: 'You did it LOUDLY! 📢',
        exampleId: 'Kamu melakukannya dengan KERAS! 📢'
      },
      upper: {
        title: 'Feedback Fan',
        titleId: 'Kipas Umpan Balik',
        steps: [
          'Cut 5 paper strips (5cm x 15cm).',
          'Hole-punch the bottom and attach with a brass fastener.',
          'Strip 1: "One thing you did well was..."',
          'Strip 2: "You could improve..."',
          'Strip 3: "I really liked how you..."',
          'Strip 4: "Next time, try to..."',
          'Strip 5: "Overall, you did..."',
          'Use the fan during peer feedback!'
        ],
        stepsId: [
          'Gunting 5 strip kertas (5cm x 15cm).',
          'Lubangi bagian bawah dan pasang dengan pengancing kuningan.',
          'Strip 1: "Satu hal yang kamu lakukan dengan baik adalah..."',
          'Strip 2: "Kamu bisa meningkatkan..."',
          'Strip 3: "Aku sangat suka bagaimana kamu..."',
          'Strip 4: "Lain kali, cobalah untuk..."',
          'Strip 5: "Secara keseluruhan, kamu..."',
          'Gunakan kipas saat memberikan umpan balik ke teman!'
        ],
        keep: 'Store in your book or pencil case.',
        keepId: 'Simpan di bukumu atau kotak pensil.',
        example: 'One thing you did well was speaking clearly.',
        exampleId: 'Satu hal yang kamu lakukan dengan baik adalah berbicara dengan jelas.'
      }
    },
    alternativeOutputs: [
      { type: 'Compliment Tree', typeId: 'Pohon Pujian', lower: 'Write compliments on leaf-shaped sticky notes and glue them to a tree.', lowerId: 'Tulis pujian pada catatan tempel berbentuk daun dan tempelkan ke pohon.', upper: 'Same, but include specific adverbs.', upperId: 'Sama, tapi sertakan kata keterangan yang spesifik.' }
    ],
    lessonTasks: [
      { title: 'TASK 1: ADVERB ACTION GAME', titleId: 'TUGAS 1: PERMAINAN AKSI KATA KETERANGAN', time: '10 min', lower: 'Simon Says with Adverbs: "Walk quickly!", "Speak softly!"', lowerId: 'Simon Says dengan Kata Keterangan: "Walk quickly!", "Speak softly!"', upper: 'Adverb Charades Relay: Act out an adverb for your team to guess.', upperId: 'Estafet Tebak Kata Keterangan: Peragakan kata keterangan untuk ditebak timmu.' },
      { title: 'TASK 2: MINI-PERFORMANCE + FEEDBACK', titleId: 'TUGAS 2: PERTUNJUKAN MINI + UMPAN BALIK', time: '8 min', lower: 'Compliment Circle: Draw a house and receive sticky note compliments.', lowerId: 'Lingkaran Pujian: Gambar rumah dan terima pujian di catatan tempel.', upper: '30-Second Talk + Feedback Sandwich: Give a short talk and receive sandwich feedback.', upperId: 'Bicara 30 Detik + Sandwich Umpan Balik: Berikan pembicaraan singkat dan terima umpan balik sandwich.' },
      { title: 'TASK 3: RECEIVING FEEDBACK', titleId: 'TUGAS 3: MENERIMA UMPAN BALIK', time: '7 min', lower: 'Practice responding: "Thank you for telling me."', lowerId: 'Berlatih menanggapi: "Terima kasih sudah memberitahuku."', upper: 'Difficult Feedback Scenarios: Practice responding without getting defensive.', upperId: 'Skenario Umpan Balik Sulit: Berlatih menanggapi tanpa menjadi defensif.' }
    ],
    share: {
      lower: { title: 'Feedback Champions', titleId: 'Juara Umpan Balik', description: 'Share the nicest compliment you received.', descriptionId: 'Bagikan pujian terbaik yang kamu terima.', activity: 'The nicest compliment I received was ____.', activityId: 'Pujian terbaik yang saya terima adalah ____.' },
      upper: { title: 'Reflection Share', titleId: 'Berbagi Refleksi', description: 'Share the most helpful feedback you received.', descriptionId: 'Bagikan umpan balik paling bermanfaat yang kamu terima.', activity: 'The most helpful feedback I received was ____.', activityId: 'Umpan balik paling bermanfaat yang saya terima adalah ____.' }
    },
    templates: [
      { title: 'Adverb Flip Book', content: 'Cover: "How Did I Do?"\nPage 1: "You did it LOUDLY!"\nPage 2: "You did it SOFTLY!"\nPage 3: "You did it QUICKLY!"\nPage 4: "You did it SLOWLY!"' },
      { title: 'Feedback Fan', content: 'Strip 1: One thing you did well was...\nStrip 2: You could improve...\nStrip 3: I really liked how you...\nStrip 4: Next time, try to...\nStrip 5: Overall, you did...' },
      { title: 'Feedback Sandwich', content: '🍞 TOP BREAD (Compliment)\n🥬 FILLING (Suggestion)\n🍞 BOTTOM BREAD (Encouragement)' }
    ],
    roleplay: {
      lower: [
        { title: 'Compliment Circle 🎨', titleId: 'Lingkaran Pujian 🎨', scenario: 'You just finished a drawing and your friend is looking at it.', scenarioId: 'Kamu baru saja selesai menggambar dan temanmu sedang melihatnya.', npcPrompt: 'Friend: "Wow, you finished! Can I see your drawing?"', npcPromptId: 'Teman: "Wow, kamu sudah selesai! Boleh aku lihat gambarmu?"', suggestedPhrases: ['You drew nicely!', 'I like your colors.', 'You did it carefully!'], suggestedPhrasesId: ['Kamu menggambar dengan bagus!', 'Aku suka warnamu.', 'Kamu melakukannya dengan hati-hati!'], outcome: 'Your friend feels happy and encouraged!', outcomeId: 'Temanmu merasa senang dan termotivasi!' }
      ],
      upper: [
        { title: 'The Feedback Sandwich 🥪', titleId: 'Sandwich Umpan Balik 🥪', scenario: 'Your partner just finished a short talk about their hobby.', scenarioId: 'Partner-mu baru saja selesai berbicara singkat tentang hobinya.', npcPrompt: 'Partner: "That was my talk about cats. What did you think?"', npcPromptId: 'Partner: "Itu tadi pembicaraanku tentang kucing. Bagaimana menurutmu?"', suggestedPhrases: ['You spoke clearly, but maybe you could speak more slowly. But you did really well!', 'I really liked your story!', 'Next time, try to look at the audience more.'], suggestedPhrasesId: ['Kamu berbicara dengan jelas, tapi mungkin kamu bisa berbicara lebih lambat. Tapi kamu melakukannya dengan sangat baik!', 'Aku sangat suka ceritamu!', 'Lain kali, cobalah untuk lebih sering melihat penonton.'], outcome: 'Your partner appreciates your helpful and kind feedback!', outcomeId: 'Partner-mu menghargai umpan balikmu yang bermanfaat dan baik!' }
      ]
    }
  }
];
