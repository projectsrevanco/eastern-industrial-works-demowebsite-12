import React from 'react';
import {
  Hero,
  CompanyIntro,
  ProductCategories,
  ManufacturingSection,
  HowWeWork,
  QualitySection,
  IndustriesSection,
  B2BSupplySection,
  FinalCTA,
} from '../components/home';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Company Introduction */}
      <CompanyIntro />

      {/* 3. Product Categories */}
      <ProductCategories />

      {/* 4. Manufacturing Capabilities */}
      <ManufacturingSection />

      {/* 5. How We Work (5-Step Workflow) */}
      <HowWeWork />

      {/* 6. Quality Assurance */}
      <QualitySection />

      {/* 7. Industries Served */}
      <IndustriesSection />

      {/* 8. B2B Supply Section */}
      <B2BSupplySection />

      {/* 9. Final Call to Action */}
      <FinalCTA />
    </div>
  );
};
