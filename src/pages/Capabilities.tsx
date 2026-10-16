import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  Cog,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  FileCode,
  Sliders,
  Package,
  Boxes,
  FileCheck,
  Truck,
  Info,
  RefreshCw,
  Scale,
  Calendar,
  FileSpreadsheet,
  Check,
  Compass,
  Clock,
} from 'lucide-react';
import { Container, SectionHeading, Button } from '../components/ui';

// Step-by-step production coordination workflow
const coordinationSteps = [
  {
    step: '01',
    title: 'Drawing Intake & Technical Review',
    icon: FileCode,
    description:
      'Receipt and thorough engineering review of 2D engineering drawings (PDF, DWG, DXF) and 3D CAD models (STEP, IGES), cross-checking GD&T tolerances, surface finishes, and material callouts.',
    deliverables: ['CAD/Drawing Verification', 'DFM Feasibility Feedback', 'Material Grade Confirmation'],
  },
  {
    step: '02',
    title: 'Feasibility & Commercial Proposal',
    icon: FileSpreadsheet,
    description:
      'Detailed commercial quotation outlining per-unit manufacturing costs across target batch volumes, required tooling/setup charges, raw material lead times, and scheduled delivery milestones.',
    deliverables: ['Itemized Quotation', 'Tooling/Fixture Assessment', 'Production Timeline Estimate'],
  },
  {
    step: '03',
    title: 'Tooling, Fixturing & First-Article Approval',
    icon: WrenchIcon,
    description:
      'Preparation of dedicated machine fixtures, specialized cutting tools, or custom packaging dies. Production of first-off pilot samples or first-article inspection (FAI) units for dimensional sign-off.',
    deliverables: ['Custom Fixture Setup', 'First-Article Sample (FAI)', 'Sample Dimensional Report'],
  },
  {
    step: '04',
    title: 'Controlled Batch Production',
    icon: Factory,
    description:
      'Execution of series production under strictly controlled machine setups. In-process inspection protocols monitor tool wear, critical fit dimensions, and process repeatability.',
    deliverables: ['Scheduled Machine Runs', 'In-Process Gauge Checks', 'Batch Traceability Logs'],
  },
  {
    step: '05',
    title: 'Final Quality Verification & Reports',
    icon: FileCheck,
    description:
      'Comprehensive inspection using calibrated micrometers, bore gauges, height masters, and surface roughness testers. Compilation of Mill Test Certificates (MTC) and inspection test reports.',
    deliverables: ['Inspection Test Reports (ITR)', 'Mill Test Certificates (MTC 3.1)', 'Dimensional Sign-Off'],
  },
  {
    step: '06',
    title: 'Protective Packaging & Dispatch Coordination',
    icon: Truck,
    description:
      'Application of anti-corrosion VCI coatings, protective sleeve wraps, heavy-duty export crating, or custom palletization. Logistics coordination for reliable factory delivery or port handover.',
    deliverables: ['VCI Corrosion Protection', 'Export-Grade Crating', 'Dispatch Documentation & Bill of Lading'],
  },
];

// Helper icon component since Lucide has Wrench
function WrenchIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Cog {...props} />;
}

