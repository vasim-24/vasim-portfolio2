import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function initSmoothScroll(): { lenis: Lenis | null; cleanup: () => void } {
  if (typeof window === 'undefined') {
    return { lenis: null, cleanup: () => {} };
  }

  // Check for reduced motion preference or touch devices
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

  // Native smooth scrolling is best on touch/mobile devices to avoid scroll interception bugs
  if (isTouchDevice || prefersReducedMotion) {
    const handleScroll = () => ScrollTrigger.update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Refresh ScrollTrigger when layout settles
    setTimeout(() => ScrollTrigger.refresh(), 300);

    return {
      lenis: null,
      cleanup: () => {
        window.removeEventListener('scroll', handleScroll);
      },
    };
  }

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  });

  // Synchronize Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  const handleNativeScroll = () => ScrollTrigger.update();
  window.addEventListener('scroll', handleNativeScroll, { passive: true });

  const tickerCallback = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  // Initial trigger calculation after DOM paints
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 200);

  const cleanup = () => {
    gsap.ticker.remove(tickerCallback);
    window.removeEventListener('scroll', handleNativeScroll);
    lenis.destroy();
  };

  return { lenis, cleanup };
}

export { gsap, ScrollTrigger };
