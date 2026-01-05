import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";

export const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("open_consent");
    if (!consent) {
      // Delay slightly for aesthetics
      setTimeout(() => setShow(true), 1500);
    } else if (consent === "granted") {
      initializeAnalytics();
    }
  }, []);

  const initializeAnalytics = () => {
    // console.log(
    //   "[OPEN/ SYSTEM] Analytics Initialized"
    // );
  };

  const handleAccept = () => {
    localStorage.setItem("open_consent", "granted");
    initializeAnalytics();
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("open_consent", "denied");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full"
        >
          <div className="bg-[#0B0B0C] border border-white/10 p-6 shadow-2xl">
            <h4 className="font-mono text-xs text-accent mb-2">
              SYSTEM_NOTICE
            </h4>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              We only collect anonymous usage data to help us improve the tool suite.
            </p>
            <div className="flex gap-4">
              <Button onClick={handleAccept}>--acknowledge</Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
