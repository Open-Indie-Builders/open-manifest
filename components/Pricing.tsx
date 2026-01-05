import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check, Terminal, Cloud, Mail } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing">
      <div className="mb-12 border-b border-border pb-4">
        <h2 className="text-2xl font-light text-white">Access</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Self Hosted */}
        <div className="relative p-8 border border-white/10 bg-transparent flex flex-col h-full group">
          <div className="absolute top-4 right-4 text-[10px] font-mono border border-white/20 px-2 py-0.5 text-muted uppercase tracking-wider">
            Coming Soon
          </div>
          
          <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
            <Terminal className="w-6 h-6 text-muted mb-4" />
            <h3 className="text-lg font-medium mb-2">Self-Hosted</h3>
            <p className="text-sm text-dim font-mono">DOCKER_IMAGE</p>
          </div>
          
          <ul className="space-y-3 mb-8 flex-1 opacity-60 group-hover:opacity-100 transition-opacity">
            <li className="flex items-start gap-3 text-sm text-muted">
              <Check className="w-4 h-4 text-emerald-500 mt-0.5" />
              <span>Full data sovereignty</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted">
              <Check className="w-4 h-4 text-emerald-500 mt-0.5" />
              <span>Community support</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-muted">
              <Check className="w-4 h-4 text-emerald-500 mt-0.5" />
              <span>Manual updates</span>
            </li>
          </ul>

          <div className="mt-auto opacity-60 group-hover:opacity-100 transition-opacity">
             <div className="text-2xl font-light mb-4">$0 <span className="text-sm text-dim">/ forever</span></div>
             <Button variant="secondary" href="https://github.com/open-indie">GITHUB</Button>
          </div>
        </div>

        {/* Managed */}
        <div className="relative p-8 border border-white/20 bg-white/[0.02] flex flex-col h-full overflow-hidden group">
           <div className="absolute top-4 right-4 text-[10px] font-mono border border-amber-500/30 text-amber-500/80 px-2 py-0.5 uppercase tracking-wider">
            Coming Soon
          </div>

          <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
            <Cloud className="w-6 h-6 text-white mb-4" />
            <h3 className="text-lg font-medium mb-2">OPEN/ CLOUD</h3>
            <p className="text-sm text-dim font-mono">MANAGED_INSTANCE</p>
          </div>
          
          <ul className="space-y-3 mb-8 flex-1 opacity-60 group-hover:opacity-100 transition-opacity">
             <li className="flex items-start gap-3 text-sm text-gray-300">
              <Check className="w-4 h-4 text-white mt-0.5" />
              <span>Instant deployment</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-300">
              <Check className="w-4 h-4 text-white mt-0.5" />
              <span>Automatic backups</span>
            </li>
             <li className="flex items-start gap-3 text-sm text-gray-300">
              <Check className="w-4 h-4 text-white mt-0.5" />
              <span>Priority support</span>
            </li>
          </ul>

           <div className="mt-auto opacity-60 group-hover:opacity-100 transition-opacity">
             <div className="text-2xl font-light mb-4">$29 <span className="text-sm text-dim">/ mo</span></div>
             <Button>INITIALIZE</Button>
          </div>
        </div>
      </div>

      {/* Substack Banner */}
      <div className="w-full border border-white/10 bg-[#0F0F10] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-3">
             <Mail className="w-5 h-5 text-accent" />
             <h3 className="font-mono text-xs text-accent tracking-[0.2em] uppercase">Status Updates</h3>
          </div>
          <p className="text-white text-lg font-light mb-2">Follow the build process.</p>
          <p className="text-muted text-sm font-light">
            We are currently in active development. Subscribe to get notified when new tools are deployed.
          </p>
        </div>
        <div className="shrink-0">
          <Button href="https://substack.com">SUBSCRIBE TO UPDATES</Button>
        </div>
      </div>
    </Section>
  );
};