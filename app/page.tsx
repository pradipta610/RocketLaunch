'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import HeroBackground from '../components/HeroBackground';
import AnimatedButton from '../components/AnimatedButton';

// Smooth fade up animation
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

// Container animation
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Card animation - smooth reveal
const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const WHO_WE_WORK_WITH = [
  'Tech Startups',
  'Marketplaces',
  'Digital Agencies',
  'Established Market Leaders',
];

const WHY_ROCKET_LAUNCH = [
  { title: 'Founder-led expertise', desc: 'Direct access to senior consultants with real operating experience.' },
  { title: 'Outcome-focused', desc: 'We measure success by revenue impact, not hours billed.' },
  { title: 'Proven frameworks', desc: 'Battle-tested sales systems that scale with your growth.' },
  { title: 'Speed to value', desc: 'Rapid diagnosis and implementation — no lengthy discovery phases.' },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative">
      {/* Hero with animated background */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <HeroBackground />
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-40 md:pt-40 md:pb-48"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid items-center gap-12 lg:grid-cols-2"
          >
            <div>
              {/* Animated badge */}
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-lilac-200 bg-white/50 px-4 py-2 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-lilac-500" />
                <span className="text-sm font-medium text-lilac-700">Premium Growth Consultancy</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-bold leading-[1.1] tracking-tight text-charcoal md:text-5xl lg:text-6xl"
              >
                Sales strategy for{' '}
                <span className="bg-gradient-to-r from-lilac-600 via-purple-600 to-lilac-500 bg-clip-text text-transparent">
                  ambitious businesses
                </span>
              </motion.h1>
              
              <motion.p
                variants={fadeUp}
                className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl"
              >
                We help agencies, startups, and marketplaces build high-performing sales processes that drive predictable revenue growth.
              </motion.p>
              
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                <AnimatedButton href="/contact" variant="primary">
                  Start a Conversation
                </AnimatedButton>
                <AnimatedButton href="/expertise" variant="secondary">
                  Our Expertise
                </AnimatedButton>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="relative hidden lg:block">
              {/* Floating card with professional photo */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-lilac-400/30 via-purple-400/20 to-lilac-400/30 blur-2xl animate-pulse-glow" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-lilac-100 bg-white/80 backdrop-blur-xl shadow-2xl shadow-lilac-500/10">
                  <img
                    src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=450&fit=crop"
                    alt="Business growth chart"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lilac-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold">Growth Accelerated</p>
                    <p className="text-sm text-lilac-100">Ready for liftoff</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="relative bg-gradient-to-b from-white to-lilac-50/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-semibold tracking-tight text-charcoal md:text-3xl">
              What We Do
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-gray-600">
              Rocket Launch specialises in arming agencies, startups &amp; marketplaces with the most effective sales processes &amp; strategies to outperform their competition.
            </motion.p>
            <motion.ul variants={container} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Sales Strategy', desc: 'Positioning, messaging, and narrative design' },
                { title: 'Revenue Systems', desc: 'Process, pipeline, and operating rhythm' },
                { title: 'Go-To-Market', desc: 'Launch planning and execution support' },
                { title: 'Sales Enablement', desc: 'Training, tools, and team development' },
              ].map((item, i) => (
                <motion.li
                  key={item.title}
                  variants={cardItem}
                  className="group rounded-xl border border-lilac-100 bg-white p-5 transition-all duration-300 hover:border-lilac-300 hover:shadow-lg hover:shadow-lilac-200/50 hover:-translate-y-1"
                >
                  <p className="font-medium text-charcoal group-hover:text-lilac-700 transition-colors">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-8">
              <Link href="/expertise" className="text-sm font-medium text-accent hover:underline">
                View all areas of expertise →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-semibold tracking-tight text-charcoal md:text-3xl">
              Who We Work With
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHO_WE_WORK_WITH.map((item, i) => (
                <motion.div
                  key={item}
                  variants={cardItem}
                  className="group rounded-xl border border-lilac-100 bg-gradient-to-br from-white to-lilac-50 p-6 text-center transition-all duration-300 hover:border-lilac-300 hover:shadow-lg hover:shadow-lilac-200/50 hover:-translate-y-1"
                >
                  <p className="font-medium text-charcoal group-hover:text-lilac-700 transition-colors">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Rocket Launch */}
      <section className="border-t border-gray-100 bg-offwhite py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-semibold tracking-tight text-charcoal md:text-3xl">
              Why Rocket Launch
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-8 grid gap-6 sm:grid-cols-2">
              {WHY_ROCKET_LAUNCH.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={cardItem}
                  className="group rounded-xl border border-lilac-100 bg-white p-6 transition-all duration-300 hover:border-lilac-300 hover:shadow-lg hover:shadow-lilac-200/50 hover:-translate-y-1"
                >
                  <h3 className="font-medium text-charcoal group-hover:text-lilac-700 transition-colors">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founders Snapshot */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-semibold tracking-tight text-charcoal md:text-3xl">
              Meet the Founders
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-8 grid gap-8 sm:grid-cols-2 lg:max-w-2xl">
              <div className="group text-center">
                <div className="relative mx-auto w-32">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-lilac-300 to-purple-300 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-70" />
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=256&h=256&fit=crop&crop=face"
                    alt="Zachary Farrington"
                    className="relative h-32 w-32 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                </div>
                <p className="mt-4 font-medium text-charcoal">Zachary Farrington</p>
                <p className="text-sm text-gray-500">Partner</p>
              </div>
              <div className="group text-center">
                <div className="relative mx-auto w-32">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-lilac-300 to-purple-300 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-70" />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=crop&crop=face"
                    alt="Simon Schultz"
                    className="relative h-32 w-32 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                </div>
                <p className="mt-4 font-medium text-charcoal">Simon Schultz</p>
                <p className="text-sm text-gray-500">Partner</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8">
              <Link href="/team" className="text-sm font-medium text-accent hover:underline">
                Learn more about our team →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-lilac-900 via-purple-900 to-lilac-800 py-20 md:py-28 overflow-hidden">
        {/* Floating orbs in CTA */}
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-lilac-500/30 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-purple-500/30 blur-3xl animate-float-slow" />
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={container}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Ready to accelerate your growth?
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-lilac-100">
              Let's discuss how we can help you build a sales engine that delivers predictable, scalable revenue.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-lilac-900 transition-all duration-300 hover:shadow-xl hover:shadow-lilac-900/20"
                >
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-lilac-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
