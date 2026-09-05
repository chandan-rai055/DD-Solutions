import React from 'react';
import { siteData } from '../data/siteData';
import { ArrowUpRight, BarChart2, CheckCircle } from 'lucide-react';

export default function CaseStudySpotlight({ onOpenAudit }) {
  return (
    <section id="case-studies" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold uppercase tracking-wider mb-4">
            <BarChart2 className="w-3.5 h-3.5" /> Data-Driven Proof
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            SEO Case Studies & <span className="text-blue-600">Client Results</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Ten engagements documented end to end, with every figure verified directly from client analytics — among them SKF, JBM Group, Sirca Paints and Sudhir Group.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 hover:border-blue-400 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Top tag & client */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100">
                    {cs.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {cs.sector}
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="my-6">
                  <div
                    className="font-heading font-extrabold text-4xl lg:text-5xl tracking-tight text-blue-600"
                  >
                    {cs.metric}
                  </div>
                  <div className="font-heading font-semibold text-sm text-slate-800 mt-1">
                    {cs.metricLabel}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {cs.client}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cs.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Verified Data
                </span>
                <button
                  onClick={onOpenAudit}
                  className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                >
                  <span>Audit Your Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
