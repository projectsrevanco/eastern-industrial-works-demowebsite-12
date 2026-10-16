import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  ShieldCheck,
  FileCheck,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Clock,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { CONTACT_INFO } from '../../utils/contactInfo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E1A23] text-slate-300 border-t border-[#213C50]">
      {/* Upper Industrial Action Strip */}
      <div className="border-b border-[#213C50] bg-[#172B3A]/80 py-6 sm:py-7">
        <Container size="xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <span className="text-[12px] sm:text-[13px] font-mono uppercase tracking-wider text-[#E99A26] font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E99A26] animate-pulse" />
                B2B COMMERCIAL INQUIRIES &amp; CONTRACT MANUFACTURING
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1.5">
                Have component drawings, specifications, or scheduled volume requirements?
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#E99A26] hover:bg-[#D68817] text-[#172B3A] font-heading font-bold text-[14px] sm:text-[15px] uppercase tracking-wider px-5 py-2.5 rounded-xs transition-colors shadow-sm w-full sm:w-auto text-center"
              >
                Request a Quote <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/manufacturing"
                className="inline-flex items-center justify-center gap-2 bg-[#213C50] hover:bg-[#2B4E68] text-white font-heading font-semibold text-[14px] sm:text-[15px] uppercase tracking-wider px-5 py-2.5 rounded-xs border border-[#2B3D4D] transition-colors w-full sm:w-auto text-center"
              >
                View Capabilities
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="py-12 lg:py-14">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
            {/* Column 1: Brand Info & Description (Col 4 on LG) */}
            <div className="lg:col-span-4 space-y-4">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xs bg-[#E99A26] text-[#172B3A] flex items-center justify-center font-extrabold font-heading text-xl shadow-sm group-hover:bg-[#FFF8EE] transition-colors shrink-0">
                  <Factory className="w-5 h-5 text-[#172B3A]" />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-xl text-white uppercase tracking-tight group-hover:text-slate-100 transition-colors">
                    Eastern Industrial <span className="text-[#E99A26]">Works</span>
                  </div>
                  <div className="text-[11px] sm:text-[12px] font-mono tracking-wider text-slate-400 uppercase font-medium">
                    Industrial Manufacturing &amp; Supply
                  </div>
                </div>
              </Link>

              <p className="text-[15px] sm:text-[16px] text-slate-300 leading-relaxed max-w-sm">
                Dedicated B2B industrial manufacturing and contract supply partner delivering precision engineering,
                machinery parts, precision components, packaging consumables, and custom print-to-part production.
              </p>

              <div className="pt-2 font-mono text-[13px] sm:text-[14px] text-slate-300 space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#E99A26] shrink-0" />
                  <span>Multi-Stage Quality Verification Standards</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FileCheck className="w-4 h-4 text-[#E99A26] shrink-0" />
                  <span>Comprehensive Material Mill Traceability</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Navigation Links (Col 2 on LG) */}
            <div className="lg:col-span-2">
              <h4 className="text-[13px] sm:text-[14px] font-mono uppercase tracking-wider text-slate-200 font-bold mb-4 pb-1.5 border-b border-[#213C50]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-[14px] sm:text-[15px]">
                <li>
                  <Link to="/" className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5">
                    Products Catalog
                  </Link>
                </li>
                <li>
                  <Link to="/manufacturing" className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5">
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link to="/quality" className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5">
                    Quality Assurance
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5">
                    Industries &amp; Supply
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5">
                    Contact &amp; RFQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Product Category Links (Col 2 on LG) */}
            <div className="lg:col-span-2">
              <h4 className="text-[13px] sm:text-[14px] font-mono uppercase tracking-wider text-slate-200 font-bold mb-4 pb-1.5 border-b border-[#213C50]">
                Product Categories
              </h4>
              <ul className="space-y-2 text-[14px] sm:text-[15px]">
                <li>
                  <Link
                    to="/products?category=machinery-parts"
                    className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5"
                  >
                    Industrial Machinery Parts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=precision-components"
                    className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5"
                  >
                    Precision Components
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=packaging-materials"
                    className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5"
                  >
                    Packaging Materials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=custom-products"
                    className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5"
                  >
                    Custom Products
                  </Link>
                </li>
                <li className="pt-2 border-t border-[#1C2C39]">
                  <Link
                    to="/products"
                    className="text-[#E99A26] hover:text-white transition-colors font-mono text-[13px] flex items-center gap-1 font-semibold"
                  >
                    <span>Complete Catalog</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Manufacturing, Quality & Supply Links (Col 2 on LG) */}
            <div className="lg:col-span-2">
              <h4 className="text-[13px] sm:text-[14px] font-mono uppercase tracking-wider text-slate-200 font-bold mb-4 pb-1.5 border-b border-[#213C50]">
                Manufacturing &amp; QA
              </h4>
              <ul className="space-y-2 text-[14px] sm:text-[15px]">
                <li>
                  <Link
                    to="/manufacturing"
                    className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5"
                  >
                    Custom Manufacturing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manufacturing#workflow"
                    className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5"
                  >
                    Production Workflow
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quality"
                    className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5"
                  >
                    Quality Assurance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quality#pipeline"
                    className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5"
                  >
                    5-Gate Quality Pipeline
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries"
                    className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5"
                  >
                    Industries &amp; Supply
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries#workflow"
                    className="text-slate-300 hover:text-[#E99A26] transition-colors block py-0.5"
                  >
                    Bulk &amp; Repeat Supply
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Contact Details & Placeholders (Col 2 on LG) */}
            <div className="lg:col-span-2">
              <h4 className="text-[13px] sm:text-[14px] font-mono uppercase tracking-wider text-slate-200 font-bold mb-4 pb-1.5 border-b border-[#213C50]">
                Contact &amp; RFQ Desk
              </h4>
              <div className="space-y-3 text-[13px] sm:text-[14px] font-mono">
                <div className="flex items-start gap-2.5 text-slate-400">
                  <MapPin className="w-4 h-4 text-[#E99A26] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase text-slate-400 block font-bold">
                      {CONTACT_INFO.worksLocation.label}
                    </span>
                    <span className="text-slate-300 leading-snug block">
                      {CONTACT_INFO.worksLocation.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-400">
                  <Mail className="w-4 h-4 text-[#E99A26] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase text-slate-400 block font-bold">
                      {CONTACT_INFO.technicalRfqs.label}
                    </span>
                    <span className="text-slate-300 leading-snug block">
                      <a
                        href={`mailto:${CONTACT_INFO.technicalRfqs.email}`}
                        className="text-slate-300 hover:text-[#E99A26] transition-colors break-all"
                      >
                        {CONTACT_INFO.technicalRfqs.email}
                      </a>
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-400">
                  <Phone className="w-4 h-4 text-[#E99A26] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase text-slate-400 block font-bold">
                      {CONTACT_INFO.commercialPhone.label}
                    </span>
                    <span className="text-slate-300 leading-snug block">
                      <a
                        href={`tel:${CONTACT_INFO.commercialPhone.tel}`}
                        className="text-slate-300 hover:text-[#E99A26] transition-colors"
                      >
                        {CONTACT_INFO.commercialPhone.phone}
                      </a>
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-400">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase text-slate-400 block font-bold">
                      {CONTACT_INFO.hours.label}
                    </span>
                    <span className="text-slate-300">{CONTACT_INFO.hours.display}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-[#E99A26] hover:text-white font-semibold text-[13px] sm:text-[14px] transition-colors"
                  >
                    <span>Open Direct RFQ Form</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-[#1C2C39] py-5 text-[13px] sm:text-[14px] font-mono text-slate-400">
        <Container size="xl" className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            &copy; {currentYear} Eastern Industrial Works. All rights reserved. B2B Industrial Manufacturing &amp; Supply.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[13px]">
            <Link to="/about" className="hover:text-slate-200 transition-colors">
              About Us
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/quality" className="hover:text-slate-200 transition-colors">
              Quality Assurance
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/manufacturing" className="hover:text-slate-200 transition-colors">
              Manufacturing Capabilities
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              Request a Quote
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};
