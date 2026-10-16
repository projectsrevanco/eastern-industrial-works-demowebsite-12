import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';

interface CategoryItem {
  id: string;
  title: string;
  code: string;
  image: string;
  alt: string;
  description: string;
  features: string[];
}

const categories: CategoryItem[] = [
  {
    id: 'machinery-parts',
    title: 'Industrial Machinery Parts',
    code: 'CAT-01',
    image: '/images/cat-machinery-parts.jpg',
    alt: 'Heavy industrial machinery parts, precision forged gears, drive shafts, and flanged components',
    description:
      'Forged spur and helical gears, heavy-duty drive shafts, flanged bearing blocks, and mechanical transmission assemblies engineered for severe duty cycles, high shock loads, and long-term operating reliability.',
    features: ['High-Torque Hardened Steels', 'Shafts & Gear Assemblies', 'OEM & Replacement Ready'],
  },
  {
    id: 'precision-components',
    title: 'Precision Components',
    code: 'CAT-02',
    image: '/images/cat-precision-components.jpg',
    alt: 'Precision CNC turned and milled brass, stainless steel, and alloy engineering components',
    description:
      'Close-tolerance CNC turned and milled parts, threaded bushings, hydraulic manifolds, valve spools, and custom alloy fittings manufactured to strict drawing limits with documented micron-level surface finishes.',
    features: ['Tight Dimensional Tolerances', 'Brass, Stainless & Alloy Grades', 'Metrology Inspected'],
  },
  {
    id: 'packaging-materials',
    title: 'Packaging Materials',
    code: 'CAT-03',
    image: '/images/cat-packaging-materials.jpg',
    alt: 'Industrial transit packaging materials, heavy-duty cartons, strapping, and protective warehouse supplies',
    description:
      'Industrial transit packaging systems, multi-wall heavy corrugated shipping crates, high-tensile polyester strapping, stretch wrap, and VCI corrosion-inhibiting protective films for domestic and export freight.',
    features: ['High-Tensile Strapping & Films', 'Heavy-Duty Corrugated Crates', 'Transit & Export Protection'],
  },
];

export const ProductCategories: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E1E6EB]">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="PRODUCT CLASSIFICATIONS"
            title="Core Industrial Product Categories"
            subtitle="Engineered supplies, precision mechanical parts, and transit packaging solutions tailored to meet commercial manufacturing standards."
            className="mb-0"
          />

          <div className="w-full md:w-auto shrink-0">
            <Button
              variant="outline"
              size="md"
              to="/products"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold tracking-wide uppercase text-[14px] sm:text-[15px] w-full md:w-auto justify-center"
            >
              View All Products
            </Button>
          </div>
        </div>

        {/* 3 Product Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white border border-[#E1E6EB] hover:border-[#172B3A] rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Image Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0E1A23]">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A23]/80 via-transparent to-transparent opacity-60" />

                  {/* Category Code Badge */}
                  <div className="absolute top-3 left-3 bg-[#172B3A] text-white px-3 py-1 text-[12px] font-mono font-bold uppercase tracking-wider rounded-xs border border-[#2B3D4D]">
                    {cat.code}
                  </div>

                  {/* Safety Amber Indicator Accent Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E99A26] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                {/* Category Body Details */}
                <div className="p-6 sm:p-7">
                  <h3 className="typography-card font-heading font-bold text-[22px] sm:text-[24px] text-[#172B3A] mb-3 group-hover:text-[#E99A26] transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#E1E6EB]">
                    <span className="text-[12px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      Category Highlights
                    </span>
                    <ul className="space-y-2">
                      {cat.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-[14px] sm:text-[15px] text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E99A26] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Category Footer CTA */}
              <div className="p-6 sm:p-7 pt-0">
                <Button
                  variant="secondary"
                  size="md"
                  to={`/products?category=${cat.id}`}
                  fullWidth
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                  className="font-bold text-[14px] sm:text-[15px] uppercase tracking-wider group-hover:bg-[#172B3A] group-hover:text-white transition-colors py-3"
                >
                  Explore {cat.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
