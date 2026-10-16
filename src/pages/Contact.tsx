import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Clock,
  MapPin,
  UploadCloud,
  CheckCircle2,
  ShieldCheck,
  Send,
  Layers,
  AlertCircle,
  X,
  FileText,
  Phone,
  RefreshCw,
  Info,
} from 'lucide-react';
import { Container, SectionHeading, Button } from '../components/ui';
import { CONTACT_INFO } from '../utils/contactInfo';

// Valid dropdown options
const CATEGORY_OPTIONS = [
  'Industrial Machinery Parts',
  'Precision Components',
  'Packaging Materials',
  'Custom Industrial Products',
  'Heavy Industrial Fabrication',
  'General Industrial Supply',
] as const;

const ENQUIRY_TYPE_OPTIONS = [
  'Standard Product',
  'Bulk Order',
  'Custom Manufacturing',
  'Repeat Supply',
] as const;

type ProductCategory = typeof CATEGORY_OPTIONS[number];
type EnquiryType = typeof ENQUIRY_TYPE_OPTIONS[number];

// Parameter mapping helpers
const categoryMap: Record<string, ProductCategory> = {
  'machinery-parts': 'Industrial Machinery Parts',
  'precision-components': 'Precision Components',
  'packaging-materials': 'Packaging Materials',
  'custom-products': 'Custom Industrial Products',
  'custom-manufacturing': 'Custom Industrial Products',
  'custom': 'Custom Industrial Products',
  'fabrication': 'Heavy Industrial Fabrication',
  'general': 'General Industrial Supply',
};

const typeMap: Record<string, EnquiryType> = {
  'standard': 'Standard Product',
  'standard-product': 'Standard Product',
  'bulk': 'Bulk Order',
  'bulk-order': 'Bulk Order',
  'bulk-supply': 'Bulk Order',
  'custom': 'Custom Manufacturing',
  'custom-manufacturing': 'Custom Manufacturing',
  'quality-inquiry': 'Custom Manufacturing',
  'repeat': 'Repeat Supply',
  'repeat-supply': 'Repeat Supply',
  'annual-contract': 'Repeat Supply',
  'supply-agreement': 'Repeat Supply',
};

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  category: ProductCategory;
  enquiryType: EnquiryType;
  quantity: string;
  specifications: string;
  deliveryDate: string;
  additionalMessage: string;
  attachment: File | null;
}

type FormErrors = Partial<Record<keyof FormState | 'attachment', string>>;

