import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Compass,
  FileText,
  Layers,
  Clock,
  Truck,
  Scale,
  Info,
  Target,
  Wrench,
  Check,
  Building2,
  Eye,
} from 'lucide-react';
import { Container, SectionHeading, Button } from '../components/ui';

// Core Business Focus Pillars
const focusPillars = [
  {
    title: 'Industrial Machinery Parts',
    image: '/images/cat-machinery-parts.jpg',
    categoryKey: 'machinery-parts',
    description:
      'Mechanical power transmission components including heavy spur and helical gears, stepped drive shafts, plummer bearing blocks, and sheaves engineered for high-torque industrial machinery.',
    keyPoints: ['Forged & alloy steel grades', 'Ground bearing journals', 'Keyways & spline milling'],
  },
  {
    title: 'Precision Components',
    image: '/images/cat-precision-components.jpg',
    categoryKey: 'precision-components',
    description:
      'Close-tolerance turned and milled parts including hydraulic manifolds, precision bushings, sleeve bearings, valve spindles, and locating fasteners manufactured to tight dimensional fits.',
    keyPoints: ['Tight GD&T tolerances', 'Smooth Ra micro-inch finishes', 'Ferrous & non-ferrous alloys'],
  },
  {
    title: 'Packaging Materials',
    image: '/images/cat-packaging-materials.jpg',
    categoryKey: 'packaging-materials',
    description:
      'Industrial-grade packaging supplies including multi-wall corrugated bulk shipping boxes, high-yield machine stretch films, composite strapping, and VCI anti-corrosion barrier protection.',
    keyPoints: ['High bursting strength (BST)', 'Puncture-resistant films', 'VCI rust-inhibiting preservation'],
  },
  {
    title: 'Custom Industrial Products',
    image: '/images/cat-custom-products.jpg',
    categoryKey: 'custom-products',
    description:
      'Bespoke contract manufacturing and custom fabrications based strictly on client engineering drawings, including machine base weldments, heavy bell housings, and chute wear plates.',
    keyPoints: ['Print-to-part production', 'DFM engineering review', 'First-article pilot approval'],
  },
];

// Operating Values / Core Principles
const companyValues = [
  {
    title: 'Technical Fidelity',
    icon: Compass,
    description:
      'Strict adherence to client blueprints, dimensional tolerances, material callouts, and geometric dimensioning (GD&T) without unauthorized shortcuts.',
  },
  {
    title: 'Commercial Transparency',
    icon: Scale,
    description:
      'Itemized quotations, realistic production timelines, and upfront discussions on raw material indices, tooling amortization, and payment terms.',
  },
  {
    title: 'Quality Accountability',
    icon: ShieldCheck,
    description:
      'Documented inspection test reports (ITR), mill test certificates (MTC 3.1), and verified calibration records accompanying every consignment.',
  },
  {
    title: 'Reliable Coordination',
    icon: Clock,
    description:
      'Direct, single-point communication with assigned coordinators ensuring milestone clarity, drawing revisions management, and timely dispatch.',
  },
];

