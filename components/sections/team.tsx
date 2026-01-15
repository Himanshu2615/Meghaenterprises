'use client';

import { motion } from 'framer-motion';

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Management Team</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Meet the dedicated professionals leading Megha Engineering towards excellence.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Add team member cards here once you have the information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-full">
                {/* Add team member photo */}
                <div className="h-full w-full bg-muted" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Team Member Name</h3>
                <p className="text-sm text-muted-foreground">Position</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}