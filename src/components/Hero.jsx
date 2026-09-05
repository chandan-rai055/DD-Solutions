import React from 'react';
import { siteData } from '../data/siteData';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenEnquire, onOpenAudit }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-100">
      {/* Soft ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-100/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Recognition Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 text-xs text-slate-700 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              <span className="font-semibold text-blue-700 tracking-wide uppercase">Top Rated Agency</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">Digital Growth & Web Engineering</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.15] mb-4">
              Award-Winning <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Digital Marketing
              </span> & Tech Solutions
            </h1>

            {/* Punchy Subtitle */}
            <p className="text-xl sm:text-2xl font-heading font-semibold text-blue-700 mb-5 tracking-wide">
              {siteData.brand.heroSubtitle}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {siteData.brand.heroDescription}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onOpenEnquire}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-heading font-semibold text-base transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Get Free Website Audit</span>
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>10+ Years of Tech & Marketing Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>250+ Renowned Brands Scaled</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Measurable Revenue Velocity</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Central Clean Card: Dev Digit Solutions Badge */}
              <div className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/60 rounded-full blur-2xl group-hover:bg-blue-200/60 transition-all duration-500" />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                    {siteData.brand.tagline}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">EST. 2013</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
                    Powering Ahead With <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 text-4xl sm:text-5xl font-black">
                      10+ Years
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Uniting cutting-edge web engineering with full-funnel performance marketing, SEO domination, and data analytics across India & worldwide.
                  </p>
                </div>

                {/* Micro Metric Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-blue-600 font-heading font-bold text-xl">280%+</div>
                    <div className="text-xs text-slate-500 mt-0.5">Average Traffic Surge</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-blue-600 font-heading font-bold text-xl">4.8x</div>
                    <div className="text-xs text-slate-500 mt-0.5">Commercial Ad ROAS</div>
                  </div>
                </div>

                {/* Client Rating Preview */}
                <div className="mt-4 p-3 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    ★
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-900">4.9 / 5.0 Rating</strong> across 250+ enterprise partnerships
                  </div>
                </div>
              </div>

              {/* Floating Decorative Metric Pill */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Average Retention</div>
                  <div className="text-sm font-heading font-bold text-slate-900">5+ Years With Partners</div>
                </div>
              </div>

              {/* Floating Award Pill */}
              <div className="hidden sm:flex absolute -top-5 -right-4 bg-white border border-slate-200 rounded-2xl p-3 shadow-xl items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs font-semibold text-slate-800">
                  Industry Excellence Winner
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
