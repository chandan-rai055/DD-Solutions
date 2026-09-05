import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ArrowUpRight,
  Palette,
  TrendingUp,
  Building2
} from 'lucide-react';

export default function Footer({ onOpenEnquire, onOpenAudit }) {
  const currentYear = new Date().getFullYear();

  // Track which accordion sections are open
  const [openSections, setOpenSections] = useState({
    creative: false,
    sem: false,
    growth: false,
    tech: false,
    industries: false,
    agency: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Expand all / Collapse all helper
  const allOpen = Object.values(openSections).every(Boolean);
  const toggleAll = () => {
    const nextState = !allOpen;
    setOpenSections({
      creative: nextState,
      sem: nextState,
      growth: nextState,
      tech: nextState,
      industries: nextState,
      agency: nextState,
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      
      {/* Top Pre-Footer Banner */}
      <div className="border-b border-slate-800/80 py-12 bg-slate-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
              Ready to scale your digital presence?
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-1">
              Let's craft your next high-impact campaign & platform.
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3 rounded-full border border-slate-700 hover:border-blue-500 text-white font-medium text-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{siteData.brand.phone}</span>
            </a>
            <button
              onClick={onOpenEnquire}
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm shadow-lg shadow-blue-600/25 transition-all"
            >
              Start A Conversation
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Brand Bar & Quick Toggle */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-10 border-b border-slate-800/80 gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="inline-block bg-white px-4 py-2 rounded-2xl shadow-sm">
              <img
                src="/logo.png"
                alt="Dev Digit Solutions"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Dev Digit Solutions is a premier digital marketing and technology agency in India offering 360° SEO, performance marketing, enterprise web development, UGC creation, and brand strategy.
            </p>
          </div>

          <button
            onClick={toggleAll}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 px-4 py-2 rounded-full border border-slate-800 hover:border-blue-500/50 bg-slate-900 transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>{allOpen ? 'Collapse All Sections' : 'Expand All Sections'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${allOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Interactive Expandable Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-10">
          
          {/* Column 1: Core Capabilities (Pillars 1 & 2) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 pb-2 text-xs font-heading font-bold uppercase tracking-wider text-slate-300">
              <Palette className="w-4 h-4 text-blue-400" />
              <span>Core Capabilities — Part 1</span>
            </div>

            {/* Tap to Open: Creative & Communication */}
            <div className="border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-900/50 transition-colors hover:border-slate-700">
              <button
                onClick={() => toggleSection('creative')}
                className="w-full p-4 text-left flex items-center justify-between gap-3 text-white font-heading font-semibold text-sm hover:text-blue-400 transition-colors"
                aria-expanded={openSections.creative}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Creative & Communication</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openSections.creative ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>

              {openSections.creative && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-800/60 animate-in fade-in duration-200">
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    <li>
                      <Link to="/services/creative-communication" className="font-bold text-blue-400 hover:underline block py-0.5">
                        View All Creative Services →
                      </Link>
                    </li>
                    <li><Link to="/services/brand-strategy" className="hover:text-white transition-colors block py-0.5">Brand Strategy & Archetyping</Link></li>
                    <li><Link to="/services/brand-communication" className="hover:text-white transition-colors block py-0.5">Brand Communication & Voice</Link></li>
                    <li><Link to="/services/logo-identity-design" className="hover:text-white transition-colors block py-0.5">Logo & Visual Identity Design</Link></li>
                    <li><Link to="/services/brochure-presentation-design" className="hover:text-white transition-colors block py-0.5">Brochure & Presentation Design</Link></li>
                    <li><Link to="/services/product-packaging" className="hover:text-white transition-colors block py-0.5">Product Packaging & Labels</Link></li>
                    <li><Link to="/services/art-direction" className="hover:text-white transition-colors block py-0.5">Art Direction & Graphic Systems</Link></li>
                    <li><Link to="/services/animations-gifs" className="hover:text-white transition-colors block py-0.5">2D/3D Animations & Motion Graphics</Link></li>
                    <li><Link to="/services/corporate-films-explainers" className="hover:text-white transition-colors block py-0.5">Corporate Films & Explainer Videos</Link></li>
                    <li><Link to="/services/tvc-ads" className="hover:text-white transition-colors block py-0.5">TVC & Commercial Video Ads</Link></li>
                    <li><Link to="/services/print-newspaper-ads" className="hover:text-white transition-colors block py-0.5">Print & Newspaper Advertising</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Tap to Open: Search Engine Marketing */}
            <div className="border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-900/50 transition-colors hover:border-slate-700">
              <button
                onClick={() => toggleSection('sem')}
                className="w-full p-4 text-left flex items-center justify-between gap-3 text-white font-heading font-semibold text-sm hover:text-blue-400 transition-colors"
                aria-expanded={openSections.sem}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Search Engine Marketing (SEO/AEO)</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openSections.sem ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>

              {openSections.sem && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-800/60 animate-in fade-in duration-200">
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    <li>
                      <Link to="/services/seo-services" className="font-bold text-blue-400 hover:underline block py-0.5">
                        View All SEO & Search Services →
                      </Link>
                    </li>
                    <li><Link to="/services/b2b-seo" className="hover:text-white transition-colors block py-0.5">B2B SEO Strategy & Pipeline</Link></li>
                    <li><Link to="/services/ecommerce-seo" className="hover:text-white transition-colors block py-0.5">Ecommerce Search & Shopify SEO</Link></li>
                    <li><Link to="/services/local-seo" className="hover:text-white transition-colors block py-0.5">Local SEO & Google Business Profile</Link></li>
                    <li><Link to="/services/lead-gen-seo" className="hover:text-white transition-colors block py-0.5">High-Intent Lead Generation SEO</Link></li>
                    <li><Link to="/services/multilingual-seo" className="hover:text-white transition-colors block py-0.5">Multilingual & Global SEO</Link></li>
                    <li><Link to="/services/aeo-services" className="hover:text-white transition-colors block py-0.5">AEO (Answer Engine Optimization)</Link></li>
                    <li><Link to="/services/geo-services" className="hover:text-white transition-colors block py-0.5">Generative Engine Optimization (GEO)</Link></li>
                  </ul>
                </div>
              )}
            </div>

          </div>

          {/* Column 2: Core Capabilities (Pillars 3 & 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 pb-2 text-xs font-heading font-bold uppercase tracking-wider text-slate-300">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span>Core Capabilities — Part 2</span>
            </div>

            {/* Tap to Open: Digital Marketing & Growth */}
            <div className="border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-900/50 transition-colors hover:border-slate-700">
              <button
                onClick={() => toggleSection('growth')}
                className="w-full p-4 text-left flex items-center justify-between gap-3 text-white font-heading font-semibold text-sm hover:text-blue-400 transition-colors"
                aria-expanded={openSections.growth}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Digital Marketing & Growth</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openSections.growth ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>

              {openSections.growth && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-800/60 animate-in fade-in duration-200">
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    <li>
                      <Link to="/services/digital-marketing" className="font-bold text-blue-400 hover:underline block py-0.5">
                        View All Marketing Solutions →
                      </Link>
                    </li>
                    <li><Link to="/services/performance-marketing" className="hover:text-white transition-colors block py-0.5">Performance Marketing (Meta & Google ROAS)</Link></li>
                    <li><Link to="/services/social-media-marketing" className="hover:text-white transition-colors block py-0.5">Social Media Strategy & Management</Link></li>
                    <li><Link to="/services/social-performance-combo" className="hover:text-white transition-colors block py-0.5">Social + Performance Combo (Bestseller)</Link></li>
                    <li><Link to="/services/influencer-marketing" className="hover:text-white transition-colors block py-0.5">Creator & Influencer Activations</Link></li>
                    <li><Link to="/services/ugc-video" className="hover:text-white transition-colors block py-0.5">High-Converting UGC Video Ads</Link></li>
                    <li><Link to="/services/ai-generated-videos" className="hover:text-white transition-colors block py-0.5">AI-Generated Video Commercials</Link></li>
                    <li><Link to="/services/bgc-content" className="hover:text-white transition-colors block py-0.5">Brand Generated Content (BGC)</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Tap to Open: Website & Software Development */}
            <div className="border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-900/50 transition-colors hover:border-slate-700">
              <button
                onClick={() => toggleSection('tech')}
                className="w-full p-4 text-left flex items-center justify-between gap-3 text-white font-heading font-semibold text-sm hover:text-blue-400 transition-colors"
                aria-expanded={openSections.tech}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Website & Software Development</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openSections.tech ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>

              {openSections.tech && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-800/60 animate-in fade-in duration-200">
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    <li>
                      <Link to="/services/website-development" className="font-bold text-blue-400 hover:underline block py-0.5">
                        View All Web & App Services →
                      </Link>
                    </li>
                    <li><Link to="/services/corporate-website-design" className="hover:text-white transition-colors block py-0.5">Enterprise Corporate Website Design</Link></li>
                    <li><Link to="/services/ecommerce-website" className="hover:text-white transition-colors block py-0.5">Custom E-Commerce & Shopify Plus</Link></li>
                    <li><Link to="/services/wordpress-website-design" className="hover:text-white transition-colors block py-0.5">WordPress & Headless CMS Engineering</Link></li>
                    <li><Link to="/services/web-application-development" className="hover:text-white transition-colors block py-0.5">Custom SaaS & Cloud Web Applications</Link></li>
                    <li><Link to="/services/mobile-app-development" className="hover:text-white transition-colors block py-0.5">iOS & Android Mobile App Development</Link></li>
                    <li><Link to="/services/website-designing" className="hover:text-white transition-colors block py-0.5">UI/UX Wireframing & Design Systems</Link></li>
                    <li><Link to="/services/manufacturer-website-design" className="hover:text-white transition-colors block py-0.5">Manufacturing & Industrial Web Portals</Link></li>
                  </ul>
                </div>
              )}
            </div>

          </div>

          {/* Column 3: Industries Served & Agency Links */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 pb-2 text-xs font-heading font-bold uppercase tracking-wider text-slate-300">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>Sectors & Quick Links</span>
            </div>

            {/* Tap to Open: Industry Served */}
            <div className="border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-900/50 transition-colors hover:border-slate-700">
              <button
                onClick={() => toggleSection('industries')}
                className="w-full p-4 text-left flex items-center justify-between gap-3 text-white font-heading font-semibold text-sm hover:text-blue-400 transition-colors"
                aria-expanded={openSections.industries}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Industries Served</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openSections.industries ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>

              {openSections.industries && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-800/60 animate-in fade-in duration-200">
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {[
                      'Automotive & EV Mobility Solutions',
                      'Manufacturing & Heavy Industrial Engineering',
                      'BFSI, Banking & Fintech Acceleration',
                      'Healthcare, Pharma & MedTech Systems',
                      'Education, University & EdTech Portals',
                      'FMCG, Retail & D2C Consumer Goods',
                      'Luxury, Real Estate & Heritage Brands'
                    ].map((ind, i) => (
                      <li key={i} className="hover:text-white transition-colors py-0.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Tap to Open: Agency & Links */}
            <div className="border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-900/50 transition-colors hover:border-slate-700">
              <button
                onClick={() => toggleSection('agency')}
                className="w-full p-4 text-left flex items-center justify-between gap-3 text-white font-heading font-semibold text-sm hover:text-blue-400 transition-colors"
                aria-expanded={openSections.agency}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Agency & Links</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openSections.agency ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>

              {openSections.agency && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-800/60 animate-in fade-in duration-200">
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    <li><a href="/#marcom" className="hover:text-white transition-colors block py-0.5">Why Dev Digit Solutions</a></li>
                    <li><a href="/#portfolio" className="hover:text-white transition-colors block py-0.5">Featured Work & Case Studies</a></li>
                    <li><a href="/#case-studies" className="hover:text-white transition-colors block py-0.5">Verified Client Analytics Results</a></li>
                    <li><a href="/#testimonials" className="hover:text-white transition-colors block py-0.5">Executive Client Testimonials</a></li>
                    <li><a href="/#faq" className="hover:text-white transition-colors block py-0.5">Frequently Asked Questions</a></li>
                    <li><Link to="/services" className="hover:text-white transition-colors block py-0.5">Complete Services Directory Hub</Link></li>
                    <li className="pt-1">
                      <button onClick={onOpenAudit} className="text-blue-400 hover:underline flex items-center gap-1 font-semibold">
                        <span>Claim Free Website Audit</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Direct Contact Details */}
            <div className="p-4 rounded-2xl bg-slate-900/30 border border-slate-800/60 text-xs space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{siteData.brand.address.street}, {siteData.brand.address.city}, {siteData.brand.address.state} {siteData.brand.address.pin}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <a href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`} className="text-blue-400 hover:underline">
                  {siteData.brand.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${siteData.brand.email}`} className="text-blue-400 hover:underline">
                  {siteData.brand.email}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800/80 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Dev Digit Solutions. All rights reserved. | The Digital Solutions Company</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
