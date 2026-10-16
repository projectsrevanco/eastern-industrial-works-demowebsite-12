import React from 'react';
import { Link } from 'react-router-dom';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'amber' | 'secondary' | 'outline' | 'outline-amber' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[#172B3A] text-white hover:bg-[#213C50] active:bg-[#0E1A23] border border-[#172B3A] shadow-sm',
  amber:
    'bg-[#E99A26] text-[#172B3A] hover:bg-[#D68817] active:bg-[#C27810] border border-[#E99A26] font-bold shadow-sm',
  secondary:
    'bg-[#F3F5F7] text-[#172B3A] hover:bg-[#E2E8F0] active:bg-[#CBD5E1] border border-[#E1E6EB]',
  outline:
    'bg-transparent text-[#172B3A] border-2 border-[#172B3A] hover:bg-[#172B3A] hover:text-white',
  'outline-amber':
    'bg-transparent text-[#E99A26] border-2 border-[#E99A26] hover:bg-[#E99A26] hover:text-[#172B3A]',
  ghost:
    'bg-transparent text-[#24292E] hover:bg-[#F3F5F7] hover:text-[#172B3A]',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'text-[13px] sm:text-[14px] px-3 sm:px-4 py-2 gap-1.5 sm:gap-2 font-semibold tracking-wide min-h-[38px] sm:min-h-[40px]',
  md: 'text-[14px] sm:text-[15px] px-4 sm:px-5 py-2.5 gap-2 font-semibold tracking-wide min-h-[44px]',
  lg: 'text-[14px] sm:text-[16px] px-5 sm:px-6 py-3 sm:py-3.5 gap-2.5 font-bold tracking-wide min-h-[48px]',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-heading rounded-sm transition-all duration-200 select-none cursor-pointer touch-manipulation',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E99A26] focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={baseClasses}
      disabled={disabled}
      {...props}
    >
      {content}
    </motion.button>
  );
};
