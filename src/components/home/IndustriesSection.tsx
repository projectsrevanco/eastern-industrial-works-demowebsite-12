import React from 'react';
import { HardHat, Cog, Factory, Package, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';

interface SectorItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  tag: string;
  description: string;
  typicalProducts: string[];
}

const sectors: SectorItem[] = [
  {
    id: 'engineering',
    name: 'Engineering & Construction',
    icon: <HardHat className="w-6 h-6 text-[#E99A26]" />,
    tag: 'SECTOR &bull; ENG-01',
    description:
      'Heavy structural baseplates, anchor weldments, custom brackets, and reinforced mounting fixtures engineered for heavy construction, foundation bolting, and plant infrastructure.',
    typicalProducts: ['Mounting Bases', 'Structural Brackets', 'Anchor Weldments'],
  },
  {
    id: 'machinery-oem',
    name: 'Industrial Equipment & OEMs',
    icon: <Cog className="w-6 h-6 text-[#E99A26]" />,
    tag: 'SECTOR &bull; OEM-02',
    description:
      'Precision drive shafts, forged gears, bearing housings, hydraulic manifolds, and custom turned components engineered for original equipment manufacturers and machinery builders.',
    typicalProducts: ['Transmission Shafts', 'Forged Gears', 'Hydraulic Manifolds'],
  },
  {
    id: 'manufacturing-plants',
    name: 'Manufacturing & Processing Plants',
    icon: <Factory className="w-6 h-6 text-[#E99A26]" />,
    tag: 'SECTOR &bull; PRN-03',
    description:
      'High-wear replacement tooling, conveyor mechanical parts, machine guide rails, and scheduled maintenance spares designed to withstand severe wear in continuous processing operations.',
    typicalProducts: ['Wear Spares', 'Conveyor Components', 'Tooling Blocks'],
  },
  {
    id: 'packaging-warehousing',
    name: 'Packaging & Logistics Operations',
    icon: <Package className="w-6 h-6 text-[#E99A26]" />,
    tag: 'SECTOR &bull; LOG-04',
    description:
      'Heavy-duty multi-wall corrugated containers, high-yield stretch films, polyester strapping, and protective barrier packaging designed for domestic freight and export transport.',
    typicalProducts: ['Industrial Strapping', 'Corrugated Crates', 'Barrier Packaging'],
  },
];

export const IndustriesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E1E6EB]">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="SECTOR SPECIALIZATION"
            title="Industries Served &amp; Application Areas"
            subtitle="Supplying engineered components, industrial hardware, and packaging solutions tailored to the operating conditions of critical sectors."
            className="mb-0"
          />

          <div className="shrink-0">
            <Button
              variant="outline"
              size="md"
              to="/industries"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold tracking-wide uppercase text-[14px] sm:text-[15px] px-5 py-2.5"
            >
              View All Industries
            </Button>
          </div>
        </div>

        {/* 4 Example Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {sectors.map((sec) => (
            <div
              key={sec.id}
              className="bg-white border border-[#E1E6EB] hover:border-[#172B3A] p-6 sm:p-7 rounded-sm shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xs bg-[#172B3A] flex items-center justify-center shrink-0">
                    {sec.icon}
                  </div>
                  <span
                    className="text-[12px] font-mono text-slate-500 font-bold"
                    dangerouslySetInnerHTML={{ __html: sec.tag }}
                  />
                </div>

                <h3 className="font-heading font-bold text-[20px] sm:text-[22px] text-[#172B3A] mb-2.5 leading-snug">
                  {sec.name}
                </h3>

                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-5">
                  {sec.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#E1E6EB]">
                  <span className="text-[12px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                    Typical Application Output
                  </span>
                  {sec.typicalProducts.map((prod, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26] shrink-0" />
                      <span>{prod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#E1E6EB]">
                <Button
                  variant="ghost"
                  size="sm"
                  to="/industries"
                  fullWidth
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                  className="text-[14px] sm:text-[15px] font-semibold justify-between px-2 text-[#172B3A] hover:text-[#E99A26]"
                >
                  Sector Overview
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Note regarding client confidentiality */}
        <div className="p-4 sm:p-5 bg-white border border-[#CBD5E1] rounded-xs text-[13px] sm:text-[14px] text-slate-600 font-mono flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>
            SECTOR PROFILES: Illustrated application areas represent typical engineering capabilities and material supply scopes.
          </span>
          <span className="text-[#E99A26] font-bold shrink-0">B2B CONTRACT SUPPLY</span>
        </div>
      </Container>
    </section>
  );
};
