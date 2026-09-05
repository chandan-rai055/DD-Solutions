import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Clear Answers
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Everything you need to know about partnering with Dev Digit Solutions.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {siteData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50 border-blue-400 shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-base sm:text-lg text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-sm text-slate-600">
            Have a custom software or growth requirement?{' '}
            <a
              href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
              className="text-blue-600 font-semibold hover:underline"
            >
              Call our team directly at {siteData.brand.phone}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
