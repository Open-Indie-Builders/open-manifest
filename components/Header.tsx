import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0B0C]/80 backdrop-blur-md border-b border-white/5 py-0' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[800px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-sm font-medium tracking-widest hover:text-muted transition-colors">
          OPEN/
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="#manifest" className="text-xs font-mono text-dim hover:text-white transition-colors">MANIFEST</a>
          <a href="#tools" className="text-xs font-mono text-dim hover:text-white transition-colors">TOOLS</a>
          <a href="#pricing" className="text-xs font-mono text-dim hover:text-white transition-colors">ACCESS</a>
        </nav>
      </div>
    </header>
  );
};