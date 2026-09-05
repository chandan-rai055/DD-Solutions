import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import {
  Palette,
  Search,
  TrendingUp,
  Code2,
  Target,
  Video,
  Share2,
  Users2,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Palette,
  Search,
  TrendingUp,
  Code2,
  Target,
  Video,
  Share2,
  Users2
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 mb-4 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> 360° Integrated Capabilities
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Comprehensive Digital Marketing & <br />
            <span className="text-blue-600">Technology Services</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Click on any service below to explore our full deliverables, methodology, and case studies.
          </p>
        </div>

        {/* Services Grid (8 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.services.map((svc) => {
            const Icon = iconMap[svc.iconName] || Palette;
            return (
              <div
                key={svc.id}
                className="group relative flex flex-col justify-between bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex-1"
              >
                {/* Blue bottom accent stripe on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-100/70 border border-blue-200 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {svc.description}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 mb-6 pt-4 border-t border-slate-200">
                    {svc.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Link to Dedicated Service Page */}
                <Link
                  to={`/services/${svc.id === 'creative' ? 'creative-communication' : svc.id === 'sem' ? 'search-engine-marketing' : svc.id === 'web-development' ? 'website-development' : svc.id}`}
                  className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors group/btn pt-2"
                >
                  <span>View Full Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-heading font-bold text-xl text-slate-900">
              Looking for a tailored, multi-channel growth roadmap?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Explore our complete directory of 30+ specialized digital & software services.
            </p>
          </div>
          <Link
            to="/services"
            className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all whitespace-nowrap"
          >
            Explore All 30+ Services →
          </Link>
        </div>

      </div>
    </section>
  );
}
