import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Dna, Circuit, Gamepad2, Flask } from 'lucide-react';

const DNAHelix = () => (
  <div className="absolute left-0 h-full w-16 opacity-30 animate-spin-slow">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="absolute w-full" style={{ top: `${i * 10}%` }}>
        <div className="relative w-full h-8">
          <div className="absolute w-4 h-4 bg-green-400 rounded-full left-0 animate-pulse"
               style={{ animationDelay: `${i * 0.2}s` }} />
          <div className="absolute w-4 h-4 bg-purple-400 rounded-full right-0 animate-pulse"
               style={{ animationDelay: `${i * 0.2 + 0.1}s` }} />
          <div className="absolute w-full h-0.5 bg-blue-400/50 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
    ))}
  </div>
);

const CircuitLines = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-blue-400"
        style={{
          height: '1px',
          width: `${Math.random() * 100}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`,
        }}
      />
    ))}
  </div>
);

const App = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,150,0.2),rgba(0,0,0,0.4))]" />
      <CircuitLines />

      {/* DNA Animation */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2">
        <DNAHelix />
      </div>
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2">
        <DNAHelix />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-cyan-400 font-mono text-xl">VS.bio</div>
            <div className="flex space-x-6">
              <a href="https://github.com/vseetha7" className="text-white hover:text-cyan-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="text-center z-10">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
                Vignesh
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Dna className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">|</span>
              <Circuit className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">|</span>
              <Gamepad2 className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-xl text-gray-300 mb-8 font-mono">
              Biotech Student | Tech Enthusiast | Gamer
            </p>
            <div className="group relative">
              <button className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg
                               hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300
                               relative z-10">
                Explore My World
              </button>
              <div className="absolute inset-0 bg-cyan-400/20 blur-lg group-hover:blur-xl transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Animated Cursor Trail */}
        <div
          className="pointer-events-none fixed w-4 h-4 rounded-full bg-cyan-400/50 blur-sm"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.1s ease-out',
          }}
        />
      </div>
    </div>
  );
};

export default App;
