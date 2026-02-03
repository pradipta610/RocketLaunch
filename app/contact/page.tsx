'use client';

import { motion } from 'framer-motion';
import type { FormEvent } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission would be handled here
    alert('Thank you for your message. We will be in touch shortly.');
  };

  return (
    <div className="pt-20">
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid gap-16 lg:grid-cols-2"
        >
          <div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-semibold tracking-tight text-charcoal md:text-5xl"
            >
              Contact Us
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-gray-600"
            >
              Ready to discuss your sales challenges? We'd love to hear from you. Fill out the form or reach out directly.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 space-y-6">
              <div>
                <h3 className="font-medium text-charcoal">Email</h3>
                <a
                  href="mailto:hello@rocketlaunchconsulting.com"
                  className="mt-1 text-gray-600 hover:text-accent"
                >
                  hello@rocketlaunchconsulting.com
                </a>
              </div>
              <div>
                <h3 className="font-medium text-charcoal">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/company/rocket-launch-consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-gray-600 hover:text-accent"
                >
                  Rocket Launch Consulting
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-200 bg-offwhite p-8"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-charcoal outline-none transition-colors focus:border-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-charcoal outline-none transition-colors focus:border-accent"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-charcoal outline-none transition-colors focus:border-accent"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 block w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-charcoal outline-none transition-colors focus:border-accent"
                    placeholder="Tell us about your challenges and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-charcoal py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
