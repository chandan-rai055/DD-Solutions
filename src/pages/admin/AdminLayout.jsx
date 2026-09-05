import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Ticket,
  Receipt,
  UserCheck,
  MessageSquare,
  RotateCcw,
  ArrowUpRight,
  Menu,
  X,
  ShieldAlert,
  Code2,
  Palette,
  Eye,
  Globe
} from 'lucide-react';

export default function AdminLayout() {
  const {
    currentRole,
    setCurrentRole,
    leads,
    tickets,
    resetToDefaults
  } = useApp();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const openLeadsCount = leads.filter((l) => l.status === 'New').length;
  const openTicketsCount = tickets.filter((t) => t.status === 'Open').length;

  // Nav configuration based on active role
  const getNavLinks = () => {
    switch (currentRole) {
      case 'developer':
        return [
          { path: '/admin', label: 'Tech Dashboard', icon: LayoutDashboard },
          { path: '/admin/projects', label: 'Assigned Code Projects', icon: Briefcase },
          { path: '/admin/tickets', label: 'Dev Bug & Support Tickets', icon: Ticket, badge: openTicketsCount },
          { path: '/admin/team', label: 'Engineering Team & Leaves', icon: UserCheck }
        ];
      case 'designer':
        return [
          { path: '/admin', label: 'Creative Dashboard', icon: LayoutDashboard },
          { path: '/admin/projects', label: 'Design Projects & Snapshots', icon: Briefcase },
          { path: '/admin/tickets', label: 'Creative Feedback Tickets', icon: Ticket, badge: openTicketsCount },
          { path: '/admin/team', label: 'Design Team & Leaves', icon: UserCheck }
        ];
      case 'hr':
        return [
          { path: '/admin', label: 'HR & People Dashboard', icon: LayoutDashboard },
          { path: '/admin/team', label: 'Staff Directory & Leaves', icon: UserCheck },
          { path: '/admin/projects', label: 'Team Project Allocations', icon: Briefcase },
          { path: '/admin/finance', label: 'Payroll & Ledger Overview', icon: Receipt }
        ];
      case 'admin':
      default:
        return [
          { path: '/admin', label: 'Master Overview', icon: LayoutDashboard },
          { path: '/admin/leads', label: 'Leads CRM Pipeline', icon: Users, badge: openLeadsCount },
          { path: '/admin/projects', label: 'Projects & Team Progress', icon: Briefcase },
          { path: '/admin/tickets', label: 'Customer Ticketing', icon: Ticket, badge: openTicketsCount },
          { path: '/admin/finance', label: 'Financial History & Invoices', icon: Receipt },
          { path: '/admin/team', label: 'Internal Team & HR Hub', icon: UserCheck },
          { path: '/admin/whatsapp', label: 'WhatsApp Automation Logs', icon: MessageSquare }
        ];
    }
  };

  const navLinks = getNavLinks();

  const roleColors = {
    admin: 'bg-indigo-600 text-white border-indigo-500',
    developer: 'bg-emerald-600 text-white border-emerald-500',
    designer: 'bg-pink-600 text-white border-pink-500',
    hr: 'bg-amber-600 text-white border-amber-500'
  };

  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-body">
      
      {/* Top Universal Admin / Role Bar */}
      <header className="sticky top-0 z-40 bg-slate-950 text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
          
          {/* Brand & Mode */}
          <div className="flex items-center gap-3">
            <Link to="/admin" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-heading font-black text-white text-base">
                D
              </div>
              <div className="hidden sm:block">
                <div className="font-heading font-extrabold text-sm text-white tracking-wide">
                  Dev Digit Solutions
                </div>
                <div className="text-[10px] text-blue-400 font-mono uppercase tracking-wider -mt-0.5">
                  Internal Management Suite
                </div>
              </div>
            </Link>

            <span className="hidden md:inline-block text-slate-700">|</span>

            {/* Current Role Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900 border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-400 text-[10px]">Active Role:</span>
              <span className="font-bold text-white uppercase">{currentRole}</span>
            </div>
          </div>

          {/* Role Switcher & Action Controls */}
          <div className="flex items-center gap-3">
            
            {/* Quick Role Switcher Dropdown */}
            <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-full p-1 text-xs">
              <span className="hidden lg:inline text-[11px] text-slate-400 px-2 font-medium">
                Switch Role:
              </span>
              {[
                { id: 'admin', label: 'Admin', icon: ShieldAlert },
                { id: 'developer', label: 'Developer', icon: Code2 },
                { id: 'designer', label: 'Designer', icon: Palette },
                { id: 'hr', label: 'HR', icon: UserCheck }
              ].map((r) => {
                const Icon = r.icon;
                const isActive = currentRole === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => handleRoleChange(r.id)}
                    className={`px-2.5 py-1 rounded-full text-xs font-heading font-semibold transition-all flex items-center gap-1 ${
                      isActive
                        ? roleColors[r.id]
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{r.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Switch to Client Portal View */}
            <Link
              to="/portal"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-xs font-semibold transition-all"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Client Portal</span>
              <ArrowUpRight className="w-3 h-3 text-blue-400" />
            </Link>

            {/* Back to Public Website */}
            <Link
              to="/"
              className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all border border-slate-800"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Website</span>
            </Link>

            {/* Reset Demo Data Button */}
            <button
              onClick={resetToDefaults}
              title="Reset state to initial realistic demo data"
              className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-900 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </header>

      {/* Main Admin Body with Sidebar */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-6">
        
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-20 bg-white border border-slate-200 rounded-3xl p-4 shadow-sm space-y-4">
            
            <div className="px-3 py-2 border-b border-slate-100">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Workspace ({currentRole.toUpperCase()})
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-0.5 truncate">
                {currentRole === 'admin' && 'Enterprise Control Center'}
                {currentRole === 'developer' && 'Engineering & Sprints'}
                {currentRole === 'designer' && 'Design & Brand Deliverables'}
                {currentRole === 'hr' && 'People & Operations Hub'}
              </div>
            </div>

            <nav className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                      <span>{link.label}</span>
                    </div>
                    {link.badge > 0 && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          isActive
                            ? 'bg-white text-blue-600'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Quick WhatsApp Automation Info Box */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Auto WhatsApp Sync</span>
              </div>
              <p className="text-[11px] text-emerald-700 leading-relaxed">
                Updating project progress or resolving tickets generates pre-formatted WhatsApp client messages automatically.
              </p>
            </div>

            {/* Portal Quick Link */}
            <div className="pt-2 border-t border-slate-100">
              <Link
                to="/portal"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold font-heading transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-blue-600" />
                <span>Open Client Dashboard</span>
              </Link>
            </div>

          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileNavOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm p-4 flex flex-col justify-start">
            <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="font-heading font-bold text-sm text-slate-900">
                  Navigation ({currentRole.toUpperCase()})
                </div>
                <button
                  onClick={() => setMobileNavOpen(false)}
                  className="p-1 rounded-full bg-slate-100 text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileNavOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span>{link.label}</span>
                      </div>
                      {link.badge > 0 && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-200 space-y-2">
                <Link
                  to="/portal"
                  onClick={() => setMobileNavOpen(false)}
                  className="block text-center py-2.5 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs"
                >
                  Switch to Client Portal View →
                </Link>
                <Link
                  to="/"
                  onClick={() => setMobileNavOpen(false)}
                  className="block text-center py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Return to Public Website
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Content Outlet for Admin Subpages */}
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>

      </div>

    </div>
  );
}
