import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Monitor,
  TrendingUp,
  Gamepad,
  Tv,
  Home,
  Brain,
  Cpu
} from 'lucide-react';

// Content Card Component
const ContentCard = ({ title, children }) => (
  <div className="bg-gray-800/50 rounded-lg p-6">
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    {children}
  </div>
);

// Navigation Button Component
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

// DNA Helix Animation Component
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

// Circuit Lines Background Component
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

// Home Page Component
const HomePage = () => (
  <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
    <div className="text-center space-y-8">
      <div className="relative w-48 h-48 mx-auto mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30 animate-pulse" />
        <img
          src="/api/placeholder/192/192"
          alt="Vignesh Seetharaman"
          className="relative z-10 rounded-full w-48 h-48 object-cover border-4 border-cyan-400/30 shadow-lg shadow-cyan-400/20"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-blue-400/10 animate-pulse" />
      </div>

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

// Technology Page Component
const TechnologyPage = () => (
  <div className="max-w-6xl mx-auto grid gap-6">
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

    <div className="grid md:grid-cols-2 gap-6">
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

// Stocks Page Component
const StocksPage = () => (
  <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
    <ContentCard title="Trading Strategy">
      <div className="space-y-4 text-gray-300 font-mono">
        {/* AI-Enhanced Analysis */}
        <div className="flex items-start space-x-3">
          <TrendingUp className="w-5 h-5 text-cyan-400 mt-1" />
          <div>
            <h3 className="text-white font-semibold mb-2">AI-Enhanced Analysis</h3>
            <p>Leveraging machine learning models for pattern recognition in biotech and tech sectors, achieving 87% prediction accuracy.</p>
          </div>
        </div>

        {/* Research-Backed Approach */}
        <div className="flex items-start space-x-3">
          <Brain className="w-5 h-5 text-purple-400 mt-1" />
          <div>
            <h3 className="text-white font-semibold mb-2">Research-Backed Approach</h3>
            <p>Combining biotech expertise with deep market analysis. Early investor in key players like Moderna pre-pandemic.</p>
          </div>
        </div>

        {/* Risk Management */}
        <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-400/20 mt-6">
          <h3 className="text-cyan-400 font-mono mb-2">Risk Management</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Position sizing based on volatility metrics</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>Stop-loss optimization using ML models</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full" />
              <span>Portfolio hedging with inverse ETFs</span>
            </li>
          </ul>
        </div>
      </div>
    </ContentCard>

    <ContentCard title="Market Performance">
      <div className="space-y-4 text-gray-300 font-mono">
        {/* Key Achievements */}
        <div className="flex items-start space-x-3">
          <Monitor className="w-5 h-5 text-green-400 mt-1" />
          <div>
            <h3 className="text-white font-semibold mb-2">Key Achievements</h3>
            <ul className="space-y-2">
              <li>• 31% average annual return</li>
              <li>• Successfully predicted AI sector boom</li>
              <li>• 94% accuracy in biotech predictions</li>
            </ul>
          </div>
        </div>

        {/* Portfolio Strategy */}
        <div className="border-l-2 border-cyan-400 pl-4 mt-4">
          <div className="text-white font-semibold mb-2">Portfolio Strategy</div>
          <p>Sophisticated risk management with hedging techniques and strategic diversification across high-growth sectors.</p>
        </div>

        {/* Sector Focus */}
        <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
          <h3 className="text-white font-semibold mb-3">Sector Focus</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cyan-900/20 p-3 rounded border border-cyan-400/20">
              <h4 className="text-cyan-400 text-sm mb-2">Biotech</h4>
              <p className="text-sm">45% allocation</p>
            </div>
            <div className="bg-purple-900/20 p-3 rounded border border-purple-400/20">
              <h4 className="text-purple-400 text-sm mb-2">Tech</h4>
              <p className="text-sm">35% allocation</p>
            </div>
            <div className="bg-green-900/20 p-3 rounded border border-green-400/20">
              <h4 className="text-green-400 text-sm mb-2">Clean Energy</h4>
              <p className="text-sm">15% allocation</p>
            </div>
            <div className="bg-yellow-900/20 p-3 rounded border border-yellow-400/20">
              <h4 className="text-yellow-400 text-sm mb-2">Others</h4>
              <p className="text-sm">5% allocation</p>
            </div>
          </div>
        </div>

        {/* Future Outlook */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-4 rounded-lg border border-cyan-400/20">
          <h3 className="text-white font-semibold mb-2">Future Outlook</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span>Focus on AI-driven healthcare solutions</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>Expanding into quantum computing sector</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Monitoring AR/VR developments</span>
            </li>
          </ul>
        </div>
      </div>
    </ContentCard>
  </div>
);
          // Gaming Page Component
const GamingPage = () => (
  <div className="max-w-6xl mx-auto space-y-8">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-4">Gaming Portfolio</h1>
      <p className="text-gray-300 font-mono max-w-2xl mx-auto">
        From strategic board games to immersive open worlds, I'm passionate about diverse gaming experiences
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <ContentCard title="Current Gaming Obsessions">
        <div className="space-y-6">
          <div className="group relative overflow-hidden rounded-lg bg-gray-800/50 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-xl">Genshin Impact</h3>
              <div className="bg-cyan-400/20 px-3 py-1 rounded-full">
                <span className="text-cyan-400 text-sm">Active Player</span>
              </div>
            </div>
            <div className="space-y-2 text-gray-300 font-mono">
              <p>AR 56 • Main: Raiden Shogun</p>
              <p>Favorite Region: Inazuma</p>
              <div className="mt-4 flex space-x-2">
                <span className="bg-purple-400/20 text-purple-400 px-2 py-1 rounded-md text-xs">Electro Main</span>
                <span className="bg-blue-400/20 text-blue-400 px-2 py-1 rounded-md text-xs">Inazuma Explorer</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-gray-300 font-mono">
            <div className="flex items-center space-x-2">
              <Gamepad className="w-5 h-5 text-purple-400" />
              <span className="font-semibold text-white">Currently Playing:</span>
            </div>
            <ul className="space-y-3 pl-7">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span>Baldur's Gate 3 - Level 10 Paladin</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Lethal Company - 200+ Hours</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Palworld - Growing Collection</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Roblox Adventures">
        <div className="space-y-4">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Blox Fruits Master</h3>
            <ul className="space-y-2 text-gray-300 font-mono">
              <li>• Max Level Achievement</li>
              <li>• Rare Fruit Collection</li>
              <li>• Top 100 PvP Ranking</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Pet Simulator X</h3>
            <ul className="space-y-2 text-gray-300 font-mono">
              <li>• Exclusive Pets Collection</li>
              <li>• All Areas Unlocked</li>
              <li>• Premium Trading Status</li>
            </ul>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Traditional Gaming">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div>
              <h3 className="text-white font-semibold">♟️ Chess</h3>
              <p className="text-gray-300 font-mono">1200+ ELO Rating • Favorite Opening: Sicilian Defense</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div>
              <h3 className="text-white font-semibold">🥏 Carrom</h3>
              <p className="text-gray-300 font-mono">State Level Player • Double-Board Specialist</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div>
              <h3 className="text-white font-semibold">🎱 Pool</h3>
              <p className="text-gray-300 font-mono">8-Ball Expert • Local Tournament Winner</p>
            </div>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Gaming Milestones">
        <div className="space-y-4">
          <div className="border-l-2 border-cyan-400 pl-4">
            <div className="text-white font-semibold">Speed Running</div>
            <p className="text-gray-300 font-mono">Top 1% in Hollow Knight completion time</p>
          </div>

          <div className="border-l-2 border-purple-400 pl-4">
            <div className="text-white font-semibold">Tournament Victory</div>
            <p className="text-gray-300 font-mono">Regional Genshin Impact Combat Championship</p>
          </div>

          <div className="border-l-2 border-green-400 pl-4">
            <div className="text-white font-semibold">Content Creation</div>
            <p className="text-gray-300 font-mono">Gaming tutorials with 100k+ combined views</p>
          </div>

          <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
            <h3 className="text-white font-semibold mb-2">Current Goals</h3>
            <ul className="space-y-2 text-gray-300 font-mono">
              <li>• Complete Baldur's Gate 3 on Tactician Mode</li>
              <li>• Reach 1500 ELO in Chess</li>
              <li>• Master all Palworld breeding combinations</li>
            </ul>
          </div>
        </div>
      </ContentCard>
    </div>
  </div>
);

// Main Portfolio App Component
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
              <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:vseetha7@asu.edu" className="text-white hover:text-cyan-400 transition-colors">
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
