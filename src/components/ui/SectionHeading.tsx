import React from 'react';
import { cn } from '../../utils/cn';

export interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  accentBar?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  accentBar = true,
  className,
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'max-w-4xl mb-12 md:mb-16',
        align === 'center' && 'mx-auto text-center',
        align === 'right' && 'ml-auto text-right',
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            'inline-flex items-center gap-2 mb-3.5 px-3 py-1.5 text-[13px] sm:text-[14px] font-mono font-bold uppercase tracking-wider rounded-xs',
            isDark
              ? 'bg-[#E99A26]/15 text-[#E99A26] border border-[#E99A26]/30'
              : 'bg-[#172B3A]/8 text-[#172B3A] border border-[#172B3A]/15'
          )}
        >
          <span className="w-2 h-2 rounded-full bg-[#E99A26] inline-block" />
          {badge}
        </div>
      )}

      <div className="relative">
        <h2
          className={cn(
            'typography-section text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-extrabold tracking-tight leading-[1.2]',
            isDark ? 'text-white' : 'text-[#172B3A]'
          )}
        >
          {title}
        </h2>

        {accentBar && (
          <div
            className={cn(
              'h-1.5 w-14 bg-[#E99A26] mt-4 rounded-xs',
              align === 'center' && 'mx-auto',
              align === 'right' && 'ml-auto'
            )}
          />
        )}
      </div>

      {subtitle && (
        <p
          className={cn(
            'mt-4.5 text-[17px] sm:text-[18px] lg:text-[19px] leading-relaxed font-normal',
            isDark ? 'text-slate-200' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
