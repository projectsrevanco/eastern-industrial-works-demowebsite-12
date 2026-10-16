import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  Building2,
  Package,
  Wrench,
  CheckCircle2,
  Check,
  ArrowRight,
  ArrowUpRight,
  Truck,
  Calendar,
  Layers,
  Boxes,
  CreditCard,
  TrendingUp,
  Info,
  Clock,
  ShieldCheck,
  FileSpreadsheet,
} from 'lucide-react';
import { Container, SectionHeading, Button } from '../components/ui';

// Example Sectors Served Data
const industrySectors = [
  {
    title: 'Industrial Equipment & Machinery OEMs',
    code: 'SEC-01',
    icon: Factory,
    image: '/images/cat-machinery-parts.jpg',
    description:
      'Supplying high-torque drive components, forged gears, precision transmission shafts, and heavy fabricated machine bases for equipment manufacturers.',
    requirements: [
      'Tight concentricity & ground bearing journal tolerances',
      'Mill Test Certificates (MTC 3.1) and heat traceability',
      'First-Article Inspection Reports (FAIR) prior to serial runs',
    ],
    typicalComponents: ['Heavy Spur/Helical Gears', 'Stepped Drive Shafts', 'Plummer Block Housings', 'Welded Machine Bed Frames'],
  },
  {
    title: 'Engineering & Heavy Plant Operations',
    code: 'SEC-02',
    icon: Wrench,
    image: '/images/cat-precision-components.jpg',
    description:
      'Providing precision turned parts, high-pressure fluid manifolds, wear-resistant chute plates, and custom mounting brackets for severe-duty continuous plant processing.',
    requirements: [
      'High-tensile alloy steels (EN19, EN24, 4140) and heat treatments',
      'High wear and abrasion resistance in abrasive environments',
      'Scheduled maintenance shutdown batch deliveries',
    ],
    typicalComponents: ['Hydraulic Manifold Blocks', 'Precision Bushings & Sleeves', 'Hardened Wear Liners', 'Flange Couplings'],
  },
  {
    title: 'Manufacturing & Process Facilities',
    code: 'SEC-03',
    icon: Building2,
    image: '/images/cat-custom-products.jpg',
    description:
      'Delivering custom replacement spares, stainless steel fluid components, and custom structural assemblies for manufacturing lines, chemical plants, and food-grade facilities.',
    requirements: [
      'Corrosion-resistant stainless alloys (SS304, SS316, Duplex)',
      'Accurate dimensional replication for legacy equipment',
      'Clean surface passivations and deburred internal galleries',
    ],
    typicalComponents: ['Stainless Valve Spindles', 'Specialty Shaft Collars', 'Pump Mounting Pedestals', 'Agitator Drive Shafts'],
  },
  {
    title: 'Packaging & Industrial Logistics',
    code: 'SEC-04',
    icon: Package,
    image: '/images/cat-packaging-materials.jpg',
    description:
      'Supplying high-performance heavy-duty corrugated shipping containers, automated stretch wrapping films, high-tensile strapping, and VCI rust-inhibiting preservation materials.',
    requirements: [
      'High bursting strength (BST) and Edge Crush Test (ECT) ratings',
      'Puncture resistance and 300% film pre-stretch capabilities',
      'Corrosion barrier preservation for domestic and export container transit',
    ],
    typicalComponents: ['Heavy-Duty Multi-Wall Shippers', 'Machine Stretch Wrap Rolls', 'Composite & PET Strapping', 'VCI Anti-Corrosion Bags'],
  },
];

