import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', href, className = '', ...props }) => {
  // Changed inline-block to inline-flex items-center to keep brackets aligned with content
  const baseStyles = "font-mono text-sm tracking-wide transition-colors duration-200 focus:outline-none group inline-flex items-center whitespace-nowrap";
  
  // Primary: White text that turns black on white bg
  const primaryStyles = "text-white hover:text-black hover:bg-white";
  
  // Secondary: Muted text that turns white
  const secondaryStyles = "text-muted hover:text-white";

  const content = (
    <>
      <span className="opacity-50 mr-2">[</span>
      <span className={className}>{children}</span>
      <span className="opacity-50 ml-2">]</span>
    </>
  );

  const combinedClasses = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};