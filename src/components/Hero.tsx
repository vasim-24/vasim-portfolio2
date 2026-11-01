import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';
import { gsap } from '../animations/gsapConfig';
import { getAssetUrl } from '../utils/assets';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Parallax mouse position
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10 to +10px
      const y = (e.clientY / innerHeight - 0.5) * 20; // -10 to +10px
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Entrance animations via GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Character scale and opacity entrance
      tl.fromTo(
        characterRef.current,
        { scale: 1.08, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.4, delay: 0.1 }
      );

      // Headline words reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.hero-word');
        tl.fromTo(
          words,
          { y: 80, opacity: 0, rotateZ: 2 },
          { y: 0, opacity: 1, rotateZ: 0, stagger: 0.12, duration: 1.1, ease: 'expo.out' },
          '-=1.0'
        );
      }

      // Intro reveal
      tl.fromTo(
        introRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.6'
      );

      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full bg-[#FF5A0A] text-white flex flex-col justify-between overflow-hidden pt-20 pb-6 sm:pt-24 sm:pb-8 md:pt-28 md:pb-12 px-5 sm:px-8 md:px-12 lg:px-16 select-none"
    >
      {/* Background Editorial Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden opacity-[0.06]">
        <span className="font-display font-black text-[28vw] tracking-tighter text-white leading-none whitespace-nowrap">
          VASIM
        </span>
      </div>

      {/* Main Hero Stage: Headline + Character Illustration */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center flex-1 my-auto py-4 sm:py-6 lg:py-0">
        
        {/* Left Side: Editorial Typography & Badges */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          {/* Creative Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6">
            <span className="px-3 py-1 rounded-md bg-white text-brand-dark font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-sm">
              Creative Developer
            </span>
            <span className="px-3 py-1 rounded-md bg-black/25 backdrop-blur-sm text-white font-mono text-[11px] sm:text-xs tracking-wider uppercase border border-white/20">
              Full Stack Developer
            </span>
            <span className="px-3 py-1 rounded-md bg-black/25 backdrop-blur-sm text-white font-mono text-[11px] sm:text-xs tracking-wider uppercase border border-white/20 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300" />
              AI Explorer
            </span>
          </div>

          {/* Huge Editorial Headline */}
          <h1
            ref={headlineRef}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.92] tracking-tighter mb-6 sm:mb-8"
          >
            <span className="hero-word block overflow-hidden">
              DESIGNING
            </span>
            <span className="hero-word block overflow-hidden text-white/95">
              WHAT'S NEXT<span className="text-brand-dark">.</span>
            </span>
          </h1>

          {/* Supporting Introduction */}
          <div ref={introRef} className="max-w-xl">
            <p className="text-base sm:text-lg md:text-xl font-sans font-medium text-white/90 leading-relaxed drop-shadow-sm">
              I'm <strong className="text-white font-bold underline decoration-white/40 underline-offset-4">Mohammed Vasim</strong> — a creative full-stack developer building digital experiences through technology, design, and intelligent systems.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-white font-mono text-xs font-semibold uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-hero-card group"
              >
                <span>Explore Works</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side / Center: Main Illustrated Character Frame */}
        <div
          ref={characterRef}
          className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            transition: 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <div className="relative group max-w-[280px] sm:max-w-[360px] lg:max-w-[460px] w-full">
            {/* Outer Subtle Frame Accent */}
            <div className="absolute -inset-3 rounded-3xl bg-black/10 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
            
            {/* Image Container with Editorial Border */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 bg-[#FF5A0A] aspect-[9/16] max-h-[46vh] sm:max-h-[60vh] lg:max-h-[75vh]">
              <img
                src={getAssetUrl('/images/hero-character.jpg')}
                alt="Mohammed Vasim illustrated character with headphones and blue jacket"
                className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="eager"
                decoding="async"
              />

              {/* Character Glass Tag at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-between text-white">
                <div>
                  <p className="font-display font-bold text-sm tracking-tight leading-none">
                    Mohammed Vasim
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#FF5A0A] flex items-center justify-center text-white shadow-sm">
                  <Compass className="w-4 h-4 animate-[spin_10s_linear_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Row: Scroll Indicator */}
      <div className="relative z-10 w-full flex items-center justify-end border-t border-white/20 pt-4">
        {/* Bottom-right: Scroll Indicator */}
        <div ref={scrollIndicatorRef}>
          <button
            onClick={handleScrollDown}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-200 group focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span>Scroll to discover</span>
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-300 group-hover:bg-white/10">
              <ArrowDown className="w-3.5 h-3.5 text-white animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
