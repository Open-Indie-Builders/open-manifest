import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Markdown from "react-markdown";

interface LegalModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  title,
  content,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-[#0B0B0C] border border-white/10 shadow-2xl relative flex flex-col max-h-[85vh]"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
          <h3 className="text-xl font-medium tracking-wide">{title}</h3>
          <button
            onClick={onClose}
            className="text-dim hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          <Markdown
            className="space-y-4 text-sm font-light text-muted"
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="text-white text-lg font-medium mt-6 mb-2"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-white text-base font-medium mt-6 mb-3 uppercase tracking-wider"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="text-white text-sm font-medium mt-4 mb-2"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="leading-relaxed mb-4" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className="list-disc list-outside ml-4 mb-4 space-y-1"
                  {...props}
                />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  className="list-decimal list-outside ml-4 mb-4 space-y-1"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => <li className="pl-1" {...props} />,
              a: ({ node, ...props }) => (
                <a
                  className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all"
                  {...props}
                />
              ),
              strong: ({ node, ...props }) => (
                <strong className="text-white font-medium" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-2 border-white/20 pl-4 italic text-dim my-4"
                  {...props}
                />
              ),
            }}
          >
            {content}
          </Markdown>
        </div>
      </motion.div>
    </div>
  );
};
