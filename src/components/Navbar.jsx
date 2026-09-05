import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { servicesNavigation } from '../data/servicesData';
import { Menu, X, ChevronDown, Phone, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function Navbar({ onOpenEnquire, onOpenAudit }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMegaOpen, setServicesMegaOpen] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Bar (Clean Light Theme) */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-slate-300 font-medium">{siteData.brand.awardsBadge}</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Direct Hotline: <strong className="text-white">{siteData.brand.phone}</strong></span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={siteData.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 hover:underline font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Quick Connect</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar (Pure White Theme) */}
      <nav
        className={`bg-white transition-all duration-300 ${
          scrolled
            ? 'shadow-md border-b border-slate-200 py-3'
            : 'border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group py-0.5">
            <img
              src="/logo.png"
              alt="Dev Digit Solutions"
              className="h-11 sm:h-12 md:h-13 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={() => setServicesMegaOpen(true)}
              onMouseLeave={() => setServicesMegaOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  servicesMegaOpen || location.pathname.startsWith('/services')
                    ? 'text-blue-600'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
                onClick={() => setServicesMegaOpen(!servicesMegaOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesMegaOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* 4-Column Mega Menu (Replicating DigiStreet Structure) */}
              <div
                className={`fixed left-1/2 -translate-x-1/2 top-[92px] w-[96vw] max-w-7xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-8 transition-all duration-200 z-50 max-h-[80vh] overflow-y-auto ${
                  servicesMegaOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-2 pointer-events-none'
                }`}
              >
                <div className="grid grid-cols-4 gap-8">
                  {servicesNavigation.map((col, idx) => (
                    <div key={idx} className="space-y-4">
                      {/* Column Header with Brand Blue Line */}
                      <div className="pb-2 border-b-2 border-blue-600">
                        <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-blue-600">
                          {col.category}
                        </h3>
                      </div>

                      {/* Items */}
                      <div className="space-y-3">
                        {col.items.map((item, iIdx) => {
                          const hasSub = !!item.subItems;
                          const isHovered = hoveredSubmenu === item.slug;

                          if (!hasSub) {
                            return (
                              <div key={iIdx} className="py-0.5">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Link
                                    to={`/services/${item.slug}`}
                                    onClick={() => setServicesMegaOpen(false)}
                                    className="font-heading font-bold text-sm text-slate-800 hover:text-blue-600 transition-colors"
                                  >
                                    {item.title}
                                  </Link>
                                  {item.badge && (
                                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider ${
                                      item.badge === 'NEW'
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-blue-600 text-white shadow-sm'
                                    }`}>
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          }

                          return (
                            <div
                              key={iIdx}
                              className="relative group/item py-0.5"
                              onMouseEnter={() => setHoveredSubmenu(item.slug)}
                              onMouseLeave={() => setHoveredSubmenu(null)}
                            >
                              {/* Main service title with arrow */}
                              <div className="flex items-center justify-between gap-1.5 cursor-pointer select-none">
                                <Link
                                  to={`/services/${item.slug}`}
                                  onClick={() => setServicesMegaOpen(false)}
                                  className={`font-heading font-bold text-sm transition-colors ${
                                    isHovered ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'
                                  }`}
                                >
                                  {item.title}
                                </Link>
                                <ChevronDown
                                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                                    isHovered ? 'rotate-180 text-blue-600' : 'group-hover/item:text-slate-600'
                                  }`}
                                />
                              </div>

                              {/* Hover Popup: Only opens when mouse cursor is on this service */}
                              {isHovered && (
                                <div className="mt-2 pl-3 py-2 pr-3 bg-blue-50/60 rounded-r-2xl border-l-2 border-blue-600 space-y-1 animate-in fade-in duration-150 shadow-sm">
                                  {item.subItems.map((sub, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      to={`/services/${sub.slug}`}
                                      onClick={() => setServicesMegaOpen(false)}
                                      className={`block text-xs py-0.5 transition-colors ${
                                        sub.isOverview
                                          ? 'font-bold text-slate-900 hover:text-blue-600'
                                          : 'text-slate-600 hover:text-blue-600'
                                      }`}
                                    >
                                      {sub.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Bar in Mega Menu */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>All services backed by verified data, dedicated account managers & direct SLAs.</span>
                  </div>
                  <Link
                    to="/services"
                    className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>View Complete Services Directory</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/services"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              All Services
            </Link>

            <a
              href="/#case-studies"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Case Studies
            </a>

            <a
              href="/#portfolio"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Our Work
            </a>

            <a
              href="/#testimonials"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Testimonials
            </a>

            <a
              href="/#faq"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenEnquire()}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 transition-colors"
            >
              Enquire Now
            </button>
            <button
              onClick={onOpenAudit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Get Free Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenAudit}
              className="bg-blue-600 text-white font-heading font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm"
            >
              Free Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu (Clean White Theme) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="text-xs uppercase tracking-wider text-blue-600 font-bold pb-2 border-b border-slate-100">
              Navigation
            </div>
            
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-900 hover:text-blue-600 block py-1"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-blue-600 block py-1"
            >
              Explore All Services Directory →
            </Link>

            {/* Mobile Services Accordion Preview */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase text-slate-400">Categories</div>
              {servicesNavigation.map((col, idx) => (
                <div key={idx} className="border-l-2 border-blue-500 pl-3 space-y-1">
                  <div className="font-heading font-bold text-xs text-slate-900 uppercase">
                    {col.category}
                  </div>
                  <div className="space-y-1 text-xs text-slate-600">
                    {col.items.map((item, iIdx) => (
                      <Link
                        key={iIdx}
                        to={`/services/${item.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-0.5 hover:text-blue-600"
                      >
                        {item.title} {item.badge && `(${item.badge})`}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a
                href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call: {siteData.brand.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquire();
                }}
                className="w-full text-center py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm font-semibold hover:bg-slate-50"
              >
                Enquire Now
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full text-center py-2.5 rounded-xl bg-blue-600 text-white text-sm font-heading font-semibold shadow-lg shadow-blue-600/25"
              >
                Claim Free Website Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
