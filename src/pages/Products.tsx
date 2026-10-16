import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Search,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Package,
  Wrench,
  Layers,
  Cpu,
  FileCode,
  Info,
  X,
  FileSpreadsheet,
  Clock,
  Boxes,
  Compass,
} from 'lucide-react';
import { Container, SectionHeading, Button } from '../components/ui';
import { cn } from '../utils/cn';

interface ProductItem {
  id: string;
  name: string;
  category: 'Industrial Machinery Parts' | 'Precision Components' | 'Packaging Materials' | 'Custom Industrial Products';
  categoryKey: 'machinery-parts' | 'precision-components' | 'packaging-materials' | 'custom-products';
  image: string;
  alt: string;
  description: string;
  applications: string[];
  specs: string[];
}

const sampleProducts: ProductItem[] = [
  // 1. Industrial Machinery Parts
  {
    id: 'prd-01',
    name: 'Forged Heavy-Duty Spur & Helical Gears',
    category: 'Industrial Machinery Parts',
    categoryKey: 'machinery-parts',
    image: '/images/cat-machinery-parts.jpg',
    alt: 'Heavy forged industrial gears and machine transmission parts',
    description:
      'Precision hobbed and tooth-ground spur, helical, and bevel gears designed for high-torque mechanical drive systems. Engineered from certified forged alloy rounds with controlled case carburizing to ensure maximum tooth flank hardness, smooth mechanical engagement, and extended service life under severe shock loading.',
    applications: ['Industrial Gearboxes', 'Conveyor Drive Stations', 'Heavy Crushing Equipment', 'Crane Hoists'],
    specs: ['Alloy & Carbon Steels (EN24, 4140, 20MnCr5)', 'Induction / Case Hardened to 58–62 HRC', 'Custom Module & Ground Tooth Profiles'],
  },
  {
    id: 'prd-02',
    name: 'Precision Stepped Transmission Shafts',
    category: 'Industrial Machinery Parts',
    categoryKey: 'machinery-parts',
    image: '/images/cat-machinery-parts.jpg',
    alt: 'Turned and keyed industrial transmission drive shafts',
    description:
      'High-integrity stepped, splined, and keyway-milled drive shafts manufactured to exacting concentricity and runout tolerances. CNC turned between centers with cylindrical-ground bearing journals to minimize rotational vibration, protect mechanical seals, and deliver dependable power transfer across severe duty cycles.',
    applications: ['Centrifugal Pumps', 'Electric Motor Drivetrains', 'Rotary Agitators', 'Rolling Mill Lines'],
    specs: ['EN8, EN19, EN24 & Stainless Alloys', 'Ground Bearing Fits (ISO h6/k6 tolerances)', 'Keyway & Spline Milling per Print'],
  },
  {
    id: 'prd-03',
    name: 'Heavy-Duty Flanged Bearing Housings',
    category: 'Industrial Machinery Parts',
    categoryKey: 'machinery-parts',
    image: '/images/cat-machinery-parts.jpg',
    alt: 'Precision bored flanged mechanical bearing housings',
    description:
      'Rigid flanged bearing housings, split plummer blocks, and torque-transmission adapters with precision-bored interior diameters. Engineered to dampen mechanical vibration, maintain true shaft alignment under continuous radial loads, and provide robust grease-purging seal channels for hostile operating environments.',
    applications: ['Machine Tool Bases', 'High-Load Pulleys', 'Slurry Pump Pedestals', 'Drive Assemblies'],
    specs: ['Cast/Ductile Iron & Fabricated Carbon Steel', 'H7 Precision Tolerance Bearing Bores', 'Machined Mounting Faces with Dowel Locating'],
  },

  // 2. Precision Components
  {
    id: 'prd-04',
    name: 'Multi-Port Hydraulic Manifold Blocks',
    category: 'Precision Components',
    categoryKey: 'precision-components',
    image: '/images/cat-precision-components.jpg',
    alt: 'Precision machined hydraulic manifold valve block with ports',
    description:
      'Close-tolerance aluminum and ductile iron hydraulic manifold blocks featuring cross-drilled internal galleries, SAE/BSP threaded port cavities, and micro-deburred flow paths. Eliminates external plumbing connections, reduces leakage risks, and ensures smooth laminar fluid distribution in high-pressure hydraulic circuits.',
    applications: ['Mobile Hydraulic Equipment', 'Industrial Press Controls', 'Hydraulic Power Units', 'Actuator Blocks'],
    specs: ['6061-T6 Aluminum & Ductile Iron', 'Zero-Burr Cavity Deburring & Ultrasonic Cleaning', 'Rated for High Working Pressures (up to 350 bar)'],
  },
  {
    id: 'prd-05',
    name: 'Threaded Precision Bushings & Adapters',
    category: 'Precision Components',
    categoryKey: 'precision-components',
    image: '/images/cat-precision-components.jpg',
    alt: 'Close-tolerance CNC turned brass, stainless and alloy threaded bushings',
    description:
      'CNC multi-axis turned male/female threaded bushings, compression fittings, alignment sleeves, and fluid connectors with burr-free pitch threads. Manufactured to tight diametrical tolerances for seamless interchangeability, reliable pressure sealing, and gall-free maintenance assembly in demanding processing lines.',
    applications: ['Process Instrumentation', 'High-Pressure Fluid Lines', 'Precision Assembly Guides', 'Coolant Circuits'],
    specs: ['Brass C360, SS 304/316L & Carbon Steel', 'Metric, NPT, and BSP Thread Classes', 'Burnished OD/ID Sealing Surfaces'],
  },
  {
    id: 'prd-06',
    name: 'Hardened Ground Locating Pins & Spindles',
    category: 'Precision Components',
    categoryKey: 'precision-components',
    image: '/images/cat-precision-components.jpg',
    alt: 'Hardened tool steel locating pins, dowels, and machine spindles',
    description:
      'Through-hardened and finish-ground cylindrical locating pins, guide dowels, and precision tool spindles engineered for sub-micron positioning repeatability. Precision ground to a mirror finish to resist abrasive wear, prevent galling during automated part cycling, and guarantee repeatable jig and fixture alignment.',
    applications: ['Tooling Fixtures & Jigs', 'Automated Assembly Nests', 'Index Table Spindles', 'Die Sets'],
    specs: ['Hardened Tool Steels (HRC 58–62)', 'Sub-Micron Cylindricity & Runout Control', 'Superfinished Surface Ra < 0.4 µm'],
  },

  // 3. Packaging Materials
  {
    id: 'prd-07',
    name: 'High-Tensile Steel & Polyester Strapping',
    category: 'Packaging Materials',
    categoryKey: 'packaging-materials',
    image: '/images/cat-packaging-materials.jpg',
    alt: 'Heavy-duty industrial strapping coils for securing palletized metal goods',
    description:
      'High-yield tensile steel and heavy-gauge polyester (PET) strapping engineered for securing heavy pallet loads, structural tubing bundles, and crated machinery. Offers exceptional tension retention, shock absorption against transit jolts, and high weather resistance to prevent load shifting during long-distance multimodal freight.',
    applications: ['Machinery Export Crating', 'Palletized Unit Bundling', 'Steel Tube & Bar Securing', 'Freight Bracing'],
    specs: ['High Break-Strength Ratings (up to 2,500+ kg)', 'Protective Corrosion Inhibitor Coating', 'Standard Heavy Automated Dispenser Coils'],
  },
  {
    id: 'prd-08',
    name: 'Reinforced Heavy-Duty Corrugated Crates',
    category: 'Packaging Materials',
    categoryKey: 'packaging-materials',
    image: '/images/cat-packaging-materials.jpg',
    alt: 'Multi-wall heavy corrugated industrial shipping cartons and octabins',
    description:
      'Double and triple-wall heavy-duty corrugated bulk packaging boxes, pallet containers, and component separation kits engineered for heavy industrial goods. Manufactured from high-grammage virgin Kraft liners to deliver outstanding Edge Crush Test (ECT) ratings, preventing sidewall bulging and stack collapse in humid freight containers.',
    applications: ['Component Batch Shipments', 'Bulk Fastener Transport', 'Pallet Box Containers', 'Inter-Plant Transit'],
    specs: ['Double-Wall (5-ply) & Triple-Wall (7-ply) Board', 'High Edge-Crush & Bursting Strength', 'Custom Sizing with Integrated Wooden Pallet Bases'],
  },
  {
    id: 'prd-09',
    name: 'VCI Anti-Corrosion Transit Wrap & Films',
    category: 'Packaging Materials',
    categoryKey: 'packaging-materials',
    image: '/images/cat-packaging-materials.jpg',
    alt: 'VCI rust-inhibiting protective transit wrap and stretch film rolls',
    description:
      'Volatile Corrosion Inhibiting (VCI) protective barrier papers, multi-layer co-extruded stretch films, and waterproof shrink shrouds. Releases active molecular vapor that bonds with metal surfaces to block moisture and oxygen, providing up to 24–36 months of rust protection for export shipping without the need for greasy temporary coatings.',
    applications: ['Ocean Freight Shipping', 'Long-Term Spares Storage', 'Bare Metal Part Preservation', 'Machined Part Wrapping'],
    specs: ['Multi-Metal Active Molecular VCI Vapor', 'Puncture & Tear Resistant Multi-Layer Film', 'Multi-Season Indoor & Covered Storage Protection'],
  },

  // 4. Custom Industrial Products
  {
    id: 'prd-10',
    name: 'Structural Equipment Skids & Baseframes',
    category: 'Custom Industrial Products',
    categoryKey: 'custom-products',
    image: '/images/cat-custom-products.jpg',
    alt: 'Custom fabricated structural steel skid frame and pump base',
    description:
      'Bespoke heavy-gauge structural channel and I-beam baseframes, engineered skid packages, and vibration-isolated mounting foundations built strictly to client blueprints. Features precision-milled equipment mounting pads, full-penetration certified structural welding, and multi-coat epoxy corrosion barrier coatings for harsh plant environments.',
    applications: ['Diesel Generator Sets', 'Process Compressor Skids', 'Industrial Chiller Bases', 'Pump Skids'],
    specs: ['IS 2062 / ASTM A36 Structural Steel Sections', 'CNC Machined Equipment Mounting Pads', 'Shot Blasted (SA 2.5) & High-Build Epoxy Coating'],
  },
  {
    id: 'prd-11',
    name: 'Custom Fabricated Industrial Enclosures',
    category: 'Custom Industrial Products',
    categoryKey: 'custom-products',
    image: '/images/cat-custom-products.jpg',
    alt: 'Custom sheet metal electrical and machinery protective enclosures',
    description:
      'Heavy-duty sheet metal control console bodies, operator enclosures, machinery protective guards, and access hoods fabricated from carbon steel, stainless steel, or aluminum. Built with CNC laser-cut blanks, precision press-brake formed corners, continuous seam welds, and resilient perimeter gasketing to shield vital machinery controls.',
    applications: ['Factory Automation Panels', 'Machinery Safety Guards', 'Harsh Duty Enclosures', 'Power Distribution'],
    specs: ['CNC Laser Cut & Precision Press Brake Formed', 'Gasketed Flanged Envelopes with Cam Locks', 'Industrial Powder Coated or Bead Blasted Finish'],
  },
  {
    id: 'prd-12',
    name: 'Engineered Flanged Pipe Spools & Headers',
    category: 'Custom Industrial Products',
    categoryKey: 'custom-products',
    image: '/images/cat-custom-products.jpg',
    alt: 'Custom welded flanged pipe spool and manifold header',
    description:
      'Custom-welded process pipe spools, manifold headers, multi-branch lateral assemblies, and structural transitions produced strictly against client isometric drawings. Fabricated with full-penetration butt-welded flanges, pre-weld beveling, and full hydrostatic or non-destructive examination (NDE) to guarantee pressure integrity.',
    applications: ['Plant Cooling Circuits', 'Bulk Material Transfer', 'Utility Distribution', 'Hydraulic Return Lines'],
    specs: ['Seamless & Welded Heavy Wall Pipe Stock', 'Full Penetration ASME/EN Butt Welds', 'Hydrostatic Pressure & Dye Penetrant (PT) Inspected'],
  },
];

