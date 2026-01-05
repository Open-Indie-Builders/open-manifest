import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section>
      <div className="mb-12 border-b border-border pb-4">
        <h2 className="text-2xl font-light text-white">Queries</h2>
      </div>

      <div className="space-y-0 divide-y divide-white/10 border-t border-b border-white/10">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="group">
            <button
              onClick={() => toggle(idx)}
              className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={`font-light text-sm md:text-base transition-colors duration-200 ${openIndex === idx ? 'text-white' : 'text-muted group-hover:text-gray-200'}`}>
                {faq.question}
              </span>
              <span className="ml-4 shrink-0 text-dim group-hover:text-white transition-colors">
                 {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-dim text-sm leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};