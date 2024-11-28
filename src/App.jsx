import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Monitor, TrendingUp, Gamepad, Tv, Home, Brain, Cpu } from 'lucide-react';

// Reusing your DNA Helix component
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

// Circuit Lines Background
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

export default function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const PageWrapper = ({ children }) => (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,150,0.2),rgba(0,0,0,0.4))]" />
      <CircuitLines />
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2">
        <DNAHelix />
      </div>
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2">
        <DNAHelix />
      </div>
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-cyan-400 font-mono text-xl">Vignesh</div>
            <div className="flex space-x-6">
              <NavButton Icon={Home} text="Home" onClick={() => setCurrentPage('home')} active={currentPage === 'home'} />
              <NavButton Icon={Monitor} text="Tech" onClick={() => setCurrentPage('tech')} active={currentPage === 'tech'} />
              <NavButton Icon={TrendingUp} text="Stocks" onClick={() => setCurrentPage('stocks')} active={currentPage === 'stocks'} />
              <NavButton Icon={Gamepad} text="Gaming" onClick={() => setCurrentPage('gaming')} active={currentPage === 'gaming'} />
              <NavButton Icon={Tv} text="Anime" onClick={() => setCurrentPage('anime')} active={currentPage === 'anime'} />
            </div>
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
        <div className="pt-20 px-4">
          {children}
        </div>
      </div>
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
  );

  const pages = {
    home: <HomePage />,
    tech: <TechnologyPage />,
    stocks: <StocksPage />,
    gaming: <GamingPage />,
    anime: <AnimePage />
  };

  return (
    <PageWrapper>
      {pages[currentPage]}
    </PageWrapper>
  );
}

const NavButton = ({ Icon, text, onClick, active }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
      active ? 'text-cyan-400 bg-cyan-900/30' : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-900/20'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-mono">{text}</span>
  </button>
);

const HomePage = () => (
  <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-6">
        <span className="text-white">Hi, I'm </span>
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
          Vignesh Seetharaman
        </span>
      </h1>
      <div className="flex items-center justify-center space-x-4 mb-8">
        <Brain className="w-6 h-6 text-green-400" />
        <span className="text-gray-300">|</span>
        <Cpu className="w-6 h-6 text-blue-400" />
        <span className="text-gray-300">|</span>
        <Gamepad className="w-6 h-6 text-purple-400" />
      </div>
      <p className="text-xl text-gray-300 mb-8 font-mono">
        Biotech Student | Tech Enthusiast | Gamer
      </p>
    </div>
  </div>
);

const ContentCard = ({ title, children }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 shadow-lg shadow-cyan-400/10">
    <h2 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">{title}</h2>
    {children}
  </div>
);

const TechnologyPage = () => (
  <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
    <ContentCard title="Frontend Skills">
      <ul className="space-y-3 text-gray-300 font-mono">
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
          <span>React.js & Next.js</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full" />
          <span>Tailwind CSS</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full" />
          <span>TypeScript</span>
        </li>
      </ul>
    </ContentCard>
    <ContentCard title="Backend Skills">
      <ul className="space-y-3 text-gray-300 font-mono">
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span>Node.js</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
          <span>Python</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full" />
          <span>SQL & NoSQL</span>
        </li>
      </ul>
    </ContentCard>
  </div>
);

const StocksPage = () => (
  <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
    <ContentCard title="Trading Strategy">
      <p className="text-gray-300 font-mono">
        Long-term value investing with focus on fundamentals and market trends.
        Specializing in technology and biotech sectors.
      </p>
    </ContentCard>
    <ContentCard title="Market Analysis">
      <p className="text-gray-300 font-mono">
        Technical and fundamental analysis of stocks and market sectors.
        Emphasis on risk management and portfolio diversification.
      </p>
    </ContentCard>
  </div>
);

const GamingPage = () => (
  <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
    <ContentCard title="Roblox Favorites">
      <ul className="space-y-3 text-gray-300 font-mono">
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-pink-400 rounded-full" />
          <span>Adopt Me</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full" />
          <span>Blox Fruits</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full" />
          <span>Pet Simulator X</span>
        </li>
      </ul>
    </ContentCard>
    <ContentCard title="Achievements">
      <ul className="space-y-3 text-gray-300 font-mono">
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
          <span>Top Rankings</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span>Rare Collections</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full" />
          <span>Special Events</span>
        </li>
      </ul>
    </ContentCard>
  </div>
);

const AnimePage = () => (
  <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
    <ContentCard title="Currently Watching">
      <ul className="space-y-3 text-gray-300 font-mono">
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full" />
          <span>Attack on Titan</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full" />
          <span>Demon Slayer</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full" />
          <span>Jujutsu Kaisen</span>
        </li>
      </ul>
    </ContentCard>
    <ContentCard title="All-Time Favorites">
      <ul className="space-y-3 text-gray-300 font-mono">
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-400 rounded-full" />
          <span>Death Note</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
          <span>Full Metal Alchemist</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
          <span>One Piece</span>
        </li>
      </ul>
    </ContentCard>
    <ContentCard title="Watchlist">
      <ul className="space-y-3 text-gray-300 font-mono">
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full" />
          <span>Chainsaw Man</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full" />
          <span>Blue Lock</span>
        </li>
        <li className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span>Spy x Family</span>
        </li>
      </ul>
    </ContentCard>
  </div>
);
