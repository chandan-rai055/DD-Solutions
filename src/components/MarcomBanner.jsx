import React from 'react';
import { siteData } from '../data/siteData';
import { ShieldCheck, Compass, Lightbulb, BarChart3, Check } from 'lucide-react';

export default function MarcomBanner({ onOpenEnquire }) {
  const pillars = [
    {
      icon: Compass,
      title: "Strategic Brand Positioning",
      desc: "Deep market research and competitor benchmarking that carve a distinctive, high-converting presence for your business."
    },
    {
      icon: Lightbulb,
      title: "High-Performance Engineering",
      desc: "Robust, lightning-fast web applications, SEO-first architecture, and intuitive user experiences built for conversion."
    },
    {
      icon: BarChart3,
      title: "Quantitative Growth Engine",
      desc: "Obsessive keyword ranking, programmatic paid advertising, and attribution modeling turning traffic into pipeline revenue."
    }
  ];

  return (
    <section id="marcom" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5" /> {siteData.brand.tagline}
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Assuring Seamless <br />
                <span className="text-blue-600">
                  Digital Marketing & Engineering
                </span> Excellence
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dev Digit Solutions bridges the gap between high-end software development and aggressive growth marketing.
                We eliminate disconnected agencies by giving you an integrated tech and marketing powerhouse under one roof.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "10+ Years of proven enterprise track record",
                  "Direct partner-level involvement on strategic accounts",
                  "Full-stack developers and seasoned growth strategists",
                  "Zero vanity metrics — 100% focus on verifiable commercial impact"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenEnquire}
                  className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm shadow-xl shadow-blue-600/25 transition-all"
                >
                  Partner With Us Today
                </button>
              </div>
            </div>

            {/* Right Pillars Column */}
            <div className="lg:col-span-6 space-y-4">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                          {p.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
