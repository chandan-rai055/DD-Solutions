import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Shield, Clock } from 'lucide-react';

export default function AuditModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-slate-900">
              Audit Queued Successfully!
            </h3>
            <p className="text-sm text-slate-600">
              Dev Digit Solutions strategists are preparing your comprehensive report. We will email it to {formData.email} within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-blue-600 text-white font-heading font-bold text-xs hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-600">
                <Sparkles className="w-3.5 h-3.5" /> 100% Free SEO & Growth Audit
              </span>
              <h3 className="font-heading font-bold text-2xl text-slate-900 mt-1">
                Audit Your Digital Presence
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Discover why competitors are outranking you and uncover high-impact growth opportunities.
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 Mobile"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Website URL to Audit *</label>
              <input
                type="url"
                required
                placeholder="https://yourbrand.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 py-1">
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-blue-600" /> Strictly Private</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-600" /> Delivered in 24 hrs</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Generate My Free Audit Report</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
