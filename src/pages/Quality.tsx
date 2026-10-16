import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Check,
  FileCheck,
  Sliders,
  Microscope,
  ArrowRight,
  ArrowUpRight,
  Info,
  Layers,
  Compass,
  FileSpreadsheet,
  Eye,
  Scale,
  Award,
} from 'lucide-react';
import { Container, SectionHeading, Button } from '../components/ui';

// Five-Gate Quality Pipeline Data
const qualityGates = [
  {
    gate: 'GATE 01',
    title: 'Incoming Material & Heat Logging',
    phase: 'Receiving Inspection',
    icon: Layers,
    focus: 'Raw material verification against procurement specifications before any machining or processing occurs.',
    checks: [
      'Mill Test Certificate (MTC 3.1) chemical and physical properties review',
      'Heat number and batch traceability logging',
      'Visual check for surface inclusions, scale, laminations, and warpage',
      'Physical grade segregation and color-coding in storage',
    ],
    exitCriteria: 'Material release tag issued; heat number linked to work order.',
  },
  {
    gate: 'GATE 02',
    title: 'First-Article Setup Verification',
    phase: 'Pre-Production Approval',
    icon: Compass,
    focus: 'Validation of machine tooling, CNC offsets, and fixture stability using pilot test pieces.',
    checks: [
      'Comprehensive dimensional audit of first-off pilot component',
      'Comparison against 2D blueprint nominals and GD&T limits',
      'Tool path and cutter clearance verification',
      'First-Article Inspection Report (FAIR) sign-off before serial run',
    ],
    exitCriteria: 'Signed first-article inspection sheet approving serial run.',
  },
  {
    gate: 'GATE 03',
    title: 'In-Process Metrology Sampling',
    phase: 'Serial Production Monitoring',
    icon: Sliders,
    focus: 'Periodic sampling throughout turning, milling, and fabrication to intercept tool wear and thermal drift.',
    checks: [
      'Scheduled bore gauge and micrometer checks at predefined intervals',
      'Monitoring critical datums, runouts, and thread tolerances',
      'Cutting insert wear assessment and offset adjustments',
      'Immediate red-tagging and quarantine of any non-conforming parts',
    ],
    exitCriteria: 'Process stability maintained within agreed statistical control limits.',
  },
  {
    gate: 'GATE 04',
    title: 'Final Dimensional & Surface Audit',
    phase: 'Post-Finishing Release',
    icon: Microscope,
    focus: 'Comprehensive 100% audit of critical-to-quality (CTQ) features and surface treatment integrity.',
    checks: [
      '100% check of high-precision bearing journals, seals, and mating fits',
      'Surface roughness (Ra) measurement using calibrated profilometers',
      'Plating thickness, anodizing uniformity, or paint DFT verification',
      'Deburring, chamfer break, and internal gallery cleanliness inspection',
    ],
    exitCriteria: 'All blueprint tolerances confirmed and recorded in inspection log.',
  },
  {
    gate: 'GATE 05',
    title: 'Dossier Sign-Off & Preservation Release',
    phase: 'Pre-Dispatch Gate',
    icon: FileCheck,
    focus: 'Compilation of quality records, preservation packing, and final dispatch authorization.',
    checks: [
      'Inspection Test Report (ITR) and Certificate of Conformance (CoC) compiled',
      'Mill Test Certificates attached to shipment dossier',
      'Application of VCI anti-corrosion barrier or protective packaging',
      'Customer-specified labeling, crate stencil, and pallet strapping check',
    ],
    exitCriteria: 'Dispatch release sticker applied and QA dossier sealed.',
  },
];

