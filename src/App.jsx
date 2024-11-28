import React, { useState, useEffect } from 'react';
import {
  Laptop, Dna, Gamepad, TrendingUp, Code, School,
  Rocket, Star, Sparkles, Ghost
} from 'lucide-react';

const FloatingIcon = ({ children, delay }) => {
  return (
    <div className="absolute animate-bounce" style={{
      animation: `float 3s ease-in-out infinite ${delay}s`,
    }}>
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-yellow-200 opacity-50 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
              size={Math.random() * 10 + 5}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <FloatingIcon delay={0}>
            <Rocket className="text-blue-400 absolute -top-16 -right-8" size={32} />
          </FloatingIcon>
          <FloatingIcon delay={0.5}>
            <Ghost className="text-purple-400 absolute -top-8 -left-8" size={32} />
          </FloatingIcon>

          <div className="relative inline-block"
               onMouseEnter={() => setIsHovering(true)}
               onMouseLeave={() => setIsHovering(false)}>
            <img
              src="/api/placeholder/200/200"
              alt="Profile"
              className="rounded-full w-48 h-48 mx-auto mb-8 border-4 border-purple-500 transform transition-all duration-500 hover:scale-110 hover:rotate-6"
            />
            {isHovering && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="text-yellow-400 animate-spin" size={64} />
              </div>
            )}
          </div>

          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
            Vignesh Seetharaman
          </h1>
          <p className="text-2xl text-blue-200 mb-8">Where Tech Meets Biotech</p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Biotech Journey",
              icon: <Dna size={32} className="text-green-400" />,
              content: "ASU Biotech & Bioenterprise Student",
              color: "from-green-400",
              details: "First semester student passionate about biotechnology"
            },
            {
              title: "Tech Explorer",
              icon: <Laptop size={32} className="text-blue-400" />,
              content: "Hardware & Tech Enthusiast",
              color: "from-blue-400",
              details: "Deep knowledge of mobile & laptop specifications"
            },
            {
              title: "Market Analyst",
              icon: <TrendingUp size={32} className="text-yellow-400" />,
              content: "Stock Market Enthusiast",
              color: "from-yellow-400",
              details: "Passionate about trading and market analysis"
            },
            {
              title: "Gaming & Anime",
              icon: <Gamepad size={32} className="text-pink-400" />,
              content: "Entertainment Passion",
              color: "from-pink-400",
              details: "Roblox player and anime enthusiast"
            },
            {
              title: "Code Creator",
              icon: <Code size={32} className="text-purple-400" />,
              content: "Web Developer",
              color: "from-purple-400",
              details: "Creating websites during free time"
            },
            {
              title: "Research Experience",
              icon: <School size={32} className="text-cyan-400" />,
              content: "Armtek Internship",
              color: "from-cyan-400",
              details: "Hands-on biotechnology research experience"
            }
          ].map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
              style={{
                transform: isHovering ? `translate(${
                  (mousePosition.x / window.innerWidth - 0.5) * -20
                }px, ${
                  (mousePosition.y / window.innerHeight - 0.5) * -20
                }px)` : 'none'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${card.color} to-transparent" />
              <div className="relative z-10">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-blue-200">{card.content}</p>
                <p className="mt-2 text-sm text-gray-300">{card.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Button */}
        <button
          className="fixed bottom-8 right-8 bg-purple-500 p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-12"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Rocket className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default App;
