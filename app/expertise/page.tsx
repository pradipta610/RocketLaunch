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

const EXPERTISE = [
  {
    title: 'Sales Strategy',
    description: 'Define your positioning, craft compelling messaging, and build a sales narrative that converts high-intent demand into revenue.',
    outcome: 'Clear differentiation and higher win rates',
  },
  {
    title: 'Revenue Systems',
    description: 'Design scalable processes for qualification, pipeline management, and forecasting that grow with your team.',
    outcome: 'Predictable revenue and operational clarity',
  },
  {
    title: 'Go-To-Market Launch',
    description: 'Plan and execute market entry with precision — from ICP definition to channel strategy and launch sequencing.',
    outcome: 'Faster time-to-revenue in new markets',
  },
  {
    title: 'Sales Enablement',
    description: 'Equip your team with the training, tools, and playbooks they need to perform consistently at scale.',
    outcome: 'Reduced ramp time and improved rep performance',
  },
  {
    title: 'Pipeline Optimisation',
    description: 'Diagnose bottlenecks, improve conversion rates, and build a healthier pipeline that delivers results.',
    outcome: 'More deals closed with less friction',
  },
  {
    title: 'Founder-Led Sales',
    description: 'Help founders transition from ad-hoc selling to a repeatable, scalable sales motion they can hand off.',
    outcome: 'Sustainable growth beyond the founding team',
  },
];

export default function ExpertisePage() {
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
            Areas of Expertise
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-gray-600"
          >
            We focus on the areas that drive the most impact for growth-stage businesses. Each engagement is tailored to your specific challenges and goals.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {EXPERTISE.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-charcoal">{item.title}</h2>
              <p className="mt-4 text-gray-600">{item.description}</p>
              <p className="mt-6 text-sm font-medium text-accent">{item.outcome}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 rounded-2xl bg-offwhite p-8 text-center md:p-12"
        >
          <h2 className="text-2xl font-semibold text-charcoal">Ready to discuss your challenges?</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Every business is different. Let's talk about what's holding you back and how we can help.
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
