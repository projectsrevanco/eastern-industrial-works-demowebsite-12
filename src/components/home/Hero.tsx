import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Wrench, Truck } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative bg-[#0E1A23] text-white min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden border-b border-[#213C50]">
      {/* Background Facility Photograph with Graceful Fallback */}
      <div className="absolute inset-0 z-0">
        {!imageError && (
          <img
            src="/images/hero-industrial-facility.jpg"
            alt="Eastern Industrial Works precision manufacturing facility with CNC machining centers, overhead cranes, and quality metrology stations"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Deep Industrial Navy Overlay for Text Legibility & Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0E1A23]/95 via-[#172B3A]/90 to-[#172B3A]/60"
          aria-hidden="true"
        />

        {/* Vertical gradient edge for smooth transitions */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0E1A23] via-transparent to-[#0E1A23]/40"
          aria-hidden="true"
        />

        {/* Restrained Precision Engineering Grid Pattern */}
        <div
          className="absolute inset-0 bg-industrial-grid-dark opacity-35 pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle Ambient Safety Amber Glow */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E99A26]/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Area */}
      <Container size="xl" className="relative z-10 py-12 sm:py-20 lg:py-28">
        <div className="max-w-4xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-3.5 py-1 sm:py-1.5 text-xs sm:text-[14px] font-mono font-bold uppercase tracking-wider rounded-xs bg-[#213C50]/80 text-[#E99A26] border border-[#E99A26]/30 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#E99A26] inline-block animate-pulse" />
            <span>INDUSTRIAL MANUFACTURING &amp; SUPPLY</span>
          </div>

          {/* Main Headline (Desktop 58–64px) */}
          <h1 className="typography-hero text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[58px] xl:text-[64px] font-heading font-extrabold text-white tracking-tight leading-[1.14] mb-4 sm:mb-6">
            Precision Manufacturing.{' '}
            <span className="text-[#E99A26] block sm:inline">Reliable Industrial Supply.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-[15.5px] sm:text-[18px] lg:text-[20px] text-slate-200 leading-[1.65] mb-7 sm:mb-10 max-w-3xl font-normal">
            Eastern Industrial Works delivers precision-engineered machinery components, close-tolerance CNC turned parts, and heavy-duty industrial packaging supplies. We support engineering firms, equipment manufacturers, and plant operators with end-to-end technical coordination — from initial drawing and tolerance review through multi-stage inspection and scheduled B2B batch delivery.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none">
            <Button
              variant="amber"
              size="lg"
              to="/products"
              rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
              className="font-bold text-[14px] sm:text-[16px] px-5 sm:px-7 py-3 sm:py-3.5 shadow-lg tracking-wide uppercase justify-center w-full sm:w-auto"
            >
              Explore Our Products
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/contact"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              className="font-bold text-[14px] sm:text-[16px] px-5 sm:px-7 py-3 sm:py-3.5 text-white border-slate-300 hover:bg-white/10 hover:border-white tracking-wide uppercase justify-center w-full sm:w-auto"
            >
              Request a Quote
            </Button>
          </div>

          {/* Restrained Technical Highlights Bar (14px font size) */}
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#2B3D4D]/80 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 font-mono text-[13px] sm:text-[14px] text-slate-200">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xs bg-[#213C50] flex items-center justify-center shrink-0 text-[#E99A26]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="leading-snug">Quality Assured Component Fabrication</span>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xs bg-[#213C50] flex items-center justify-center shrink-0 text-[#E99A26]">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="leading-snug">High-Tolerance CNC &amp; Metal Machining</span>
            </div>
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xs bg-[#213C50] flex items-center justify-center shrink-0 text-[#E99A26]">
                <Truck className="w-5 h-5" />
              </div>
              <span className="leading-snug">Contract B2B Scheduling &amp; Logistics</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
