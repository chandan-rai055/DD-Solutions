import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesHubPage from './pages/ServicesHubPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import EnquireModal from './components/Modals/EnquireModal';
import AuditModal from './components/Modals/AuditModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenEnquire = (service = '') => {
    setSelectedService(service);
    setEnquireOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body selection:bg-blue-600 selection:text-white flex flex-col relative overflow-x-hidden">
      {/* Sticky White Navbar with 4-Column Mega Menu */}
      <Navbar
        onOpenEnquire={() => handleOpenEnquire()}
        onOpenAudit={() => setAuditOpen(true)}
      />

      {/* Main Routed Content */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenEnquire={(svc) => handleOpenEnquire(svc)}
                onOpenAudit={() => setAuditOpen(true)}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesHubPage
                onOpenAudit={() => setAuditOpen(true)}
              />
            }
          />
          <Route
            path="/services/:slug"
            element={
              <ServiceDetailPage
                onOpenEnquire={(svc) => handleOpenEnquire(svc)}
                onOpenAudit={() => setAuditOpen(true)}
              />
            }
          />
          <Route
            path="*"
            element={
              <HomePage
                onOpenEnquire={(svc) => handleOpenEnquire(svc)}
                onOpenAudit={() => setAuditOpen(true)}
              />
            }
          />
        </Routes>
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenEnquire={() => handleOpenEnquire()}
        onOpenAudit={() => setAuditOpen(true)}
      />

      {/* Floating Action WhatsApp */}
      <FloatingWhatsApp />

      {/* Consultation Modal */}
      <EnquireModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        preselectedService={selectedService}
      />

      {/* Free Website Audit Modal */}
      <AuditModal
        isOpen={auditOpen}
        onClose={() => setAuditOpen(false)}
      />
    </div>
  );
}
