import React from 'react';
import { ShieldCheck, FileCheck, Search, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';

export const QualitySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E1E6EB]">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          <div className="lg:col-span-8">
            <SectionHeading
              badge="QUALITY ASSURANCE &amp; INSPECTION"
              title="Inspection Procedures, Quality Documentation &amp; Traceability"
              subtitle="Ensuring repeatability, dimensional adherence, and full material accountability from incoming stock to finished component delivery."
              className="mb-0"
            />
          </div>

          <div className="lg:col-span-4 flex lg:justify-end w-full lg:w-auto">
            <Button
              variant="outline"
              size="md"
              to="/quality"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold tracking-wide uppercase text-[14px] sm:text-[15px] px-5 py-2.5 w-full sm:w-auto justify-center"
            >
              Explore Quality Protocols
            </Button>
          </div>
        </div>

        {/* 3 Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Pillar 1: Inspection Procedures */}
          <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#E1E6EB] border-t-4 border-t-[#172B3A] rounded-xs flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-11 h-11 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center mb-4">
                <Search className="w-6 h-6" />
              </div>

              <h3 className="typography-card font-heading font-bold text-[22px] sm:text-[24px] text-[#172B3A] mb-3 leading-snug">
                Multi-Point Inspection Procedures
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-5">
                Structured quality gates governing incoming raw barstock and casting verification, first-article sign-off, in-process gauge sampling, and 100% critical feature pre-dispatch audits.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#E1E6EB]">
                <div className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                  <span>First-Article Inspection (FAI) Approval</span>
                </div>
                <div className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                  <span>Calibrated Metrology Tools &amp; Gauging</span>
                </div>
                <div className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                  <span>100% Critical Dimension Audits</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-[#E1E6EB] text-[12px] font-mono text-slate-500 font-semibold">
              FOCUS AREA &bull; DIMENSIONAL VERIFICATION
            </div>
          </div>

          {/* Pillar 2: Quality Documentation */}
          <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#E1E6EB] border-t-4 border-t-[#E99A26] rounded-xs flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-11 h-11 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6" />
              </div>

              <h3 className="typography-card font-heading font-bold text-[22px] sm:text-[24px] text-[#172B3A] mb-3 leading-snug">
                Complete Quality Documentation
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-5">
                Every manufactured consignment is accompanied by structured documentation dossiers in accordance with purchase order terms, engineering prints, and client compliance requirements.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#E1E6EB]">
                <div className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                  <span>Dimensional Inspection Test Reports (ITR)</span>
                </div>
                <div className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                  <span>Certificate of Conformance (CoC)</span>
                </div>
                <div className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                  <span>Mill Test Reports (MTR 3.1) Archiving</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-[#E1E6EB] text-[12px] font-mono text-slate-500 font-semibold">
              FOCUS AREA &bull; DOCUMENTATION &amp; COMPLIANCE
            </div>
          </div>

          {/* Pillar 3: Material Traceability */}
          <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#E1E6EB] border-t-4 border-t-[#172B3A] rounded-xs flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-11 h-11 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center mb-4">
                <Scale className="w-6 h-6" />
              </div>

              <h3 className="typography-card font-heading font-bold text-[22px] sm:text-[24px] text-[#172B3A] mb-3 leading-snug">
                Batch Traceability &amp; Material Control
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-5">
                End-to-end traceability protocols maintaining physical heat lot segregation, chemical analysis verification, part markings, and recorded machine operator logs for every batch.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#E1E6EB]">
                <div className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                  <span>Heat Number &amp; Lot Segregation</span>
                </div>
                <div className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                  <span>Part Marking &amp; Permanent Batch Stamping</span>
                </div>
                <div className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                  <span>End-to-End Raw Material Records</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-[#E1E6EB] text-[12px] font-mono text-slate-500 font-semibold">
              FOCUS AREA &bull; MATERIAL ACCOUNTABILITY
            </div>
          </div>
        </div>

        {/* Quality Standards & Testing Collaboration Note */}
        <div className="p-6 sm:p-7 bg-[#FFF8EE] border border-[#E99A26]/30 rounded-sm flex items-start gap-4 text-slate-700">
          <ShieldCheck className="w-6 h-6 text-[#E99A26] shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <span className="font-bold text-[#172B3A] block font-heading text-[16px] sm:text-[17px]">
              Third-Party Inspection &amp; Client Hold-Point Collaboration
            </span>
            <p className="text-[15px] text-slate-700 leading-relaxed">
              We accommodate client inspection visits, pre-shipment third-party inspections (TPIA),
              and customer-specific quality control plans (QCP) agreed upon during commercial contract finalization.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
