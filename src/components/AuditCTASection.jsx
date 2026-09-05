import React, { useState } from 'react';
import { Sparkles, Shield, Send, CheckCircle2, Clock } from 'lucide-react';

export default function AuditCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    service: 'Full 360° Digital & Tech Audit'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="audit" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Complimentary Brand Analysis
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Get a Free SEO & <br />
              <span className="text-blue-600">
                Digital Audit
              </span> for your Brand
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Uncover technical crawl bottlenecks, keyword gaps, conversion leakage, and competitor ad bidding strategies. Prepared and delivered within 24 hours by Dev Digit Solutions analysts.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { title: "Technical SEO & Speed Score", desc: "Core Web Vitals, mobile UX, indexation barriers" },
                { title: "Competitor Market Share Analysis", desc: "Keyword gap identification & paid search bid opportunities" },
                { title: "Conversion & Funnel Recommendations", desc: "Immediate quick wins to boost lead velocity & ROAS" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 text-left">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm sm:text-base text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-blue-600" /> 100% Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-600" /> 24-Hr Turnaround
              </span>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">
                    Audit Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you! Our technical audit team is reviewing your digital footprint. We will email your custom report within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-slate-300 text-xs text-slate-700 hover:bg-slate-50"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-2">
                    Request Your Free Audit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Zero obligation. Pure actionable data to scale your online presence.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
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

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://yourbrand.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      Primary Area of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
                    >
                      <option value="Full 360° Digital & Tech Audit">Full 360° Digital & Tech Audit</option>
                      <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                      <option value="AEO & Generative AI Search (GEO)">AEO & Generative AI Search (GEO)</option>
                      <option value="Google Ads / Performance PPC">Google Ads / Performance PPC</option>
                      <option value="Website & Web App Development">Website & Web App Development</option>
                      <option value="Social Media & UGC Video Marketing">Social Media & UGC Video Marketing</option>
                      <option value="Creative & Brand Strategy">Creative & Brand Strategy</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Claim My Free Brand Audit</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