// Materials spectrum across engineering & packaging
const materialDisciplines = [
  {
    category: 'Carbon & Medium Alloy Steels',
    grades: 'IS 2062, ASTM A36, AISI 1018, AISI 1045, EN8, EN9',
    suitability: 'Machine frameworks, structural plates, stepped transmission shafts, industrial drive pinions, and high-strength weldments.',
    attributes: ['High structural strength', 'Readily machinable', 'Cost-effective serial production', 'Case-hardenable'],
  },
  {
    category: 'High-Tensile & Tool Alloy Steels',
    grades: 'EN19, EN24, AISI 4140, AISI 4340, D2, H13',
    suitability: 'High-torque gears, spline shafts, heavy-duty roll shafts, press tooling, and severe fatigue applications.',
    attributes: ['Superior fatigue strength', 'Through-hardenable to 55+ HRC', 'Tough core shock resistance', 'Heat-treated condition'],
  },
  {
    category: 'Austenitic & Duplex Stainless Steels',
    grades: 'AISI 304/304L, AISI 316/316L, 17-4PH, Duplex 2205',
    suitability: 'Process fluid manifolds, chemical valve spindles, corrosive food & marine equipment, wash-down conveyor parts.',
    attributes: ['Pitting & crevice corrosion resistance', 'Passivated surface finish', 'Cryogenic & high-temp stability', 'Clean-in-place compliance'],
  },
  {
    category: 'Non-Ferrous & Bronze Alloys',
    grades: 'Aluminum 6061-T6, 7075-T6, Brass IS 319, Phosphor Bronze PB1/PB2',
    suitability: 'Precision sleeves, anti-galling worm gears, valve bushings, lightweight structural blocks, and electrical hardware.',
    attributes: ['High thermal dissipation', 'Low friction bearing properties', 'Lightweight structural ratio', 'Spark-resistant characteristics'],
  },
  {
    category: 'Engineering Polymers & Plastics',
    grades: 'POM (Delrin/Acetal), Nylon PA6/PA66, PTFE (Teflon), UHMWPE',
    suitability: 'Self-lubricating wear strips, guide bushes, chemical-resistant gaskets, non-marring star wheels, and conveyor chain tracks.',
    attributes: ['Zero lubrication required', 'Low moisture absorption', 'Resistant to mild acids/solvents', 'Quiet mechanical operation'],
  },
  {
    category: 'Industrial Packaging Substrates',
    grades: 'Virgin Kraft Liner, Semi-Chemical Fluting, Virgin LLDPE, Composite PET',
    suitability: 'Multi-wall bulk shipping containers, high-yield machine pallet wrap, high-tensile composite strapping, and VCI barrier films.',
    attributes: ['Controlled bursting strength (BST)', 'High puncture & tear resistance', 'Tested Edge Crush ratings (ECT)', 'Corrosion-inhibiting barrier'],
  },
];

// Production volume tiers
const volumeTiers = [
  {
    tier: 'Prototype & Sampling',
    volume: '1 – 5 Units',
    timeline: 'Standard Review: 5 – 10 days',
    focus: 'Design for Manufacturability (DFM) verification, fitment proofing, and material grade confirmation prior to capital tooling.',
    points: ['Drawing feasibility feedback', 'Single-setup machining review', 'Full dimensional check report'],
  },
  {
    tier: 'Pilot Batch Runs',
    volume: '5 – 50 Units',
    timeline: 'Standard Review: 10 – 20 days',
    focus: 'Small batch production for new machinery assemblies, pilot customer trials, or initial field installations.',
    points: ['Fixture proofing & cycle optimization', 'Batch-wise tolerance verification', 'First-article inspection sign-off'],
  },
  {
    tier: 'Series Production Runs',
    volume: '50 – 500 Units',
    timeline: 'Standard Review: 20 – 35 days',
    focus: 'Repeated serial manufacturing with optimized tooling setups, batch material mill certs, and scheduled dispatch lots.',
    points: ['Dedicated tooling & jig reservation', 'Unit cost volume discounts', 'Stage-wise statistical quality checks'],
  },
  {
    tier: 'Contract Supply & Blanket Orders',
    volume: '500+ Units / Ongoing',
    timeline: 'Scheduled Call-Offs',
    focus: 'Long-term procurement contracts with rolling forecasts, locked-in material pricing, and reserved warehouse safety buffers.',
    points: ['Blanket Purchase Orders (BPO)', 'Buffer inventory agreements', 'Guaranteed delivery SLA coordination'],
  },
];

