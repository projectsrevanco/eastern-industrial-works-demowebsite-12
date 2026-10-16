import React from 'react';
import { RefreshCw, Boxes, FileCheck2, Truck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';

const b2bFeatures = [
  {
    icon: <RefreshCw className="w-6 h-6 text-[#E99A26]" />,
    title: 'Repeat & Replenishment Supply',
    description:
      'Fast-track re-ordering systems for established part numbers, regular plant replacement items, and recurring packaging consumables with locked specification baselines.',
  },
  {
    icon: <Boxes className="w-6 h-6 text-[#E99A26]" />,
    title: 'Bulk Orders & Staged Releases',
    description:
      'Volume-tier pricing structures, staged production releases, and blanket purchase order agreements designed to align precisely with your factory production calendar.',
  },
  {
    icon: <FileCheck2 className="w-6 h-6 text-[#E99A26]" />,
    title: 'Tailored Technical Requirements',
    description:
      'Dedicated engineering coordination covering specialized alloy selections, custom dimensional fits, modified surface treatments, and application-specific crating.',
  },
  {
    icon: <Truck className="w-6 h-6 text-[#E99A26]" />,
    title: 'End-to-End Freight Coordination',
    description:
      'Industrial-grade protective packing, humidity-resistant VCI wrapping, freight bill of lading manifests, and reliable transport tracking directly to your manufacturing receiving bay.',
  },
];

export const B2BSupplySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0E1A23] text-white relative overflow-hidden border-b border-[#213C50]">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-industrial-grid-dark opacity-25 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="max-w-4xl mb-12">
          <SectionHeading
            badge="COMMERCIAL PROCUREMENT INTEGRATION"
            title="B2B Supply Capabilities &amp; Contract Procurement"
            subtitle="Built to support enterprise purchasing departments, plant managers, and equipment builders with transparent communication, predictable lead times, and dependable fulfilment."
            theme="dark"
            className="mb-0"
          />
        </div>

        {/* 4 B2B Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {b2bFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#172B3A] border border-[#2B3D4D] hover:border-[#E99A26] p-6 sm:p-7 rounded-sm flex flex-col justify-between hover:shadow-lg transition-all duration-200"
            >
              <div>
                <div className="w-11 h-11 rounded-xs bg-[#213C50] flex items-center justify-center mb-4">
                  {feat.icon}
                </div>

                <h3 className="font-heading font-bold text-[20px] sm:text-[22px] text-white mb-2.5 leading-snug">
                  {feat.title}
                </h3>

                <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#213C50] flex items-center gap-2 text-[13px] font-mono text-[#E99A26] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Enterprise Supported</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Procurement Banner */}
        <div className="bg-[#172B3A] border border-[#213C50] p-6 sm:p-8 lg:p-9 rounded-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[12px] sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#E99A26]">
              PURCHASING DESK ASSISTANCE
            </span>
            <h4 className="font-heading font-bold text-xl sm:text-2xl text-white leading-snug">
              Planning annual blanket orders or looking for scheduled batch deliveries?
            </h4>
            <p className="text-[15px] sm:text-[16px] text-slate-200 leading-relaxed">
              Our commercial estimating team assists with volume pricing models, production timeline buffering, and single-point order coordination.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            <Button
              variant="amber"
              size="md"
              to="/contact"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              className="font-bold text-[14px] sm:text-[15px] uppercase tracking-wider px-6 py-3 w-full lg:w-auto justify-center"
            >
              Inquire About Supply Agreements
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
