import React, { useState, useEffect } from 'react';
import {
  Gamepad2, TrendingUp, Cpu, Github, Linkedin, Mail,
  Dna, School, Star, Sparkles, Rocket
} from 'lucide-react';

const FloatingIcon = ({ children, delay = 0 }) => (
  <div className="absolute animate-bounce" style={{
    animation: `float 3s ease-in-out infinite ${delay}s`
  }}>
    {children}
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isFloating, setIsFloating] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const floatInterval = setInterval(() => {
      setIsFloating(prev => !prev);
    }, 1500);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(floatInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const sections = {
    home: {
      icon: <Gamepad2 className="w-12 h-12 text-purple-500" />,
      title: "Hey, I'm Vignesh! 👋",
      content: (
        <div className="space-y-8 relative">
          <div className="absolute inset-0 overflow-hidden -z-10">
            {[...Array(10)].map((_, i) => (
              <Star
                key={i}
                className="absolute text-yellow-200 opacity-30 animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
                size={Math.random() * 10 + 5}
              />
            ))}
          </div>

          <div className="text-center">
            <div className="relative inline-block mb-6">
              <img
                src="/api/placeholder/200/200"
                alt="Profile"
                className="rounded-full w-48 h-48 mx-auto border-4 border-purple-500 transform transition-all duration-500 hover:scale-110 hover:rotate-6"
              />
              <Sparkles className="absolute top-0 right-0 text-yellow-400 animate-spin" size={24} />
            </div>
            <p className="text-xl text-gray-700">
              Biotech Student at ASU | Tech Enthusiast | Market Analyst
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <Dna className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="font-bold mb-2">Biotech Journey</h3>
              <p>First semester at ASU, exploring the world of biotechnology</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <Cpu className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-bold mb-2">Tech Passion</h3>
              <p>Hardware enthusiast with deep knowledge of latest tech</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
              <School className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-bold mb-2">Research</h3>
              <p>Internship experience at Armtek in biotechnology</p>
            </div>
          </div>
        </div>
      )
    },
    gaming: {
      icon: <Gamepad2 className="w-12 h-12 text-green-500" />,
      title: "Gaming & Entertainment",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Gamepad2 className="w-6 h-6 text-purple-500 mr-2" />
              Current Gaming
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Roblox Enthusiast
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Anime Fan
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Casual Gaming
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Star className="w-6 h-6 text-green-500 mr-2" />
              Entertainment
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Favorite Anime Series
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Gaming Communities
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Virtual Events
              </li>
            </ul>
          </div>
        </div>
      )
    },
    stocks: {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Market Analysis",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-4">Market Interests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold flex items-center mb-3">
                  <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                  Focus Areas
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Technology Sector
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Biotech Industry
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Gaming Companies
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold flex items-center mb-3">
                  <Star className="w-5 h-5 text-blue-500 mr-2" />
                  Analysis Methods
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Technical Analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Market Research
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Trend Analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    tech: {
      icon: <Cpu className="w-12 h-12 text-red-500" />,
      title: "Tech Exploration",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Cpu className="w-6 h-6 text-red-500 mr-2" />
              Hardware Knowledge
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Mobile Technologies
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Laptop Specifications
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Latest Tech Trends
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Rocket className="w-6 h-6 text-orange-500 mr-2" />
              Learning Path
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Web Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Biotech Integration
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Emerging Technologies
              </li>
            </ul>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-4 items-center">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === key
                      ? 'bg-purple-100 text-purple-700 scale-105'
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                >
                  {React.cloneElement(section.icon, { className: 'w-5 h-5' })}
                  <span className="capitalize">{key}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className={`transition-transform duration-1000 ${isFloating ? 'transform translate-y-2' : ''}`}>
                {sections[activeSection].icon}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              {sections[activeSection].title}
            </h2>
          </div>

          <div className="mt-8">
            {sections[activeSection].content}
          </div>
        </div>

        <footer className="mt-12 text-center">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/vseetha7"
               className="text-gray-600 hover:text-gray-900 transform transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername"
               className="text-gray-600 hover:text-gray-900 transform transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com"
               className="text-gray-600 hover:text-gray-900 transform transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </main>

      <button
        className="fixed bottom-8 right-8 bg-purple-500 p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-12 text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Rocket className="w-6 h-6" />
      </button>
    </div>
  );
};

export default App;
