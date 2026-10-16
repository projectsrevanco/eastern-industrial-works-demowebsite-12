import React from 'react';
import { FileCode, Sliders, CalendarClock, Boxes, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';

const capabilities = [
  {
    icon: <FileCode className="w-6 h-6 text-[#E99A26]" />,
    code: 'CAP-01',
    title: 'Custom Drawing & CAD Review',
    description:
      'We conduct detailed intake audits on customer 2D blueprints (PDF, DWG, DXF) and 3D solid models (STEP, IGES), evaluating GD&T tolerances, surface finish callouts, and practical design-for-manufacturing (DFM) opportunities.',
  },
  {
    icon: <Sliders className="w-6 h-6 text-[#E99A26]" />,
    code: 'CAP-02',
    title: 'Material & Metallurgy Consultation',
    description:
      'Technical consultation covering carbon steels, high-tensile alloy grades (EN19, EN24, 4140), austenitic stainless, bronzes, and engineering polymers to ensure proper wear life, hardness, and corrosion resistance.',
  },
  {
    icon: <CalendarClock className="w-6 h-6 text-[#E99A26]" />,
    code: 'CAP-03',
    title: 'Production Staging & Milestone Tracking',
    description:
      'Structured process routing across CNC roughing, finish turning, spline milling, heat treatment, and surface grinding, supported by proactive milestone status reports throughout production execution.',
  },
  {
    icon: <Boxes className="w-6 h-6 text-[#E99A26]" />,
    code: 'CAP-04',
    title: 'Bulk Production & Blanket Call-Offs',
    description:
      'Flexible commercial supply models accommodating initial first-article pilot validation batches, full production runs, and annual scheduled releases aligned with factory operational forecasts.',
  },
];

export const ManufacturingSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E1E6EB]">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12">
          <div className="lg:col-span-8">
            <SectionHeading
              badge="ENGINEERING COLLABORATION"
              title="Manufacturing Capabilities &amp; Technical Coordination"
              subtitle="From drawing review to coordinated batch fulfillment, our manufacturing management framework is designed to deliver precision components matching your exact engineering parameters."
              className="mb-0"
            />
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <Button
              variant="amber"
              size="md"
              to="/contact"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              className="font-bold uppercase tracking-wide text-[14px] sm:text-[15px] px-5 py-2.5 w-full sm:w-auto justify-center"
            >
              Submit Drawings for Review
            </Button>
            <Button
              variant="outline"
              size="md"
              to="/manufacturing"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold uppercase tracking-wide text-[14px] sm:text-[15px] px-5 py-2.5 w-full sm:w-auto justify-center"
            >
              View Capabilities
            </Button>
          </div>
        </div>

        {/* 4 Manufacturing Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <div
              key={item.code}
              className="bg-[#F8FAFC] border border-[#E1E6EB] hover:border-[#172B3A] p-6 sm:p-7 rounded-sm flex flex-col justify-between hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xs bg-[#172B3A] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[12px] font-mono font-bold text-slate-500">
                    {item.code}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-[20px] sm:text-[22px] text-[#172B3A] mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#E1E6EB] text-[13px] font-mono text-[#E99A26] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                <span>Technical Review Supported</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
