import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Clock, FileText } from 'lucide-react';
import { Container, Button } from '../ui';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#172B3A] text-white relative overflow-hidden border-t border-[#213C50]">
      {/* Background Engineering Blueprint Grid */}
      <div className="absolute inset-0 bg-industrial-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E99A26]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 text-[13px] sm:text-[14px] font-mono font-bold uppercase tracking-wider rounded-xs bg-[#213C50] text-[#E99A26] border border-[#E99A26]/30">
            <span className="w-2 h-2 rounded-full bg-[#E99A26] inline-block animate-pulse" />
            <span>DIRECT COMMERCIAL &amp; ENGINEERING DESK</span>
          </div>

          {/* Main Headline (Desktop 44–54px) */}
          <h2 className="typography-page text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] xl:text-[54px] font-heading font-extrabold text-white tracking-tight leading-[1.16]">
            Looking for a Reliable Industrial Supply Partner?
          </h2>

          {/* Supporting Text */}
          <p className="text-[18px] sm:text-[19px] text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal">
            Connect with Eastern Industrial Works for precision manufacturing, machinery replacement
            components, and industrial packaging supplies. Our engineering and estimating desk provides
            transparent quotation reviews based on your drawings and batch requirements.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 pt-4 w-full max-w-md sm:max-w-none mx-auto">
            <Button
              variant="amber"
              size="lg"
              to="/contact"
              rightIcon={<ArrowUpRight className="w-5 h-5" />}
              className="font-bold text-[15px] sm:text-[16px] px-6 sm:px-8 py-3.5 uppercase tracking-wide shadow-lg justify-center w-full sm:w-auto"
            >
              Request a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/products"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="font-bold text-[15px] sm:text-[16px] px-6 sm:px-8 py-3.5 text-white border-slate-300 hover:bg-white/10 hover:border-white uppercase tracking-wide justify-center w-full sm:w-auto"
            >
              Explore Products Catalog
            </Button>
          </div>

          {/* Operational Scope Highlights Strip */}
          <div className="pt-10 mt-10 border-t border-[#2B3D4D] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-[14px] text-slate-200 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#E99A26] shrink-0" />
              <span>Full Drawing &amp; CAD Review (STEP, DWG, DXF)</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#E99A26] shrink-0" />
              <span>Standard Business Hours Quotation Review</span>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#E99A26] shrink-0" />
              <span>Commercial Non-Disclosure Compliance</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