// Metrology Instruments Data
const metrologyInstruments = [
  {
    category: 'Precision Micrometers & Verniers',
    range: 'External, Internal, Depth (0–300 mm)',
    resolution: 'Down to 0.001 mm (1 µm)',
    application: 'Precision measurement of turned shaft diameters, bearing journals, groove depths, and wall thicknesses.',
  },
  {
    category: 'Dial Bore Gauges & Comparators',
    range: 'Bore diameters (10–150 mm)',
    resolution: '0.002 mm accuracy',
    application: 'Evaluation of internal cylindrical bore roundness, taper, and runout across machined housings.',
  },
  {
    category: 'Thread Plug & Ring Gauges',
    range: 'Metric, UNC, UNF, BSP, NPT Standards',
    resolution: 'Go / No-Go Class 6H / 6g',
    application: 'Rapid verification of internal and external thread pitch diameters, lead errors, and flank angles.',
  },
  {
    category: 'Granite Surface Plate & Height Masters',
    range: 'Grade 0 Granite Table (1000 × 750 mm)',
    resolution: 'Digital Height Gauge 0.001 mm',
    application: 'Establishing flat inspection reference planes for parallelism, squareness, and center-height measurements.',
  },
  {
    category: 'Surface Roughness Profilometers',
    range: 'Ra, Rz, Rq Parameters',
    resolution: '0.01 µm Ra resolution',
    application: 'Verifying ground, turned, and polished surface micro-inch finishes against blueprint specifications.',
  },
  {
    category: 'Coating Thickness & Hardness Testers',
    range: 'Magnetic/Eddy Current (0–1500 µm)',
    resolution: 'Hardness: HRC, HBW conversion',
    application: 'Non-destructive verification of electroplated zinc, paint DFT, and surface hardness condition.',
  },
];

// Quality Documentation Deliverables
const documentationTypes = [
  {
    title: 'Inspection Test Report (ITR)',
    code: 'DOC-ITR',
    description: 'Tabulated report recording drawing nominal dimensions, allowable tolerance limits, and actual measured values across sampled or 100% inspected parts.',
    included: 'Standard for custom manufactured components',
  },
  {
    title: 'Mill Test Certificate (MTC 3.1)',
    code: 'DOC-MTC',
    description: 'Certified mill report verifying raw material chemical composition (spectrometry analysis) and mechanical properties (tensile yield and elongation).',
    included: 'Provided per raw material heat lot',
  },
  {
    title: 'Certificate of Conformance (CoC)',
    code: 'DOC-COC',
    description: 'Formal company declaration confirming that all delivered products strictly conform to the purchase order terms, drawing revisions, and agreed standards.',
    included: 'Standard with every industrial delivery',
  },
  {
    title: 'Specialized Test Records (On Request)',
    code: 'DOC-SPEC',
    description: 'Coordinated customer-specific reports including surface roughness profiles, case-depth surveys, dye penetrant (PT) logs, or positive material identification (PMI).',
    included: 'Available upon technical inquiry',
  },
];

