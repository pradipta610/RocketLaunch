'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Linkedin, Instagram, Plus, X } from 'lucide-react';
import Link from 'next/link';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      href: 'https://instagram.com',
      color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500',
      label: 'Instagram',
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com',
      color: 'bg-[#0077b5]',
      label: 'LinkedIn',
    },
    {
      icon: <MessageCircle size={24} />,
      href: 'https://whatsapp.com',
      color: 'bg-[#25D366]',
      label: 'WhatsApp',
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-4">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col gap-3 mb-2">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 ${link.color}`}
                  title={link.label}
                >
                  {link.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-colors ${
          isOpen ? 'bg-gray-800' : 'bg-gradient-to-r from-lilac-600 to-purple-600'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus size={32} />
        </motion.div>
      </motion.button>
    </div>
  );
}
