/**
 * TYPE ARENA — Core Typing Telemetry, Arcade Physics & Security Validation Engine
 * Copyright (c) 2026 MD ISTIAK ISLAM
 * Ideas Deployed by MD ISTIAK ISLAM
 * Licensed under the MIT License.
 */

export const COPYRIGHT_NOTICE = '© 2026 MD ISTIAK ISLAM · Ideas Deployed by MD ISTIAK ISLAM';

export const TIMING_LEVELS_MINUTES = Object.freeze([1, 2, 3, 5, 10, 15]);

export const DIFFICULTY_LEVELS = Object.freeze({
  beginner: {
    id: 'beginner',
    label: 'Beginner',
    sublabel: 'Simple words & relaxed flow',
    pacerWpm: 32,
    drainRate: 2
  },
  intermediate: {
    id: 'intermediate',
    label: 'Intermediate',
    sublabel: 'Balanced prose & punctuation',
    pacerWpm: 52,
    drainRate: 3
  },
  advanced: {
    id: 'advanced',
    label: 'Advanced',
    sublabel: 'Complex vocabulary & rhythm',
    pacerWpm: 72,
    drainRate: 4
  },
  master: {
    id: 'master',
    label: 'Master',
    sublabel: 'High-density syntax & velocity',
    pacerWpm: 92,
    drainRate: 5
  }
});

export const PASSAGES = {
  beginner: [
    'The morning sun warms the quiet valley as gentle waves roll across the clear blue lake.',
    'Typing with a calm and steady rhythm helps your fingers learn the home row keys with ease.',
    'Every small step forward builds lasting confidence when you practice with focus and patience.',
    'Fresh air and good posture keep your hands relaxed during a long and pleasant typing session.'
  ],
  intermediate: [
    'Precision always beats raw speed when competing in typing arenas; every mistyped character costs valuable momentum and rhythm.',
    'Modern mechanical keyboards register keystrokes within milliseconds, turning muscle memory into smooth, effortless performance.',
    'Reading two words ahead of your active cursor allows your fingers to transition smoothly between common letter combinations.',
    'Consistent five-minute practice intervals train both endurance and accuracy far better than rushed, tense sprints.'
  ],
  advanced: [
    'Algorithmic throughput depends on low-latency execution: optimize each keystroke, minimize backspace penalties, and sustain peak cadence!',
    'Quantum cryptography, distributed consensus protocols, and asynchronous state machines demand extraordinary accuracy under time pressure.',
    'When seventy-five words per minute becomes your natural baseline, peripheral vision reads ahead while your fingers execute effortlessly.',
    'Ergonomic sustainability requires neutral wrist alignment, feather-light actuation force, and deliberate micro-breaks between intense rounds.'
  ],
  master: [
    'Synthesizing high-frequency telemetry (99.4% accuracy @ 110 WPM) requires zero-hesitation transitions across alphanumeric & symbol strata!',
    'const evaluateCadence = (chars, sec) => Math.round((chars / 5) / Math.max(sec / 60, 0.01)); // Sub-millisecond keystroke dispatch',
    'Neuroplasticity in fine motor cortex pathways accelerates when deliberate, error-free keystroke patterns replace reactive correction loops.',
    'Verify protocol invariants: [alpha_01, beta_02, gamma_03] -> { status: "VERIFIED", latencyMs: 4.2, throughput: "OPTIMAL" }.'
  ]
};

