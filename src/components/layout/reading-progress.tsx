'use client';

import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = window.scrollY / totalScroll;
        setProgress(Math.min(Math.max(currentProgress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="reading-progress"
      style={{
        transform: `scaleX(${progress})`,
        transformOrigin: 'left center',
        transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)',
      }}
      aria-hidden="true"
    />
  );
}
