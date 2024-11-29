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
              <NavButton Icon={User} text="About" onClick={() => setCurrentPage('about')} active={currentPage === 'about'} />
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
    about: <AboutPage />,
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
    <div className="text-center space-y-8">
      {/* Profile Photo Section */}
      <div className="relative w-48 h-48 mx-auto mb-8">
        <img
          src="/profile.jpg"  // Replace with your actual image path
          alt="Vignesh Seetharaman"
          className="rounded-full w-48 h-48 object-cover border-4 border-cyan-400/30 shadow-lg shadow-cyan-400/20"
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

const AboutPage = () => (
  <div className="max-w-6xl mx-auto space-y-8">
    {/* Hero Section */}
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
      <p className="text-gray-300 font-mono max-w-2xl mx-auto">
        Biotech Student | Tech Enthusiast | Life-Long Learner
      </p>
    </div>

    <div className="grid gap-8">
      <ContentCard title="Academic Journey">
        <div className="space-y-4 text-gray-300 font-mono">
          <p className="leading-relaxed">
            As a Biotechnology student at Arizona State University, I've always been fascinated by the intersection of biology and technology.
            My academic journey has been driven by a deep curiosity about how we can leverage technology to solve complex biological problems.
          </p>
          <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-400/20">
            <h3 className="text-cyan-400 mb-2">Research Interests</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Bioinformatics & Computational Biology</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Machine Learning in Drug Discovery</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Genomics Data Analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Professional Aspirations">
        <div className="space-y-4 text-gray-300 font-mono">
          <p className="leading-relaxed">
            My goal is to bridge the gap between biotechnology and software engineering. I believe that the future of healthcare
            and biological research lies in our ability to process and analyze vast amounts of data efficiently.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-400/20">
              <h3 className="text-cyan-400 mb-2">Short-term Goals</h3>
              <ul className="space-y-2">
                <li>• Complete advanced bioinformatics projects</li>
                <li>• Master data visualization techniques</li>
                <li>• Contribute to open-source biotech tools</li>
              </ul>
            </div>
            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-400/20">
              <h3 className="text-purple-400 mb-2">Long-term Vision</h3>
              <ul className="space-y-2">
                <li>• Develop innovative biotech software solutions</li>
                <li>• Lead research in computational biology</li>
                <li>• Create accessible biotech visualization tools</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Personal Growth">
        <div className="space-y-6 text-gray-300 font-mono">
          <p className="leading-relaxed">
            Beyond academics and career goals, I'm committed to continuous personal development. I believe in maintaining
            a balance between technical skills and soft skills, while nurturing my diverse interests.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-cyan-400 mb-2">Life Philosophy</h3>
              <p>"The beauty of biotechnology lies in its ability to improve lives. The challenge lies in making it accessible to everyone."</p>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-purple-400 mb-2">Values</h3>
              <ul className="space-y-1">
                <li>• Continuous Learning</li>
                <li>• Innovation & Creativity</li>
                <li>• Ethical Research</li>
                <li>• Knowledge Sharing</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-green-400 mb-2">Hobbies</h3>
              <ul className="space-y-1">
                <li>• Chess & Strategy Games</li>
                <li>• Reading Scientific Papers</li>
                <li>• Building PCs</li>
                <li>• Anime & Gaming</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Community Engagement">
        <div className="space-y-4 text-gray-300 font-mono">
          <p className="leading-relaxed">
            I strongly believe in giving back to the community and helping others learn. Whether it's through tutoring,
            mentoring, or sharing knowledge online, I aim to make a positive impact.
          </p>
          <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-4 rounded-lg border border-cyan-400/20">
            <h3 className="text-white font-semibold mb-2">Current Initiatives</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span>Biotechnology Student Mentoring Program</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Online Programming Tutorials</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Research Paper Discussion Groups</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentCard>
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

const StocksPage = () => (
  <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
    <ContentCard title="Trading Strategy">
      <div className="space-y-4 text-gray-300 font-mono">
        <div className="flex items-start space-x-3">
          <TrendingUp className="w-5 h-5 text-cyan-400 mt-1" />
          <div>
            <h3 className="text-white font-semibold mb-2">AI-Enhanced Analysis</h3>
            <p>Leveraging machine learning models for pattern recognition in biotech and tech sectors, achieving 87% prediction accuracy.</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Brain className="w-5 h-5 text-purple-400 mt-1" />
          <div>
            <h3 className="text-white font-semibold mb-2">Research-Backed Approach</h3>
            <p>Combining biotech expertise with deep market analysis. Early investor in key players like Moderna pre-pandemic.</p>
          </div>
        </div>
      </div>
    </ContentCard>
    <ContentCard title="Market Performance">
      <div className="space-y-4 text-gray-300 font-mono">
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
        <div className="border-l-2 border-cyan-400 pl-4 mt-4">
          <div className="text-white font-semibold mb-2">Portfolio Strategy</div>
          <p>Sophisticated risk management with hedging techniques and strategic diversification across high-growth sectors.</p>
        </div>
      </div>
    </ContentCard>
  </div>
);

const GamingPage = () => (
  <div className="max-w-6xl mx-auto space-y-8">
    {/* Hero Gaming Section */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-4">Gaming Portfolio</h1>
      <p className="text-gray-300 font-mono max-w-2xl mx-auto">
        From strategic board games to immersive open worlds, I'm passionate about diverse gaming experiences
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Modern Games */}
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

      {/* Roblox Section */}
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

      {/* Traditional Games */}
      <ContentCard title="Traditional Gaming">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div>
              <h3 className="text-white font-semibold"> ♟️ Chess</h3>
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

      {/* Gaming Achievements */}
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
const AnimePage = () => (
  <div className="max-w-6xl mx-auto space-y-8">
    {/* Hero Section */}
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-4">Anime Collection</h1>
      <p className="text-gray-300 font-mono max-w-2xl mx-auto">
        Exploring the vast world of anime from classics to latest releases
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      <ContentCard title="Currently Watching">
        <div className="space-y-4">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white font-semibold">Seasonal Picks</span>
            </div>
            <ul className="space-y-3 text-gray-300 font-mono">
            <li>• Let This Grieving Soul Retire</li>
<li>• Re:ZERO -Starting Life in Another World- Season 3</li>
<li>• I'll Become a Villainess Who Goes Down in History</li>
<li>• Tying the Knot with an Amagami Sister</li>
<li>• Blue Box</li>
<li>• 365 Days to the Wedding</li>
<li>• Dandadan</li>
<li>• Loner Life in Another World</li>
<li>• Bleach: Thousand-Year Blood War - The Conflict</li>
<li>• Is It Wrong to Try to Pick Up Girls in a Dungeon? V</li>
<li>• Sword Art Online Alternative: Gun Gale Online II</li>
<li>• Orb: On the Movements of the Earth</li>
<li>• Blue Lock Season 2</li>
<li>• Tower of God Season 2: Workshop Battle</li>
<li>• You are Ms. Servant</li>
<li>• Ranma ½ (2024)</li>
<li>• Blue Exorcist: Beyond the Snow Saga</li>
<li>• Yakuza Fiancé: Raise wa Tanin ga Ii</li>
<li>• The Most Notorious "Talker" Runs the World's Greatest Clan</li>
<li>• Seirei Gensouki: Spirit Chronicles Season 2</li>
<li>• The Do-Over Damsel Conquers The Dragon Emperor</li>
<li>• Dragon Ball Daima</li>
<li>• Shangri-La Frontier Season 2</li>
<li>• Demon Lord 2099</li>
<li>• Arifureta: From Commonplace to World's Strongest Season 3</li>
<li>• Uzumaki: Spiral into Horror</li>
<li>• As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World Season 2</li>
            </ul>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="All-Time Favorites">
        <div className="space-y-4 text-gray-300 font-mono">
          <div className="border-l-2 border-purple-400 pl-4">
            <h3 className="text-white font-semibold mb-2">Masterpieces</h3>
            <ul className="space-y-2">
              <li>• Attack on Titan</li>
              <li>• Full Metal Alchemist: Brotherhood</li>
              <li>• Steins;Gate</li>
              <li>• Death Note</li>
              <li>• Code Geass</li>
            </ul>
          </div>

          <div className="border-l-2 border-blue-400 pl-4">
            <h3 className="text-white font-semibold mb-2">Modern Classics</h3>
            <ul className="space-y-2">
            <li>• Attack on Titan</li>
<li>• Death Note</li>
<li>• Fullmetal Alchemist: Brotherhood</li>
<li>• One Piece</li>
<li>• Code Geass</li>
<li>• Hunter x Hunter</li>
<li>• Neon Genesis Evangelion</li>
<li>• Cowboy Bebop</li>
<li>• Monster</li>
<li>• JoJo's Bizarre Adventure</li>
<li>• Gintama</li>
<li>• Made in Abyss</li>
<li>• Demon Slayer</li>
<li>• Jujutsu Kaisen</li>
<li>• Mob Psycho 100</li>
<li>• Naruto</li>
<li>• Bleach</li>
<li>• Dragon Ball Z</li>
<li>• Your Name</li>
<li>• Spirited Away</li>
<li>• One Punch Man</li>
<li>• My Hero Academia</li>
<li>• Violet Evergarden</li>
<li>• Tokyo Ghoul</li>
<li>• Black Clover</li>
<li>• The Promised Neverland</li>
<li>• Vinland Saga</li>
<li>• Parasyte</li>
<li>• Haikyu!!</li>
            </ul>
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Future Watchlist">
        <div className="space-y-4">
        <div className="mt-4 p-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg">
          <h3 className="text-white font-semibold mb-2">Most Anticipated</h3>
          <p className="text-gray-300 font-mono">Looking forward to potential adaptations of:</p>
          <ul className="space-y-2 text-gray-300 font-mono mt-2">
            <li>• Solo Leveling Season 2</li>
            <li>• Hell's Paradise Season 2</li>
          </ul>
        </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Upcoming 2025</h3>
            <ul className="space-y-2 text-gray-300 font-mono">
              <li>• Bleach: Thousand-Year Blood War - The Final Act</li>
              <li>• Kaiju No. 8</li>
              <li>• Dragon Ball Daima</li>
              <li>• Black Butler: Public School Arc</li>
              <li>• Demon Slayer Season 5</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
            <h3 className="text-white font-semibold mb-2">Rumored 2026</h3>
            <ul className="space-y-2 text-gray-300 font-mono">
              <li>• One Punch Man Season 3</li>
              <li>• Chainsaw Man Season 2</li>
              <li>• Attack on Titan: Alternative</li>
              <li>• Tokyo Ghoul: Brotherhood</li>
              <li>• My Hero Academia: Final Season</li>
            </ul>
          </div>


        </div>
      </ContentCard>
    </div>
  </div>
);