export const PRACTICE_CATEGORIES = {
  prose: {
    id: 'prose',
    name: 'Editorial Prose & Fluency',
    desc: 'Natural paragraphs for sustained multi-minute rhythm and reading flow.',
    texts: PASSAGES
  },
  rows: {
    id: 'rows',
    name: 'Keyboard Row Mastery',
    desc: 'Targeted drills for Home Row, Top Reach, and Bottom Row finger isolation.',
    texts: {
      beginner: [
        'asdf jkl; asdf jkl; sad lad flask fall dad ask salad fall; glass half full as a glad lad asks.',
        'jkl; asdf fjdk slaf dakl; jasd flak; all sad lads fall; ask a glad dad for a full flask.'
      ],
      intermediate: [
        'qwerty uiop power quiet write port route; true poet wrote a quiet report on the upper tower.',
        'home and top row blend:iqueried the polite writer about a superpower quote in the paper.'
      ],
      advanced: [
        'zxcvbnm comma period; zero vibrant zealots zoomed past six cozy cabins near the frozen valley.',
        'mixing all three rows: lazy foxes quickly jumped over seven bronze boxes in the dazzling plaza.'
      ],
      master: [
        'qaz wsx edc rfv tgb yhn ujm ik, ol. p;/ — full vertical column finger-extension calibration drill!',
        'Pack my box with five dozen liquor jugs; sphinx of black quartz, judge my vow with razor precision.'
      ]
    }
  },
  code: {
    id: 'code',
    name: 'Developer Code & Syntax',
    desc: 'Real-world JavaScript, TypeScript, and Python patterns with brackets and operators.',
    texts: {
      beginner: [
        'let count = 0; const total = 100; if (count < total) { count = count + 1; }',
        'function greet(name) { return "Hello, " + name + "!"; } console.log(greet("World"));'
      ],
      intermediate: [
        'export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);',
        'const items = data.filter(row => row.active).map(row => ({ id: row.id, score: row.wpm * 10 }));'
      ],
      advanced: [
        'async function fetchTelemetry(url) { const res = await fetch(url); if (!res.ok) throw new Error(res.statusText); return res.json(); }',
        'type MetricResult = { wpm: number; accuracy: number; streak: number; verified: boolean };'
      ],
      master: [
        'const memoize = <T extends (...args: any[]) => any>(fn: T) => { const cache = new Map(); return (...a: Parameters<T>) => cache.get(a[0]) ?? cache.set(a[0], fn(...a)).get(a[0]); };',
        'SELECT u.callsign, AVG(m.wpm) AS avg_wpm, MAX(m.accuracy) FROM matches m JOIN users u ON u.id = m.user_id GROUP BY u.callsign HAVING AVG(m.wpm) >= 85;'
      ]
    }
  },
  numbers: {
    id: 'numbers',
    name: 'Numbers & Financial Data',
    desc: 'Top-row numerals, decimals, percentages, and currency formatting.',
    texts: {
      beginner: [
        '10 20 30 40 50 60 70 80 90 100 — order 145 items at 25 dollars each for 3625 total.',
        '2024 2025 2026: flight 408 departs at 09:30 from gate 17 with 184 passengers aboard.'
      ],
      intermediate: [
        'Invoice #48291: 14 units @ $19.95 = $279.30 (Tax 8.25%: $23.04) -> Grand Total: $302.34.',
        'Quarterly growth rose +14.8% in Q1, +22.4% in Q2, and +31.05% in Q3 across 1,490 accounts.'
      ],
      advanced: [
        'Coordinates: 37.7749° N, 122.4194° W | Elevation: 16.4m | Barometer: 1013.25 hPa @ 18.6°C.',
        'Portfolio allocation: 42.5% Equities ($128,450.00), 35.0% Bonds ($105,782.35), 22.5% Cash ($68,003.15).'
      ],
      master: [
        'SHA-256 Digest [9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08] verified in 0.0042s.',
        'Matrix [ [1.04, -0.82, 3.19], [0.00, 4.75, -2.61], [-9.38, 6.40, 1.11] ] * det(A) = 84.9204.'
      ]
    }
  }
};

