import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { siteData } from '../../data/siteData';

export default function EnquireModal({ isOpen, onClose, preselectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Creative & Communication',
    message: ''
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
              Thank You for Reaching Out!
            </h3>
            <p className="text-sm text-slate-600">
              A Dev Digit Solutions partner will connect with you within 2-4 business hours to discuss your project.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-blue-600 text-white font-heading font-bold text-xs hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">
                Start A Conversation
              </span>
              <h3 className="font-heading font-bold text-2xl text-slate-900 mt-1">
                Let's discuss your project
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Tell us your vision, and our team will prepare a custom roadmap.
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
                <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
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
                <label className="block text-xs font-medium text-slate-700 mb-1">Work Email *</label>
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
              <label className="block text-xs font-medium text-slate-700 mb-1">Service Required</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm"
              >
                {siteData.services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
                <option value="Full 360° Tech & Growth Retainer">Full 360° Tech & Growth Retainer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Brief Description (Optional)</label>
              <textarea
                rows="3"
                placeholder="Share a few details about your project or timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Project Enquiry</span>
              <Send className="w-4 h-4" />
            </button>

            <div className="pt-2 text-center text-xs text-slate-500">
              Direct Hotline: <strong className="text-slate-900">{siteData.brand.phone}</strong>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
