'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/expertise', label: 'Areas of Expertise' },
  { href: '/clients', label: 'Clients' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-lilac-100/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-charcoal">
          Rocket Launch
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? 'text-lilac-600 font-semibold'
                  : 'text-gray-600 hover:text-lilac-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-gradient-to-r from-lilac-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-lilac-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-lilac-500/30 hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
