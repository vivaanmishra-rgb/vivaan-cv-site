import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Award, BookOpen, Code, Languages, Heart } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Snake Game Logic
    const TILE = 20;
    const COLS = 25;
    const SIZE = TILE * COLS;
    const canvas = document.getElementById('snake-canvas') as HTMLCanvasElement | null;
    if (!canvas) return; // Exit if canvas not found
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Exit if context not available
    
    let snake: any[] = [{ x: 12, y: 10 }, { x: 12, y: 11 }, { x: 12, y: 12 }];
    let dir = { x: 0, y: -1 };
    let nextDir = { x: 0, y: -1 };
    let food: any = { x: 5, y: 5 };
    let score = 0;
    let highScore = 0;
    let running = false;
    
    function pad(n: number) { return String(n).padStart(4, '0'); }
    
    function randFood(s: any[]) {
      let f: any;
      do {
        f = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * COLS) };
      } while (s.some(seg => seg.x === f.x && seg.y === f.y));
      return f;
    }
    
    (window as any).startGame = function() {
      snake = [{ x: 12, y: 10 }, { x: 12, y: 11 }, { x: 12, y: 12 }];
      dir = { x: 0, y: -1 };
      nextDir = { x: 0, y: -1 };
      score = 0;
      food = randFood(snake);
      running = true;
      const overlay = document.getElementById('overlay');
      if (overlay) overlay.style.display = 'none';
      const scoreDisplay = document.getElementById('score-display');
      if (scoreDisplay) scoreDisplay.textContent = 'SCORE: ' + pad(0);
      tick();
    };
    
    function tick() {
      if (!running) return;
      dir = { ...nextDir };
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
      
      if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= COLS ||
          snake.some((s: any) => s.x === head.x && s.y === head.y)) {
        endGame(); return;
      }
      
      snake.unshift(head);
      
      if (head.x === food.x && head.y === food.y) {
        score += 10;
        if (score > highScore) highScore = score;
        food = randFood(snake);
        const scoreDisplay = document.getElementById('score-display');
        const hiDisplay = document.getElementById('hi-display');
        if (scoreDisplay) scoreDisplay.textContent = 'SCORE: ' + pad(score);
        if (hiDisplay) hiDisplay.textContent = 'HI-SCORE: ' + pad(highScore);
      } else {
        snake.pop();
      }
      
      draw();
      setTimeout(tick, Math.max(60, 120 - Math.min(score, 80)));
    }
    
    function endGame() {
      running = false;
      draw();
      const overlay = document.getElementById('overlay');
      const overlayTitle = document.getElementById('overlay-title');
      const overlayScore = document.getElementById('overlay-score');
      const overlaySub = document.getElementById('overlay-sub');
      const startBtn = document.getElementById('start-btn');
      
      if (overlayTitle) {
        overlayTitle.textContent = 'GAME OVER';
        overlayTitle.style.color = '#ff3333';
        overlayTitle.style.textShadow = '0 0 20px #ff3333';
      }
      if (overlayScore) {
        overlayScore.style.display = 'block';
        overlayScore.textContent = 'FINAL SCORE: ' + score;
      }
      if (overlaySub) overlaySub.textContent = '';
      if (startBtn) startBtn.textContent = 'INITIALIZE REBOOT';
      if (overlay) overlay.style.display = 'flex';
    }
    
    function draw() {
      if (!ctx) return;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, SIZE, SIZE);
      
      ctx.strokeStyle = '#0d2b0d';
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= COLS; i++) {
        ctx.beginPath(); ctx.moveTo(i * TILE, 0); ctx.lineTo(i * TILE, SIZE); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i * TILE); ctx.lineTo(SIZE, i * TILE); ctx.stroke();
      }
      
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#ffaa00';
      ctx.fillStyle = '#ffaa00';
      ctx.fillRect(food.x * TILE + 3, food.y * TILE + 3, TILE - 6, TILE - 6);
      ctx.shadowBlur = 0;
      
      snake.forEach((seg: any, i: number) => {
        if (i === 0) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#00ff41';
          ctx.fillStyle = '#55ff55';
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#00cc00';
        }
        ctx.fillRect(seg.x * TILE + 1, seg.y * TILE + 1, TILE - 2, TILE - 2);
      });
      ctx.shadowBlur = 0;
    }
    
    draw();
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d',
           'W','A','S','D'].includes(e.key)) e.preventDefault();
      if (!running) return;
      switch (e.key) {
        case 'ArrowUp':  case 'w': case 'W': if (dir.y !== 1)  nextDir = { x: 0, y: -1 }; break;
        case 'ArrowDown':case 's': case 'S': if (dir.y !== -1) nextDir = { x: 0, y:  1 }; break;
        case 'ArrowLeft':case 'a': case 'A': if (dir.x !== 1)  nextDir = { x: -1,y:  0 }; break;
        case 'ArrowRight':case 'd':case 'D': if (dir.x !== -1) nextDir = { x: 1, y:  0 }; break;
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-cyan-400 glow-text">&gt;_</span>
            <span className="text-white ml-2">Vivaan Mishra</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition">About</a>
            <a href="#achievements" className="text-gray-300 hover:text-cyan-400 transition">Achievements</a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition">Skills</a>
            <a href="#fun" className="text-gray-300 hover:text-cyan-400 transition">Fun</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-sm font-mono">SYSTEM ONLINE</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                <span className="text-white">Future</span><br/>
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Neurosurgeon</span><br/>
                <span className="text-white">&</span><br/>
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Cricketer</span>
              </h1>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                8th Grade | Houston, TX<br/>
                Aspiring to Harvard Medical School<br/>
                <span className="text-green-400">Passionate about the brain, code, and cricket</span>
              </p>

              <p className="text-gray-400 mb-8 italic border-l-2 border-green-400 pl-4">
                "If you want to do something, do it nicely, otherwise don't do it"
              </p>

              <div className="flex gap-4 flex-wrap">
                <a href="mailto:vivaan_mishra@s.thevillageschool.com" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition transform hover:scale-105">
                  <Mail size={18} />
                  Contact Me
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400/10 font-semibold rounded-lg transition">
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663609629172/iG2rcUGvpf7TdXQfsfVuKm/brain-illustration-M8mW8Dt8hUdq2wiFsuEswt.webp"
                alt="Brain Neural Network"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            <span className="text-cyan-400">// </span>
            <span className="text-white">About Me</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-cyan-500/20 p-6 hover:border-cyan-500/50 transition">
              <BookOpen className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Education</h3>
              <p className="text-gray-300 text-sm mb-3">
                Currently in 8th Grade with honors in ELA and IPC
              </p>
              <p className="text-green-400 font-semibold">Goal: 4.0 GPA</p>
            </Card>

            <Card className="bg-slate-800/50 border-green-500/20 p-6 hover:border-green-500/50 transition">
              <Heart className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Passion</h3>
              <p className="text-gray-300 text-sm mb-3">
                Fascinated by neuroscience and the complexity of the brain
              </p>
              <p className="text-cyan-400 font-semibold">Dream: Harvard Medical</p>
            </Card>

            <Card className="bg-slate-800/50 border-cyan-500/20 p-6 hover:border-cyan-500/50 transition">
              <Award className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Athlete</h3>
              <p className="text-gray-300 text-sm mb-3">
                Batting all-rounder for NWCC with 2-3 national trophies
              </p>
              <p className="text-green-400 font-semibold">Dream: Indian Cricket Team</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            <span className="text-green-400">// </span>
            <span className="text-white">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cricket */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-green-500/30 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🏏</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Cricket Excellence</h3>
                  <p className="text-green-400 text-sm">Top Order Batsman (#3) | All-Rounder</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▸</span>
                  <strong>Highest Score:</strong> 101* (Not Out)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▸</span>
                  National Trophy Winner (2-3 times)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▸</span>
                  Playing for North West Cricket Club (NWCC)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▸</span>
                  Aspiring to play for the Indian National Team
                </li>
              </ul>
            </Card>

            {/* Academics */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-cyan-500/30 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Academic Excellence</h3>
                  <p className="text-cyan-400 text-sm">Honors Student & NJHS Member</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span>
                  ELA Honors & IPC Honors (Current)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span>
                  🏅 National Junior Honors Society (NJHS) Member
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span>
                  Planned: AP Human Geography & AP Psychology
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span>
                  Target: 4.0 GPA through High School & College
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            <span className="text-cyan-400">// </span>
            <span className="text-white">Skills & Languages</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <Code size={24} />
                Technical Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold mb-2">Programming Languages</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">Python</Badge>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/50">HTML</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                <Languages size={24} />
                Languages
              </h3>
              <div className="space-y-2">
                {[
                  { lang: "English", level: "Fluent" },
                  { lang: "Hindi", level: "Fluent" },
                  { lang: "Urdu", level: "Fluent" },
                  { lang: "Spanish", level: "Basic" },
                  { lang: "Mandarin", level: "Basic" },
                ].map((item) => (
                  <div key={item.lang} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <span className="text-white font-semibold">{item.lang}</span>
                    <span className="text-gray-400 text-sm">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            <span className="text-green-400">// </span>
            <span className="text-white">Interests & Passions</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-cyan-500/20 p-6 hover:scale-105 transition">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Neuroscience</h3>
              <p className="text-gray-300">Passionate about <strong>brain imaging</strong> and <strong>neural plasticity</strong> — exploring how the brain adapts and heals</p>
            </Card>

            <Card className="bg-slate-800/50 border-green-500/20 p-6 hover:scale-105 transition">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-2">Technology</h3>
              <p className="text-gray-300">Building solutions with Python and web technologies</p>
            </Card>

            <Card className="bg-slate-800/50 border-cyan-500/20 p-6 hover:scale-105 transition">
              <div className="text-5xl mb-4">🏏</div>
              <h3 className="text-xl font-bold text-white mb-2">Cricket</h3>
              <p className="text-gray-300">Competitive all-rounder with a passion for the sport</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Fun Section - Snake Game */}
      <section id="fun" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-green-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            <span className="text-green-400">// </span>
            <span className="text-white">Have Some Fun</span>
          </h2>
          <p className="text-gray-300 text-center mb-12 text-lg">Take a break and play Terminal Snake — navigate the grid, consume the sectors, and don't crash!</p>
          
          <div className="flex flex-col items-center">
            <div className="mb-4 flex justify-between w-full max-w-[520px] text-cyan-400 font-mono text-sm">
              <span id="score-display">SCORE: 0000</span>
              <span id="hi-display">HI-SCORE: 0000</span>
            </div>
            <div className="relative border-2 border-green-400 shadow-lg shadow-green-400/50 p-2 bg-slate-900">
              <canvas id="snake-canvas" width="500" height="500" className="border border-green-400/50 block"></canvas>
              <div className="game-overlay absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-sm" id="overlay">
                <div className="overlay-title text-3xl font-black text-green-400 mb-2 tracking-wide" id="overlay-title">TERMINAL SNAKE</div>
                <div className="overlay-sub text-gray-400 text-sm mb-6" id="overlay-sub">Use Arrow Keys or WASD to move</div>
                <div className="overlay-score text-cyan-400 text-sm hidden" id="overlay-score"></div>
                <button className="px-8 py-3 bg-transparent border-2 border-green-400 text-green-400 font-mono font-bold text-sm tracking-widest hover:bg-green-400 hover:text-slate-900 transition" id="start-btn" onClick={() => (window as any).startGame()}>EXECUTE PROGRAM</button>
              </div>
            </div>
            <div className="mt-6 flex gap-6 text-xs text-gray-500 font-mono flex-wrap justify-center">
              <span><kbd className="border border-gray-600 px-2 py-1 rounded">W</kbd> / <kbd className="border border-gray-600 px-2 py-1 rounded">↑</kbd> UP</span>
              <span><kbd className="border border-gray-600 px-2 py-1 rounded">A</kbd> / <kbd className="border border-gray-600 px-2 py-1 rounded">←</kbd> LEFT</span>
              <span><kbd className="border border-gray-600 px-2 py-1 rounded">S</kbd> / <kbd className="border border-gray-600 px-2 py-1 rounded">↓</kbd> DOWN</span>
              <span><kbd className="border border-gray-600 px-2 py-1 rounded">D</kbd> / <kbd className="border border-gray-600 px-2 py-1 rounded">→</kbd> RIGHT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">
            <span className="text-cyan-400">// </span>
            <span className="text-white">Get In Touch</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Interested in learning more about my journey? Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:vivaan_mishra@s.thevillageschool.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-bold rounded-lg transition transform hover:scale-105"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-green-400 text-green-400 hover:bg-green-400/10 font-bold rounded-lg transition"
            >
              <Github size={20} />
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 bg-slate-950 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>
            <span className="text-green-400">VIVAAN_MISHRA_CV</span> v1.0 — © {new Date().getFullYear()} — Built with passion
          </p>
        </div>
      </footer>

      <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.8);
        }
      `}</style>
    </div>
  );
}
