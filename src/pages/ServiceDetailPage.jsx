import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesDetailMap, servicesNavigation } from '../data/servicesData';
import { siteData } from '../data/siteData';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Send,
  Clock,
  ChevronRight,
  TrendingUp,
  Award,
  Layers,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ServiceDetailPage({ onOpenEnquire, onOpenAudit }) {
  const { addLead } = useApp();
  const { slug } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    notes: ''
  });

  // Scroll to top on page load / slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Lookup details or fallback to default
  const service = servicesDetailMap[slug] || {
    title: slug
      ? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
      : "Digital Marketing & Technology Solution",
    category: "SPECIALIZED CAPABILITY",
    tagline: "Tailored Growth, High-Converting Media & Enterprise Engineering",
    overview: `Dev Digit Solutions delivers comprehensive, performance-first ${slug} designed to scale your business revenue and establish authoritative market presence.`,
    heroStat: "Proven 100% Data-Backed Execution",
    deliverables: [
      "Custom Strategic Roadmap & Competitive Audit",
      "End-to-End Campaign Execution & Architecture",
      "High-Converting Visual Assets & Copywriting",
      "Technical Implementation & Testing",
      "Real-Time Analytics & Attribution Dashboard",
      "Dedicated Account Director & Senior Strategist"
    ],
    features: [
      { title: "Bespoke Strategy", desc: "Every campaign is customized to your exact commercial targets, margins, and target personas." },
      { title: "Measurable Impact", desc: "We track pipeline revenue and verified customer acquisitions rather than vanity impressions." },
      { title: "Continuous Optimization", desc: "Iterative testing and refinement to keep your brand ahead of market shifts." }
    ],
    process: [
      { step: "01", title: "Discovery & Analysis", desc: "Audit existing assets, competitor strategies, and target audience data." },
      { step: "02", title: "Strategy & Plan", desc: "Develop the comprehensive roadmap and conversion architecture." },
      { step: "03", title: "Execution & Launch", desc: "Deploy high-impact creative, code, and marketing campaigns." },
      { step: "04", title: "Scale & Optimize", desc: "Measure performance data and scale successful channels aggressively." }
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      website: formData.website,
      service: service.title,
      source: `Service Detail: ${service.title}`,
      message: formData.notes || `Inquiry for ${service.title}`
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-28 pb-20">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-slate-200 text-xs text-slate-500 flex items-center gap-2">
        <Link to="/" className="hover:text-blue-600 transition-colors font-medium">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to="/services" className="hover:text-blue-600 transition-colors font-medium">Services</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold">{service.title}</span>
      </div>

      {/* Hero Banner (Clean Light Theme) */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              {/* Category & Badge */}
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                  {service.category}
                </span>
                {service.badge && (
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    service.badge === 'NEW'
                      ? 'bg-slate-900 text-white'
                      : 'bg-blue-600 text-white shadow-sm'
                  }`}>
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Main Title */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
                {service.title}
              </h1>

              {/* Tagline */}
              <p className="text-lg sm:text-xl font-heading font-semibold text-blue-600 mb-6">
                {service.tagline}
              </p>

              {/* Overview */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                {service.overview}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenEnquire(service.title)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Proposal for {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenAudit}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-heading font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Get Free Audit</span>
                </button>
              </div>

              {/* Trust signals */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-blue-600" /> Guaranteed Confidentiality</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-600" /> Dedicated Account Director</span>
                <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-blue-600" /> 100% Customized Execution</span>
              </div>
            </div>

            {/* Right Card Highlight */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100 relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
                  <TrendingUp className="w-3.5 h-3.5" /> Key Impact Benchmark
                </div>
                
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-2">
                  {service.heroStat}
                </div>
                
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  Tailored specifically for businesses aiming to expand search domination, accelerate conversion velocity, and scale sustainably.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                    Core Capabilities Covered:
                  </div>
                  {service.deliverables.slice(0, 4).map((d, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center justify-between"
                  >
                    <span>Direct Strategist Line: {siteData.brand.phone}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Scope of Deliverables
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-3">
              What's Included in Our {service.title} Engagement
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Every deliverable is crafted in-house by senior engineers, strategists, and creatives with zero outsourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-blue-600/20">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Executed according to industry best practices, customized to your brand’s growth goals.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Features / Why Dev Digit */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {service.features.map((f, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6 font-heading font-bold text-lg">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Proven Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Our Methodology
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-3">
              How We Execute From Day 1 to Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 shadow-sm relative group"
              >
                <div className="text-3xl font-heading font-black text-blue-600 mb-4">
                  {p.step}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Service Inquiry Form (White Theme) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900">
                  Inquiry for {service.title} Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you! Our dedicated practice lead for {service.title} will contact you within 2-4 hours with a custom proposal.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-slate-300 text-xs text-slate-700 hover:bg-slate-50"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={`https://wa.me/917071501382?text=Hi%20Dev%20Digit%20Solutions%2C%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(service.title)}.%20Name:%20${encodeURIComponent(formData.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    Get In Touch
                  </span>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                    Book a Strategy Session for {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Share your project scope or objectives. We will respond with a transparent timeline and quote.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Website URL *</label>
                    <input
                      type="url"
                      required
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Project Details or Goals (Optional)</label>
                  <textarea
                    rows="3"
                    placeholder="Tell us what you're aiming to achieve, target timeline, or budget..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-slate-900 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry for {service.title}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Explore All Other Services directory */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4">
            Explore More Capabilities
          </h3>
          <p className="text-slate-600 text-sm mb-8">
            Dev Digit Solutions offers an integrated suite of 360° technology and growth services.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {servicesNavigation.flatMap(c => c.items).map((item, idx) => (
              <Link
                key={idx}
                to={`/services/${item.slug}`}
                className="px-4 py-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 text-xs font-semibold text-slate-700 transition-all"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