export const Quality: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#F8FAFC]">
      {/* 1. Page Hero */}
      <section className="relative bg-[#172B3A] text-white py-16 lg:py-24 overflow-hidden border-b border-[#213C50]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/quality-inspection.jpg"
            alt="Quality engineer performing precision metrology inspection in industrial facility"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1A23] via-[#172B3A]/90 to-[#172B3A]/80" />
        </div>

        <Container size="xl" className="relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E99A26]/20 border border-[#E99A26]/40 rounded-xs text-[#E99A26] font-mono text-xs uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Metrology, Consistency &amp; Industrial Compliance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-heading font-extrabold text-white tracking-tight leading-[1.16]">
              Quality Assurance &amp; Industrial Inspection Systems
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] text-slate-200 leading-relaxed font-normal max-w-3xl">
              In industrial manufacturing and B2B supply, reliability is defined by dimensional consistency, rigorous multi-stage inspection, full material traceability, and transparent documentation.
            </p>

            {/* General Quality Practices Framing & Disclaimer */}
            <div className="p-4 sm:p-5 bg-[#0E1A23]/85 border-l-4 border-[#E99A26] border border-white/10 rounded-xs text-sm sm:text-[15px] text-slate-200 leading-relaxed flex items-start gap-3.5">
              <Info className="w-5 h-5 text-[#E99A26] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-heading mb-1 text-sm sm:text-base">
                  Standard Quality Architecture &amp; Client Specifications:
                </strong>
                The inspection workflows, measurement disciplines, and documentation practices detailed on this page illustrate general industrial quality-control methodologies. Specific test procedures, inspection levels (AQL), third-party witness audits, and certifications are tailored and documented in accordance with client contract terms and agreed Quality Assurance Plans (QAP).
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Button
                variant="amber"
                size="lg"
                to="/contact?type=quality-inquiry&category=custom-products"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="justify-center w-full sm:w-auto font-bold text-[14px] sm:text-[16px] px-5 sm:px-7 py-3 sm:py-3.5"
              >
                Specify Quality Requirements
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="#pipeline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pipeline')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent text-white border-white/30 hover:bg-white/10 justify-center w-full sm:w-auto font-bold text-[14px] sm:text-[16px] px-5 sm:px-7 py-3 sm:py-3.5"
              >
                View 5-Gate Quality Pipeline
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Incoming Material Inspection */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E1E6EB]">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#172B3A]/8 text-[#172B3A] border border-[#172B3A]/15 rounded-xs font-mono text-xs uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                Illustrative Control Stage &bull; Phase 01
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-heading font-bold text-[#172B3A] tracking-tight leading-tight">
                Incoming Material &amp; Raw Stock Verification
              </h2>

              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal">
                Consistent industrial manufacturing begins with raw material integrity. Before any plate cutting, billet turning, or packaging conversion begins, incoming materials undergo verification to ensure compliance with procurement specifications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26]" />
                    <span>MTC Chemical Review</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Mill Test Certificates (MTC 3.1) are cross-referenced to verify heat numbers, carbon content, alloy percentages, and tensile yield properties against order specs.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <Eye className="w-4 h-4 text-[#E99A26]" />
                    <span>Visual &amp; Dimensional Audit</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Raw bar stock and forged blanks are examined for surface laminations, excessive scale, seam cracks, and geometric runout prior to chucking.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <Layers className="w-4 h-4 text-[#E99A26]" />
                    <span>Grade Segregation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Strict physical segregation and color-coding prevent accidental mixing between similar-looking alloys (e.g. Mild Steel vs. EN8 vs. Stainless 304).
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <Scale className="w-4 h-4 text-[#E99A26]" />
                    <span>Packaging Substrate Checks</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Kraft linerboard rolls and virgin polymer resins are checked for grammage (GSM), moisture index, and burst factor before corrugation or film extrusion.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden border border-[#CBD5E1] shadow-xs">
                <img
                  src="/images/cad-drawings-review.jpg"
                  alt="Reviewing engineering specifications and material standards"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-4 sm:p-5 bg-[#172B3A] text-white">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#E99A26] font-bold block mb-1">
                    Traceability Standard
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Raw material heats are catalogued upon delivery to ensure unbroken traceability to client work orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. In-Process Inspection */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E1E6EB]">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-sm overflow-hidden border border-[#CBD5E1] shadow-xs">
                <img
                  src="/images/prd-machined-flanges.jpg"
                  alt="Technician monitoring digital metrology measurement data during in-process machining"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-4 sm:p-5 bg-[#172B3A] text-white">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#E99A26] font-bold block mb-1">
                    Live Quality Tracking
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Real-time in-process checks allow immediate tool offset compensation before drift impacts batch tolerances.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#172B3A]/8 text-[#172B3A] border border-[#172B3A]/15 rounded-xs font-mono text-xs uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                Illustrative Control Stage &bull; Phase 02
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-heading font-bold text-[#172B3A] tracking-tight leading-tight">
                In-Process Inspection &amp; Dimensional Control
              </h2>

              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal">
                In-process quality monitoring prevents small machining drifts or tool wear from compounding across a production run. By establishing clear inspection intervals, non-conformances are caught at the machine spindle rather than at the packing table.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3.5 p-4 sm:p-5 bg-white border border-[#E1E6EB] rounded-xs shadow-xs">
                  <div className="w-8 h-8 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="text-base sm:text-[17px] font-heading font-bold text-[#172B3A]">
                      First-Article (First-Off) Approval
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-normal">
                      The initial machined piece from any new setup is inspected 100% against all print tolerances. Serial manufacturing does not proceed until first-article sign-off is logged.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 sm:p-5 bg-white border border-[#E1E6EB] rounded-xs shadow-xs">
                  <div className="w-8 h-8 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="text-base sm:text-[17px] font-heading font-bold text-[#172B3A]">
                      Interval Sampling &amp; Tool Wear Tracking
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-normal">
                      Critical diameters, keyway centerlines, and bore fits are checked at scheduled part intervals to monitor carbide insert wear and thermal expansion in real time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 sm:p-5 bg-white border border-[#E1E6EB] rounded-xs shadow-xs">
                  <div className="w-8 h-8 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="text-base sm:text-[17px] font-heading font-bold text-[#172B3A]">
                      Immediate Defect Quarantine
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-normal">
                      Any component exceeding drawing tolerance is immediately physically separated and red-tagged in designated quarantine areas to prevent accidental batch contamination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Final Product Inspection */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E1E6EB]">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#172B3A]/8 text-[#172B3A] border border-[#172B3A]/15 rounded-xs font-mono text-xs uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26]" />
                Illustrative Control Stage &bull; Phase 03
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-heading font-bold text-[#172B3A] tracking-tight leading-tight">
                Final Product Inspection &amp; Surface Release
              </h2>

              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal">
                Prior to dispatch release, completed components undergo a multi-point final inspection to ensure blueprint compliance, cosmetic and deburring standards, and adequate packaging preservation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26]" />
                    <span>100% Critical Feature Check</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Bearing journals, seal faces, and mating pilots are checked for dimensional accuracy, concentricity, and roundness.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <Sliders className="w-4 h-4 text-[#E99A26]" />
                    <span>Surface Finish &amp; Coating Audit</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Surface roughness (Ra), plating thickness, anodize uniformity, or dry film thickness (DFT) verified against specifications.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <ShieldCheck className="w-4 h-4 text-[#E99A26]" />
                    <span>Deburring &amp; Cleanliness</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Tactile and optical checks confirm all edge breaks, chamfers, and internal thread galleries are free of burrs and chips.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-[#E1E6EB] rounded-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#172B3A] font-bold text-sm sm:text-base">
                    <FileCheck className="w-4 h-4 text-[#E99A26]" />
                    <span>Preservation Packaging Sign-Off</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Verification of VCI anti-rust barrier wrapping, moisture desiccant placement, and secure timber export crating.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden border border-[#CBD5E1] shadow-xs">
                <img
                  src="/images/cat-precision-components.jpg"
                  alt="Final inspected precision turned and milled components ready for shipment"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-4 sm:p-5 bg-[#172B3A] text-white">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#E99A26] font-bold block mb-1">
                    Finished Release Standard
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Each finished production batch is signed off with an itemized Inspection Test Report (ITR).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Measurement and Dimensional Verification */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <Container size="xl">
          <SectionHeading
            badge="METROLOGICAL DISCIPLINE & INSTRUMENTATION"
            title="Measurement & Dimensional Verification"
            subtitle="Explore the standard metrology categories and calibrated instruments used to verify tight radial, axial, and angular tolerances."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {metrologyInstruments.map((inst, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-sm border border-[#E1E6EB] shadow-xs flex flex-col justify-between hover:border-[#172B3A] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#172B3A] text-white rounded-xs">
                      INST 0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#E99A26] font-semibold">{inst.resolution}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#172B3A] mb-1.5">
                    {inst.category}
                  </h3>

                  <div className="text-xs sm:text-[13px] font-mono text-slate-500 mb-3 pb-2 border-b border-slate-100">
                    Measuring Range: {inst.range}
                  </div>

                  <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed mb-4">
                    {inst.application}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Periodic Calibration Standard</span>
                  <Check className="w-4 h-4 text-[#E99A26]" />
                </div>
              </div>
            ))}
          </div>

          {/* Calibration Discipline Callout */}
          <div className="bg-[#172B3A] text-white p-7 sm:p-9 rounded-sm border border-[#213C50]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2 text-[#E99A26] font-mono text-xs sm:text-[13px] font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  Instrument Calibration Integrity
                </div>
                <h4 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-snug">
                  Calibration Traceability & Thermal Stability
                </h4>
                <p className="text-sm sm:text-[15.5px] text-slate-300 leading-relaxed">
                  Precision measurement is only as dependable as instrument calibration. Handheld micrometers, bore gauges, and thread comparators are maintained on defined calibration cycles against certified master gauge blocks. Critical dimensional checks are conducted after workpieces have normalized to ambient temperature to eliminate thermal expansion skew.
                </p>
              </div>

              <Button
                variant="amber"
                size="lg"
                to="/contact?type=quality-inquiry"
                className="shrink-0"
              >
                Consult Inspection Desk
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Quality Documentation & Product Traceability */}
      <section className="py-16 lg:py-24 bg-white border-y border-[#E1E6EB]">
        <Container size="xl">
          <SectionHeading
            badge="AUDITABLE COMPLIANCE & PROVENANCE"
            title="Quality Documentation & Product Traceability"
            subtitle="Transparent records accompanying industrial shipments, ensuring auditable traceability from raw material melt heat to final delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {documentationTypes.map((doc, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-7 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-xs sm:text-[13px] font-bold px-2.5 py-1 bg-[#172B3A] text-[#E99A26] rounded-xs">
                      {doc.code}
                    </span>
                    <span className="text-xs sm:text-[13px] font-mono text-slate-500">{doc.included}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#172B3A] mb-2.5">
                    {doc.title}
                  </h3>

                  <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed mb-4">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#E1E6EB] flex items-center justify-between text-xs sm:text-[13px]">
                  <span className="font-mono text-slate-400">Auditable QA Dossier</span>
                  <span className="font-mono text-[#172B3A] font-semibold flex items-center gap-1.5">
                    Supplied per order <CheckCircle2 className="w-4 h-4 text-[#E99A26]" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Audit Compliance & Official Credentials Box */}
          <div className="p-6 sm:p-8 bg-[#F3F5F7] border border-[#CBD5E1] rounded-sm">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#E99A26] shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-base sm:text-lg text-[#172B3A]">
                  Client-Specific Certifications, TPIA Audits & Weld Procedures
                </h4>
                <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                  Official enterprise ISO certifications (e.g., ISO 9001 quality management systems, specific weld procedure specifications WPS/PQR, or external auditor credentials) are indexed and furnished in accordance with client contract stipulations and verified supplier accreditations. Third-party inspection agency (TPIA) witness points (e.g., Lloyd's, Bureau Veritas, SGS, TUV) can be accommodated within client purchase orders.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Visual Quality Workflow */}
      <section id="pipeline" className="py-16 lg:py-24 bg-[#0E1A23] text-white">
        <Container size="xl">
          <SectionHeading
            badge="MULTI-TIER VERIFICATION ARCHITECTURE"
            title="Systematic 5-Gate Quality Pipeline"
            subtitle="From raw stock receipt to final dispatch packaging, every product moves through progressive verification gates to guarantee conformance."
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {qualityGates.map((gateItem, idx) => {
              const IconComp = gateItem.icon;
              return (
                <div
                  key={idx}
                  className={`bg-[#172B3A] border border-[#213C50] rounded-sm p-5 sm:p-6 flex flex-col justify-between relative group hover:border-[#E99A26] transition-colors ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-xs font-mono font-bold text-[#E99A26] px-2.5 py-1 bg-[#0E1A23] rounded-xs border border-[#213C50]">
                        {gateItem.gate}
                      </span>
                      <div className="w-8 h-8 rounded-xs bg-[#0E1A23] border border-[#213C50] flex items-center justify-center text-[#E99A26] group-hover:bg-[#E99A26] group-hover:text-[#172B3A] transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <span className="text-xs font-mono text-slate-400 block mb-1">
                      {gateItem.phase}
                    </span>

                    <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2 leading-snug">
                      {gateItem.title}
                    </h4>

                    <p className="text-xs sm:text-[13.5px] text-slate-300 leading-relaxed mb-4">
                      {gateItem.focus}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      <span className="text-[11px] font-mono uppercase font-bold text-slate-400 block tracking-wider">
                        Key Verification Actions
                      </span>
                      {gateItem.checks.map((chk, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-[#E99A26] shrink-0 mt-0.5" />
                          <span>{chk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#213C50] text-[11px] sm:text-xs font-mono text-[#E99A26]">
                    <strong>Gate Exit:</strong> {gateItem.exitCriteria}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-mono text-slate-400">
              Each gate exit requires verified sign-off before components can transition to the subsequent manufacturing or dispatch stage.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. How Buyers Can Communicate Inspection Requirements */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E1E6EB]">
        <Container size="xl">
          <SectionHeading
            badge="PROCUREMENT & ENGINEERING ALIGNMENT"
            title="How Buyers Can Communicate Inspection Requirements"
            subtitle="To ensure clear alignment between design intent and quality verification, please review these key parameters when submitting your RFQ or drawing packages."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm space-y-2.5">
              <div className="flex items-center gap-2.5 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                <span className="w-6 h-6 rounded-xs bg-[#172B3A] text-white flex items-center justify-center font-mono text-xs">
                  01
                </span>
                <span>Flag Critical-to-Quality (CTQ) Dimensions</span>
              </div>
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                Highlight high-risk features on your 2D drawings—such as bearing journals, seal faces, and critical center distances—that require 100% inspection rather than statistical batch sampling.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm space-y-2.5">
              <div className="flex items-center gap-2.5 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                <span className="w-6 h-6 rounded-xs bg-[#172B3A] text-white flex items-center justify-center font-mono text-xs">
                  02
                </span>
                <span>Define Acceptable Quality Levels (AQL)</span>
              </div>
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                Specify preferred sampling standards (e.g. ISO 2859-1 / ANSI ASQ Z1.4 General Inspection Level II, Major 1.0 / Minor 2.5 AQL) for batch production runs.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm space-y-2.5">
              <div className="flex items-center gap-2.5 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                <span className="w-6 h-6 rounded-xs bg-[#172B3A] text-white flex items-center justify-center font-mono text-xs">
                  03
                </span>
                <span>Specify Mandatory Documentation</span>
              </div>
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                Clarify whether your receiving department mandates raw material Mill Test Certificates (MTC 3.1), individual dimensional reports (ITR), or Certificate of Conformance (CoC) with delivery.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm space-y-2.5">
              <div className="flex items-center gap-2.5 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                <span className="w-6 h-6 rounded-xs bg-[#172B3A] text-white flex items-center justify-center font-mono text-xs">
                  04
                </span>
                <span>Identify Third-Party (TPIA) Hold Points</span>
              </div>
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                State if third-party inspection agencies (e.g. Lloyd's, Bureau Veritas, SGS) or customer quality representatives need witness inspection hold points prior to dispatch.
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm space-y-2.5">
              <div className="flex items-center gap-2.5 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                <span className="w-6 h-6 rounded-xs bg-[#172B3A] text-white flex items-center justify-center font-mono text-xs">
                  05
                </span>
                <span>Surface Treatment & Cleanliness Specs</span>
              </div>
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                Provide exact finish callouts (e.g. zinc plating thickness, hard chrome, black oxide, anodizing grade) and cleanliness standards (e.g. degreasing, ultrasonic cleaning).
              </p>
            </div>

            <div className="p-6 sm:p-7 bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm space-y-2.5">
              <div className="flex items-center gap-2.5 text-[#172B3A] font-heading font-bold text-base sm:text-[17px]">
                <span className="w-6 h-6 rounded-xs bg-[#172B3A] text-white flex items-center justify-center font-mono text-xs">
                  06
                </span>
                <span>Preservation & Packaging Protocol</span>
              </div>
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                Specify required shelf-life protection (e.g. 12-month domestic storage vs. 24-month ocean container transit) to ensure proper VCI film and wooden crating selection.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 bg-[#F1F5F9] border border-[#CBD5E1] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-sm sm:text-[15px] text-slate-700">
            <div className="flex items-center gap-3.5">
              <FileSpreadsheet className="w-6 h-6 text-[#E99A26] shrink-0" />
              <span className="leading-relaxed">
                <strong>Have a Quality Assurance Plan (QAP) Template?</strong> You can attach your company's standard inspection matrix or procurement specifications directly through our RFQ submission portal.
              </span>
            </div>
            <Link
              to="/contact?type=quality-inquiry"
              className="text-xs sm:text-sm font-mono font-bold text-[#172B3A] hover:text-[#E99A26] inline-flex items-center gap-1.5 shrink-0 transition-colors"
            >
              Attach QAP with RFQ <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 9. Request a Quote CTA */}
      <section className="py-16 lg:py-24 bg-[#E99A26] text-[#172B3A]">
        <Container size="xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#172B3A]/80 inline-block px-3 py-1 bg-white/30 rounded-xs">
                DIRECT QUALITY & COMMERCIAL DESK
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-extrabold tracking-tight text-[#172B3A] leading-tight">
                Request a Quote with Quality Specifications
              </h2>
              <p className="text-base sm:text-lg text-[#172B3A]/90 leading-relaxed">
                Submit your manufacturing drawings, inspection criteria, and target delivery requirements directly to our estimating team for a comprehensive, auditable quotation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
              <Button
                variant="primary"
                size="lg"
                to="/contact?type=quality-inquiry&category=custom-products"
                className="w-full sm:w-auto bg-[#172B3A] text-white hover:bg-[#0E1A23] border-none shadow-md text-[14px] sm:text-[16px] font-bold px-6 sm:px-8 py-3 sm:py-3.5 justify-center"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Submit Quality RFQ
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
