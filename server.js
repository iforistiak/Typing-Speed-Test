/**
 * TYPE ARENA — Express Production Server & Security Layer
 * Copyright (c) 2026 MD ISTIAK ISLAM
 * Ideas Deployed by MD ISTIAK ISLAM
 * Licensed under the MIT License.
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  INITIAL_SOCIAL_LEADERBOARD,
  COPYRIGHT_NOTICE,
  validateLeaderboardSubmission,
  sanitizeText
} from './game-logic.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.disable('x-powered-by');

// 1. Security Layer: Hardened HTTP Security Headers
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader('X-Copyright-Owner', 'MD ISTIAK ISLAM - Ideas Deployed by MD ISTIAK ISLAM');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob:; connect-src 'self';"
  );
  next();
});

// 2. Code Protection Layer: Block direct HTTP access to backend source, lockfiles, and dotfiles
const PROTECTED_PATHS = new Set([
  '/server.js',
  '/package.json',
  '/bun.lock',
  '/game-logic.test.js',
  '/.env',
  '/.env.example',
  '/.gitignore'
]);

app.use((req, res, next) => {
  const reqPath = req.path || '';
  if (PROTECTED_PATHS.has(reqPath) || reqPath.startsWith('/.')) {
    res.status(403).json({
      error: 'Access Denied — Protected Source File',
      copyright: COPYRIGHT_NOTICE
    });
    return;
  }
  next();
});

// 3. Sliding-Window API Rate Limiter (Anti-Spam / DoS Protection)
const rateBuckets = new Map();
function rateLimitMiddleware(maxRequests = 35, windowMs = 60_000) {
  return (req, res, next) => {
    const ip = req.ip || req.socket?.remoteAddress || 'local';
    const now = Date.now();
    const bucket = rateBuckets.get(ip) || [];
    const recent = bucket.filter((ts) => now - ts < windowMs);
    if (recent.length >= maxRequests) {
      res.status(429).json({ error: 'Rate limit exceeded. Please wait before submitting again.' });
      return;
    }
    recent.push(now);
    rateBuckets.set(ip, recent);
    next();
  };
}

const socialLeaderboard = INITIAL_SOCIAL_LEADERBOARD.map((entry) => ({ ...entry }));

app.use(express.json({ limit: '16kb' }));
app.use(express.static(__dirname));

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    app: 'TYPE ARENA',
    license: 'MIT',
    copyright: COPYRIGHT_NOTICE,
    security: 'CSP + RateLimit + AntiCheat Active'
  });
});

app.get('/api/leaderboard', (_req, res) => {
  res.json({ entries: socialLeaderboard, copyright: COPYRIGHT_NOTICE });
});

app.post('/api/leaderboard', rateLimitMiddleware(25, 60_000), (req, res) => {
  const check = validateLeaderboardSubmission(req.body);
  if (!check.valid) {
    res.status(400).json({ error: check.error });
    return;
  }

  const { name, code, wpm, accuracy, score, mode, durationMinutes, difficulty } = check.sanitized;
  const existingIdx = socialLeaderboard.findIndex((e) => e.code === code);
  const entry = {
    id: existingIdx >= 0 ? socialLeaderboard[existingIdx].id : `lb-${Date.now()}`,
    name,
    code,
    wpm,
    accuracy,
    score,
    mode,
    durationMinutes,
    difficulty,
    cheers: existingIdx >= 0 ? socialLeaderboard[existingIdx].cheers + 1 : 1,
    isFriend: true,
    isSelf: true,
    timestamp: 'Just now'
  };

  if (existingIdx >= 0) {
    if (entry.score >= socialLeaderboard[existingIdx].score) {
      socialLeaderboard[existingIdx] = entry;
    }
  } else {
    socialLeaderboard.push(entry);
  }

  res.json({ entries: socialLeaderboard, latest: entry });
});

app.post('/api/leaderboard/:id/cheer', rateLimitMiddleware(45, 60_000), (req, res) => {
  const cleanId = sanitizeText(req.params.id, 32);
  const item = socialLeaderboard.find((e) => e.id === cleanId);
  if (!item) {
    res.status(404).json({ error: 'Entry not found' });
    return;
  }
  item.cheers += 1;
  res.json({ entry: item });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`TYPE ARENA server running at http://0.0.0.0:${PORT} (${COPYRIGHT_NOTICE})`);
});
