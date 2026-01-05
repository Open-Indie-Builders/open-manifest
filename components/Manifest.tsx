import React from 'react';
import { Section } from './ui/Section';

export const Manifest: React.FC = () => {
  return (
    <Section id="manifest">
      <div className="relative border border-white/10 bg-[#0F0F10] p-8 md:p-16 shadow-2xl">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30"></div>

        <div className="flex flex-col items-center text-center">
          <h2 className="font-mono text-xs text-accent tracking-[0.25em] mb-12 uppercase">
            The Open Indie Builder Manifest
          </h2>

          <div className="space-y-16 max-w-lg">
            
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl text-white font-normal">Build in public.</h3>
              <p className="text-muted font-light leading-relaxed">
                Not when it is ready.<br/>
                Not when it looks good.<br/>
                While it is still unclear.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl text-white font-normal">Share the work.</h3>
              <p className="text-muted font-light leading-relaxed">
                The thinking.<br/>
                The numbers.<br/>
                Revenue. MRR. Mistakes.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl text-white font-normal">Do not turn it into content.</h3>
              <p className="text-muted font-light leading-relaxed">
                Do not smooth the edges.<br/>
                Do not hide the doubts.
              </p>
            </div>

            <div className="py-8 border-t border-white/5 space-y-6">
              <p className="text-lg md:text-xl text-white font-light leading-relaxed">
                This is not marketing.<br/>
                This is not storytelling.
              </p>
              <p className="text-xl md:text-2xl text-white font-medium">
                It is work, made visible.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-sm text-dim tracking-widest">TOOLS ARE OPTIONAL.</p>
              <p className="font-mono text-sm text-dim tracking-widest">OPENNESS IS NOT.</p>
            </div>

            <p className="text-dim text-sm italic font-light pt-4">
              If this feels natural,<br/>
              you already belong here.
            </p>

          </div>
        </div>
      </div>
    </Section>
  );
};