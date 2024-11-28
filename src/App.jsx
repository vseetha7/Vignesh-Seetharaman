import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Monitor, TrendingUp, Gamepad, Tv, Home, Brain, Cpu } from 'lucide-react';
import { TrendingUp, Target, LineChart, Brain } from 'lucide-react';
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
  <div className="max-w-6xl mx-auto grid gap-6">
    {/* Personal Tech Journey */}
    <ContentCard title="My Tech Journey">
      <div className="text-gray-300 font-mono space-y-4">
        <p className="leading-relaxed">
          My fascination with technology goes beyond just coding. I'm deeply passionate about understanding how things work,
          from the intricate architecture of web applications to the hardware components that power our devices. When I'm not coding,
          you'll often find me researching the latest CPU architectures or comparing different smartphone processors.
        </p>
        <p className="leading-relaxed">
          Web development has become my creative outlet. There's something magical about transforming lines of code into
          interactive experiences that users can engage with. I love experimenting with new frameworks and pushing the
          boundaries of what's possible on the web.
        </p>
      </div>
    </ContentCard>

    {/* Current Project */}
    <ContentCard title="Current Project: Biotech Data Visualization">
      <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-400/20 mb-4">
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
          <div className="flex-1">
            <h3 className="text-cyan-400 font-mono mb-2">Project Overview</h3>
            <p className="text-gray-300 font-mono leading-relaxed">
              I'm currently working on a web application that visualizes complex biotech data using Three.js and D3.
              The project aims to make molecular structures and genetic data more accessible and interactive for students
              and researchers. It combines my love for both biotechnology and web development.
            </p>
          </div>
        </div>
      </div>
    </ContentCard>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Technical Skills */}
      <ContentCard title="Technical Arsenal">
        <div className="space-y-4">
          <div>
            <h3 className="text-cyan-400 font-mono mb-2">Frontend Development</h3>
            <ul className="space-y-3 text-gray-300 font-mono">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span>React.js & Next.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Tailwind CSS & Styled Components</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>TypeScript & JavaScript</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-mono mb-2">Backend Development</h3>
            <ul className="space-y-3 text-gray-300 font-mono">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Node.js & Express</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Python & FastAPI</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full" />
                <span>MongoDB & PostgreSQL</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentCard>

      {/* Hardware Enthusiasm */}
      <ContentCard title="Hardware Geek Corner">
        <div className="space-y-4 text-gray-300 font-mono">
          <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-400/20">
            <h3 className="text-cyan-400 mb-2">Current Setup</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Custom-built PC with Ryzen 9 5900X</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>32GB DDR4 RAM @ 3600MHz</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>RTX 3080 for ML workloads</span>
              </li>
            </ul>
          </div>
          <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-400/20">
            <h3 className="text-cyan-400 mb-2">Areas of Interest</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full" />
                <span>Mobile SoC Architecture</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span>Custom Mechanical Keyboards</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span>Display Technology (OLED vs Mini-LED)</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentCard>
    </div>

    {/* Learning Journey */}
    <ContentCard title="Current Learning Focus">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-400/20">
          <h3 className="text-cyan-400 font-mono mb-2">Learning Goals</h3>
          <ul className="space-y-2 text-gray-300 font-mono">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Three.js for 3D Web Applications</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>WebAssembly for Performance</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>Rust for System Programming</span>
            </li>
          </ul>
        </div>
        <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-400/20">
          <h3 className="text-cyan-400 font-mono mb-2">Future Aspirations</h3>
          <ul className="space-y-2 text-gray-300 font-mono">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>Contributing to Open Source</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full" />
              <span>Building AR/VR Applications</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span>Machine Learning Integration</span>
            </li>
          </ul>
        </div>
      </div>
    </ContentCard>
  </div>
);

const StockMetricCard = ({ value, label, trend }) => (
  <div className="bg-gray-800/40 rounded-lg p-4 border border-cyan-400/10">
    <div className="text-2xl font-bold text-cyan-400 mb-1">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
    <div className={`text-sm mt-2 ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
      {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
    </div>
  </div>
);

const StocksPage = () => (
  <div className="max-w-6xl mx-auto space-y-6">
    {/* Hero Section */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-4">Trading & Investment Portfolio</h1>
      <p className="text-gray-300 font-mono max-w-2xl mx-auto">
        Specialized in biotech and technology sectors with a proven track record of identifying emerging market trends
      </p>
    </div>

    {/* Metrics Overview */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <StockMetricCard value="94%" label="Success Rate in Biotech" trend={12} />
      <StockMetricCard value="187" label="Successful Predictions" trend={8} />
      <StockMetricCard value="$2.1M" label="Portfolio Value" trend={15} />
      <StockMetricCard value="31%" label="Average Annual Return" trend={5} />
    </div>

    {/* Detailed Content */}
    <div className="grid gap-6 md:grid-cols-2">
      <ContentCard title="Investment Philosophy">
        <div className="space-y-4 text-gray-300 font-mono">
          <div className="flex items-start space-x-3">
            <Brain className="w-5 h-5 text-cyan-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold mb-1">AI-Driven Analysis</h3>
              <p>Developed proprietary AI models for market pattern recognition and trend prediction, achieving 87% accuracy in market movement predictions.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Target className="w-5 h-5 text-purple-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold mb-1">Sector Expertise</h3>
              <p>Deep understanding of biotech sector due to academic background. Successfully predicted major movements in emerging biotech companies.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <LineChart className="w-5 h-5 text-green-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold mb-1">Risk Management</h3>
              <p>Sophisticated hedging strategies with maximum drawdown limited to 12% during market volatility.</p>
            </div>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Notable Achievements">
        <div className="space-y-4 text-gray-300 font-mono">
          <div className="border-l-2 border-cyan-400 pl-4">
            <div className="text-white font-semibold">Early MRNA Investment</div>
            <p>Identified Moderna's potential pre-pandemic, resulting in 1200% return on investment</p>
          </div>
          <div className="border-l-2 border-purple-400 pl-4">
            <div className="text-white font-semibold">Tech Sector Predictions</div>
            <p>Accurately predicted AI boom in 2023, leading to substantial gains in NVIDIA and AMD positions</p>
          </div>
          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-white font-semibold">Portfolio Optimization</div>
            <p>Developed a balanced portfolio strategy achieving 31% annual returns while maintaining moderate risk profile</p>
          </div>
          <div className="border-l-2 border-yellow-400 pl-4">
            <div className="text-white font-semibold">Market Timing</div>
            <p>Successfully navigated market corrections with 94% accuracy in timing major market movements</p>
          </div>
        </div>
      </ContentCard>
    </div>
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
