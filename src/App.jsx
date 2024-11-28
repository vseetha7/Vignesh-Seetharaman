import React, { useState, useEffect } from 'react';
import { Gamepad2, TrendingUp, Cpu, Github, Linkedin, Mail } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isFloating, setIsFloating] = useState(true);

  useEffect(() => {
    const floatInterval = setInterval(() => {
      setIsFloating(prev => !prev);
    }, 1500);

    return () => clearInterval(floatInterval);
  }, []);

  const sections = {
    home: {
      icon: <Gamepad2 className="w-12 h-12 text-purple-500" />,
      title: "Game Enthusiast & Tech Lover",
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            Hey there! 👋 I'm Vignesh, a tech enthusiast who loves diving into
            new technologies, analyzing market trends, and exploring virtual worlds.
          </p>
          <div className={`transition-transform duration-1000 ${isFloating ? 'transform translate-y-2' : ''}`}>
            <Gamepad2 className="w-24 h-24 text-purple-500 mx-auto" />
          </div>
        </div>
      )
    },
    gaming: {
      icon: <Gamepad2 className="w-12 h-12 text-green-500" />,
      title: "Gaming Passion",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Favorite Games</h3>
            <ul className="list-disc pl-5">
              <li>Call of Duty</li>
              <li>God of War</li>
              <li>FIFA</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Gaming Achievements</h3>
            <ul className="list-disc pl-5">
              <li>Champion in Local Tournament</li>
              <li>1000+ Hours in COD</li>
              <li>Max Level Achievement</li>
            </ul>
          </div>
        </div>
      )
    },
    stocks: {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Market Explorer",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Market Interests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold">Favorite Sectors</h4>
                <ul className="list-disc pl-5">
                  <li>Technology</li>
                  <li>Gaming Industry</li>
                  <li>Renewable Energy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Analysis Tools</h4>
                <ul className="list-disc pl-5">
                  <li>Technical Analysis</li>
                  <li>Fundamental Research</li>
                  <li>Market Sentiment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    tech: {
      icon: <Cpu className="w-12 h-12 text-red-500" />,
      title: "Tech Enthusiast",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
            <ul className="list-disc pl-5">
              <li>React & JavaScript</li>
              <li>Python Development</li>
              <li>Cloud Technologies</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Current Learning</h3>
            <ul className="list-disc pl-5">
              <li>AI/ML</li>
              <li>Blockchain</li>
              <li>DevOps</li>
            </ul>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-4 items-center">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === key
                      ? 'bg-purple-100 text-purple-700'
                      : 'hover:bg-gray-100'
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
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {sections[activeSection].icon}
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              {sections[activeSection].title}
            </h2>
          </div>

          <div className="mt-8">
            {sections[activeSection].content}
          </div>
        </div>

        <footer className="mt-12 text-center">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/vseetha7" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
