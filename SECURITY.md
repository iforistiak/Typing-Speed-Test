# Security Policy & Code Protection Architecture

**TYPE ARENA** · Copyright © 2026 MD ISTIAK ISLAM · Ideas Deployed by MD ISTIAK ISLAM

## Implemented Security Layers

1. **HTTP Security Headers (`server.js`)**
   - `Content-Security-Policy`: Restricts script, style, font, and connection origins to trusted sources.
   - `X-Content-Type-Options: nosniff`: Prevents MIME-type sniffing attacks.
   - `X-XSS-Protection: 1; mode=block`: Enables browser XSS filtering.
   - `Referrer-Policy: strict-origin-when-cross-origin`: Protects referrer metadata.
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`: Locks down unused sensitive browser APIs.
   - `x-powered-by` header disabled to prevent server fingerprinting.

2. **Server-Side Source & Dotfile Protection (`server.js`)**
   - Blocks direct static file requests to sensitive backend/configuration files (`/server.js`, `/package.json`, `/bun.lock`, `/.env*`, and hidden dotfiles) with `403 Forbidden`.

3. **API Rate Limiting & Payload Guards (`server.js`)**
   - JSON body size capped at `16kb`.
   - Per-IP sliding-window rate limiter protects `/api/leaderboard` and `/api/leaderboard/:id/cheer` against automated spam or flooding.

4. **XSS Sanitization & Anti-Cheat Validation (`game-logic.js`)**
   - `sanitizeText()` strips HTML tags and escapes unsafe characters (`<`, `>`, `&`, `"`, `'`) across callsigns, rival codes, and leaderboard submissions.
   - `validateLeaderboardSubmission()` enforces realistic biometric WPM ceilings (`0–320 WPM`), accuracy bounds (`0–100%`), and score limits.

5. **Client-Side Code & Passage Integrity (`index.html` & `game-logic.js`)**
   - Core configuration objects are deeply locked with `Object.freeze()`.
   - Live typing inputs (`#passage-input`, `#arcade-word-input`) block `paste` and `drop` events to prevent artificial WPM injection, and `#passage-display` blocks context-menu/copy scraping during active sessions.
