import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Award, BookOpen, Code, Languages, Heart } from "lucide-react";

export default function Home() {
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
                  <p className="text-green-400 text-sm">Batting All-Rounder</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
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
                  <h3 className="text-2xl font-bold text-white">Academic Focus</h3>
                  <p className="text-cyan-400 text-sm">Honors Student</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span>
                  ELA Honors
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">▸</span>
                  IPC (Integrated Physics & Chemistry) Honors
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
              <p className="text-gray-300">Fascinated by brain structure, neural pathways, and cognitive functions</p>
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
