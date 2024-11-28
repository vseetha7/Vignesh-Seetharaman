import React, { useState, useEffect } from 'react';
import {
  Gamepad2, TrendingUp, Cpu, Github, Linkedin, Mail,
  Mountain, Cloud, Sun, Trees
} from 'lucide-react';

const AnimatedScene = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-500" />

      {/* Animated clouds */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${(i * 20) + (scrollY * 0.1)}%`,
            top: `${i * 15}%`,
            transform: `translateX(-${scrollY * (0.1 * (i + 1))}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          <Cloud className="text-white w-24 h-24 opacity-80" />
        </div>
      ))}

      {/* Animated sun */}
      <div
        className="absolute right-20 top-20 animate-pulse"
        style={{
          transform: `translateY(${Math.sin(Date.now() / 1000) * 10}px)`,
        }}
      >
        <Sun className="text-yellow-400 w-32 h-32" />
      </div>

      {/* Mountains in the background */}
      <div className="absolute bottom-0 w-full">
        <div className="relative h-64">
          <Mountain className="absolute bottom-0 left-0 text-gray-700 w-96 h-64 opacity-80" />
          <Mountain className="absolute bottom-0 left-1/4 text-gray-800 w-96 h-72 opacity-90" />
          <Mountain className="absolute bottom-0 right-0 text-gray-600 w-96 h-56 opacity-70" />
        </div>
      </div>

      {/* Foreground elements */}
      <div className="absolute bottom-0 w-full">
        <div className="relative h-48">
          <Trees className="absolute bottom-0 left-10 text-green-700 w-32 h-48" />
          <Trees className="absolute bottom-0 right-20 text-green-800 w-40 h-56" />
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="relative z-10 text-white text-center">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Vignesh
          </span>
        </h1>
        <p className="text-2xl mb-8 animate-slide-up">
          Biotech Student | Tech Enthusiast | Gamer
        </p>
        <div className="flex space-x-4 justify-center">
          <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-all transform hover:scale-105">
            Explore My Work
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedScene />
      <HeroSection />

      {/* Content sections would go here */}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">VS</div>
          <div className="flex space-x-6">
            {[
              { icon: <Github />, link: "https://github.com/vseetha7" },
              { icon: <Linkedin />, link: "#" },
              { icon: <Mail />, link: "mailto:your.email@example.com" }
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="text-white hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
