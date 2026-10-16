import React from 'react';
import { ArrowLeft, AlertCircle, Home } from 'lucide-react';
import { Container, Button } from '../components/ui';

export const NotFound: React.FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <Container size="md" className="text-center">
        <div className="inline-flex p-4 rounded-xs bg-[#172B3A] text-[#E99A26] mb-6">
          <AlertCircle className="w-12 h-12" />
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-[#E99A26] font-bold mb-2">
          ERROR CODE: 404 &bull; ROUTE NOT FOUND
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#172B3A] mb-4">
          Specified Specification or Resource Unavailable
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto mb-8">
          The page or manufacturing specification route you requested does not exist or may have been relocated within the directory.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
          <Button variant="primary" to="/" leftIcon={<Home className="w-4 h-4" />} className="justify-center w-full sm:w-auto">
            Return to Home
          </Button>
          <Button variant="outline" to="/contact" leftIcon={<ArrowLeft className="w-4 h-4" />} className="justify-center w-full sm:w-auto">
            Contact Engineering Desk
          </Button>
        </div>
      </Container>
    </div>
  );
};
