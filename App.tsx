import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifest } from './components/Manifest';
import { Tools } from './components/Tools';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { LegalModal } from './components/LegalModal';
import { LegalView } from './types';
import { TERMS_TEXT, PRIVACY_TEXT } from './constants';

const App: React.FC = () => {
  const [legalView, setLegalView] = useState<LegalView>(LegalView.NONE);

  const closeLegal = () => setLegalView(LegalView.NONE);

  return (
    <div className="bg-[#0B0B0C] min-h-screen text-white font-sans selection:bg-accent selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <Manifest />
        <Tools />
        <Pricing />
        <FAQ />
      </main>

      <Footer onViewLegal={setLegalView} />
      
      <CookieBanner />

      <AnimatePresence>
        {legalView === LegalView.TERMS && (
          <LegalModal 
            key="terms" 
            title="Terms of Service" 
            content={TERMS_TEXT} 
            onClose={closeLegal} 
          />
        )}
        {legalView === LegalView.PRIVACY && (
          <LegalModal 
            key="privacy" 
            title="Privacy Policy" 
            content={PRIVACY_TEXT} 
            onClose={closeLegal} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;