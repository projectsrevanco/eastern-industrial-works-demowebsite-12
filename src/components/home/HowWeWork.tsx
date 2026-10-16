import React from 'react';
import { Mail, SearchCheck, FileSpreadsheet, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';

interface WorkflowStep {
  step: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const steps: WorkflowStep[] = [
  {
    step: '01',
    name: 'Drawing & Requirement Intake',
    icon: <Mail className="w-5 h-5 text-[#E99A26]" />,
    description:
      'Client submits technical 2D blueprints, 3D CAD models, target batch estimates, and material preferences through our secure RFQ portal.',
  },
  {
    step: '02',
    name: 'Engineering & DFM Review',
    icon: <SearchCheck className="w-5 h-5 text-[#E99A26]" />,
    description:
      'Rigorous engineering evaluation of geometric tolerances, alloy metallurgy, tooling requirements, and practical manufacturing feasibility.',
  },
  {
    step: '03',
    name: 'Commercial Quotation',
    icon: <FileSpreadsheet className="w-5 h-5 text-[#E99A26]" />,
    description:
      'Itemized proposal detailing price tiers across target volume breaks, tooling/setup charges, material certifications, and delivery timelines.',
  },
  {
    step: '04',
    name: 'Controlled Production & Metrology',
    icon: <ShieldCheck className="w-5 h-5 text-[#E99A26]" />,
    description:
      'Series manufacturing under calibrated machine setups with first-article verification (FAI), in-process sampling, and full dimensional audits.',
  },
  {
    step: '05',
    name: 'Preservation & Dispatch Coordination',
    icon: <Truck className="w-5 h-5 text-[#E99A26]" />,
    description:
      'Application of VCI anti-corrosion barrier protection, heavy-duty timber crating, final QA dossiers compilation, and scheduled freight dispatch.',
  },
];

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#172B3A] text-white relative overflow-hidden border-b border-[#213C50]">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-industrial-grid-dark opacity-30 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          badge="PROCESS &amp; EXECUTION WORKFLOW"
          title="How We Work: Transparent Five-Step B2B Workflow"
          subtitle="A systematic, milestone-driven process ensuring accountability, specification adherence, and reliable delivery at every phase."
          theme="dark"
        />

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`bg-[#0E1A23] border border-[#2B3D4D] hover:border-[#E99A26] p-6 sm:p-7 rounded-sm relative flex flex-col justify-between transition-all duration-200 hover:shadow-lg ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Step Number Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xs bg-[#213C50] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[12px] font-bold text-[#E99A26] px-2.5 py-1 bg-[#213C50] rounded-xs border border-[#2B3D4D]">
                    STEP {item.step}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-[19px] sm:text-[21px] text-white mb-2.5 leading-snug">
                  {item.name}
                </h3>

                <p className="text-[14px] sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-3.5 border-t border-[#213C50] text-[12px] font-mono text-slate-400 font-medium">
                Phase {index + 1} of 5 &bull; Milestone Verified
              </div>
            </div>
          ))}
        </div>

        {/* Quick RFQ Action Bar */}
        <div className="bg-[#213C50]/90 border border-[#2B3D4D] p-6 sm:p-7 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-[15px] sm:text-[16px] text-slate-200 leading-relaxed">
            <span className="font-bold text-white block sm:inline">Have an active inquiry or tender? </span>
            Our engineering team reviews technical packages and provides formal quotations within standard business hours.
          </div>
          <Button
            variant="amber"
            size="md"
            to="/contact"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="font-bold text-[14px] sm:text-[15px] uppercase tracking-wider shrink-0 px-6 py-3"
          >
            Initiate Step 01: Submit Enquiry
          </Button>
        </div>
      </Container>
    </section>
  );
};
