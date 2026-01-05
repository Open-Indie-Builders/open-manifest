import React from 'react';
import { LegalView } from '../types';

interface FooterProps {
  onViewLegal: (view: LegalView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onViewLegal }) => {
  return (
    <footer className="max-w-[800px] mx-auto px-6 py-24 border-t border-white/5 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h4 className="font-mono text-sm tracking-widest text-white mb-2">OPEN/</h4>
          <p className="text-xs text-dim">© {new Date().getFullYear()} Open Indie Builder.</p>
        </div>
        
        <div className="flex gap-6 text-xs text-dim">
           <button onClick={() => onViewLegal(LegalView.TERMS)} className="hover:text-white transition-colors">
             TERMS
           </button>
           <button onClick={() => onViewLegal(LegalView.PRIVACY)} className="hover:text-white transition-colors">
             PRIVACY
           </button>
           {/* <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
             THREADS
           </a> */}
           <a href="https://www.0xfe.dev/?utm_source=open-manifest" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
             CONTACT
           </a>
        </div>
      </div>
    </footer>
  );
};