// Six-Step Supply Workflow
const supplyWorkflowSteps = [
  {
    step: '01',
    title: 'Requirement Submission',
    subtitle: 'Technical Intake',
    icon: FileSpreadsheet,
    description:
      'Buyer submits technical drawings (2D/3D CAD), material grades, quantity forecasts, required delivery dates, and specific quality inspection criteria.',
    output: 'Logged RFQ package & preliminary DFM check',
  },
  {
    step: '02',
    title: 'Commercial Quotation',
    subtitle: 'Cost & Feasibility Review',
    icon: TrendingUp,
    description:
      'Engineering and estimating review raw material costs, tooling requirements, batch manufacturing economics, and lead-time milestones to issue an itemized proposal.',
    output: 'Itemized quotation with volume price tiers',
  },
  {
    step: '03',
    title: 'Order Confirmation',
    subtitle: 'PO & Terms Sign-Off',
    icon: CheckCircle2,
    description:
      'Buyer issues formal Purchase Order (PO). Production schedules, delivery milestones, payment terms, and quality control plans (QAP) are finalized and confirmed.',
    output: 'Binding sales order & agreed production slot',
  },
  {
    step: '04',
    title: 'Production / Procurement',
    subtitle: 'Manufacturing Execution',
    icon: Factory,
    description:
      'Raw material heats are allocated with mill certificates. Dedicated machine setups, CNC tooling, and scheduled production runs proceed under supervised control.',
    output: 'Machined components & converted packaging lots',
  },
  {
    step: '05',
    title: 'Quality Checks & Metrology',
    subtitle: 'Compliance Verification',
    icon: ShieldCheck,
    description:
      'In-process gauge monitoring and 100% critical feature inspection are completed. Dimensional reports (ITR) and Certificates of Conformance (CoC) are compiled.',
    output: 'Verified QA dossier & dispatch release',
  },
  {
    step: '06',
    title: 'Dispatch Coordination',
    subtitle: 'Logistics Handover',
    icon: Truck,
    description:
      'Products receive protective VCI barrier wrapping and heavy-duty timber crating. Shipping manifests, freight handover, and dispatch notices are issued.',
    output: 'Bill of lading, delivery receipt, and carrier handover',
  },
];