export const Capabilities: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#F8FAFC]">
      {/* 1. Page Hero */}
      <section className="relative bg-[#172B3A] text-white py-16 lg:py-24 overflow-hidden border-b border-[#213C50]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-industrial-facility.jpg"
            alt="Industrial manufacturing facility and machinery production plant"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1A23] via-[#172B3A]/90 to-[#172B3A]/80" />
        </div>

        <Container size="xl" className="relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E99A26]/20 border border-[#E99A26]/40 rounded-xs text-[#E99A26] font-mono text-xs uppercase tracking-wider font-semibold">
              <Factory className="w-3.5 h-3.5" />
              <span>Contract Manufacturing &amp; Production Coordination</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-heading font-extrabold text-white tracking-tight leading-[1.16]">
              Manufacturing Capabilities &amp; Technical Feasibility Review
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] text-slate-200 leading-relaxed font-normal max-w-3xl">
              Eastern Industrial Works collaborates with B2B equipment builders, plant maintenance engineers, and industrial procurement managers to translate technical drawings and volume specifications into reliable, finished parts and industrial supplies.
            </p>

            <div className="p-4 sm:p-5 bg-[#0E1A23]/85 border-l-4 border-[#E99A26] border border-white/10 rounded-xs text-sm sm:text-[15px] text-slate-200 leading-relaxed flex items-start gap-3.5">
              <Info className="w-5 h-5 text-[#E99A26] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-heading mb-1 text-sm sm:text-base">Engineering Consultation &amp; Sourcing Scope:</strong>
                All listed disciplines represent technical areas for feasibility review, design-for-manufacturability evaluation, and contract production coordination. Specific machinery specifications, envelope limits, and test plans are quoted directly against client drawings and tender documents.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Button
                variant="amber"
                size="lg"
                to="/contact?type=custom-manufacturing&category=custom-products"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="justify-center w-full sm:w-auto font-bold text-[14px] sm:text-[16px] px-5 sm:px-7 py-3 sm:py-3.5"
              >
                Submit Custom Manufacturing RFQ
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="#workflow"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent text-white border-white/30 hover:bg-white/10 justify-center w-full sm:w-auto font-bold text-[14px] sm:text-[16px] px-5 sm:px-7 py-3 sm:py-3.5"
              >
                Review Production Workflow
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Custom Manufacturing Enquiries & Catalogue vs. Custom Comparison */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E1E6EB]">
        <Container size="xl">
          <SectionHeading
            badge="REQUIREMENT PATHWAYS"
            title="Custom Manufacturing vs. Standard Product Supply"
            subtitle="Understand how we handle off-the-shelf standard industrial requirements versus custom print-to-part engineering projects."
          />

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Standard Catalogue Supply */}
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-400" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-slate-600 uppercase tracking-wider bg-slate-200 px-2.5 py-1 rounded-xs">
                    Pathway A
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">Established Specifications</span>
                </div>
                <h3 className="text-xl sm:text-[22px] lg:text-[24px] font-heading font-bold text-[#172B3A] mb-3 leading-snug">
                  Standard Catalogue Product Supply
                </h3>
                <p className="text-[15px] sm:text-[16px] text-slate-600 mb-6 leading-relaxed font-normal">
                  Best suited for routine industrial replenishment, standard machine replacement items, and stock packaging materials where pre-tooled dies and established dimensional standards apply.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5 text-sm sm:text-[14.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span><strong>Tooling:</strong> Uses existing production tooling, standard dies, and established gear hobs.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm sm:text-[14.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span><strong>Lead Time:</strong> Rapid turnaround; quotations typically provided within 24 business hours.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm sm:text-[14.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span><strong>Documentation:</strong> Standard Certificate of Conformance (CoC) and manufacturer pack lists.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm sm:text-[14.5px] text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span><strong>Ordering:</strong> Quote by standard catalog item codes, roll dimensions, or standard gear ratios.</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#E1E6EB] flex items-center justify-between">
                <span className="text-xs sm:text-sm font-mono text-slate-500 font-medium">Stock &amp; pre-tooled items</span>
                <Button variant="outline" size="md" to="/products">
                  Browse Product Catalogue
                </Button>
              </div>
            </div>

            {/* Custom Manufacturing Enquiries */}
            <div className="bg-[#FFFDF9] border-2 border-[#E99A26] rounded-sm p-6 sm:p-8 flex flex-col justify-between relative shadow-xs">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E99A26]" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#172B3A] uppercase tracking-wider bg-[#E99A26]/20 text-[#172B3A] px-2.5 py-1 rounded-xs">
                    Pathway B &bull; Custom Eng
                  </span>
                  <span className="text-xs font-mono text-[#E99A26] font-bold">Client Drawing Driven</span>
                </div>
                <h3 className="text-xl sm:text-[22px] lg:text-[24px] font-heading font-bold text-[#172B3A] mb-3 leading-snug">
                  Custom Manufacturing Enquiries
                </h3>
                <p className="text-[15px] sm:text-[16px] text-slate-600 mb-6 leading-relaxed font-normal">
                  Engineered specifically for non-standard equipment components, bespoke fabricated assemblies, proprietary packaging sizes, and obsolete replacement parts requiring reverse engineering.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5 text-sm sm:text-[14.5px] text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0 mt-1" />
                    <span><strong>Tooling:</strong> Dedicated CNC setups, specialized cutters, custom jigs, or custom die development.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm sm:text-[14.5px] text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0 mt-1" />
                    <span><strong>Engineering Review:</strong> Detailed DFM review, tolerance stack analysis, and material grade validation.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm sm:text-[14.5px] text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0 mt-1" />
                    <span><strong>Quality Documentation:</strong> First-Article Inspection Report (FAIR), MTC 3.1 certs, and calibrated dimensional logs.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm sm:text-[14.5px] text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0 mt-1" />
                    <span><strong>Submission:</strong> Requires 2D toleranced drawings (PDF) or 3D models (STEP) with batch volume estimates.</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#E99A26]/20 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-mono text-[#172B3A] font-semibold">Print-to-part evaluation</span>
                <Button
                  variant="amber"
                  size="md"
                  to="/contact?type=custom-manufacturing&category=custom-products"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Start Custom Enquiry
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Comparison Table */}
          <div className="overflow-x-auto border border-[#E1E6EB] rounded-sm bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#172B3A] text-white font-mono uppercase text-xs tracking-wider">
                  <th className="py-3.5 px-4 font-semibold">Review Parameter</th>
                  <th className="py-3.5 px-4 font-semibold">Standard Catalogue Supply</th>
                  <th className="py-3.5 px-4 font-semibold text-[#E99A26]">Custom Manufacturing Enquiries</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E1E6EB] text-slate-700 font-sans">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#172B3A] font-mono">Input Required</td>
                  <td className="py-3.5 px-4">Catalogue item code, quantity, shipping destination</td>
                  <td className="py-3.5 px-4 font-medium text-[#172B3A]">2D/3D CAD drawing, GD&T tolerances, alloy grade, annual forecast</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#172B3A] font-mono">Dimensional Control</td>
                  <td className="py-3.5 px-4">Standard commercial tolerances (ISO 2768-m)</td>
                  <td className="py-3.5 px-4 font-medium text-[#172B3A]">Precision fits (e.g. H7, g6, ±0.01 mm), verified per print</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#172B3A] font-mono">Material Grades</td>
                  <td className="py-3.5 px-4">Standard commercial mild steel, standard Kraft liner, virgin LLDPE</td>
                  <td className="py-3.5 px-4 font-medium text-[#172B3A]">Client-specified alloy steels (EN24, 4140), SS316, Delrin, heavy 7-ply</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#172B3A] font-mono">Sample Sign-Off</td>
                  <td className="py-3.5 px-4">Not applicable; standard specs apply</td>
                  <td className="py-3.5 px-4 font-medium text-[#172B3A]">First-Article Inspection (FAI) pilot piece approval before serial production</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#172B3A] font-mono">Pricing Structure</td>
                  <td className="py-3.5 px-4">Standard per-piece tier list</td>
                  <td className="py-3.5 px-4 font-medium text-[#172B3A]">Custom amortized tooling, raw material market index, batch volume discounts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 3. Machinery Parts & Precision Component Requirements */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
        <Container size="xl">
          <SectionHeading
            badge="COMPONENT SPECIFICATION CRITERIA"
            title="Machinery Parts &amp; Precision Component Requirements"
            subtitle="Detailed guidelines on the technical data required when discussing mechanical drive parts, machined housings, and precision turned components."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Image & Engineering Context (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="relative rounded-sm overflow-hidden border border-[#CBD5E1] shadow-xs group">
                <img
                  src="/images/cat-machinery-parts.jpg"
                  alt="Industrial machinery parts, transmission gears and forged shafts"
                  className="w-full h-72 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#E99A26] text-[#172B3A] font-bold rounded-xs">
                    Heavy Transmission
                  </span>
                  <h4 className="font-heading font-bold text-lg sm:text-xl mt-1.5 text-white">
                    Heavy Machinery Drivetrain Components
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    Forged gears, splined transmission shafts, bearing pedestals, and coupling hubs.
                  </p>
                </div>
              </div>

              <div className="relative rounded-sm overflow-hidden border border-[#CBD5E1] shadow-xs group">
                <img
                  src="/images/cat-precision-components.jpg"
                  alt="Precision CNC milled and turned metal components"
                  className="w-full h-56 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 bg-slate-200 text-[#172B3A] font-bold rounded-xs">
                    CNC Turning &amp; Milling
                  </span>
                  <h4 className="font-heading font-bold text-lg sm:text-xl mt-1.5 text-white">
                    Close-Tolerance Precision Components
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    Flow manifolds, close-tolerance bushings, valve spindles, and locating fasteners.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Checklist & Discussion Framework (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-sm border border-[#E1E6EB] shadow-xs">
              <h3 className="text-xl sm:text-[22px] font-heading font-bold text-[#172B3A] mb-2.5">
                Technical Data Required for Component Feasibility Review
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 mb-6 leading-relaxed font-normal">
                To evaluate cycle times, tool clearance, and pricing accuracy, please verify that your drawings or RFQ submission contains the following critical engineering callouts:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <Compass className="w-4 h-4 text-[#E99A26]" />
                    <span>GD&amp;T Tolerances</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Explicit callouts for runout, concentricity, cylindrical perpendicularity, and keyway center alignment relative to functional datums.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <Sliders className="w-4 h-4 text-[#E99A26]" />
                    <span>Surface Roughness (Ra)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Specified micro-inch or micrometer finish (e.g. Ra 0.4 µm for ground seal journals vs. Ra 3.2 µm for non-critical clearance faces).
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <ShieldCheck className="w-4 h-4 text-[#E99A26]" />
                    <span>Heat Treatment &amp; Hardness</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Desired Rockwell C (HRC) or Brinell (HBW) values, case depth for induction/carburizing, or through-hardened stress relief requirements.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <Scale className="w-4 h-4 text-[#E99A26]" />
                    <span>Mating Part Fit Classes</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    ISO fit tolerances (e.g. H7 bore with g6 shaft for free running, or p6 for interference drive fit) to prevent binding during final assembly.
                  </p>
                </div>
              </div>

              <div className="bg-[#172B3A] text-white p-5 sm:p-6 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#E99A26] uppercase font-bold tracking-wider">
                    Engineering Consultation Available
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal">
                    Need guidance on DFM adjustments or alternative material substitutions?
                  </p>
                </div>
                <Button
                  variant="amber"
                  size="md"
                  to="/contact?type=custom-manufacturing&category=precision-components"
                  className="shrink-0 font-bold"
                >
                  Consult Review Desk
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Packaging Product Manufacturing & Supply */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#E1E6EB]">
        <Container size="xl">
          <SectionHeading
            badge="INDUSTRIAL PROTECTION &amp; BULK CONTAINMENT"
            title="Packaging Product Manufacturing &amp; Supply Capabilities"
            subtitle="Custom corrugated bulk shippers, machine stretch wrapping films, high-tensile strapping, and anti-corrosion barrier protection for factory and export logistics."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Corrugated Shippers */}
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-sm border border-[#E1E6EB] flex flex-col justify-between shadow-xs hover:border-[#172B3A] transition-colors">
              <div>
                <div className="w-12 h-12 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-4">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-[22px] font-heading font-bold text-[#172B3A] mb-2.5 leading-snug">
                  Heavy-Duty Corrugated Bulk Shippers
                </h3>
                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-5 font-normal">
                  Engineered multi-wall packaging designed to support dense, heavy industrial machinery parts without sidewall bulging or stacking collapse during container transit.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Double-wall (5-ply) &amp; Triple-wall (7-ply) construction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Tested Bursting Strength (BST) up to 28+ kg/cm²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>High Edge Crush Test (ECT) for multi-tier warehouse stacking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Custom internal die-cut dividers &amp; wooden pallet bases</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E1E6EB]">
                <span className="text-xs font-mono text-slate-500 block mb-2 font-medium">Parameters: L × W × H, Ply Rating, Max Payload</span>
                <Link
                  to="/contact?category=packaging-materials&product=Custom%20Heavy-Duty%20Corrugated%20Shippers"
                  className="text-xs sm:text-sm font-mono font-bold text-[#172B3A] hover:text-[#E99A26] inline-flex items-center gap-1.5"
                >
                  Request Corrugated Sizing <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Machine Films & Strapping */}
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-sm border border-[#E1E6EB] flex flex-col justify-between shadow-xs hover:border-[#172B3A] transition-colors">
              <div>
                <div className="w-12 h-12 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-4">
                  <Boxes className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-[22px] font-heading font-bold text-[#172B3A] mb-2.5 leading-snug">
                  High-Yield Films &amp; Industrial Strapping
                </h3>
                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-5 font-normal">
                  High-performance load containment consumables engineered for high-speed automated turntable wrappers, heavy machinery skids, and rigorous freight transport.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Cast &amp; blown machine films with up to 300% pre-stretch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>High puncture resistance over sharp casting corners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>High-tensile PET and composite cord strapping coils</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Matched galvanized steel seals and tensioning tools</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E1E6EB]">
                <span className="text-xs font-mono text-slate-500 block mb-2 font-medium">Parameters: Gauge / Micron, Width, Elongation, Tensile Rating</span>
                <Link
                  to="/contact?category=packaging-materials&product=Industrial%20Films%20%26%20Strapping%20Supply"
                  className="text-xs sm:text-sm font-mono font-bold text-[#172B3A] hover:text-[#E99A26] inline-flex items-center gap-1.5"
                >
                  Request Film Specs <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* VCI Barrier Protection */}
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-sm border border-[#E1E6EB] flex flex-col justify-between shadow-xs hover:border-[#172B3A] transition-colors">
              <div>
                <div className="w-12 h-12 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-[22px] font-heading font-bold text-[#172B3A] mb-2.5 leading-snug">
                  VCI Anti-Corrosion &amp; Export Preservation
                </h3>
                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-5 font-normal">
                  Volatile Corrosion Inhibitor (VCI) films, gusseted barrier bags, and moisture-scavenging desiccant packages protecting precision machined surfaces against humidity and oxidation.
                </p>
                <div className="space-y-2 mb-6 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Multi-metal VCI formulation (Ferrous, Copper, Aluminum)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Up to 24–36 months corrosion barrier without messy oils</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Custom gusseted pallet shrouds &amp; zip-lock enclosure bags</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                    <span>Hermetic heat-sealable foil barrier laminates</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E1E6EB]">
                <span className="text-xs font-mono text-slate-500 block mb-2 font-medium">Parameters: Bag Dimensions, Active Shelf Life, Seal Method</span>
                <Link
                  to="/contact?category=packaging-materials&product=VCI%20Anti-Corrosion%20Packaging%20Barrier"
                  className="text-xs sm:text-sm font-mono font-bold text-[#172B3A] hover:text-[#E99A26] inline-flex items-center gap-1.5"
                >
                  Request VCI Consultation <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Packaging Supply Discussion Notice */}
          <div className="p-5 sm:p-6 bg-[#F1F5F9] border border-[#CBD5E1] rounded-xs flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-[#E99A26] shrink-0" />
              <span>
                <strong>Integrated Part Packaging:</strong> When ordering manufactured machinery parts or precision components, Eastern Industrial Works can coordinate factory-applied VCI preservation and protective crating ready for immediate warehouse storage or containerized export.
              </span>
            </div>
            <Button
              variant="outline"
              size="md"
              to="/contact?category=packaging-materials"
              className="shrink-0 bg-white"
            >
              Discuss Packaging Coordination
            </Button>
          </div>
        </Container>
      </section>

      {/* 5. Bulk Production & Repeat-Order Discussions */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
        <Container size="xl">
          <SectionHeading
            badge="SCALABILITY &amp; COMMERCIAL CONTRACTS"
            title="Bulk Production &amp; Repeat-Order Arrangements"
            subtitle="From single prototype validation to continuous multi-lot supply agreements, explore how we scale manufacturing coordination and lock in procurement economics."
          />

          {/* Volume Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {volumeTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6EB] rounded-sm p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#172B3A] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#172B3A] text-white rounded-xs">
                      TIER 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-[#E99A26] font-semibold">{tier.volume}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-[#172B3A] mb-1.5">{tier.tier}</h4>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-500 mb-4 pb-3 border-b border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-[#E99A26]" />
                    <span>{tier.timeline}</span>
                  </div>
                  <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed mb-5 font-normal">{tier.focus}</p>

                  <ul className="space-y-2 mb-6">
                    {tier.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E99A26] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#E1E6EB]">
                  <Link
                    to={`/contact?type=custom-manufacturing&category=custom-products&scope=Target%20Volume%20Tier:%20${encodeURIComponent(
                      tier.tier
                    )}`}
                    className="text-xs sm:text-sm font-mono font-bold text-[#172B3A] hover:text-[#E99A26] inline-flex items-center gap-1.5"
                  >
                    Discuss Tier {idx + 1} Run <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Repeat Order Framework Features */}
          <div className="bg-[#172B3A] text-white rounded-sm p-8 sm:p-10 border border-[#213C50] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-2.5">
                <div className="w-10 h-10 bg-[#E99A26]/20 text-[#E99A26] rounded-xs flex items-center justify-center mb-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-white">
                  Blanket Purchase Orders (BPO)
                </h4>
                <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                  Lock in raw material costs and volume manufacturing rates over a 6 to 12-month period with scheduled monthly releases and predictable delivery cadences.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="w-10 h-10 bg-[#E99A26]/20 text-[#E99A26] rounded-xs flex items-center justify-center mb-3">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-white">
                  Tooling &amp; Fixture Preservation
                </h4>
                <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                  Specialized CNC jigs, tooling fixtures, and dies are indexed, maintained, and safely stored for immediate rapid setup on repeat manufacturing re-orders.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="w-10 h-10 bg-[#E99A26]/20 text-[#E99A26] rounded-xs flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-white">
                  Reserved Safety Stock Buffers
                </h4>
                <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                  For critical wear components and high-turnover packaging items, we coordinate agreed safety buffer quantities for rapid dispatch upon call-off instruction.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Material & Specification Review */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E1E6EB]">
        <Container size="xl">
          <SectionHeading
            badge="MATERIAL PROFICIENCY &amp; METALLURGY"
            title="Material &amp; Specification Review Spectrum"
            subtitle="Rigorous evaluation of raw material chemistries, mechanical yield properties, and international grade equivalents across ferrous, non-ferrous, and packaging substrates."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {materialDisciplines.map((mat, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-7 rounded-sm flex flex-col justify-between shadow-xs hover:border-[#172B3A] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs uppercase font-bold text-slate-500 tracking-wider">
                      Material Class 0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#E99A26]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-heading font-bold text-[#172B3A] mb-2 leading-snug">
                    {mat.category}
                  </h4>
                  <div className="bg-white px-3 py-1.5 rounded-xs border border-[#E1E6EB] text-xs sm:text-[13px] font-mono text-[#172B3A] font-semibold mb-3.5">
                    {mat.grades}
                  </div>
                  <p className="text-sm sm:text-[14.5px] text-slate-600 mb-4 leading-relaxed font-normal">
                    {mat.suitability}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    <span className="text-xs font-mono uppercase font-bold text-slate-500 block tracking-wider mb-1">
                      Key Engineering Attributes
                    </span>
                    {mat.attributes.map((attr, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#E99A26] shrink-0" />
                        <span>{attr}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E1E6EB] text-xs font-mono text-slate-500 font-medium">
                  Mill Test Cert (MTC 3.1) reviewed per lot
                </div>
              </div>
            ))}
          </div>

          {/* Material Quality Verification Standards Box */}
          <div className="bg-[#FFFDF9] border border-[#E99A26]/50 rounded-sm p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-[#E99A26] font-mono text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Quality &amp; Metallurgical Verification Protocols</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-heading font-bold text-[#172B3A]">
                  Material Traceability &amp; Chemical Verification
                </h4>
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                  Every production lot can be accompanied by raw material Mill Test Certificates (MTC 3.1) detailing chemical spectrometry, tensile yield strength, and elongation percentages. Third-party testing (e.g. Ultrasonic NDT, Magnetic Particle, Positive Material Identification PMI) can be coordinated for critical pressure-containing or structural assemblies.
                </p>
              </div>
              <Button
                variant="outline"
                size="md"
                to="/quality"
                className="shrink-0 font-bold"
              >
                Review Quality Protocols
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Step-by-Step Production Coordination Workflow */}
      <section id="workflow" className="py-16 sm:py-20 lg:py-24 bg-[#0E1A23] text-white">
        <Container size="xl">
          <SectionHeading
            badge="END-TO-END EXECUTION LIFECYCLE"
            title="Step-by-Step Production Coordination Workflow"
            subtitle="A transparent, six-stage engineering coordination framework ensuring design accuracy, scheduled milestones, and quality documentation from drawing intake to final dispatch."
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {coordinationSteps.map((stepItem, idx) => {
              const IconComp = stepItem.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#172B3A] border border-[#213C50] rounded-sm p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#E99A26] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-mono font-bold text-[#E99A26]">
                        {stepItem.step}
                      </span>
                      <div className="w-10 h-10 rounded-xs bg-[#0E1A23] border border-[#213C50] flex items-center justify-center text-[#E99A26] group-hover:bg-[#E99A26] group-hover:text-[#172B3A] transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="text-xl sm:text-[22px] font-heading font-bold text-white mb-2.5 leading-snug">
                      {stepItem.title}
                    </h4>

                    <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed mb-6 font-normal">
                      {stepItem.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#213C50]">
                    <span className="text-xs font-mono uppercase font-bold text-slate-400 block tracking-wider mb-2">
                      Stage Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {stepItem.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E99A26] shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Workflow Coordination Guarantee */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs sm:text-sm font-mono text-slate-400">
              Each stage is supervised by a dedicated engineering project coordinator with clear milestone updates provided via email or project tracking portals.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. Request a Manufacturing Quote CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#E99A26] text-[#172B3A]">
        <Container size="xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3.5 max-w-2xl text-center lg:text-left">
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#172B3A]/80 inline-block px-3 py-1 bg-white/30 rounded-xs">
                DIRECT ESTIMATE DESK
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold tracking-tight text-[#172B3A] leading-tight">
                Ready to Discuss Your Manufacturing Specifications?
              </h2>
              <p className="text-base sm:text-lg text-[#172B3A]/90 leading-relaxed font-normal">
                Send your component drawings, CAD models, or packaging supply schedules directly to our technical estimating team for feasibility analysis and a transparent quotation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
              <Button
                variant="primary"
                size="lg"
                to="/contact?type=custom-manufacturing&category=custom-products"
                className="w-full sm:w-auto bg-[#172B3A] text-white hover:bg-[#0E1A23] border-none shadow-md font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5 justify-center"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Submit Manufacturing RFQ
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/contact"
                className="w-full sm:w-auto bg-transparent border-2 border-[#172B3A] text-[#172B3A] hover:bg-[#172B3A]/10 font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5 justify-center"
              >
                Direct Contact Desk
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