export const CHALLENGES = [
  {
    id: 'ironman',
    title: 'No-Backspace Ironman',
    badge: 'Zero Backspace Allowed',
    desc: 'Backspace and Delete keys are locked. Every keystroke is permanent—train calm, deliberate finger placement.',
    targetWpm: 45,
    minAccuracy: 92,
    lockBackspace: true
  },
  {
    id: 'precision98',
    title: '98% Precision Surgeon',
    badge: 'Min 98% Accuracy',
    desc: 'Maintain at least 98% accuracy across the entire timer. Dropping below 98% triggers a precision alert.',
    targetWpm: 50,
    minAccuracy: 98,
    lockBackspace: false
  },
  {
    id: 'escalator',
    title: 'Velocity Escalator',
    badge: 'Rising AI Pace',
    desc: 'The pace target accelerates every 30 seconds (+8 WPM per tier). Stay ahead of the rising tempo bar.',
    targetWpm: 55,
    minAccuracy: 94,
    lockBackspace: false
  },
  {
    id: 'gauntlet',
    title: 'Syntax & Symbol Gauntlet',
    badge: 'Code & Punctuation',
    desc: 'High-density developer brackets, operators, and mixed-case tokens under timed competitive pressure.',
    targetWpm: 60,
    minAccuracy: 95,
    lockBackspace: false
  }
];

export const STRETCH_ROUTINES = [
  {
    id: 'wrist-release',
    title: '01. Wrist Flexor & Extensor Release',
    durationSeconds: 30,
    targetArea: 'Forearm Flexors & Carpal Tunnel',
    cadence: 'Every 25 minutes of typing',
    steps: [
      'Extend your right arm forward at shoulder height with palm facing up.',
      'Gently draw your fingers downward with your left hand until a mild forearm stretch appears.',
      'Hold for 15 seconds while breathing slowly, then flip palm down and repeat for 15 seconds.'
    ]
  },
  {
    id: 'tendon-glide',
    title: '02. Finger Tendon Glide & Wide Fan',
    durationSeconds: 30,
    targetArea: 'Interossei & Flexor Tendons',
    cadence: 'Between timed sprints',
    steps: [
      'Start with fingers straight and relaxed together like a flat paddle.',
      'Curl only the top two knuckles into a hook position, hold 3 seconds, then open wide into a fan.',
      'Touch thumb tip gently to each fingertip from index to pinky in a smooth arc.'
    ]
  },
  {
    id: 'shoulder-drop',
    title: '03. Cervical & Scapular Posture Reset',
    durationSeconds: 40,
    targetArea: 'Upper Trapezius & Neck Alignment',
    cadence: 'Every 30 minutes',
    steps: [
      'Plant both feet flat on the floor and uncross your legs.',
      'Inhale while lifting shoulders toward ears, then exhale and roll shoulder blades down and back.',
      'Gently tuck your chin 1 inch backward to align ears directly over your shoulders.'
    ]
  },
  {
    id: 'ocular-reset',
    title: '04. 20-20-20 Ocular & Blink Recovery',
    durationSeconds: 20,
    targetArea: 'Ciliary Eye Muscles & Tear Film',
    cadence: 'Every 20 minutes of screen focus',
    steps: [
      'Look away from the monitor toward an object at least 20 feet (6 meters) away.',
      'Perform 5 slow, complete blinks to refresh corneal moisture.',
      'Trace a slow figure-eight with your gaze before returning to the home row.'
    ]
  }
];

export const TYPING_STRATEGIES = [
  {
    title: '01. Two-Word Look-Ahead Buffer',
    category: 'Visual Processing',
    summary: 'Keep your eyes 1 to 2 words ahead of the character your fingers are currently striking.',
    detail: 'Reading ahead feeds your motor cortex the upcoming word shape early, eliminating micro-pauses between words and raising WPM by 15–25% without rushing.'
  },
  {
    title: '02. Neutral Floating Wrist Geometry',
    category: 'Biomechanics',
    summary: 'Keep wrists straight and hovering lightly while typing rather than planting heavy weight on the desk edge.',
    detail: 'Planting wrists forces ulnar deviation when reaching for Q, P, Z, or Backspace. Floating wrists let large arm muscles assist small finger tendons.'
  },
  {
    title: '03. Metronome Cadence Over Bursting',
    category: 'Rhythm Control',
    summary: 'Type complex words at the exact same even tempo as easy 3-letter words.',
    detail: 'Sprinting on easy words and slamming the brakes on hard words causes neighbor-key collisions. A steady metronome cadence preserves 98%+ accuracy.'
  },
  {
    title: '04. Instant Home-Row Anchor Return',
    category: 'Spatial Memory',
    summary: 'Return index fingers to the tactile F and J ridges immediately after any top-row or number-row reach.',
    detail: 'F and J tactile bumps act as physical GPS coordinates so you never need to glance down at the keycaps.'
  }
];

