import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TIMING_LEVELS_MINUTES,
  DIFFICULTY_LEVELS,
  STRETCH_ROUTINES,
  CHALLENGES,
  generatePlayerCode,
  calculateTypingMetrics,
  evaluateCharacterStates,
  getBallHealthState,
  calculateRivalProgress,
  formatDurationClock,
  getFingerForChar,
  shouldTriggerConfetti,
  INITIAL_SOCIAL_LEADERBOARD,
  filterAndSortLeaderboard,
  COPYRIGHT_NOTICE,
  sanitizeText,
  validateLeaderboardSubmission
} from './game-logic.js';

test('COPYRIGHT_NOTICE includes MD ISTIAK ISLAM attribution', () => {
  assert.ok(COPYRIGHT_NOTICE.includes('MD ISTIAK ISLAM'));
  assert.ok(COPYRIGHT_NOTICE.includes('Ideas Deployed by MD ISTIAK ISLAM'));
});

test('sanitizeText strips HTML tags and escapes special characters against XSS', () => {
  assert.equal(sanitizeText('<script>alert(1)</script>Pilot', 20), 'alert(1)Pilot');
  assert.equal(sanitizeText('Fast & "Precise"', 30), 'Fast &amp; &quot;Precise&quot;');
});

test('validateLeaderboardSubmission enforces biometric WPM bounds and sanitizes inputs', () => {
  const validRes = validateLeaderboardSubmission({
    name: '<b>Istiak</b>',
    code: 'ta-9k2m',
    wpm: 94,
    accuracy: 99,
    score: 2150,
    mode: 'Editorial Prose',
    durationMinutes: 5,
    difficulty: 'Master'
  });
  assert.equal(validRes.valid, true);
  assert.equal(validRes.sanitized.name, 'Istiak');
  assert.equal(validRes.sanitized.code, 'TA-9K2M');

  const cheatedWpm = validateLeaderboardSubmission({
    name: 'Bot999',
    wpm: 950,
    accuracy: 100,
    score: 50000
  });
  assert.equal(cheatedWpm.valid, false);
});

test('shouldTriggerConfetti triggers strictly when accuracy is above 95%', () => {
  assert.equal(shouldTriggerConfetti(96), true);
  assert.equal(shouldTriggerConfetti(100), true);
  assert.equal(shouldTriggerConfetti(95), false);
  assert.equal(shouldTriggerConfetti(88), false);
});

test('filterAndSortLeaderboard filters friends, precision (>95%), and endurance (>=5m) and sorts correctly', () => {
  const allByScore = filterAndSortLeaderboard(INITIAL_SOCIAL_LEADERBOARD, 'all', 'score');
  assert.equal(allByScore.length, 5);
  assert.ok(allByScore[0].score >= allByScore[1].score);

  const friendsOnly = filterAndSortLeaderboard(INITIAL_SOCIAL_LEADERBOARD, 'friends', 'wpm');
  assert.ok(friendsOnly.every((e) => e.isFriend || e.isSelf));

  const enduranceOnly = filterAndSortLeaderboard(INITIAL_SOCIAL_LEADERBOARD, 'endurance', 'score');
  assert.ok(enduranceOnly.every((e) => e.durationMinutes >= 5));
});

test('TIMING_LEVELS_MINUTES includes minute-wise 1, 2, 3, 5, 10, 15 minute options', () => {
  assert.deepEqual(TIMING_LEVELS_MINUTES, [1, 2, 3, 5, 10, 15]);
});

test('DIFFICULTY_LEVELS defines beginner, intermediate, advanced, and master labels', () => {
  assert.ok(DIFFICULTY_LEVELS.beginner);
  assert.ok(DIFFICULTY_LEVELS.intermediate);
  assert.ok(DIFFICULTY_LEVELS.advanced);
  assert.ok(DIFFICULTY_LEVELS.master);
});

test('formatDurationClock formats seconds into MM:SS tabular string', () => {
  assert.equal(formatDurationClock(120), '02:00');
  assert.equal(formatDurationClock(300), '05:00');
  assert.equal(formatDurationClock(900), '15:00');
  assert.equal(formatDurationClock(65), '01:05');
});

test('getFingerForChar maps home row and spacebar accurately', () => {
  assert.deepEqual(getFingerForChar('f'), { key: 'F', finger: 'Left Index' });
  assert.deepEqual(getFingerForChar('j'), { key: 'J', finger: 'Right Index' });
  assert.deepEqual(getFingerForChar(' '), { key: 'SPACE', finger: 'Thumb (Spacebar)' });
});

test('STRETCH_ROUTINES and CHALLENGES are populated', () => {
  assert.ok(STRETCH_ROUTINES.length >= 4);
  assert.ok(CHALLENGES.length >= 4);
});

test('generatePlayerCode returns deterministic TA-XXXX format', () => {
  const code = generatePlayerCode(0.42);
  assert.match(code, /^TA-[A-Z0-9]{4}$/);
});

test('calculateTypingMetrics computes accurate WPM, accuracy, errors, and completion', () => {
  const target = 'hello world';
  const metrics = calculateTypingMetrics('hello world', target, 12, 11);
  assert.equal(metrics.correctChars, 11);
  assert.equal(metrics.errorChars, 0);
  assert.equal(metrics.accuracy, 100);
  assert.equal(metrics.wpm, 11);
  assert.equal(metrics.progress, 100);
  assert.equal(metrics.isComplete, true);
});

test('calculateTypingMetrics handles partial and mistyped input', () => {
  const target = 'speed test';
  const metrics = calculateTypingMetrics('speex', target, 15, 0);
  assert.equal(metrics.correctChars, 4);
  assert.equal(metrics.errorChars, 1);
  assert.equal(metrics.accuracy, 80);
  assert.equal(metrics.isComplete, false);
});

test('evaluateCharacterStates marks correct, wrong, current, and pending characters', () => {
  const states = evaluateCharacterStates('abX', 'abcd');
  assert.deepEqual(states, [
    { char: 'a', status: 'correct' },
    { char: 'b', status: 'correct' },
    { char: 'c', status: 'wrong' },
    { char: 'd', status: 'current' }
  ]);
});

test('getBallHealthState classifies high, medium, and low health thresholds with semantic labels', () => {
  assert.deepEqual(getBallHealthState(85), { hp: 85, level: 'high', label: 'STABLE' });
  assert.deepEqual(getBallHealthState(45), { hp: 45, level: 'medium', label: 'WARNING' });
  assert.deepEqual(getBallHealthState(15), { hp: 15, level: 'low', label: 'CRITICAL' });
});

test('calculateRivalProgress scales linearly with WPM and elapsed time up to 100%', () => {
  assert.equal(calculateRivalProgress(60, 10, 100), 50);
  assert.equal(calculateRivalProgress(60, 30, 100), 100);
});
