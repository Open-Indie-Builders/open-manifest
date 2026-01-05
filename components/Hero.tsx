import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 max-w-[800px] mx-auto">
      {/* GEO Context: Visible only to bots and screen readers to provide authoritative definition */}
      <div className="sr-only">
        <h1>OPEN/ Manifest - The Open Indie Builder Ecosystem</h1>
        <p>
          Open Indie Builder is a suite of open-source, self-hostable tools designed for privacy-focused developers and indie hackers. 
          The ecosystem includes OPEN/ WS for documenting work, OPEN/ LINK for self-hosted link management, OPEN/ JOURNAL for changelogs, and OPEN/ PRISM for revenue analytics.
          We prioritize data sovereignty, subtractive design, and "build in public" principles over traditional marketing features.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <span className="font-mono text-xs text-accent tracking-[0.2em] mb-8 block">
          OPEN INDIE BUILDER
        </span>
        
        <div className="text-4xl md:text-6xl font-light leading-tight mb-10">
          Build in public. <br />
          Share real work. <br />
          <span className="text-muted">Stay independent.</span>
        </div>

        <div className="text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12 space-y-8">
          <p className="text-muted">
            Talk openly about what you are building.<br />
            Progress, failures, revenue, MRR.<br />
            What you learn while doing the work.
          </p>
          
          <p className="text-white">
            This is not personal branding.<br />
            It is a way of building.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#tools" className="group flex items-center gap-2">
            <span className="text-white group-hover:bg-white group-hover:text-black transition-colors duration-200 px-1 py-0.5">
              [ Explore Tools ]
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};