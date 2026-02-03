'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const CLIENT_CATEGORIES = [
  {
    title: 'Global Market Leaders',
    description: 'Established companies looking to amplify growth and optimise their sales operations.',
  },
  {
    title: 'High-Growth Startups',
    description: 'Venture-backed businesses scaling their go-to-market and building repeatable sales processes.',
  },
  {
    title: 'Digital Agencies',
    description: 'Service businesses seeking to professionalise their sales approach and win larger accounts.',
  },
  {
    title: 'Marketplaces',
    description: 'Two-sided platforms building supply and demand acquisition strategies.',
  },
];

export default function ClientsPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tight text-charcoal md:text-5xl"
          >
            Our Clients
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-gray-600"
          >
            We work with a range of businesses from globally established market leaders that want to amplify their growth, to new businesses that want to get their approach right from the beginning.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {CLIENT_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              className="rounded-2xl border border-gray-200 bg-offwhite p-8"
            >
              <h2 className="text-xl font-semibold text-charcoal">{category.title}</h2>
              <p className="mt-4 text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-20"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-charcoal">
            What Our Clients Say
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-8 grid gap-6 md:grid-cols-2">
            <blockquote className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="text-gray-600 italic">
                "Rocket Launch helped us transform our sales process from founder-led chaos to a scalable system. The results speak for themselves."
              </p>
              <footer className="mt-6">
                <p className="font-medium text-charcoal">Startup Founder</p>
                <p className="text-sm text-gray-500">Series A SaaS Company</p>
              </footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="text-gray-600 italic">
                "Their strategic approach to our go-to-market launch exceeded our expectations. We hit our first-year targets in six months."
              </p>
              <footer className="mt-6">
                <p className="font-medium text-charcoal">VP of Sales</p>
                <p className="text-sm text-gray-500">Enterprise Marketplace</p>
              </footer>
            </blockquote>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 rounded-2xl bg-charcoal p-8 text-center md:p-12"
        >
          <h2 className="text-2xl font-semibold text-white">Join our client roster</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            We're selective about who we work with because we're committed to delivering real results.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-gray-100"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
