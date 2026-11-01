import React, { useState, useEffect } from 'react';
import { ArrowUp, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-dark text-white border-t border-white/10 py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-12">
        
        {/* Top Footer Statement */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <p className="font-mono text-xs text-brand-orange uppercase tracking-widest mb-2">
              Portfolio Manifest
            </p>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
              DESIGNED WITH CURIOSITY.
              <br />
              <span className="text-white/60">BUILT WITH PURPOSE.</span>
            </h3>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-brand-dark font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 border border-white/20 group"
            aria-label="Back to top"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Bottom Details Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs text-white/60">
          <div>
            <p className="text-white font-bold mb-1">Mohammed Vasim</p>
            <p>Creative Developer & AI Explorer</p>
            <p className="text-white/40 mt-1">Portfolio 2026 Edition</p>
          </div>

          <div>
            <p className="text-white font-bold mb-1">Local Coordinates</p>
            <p>Coimbatore, Tamil Nadu, India</p>
            <p className="text-white/40 mt-1">11.0168° N, 76.9558° E</p>
          </div>

          <div>
            <p className="text-white font-bold mb-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-brand-orange" />
              <span>India Time (IST)</span>
            </p>
            <p className="text-brand-orange font-bold text-sm tracking-wider">
              {currentTime ? `${currentTime} IST` : 'Loading...'}
            </p>
            <p className="text-white/40 mt-1">UTC+05:30</p>
          </div>

          <div className="sm:text-right">
            <p className="text-white font-bold mb-1">Colophon</p>
            <p>React &bull; TypeScript &bull; GSAP &bull; Lenis</p>
            <p className="text-white/40 mt-1">&copy; {new Date().getFullYear()} Mohammed Vasim</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