type CategoryFilter = 'All' | 'Industrial Machinery Parts' | 'Precision Components' | 'Packaging Materials' | 'Custom Industrial Products';

const categorySlugMap: Record<string, CategoryFilter> = {
  'machinery-parts': 'Industrial Machinery Parts',
  'precision-components': 'Precision Components',
  'packaging-materials': 'Packaging Materials',
  'custom-products': 'Custom Industrial Products',
  'industrial-machinery-parts': 'Industrial Machinery Parts',
};

const filterCategories: { label: CategoryFilter; icon: React.ReactNode }[] = [
  { label: 'All', icon: <Boxes className="w-4 h-4" /> },
  { label: 'Industrial Machinery Parts', icon: <Wrench className="w-4 h-4" /> },
  { label: 'Precision Components', icon: <Cpu className="w-4 h-4" /> },
  { label: 'Packaging Materials', icon: <Package className="w-4 h-4" /> },
  { label: 'Custom Industrial Products', icon: <Layers className="w-4 h-4" /> },
];

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategoryParam = (searchParams.get('category') || '').toLowerCase();

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(() => {
    if (urlCategoryParam && categorySlugMap[urlCategoryParam]) {
      return categorySlugMap[urlCategoryParam];
    }
    return 'All';
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Keep state in sync if URL query parameter changes
  useEffect(() => {
    if (urlCategoryParam && categorySlugMap[urlCategoryParam]) {
      setActiveCategory(categorySlugMap[urlCategoryParam]);
    } else if (!urlCategoryParam) {
      setActiveCategory('All');
    }
  }, [urlCategoryParam]);

  const handleCategorySelect = (category: CategoryFilter) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    } else {
      const slug = Object.entries(categorySlugMap).find(([_, label]) => label === category)?.[0];
      if (slug) {
        searchParams.set('category', slug);
        setSearchParams(searchParams, { replace: true });
      }
    }
  };

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category === activeCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.specs.some((spec) => spec.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const clearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col">
      {/* 1. Page Hero */}
      <section className="relative bg-[#0E1A23] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-[#213C50]">
        {/* Background facility image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-industrial-facility.jpg"
            alt="Eastern Industrial Works manufacturing plant"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1A23] via-[#0E1A23]/90 to-[#172B3A]/70" />
          <div className="absolute inset-0 bg-industrial-grid-dark opacity-35" />
        </div>

        <Container size="xl" className="relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-widest rounded-xs bg-[#213C50]/80 text-[#E99A26] border border-[#E99A26]/30">
              <span className="w-2 h-2 rounded-full bg-[#E99A26] inline-block animate-pulse" />
              <span>INDUSTRIAL CATALOGUE &amp; CONTRACT SUPPLY</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-heading font-extrabold text-white tracking-tight leading-[1.16] mb-4">
              Industrial Products, Precision Parts &amp; Packaging Supplies
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] text-slate-200 leading-relaxed mb-6 font-normal max-w-3xl">
              Eastern Industrial Works supplies high-integrity machinery components, close-tolerance CNC parts,
              transit packaging supplies, and bespoke welded products. Explore illustrative samples below or
              request a quotation for custom manufacturing to your exact specifications.
            </p>

            {/* Illustrative Notice Banner */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#172B3A]/90 border border-[#2B3D4D] rounded-xs text-xs sm:text-sm font-mono text-slate-200">
              <Info className="w-4 h-4 text-[#E99A26] shrink-0" />
              <span>
                Catalogue Notice: Sample products are illustrative. Dimensions, alloys, and lot volumes are quoted to order.
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Category Navigation & Filters Bar */}
      <section className="bg-white border-b border-[#E1E6EB] sticky top-[69px] z-30 shadow-xs">
        <Container size="xl" className="py-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {filterCategories.map((item) => {
                const active = activeCategory === item.label;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleCategorySelect(item.label)}
                    className={cn(
                      'inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-[13px] 2xl:text-sm font-heading font-semibold uppercase tracking-wider rounded-xs whitespace-nowrap transition-colors shrink-0',
                      active
                        ? 'bg-[#172B3A] text-white shadow-xs'
                        : 'bg-[#F3F5F7] text-slate-700 hover:bg-[#E2E8F0] hover:text-[#172B3A]'
                    )}
                  >
                    <span className={active ? 'text-[#E99A26]' : 'text-slate-500'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <input
                type="text"
                placeholder="Search catalogue items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-xs text-[#24292E] placeholder:text-slate-400 focus:outline-none focus:border-[#172B3A] focus:ring-1 focus:ring-[#172B3A]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Status & Result Count */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#F1F5F9] text-xs sm:text-sm font-mono text-slate-600">
            <div>
              Showing <span className="font-bold text-[#172B3A]">{filteredProducts.length}</span> of{' '}
              <span className="font-bold text-[#172B3A]">{sampleProducts.length}</span> illustrative catalogue items
              {activeCategory !== 'All' && (
                <span className="ml-2 text-[#E99A26] font-semibold">&bull; Category: {activeCategory}</span>
              )}
              {searchQuery && (
                <span className="ml-2 text-slate-700">&bull; Query: &quot;{searchQuery}&quot;</span>
              )}
            </div>

            {(activeCategory !== 'All' || searchQuery) && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs sm:text-sm text-[#E99A26] hover:underline font-semibold flex items-center gap-1"
              >
                Reset Filters
              </button>
            )}
          </div>
        </Container>
      </section>

      {/* 3. Product Cards Catalogue Grid */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <Container size="xl">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-[#E1E6EB] hover:border-[#172B3A] rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Product Image Header with Graceful Fallback */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0E1A23]">
                      <img
                        src={product.image}
                        alt={product.alt}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Graceful fallback to default category image if ever needed
                          const target = e.currentTarget;
                          target.src = '/images/cat-machinery-parts.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A23]/80 via-transparent to-transparent opacity-60" />

                      {/* Top Category Badge */}
                      <div className="absolute top-3 left-3 bg-[#172B3A]/90 text-white px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-xs border border-[#2B3D4D]">
                        {product.category}
                      </div>

                      {/* Illustrative Notice Pill */}
                      <div className="absolute top-3 right-3 bg-[#E99A26] text-[#172B3A] px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-xs">
                        Sample Spec
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="font-heading font-bold text-xl sm:text-[22px] lg:text-[24px] text-[#172B3A] mb-2.5 leading-snug group-hover:text-[#E99A26] transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-5 font-normal">
                        {product.description}
                      </p>

                      {/* Typical Applications */}
                      <div className="mb-4 pt-3 border-t border-[#E1E6EB]">
                        <span className="text-xs font-mono uppercase font-bold text-slate-500 block tracking-wider mb-2">
                          Industrial Applications
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="text-xs sm:text-[13px] px-2.5 py-1 bg-[#F3F5F7] text-slate-700 font-medium rounded-xs border border-[#E1E6EB]"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Specification Features */}
                      <div className="space-y-1.5 pt-2">
                        {product.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26] shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA (Functional Prefill Navigation) */}
                  <div className="p-6 sm:p-7 pt-0">
                    <div className="pt-4 border-t border-[#E1E6EB]">
                      <Button
                        variant="amber"
                        size="md"
                        to={`/contact?product=${encodeURIComponent(product.name)}&category=${product.categoryKey}`}
                        fullWidth
                        rightIcon={<ArrowUpRight className="w-4 h-4" />}
                        className="font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs"
                      >
                        Request Quote for this Item
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State if filter returns no products */
            <div className="py-16 px-6 text-center bg-white border border-[#CBD5E1] rounded-sm max-w-xl mx-auto shadow-xs">
              <div className="w-14 h-14 bg-[#F3F5F7] text-[#172B3A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-[#E99A26]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#172B3A] mb-2">
                No Matching Catalogue Items Found
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                No items match your active filters or keyword search for &quot;{searchQuery}&quot;.
                Try adjusting your search terms, or submit a custom manufacturing enquiry with your drawing files.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                <Button variant="primary" size="md" onClick={clearFilters} className="justify-center w-full sm:w-auto">
                  Clear All Filters
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  to="/contact"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="justify-center w-full sm:w-auto"
                >
                  Submit Custom RFQ
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 4. Dedicated Custom Manufacturing Enquiry Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-[#E1E6EB]">
        <Container size="xl">
          <div className="bg-[#172B3A] text-white rounded-sm p-8 sm:p-12 lg:p-14 border border-[#213C50] relative overflow-hidden">
            <div className="absolute inset-0 bg-industrial-grid-dark opacity-30 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold text-[#E99A26] uppercase tracking-wider">
                  <FileCode className="w-4 h-4" />
                  <span>BUILT TO CLIENT SPECIFICATIONS &bull; DRAWING REVIEW</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-heading font-extrabold text-white leading-tight">
                  Require Custom Dimensions, Non-Standard Metallurgy, or Tailored Assemblies?
                </h2>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
                  A large portion of our contract manufacturing is custom-engineered to print.
                  If your required component or assembly is not represented in our standard catalogue,
                  send your engineering drawings or CAD files directly to our review desk.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-xs sm:text-sm font-mono text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                    <span>2D/3D CAD Formats Accepted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                    <span>Custom Metallurgy Options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E99A26] shrink-0" />
                    <span>Feasibility &amp; DFM Review</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end w-full lg:w-auto">
                <Button
                  variant="amber"
                  size="md"
                  to="/contact?category=custom-products"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                  className="font-bold uppercase tracking-wider text-xs sm:text-sm w-full sm:w-auto justify-center"
                >
                  Submit Custom Drawing (RFQ)
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  to="/manufacturing"
                  className="text-white border-slate-400 hover:bg-white/10 text-xs sm:text-sm uppercase tracking-wider w-full sm:w-auto justify-center"
                >
                  Explore Capabilities
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Section: How Buyers Can Provide Specification Parameters */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
        <Container size="xl">
          <SectionHeading
            badge="PROCUREMENT &amp; ESTIMATING GUIDE"
            title="How to Prepare Your Technical Enquiry for Rapid Quotation"
            subtitle="To help our engineering desk provide fast and accurate pricing, please include the following parameters when submitting your technical drawing packages."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Target Quantities */}
            <div className="bg-white p-6 sm:p-7 border border-[#E1E6EB] border-t-4 border-t-[#172B3A] rounded-xs shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#E99A26]">PARAM 01</span>
                <Boxes className="w-5 h-5 text-[#172B3A]" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#172B3A] mb-2.5">
                Target Quantities &amp; Batch Sizes
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                Specify whether your project is an initial prototype (1–5 units), a pilot trial run (10–50 units),
                or recurring scheduled production volume. Quantity tiers assist us in estimating raw material
                yields, CNC cycle economies, and amortized tooling setups.
              </p>
            </div>

            {/* 2. Critical Dimensions & Tolerances */}
            <div className="bg-white p-6 sm:p-7 border border-[#E1E6EB] border-t-4 border-t-[#E99A26] rounded-xs shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#E99A26]">PARAM 02</span>
                <Compass className="w-5 h-5 text-[#172B3A]" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#172B3A] mb-2.5">
                Dimensions &amp; Critical Tolerances
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                Indicate key functional mating dimensions, critical diameter fits (e.g., ISO H7/g6), keyway
                geometry, hole centerlines, and general tolerance grades (e.g., ISO 2768-m) on your submitted prints.
              </p>
            </div>

            {/* 3. Material Preferences */}
            <div className="bg-white p-6 sm:p-7 border border-[#E1E6EB] border-t-4 border-t-[#172B3A] rounded-xs shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#E99A26]">PARAM 03</span>
                <Layers className="w-5 h-5 text-[#172B3A]" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#172B3A] mb-2.5">
                Material Preferences &amp; Grades
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                Provide desired material specifications (e.g., Mild Steel A36, AISI 4140, SS 304/316L, Brass C360,
                or engineering polymers). If flexible, note your operating conditions and our engineers will suggest options.
              </p>
            </div>

            {/* 4. Technical Drawings & CAD */}
            <div className="bg-white p-6 sm:p-7 border border-[#E1E6EB] border-t-4 border-t-[#E99A26] rounded-xs shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#E99A26]">PARAM 04</span>
                <FileSpreadsheet className="w-5 h-5 text-[#172B3A]" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#172B3A] mb-2.5">
                Engineering Drawings &amp; CAD Files
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                Upload 2D PDF blueprints with dimensional callouts and 3D CAD models (STEP, IGES, DXF, DWG).
                Having both formats accelerates tooling evaluation and automated CNC machine code planning.
              </p>
            </div>

            {/* 5. Surface Finishing & Coatings */}
            <div className="bg-white p-6 sm:p-7 border border-[#E1E6EB] border-t-4 border-t-[#172B3A] rounded-xs shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#E99A26]">PARAM 05</span>
                <ShieldCheck className="w-5 h-5 text-[#172B3A]" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#172B3A] mb-2.5">
                Finishing &amp; Quality Documentation
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                State any required surface roughness requirements (Ra), heat treatments, protective plating
                (zinc, black oxide, anodizing), or required quality documentation (such as Mill Test Reports or CoC).
              </p>
            </div>

            {/* 6. Delivery Timelines & Packaging */}
            <div className="bg-white p-6 sm:p-7 border border-[#E1E6EB] border-t-4 border-t-[#E99A26] rounded-xs shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#E99A26]">PARAM 06</span>
                <Clock className="w-5 h-5 text-[#172B3A]" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#172B3A] mb-2.5">
                Delivery Schedules &amp; Transit Packaging
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                Let us know target on-site delivery dates, preferred shipping incoterms, and special packaging
                requirements (such as VCI rust-inhibiting wrap or reinforced wooden export pallets).
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Final Request a Quote Callout */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#172B3A] text-white border-t border-[#213C50]">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-[#E99A26]">
              READY TO COMMENCE PRODUCTION INQUIRY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-extrabold text-white leading-tight">
              Request a Quotation for Your Industrial Component Requirements
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Submit your RFQ packages, CAD models, tolerance requirements, and production volume targets.
              Our estimating team reviews manufacturing feasibility and provides prompt commercial proposals.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none mx-auto">
              <Button
                variant="amber"
                size="lg"
                to="/contact"
                rightIcon={<ArrowUpRight className="w-5 h-5" />}
                className="justify-center w-full sm:w-auto font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5"
              >
                Go to RFQ Submission Desk
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/manufacturing"
                className="text-white border-slate-400 hover:bg-white/10 justify-center w-full sm:w-auto font-bold text-[14px] sm:text-[16px] px-6 sm:px-8 py-3 sm:py-3.5"
              >
                Review Plant Infrastructure
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
