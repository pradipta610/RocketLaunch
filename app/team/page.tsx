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

const TEAM = [
  {
    name: 'Zachary Farrington',
    title: 'Partner',
    image: '/zach.jpg',
    linkedin: 'https://www.linkedin.com/in/zachary-farrington-92267b106/',
    bio: 'Zachary brings over a decade of experience in B2B sales leadership, having built and scaled sales teams across SaaS, marketplaces, and professional services. He specialises in founder-led sales transitions and go-to-market strategy.',
    credibility: 'Former VP Sales at multiple high-growth startups',
  },
  {
    name: 'Simon Schultz',
    title: 'Partner',
    image: '/simon.jpg',
    linkedin: 'https://www.linkedin.com/in/simon-schultz-5931a787/',
    bio: 'Simon is a revenue operations expert with deep experience in building scalable sales systems. He has helped dozens of companies implement processes that drive predictable growth and operational excellence.',
    credibility: 'Advised 50+ companies on revenue strategy',
  },
];

export default function TeamPage() {
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
            Our Team
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-gray-600"
          >
            Rocket Launch is led by two partners with complementary expertise in sales strategy, revenue operations, and go-to-market execution.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-16 grid gap-12 lg:grid-cols-2"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="rounded-2xl border border-gray-200 bg-white p-8"
            >
              <div className="flex flex-col items-start gap-6 sm:flex-row">
                <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                  <span className="text-3xl font-semibold text-gray-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-charcoal">{member.name}</h2>
                  <p className="text-gray-500">{member.title}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex text-sm font-medium text-accent hover:underline"
                  >
                    LinkedIn Profile →
                  </a>
                </div>
              </div>
              <p className="mt-6 text-gray-600">{member.bio}</p>
              <p className="mt-4 text-sm font-medium text-charcoal">{member.credibility}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 rounded-2xl bg-offwhite p-8 text-center md:p-12"
        >
          <h2 className="text-2xl font-semibold text-charcoal">Work with us</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            We work directly with founders and leadership teams. No junior consultants, no handoffs — just senior expertise from day one.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
