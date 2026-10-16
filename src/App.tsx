import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout';
import { DocumentTitleHandler } from './components/common/DocumentTitleHandler';
import {
  Home,
  About,
  Products,
  Capabilities,
  Quality,
  Industries,
  Contact,
  NotFound,
} from './pages';

export default function App() {
  return (
    <Router>
      <DocumentTitleHandler />
      <Routes>
        <Route element={<Layout />}>
          {/* Main 7 B2B Manufacturing Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/manufacturing" element={<Capabilities />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />

          {/* Convenient Aliases for RFQ & Quote links */}
          <Route path="/quote" element={<Navigate to="/contact" replace />} />
          <Route path="/rfq" element={<Navigate to="/contact" replace />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
