import React from 'react';
import { ArrowRight, Cog, Package, Layers } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';

export const CompanyIntro: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E1E6EB]">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Mission & Overview */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="B2B INDUSTRIAL SUPPLY &amp; MANUFACTURING"
              title="A Dedicated B2B Supplier for Industrial Products, Machinery Components &amp; Packaging Materials"
              subtitle="Eastern Industrial Works delivers dependable procurement and custom manufacturing solutions tailored for engineering firms, original equipment manufacturers, and commercial industrial operations."
              className="mb-6"
            />

            <div className="space-y-4 text-[17px] sm:text-[18px] text-slate-700 leading-relaxed font-normal">
              <p>
                We focus on bridging the gap between exacting technical requirements and reliable commercial
                delivery. Whether supplying standard replacement machinery components, coordinating high-precision
                custom manufactured parts, or providing heavy-duty transit packaging materials, our operations
                are built around repeatable quality, verified dimensional accuracy, and transparent client communication.
              </p>
              <p>
                Our engineering-led model supports procurement managers and plant engineers across drawing reviews,
                metallurgical specifications, and scheduled batch fulfillment. By integrating structured quality control
                plans (QCP) with comprehensive material traceability, we ensure every consignment meets specified tolerances
                and duty-cycle requirements before dispatch.
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                to="/about"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold tracking-wide uppercase text-[15px] sm:text-[16px] px-6 py-3"
              >
                Learn More About Our Business
              </Button>
            </div>
          </div>

          {/* Right Column: Three Core Supply Highlights */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#E1E6EB] border-l-4 border-l-[#172B3A] rounded-xs hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center shrink-0 mt-0.5">
                  <Cog className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[20px] sm:text-[22px] text-[#172B3A] leading-snug">
                    Industrial Machinery Parts
                  </h4>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 mt-2 leading-relaxed">
                    Forged gears, heavy-duty drive shafts, flanged bearing housings, and mechanical transmission assemblies engineered for severe duty cycles, high shock loads, and continuous plant operation.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[13px] font-mono text-[#E99A26] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Hardened Steels &bull; Spur/Helical Gears &bull; Shafts</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#E1E6EB] border-l-4 border-l-[#E99A26] rounded-xs hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[20px] sm:text-[22px] text-[#172B3A] leading-snug">
                    Precision Machined Components
                  </h4>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 mt-2 leading-relaxed">
                    Close-tolerance CNC turned and milled components, threaded bushings, hydraulic manifolds, and custom fittings produced strictly to client GD&amp;T drawings and micron-level surface finishes.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[13px] font-mono text-[#E99A26] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Tight GD&amp;T &bull; Brass/Stainless/Alloys &bull; Micron Fits</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#E1E6EB] border-l-4 border-l-[#172B3A] rounded-xs hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center shrink-0 mt-0.5">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[20px] sm:text-[22px] text-[#172B3A] leading-snug">
                    Industrial Packaging Materials
                  </h4>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 mt-2 leading-relaxed">
                    Heavy-duty multi-wall corrugated containers, high-tensile polyester and steel strapping, protective barrier films, and export-grade pallet packaging designed to safeguard industrial freight.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[13px] font-mono text-[#E99A26] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>High-Bursting Strength &bull; VCI Films &bull; Strapping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
