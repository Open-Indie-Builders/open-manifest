import React from 'react';
import { Section } from './ui/Section';
import { TOOLS } from '../constants';
import { Button } from './ui/Button';
import { ArrowUpRight } from 'lucide-react';

export const Tools: React.FC = () => {
  return (
    <Section id="tools">
       <div className="mb-12 border-b border-border pb-4 flex justify-between items-end">
        <h2 className="text-2xl font-light text-white">Ecosystem</h2>
        <span className="font-mono text-xs text-dim">INDEX: {TOOLS.length}</span>
      </div>

      <div className="space-y-4">
        {TOOLS.map((tool) => (
          <div 
            key={tool.id} 
            className="group relative border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-300 p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-medium tracking-wide">{tool.name}</h3>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 border ${
                    tool.status === 'LIVE' ? 'border-emerald-500/50 text-emerald-400' :
                    tool.status === 'BETA' ? 'border-amber-500/50 text-amber-400' :
                    'border-gray-700 text-gray-500'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                <p className="text-muted font-light text-sm max-w-lg leading-relaxed">
                  {tool.description}
                </p>
              </div>
              
              <div className="pt-2 md:pt-0 shrink-0">
                <Button href={tool.url}>
                  <span className="flex items-center gap-1">
                    DEPLOY <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};