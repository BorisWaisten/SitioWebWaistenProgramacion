import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showArrow?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  showArrow = false,
  external = false,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 font-semibold transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#48bfda] to-[#6acfc7] text-white hover:from-[#0c5972] hover:to-[#48bfda]',
    secondary: 'bg-[#1c3d5a] text-white hover:bg-[#0c5972] border border-[#48bfda]/30',
    outline: 'border border-[#48bfda] text-[#48bfda] hover:bg-[#48bfda] hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-lg',
    lg: 'px-8 md:px-10 py-4 md:py-5 text-base md:text-lg rounded-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

