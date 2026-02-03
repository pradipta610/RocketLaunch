'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

type AnimatedButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

export default function AnimatedButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  // Primary: Lilac gradient button with glow
  if (variant === 'primary') {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link
          href={href}
          className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-lilac-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-lilac-600/25 transition-all duration-300 hover:shadow-xl hover:shadow-lilac-500/30 ${className}`}
        >
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-lilac-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
      </motion.div>
    );
  }

  // Secondary: Outlined button for light backgrounds
  if (variant === 'secondary') {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link
          href={href}
          className={`inline-flex items-center justify-center rounded-full border-2 border-lilac-200 bg-white px-8 py-4 text-sm font-semibold text-lilac-700 transition-all duration-300 hover:border-lilac-400 hover:bg-lilac-50 hover:shadow-lg hover:shadow-lilac-100 ${className}`}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  // Ghost: Text link style
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Link
        href={href}
        className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-lilac-400 transition-colors hover:text-lilac-300 ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
