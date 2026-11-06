import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Stack', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-brand-warmWhite/90 backdrop-blur-md border-b border-brand-dark/10 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2 text-decoration-none py-1"
          >
            <span
              className={`font-signature text-3xl sm:text-4xl md:text-[40px] leading-none tracking-wide transition-all duration-300 ${
                isScrolled
                  ? 'text-brand-dark group-hover:text-brand-orange'
                  : 'text-white drop-shadow-md group-hover:text-amber-200'
              }`}
              style={{ fontFamily: "'Youth Touch', cursive, sans-serif" }}
            >
              mohammed vasim
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className={`hidden md:flex items-center gap-1 lg:gap-2 backdrop-blur-md px-3 py-1.5 rounded-full border transition-colors duration-300 ${
              isScrolled
                ? 'bg-black/5 border-black/10'
                : 'bg-black/15 border-white/20'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 ${
                    isActive
                      ? isScrolled
                        ? 'text-brand-dark font-bold bg-black/10 shadow-sm'
                        : 'text-white font-semibold bg-white/20 shadow-sm'
                      : isScrolled
                      ? 'text-brand-dark/75 hover:text-brand-dark hover:bg-black/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Quick CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`hidden lg:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-300 shadow-sm ${
                isScrolled
                  ? 'border-brand-dark/20 text-brand-dark bg-black/5 hover:bg-brand-dark hover:text-white'
                  : 'border-white/30 text-white bg-white/10 hover:bg-white hover:text-brand-dark'
              }`}
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-full backdrop-blur-md border focus:outline-none transition-colors duration-300 ${
                isScrolled
                  ? 'bg-black/5 text-brand-dark border-black/10'
                  : 'bg-black/20 text-white border-white/20'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-between p-8 pt-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-orange mb-6">Navigation</p>
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ transitionDelay: `${idx * 40}ms` }}
              className={`block text-3xl font-display font-extrabold tracking-tight transition-transform duration-300 ${
                activeSection === link.href.substring(1) ? 'text-brand-orange pl-3' : 'text-white hover:text-brand-orange'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 space-y-3">
          <p className="font-mono text-xs text-white/50">Mohammed Vasim — India</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vasim-24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-white/80 hover:text-brand-orange flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-sm font-mono text-white/80 hover:text-brand-orange flex items-center gap-1"
            >
              Get in Touch <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
