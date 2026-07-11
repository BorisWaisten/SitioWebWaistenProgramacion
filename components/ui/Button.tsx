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
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
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
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'group inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 disabled:opacity-50';

  const variantClasses = {
    primary: 'bg-[#48bfda] text-[#05090e] hover:bg-[#6ed3ea]',
    secondary: 'bg-white/5 text-white border border-white/10 hover:border-white/30',
    outline: 'border border-[#48bfda] text-[#48bfda] hover:bg-[#48bfda] hover:text-[#05090e]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 md:px-8 py-3 text-sm md:text-base',
    lg: 'px-8 md:px-10 py-4 text-base md:text-lg',
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
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
