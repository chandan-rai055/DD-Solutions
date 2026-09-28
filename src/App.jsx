import React, { useState, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';

// Public Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import EnquireModal from './components/Modals/EnquireModal';
import AuditModal from './components/Modals/AuditModal';

// Protected Route Wrapper
const ProtectedRoute = () => {
  const { isAuthenticated } = useApp();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

// Lazy Loaded Pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesHubPage = React.lazy(() => import('./pages/ServicesHubPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const RoiCalculatorPage = React.lazy(() => import('./pages/RoiCalculatorPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));

// Lazy Loaded Portal & Admin Pages
const ClientPortalPage = React.lazy(() => import('./pages/portal/ClientPortalPage'));
const AdminLayout = React.lazy(() => import('./pages/admin/AdminLayout'));
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'));
const AdminLeadsPage = React.lazy(() => import('./pages/admin/AdminLeadsPage'));
const AdminProjectsPage = React.lazy(() => import('./pages/admin/AdminProjectsPage'));
const AdminTicketsPage = React.lazy(() => import('./pages/admin/AdminTicketsPage'));
const AdminFinancePage = React.lazy(() => import('./pages/admin/AdminFinancePage'));
const AdminTeamPage = React.lazy(() => import('./pages/admin/AdminTeamPage'));
const AdminWhatsAppPage = React.lazy(() => import('./pages/admin/AdminWhatsAppPage'));

const LoaderFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const location = useLocation();

  const handleOpenEnquire = (service = '') => {
    setSelectedService(service);
    setEnquireOpen(true);
  };

  // Determine if the current route is a dedicated workspace (Admin, Client Portal, Login)
  const isWorkspaceRoute =
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/portal') ||
    location.pathname.startsWith('/login');

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
          <Suspense fallback={<LoaderFallback />}>
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
              <Route path="/login" element={<LoginPage />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
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
          </Suspense>
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
