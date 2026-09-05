import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Public Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import EnquireModal from './components/Modals/EnquireModal';
import AuditModal from './components/Modals/AuditModal';

// Public Pages
import HomePage from './pages/HomePage';
import ServicesHubPage from './pages/ServicesHubPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RoiCalculatorPage from './pages/RoiCalculatorPage';

// Portal & Admin Pages
import ClientPortalPage from './pages/portal/ClientPortalPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLeadsPage from './pages/admin/AdminLeadsPage';
import AdminProjectsPage from './pages/admin/AdminProjectsPage';
import AdminTicketsPage from './pages/admin/AdminTicketsPage';
import AdminFinancePage from './pages/admin/AdminFinancePage';
import AdminTeamPage from './pages/admin/AdminTeamPage';
import AdminWhatsAppPage from './pages/admin/AdminWhatsAppPage';

export default function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const location = useLocation();

  const handleOpenEnquire = (service = '') => {
    setSelectedService(service);
    setEnquireOpen(true);
  };

  // Determine if the current route is a dedicated workspace (Admin or Client Portal)
  const isWorkspaceRoute =
    location.pathname.startsWith('/admin') || location.pathname.startsWith('/portal');

  return (
    <AppProvider>
      <div className="min-h-screen bg-white text-slate-900 font-body selection:bg-blue-600 selection:text-white flex flex-col relative overflow-x-hidden">
        
        {/* Sticky Header (Rendered on public site only) */}
        {!isWorkspaceRoute && (
          <Navbar
            onOpenEnquire={() => handleOpenEnquire()}
            onOpenAudit={() => setAuditOpen(true)}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Public Website Routes */}
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
              path="/about"
              element={
                <AboutPage
                  onOpenEnquire={() => handleOpenEnquire()}
                  onOpenAudit={() => setAuditOpen(true)}
                />
              }
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="/roi-calculator"
              element={<RoiCalculatorPage />}
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

            {/* Client Portal Route */}
            <Route path="/portal" element={<ClientPortalPage />} />

            {/* Role-Based Admin Panel Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="leads" element={<AdminLeadsPage />} />
              <Route path="projects" element={<AdminProjectsPage />} />
              <Route path="tickets" element={<AdminTicketsPage />} />
              <Route path="finance" element={<AdminFinancePage />} />
              <Route path="team" element={<AdminTeamPage />} />
              <Route path="whatsapp" element={<AdminWhatsAppPage />} />
            </Route>

            {/* Fallback to Home */}
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

        {/* Public Footer & Floating Widgets */}
        {!isWorkspaceRoute && (
          <>
            <Footer
              onOpenEnquire={() => handleOpenEnquire()}
              onOpenAudit={() => setAuditOpen(true)}
            />
            <FloatingWhatsApp />
          </>
        )}

        {/* Global Modals for Consultation & Audit */}
        <EnquireModal
          isOpen={enquireOpen}
          onClose={() => setEnquireOpen(false)}
          preselectedService={selectedService}
        />

        <AuditModal
          isOpen={auditOpen}
          onClose={() => setAuditOpen(false)}
        />

      </div>
    </AppProvider>
  );
}
