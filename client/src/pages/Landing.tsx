import { Download, Gamepad2, Zap, Trophy } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Landing() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" style={{fontFamily: 'Courier New, monospace'}}>
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block px-6 py-2 border-2 border-cyan-500 bg-blue-900/50 rounded text-cyan-400 text-sm font-bold">
            &gt; ARCADE COLLECTION &lt;
          </div>
          <h1 className="text-7xl font-bold mb-6 text-cyan-400" style={{textShadow: '0 0 30px rgba(0, 204, 255, 0.6)'}}>
            PC / DREAMCAST
          </h1>
          <p className="text-2xl text-cyan-300 mb-8 max-w-2xl mx-auto">
            Classic arcade and Dreamcast games. Neon-soaked nostalgia at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => navigate('/games')} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg border-2 border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              <Download className="inline mr-2 w-5 h-5" /> BROWSE GAMES
            </button>
            <button onClick={() => navigate('/guides')} className="px-8 py-4 bg-slate-800 text-cyan-400 font-bold text-lg border-2 border-cyan-500 hover:bg-slate-700 transition-all">
              <Zap className="inline mr-2 w-5 h-5" /> LEARN MORE
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-6 border-2 border-cyan-500 bg-blue-900/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3K+</div>
              <div className="text-sm text-cyan-300">Games</div>
            </div>
            <div className="p-6 border-2 border-cyan-500 bg-blue-900/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-sm text-cyan-300">Free</div>
            </div>
            <div className="p-6 border-2 border-cyan-500 bg-blue-900/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-sm text-cyan-300">Arcade</div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-cyan-900 py-8 px-4 text-center text-cyan-400 text-sm">
        <p>&gt; © 2026 Gamesiteonline • Fahad • Tanzania &lt;</p>
      </footer>
    </div>
  );
}
