import React, { useState, useEffect, useRef } from 'react';
import { Zap, Users, Trophy, Settings, LogOut, Play, Home, Share2, Wifi, ArrowLeft, Check, X } from 'lucide-react';

const TypingArena = () => {
  const [screen, setScreen] = useState('home');
  const [mode, setMode] = useState(null);
  const [playerName, setPlayerName] = useState('');
  const [playerCode, setPlayerCode] = useState('');
  const [difficulty, setDifficulty] = useState('normal');
  const [duration, setDuration] = useState(60);
  
  // Multiplayer state
  const [gameSession, setGameSession] = useState(null);
  const [players, setPlayers] = useState([]);
  const [pendingInvites, setPendingInvites] = useState([]);
  const [gameActive, setGameActive] = useState(false);
  const [gameResults, setGameResults] = useState(null);

  // Generate unique 4-digit code
  const generatePlayerCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  // Initialize session
  const initializeSession = (name) => {
    const code = generatePlayerCode();
    setPlayerName(name);
    setPlayerCode(code);
    
    const session = {
      hostCode: code,
      hostName: name,
      players: [{ name, code, status: 'host', wpm: 0, score: 0 }],
      createdAt: new Date(),
    };
    
    setGameSession(session);
    setPlayers(session.players);
    localStorage.setItem('playerCode', code);
    localStorage.setItem('playerName', name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white font-sans overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-lime-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* HEADER */}
        {screen !== 'home' && (
          <header className="backdrop-blur-md bg-black/30 border-b border-cyan-500/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setScreen('home');
                    setMode(null);
                  }}
                  className="p-2 hover:bg-white/10 rounded-lg transition-all"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <Zap className="w-8 h-8 text-cyan-400" />
                <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TYPE ARENA
                </h1>
              </div>

              <div className="flex items-center gap-4 text-sm">
                {playerCode && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-lg">
                    <Wifi className="w-4 h-4 text-cyan-400" />
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-gray-400">YOUR CODE</p>
                      <p className="text-cyan-400 font-black font-mono text-lg">{playerCode}</p>
                    </div>
                    <div className="sm:hidden">
                      <p className="text-cyan-400 font-black font-mono">{playerCode}</p>
                    </div>
                  </div>
                )}
                {playerName && (
                  <div className="text-right">
                    <p className="text-cyan-400 font-bold text-sm">{playerName}</p>
                    <p className="text-gray-400 text-xs">{gameActive ? 'IN GAME' : 'READY'}</p>
                  </div>
                )}
              </div>
            </div>
          </header>
        )}

        {/* MAIN CONTENT */}
        <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {screen === 'home' && (
            <HomeScreen
              onModeSelect={(m) => {
                setMode(m);
                setScreen('setup');
              }}
            />
          )}

          {screen === 'setup' && (
            <SetupScreen
              onStart={(name) => {
                initializeSession(name);
                setScreen(mode === 'speedtest' ? 'speedtest-lobby' : 'games-lobby');
              }}
              mode={mode}
            />
          )}

          {screen === 'speedtest-lobby' && (
            <SpeedTestLobby
              playerName={playerName}
              playerCode={playerCode}
              players={players}
              setPlayers={setPlayers}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              duration={duration}
              setDuration={setDuration}
              pendingInvites={pendingInvites}
              setPendingInvites={setPendingInvites}
              onStartTest={() => setScreen('speedtest-active')}
              onInvitePlayer={(inviteeCode) => {
                const invitedPlayer = players.find(p => p.code === inviteeCode);
                if (invitedPlayer) {
                  alert('Player already in game!');
                  return;
                }
                setPendingInvites([...pendingInvites, { from: playerCode, to: inviteeCode, status: 'pending' }]);
              }}
            />
          )}

          {screen === 'speedtest-active' && (
            <SpeedTestGame
              difficulty={difficulty}
              duration={duration}
              playerName={playerName}
              players={players}
              setPlayers={setPlayers}
              gameActive={gameActive}
              setGameActive={setGameActive}
              onFinish={(stats) => {
                setGameResults(stats);
                setScreen('speedtest-results');
              }}
            />
          )}

          {screen === 'speedtest-results' && (
            <SpeedTestResults
              gameResults={gameResults}
              players={players}
              playerCode={playerCode}
              onPlayAgain={() => {
                setGameActive(false);
                setScreen('speedtest-lobby');
              }}
              onHome={() => {
                setScreen('home');
                setMode(null);
                setGameActive(false);
              }}
            />
          )}

          {screen === 'games-lobby' && (
            <GamesLobby
              playerName={playerName}
              playerCode={playerCode}
              players={players}
              setPlayers={setPlayers}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              pendingInvites={pendingInvites}
              setPendingInvites={setPendingInvites}
              onGameSelect={(gameMode) => {
                setGameActive(true);
                setScreen('games-active');
                localStorage.setItem('selectedGameMode', gameMode);
              }}
              onInvitePlayer={(inviteeCode) => {
                const invitedPlayer = players.find(p => p.code === inviteeCode);
                if (invitedPlayer) {
                  alert('Player already in game!');
                  return;
                }
                setPendingInvites([...pendingInvites, { from: playerCode, to: inviteeCode, status: 'pending' }]);
              }}
            />
          )}

          {screen === 'games-active' && (
            <GamesActive
              difficulty={difficulty}
              playerName={playerName}
              playerCode={playerCode}
              players={players}
              setPlayers={setPlayers}
              gameActive={gameActive}
              setGameActive={setGameActive}
              onFinish={(stats) => {
                setGameResults(stats);
                setScreen('games-results');
              }}
            />
          )}

          {screen === 'games-results' && (
            <GamesResults
              gameResults={gameResults}
              players={players}
              playerCode={playerCode}
              onPlayAgain={() => {
                setGameActive(false);
                setScreen('games-lobby');
              }}
              onHome={() => {
                setScreen('home');
                setMode(null);
                setGameActive(false);
              }}
            />
          )}
        </main>

        {/* FOOTER */}
        <footer className="backdrop-blur-md bg-black/30 border-t border-cyan-500/20 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-400 text-sm">
            <p>© 2024 TYPE ARENA | Multiplayer Typing Competitions | v3.0</p>
            <p className="mt-2 text-xs text-gray-500">Share your 4-digit code to invite friends</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-shake { animation: shake 0.3s; }
        .animate-slide-in { animation: slideIn 0.4s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

// HOME SCREEN
const HomeScreen = ({ onModeSelect }) => {
  return (
    <div className="w-full max-w-5xl mx-auto animate-slide-in">
      <div className="text-center mb-16">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 tracking-tighter">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            TYPE ARENA
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-2">Competitive Typing Platform</p>
        <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Speed Test Card */}
        <div
          onClick={() => onModeSelect('speedtest')}
          className="group relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-cyan-400/30 hover:border-cyan-400/70 rounded-3xl p-8 sm:p-12 cursor-pointer hover:scale-105 transition-all duration-300 transform"
        >
          <div className="relative z-10 text-center">
            <p className="text-6xl mb-6 animate-float">⚡</p>
            <h2 className="text-3xl font-black mb-3 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              SPEED TEST
            </h2>
            <p className="text-gray-300 mb-4">Measure your WPM with accuracy tracking</p>
            <ul className="text-sm text-gray-400 space-y-2 text-left">
              <li>✓ Real-time WPM calculation</li>
              <li>✓ Accuracy percentage</li>
              <li>✓ Multiplayer battles</li>
              <li>✓ Live leaderboards</li>
            </ul>
          </div>
        </div>

        {/* Games Card */}
        <div
          onClick={() => onModeSelect('games')}
          className="group relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-purple-400/30 hover:border-purple-400/70 rounded-3xl p-8 sm:p-12 cursor-pointer hover:scale-105 transition-all duration-300 transform"
        >
          <div className="relative z-10 text-center">
            <p className="text-6xl mb-6 animate-float" style={{ animationDelay: '0.2s' }}>🎮</p>
            <h2 className="text-3xl font-black mb-3 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              GAME MODES
            </h2>
            <p className="text-gray-300 mb-4">Action-packed typing challenges</p>
            <ul className="text-sm text-gray-400 space-y-2 text-left">
              <li>✓ Car Racing Physics</li>
              <li>✓ Ball Survival Game</li>
              <li>✓ Enemy Defense</li>
              <li>✓ Multiplayer Battles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// SETUP SCREEN
const SetupScreen = ({ onStart, mode }) => {
  const [name, setName] = useState('');

  return (
    <div className="w-full max-w-2xl mx-auto animate-slide-in">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-black mb-4">
          {mode === 'speedtest' ? '⚡ SPEED TEST' : '🎮 GAME MODES'}
        </h1>
        <p className="text-gray-300">Enter your name to begin</p>
      </div>

      <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-cyan-400/30 rounded-2xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-bold text-cyan-400 mb-3 tracking-widest">YOUR NAME</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && name.trim() && onStart(name)}
            maxLength={20}
            placeholder="e.g. ShadowTyper..."
            className="w-full bg-black/50 border-2 border-cyan-400/50 focus:border-cyan-400 text-white px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all placeholder-gray-500 font-mono text-lg"
          />
        </div>

        <button
          onClick={() => name.trim() && onStart(name)}
          disabled={!name.trim()}
          className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-black text-lg rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 disabled:opacity-50 transition-all transform hover:scale-105"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

// SPEED TEST LOBBY
const SpeedTestLobby = ({
  playerName,
  playerCode,
  players,
  setPlayers,
  difficulty,
  setDifficulty,
  duration,
  setDuration,
  pendingInvites,
  setPendingInvites,
  onStartTest,
  onInvitePlayer,
}) => {
  const [inviteCode, setInviteCode] = useState('');

  const handleInvite = () => {
    if (inviteCode.length !== 4) {
      alert('Please enter a valid 4-digit code');
      return;
    }
    if (inviteCode === playerCode) {
      alert('You cannot invite yourself!');
      return;
    }
    onInvitePlayer(inviteCode);
    alert(`Invite sent to player ${inviteCode}!`);
    setInviteCode('');
  };

  const acceptInvite = (fromCode) => {
    // Simulate accepting invite
    const newPlayer = {
      name: `Player${fromCode}`,
      code: fromCode,
      status: 'accepted',
      wpm: 0,
      score: 0,
    };
    setPlayers([...players, newPlayer]);
    setPendingInvites(pendingInvites.filter(inv => inv.from !== fromCode));
  };

  const declineInvite = (fromCode) => {
    setPendingInvites(pendingInvites.filter(inv => inv.from !== fromCode));
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 animate-slide-in">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Players & Invites */}
        <div className="space-y-6">
          {/* Players List */}
          <div>
            <h3 className="text-lg font-black text-cyan-400 mb-4 tracking-widest">PLAYERS ({players.length})</h3>
            <div className="space-y-3">
              {players.map((p, i) => (
                <div key={i} className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-cyan-400/20 rounded-lg p-4 hover:border-cyan-400/50 transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-white">{p.name}</p>
                      <p className="text-xs text-gray-400 font-mono">{p.code}</p>
                    </div>
                    {p.status === 'host' && <span className="text-xs bg-yellow-500/30 text-yellow-400 px-2 py-1 rounded">HOST</span>}
                  </div>
                  <div className="text-xs font-bold px-2 py-1 rounded w-fit bg-green-500/30 text-green-400 mt-2">✓ READY</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Invites */}
          {pendingInvites.length > 0 && (
            <div>
              <h3 className="text-lg font-black text-yellow-400 mb-4 tracking-widest">INVITES</h3>
              <div className="space-y-3">
                {pendingInvites.map((inv, i) => (
                  <div key={i} className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border border-yellow-400/50 rounded-lg p-4">
                    <p className="text-sm text-yellow-300 mb-3">Invite from {inv.from}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => acceptInvite(inv.from)}
                        className="flex-1 py-2 bg-green-500/30 border border-green-400 text-green-400 rounded font-bold text-sm hover:bg-green-500/50 transition-all flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4" /> Accept
                      </button>
                      <button
                        onClick={() => declineInvite(inv.from)}
                        className="flex-1 py-2 bg-red-500/30 border border-red-400 text-red-400 rounded font-bold text-sm hover:bg-red-500/50 transition-all flex items-center justify-center gap-2"
                      >
                        <X className="w-4 h-4" /> Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Settings & Invite */}
        <div className="lg:col-span-2 space-y-6">
          {/* Invite Section */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-blue-400/30 rounded-2xl p-6">
            <h3 className="text-lg font-black text-blue-400 mb-4 tracking-widest">INVITE PLAYER</h3>
            <p className="text-sm text-gray-400 mb-4">Share your code: <span className="font-black text-cyan-400 text-lg">{playerCode}</span></p>
            <div className="flex gap-2">
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value.slice(0, 4))}
                placeholder="Enter 4-digit code"
                maxLength="4"
                className="flex-1 bg-black/50 border-2 border-blue-400/50 focus:border-blue-400 text-white px-4 py-3 rounded-lg focus:outline-none font-mono text-lg text-center"
              />
              <button
                onClick={handleInvite}
                className="px-6 py-3 bg-blue-500 text-white font-black rounded-lg hover:bg-blue-600 transition-all"
              >
                SEND
              </button>
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <h3 className="text-lg font-black text-purple-400 mb-4 tracking-wid