export const WORD_BANKS = {
  beginner: [
    'calm', 'light', 'clear', 'focus', 'water', 'Breeze', 'river', 'stone',
    'plant', 'cloud', 'smile', 'grace', 'tempo', 'spark', 'maple', 'pearl',
    'piano', 'amber', 'field', 'ocean', 'fresh', 'glide', 'bloom', 'peace'
  ],
  intermediate: [
    'velocity', 'keyboard', 'accuracy', 'champion', 'momentum', 'terminal',
    'protocol', 'spectrum', 'overdrive', 'sentinel', 'catalyst', 'fortress',
    'vanguard', 'marathon', 'reflexes', 'throttle', 'shielded', 'scramble'
  ],
  advanced: [
    'synchronize', 'acceleration', 'cryptography', 'microsecond', 'architecture',
    'equilibrium', 'countermeasure', 'transcendence', 'juxtaposition', 'metamorphosis',
    'thunderstruck', 'configuration', 'instrumentation', 'parallelism'
  ],
  master: [
    'electroencephalograph', 'microarchitecture', 'immunohistochemistry',
    'spectrophotometry', 'decentralization', 'hyperparameterization',
    'magnetohydrodynamics', 'radioimmunoelectrophoresis', 'psychophysiology'
  ]
};

export const ENEMY_ARCHETYPES = [
  { type: 'Swarmer', role: 'Fast Scout', points: 120, drain: 4 },
  { type: 'Interceptor', role: 'Flank Striker', points: 160, drain: 6 },
  { type: 'Cruiser', role: 'Heavy Armor', points: 220, drain: 8 }
];

const FINGER_MAP = {
  '1': 'Left Pinky', 'q': 'Left Pinky', 'a': 'Left Pinky', 'z': 'Left Pinky', '`': 'Left Pinky',
  '2': 'Left Ring', 'w': 'Left Ring', 's': 'Left Ring', 'x': 'Left Ring',
  '3': 'Left Middle', 'e': 'Left Middle', 'd': 'Left Middle', 'c': 'Left Middle',
  '4': 'Left Index', '5': 'Left Index', 'r': 'Left Index', 't': 'Left Index',
  'f': 'Left Index', 'g': 'Left Index', 'v': 'Left Index', 'b': 'Left Index',
  '6': 'Right Index', '7': 'Right Index', 'y': 'Right Index', 'u': 'Right Index',
  'h': 'Right Index', 'j': 'Right Index', 'n': 'Right Index', 'm': 'Right Index',
  '8': 'Right Middle', 'i': 'Right Middle', 'k': 'Right Middle', ',': 'Right Middle',
  '9': 'Right Ring', 'o': 'Right Ring', 'l': 'Right Ring', '.': 'Right Ring',
  '0': 'Right Pinky', 'p': 'Right Pinky', ';': 'Right Pinky', '/': 'Right Pinky',
  '-': 'Right Pinky', '=': 'Right Pinky', '[': 'Right Pinky', ']': 'Right Pinky', "'": 'Right Pinky',
  ' ': 'Thumb (Spacebar)'
};

export function getFingerForChar(char) {
  if (!char) return { key: 'SPACE', finger: 'Thumb (Spacebar)' };
  const lower = char.toLowerCase();
  const finger = FINGER_MAP[lower] || 'Right Pinky';
  const displayKey = char === ' ' ? 'SPACE' : char.toUpperCase();
  return { key: displayKey, finger };
}

