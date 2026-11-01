import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'project'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check what element is under the cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-cursor="project"]')) {
        setCursorType('project');
      } else if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.tamil-flip-container') ||
        target.closest('[role="button"]')
      ) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp for trailing cursor ring
  useEffect(() => {
    let animId: number;
    const lerp = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Cursor Dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-opacity duration-200 hidden md:block"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          width: cursorType === 'project' ? '0px' : '6px',
          height: cursorType === 'project' ? '0px' : '6px',
          backgroundColor: '#FF5A0A',
        }}
      />

      {/* Trailing Outer Ring */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full transition-all duration-200 ease-out flex items-center justify-center font-mono text-[10px] uppercase font-bold tracking-wider hidden md:flex"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          width: cursorType === 'project' ? '80px' : cursorType === 'pointer' ? '44px' : '28px',
          height: cursorType === 'project' ? '80px' : cursorType === 'pointer' ? '44px' : '28px',
          backgroundColor: cursorType === 'project' ? '#FF5A0A' : 'transparent',
          borderColor: cursorType === 'project' ? '#FF5A0A' : '#FF5A0A',
          borderWidth: cursorType === 'project' ? '0px' : '1.5px',
          color: '#FFFFFF',
          boxShadow: cursorType === 'project' ? '0 10px 30px rgba(255, 90, 10, 0.4)' : 'none',
        }}
      >
        {cursorType === 'project' && <span>VIEW</span>}
      </div>
    </>
  );
};
