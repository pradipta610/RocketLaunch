'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wave1Ref = useRef<SVGPathElement>(null);
  const wave2Ref = useRef<SVGPathElement>(null);
  const wave3Ref = useRef<SVGPathElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax effect for waves - different speeds for depth
      // Back wave (slowest)
      gsap.to(wave1Ref.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Middle wave (medium speed)
      gsap.to(wave2Ref.current, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Front wave (fastest)
      gsap.to(wave3Ref.current, {
        yPercent: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Subtle pulse animation for the waves to make them feel "liquid"
      gsap.to([wave1Ref.current, wave2Ref.current, wave3Ref.current], {
        scaleY: 1.05,
        transformOrigin: 'bottom center',
        duration: 3,
        stagger: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden bg-white"
    >
      {/* Light Grid Background */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200, 200, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 200, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Layered Waves - BizBud style */}
      <div className="absolute bottom-0 left-0 right-0 h-full w-full pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-[90vh]" 
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(192, 132, 252, 0.15)" /> 
              <stop offset="50%" stopColor="rgba(167, 139, 250, 0.2)" />
              <stop offset="100%" stopColor="rgba(216, 180, 254, 0.15)" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.35)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.45)" />
              <stop offset="100%" stopColor="rgba(192, 132, 252, 0.35)" />
            </linearGradient>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>

          {/* Back Wave - very light, subtle */}
          <path
            ref={wave1Ref}
            d="M0,350 C180,280 360,420 540,380 C720,340 900,200 1080,280 C1260,360 1350,300 1440,320 L1440,900 L0,900 Z"
            fill="url(#grad1)"
          />

          {/* Middle Wave - medium opacity */}
          <path
            ref={wave2Ref}
            d="M0,450 C200,380 400,520 600,480 C800,440 1000,320 1200,400 C1320,450 1380,420 1440,440 L1440,900 L0,900 Z"
            fill="url(#grad2)"
          />

          {/* Front Wave (Main) - solid purple, prominent */}
          <path
            ref={wave3Ref}
            d="M0,550 C150,480 300,600 500,560 C700,520 850,400 1050,480 C1200,540 1320,380 1440,420 L1440,900 L0,900 Z"
            fill="url(#grad3)"
          />
        </svg>
      </div>

      {/* Floating particles/dots for extra "wah" */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-purple-400 opacity-20 animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/3 w-6 h-6 rounded-full bg-lilac-400 opacity-20 animate-float" />
    </div>
  );
}
