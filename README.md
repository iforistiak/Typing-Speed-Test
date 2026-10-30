# TYPE ARENA — Complete Typing Practice, Arcade Games, Challenges & Stretch Studio

[![License: MIT](https://img.shields.io/badge/License-MIT-2563eb.svg)](./LICENSE)
[![Security Layer](https://img.shields.io/badge/Security-Hardened%20CSP%20%26%20Anti--Cheat-059669.svg)](./SECURITY.md)

**Copyright © 2026 MD ISTIAK ISLAM · Ideas Deployed by MD ISTIAK ISLAM**

TYPE ARENA is a full-stack, light-themed frosted-glass typing platform designed for sustained typing fluency, arcade speed training, precision challenges, ergonomic hand-stretch recovery, and social leaderboard competition.

---

## Key Features

- **Minute-Wise Timing Matrix**: Instant selection between **1, 2, 3, 5, 10, and 15-minute** sessions with continuous multi-paragraph cycling so long endurance sessions never run out of text.
- **Calibrated Difficulty Labels**: Four distinct tiers (**Beginner · 32 WPM**, **Intermediate · 52 WPM**, **Advanced · 72 WPM**, **Master · 92 WPM**) with real-time AI pacer lanes.
- **Interactive Typing Practice Studio**:
  - **Editorial Prose & Fluency**, **Keyboard Row Mastery**, **Developer Code & Syntax**, **Financial Numbers & Data**, and **Custom Text** practice.
  - **Live Finger & Key Guide**: Visual QWERTY keymap highlighting the exact target key and recommended touch-typing finger zone.
- **4 Interactive Typing Games**:
  1. **Speed Passage Sprint** — Multi-minute paragraph flow against calibrated pacers.
  2. **Nitro Velocity Race** — Word-strike sprint track with streak acceleration.
  3. **Core Shield Defense** — Continuous containment integrity recharge under time pressure.
  4. **Sector Wave Defense** — Tactical word-lock defense against Swarmer, Interceptor, and Cruiser formations.
- **4 Precision & Endurance Challenges**:
  - **No-Backspace Ironman**, **98% Precision Protocol**, **Tempo Escalator (+8 WPM / 30s)**, and **Syntax & Brackets Gauntlet**.
- **Guided Typing Stretch & Strategy Studio**:
  - 4 interactive countdown stretch routines (Wrist Flexor/Extensor Release, Tendon Glides, Thumb/Thenar Decompression, Cervical & Shoulder Reset) + 4 biomechanical speed strategies.
- **>95% Accuracy Canvas Confetti Celebration**:
  - Hardware-accelerated HTML5 `<canvas>` particle physics celebration that triggers automatically whenever a session completes with **accuracy above 95%**.
- **Social Leaderboard & Live Cheers**:
  - Filter by **Global Top**, **Friends & Rivals**, **95%+ Precision Club**, and **Endurance (5m+)**; sort by **Top Score**, **Fastest WPM**, or **Highest Accuracy**; send live cheers (`+1`) and post session scores.
- **Multi-Layer Security & Anti-Cheat Protection**:
  - Hardened HTTP security headers (`Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`), sliding-window API rate limiting, XSS sanitization, WPM ceiling validation, frozen runtime constants, and anti-paste/anti-copy passage protection.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the server on http://0.0.0.0:3000
npm run dev

# 3. Run unit tests (Node test runner)
npm test
```

---

## Project Structure

```text
├── index.html          # Light-theme glass UI, Canvas Confetti engine, and studio controller
├── game-logic.js       # Pure typing telemetry, leaderboard sorting, and security/sanitization logic
├── game-logic.test.js  # Automated unit test suite (node:test)
├── server.js           # Express server with security headers, rate limiting, and leaderboard API
├── SECURITY.md         # Security architecture and anti-cheat documentation
├── LICENSE             # MIT License (© 2026 MD ISTIAK ISLAM)
└── package.json        # Scripts and metadata
```

---

## License & Copyright

Licensed under the [MIT License](./LICENSE).

**Copyright © 2026 MD ISTIAK ISLAM. Ideas Deployed by MD ISTIAK ISLAM.**