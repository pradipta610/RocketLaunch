'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type WaveDividerProps = {
  flip?: boolean;
  variant?: 'light' | 'dark';
};

export default function WaveDivider({ flip = false, variant = 'light' }: WaveDividerProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (pathRef.current) {
        gsap.to(pathRef.current, {
          attr: {
            d: flip
              ? 'M0 50C200 100 400 0 600 80C800 160 1000 20 1200 70C1440 120 1440 50 1440 50V0H0V50Z'
              : 'M0 50C200 0 400 100 600 20C800 -60 1000 80 1200 30C1440 -20 1440 50 1440 50V100H0V50Z',
          },
          duration: 10,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }
    });

    return () => ctx.revert();
  }, [flip]);

  const gradientId = `waveDivider${flip ? 'Flip' : ''}${variant}`;
  const colors = variant === 'dark' 
    ? { start: '#7c3aed', mid: '#9333ea', end: '#a855f7' }
    : { start: '#f3e8ff', mid: '#e9d5ff', end: '#d8b4fe' };

  return (
    <div className={`relative w-full h-24 ${flip ? 'rotate-180' : ''}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.start} />
            <stop offset="50%" stopColor={colors.mid} />
            <stop offset="100%" stopColor={colors.end} />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M0 50C200 20 400 80 600 40C800 0 1000 60 1200 30C1440 0 1440 50 1440 50V100H0V50Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
    </div>
  );
}
