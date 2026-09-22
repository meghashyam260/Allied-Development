import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { SpecialtiesPage } from '@/pages/SpecialtiesPage';
import { TechnologyPage } from '@/pages/TechnologyPage';
import { SecurityPage } from '@/pages/SecurityPage';
import { PartnershipsPage } from '@/pages/PartnershipsPage';
import { LeadershipPage } from '@/pages/LeadershipPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/specialties" element={<SpecialtiesPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