export const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#F8FAFC]">
      {/* 1. Company Introduction Hero */}
      <section className="relative bg-[#172B3A] text-white py-16 lg:py-24 overflow-hidden border-b border-[#213C50]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-industrial-facility.jpg"
            alt="Eastern Industrial Works manufacturing plant and engineering facility"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1A23] via-[#172B3A]/90 to-[#172B3A]/80" />
        </div>

        <Container size="xl" className="relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E99A26]/20 border border-[#E99A26]/40 rounded-xs text-[#E99A26] font-mono text-[13px] sm:text-[14px] uppercase tracking-wider font-bold">
              <Building2 className="w-4 h-4" />
              B2B Industrial Manufacturing &amp; Supply
            </div>

            <h1 className="typography-page text-3xl sm:text-4xl md:text-[46px] lg:text-[52px] font-heading font-extrabold text-white tracking-tight leading-[1.16]">
              Engineering Rigor. Dependable Supply. Purpose-Built Solutions.
            </h1>

            <p className="text-[18px] sm:text-[19px] text-slate-200 leading-relaxed font-normal">
              Eastern Industrial Works operates as a dedicated B2B manufacturing and industrial supply partner, delivering standard mechanical parts, close-tolerance precision components, heavy-duty packaging consumables, and custom print-to-part engineered products.
            </p>

            {/* Factual Transparency Callout */}
            <div className="p-5 bg-[#0E1A23]/85 border-l-4 border-[#E99A26] border border-white/10 rounded-xs text-[14px] sm:text-[15px] text-slate-300 leading-relaxed flex items-start gap-3.5">
              <Info className="w-5 h-5 text-[#E99A26] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-heading text-[15px] sm:text-[16px] mb-1">
                  About Our Company Profile:
                </strong>
                We focus on technical clarity, reliable procurement coordination, and documented product consistency. We do not use inflated marketing claims or unverified corporate figures; our reputation is built on straightforward engineering execution and fulfilled customer specifications.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Button
                variant="amber"
                size="lg"
                to="/products"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold text-[14px] sm:text-[16px] px-5 sm:px-7 py-3 sm:py-3.5 justify-center w-full sm:w-auto"
              >
                Browse Product Catalogue
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/contact"
                className="bg-transparent text-white border-white/30 hover:bg-white/10 font-bold text-[14px] sm:text-[16px] px-5 sm:px-7 py-3 sm:py-3.5 justify-center w-full sm:w-auto"
              >
                Request a Quote (RFQ)
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Business Focus Pillars */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E1E6EB]">
        <Container size="xl">
          <SectionHeading
            badge="CORE DISCIPLINES"
            title="Our Four Primary Business Focus Areas"
            subtitle="Explore the comprehensive scope of industrial components, precision machining, and logistics packaging we coordinate for commercial buyers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {focusPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-sm overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#172B3A] transition-all hover:shadow-md"
              >
                <div>
                  <div className="relative h-48 overflow-hidden border-b border-[#CBD5E1]">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/85 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] sm:text-[12px] font-mono uppercase tracking-wider px-2.5 py-1 bg-[#E99A26] text-[#172B3A] font-bold rounded-xs">
                        Focus 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="typography-card text-[20px] sm:text-[22px] font-heading font-bold text-[#172B3A] mb-2.5 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-5">
                      {pillar.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-[#E1E6EB]">
                      {pillar.keyPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-[#E99A26] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white border-t border-[#E1E6EB]">
                  <Link
                    to={`/products?category=${pillar.categoryKey}`}
                    className="text-[13px] sm:text-[14px] font-mono font-bold text-[#172B3A] hover:text-[#E99A26] inline-flex items-center gap-1.5 transition-colors"
                  >
                    View in Catalogue <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Intended Approach to Customer Requirements & Custom Enquiries */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-[#E1E6EB]">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden border border-[#CBD5E1] shadow-xs">
                <img
                  src="/images/cad-drawings-review.jpg"
                  alt="Engineering drawing review and technical specification intake"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="p-4 bg-[#172B3A] text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#E99A26] font-bold block mb-1">
                    Print-to-Part Collaboration
                  </span>
                  <p className="text-xs text-slate-300">
                    We treat customer drawings with technical rigor, verifying every datum, tolerance, and surface finish callout prior to quotation.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#172B3A]/8 text-[#172B3A] border border-[#172B3A]/15 rounded-xs font-mono text-[13px] sm:text-[14px] uppercase font-bold">
                <Target className="w-4 h-4 text-[#E99A26]" />
                Customer-Centric Engineering
              </div>

              <h2 className="typography-section text-2xl sm:text-3xl lg:text-[36px] font-heading font-extrabold text-[#172B3A] tracking-tight leading-tight">
                Our Approach to Customer Specifications &amp; Custom Inquiries
              </h2>

              <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed font-normal">
                Industrial procurement requires mutual clarity. When reviewing a new enquiry or bespoke print-to-part requirement, our goal is to eliminate ambiguities early, ensuring that production matches functional design intent without costly iterations.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#172B3A] font-bold text-[16px] sm:text-[17px]">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26]" />
                    <span>Rigorous Blueprint Interpretation</span>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                    We evaluate 2D engineering drawings (PDF, DWG) and 3D CAD files (STEP, IGES) against standard GD&amp;T standards, fit classes (H7/g6), and surface roughness requirements.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#172B3A] font-bold text-[16px] sm:text-[17px]">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26]" />
                    <span>Constructive DFM Feedback</span>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                    If a design feature creates unnecessary machining cycle time, excessive tool wear, or tolerance stack risks, our estimating team offers constructive suggestions without compromising functionality.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#172B3A] font-bold text-[16px] sm:text-[17px]">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26]" />
                    <span>Strict Confidentiality &amp; IP Protection</span>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                    All proprietary CAD data, part geometry, and tender bid files are handled under strict confidentiality governance and non-disclosure standards.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="md"
                  to="/manufacturing"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="font-bold text-[15px] sm:text-[16px] px-6 py-3"
                >
                  View Manufacturing Capabilities
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Manufacturing Coordination & Supply Reliability */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E1E6EB]">
        <Container size="xl">
          <SectionHeading
            badge="EXECUTION &amp; FULFILLMENT"
            title="Manufacturing Coordination &amp; Supply Reliability"
            subtitle="How we structure scheduling, tooling preservation, and freight logistics to deliver repeatable component supplies on time."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-7 rounded-sm space-y-3.5 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="typography-card text-[20px] sm:text-[22px] font-heading font-bold text-[#172B3A] leading-snug">
                Realistic Scheduling Commitments
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                We confirm production timelines based on verified raw stock lead times and machine setup cycles. We do not make unfulfillable delivery promises; our schedules are realistic and actively tracked.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-7 rounded-sm space-y-3.5 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-2">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="typography-card text-[20px] sm:text-[22px] font-heading font-bold text-[#172B3A] leading-snug">
                Repeat Tooling &amp; Jigs Archiving
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                Specialized fixtures, cutting programs, and stamping dies are indexed and preserved. Repeat orders bypass setup delays and maintain identical dimensional tolerances batch after batch.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-7 rounded-sm space-y-3.5 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 bg-[#172B3A] text-[#E99A26] rounded-xs flex items-center justify-center mb-2">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="typography-card text-[20px] sm:text-[22px] font-heading font-bold text-[#172B3A] leading-snug">
                Logistics &amp; Protective Crating
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                Every consignment is prepared for transport with factory-applied VCI corrosion inhibitors, edge protectors, and heavy-duty timber pallets designed for safe road freight or export container shipping.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Quality-Conscious Processes & Clear Communication */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-[#E1E6EB]">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#172B3A]/8 text-[#172B3A] border border-[#172B3A]/15 rounded-xs font-mono text-[13px] sm:text-[14px] uppercase font-bold">
                <ShieldCheck className="w-4 h-4 text-[#E99A26]" />
                Auditable Accountability
              </div>

              <h2 className="typography-section text-2xl sm:text-3xl lg:text-[36px] font-heading font-extrabold text-[#172B3A] tracking-tight leading-tight">
                Quality-Conscious Processes &amp; Clear Communication
              </h2>

              <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed font-normal">
                Quality in B2B supply is not an abstract slogan—it is the disciplined application of measurable standards, calibrated metrology tools, and transparent documentation across every production gate.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#172B3A] font-bold text-[16px] sm:text-[17px]">
                    <Eye className="w-4 h-4 text-[#E99A26]" />
                    <span>Multi-Stage Quality Gates</span>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                    Incoming raw stock check, first-article sign-off, in-process sampling, and final pre-dispatch audit ensure non-conformances are caught at the spindle.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#172B3A] font-bold text-[16px] sm:text-[17px]">
                    <FileText className="w-4 h-4 text-[#E99A26]" />
                    <span>Auditable Documentation</span>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                    Inspection Test Reports (ITR), raw material Mill Test Certificates (MTC 3.1), and Certificates of Conformance (CoC) accompany delivered orders.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#172B3A] font-bold text-[16px] sm:text-[17px]">
                    <Wrench className="w-4 h-4 text-[#E99A26]" />
                    <span>Calibrated Metrology</span>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                    All micrometers, bore gauges, thread comparators, and surface roughness testers undergo regular calibration against certified master standards.
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E1E6EB] rounded-xs space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2.5 text-[#172B3A] font-bold text-[16px] sm:text-[17px]">
                    <Building2 className="w-4 h-4 text-[#E99A26]" />
                    <span>Direct Account Desk</span>
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                    Single-point account coordinators provide direct email and telephone updates on schedule milestones and drawing revisions.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="md"
                  to="/quality"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="font-bold text-[15px] sm:text-[16px] px-6 py-3"
                >
                  Explore Quality Assurance Page
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-sm overflow-hidden border border-[#CBD5E1] shadow-xs">
                <img
                  src="/images/quality-inspection.jpg"
                  alt="Quality engineer performing dimensional checks"
                  className="w-full h-88 object-cover object-center"
                />
                <div className="p-5 bg-[#172B3A] text-white">
                  <span className="text-[12px] font-mono uppercase tracking-wider text-[#E99A26] font-bold block mb-1">
                    Inspection Discipline
                  </span>
                  <p className="text-[14px] sm:text-[15px] text-slate-300 leading-relaxed">
                    Quality assurance protocols verify every critical-to-quality dimension against blueprint nominals before packaging release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Simple Business Values / Operating Principles */}
      <section className="py-16 lg:py-24 bg-[#0E1A23] text-white">
        <Container size="xl">
          <SectionHeading
            badge="OPERATING PRINCIPLES"
            title="Our Core Business Values"
            subtitle="The fundamental standards of engineering discipline, commercial integrity, and customer alignment that guide Eastern Industrial Works."
            align="center"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {companyValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#172B3A] border border-[#213C50] rounded-sm p-6 sm:p-7 flex flex-col justify-between hover:border-[#E99A26] transition-all hover:shadow-lg"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xs bg-[#0E1A23] border border-[#213C50] flex items-center justify-center text-[#E99A26] mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="typography-card text-[20px] sm:text-[22px] font-heading font-bold text-white mb-2.5 leading-snug">
                      {val.title}
                    </h3>

                    <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-[#213C50] flex items-center gap-2 text-[13px] font-mono text-[#E99A26] font-semibold">
                    <CheckCircle2 className="w-4 h-4" /> Core Standard
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 7. Final Call to Action */}
      <section className="py-16 lg:py-20 bg-[#E99A26] text-[#172B3A]">
        <Container size="xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="text-[12px] sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] inline-block px-3 py-1 bg-white/40 rounded-xs">
                COMMERCIAL &amp; ENGINEERING PARTNERSHIP
              </span>
              <h2 className="typography-section text-3xl sm:text-4xl lg:text-[40px] font-heading font-extrabold tracking-tight text-[#172B3A] leading-tight">
                Partner with Eastern Industrial Works
              </h2>
              <p className="text-[17px] sm:text-[18px] text-[#172B3A]/95 leading-relaxed font-normal">
                Whether you need standard machinery components, bulk packaging consumables, or custom print-to-part production, our engineering and commercial desks are ready to review your requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
              <Button
                variant="primary"
                size="lg"
                to="/products"
                className="w-full sm:w-auto bg-[#172B3A] text-white hover:bg-[#0E1A23] border-none shadow-md font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5 justify-center"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Browse Products
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/contact"
                className="w-full sm:w-auto bg-transparent border-2 border-[#172B3A] text-[#172B3A] hover:bg-[#172B3A]/10 font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5 justify-center"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