export function formatDurationClock(totalSeconds) {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function generatePlayerCode(seed = Math.random()) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'TA-';
  let value = Math.floor(seed * 1000000);
  for (let i = 0; i < 4; i++) {
    const idx = (value + i * 7) % chars.length;
    code += chars[idx];
    value = Math.floor(value / 3) + (i + 1) * 11;
  }
  return code;
}

export function calculateTypingMetrics(typedText, targetText, elapsedSeconds, combo = 0) {
  const safeElapsed = Math.max(elapsedSeconds, 1);
  const typedLen = typedText.length;
  let correctChars = 0;
  let errorChars = 0;
  let currentStreak = 0;

  for (let i = 0; i < typedLen && i < targetText.length; i++) {
    if (typedText[i] === targetText[i]) {
      correctChars++;
      currentStreak++;
    } else {
      errorChars++;
      currentStreak = 0;
    }
  }

  const effectiveCombo = Math.max(combo, currentStreak);
  const accuracy = typedLen === 0 ? 100 : Math.round((correctChars / typedLen) * 100);
  const minutes = safeElapsed / 60;
  const wpm = Math.max(0, Math.round((correctChars / 5) / minutes));
  const rawWpm = Math.max(0, Math.round((typedLen / 5) / minutes));
  const progress = targetText.length === 0
    ? 0
    : Math.min(100, Math.round((correctChars / targetText.length) * 100));
  const comboBonus = Math.min(60, Math.floor(effectiveCombo / 5) * 5);
  const score = Math.round(wpm * (accuracy / 100) * 10 + correctChars * 3 + comboBonus * 4);

  return {
    correctChars,
    errorChars,
    currentStreak,
    typedLen,
    accuracy,
    wpm,
    rawWpm,
    progress,
    score,
    isComplete: typedLen >= targetText.length && targetText.length > 0
  };
}

export function evaluateCharacterStates(typedText, targetText) {
  const states = [];
  for (let i = 0; i < targetText.length; i++) {
    const char = targetText[i];
    if (i < typedText.length) {
      states.push({
        char,
        status: typedText[i] === char ? 'correct' : 'wrong'
      });
    } else if (i === typedText.length) {
      states.push({
        char,
        status: 'current'
      });
    } else {
      states.push({
        char,
        status: 'pending'
      });
    }
  }
  return states;
}

export function getBallHealthState(hp) {
  const clamped = Math.max(0, Math.min(100, Math.round(hp)));
  if (clamped > 60) return { hp: clamped, level: 'high', label: 'STABLE' };
  if (clamped > 30) return { hp: clamped, level: 'medium', label: 'WARNING' };
  return { hp: clamped, level: 'low', label: 'CRITICAL' };
}

export function calculateRivalProgress(targetWpm, elapsedSeconds, totalCharacters = 110) {
  const charsTyped = (targetWpm * 5 * Math.max(0, elapsedSeconds)) / 60;
  return Math.min(100, Math.round((charsTyped / Math.max(1, totalCharacters)) * 100));
}

export function shouldTriggerConfetti(accuracy) {
  return Number(accuracy) > 95;
}

