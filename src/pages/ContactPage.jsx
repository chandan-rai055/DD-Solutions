import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Shield,
  ArrowUpRight
} from 'lucide-react';

export default function ContactPage() {
  const { addLead } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Full 360° Tech & Growth Retainer',
    budget: '₹2,00,000 - ₹5,00,000 / mo',
    message: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Contact Dev Digit Solutions | Noida HQ & Global Client Inquiries";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      budget: formData.budget,
      source: 'Contact Us Page',
      message: formData.message
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-20">
      
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Start Your Project Today
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            Let’s Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Extraordinary Together
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Whether you are scaling a fast-growing D2C brand, rebuilding enterprise architecture, or launching a performance campaign, our senior directors are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Contact Cards & HQ Map */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Dev Digit Solutions Headquarters
                </h3>
                <p className="text-sm text-slate-600">
                  Drop by our Sector 65 Noida corporate office or connect via phone or WhatsApp.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Office Address</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">
                        {siteData.brand.address.street}
                      </div>
                      <div className="text-xs text-slate-600">
                        {siteData.brand.address.city}, {siteData.brand.address.state} - {siteData.brand.address.pin}, {siteData.brand.address.country}
                      </div>
                      <a
                        href={siteData.brand.address.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 mt-2"
                      >
                        <span>Open in Google Maps</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Hotline</div>
                      <a
                        href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-bold text-slate-900 hover:text-blue-600 block mt-0.5"
                      >
                        {siteData.brand.phone}
                      </a>
                      <div className="text-xs text-slate-500">Available Mon - Sat (9:30 AM - 7:30 PM IST)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">WhatsApp Quick Connect</div>
                      <a
                        href={siteData.brand.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-emerald-700 hover:text-emerald-800 block mt-0.5"
                      >
                        Chat with Project Lead →
                      </a>
                      <div className="text-xs text-slate-500">Instant responses within 15 minutes</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Inquiry</div>
                      <a
                        href={`mailto:${siteData.brand.email}`}
                        className="text-sm font-bold text-slate-900 hover:text-blue-600 block mt-0.5"
                      >
                        {siteData.brand.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-blue-900">
                  <strong>Client Portal & Support Notice:</strong> Existing clients can log in directly at <a href="/portal" className="underline font-bold text-blue-700">Client Portal</a> to view live sprint updates, milestones, and snapshots.
                </div>
              </div>

              {/* Noida Location Map Visual Preview */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Noida Technology Hub
                  </div>
                  <span className="text-[11px] text-slate-400">Sector 65 Metro Vicinity</span>
                </div>
                <div className="aspect-video w-full rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden relative group">
                  <iframe
                    title="Dev Digit Solutions Office Location"
                    src="https://maps.google.com/maps?q=B-130,+Sector+65,+Noida,+Uttar+Pradesh+201301&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 grayscale contrast-125 opacity-90 group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Consultation & Quote Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl">
                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">
                      Message Dispatched to Leadership!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, {formData.name}. Our senior practice director is reviewing your requirements and will reach out to <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 2 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-slate-300 text-xs text-slate-700 hover:bg-slate-50"
                      >
                        Submit Another Message
                      </button>
                      <a
                        href={`https://wa.me/917071501382?text=Hi%20Dev%20Digit%20Solutions%2C%20I%20just%20submitted%20a%20project%20inquiry%20via%20your%20Contact%20page.%20Name:%20${encodeURIComponent(formData.name)}`}
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
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        Inquiry Form
                      </span>
                      <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mt-1">
                        Tell Us About Your Project
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Fill in your details below and our solution architects will prepare a bespoke roadmap.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikramaditya Singhania"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
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
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Estimated Budget (INR)</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
                        >
                          <option value="₹50,000 - ₹1,50,000 / mo">₹50,000 - ₹1,50,000 / mo</option>
                          <option value="₹1,50,000 - ₹3,00,000 / mo">₹1,50,000 - ₹3,00,000 / mo</option>
                          <option value="₹3,00,000 - ₹7,50,000 / mo">₹3,00,000 - ₹7,50,000 / mo</option>
                          <option value="₹7,50,000+ Enterprise">₹7,50,000+ Enterprise Retainer</option>
                          <option value="One-Time Fixed Custom Project">One-Time Fixed Custom Project</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Primary Focus Area</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
                      >
                        <option value="Full 360° Tech & Growth Retainer">Full 360° Tech & Growth Retainer</option>
                        <option value="Search Engine Optimization (SEO & AEO)">Search Engine Optimization (SEO & AEO)</option>
                        <option value="Paid Ads & ROAS Optimization (Google/Meta)">Paid Ads & ROAS Optimization (Google/Meta)</option>
                        <option value="High-Speed Web & Next.js Development">High-Speed Web & Next.js Development</option>
                        <option value="Mobile App Development (iOS & Android)">Mobile App Development (iOS & Android)</option>
                        <option value="Brand Identity, Visuals & UGC Video">Brand Identity, Visuals & UGC Video</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Message / Project Goals (Optional)</label>
                      <textarea
                        rows="4"
                        placeholder="Tell us about your brand, current pain points, and what success looks like in 6 months..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm resize-none"
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 py-1">
                      <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-blue-600" /> Non-Disclosure Protected</span>
                      <span>Avg Response Time: &lt; 2 Hours</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Send Project Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
