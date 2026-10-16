import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles: Record<string, string> = {
  '/': 'Eastern Industrial Works | Precision Industrial Engineering & Manufacturing',
  '/about': 'About Us | Eastern Industrial Works',
  '/products': 'Products & Classifications | Eastern Industrial Works',
  '/capabilities': 'Manufacturing Capabilities | Eastern Industrial Works',
  '/manufacturing': 'Manufacturing Capabilities | Eastern Industrial Works',
  '/quality': 'Quality Assurance & Metrology | Eastern Industrial Works',
  '/industries': 'Industries & Contract Supply | Eastern Industrial Works',
  '/contact': 'Contact & Request a Quote (RFQ) | Eastern Industrial Works',
  '/quote': 'Request a Quote (RFQ) | Eastern Industrial Works',
  '/rfq': 'Request a Quote (RFQ) | Eastern Industrial Works',
};

export const DocumentTitleHandler: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = routeTitles[pathname] || 'Eastern Industrial Works';
    document.title = title;
  }, [pathname]);

  return null;
};