export const INITIAL_SOCIAL_LEADERBOARD = [
  {
    id: 'lb-1',
    name: 'ElenaVance',
    code: 'TA-9K2M',
    wpm: 114,
    accuracy: 99,
    score: 2480,
    mode: 'Editorial Prose',
    durationMinutes: 5,
    difficulty: 'Master',
    cheers: 42,
    isFriend: true,
    isSelf: false,
    timestamp: '2m ago'
  },
  {
    id: 'lb-2',
    name: 'LiamChen_Dev',
    code: 'TA-4X8P',
    wpm: 102,
    accuracy: 98,
    score: 2190,
    mode: 'Code & Syntax',
    durationMinutes: 3,
    difficulty: 'Advanced',
    cheers: 31,
    isFriend: true,
    isSelf: false,
    timestamp: '8m ago'
  },
  {
    id: 'lb-3',
    name: 'SoraTakahashi',
    code: 'TA-7W3N',
    wpm: 96,
    accuracy: 97,
    score: 1940,
    mode: 'Nitro Velocity Race',
    durationMinutes: 2,
    difficulty: 'Advanced',
    cheers: 27,
    isFriend: false,
    isSelf: false,
    timestamp: '14m ago'
  },
  {
    id: 'lb-4',
    name: 'MarcusSterling',
    code: 'TA-5L9Q',
    wpm: 88,
    accuracy: 96,
    score: 1765,
    mode: 'Editorial Prose',
    durationMinutes: 10,
    difficulty: 'Intermediate',
    cheers: 19,
    isFriend: false,
    isSelf: false,
    timestamp: '21m ago'
  },
  {
    id: 'lb-5',
    name: 'Aria Patel',
    code: 'TA-2H6D',
    wpm: 79,
    accuracy: 99,
    score: 1620,
    mode: 'Row Drills',
    durationMinutes: 5,
    difficulty: 'Intermediate',
    cheers: 24,
    isFriend: true,
    isSelf: false,
    timestamp: '35m ago'
  }
];

export function filterAndSortLeaderboard(entries, filter = 'all', sortBy = 'score') {
  const list = Array.isArray(entries) ? [...entries] : [];
  const filtered = list.filter((item) => {
    if (filter === 'friends') return Boolean(item.isFriend || item.isSelf);
    if (filter === 'precision') return Number(item.accuracy) > 95;
    if (filter === 'endurance') return Number(item.durationMinutes) >= 5;
    return true;
  });

  return filtered.sort((a, b) => {
    if (sortBy === 'wpm') return b.wpm - a.wpm || b.score - a.score;
    if (sortBy === 'accuracy') return b.accuracy - a.accuracy || b.wpm - a.wpm;
    return b.score - a.score || b.wpm - a.wpm;
  });
}

export function sanitizeText(input, maxLength = 60) {
  if (input === null || input === undefined) return '';
  const stripped = String(input)
    .replace(/<[^>]*>?/gm, '')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .trim()
    .slice(0, maxLength);
  return stripped
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function validateLeaderboardSubmission(payload) {
  if (!payload || typeof payload !== 'object') {
    return { valid: false, error: 'Missing submission payload' };
  }
  const cleanName = sanitizeText(payload.name, 18);
  if (!cleanName || cleanName.length < 2) {
    return { valid: false, error: 'Valid callsign (2-18 chars) is required' };
  }
  const rawWpm = Number(payload.wpm);
  if (!Number.isFinite(rawWpm) || rawWpm < 0 || rawWpm > 320) {
    return { valid: false, error: 'WPM outside verified human security bounds (0-320)' };
  }
  const rawAcc = Number(payload.accuracy ?? 100);
  if (!Number.isFinite(rawAcc) || rawAcc < 0 || rawAcc > 100) {
    return { valid: false, error: 'Accuracy must be between 0 and 100' };
  }
  const rawScore = Number(payload.score ?? 0);
  if (!Number.isFinite(rawScore) || rawScore < 0 || rawScore > 250000) {
    return { valid: false, error: 'Score outside verified arena bounds' };
  }
  const cleanCode = sanitizeText(payload.code || 'TA-0000', 10).toUpperCase();
  const cleanMode = sanitizeText(payload.mode || 'Editorial Prose', 36);
  const cleanDiff = sanitizeText(payload.difficulty || 'Intermediate', 20);
  const durationMinutes = TIMING_LEVELS_MINUTES.includes(Number(payload.durationMinutes))
    ? Number(payload.durationMinutes)
    : 2;

  return {
    valid: true,
    sanitized: {
      name: cleanName,
      code: cleanCode,
      wpm: Math.round(rawWpm),
      accuracy: Math.round(rawAcc),
      score: Math.round(rawScore),
      mode: cleanMode,
      durationMinutes,
      difficulty: cleanDiff
    }
  };
}