export const Industries: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#F8FAFC]">
      {/* 1. Page Hero */}
      <section className="relative bg-[#172B3A] text-white py-16 lg:py-24 overflow-hidden border-b border-[#213C50]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/cat-packaging-materials.jpg"
            alt="Industrial warehouse distribution center with palletized inventory and high-bay racking"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1A23] via-[#172B3A]/90 to-[#172B3A]/80" />
        </div>

        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E99A26]/20 border border-[#E99A26]/40 rounded-xs text-[#E99A26] font-mono text-xs sm:text-[13px] uppercase tracking-wider font-semibold">
              <Truck className="w-4 h-4" />
              B2B Contract Supply & Industrial Logistics
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-heading font-extrabold text-white tracking-tight leading-tight">
              Industries Served & Bulk Supply Coordination
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] text-slate-300 leading-relaxed">
              Explore how Eastern Industrial Works supports equipment manufacturers, industrial maintenance departments, and corporate procurement teams with reliable batch production, repeat annual agreements, and coordinated delivery schedules.
            </p>

            {/* Operational & Commercial Transparency Notice */}
            <div className="p-5 sm:p-6 bg-[#0E1A23]/85 border-l-4 border-[#E99A26] border border-white/10 rounded-xs text-sm sm:text-[15px] text-slate-300 leading-relaxed flex items-start gap-3.5">
              <Info className="w-5 h-5 text-[#E99A26] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-heading text-base font-bold mb-1">
                  Commercial & Operational Transparency:
                </strong>
                All batch volumes, raw material index adjustments, production lead times, and payment terms are confirmed on an individual contract basis. To ensure complete operational integrity, Eastern Industrial Works coordinates orders through direct account managers rather than unverified automated algorithms or public portal claims.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Button
                variant="amber"
                size="lg"
                to="/contact?type=supply-agreement&category=custom-products"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="justify-center w-full sm:w-auto text-[14px] sm:text-[16px] font-bold px-5 sm:px-7 py-3 sm:py-3.5"
              >
                Discuss Contract Supply
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="#workflow"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent text-white border-white/30 hover:bg-white/10 justify-center w-full sm:w-auto text-[14px] sm:text-[16px] font-semibold px-5 sm:px-7 py-3 sm:py-3.5"
              >
                View 6-Step Supply Workflow
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Example Sectors Served */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E1E6EB]">
        <Container size="xl">
          <SectionHeading
            badge="SECTOR ALIGNMENT"
            title="Primary Industrial Sectors Served"
            subtitle="Engineered components, custom manufacturing, and heavy-duty packaging consumables configured to withstand the operating conditions and duty cycles of key industrial environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {industrySectors.map((sector) => {
              const IconComp = sector.icon;
              return (
                <div
                  key={sector.code}
                  className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#172B3A] transition-colors"
                >
                  <div>
                    {/* Header Image */}
                    <div className="relative h-52 sm:h-56 overflow-hidden border-b border-[#CBD5E1]">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/90 via-[#172B3A]/40 to-transparent" />
                      <div className="absolute bottom-3.5 left-5 right-5 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xs bg-[#E99A26] text-[#172B3A] flex items-center justify-center font-bold">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="font-mono text-xs sm:text-[13px] text-[#E99A26] font-bold tracking-wider">
                            {sector.code}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                          Contract Supply
                        </span>
                      </div>
                    </div>

                    {/* Sector Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl sm:text-[22px] lg:text-[24px] font-heading font-bold text-[#172B3A] mb-3">
                        {sector.title}
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-5">
                        {sector.description}
                      </p>

                      {/* Typical Components */}
                      <div className="mb-5">
                        <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block tracking-wider mb-2.5">
                          Representative Components & Supplies
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {sector.typicalComponents.map((comp, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2.5 py-1 bg-white border border-[#E1E6EB] text-slate-700 text-xs sm:text-[13px] font-medium rounded-xs"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Technical Requirements */}
                      <div className="space-y-2 pt-4 border-t border-[#E1E6EB]">
                        <span className="text-[11px] font-mono uppercase font-bold text-slate-500 block tracking-wider mb-1.5">
                          Core Sector Standards
                        </span>
                        {sector.requirements.map((req, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-6 sm:px-7 py-4 bg-white border-t border-[#E1E6EB] flex items-center justify-between">
                    <span className="text-xs sm:text-[13px] font-mono text-slate-500">Tailored to client specs</span>
                    <Button
                      variant="outline"
                      size="sm"
                      to={`/contact?type=supply-agreement&scope=Sector%20Enquiry:%20${encodeURIComponent(
                        sector.title
                      )}`}
                      rightIcon={<ArrowUpRight className="w-4 h-4" />}
                      className="text-xs sm:text-sm font-semibold"
                    >
                      Enquire for this Sector
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Bulk-Order Enquiries & Scale Economics */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E1E6EB]">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#172B3A]/8 text-[#172B3A] border border-[#172B3A]/15 rounded-xs font-mono text-xs sm:text-[13px] uppercase font-semibold">
                <Boxes className="w-4 h-4 text-[#E99A26]" />
                Volume Economics & Scaled Production
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-heading font-bold text-[#172B3A] tracking-tight leading-tight">
                Bulk-Order Enquiries & Production Lot Scaling
              </h2>

              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed">
                For manufacturing operations and assembly lines requiring substantial production lots, Eastern Industrial Works structures bulk supply agreements to maximize production efficiency, minimize per-unit overhead, and streamline freight logistics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                    <TrendingUp className="w-4 h-4 text-[#E99A26]" />
                    <span>Unit Cost Optimization</span>
                  </div>
                  <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                    Amortizing initial tooling, CNC setup hours, and machine programming across larger batch sizes substantially lowers the per-part cost.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                    <Layers className="w-4 h-4 text-[#E99A26]" />
                    <span>Direct Mill Allocation</span>
                  </div>
                  <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                    Bulk raw material purchases allow dedicated heat allocations directly from certified primary mills, ensuring unbroken metallurgical uniformity.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                    <Truck className="w-4 h-4 text-[#E99A26]" />
                    <span>Freight Consolidation</span>
                  </div>
                  <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                    Palletized container stuffing and full-truckload (FTL) deliveries eliminate partial-load freight surcharges and transport delays.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-2 shadow-xs">
                  <div className="flex items-center gap-2 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                    <CreditCard className="w-4 h-4 text-[#E99A26]" />
                    <span>Raw Material Price Indexing</span>
                  </div>
                  <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                    Transparent baseline raw material indexing protects both buyer and supplier against volatile alloy or paperboard market shifts.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="amber"
                  size="lg"
                  to="/contact?type=bulk-supply&category=custom-products"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="text-base font-bold"
                >
                  Submit Bulk-Order RFQ
                </Button>
              </div>
            </div>

            {/* Side Card: Volume Guidance */}
            <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-sm border border-[#E1E6EB] shadow-xs">
              <span className="text-xs font-mono font-bold text-[#E99A26] uppercase tracking-wider block mb-2">
                PROCUREMENT PLANNING
              </span>
              <h3 className="text-xl font-heading font-bold text-[#172B3A] mb-3">
                Bulk Order Consultation Scope
              </h3>
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed mb-6">
                When inquiring about bulk orders, buyers are encouraged to outline both initial batch requirements and projected annual demand to facilitate volume pricing structures:
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Batch Thresholds:</strong> Typically 50–500+ units for machinery components; full pallet/container lots for packaging consumables.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Lead Time Planning:</strong> Advance raw material procurement schedules are coordinated to ensure continuous production flow.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Phased Shipments:</strong> Orders can be produced in a single run and staged for release across agreed dates.</span>
                </div>
              </div>

              <div className="p-4 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-bold text-[#172B3A] block mb-0.5">Custom Sizing or Non-Standard Specs?</span>
                Bulk pricing is also available for custom print-to-part engineering upon blueprint review.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Repeat & Annual Supply Agreements */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E1E6EB]">
        <Container size="xl">
          <SectionHeading
            badge="CONTRACT CONTINUITY"
            title="Repeat Orders & Annual Supply Agreements"
            subtitle="Secure uninterrupted component pipelines, protected pricing structures, and reserved inventory buffers through structured annual supply frameworks."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-8 rounded-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#172B3A] mb-2.5">
                  Blanket Purchase Orders (BPO)
                </h3>
                <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed mb-4">
                  Formal 6 to 12-month blanket commitments establishing locked unit rates, scheduled release triggers, and guaranteed production capacity.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Fixed pricing with indexed material adjustments</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Quarterly or monthly scheduled delivery call-offs</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Reduced purchasing overhead and repetitive paperwork</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E1E6EB]">
                <Link
                  to="/contact?type=annual-contract&scope=Blanket%20Purchase%20Order%20Discussion"
                  className="text-xs sm:text-sm font-mono font-bold text-[#172B3A] hover:text-[#E99A26] inline-flex items-center gap-1.5 transition-colors"
                >
                  Discuss BPO Terms <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-8 rounded-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#172B3A] mb-2.5">
                  Tooling & Fixture Preservation
                </h3>
                <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed mb-4">
                  Dedicated CNC jigs, specialized broaches, forming dies, and cutting programs are preserved and archived for zero-delay repeat setups.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>No secondary tooling charges on repeat batches</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Guaranteed dimensional reproducibility</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Expedited lead times after initial first-article sign-off</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E1E6EB]">
                <Link
                  to="/contact?type=supply-agreement&scope=Tooling%20Preservation%20and%20Repeat%20Runs"
                  className="text-xs sm:text-sm font-mono font-bold text-[#172B3A] hover:text-[#E99A26] inline-flex items-center gap-1.5 transition-colors"
                >
                  Inquire on Repeat Tooling <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-8 rounded-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#172B3A] mb-2.5">
                  Safety Buffer Stock Agreements
                </h3>
                <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed mb-4">
                  For mission-critical components, we coordinate agreed warehouse buffer stock to insulate your assembly line from sudden demand spikes.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Agreed safety reserve held ready for immediate call-off</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Protective VCI packaging prevents long-term storage corrosion</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Rolling forecast reviews to align buffer quantities</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E1E6EB]">
                <Link
                  to="/contact?type=supply-agreement&scope=Buffer%20Stock%20and%20Inventory%20Reservation"
                  className="text-xs sm:text-sm font-mono font-bold text-[#172B3A] hover:text-[#E99A26] inline-flex items-center gap-1.5 transition-colors"
                >
                  Discuss Buffer Stock <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Custom Product Requirements */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E1E6EB]">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden border border-[#CBD5E1] shadow-xs">
                <img
                  src="/images/cat-custom-products.jpg"
                  alt="Engineering coordination for custom manufactured components"
                  className="w-full h-84 sm:h-96 object-cover object-center"
                />
                <div className="p-4 sm:p-5 bg-[#172B3A] text-white">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#E99A26] font-bold block mb-1">
                    Design-to-Delivery Coordination
                  </span>
                  <p className="text-xs sm:text-[13.5px] text-slate-300 leading-relaxed font-normal">
                    Bespoke manufacturing projects are evaluated directly against client CAD drawings, GD&T callouts, and service environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#172B3A]/8 text-[#172B3A] border border-[#172B3A]/15 rounded-xs font-mono text-xs sm:text-[13px] uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                Bespoke & OEM Engineering
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-heading font-bold text-[#172B3A] tracking-tight leading-tight">
                Custom Product Requirements & Print-to-Part Coordination
              </h2>

              <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed">
                When off-the-shelf industrial parts cannot meet your equipment envelope, duty cycle, or dimensional standards, Eastern Industrial Works coordinates custom contract production based on your proprietary technical drawings.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-1.5">
                  <h4 className="text-base sm:text-[17px] font-heading font-bold text-[#172B3A]">
                    1. Collaborative DFM Review
                  </h4>
                  <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                    Our technical desk reviews submitted 2D prints and 3D models to identify potential machining cost drivers, recommend tool access improvements, and confirm appropriate material alternatives without compromising engineering function.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-1.5">
                  <h4 className="text-base sm:text-[17px] font-heading font-bold text-[#172B3A]">
                    2. Pilot First-Article Validation
                  </h4>
                  <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                    For high-precision or multi-part assemblies, we coordinate first-off sample pieces complete with dimensional inspection reports (FAIR) for physical fitment validation prior to full batch production.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-1.5">
                  <h4 className="text-base sm:text-[17px] font-heading font-bold text-[#172B3A]">
                    3. Seamless Transition to Series Production
                  </h4>
                  <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                    Once first-article approval is logged, tooling and fixture offsets are locked in for repeatable, high-accuracy serial manufacturing across ongoing release orders.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  variant="amber"
                  size="lg"
                  to="/contact?type=custom-manufacturing&category=custom-products"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="text-base font-bold"
                >
                  Submit Custom CAD / Drawings
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  to="/manufacturing"
                  className="text-base font-semibold"
                >
                  Explore Capabilities Page
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Order Coordination Workflow */}
      <section id="workflow" className="py-16 lg:py-24 bg-[#0E1A23] text-white">
        <Container size="xl">
          <SectionHeading
            badge="END-TO-END EXECUTION LIFECYCLE"
            title="Supply Workflow: From Requirement to Dispatch"
            subtitle="A transparent, six-stage commercial and operational workflow ensuring clarity, milestone visibility, and verified quality at each milestone."
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {supplyWorkflowSteps.map((stepItem, idx) => {
              const IconComp = stepItem.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#172B3A] border border-[#213C50] rounded-sm p-6 sm:p-7 flex flex-col justify-between relative group hover:border-[#E99A26] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-[#E99A26]">
                        {stepItem.step}
                      </span>
                      <div className="w-10 h-10 rounded-xs bg-[#0E1A23] border border-[#213C50] flex items-center justify-center text-[#E99A26] group-hover:bg-[#E99A26] group-hover:text-[#172B3A] transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="text-xs font-mono text-slate-400 block mb-1">
                      {stepItem.subtitle}
                    </span>

                    <h4 className="text-lg sm:text-xl font-heading font-bold text-white mb-2.5 leading-snug">
                      {stepItem.title}
                    </h4>

                    <p className="text-sm sm:text-[14.5px] text-slate-300 leading-relaxed mb-6">
                      {stepItem.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#213C50]">
                    <span className="text-[11px] font-mono uppercase font-bold text-slate-400 block tracking-wider mb-1.5">
                      Stage Milestone Output
                    </span>
                    <div className="text-xs sm:text-sm text-[#E99A26] font-mono flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{stepItem.output}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-mono text-slate-400">
              Each stage is coordinated directly by an assigned commercial account manager with milestone updates provided via email and direct phone contact.
            </p>
          </div>
        </Container>
      </section>

      {/* 7. Delivery Planning & Dispatch Updates */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E1E6EB]">
        <Container size="xl">
          <SectionHeading
            badge="LOGISTICS & SHIPMENT MANAGEMENT"
            title="Delivery Planning, Packaging & Dispatch Updates"
            subtitle="Understand how freight scheduling, transport coordination, and delivery milestones are managed across domestic and export consignments."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="p-6 sm:p-8 bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm space-y-3">
              <div className="w-11 h-11 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-3">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-heading font-bold text-[#172B3A]">
                Incoterms & Freight Arrangements
              </h4>
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                We accommodate buyer-preferred delivery terms, including Ex-Works (EXW) for customer-arranged freight, Delivered at Place (DAP) for direct factory delivery, or Free on Board (FOB) for port handover.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm space-y-3">
              <div className="w-11 h-11 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-heading font-bold text-[#172B3A]">
                Milestone Dispatch Updates
              </h4>
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                Rather than generic automated tracking estimations, dispatch notices, carrier consignment numbers (LR/BL), and confirmed delivery schedules are directly communicated by your dedicated coordinator.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm space-y-3">
              <div className="w-11 h-11 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-3">
                <Package className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-heading font-bold text-[#172B3A]">
                Protective Packaging Standards
              </h4>
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                Precision components and machinery parts receive factory-applied VCI anti-corrosion barrier wrapping, protective edge banding, and ISPM 15-compliant heat-treated timber crating for safe transport.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Commercial & Payment-Term Discussions */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#E1E6EB]">
        <Container size="xl">
          <SectionHeading
            badge="COMMERCIAL FRAMEWORK"
            title="Commercial Terms, Payment Structures & Price Stability"
            subtitle="Transparent guidelines addressing common procurement considerations regarding credit terms, raw material fluctuation, and payment structures."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white p-6 sm:p-7 rounded-sm border border-[#E1E6EB] space-y-2.5">
                <div className="flex items-center gap-2 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                  <CreditCard className="w-5 h-5 text-[#E99A26]" />
                  <span>First-Time Orders vs. Established Accounts</span>
                </div>
                <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                  First-time orders typically require an advance commercial deposit to allocate raw materials and initiate dedicated tooling setup, with the final balance payable against bill of lading (BL) or pre-dispatch inspection sign-off. Established repeat clients are eligible for progressive payment schedules or agreed 30-day commercial credit terms following formal credit evaluation.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-sm border border-[#E1E6EB] space-y-2.5">
                <div className="flex items-center gap-2 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                  <TrendingUp className="w-5 h-5 text-[#E99A26]" />
                  <span>Raw Material Market Adjustments</span>
                </div>
                <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                  For annual blanket contracts, quotations establish clear raw material baseline indices. Should primary steel, alloy, or polymer resin markets fluctuate beyond agreed percentage bands, adjustments are reviewed transparently based on published mill index benchmarks.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-sm border border-[#E1E6EB] space-y-2.5">
                <div className="flex items-center gap-2 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                  <Wrench className="w-5 h-5 text-[#E99A26]" />
                  <span>Tooling & Fixture Amortization</span>
                </div>
                <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                  Specialized cutting tools, stamping dies, or custom CNC fixtures can either be invoiced as a separate initial setup charge or amortized into the piece price across a minimum guaranteed production volume.
                </p>
              </div>
            </div>

            {/* Commercial Summary Card */}
            <div className="lg:col-span-5 bg-[#172B3A] text-white p-7 sm:p-9 rounded-sm border border-[#213C50] space-y-4">
              <span className="text-xs font-mono text-[#E99A26] font-bold uppercase tracking-wider block">
                COMMERCIAL CLARITY
              </span>
              <h3 className="text-2xl font-heading font-bold text-white">
                Individual Terms Confirmation
              </h3>
              <p className="text-sm sm:text-[14.5px] text-slate-300 leading-relaxed">
                Because technical complexity, material exposure, and production cycles differ between custom machined parts and bulk packaging supplies, all commercial terms are confirmed in a formal quotation proposal before any binding purchase order is executed.
              </p>

              <div className="pt-3 border-t border-[#213C50] space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26]" />
                  <span>Written quotation valid for 15–30 days</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26]" />
                  <span>Detailed milestone breakdown</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26]" />
                  <span>Transparent tax, crating, and freight line items</span>
                </div>
              </div>

              <div className="pt-3">
                <Button
                  variant="amber"
                  size="md"
                  fullWidth
                  to="/contact?type=supply-agreement"
                  className="font-bold text-sm"
                >
                  Consult Commercial Desk
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. Final B2B Enquiry CTA */}
      <section className="py-16 lg:py-24 bg-[#E99A26] text-[#172B3A]">
        <Container size="xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#172B3A]/80 inline-block px-3 py-1 bg-white/30 rounded-xs">
                DIRECT CONTRACT SUPPLY DESK
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold tracking-tight text-[#172B3A] leading-tight">
                Ready to Discuss Your Industrial Supply Requirements?
              </h2>
              <p className="text-base sm:text-lg text-[#172B3A]/90 leading-relaxed">
                Whether you need a single bulk production run, a scheduled call-off agreement, or custom engineered component supply, our estimating and commercial teams are ready to evaluate your procurement specifications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
              <Button
                variant="primary"
                size="lg"
                to="/contact?type=supply-agreement&category=custom-products"
                className="w-full sm:w-auto bg-[#172B3A] text-white hover:bg-[#0E1A23] border-none shadow-md text-[14px] sm:text-[16px] font-bold px-6 sm:px-8 py-3 sm:py-3.5 justify-center"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Submit Contract Supply RFQ
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/contact"
                className="w-full sm:w-auto bg-transparent border-2 border-[#172B3A] text-[#172B3A] hover:bg-[#172B3A]/10 font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5 justify-center"
              >
                Contact Commercial Desk
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