const ALLOWED_EXTENSIONS = ['.pdf', '.dwg', '.dxf', '.step', '.stp', '.iges', '.igs', '.zip', '.png', '.jpg', '.jpeg'];
const MAX_FILE_SIZE_MB = 25;

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const prefillProduct = (searchParams.get('product') || '').trim();
  const prefillCategoryParam = (searchParams.get('category') || '').trim();
  const prefillTypeParam = (searchParams.get('type') || '').trim();
  const prefillScopeParam = (searchParams.get('scope') || '').trim();

  // Form State
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    category: 'Industrial Machinery Parts',
    enquiryType: 'Standard Product',
    quantity: '',
    specifications: '',
    deliveryDate: '',
    additionalMessage: '',
    attachment: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  // Initialize and sanitize URL pre-fills
  useEffect(() => {
    let initialCategory: ProductCategory = 'Industrial Machinery Parts';
    if (prefillCategoryParam && categoryMap[prefillCategoryParam.toLowerCase()]) {
      initialCategory = categoryMap[prefillCategoryParam.toLowerCase()];
    }

    let initialType: EnquiryType = 'Standard Product';
    if (prefillTypeParam && typeMap[prefillTypeParam.toLowerCase()]) {
      initialType = typeMap[prefillTypeParam.toLowerCase()];
    } else if (prefillCategoryParam === 'custom-products' || prefillCategoryParam === 'custom-manufacturing') {
      initialType = 'Custom Manufacturing';
    }

    let initialSpecs = '';
    if (prefillProduct) {
      initialSpecs = `Quotation inquiry regarding catalog item: ${prefillProduct}.\n\nPlease provide quotation based on standard batch volumes and advise on estimated production lead times.`;
    } else if (prefillTypeParam === 'custom-manufacturing' || initialType === 'Custom Manufacturing') {
      initialSpecs = `Custom Manufacturing Enquiry:\n- Part / Component Description: \n- Material & Grade Specification: \n- Critical Dimensions / Tolerances: \n- Technical Drawings: [Ready to attach / referenced above]`;
    } else if (prefillTypeParam === 'quality-inquiry') {
      initialSpecs = `Quality & Inspection Requirements Inquiry:\n- Component Description: \n- Critical to Quality (CTQ) Dimensions: \n- Required Inspection Level (e.g., 100% / AQL sampling): \n- Required Documentation (e.g., MTC 3.1, Dimensional ITR, CoC): `;
    } else if (prefillTypeParam === 'supply-agreement' || prefillTypeParam === 'bulk-supply' || prefillTypeParam === 'annual-contract') {
      initialSpecs = `B2B Supply & Agreement Enquiry:\n- Supply Scope: [Machinery Parts / Precision Components / Packaging / Custom]\n- Order Structure: [Bulk Lot / Scheduled Call-Offs / Annual Blanket Purchase Order]\n- Forecast Volume & Delivery Schedule: `;
    } else if (prefillScopeParam) {
      initialSpecs = prefillScopeParam;
    }

    setFormData((prev) => ({
      ...prev,
      category: initialCategory,
      enquiryType: initialType,
      specifications: initialSpecs || prev.specifications,
    }));
  }, [prefillProduct, prefillCategoryParam, prefillTypeParam, prefillScopeParam]);

  // Validation function
  const validateField = (field: keyof FormState, value: any): string | undefined => {
    switch (field) {
      case 'fullName':
        if (!value || typeof value !== 'string' || value.trim().length < 2) {
          return 'Please enter your full name (minimum 2 characters).';
        }
        return undefined;
      case 'companyName':
        if (!value || typeof value !== 'string' || value.trim().length < 2) {
          return 'Please enter your business or company name.';
        }
        return undefined;
      case 'email':
        if (!value || typeof value !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid business work email address.';
        }
        return undefined;
      case 'phone':
        if (!value || typeof value !== 'string' || value.trim().length < 7) {
          return 'Please enter a valid contact phone number (at least 7 digits).';
        }
        return undefined;
      case 'quantity':
        if (!value || typeof value !== 'string' || value.trim().length < 1) {
          return 'Please specify estimated quantity (e.g., 50 pcs, 500 units/mo, or 5 pallets).';
        }
        return undefined;
      case 'specifications':
        if (!value || typeof value !== 'string' || value.trim().length < 10) {
          return 'Please provide a brief specification, part description, or drawing notes (min 10 characters).';
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    const fieldsToValidate: (keyof FormState)[] = [
      'fullName',
      'companyName',
      'email',
      'phone',
      'quantity',
      'specifications',
    ];

    fieldsToValidate.forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleChange = (field: keyof FormState, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  // Safe file upload handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const extension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      setErrors((prev) => ({
        ...prev,
        attachment: `Unsupported file format. Please upload standard CAD or document files: ${ALLOWED_EXTENSIONS.join(', ')}`,
      }));
      return;
    }

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        attachment: `File size exceeds the ${MAX_FILE_SIZE_MB}MB safety limit.`,
      }));
      return;
    }

    setErrors((prev) => ({ ...prev, attachment: undefined }));
    setFormData((prev) => ({ ...prev, attachment: file }));
  };

  const removeAttachment = () => {
    setFormData((prev) => ({ ...prev, attachment: null }));
    if (fileInputRef.current) fileInputRef.current.value = '';
    setErrors((prev) => ({ ...prev, attachment: undefined }));
  };

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      companyName: true,
      email: true,
      phone: true,
      quantity: true,
      specifications: true,
    });

    if (!validateAll()) {
      return;
    }

    // Realistic asynchronous submission simulation without fake claims
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 600);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      category: 'Industrial Machinery Parts',
      enquiryType: 'Standard Product',
      quantity: '',
      specifications: '',
      deliveryDate: '',
      additionalMessage: '',
      attachment: null,
    });
    setTouched({});
    setErrors({});
  };

  return (
    <div className="flex flex-col py-12 lg:py-20 bg-[#F8FAFC]">
      <Container size="xl">
        {/* Header */}
        <SectionHeading
          badge="COMMERCIAL & ESTIMATING DESK"
          title="Contact & Request for Quotation (RFQ)"
          subtitle="Submit your component specifications, batch forecasts, or CAD engineering drawings directly to our estimating team for technical review."
        />

        {/* Two-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          {/* ========================================================= */}
          {/* LEFT SIDE (5 Columns): Intro, Placeholders & Process      */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Buyer Introduction Card */}
            <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#E1E6EB] shadow-xs space-y-3.5">
              <span className="text-xs font-mono text-[#E99A26] uppercase font-bold tracking-wider block">
                B2B Procurement Desk
              </span>
              <h2 className="text-xl sm:text-[22px] font-heading font-bold text-[#172B3A]">
                How to Submit Your Requirements
              </h2>
              <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed">
                Whether you require standard catalogue components, large batch production, or bespoke custom fabrications, our estimating team reviews every submission for manufacturing feasibility, material availability, and dimensional tolerances.
              </p>

              <div className="pt-2 text-xs sm:text-sm text-slate-700 space-y-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0 mt-0.5" />
                  <span>Attach 2D PDF prints with GD&T callouts or 3D STEP/IGES models.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0 mt-0.5" />
                  <span>Specify material grades, surface treatments, and target quantities.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0 mt-0.5" />
                  <span>Quotations are provided with itemized price tiers and lead times.</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Information Card */}
            <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#E1E6EB] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#E1E6EB]">
                <h3 className="text-lg font-heading font-bold text-[#172B3A]">
                  Company Contact Information
                </h3>
                <span className="text-xs font-mono text-slate-500 uppercase font-semibold">
                  Direct Inquiries
                </span>
              </div>

              {/* Physical Facility */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-sm sm:text-[15px] font-heading font-bold text-[#172B3A] block">
                    {CONTACT_INFO.worksLocation.label}
                  </span>
                  <p className="text-xs sm:text-[13px] font-mono text-slate-600 leading-relaxed">
                    {CONTACT_INFO.worksLocation.address}
                  </p>
                </div>
              </div>

              {/* Direct Communications */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-sm sm:text-[15px] font-heading font-bold text-[#172B3A] block">
                    {CONTACT_INFO.technicalRfqs.label}
                  </span>
                  <p className="text-xs sm:text-[13px] font-mono leading-relaxed">
                    <a
                      href={`mailto:${CONTACT_INFO.technicalRfqs.email}`}
                      className="text-[#172B3A] hover:text-[#E99A26] transition-colors underline decoration-slate-300 hover:decoration-[#E99A26] break-all"
                    >
                      {CONTACT_INFO.technicalRfqs.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-sm sm:text-[15px] font-heading font-bold text-[#172B3A] block">
                    {CONTACT_INFO.commercialPhone.label}
                  </span>
                  <p className="text-xs sm:text-[13px] font-mono leading-relaxed">
                    <a
                      href={`tel:${CONTACT_INFO.commercialPhone.tel}`}
                      className="text-[#172B3A] hover:text-[#E99A26] transition-colors underline decoration-slate-300 hover:decoration-[#E99A26]"
                    >
                      {CONTACT_INFO.commercialPhone.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* Operating Schedules */}
              <div className="pt-3.5 border-t border-slate-100 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xs bg-[#172B3A] text-[#E99A26] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-sm text-slate-600 w-full">
                  <span className="font-heading font-bold text-[#172B3A] block">
                    Standard Operating Windows
                  </span>
                  <div className="flex justify-between gap-4 font-mono text-xs sm:text-[13px]">
                    <span>Plant Operations:</span>
                    <span>Monday – Friday</span>
                  </div>
                  <div className="flex justify-between gap-4 font-mono text-xs sm:text-[13px]">
                    <span>Estimating Desk:</span>
                    <span>09:00 – 18:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry & Quotation Process Guide */}
            <div className="bg-[#172B3A] text-white p-6 sm:p-8 rounded-sm border border-[#213C50] space-y-4">
              <span className="text-xs font-mono text-[#E99A26] uppercase font-bold tracking-wider block">
                Workflow Overview
              </span>
              <h3 className="text-xl font-heading font-bold text-white">
                The Enquiry & Quotation Process
              </h3>

              <div className="space-y-3.5 text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-xs bg-[#E99A26] text-[#172B3A] font-mono font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-white block font-heading text-sm sm:text-[15px] font-bold">Requirement Intake</strong>
                    <p className="text-xs sm:text-[13.5px] text-slate-300 leading-relaxed">Receipt of drawing prints, CAD models, material grades, and quantity forecasts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-xs bg-[#E99A26] text-[#172B3A] font-mono font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-white block font-heading text-sm sm:text-[15px] font-bold">Engineering Feasibility & DFM</strong>
                    <p className="text-xs sm:text-[13.5px] text-slate-300 leading-relaxed">Assessment of machine envelope, tooling setups, and raw material availability.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-xs bg-[#E99A26] text-[#172B3A] font-mono font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-white block font-heading text-sm sm:text-[15px] font-bold">Itemized Commercial Proposal</strong>
                    <p className="text-xs sm:text-[13.5px] text-slate-300 leading-relaxed">Detailed formal quotation outlining volume price tiers, lead times, and terms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-xs bg-[#E99A26] text-[#172B3A] font-mono font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    4
                  </span>
                  <div>
                    <strong className="text-white block font-heading text-sm sm:text-[15px] font-bold">Order Confirmation</strong>
                    <p className="text-xs sm:text-[13.5px] text-slate-300 leading-relaxed">Purchase Order sign-off, scheduled machine allocation, and quality plan alignment.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality Notice */}
            <div className="p-4 sm:p-5 bg-[#FFF8EE] border border-[#E99A26]/40 rounded-xs flex items-start gap-3 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-[#E99A26] shrink-0 mt-0.5" />
              <span>
                All submitted CAD files, drawings, and proprietary engineering designs are handled strictly under standard commercial confidentiality protocols.
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE (7 Columns): Validated Form / Demo Success     */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-sm border border-[#E1E6EB] shadow-xs">
              {/* Form Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E1E6EB]">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-[#172B3A]">
                    Direct RFQ Submission Portal
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    For technical inquiries, tender bid packages, and manufacturing feasibility reviews.
                  </p>
                </div>
                <span className="hidden sm:inline-flex text-xs font-mono px-3 py-1 bg-[#172B3A]/8 text-[#172B3A] rounded-xs font-bold">
                  B2B DIRECT
                </span>
              </div>

              {/* Prefill Banners */}
              {prefillProduct && (
                <div className="mb-6 p-4 bg-[#FFF8EE] border border-[#E99A26]/40 rounded-xs flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-[#172B3A]">
                    <Layers className="w-4 h-4 text-[#E99A26] shrink-0" />
                    <span>
                      Inquiring about catalog item: <strong className="text-[#172B3A]">{prefillProduct}</strong>
                    </span>
                  </div>
                  <span className="font-mono text-[#E99A26] uppercase font-bold text-[11px] px-2.5 py-1 bg-[#E99A26]/15 rounded-xs shrink-0">
                    Product Pre-Selected
                  </span>
                </div>
              )}

              {!prefillProduct && (formData.enquiryType === 'Custom Manufacturing' || prefillTypeParam === 'custom-manufacturing') && (
                <div className="mb-6 p-4 bg-[#FFF8EE] border border-[#E99A26]/40 rounded-xs flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-[#172B3A]">
                    <Layers className="w-4 h-4 text-[#E99A26] shrink-0" />
                    <span>
                      Enquiry Mode: <strong className="text-[#172B3A]">Custom Manufacturing & Engineering Review</strong>
                    </span>
                  </div>
                  <span className="font-mono text-[#E99A26] uppercase font-bold text-[11px] px-2.5 py-1 bg-[#E99A26]/15 rounded-xs shrink-0">
                    Custom RFQ Mode
                  </span>
                </div>
              )}

              {!prefillProduct && prefillTypeParam === 'quality-inquiry' && (
                <div className="mb-6 p-4 bg-[#F0FDF4] border border-emerald-300 rounded-xs flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-[#172B3A]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Enquiry Mode: <strong className="text-[#172B3A]">Quality Assurance & Inspection Specifications</strong>
                    </span>
                  </div>
                  <span className="font-mono text-emerald-700 uppercase font-bold text-[11px] px-2.5 py-1 bg-emerald-100 rounded-xs shrink-0">
                    QA Review Active
                  </span>
                </div>
              )}

              {!prefillProduct && (prefillTypeParam === 'supply-agreement' || prefillTypeParam === 'bulk-supply' || prefillTypeParam === 'annual-contract') && (
                <div className="mb-6 p-4 bg-[#EFF6FF] border border-blue-200 rounded-xs flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-[#172B3A]">
                    <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      Enquiry Mode: <strong className="text-[#172B3A]">B2B Contract & Bulk Supply Coordination</strong>
                    </span>
                  </div>
                  <span className="font-mono text-blue-700 uppercase font-bold text-[11px] px-2.5 py-1 bg-blue-100 rounded-xs shrink-0">
                    Contract Supply Mode
                  </span>
                </div>
              )}

              {/* DEMO SUCCESS VIEW (Honest frontend-only verification) */}
              {submittedData ? (
                <div className="space-y-6">
                  <div className="p-7 sm:p-8 bg-[#F0FDF4] border border-emerald-300 rounded-xs text-center space-y-3.5">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-[#172B3A]">
                      Enquiry Form Validated (Demonstration Mode)
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed">
                      Thank you, <strong>{submittedData.fullName}</strong> from <strong>{submittedData.companyName}</strong>. All required procurement fields and specifications have successfully passed client-side validation.
                    </p>
                    <div className="p-4 bg-white border border-emerald-200 rounded-xs text-xs sm:text-[13.5px] text-slate-600 text-left font-mono leading-relaxed">
                      <strong className="text-[#172B3A] block mb-1">Frontend Demo Notice:</strong>
                      In a production environment connected to a live email service or ERP database, this RFQ package would be transmitted to the engineering estimate desk. In this demonstration deployment, no external email has been sent and no data has been stored on a remote server.
                    </div>
                  </div>

                  {/* Summary of Submitted Details */}
                  <div className="border border-[#E1E6EB] rounded-xs overflow-hidden text-xs sm:text-sm">
                    <div className="bg-[#172B3A] text-white px-5 py-2.5 font-mono font-bold uppercase tracking-wider text-xs">
                      Validated Enquiry Summary
                    </div>
                    <div className="divide-y divide-[#E1E6EB] bg-white">
                      <div className="grid grid-cols-3 p-3.5">
                        <span className="font-bold text-slate-500">Contact:</span>
                        <span className="col-span-2 text-[#172B3A] font-semibold">{submittedData.fullName} ({submittedData.companyName})</span>
                      </div>
                      <div className="grid grid-cols-3 p-3.5">
                        <span className="font-bold text-slate-500">Email & Phone:</span>
                        <span className="col-span-2 text-[#172B3A] font-mono">{submittedData.email} | {submittedData.phone}</span>
                      </div>
                      <div className="grid grid-cols-3 p-3.5">
                        <span className="font-bold text-slate-500">Category & Type:</span>
                        <span className="col-span-2 text-[#172B3A] font-semibold">{submittedData.category} &bull; {submittedData.enquiryType}</span>
                      </div>
                      <div className="grid grid-cols-3 p-3.5">
                        <span className="font-bold text-slate-500">Target Quantity:</span>
                        <span className="col-span-2 text-[#172B3A] font-semibold">{submittedData.quantity}</span>
                      </div>
                      {submittedData.deliveryDate && (
                        <div className="grid grid-cols-3 p-3.5">
                          <span className="font-bold text-slate-500">Expected Delivery:</span>
                          <span className="col-span-2 text-[#172B3A] font-mono">{submittedData.deliveryDate}</span>
                        </div>
                      )}
                      <div className="grid grid-cols-3 p-3.5">
                        <span className="font-bold text-slate-500">Specification Scope:</span>
                        <span className="col-span-2 text-slate-700 whitespace-pre-line leading-relaxed">{submittedData.specifications}</span>
                      </div>
                      {submittedData.attachment && (
                        <div className="grid grid-cols-3 p-3.5">
                          <span className="font-bold text-slate-500">Attachment:</span>
                          <span className="col-span-2 text-[#172B3A] font-mono flex items-center gap-1.5">
                            <FileText className="w-4 h-4 text-[#E99A26]" />
                            {submittedData.attachment.name} ({(submittedData.attachment.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="md"
                    onClick={resetForm}
                    className="w-full justify-center text-sm font-semibold"
                    leftIcon={<RefreshCw className="w-4 h-4" />}
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                /* ========================================================= */
                /* THE RFQ FORM                                             */
                /* ========================================================= */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        placeholder="e.g. Robert Vance"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        onBlur={() => handleBlur('fullName')}
                        className={`w-full px-4 py-3 text-sm sm:text-[15px] bg-white border rounded-xs text-[#24292E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#172B3A] focus:border-transparent ${
                          errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1.5 text-xs sm:text-[13px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                        Business / Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.companyName}
                        aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                        placeholder="e.g. Vance Heavy Machinery Ltd."
                        value={formData.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        onBlur={() => handleBlur('companyName')}
                        className={`w-full px-4 py-3 text-sm sm:text-[15px] bg-white border rounded-xs text-[#24292E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#172B3A] focus:border-transparent ${
                          errors.companyName ? 'border-red-500 bg-red-50/20' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {errors.companyName && (
                        <p id="companyName-error" className="mt-1.5 text-xs sm:text-[13px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Work Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={`w-full px-4 py-3 text-sm sm:text-[15px] bg-white border rounded-xs text-[#24292E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#172B3A] focus:border-transparent ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs sm:text-[13px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                        Contact Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        placeholder="e.g. +1 (555) 234-5678"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className={`w-full px-4 py-3 text-sm sm:text-[15px] bg-white border rounded-xs text-[#24292E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#172B3A] focus:border-transparent ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs sm:text-[13px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Product Category & Enquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="category" className="block text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                        Product Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => handleChange('category', e.target.value as ProductCategory)}
                        className="w-full px-4 py-3 text-sm sm:text-[15px] bg-white border border-[#CBD5E1] rounded-xs text-[#24292E] focus:outline-none focus:ring-2 focus:ring-[#172B3A] focus:border-transparent"
                      >
                        {CATEGORY_OPTIONS.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="enquiryType" className="block text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                        Enquiry Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="enquiryType"
                        value={formData.enquiryType}
                        onChange={(e) => handleChange('enquiryType', e.target.value as EnquiryType)}
                        className="w-full px-4 py-3 text-sm sm:text-[15px] bg-white border border-[#CBD5E1] rounded-xs text-[#24292E] focus:outline-none focus:ring-2 focus:ring-[#172B3A] focus:border-transparent"
                      >
                        {ENQUIRY_TYPE_OPTIONS.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Estimated Quantity & Expected Delivery Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quantity" className="block text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                        Estimated Quantity / Volume <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="quantity"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.quantity}
                        aria-describedby={errors.quantity ? 'quantity-error' : undefined}
                        placeholder="e.g. 50 units, 200/month, or 5 pallet lots"
                        value={formData.quantity}
                        onChange={(e) => handleChange('quantity', e.target.value)}
                        onBlur={() => handleBlur('quantity')}
                        className={`w-full px-4 py-3 text-sm sm:text-[15px] bg-white border rounded-xs text-[#24292E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#172B3A] focus:border-transparent ${
                          errors.quantity ? 'border-red-500 bg-red-50/20' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {errors.quantity && (
                        <p id="quantity-error" className="mt-1.5 text-xs sm:text-[13px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.quantity}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="deliveryDate" className="block text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                        Expected Delivery Date (If Known)
                      </label>
                      <input
                        id="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => handleChange('deliveryDate', e.target.value)}
                        className="w-full px-4 py-3 text-sm sm:text-[15px] bg-white border border-[#CBD5E1] rounded-xs text-[#24292E] focus:outline-none focus:ring-2 focus:ring-[#172B3A] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Product Specifications or Requirements */}
                  <div>
                    <label htmlFor="specifications" className="block text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                      Product Specifications or Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="specifications"
                      rows={4}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.specifications}
                      aria-describedby={errors.specifications ? 'specifications-error' : undefined}
                      placeholder="Specify material grades, critical dimensions, tolerances, surface finishing, or blueprint details..."
                      value={formData.specifications}
                      onChange={(e) => handleChange('specifications', e.target.value)}
                      onBlur={() => handleBlur('specifications')}
                      className={`w-full px-4 py-3 text-sm sm:text-[15px] bg-white border rounded-xs text-[#24292E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#172B3A] focus:border-transparent font-normal leading-relaxed ${
                        errors.specifications ? 'border-red-500 bg-red-50/20' : 'border-[#CBD5E1]'
                      }`}
                    />
                    {errors.specifications && (
                      <p id="specifications-error" className="mt-1.5 text-xs sm:text-[13px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.specifications}</span>
                      </p>
                    )}
                  </div>

                  {/* Additional Message (Optional) */}
                  <div>
                    <label htmlFor="additionalMessage" className="block text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                      Additional Message or Delivery Terms (Optional)
                    </label>
                    <textarea
                      id="additionalMessage"
                      rows={2}
                      placeholder="Include preferred Incoterms (EXW/DAP/FOB), delivery destination, or packaging requirements..."
                      value={formData.additionalMessage}
                      onChange={(e) => handleChange('additionalMessage', e.target.value)}
                      className="w-full px-4 py-3 text-sm sm:text-[15px] bg-white border border-[#CBD5E1] rounded-xs text-[#24292E] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#172B3A] focus:border-transparent font-normal leading-relaxed"
                    />
                  </div>

                  {/* Safe File Attachment Zone */}
                  <div>
                    <label className="block text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-[#172B3A] mb-2">
                      Specification or Drawing Attachment (Optional)
                    </label>

                    <input
                      ref={fileInputRef}
                      type="file"
                      id="file-upload"
                      onChange={handleFileChange}
                      accept={ALLOWED_EXTENSIONS.join(',')}
                      className="hidden"
                    />

                    {formData.attachment ? (
                      <div className="p-4 bg-[#F8FAFC] border border-[#CBD5E1] rounded-xs flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <FileText className="w-5 h-5 text-[#E99A26] shrink-0" />
                          <div className="min-w-0">
                            <span className="text-sm font-semibold text-[#172B3A] truncate block">
                              {formData.attachment.name}
                            </span>
                            <span className="text-xs font-mono text-slate-500">
                              {(formData.attachment.size / 1024).toFixed(1)} KB &bull; Ready for upload
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeAttachment}
                          aria-label="Remove attached file"
                          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-slate-100 rounded-xs transition-colors shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            fileInputRef.current?.click();
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label="Upload technical specification or CAD package"
                        className="border-2 border-dashed border-[#CBD5E1] hover:border-[#E99A26] rounded-xs p-6 text-center cursor-pointer transition-colors bg-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#172B3A]"
                      >
                        <UploadCloud className="w-8 h-8 text-[#172B3A] mx-auto mb-2" />
                        <div className="text-sm sm:text-[15px] font-heading font-semibold text-[#172B3A]">
                          Click to attach drawing package or drag file here
                        </div>
                        <div className="text-xs font-mono text-slate-500 mt-1.5">
                          Supported: .PDF, .DWG, .DXF, .STEP, .IGES, .ZIP, images (Max {MAX_FILE_SIZE_MB}MB)
                        </div>
                      </div>
                    )}

                    {errors.attachment && (
                      <p className="mt-1.5 text-xs sm:text-[13px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.attachment}</span>
                      </p>
                    )}
                  </div>

                  {/* Privacy Notice */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs text-xs sm:text-[13px] text-slate-600 leading-relaxed flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Privacy Notice:</strong> The contact details and technical specifications submitted through this form will be used solely by Eastern Industrial Works to evaluate manufacturing feasibility, generate a commercial quotation, and communicate regarding this specific industrial inquiry. We do not sell or distribute commercial contact details to third parties.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="amber"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    className="text-sm sm:text-base md:text-[17px] font-bold py-3.5 shadow-md justify-center"
                    rightIcon={
                      isSubmitting ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )
                    }
                  >
                    {isSubmitting ? 'Validating Submission...' : 'Submit Request for Quotation (RFQ)'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
