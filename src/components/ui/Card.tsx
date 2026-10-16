import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'industrial' | 'flat' | 'dark';
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverEffect = true,
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    default:
      'bg-white border border-[#E1E6EB] shadow-sm',
    industrial:
      'bg-white border border-[#E1E6EB] border-t-4 border-t-[#E99A26] shadow-sm',
    flat:
      'bg-[#F3F5F7] border border-[#E1E6EB]',
    dark:
      'bg-[#172B3A] text-white border border-[#2B3D4D] shadow-md',
  };

  return (
    <div
      className={cn(
        'rounded-sm p-6 transition-all duration-200 relative overflow-hidden',
        variantStyles[variant],
        hoverEffect &&
          'hover:shadow-md hover:border-[#CBD5E1] transition-shadow duration-300',
        variant === 'industrial' && hoverEffect && 'hover:border-t-[#E99A26]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('mb-4 space-y-1.5', className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3
    className={cn(
      'typography-card text-xl sm:text-[22px] lg:text-[24px] font-heading font-bold text-[#172B3A] tracking-tight leading-snug',
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => (
  <p className={cn('text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal', className)} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('text-[15px] sm:text-[16px] text-[#24292E] space-y-3.5', className)} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      'mt-6 pt-4 border-t border-[#E1E6EB] flex items-center justify-between gap-4 text-[14px] font-mono',
      className
    )}
    {...props}
  >
    {children}
  </div>
);
