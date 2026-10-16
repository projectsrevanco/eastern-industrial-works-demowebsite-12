import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ShieldCheck, Phone } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

interface NavItem {
  label: string;
  shortLabel?: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', shortLabel: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Manufacturing', path: '/manufacturing' },
  { label: 'Quality Assurance', shortLabel: 'Quality', path: '/quality' },
  { label: 'Industries & Supply', shortLabel: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle sticky navbar elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scrolling and add Escape listener when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/manufacturing') {
      return location.pathname === '/manufacturing' || location.pathname === '/capabilities';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full select-none">
      {/* Top Corporate Spec & Direct Desk Utility Strip */}
      <div className="bg-[#0E1A23] text-slate-300 text-xs border-b border-[#213C50] py-1.5 hidden md:block">
        <Container size="xl" className="flex items-center justify-between gap-3 text-[11px] font-mono">
          <div className="flex items-center gap-3 sm:gap-4 xl:gap-6 tracking-wider text-slate-400 min-w-0">
            <span className="flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#E99A26] inline-block animate-pulse" />
              B2B MANUFACTURING &amp; CONTRACT SUPPLY
            </span>
            <span className="text-slate-600 hidden xl:inline">|</span>
            <span className="hidden xl:flex items-center gap-1.5 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E99A26]" />
              STANDARD COMPLIANCE INVENTORY
            </span>
          </div>

          <div className="flex items-center gap-3 xl:gap-4 shrink-0">
            <span className="text-slate-400 hidden lg:inline">Direct RFQ Desk &amp; Technical Support</span>
            <Link
              to="/contact"
              className="text-[#E99A26] hover:text-white font-medium flex items-center gap-1 transition-colors"
            >
              Submit RFQ <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </Container>
      </div>

      {/* Main Brand Navigation Bar */}
      <nav
        className={cn(
          'w-full bg-[#172B3A] text-white transition-all duration-200 border-b border-[#213C50]',
          isScrolled ? 'shadow-xl py-2' : 'py-2.5 sm:py-3'
        )}
      >
        <Container size="xl" className="flex items-center justify-between gap-2 sm:gap-4 w-full min-w-0 px-3 sm:px-6 lg:px-6 2xl:px-8">
          {/* Professional Company Name: Two-line on mobile, single-line on desktop (NO LOGO) */}
          <Link
            to="/"
            className="flex items-center min-w-0 shrink group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E99A26] rounded-xs"
            aria-label="Eastern Industrial Works Home"
          >
            {/* Mobile Format: Exactly 2 lines (17-19px, compact line-height, no logo) */}
            <div className="flex flex-col text-left leading-[1.12] min-w-0 md:hidden select-none">
              <span className="font-heading font-extrabold text-[17px] xs:text-[18px] sm:text-[19px] tracking-tight text-white whitespace-nowrap">
                Eastern
              </span>
              <span className="font-heading font-extrabold text-[17px] xs:text-[18px] sm:text-[19px] tracking-tight text-[#E99A26] whitespace-nowrap">
                Industrial Works
              </span>
            </div>

            {/* Desktop Format: Single professional text line (no logo) */}
            <div className="hidden md:flex flex-col min-w-0 text-left">
              <span className="font-heading font-extrabold text-[18px] xl:text-[19px] 2xl:text-[21px] tracking-tight text-white leading-tight uppercase group-hover:text-slate-100 transition-colors whitespace-nowrap">
                Eastern Industrial <span className="text-[#E99A26]">Works</span>
              </span>
              <span className="text-[10.5px] 2xl:text-[12px] font-mono tracking-wider text-slate-400 uppercase font-medium whitespace-nowrap hidden lg:block">
                Industrial Manufacturing &amp; Supply
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (>= 1280px) */}
          <div className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 min-w-0">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'px-2 2xl:px-3 py-1.5 text-[13.5px] 2xl:text-[15px] font-heading font-semibold tracking-tight 2xl:tracking-normal rounded-xs whitespace-nowrap shrink-0 transition-all duration-150',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E99A26]',
                    active
                      ? 'text-white bg-[#213C50] border-b-2 border-[#E99A26] shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-[#213C50]/60'
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.shortLabel ? (
                    <>
                      <span className="hidden 2xl:inline">{item.label}</span>
                      <span className="inline 2xl:hidden">{item.shortLabel}</span>
                    </>
                  ) : (
                    item.label
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA (Desktop >= 1280px) */}
          <div className="hidden xl:flex items-center shrink-0">
            <Button
              variant="amber"
              size="sm"
              to="/contact"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />}
              className="px-3.5 2xl:px-5 py-2 text-[13px] 2xl:text-[14px] font-bold tracking-wide uppercase shadow-sm whitespace-nowrap shrink-0"
            >
              <span className="hidden 2xl:inline">Request a Quote</span>
              <span className="inline 2xl:hidden">Request Quote</span>
            </Button>
          </div>

          {/* Mobile & Tablet Controls (< 1280px): Right-aligned CTA & 44x44px Hamburger Menu */}
          <div className="flex xl:hidden items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/contact"
              className={cn(
                'inline-flex items-center justify-center gap-1 sm:gap-1.5 bg-[#E99A26] hover:bg-[#D68817] active:bg-[#C27810]',
                'text-[#172B3A] font-heading font-bold text-xs sm:text-[13px]',
                'px-2.5 xs:px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xs uppercase tracking-wider',
                'transition-colors shadow-xs shrink-0 select-none touch-manipulation min-h-[38px] sm:min-h-[44px]'
              )}
            >
              <span className="hidden sm:inline">Request Quote</span>
              <span className="sm:hidden">Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 flex items-center justify-center text-slate-200 hover:text-white bg-[#213C50]/80 hover:bg-[#213C50] active:bg-[#0E1A23] rounded-xs focus:outline-none focus:ring-2 focus:ring-[#E99A26] transition-colors shrink-0 border border-slate-700/60 touch-manipulation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-[#E99A26]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile / Tablet Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0E1A23]/80 backdrop-blur-xs z-40 xl:hidden"
              aria-hidden="true"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#172B3A] text-white z-50 shadow-2xl flex flex-col border-l border-[#2B3D4D] xl:hidden"
            >
              {/* Drawer Header (NO LOGO) */}
              <div className="p-4 flex items-center justify-between border-b border-[#213C50] bg-[#0E1A23]">
                <div className="flex flex-col text-left leading-[1.12]">
                  <span className="font-heading font-extrabold text-[16px] text-white">
                    Eastern
                  </span>
                  <span className="font-heading font-extrabold text-[16px] text-[#E99A26]">
                    Industrial Works
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                    NAVIGATION MENU
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-11 h-11 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#213C50] rounded-xs focus:outline-none focus:ring-2 focus:ring-[#E99A26]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-[#E99A26]" />
                </button>
              </div>

              {/* Drawer Quick Action Contact Strip */}
              <div className="p-3 bg-[#0E1A23] border-b border-[#213C50]">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-between p-2.5 bg-[#213C50]/70 hover:bg-[#213C50] rounded-xs border border-[#2B3D4D] text-xs font-mono text-slate-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#E99A26]" />
                    Direct RFQ Desk
                  </span>
                  <span className="font-bold text-[#E99A26]">+91 98765 43210</span>
                </a>
              </div>

              {/* Drawer Links List */}
              <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1.5 font-bold">
                  Corporate Directory
                </div>
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        'flex items-center justify-between px-4 py-3.5 rounded-xs text-[16px] sm:text-[17px] font-heading font-medium tracking-normal transition-colors min-h-[48px]',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E99A26]',
                        active
                          ? 'bg-[#213C50] text-[#E99A26] border-l-4 border-[#E99A26] font-semibold'
                          : 'text-slate-200 hover:bg-[#213C50]/60 hover:text-white'
                      )}
                      aria-current={active ? 'page' : undefined}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight
                        className={cn('w-4 h-4', active ? 'text-[#E99A26]' : 'text-slate-500')}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Bottom Prominent CTA */}
              <div className="p-4 border-t border-[#213C50] bg-[#0E1A23] space-y-3">
                <Button
                  variant="amber"
                  size="md"
                  fullWidth
                  to="/contact"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                  className="font-bold uppercase tracking-wider justify-center shadow-md py-3"
                >
                  Request a Quote (RFQ)
                </Button>
                <div className="pt-2 border-t border-[#213C50]/60 space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Direct Desk:</span>
                    <a href="tel:+919876543210" className="text-white hover:text-[#E99A26] transition-colors font-semibold">
                      +91 98765 43210
                    </a>
                  </div>
                  <div className="flex flex-col gap-0.5 pt-1">
                    <span className="text-slate-400">Technical RFQ Desk:</span>
                    <a href="mailto:rfq@easternindustrial.example.com" className="text-[#E99A26] hover:text-white transition-colors font-medium break-all">
                      rfq@easternindustrial.example.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
