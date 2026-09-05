import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Target,
  Code2,
  Phone
} from 'lucide-react';

export default function AboutPage({ onOpenEnquire, onOpenAudit }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "About Dev Digit Solutions | 10+ Years of Digital & Tech Innovation";
  }, []);

  const timeline = [
    {
      year: "2013",
      title: "Agency Inception in Noida",
      desc: "Started as a dedicated search engine marketing and web design boutique, delivering outsized ROI for retail and industrial brands."
    },
    {
      year: "2016",
      title: "Expanded to Full-Funnel Growth",
      desc: "Crossed 50+ enterprise client milestone. Launched programmatic display, Google Ads performance PPC, and conversion rate optimization (CRO)."
    },
    {
      year: "2019",
      title: "Enterprise Web & Mobile Engineering Lab",
      desc: "Established custom software division specialized in React, Next.js, native iOS/Android, and high-load microservices."
    },
    {
      year: "2023",
      title: "AEO, Generative AI Search & UGC Production",
      desc: "Pioneered Answer Engine Optimization (Perplexity/ChatGPT search domination) and creator-driven high-converting UGC reels."
    },
    {
      year: "Today",
      title: "250+ Brands Scaled & 99.4% Client Satisfaction",
      desc: "Managing high-ticket growth campaigns and enterprise applications across healthcare, D2C wellness, luxury jewellery, and hospitality."
    }
  ];

  const values = [
    {
      icon: TrendingUp,
      title: "Measurable Revenue Velocity",
      desc: "Vanity metrics don't pay bills. We align every rupee of ad spend and every line of code directly with revenue, customer acquisition cost (CAC), and ROAS."
    },
    {
      icon: Code2,
      title: "Architectural Precision",
      desc: "No fragile templates or sluggish code. We engineer high-speed, scalable web and mobile software adhering to zero-latency Core Web Vitals standards."
    },
    {
      icon: ShieldCheck,
      title: "Radical Transparency",
      desc: "Live dashboards, direct WhatsApp client access, clear deliverables, and accountable sprint reporting. Zero hidden costs or excuses."
    },
    {
      icon: Target,
      title: "Creative Courage",
      desc: "In an ocean of generic marketing, we craft bold visual branding, compelling storytelling hooks, and scroll-stopping video creative that commands attention."
    }
  ];

  const leadership = [
    {
      name: "Aryan Varma",
      role: "Managing Director & Chief Growth Architect",
      bio: "12+ years steering multi-million dollar performance marketing pipelines, enterprise software architectures, and commercial growth strategy.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Rohan Deshmukh",
      role: "Head of Engineering & Cloud Architecture",
      bio: "Former enterprise systems architect with deep expertise in Next.js, Node.js, distributed databases, and sub-second web experiences.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Priya Sundaram",
      role: "VP of Brand Strategy & Creative Experience",
      bio: "Award-winning creative director specializing in luxury visual identity, UI/UX interaction design, and high-converting multimedia narratives.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Agency Profile & Heritage
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]">
              Engineered for Impact. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Driven by Results.
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-xl mt-6 leading-relaxed">
              Dev Digit Solutions is a premier digital marketing and software engineering firm based in Sector 65, Noida. For over a decade, we have helped ambitious enterprises, D2C brands, and tech innovators build market dominance.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenEnquire}
                className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm shadow-xl shadow-blue-600/25 transition-all"
              >
                Work With Us
              </button>
              <button
                onClick={onOpenAudit}
                className="px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-semibold text-sm transition-all"
              >
                Claim Free Website Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Row */}
      <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {siteData.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-blue-400">
                  {stat.value}{stat.suffix}
                </div>
                <div className="font-heading font-semibold text-sm text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are & The Dual Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">The Dev Digit Advantage</span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
                Why Top Brands Pick Us Over Traditional Agencies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Most agencies are fractured: you have to hire a marketing agency for SEO/Ads and a separate software house for development. When things fail, both sides blame each other.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Dev Digit Solutions closes that gap completely.</strong> Our growth marketers sit alongside our senior full-stack developers, UI/UX designers, and data scientists under one roof. We optimize code for Core Web Vitals, build tailored conversion funnels, and test ad creative in real-time.
              </p>
              
              <div className="pt-4 space-y-3">
                {[
                  "In-house team of 45+ engineers, growth marketers, and designers",
                  "Direct account manager & live WhatsApp client updates",
                  "Transparent reporting with zero black-box vanity metrics",
                  "Proven track record scaling Vitamuch (+340%), Raj Jwellers (+280%), and Wehere App"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-3xl opacity-10 blur-xl"></div>
                <div className="relative bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div>
                      <div className="font-heading font-bold text-lg text-slate-900">Enterprise Office HQ</div>
                      <div className="text-xs text-slate-500">B-130, Sector 65, Noida, UP 201301</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                      Open 6 Days/Week
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200">
                      <div className="text-2xl font-extrabold text-blue-600 font-heading">24h</div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">Audit Turnaround</div>
                      <div className="text-[11px] text-slate-500">Comprehensive custom report</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border border-slate-200">
                      <div className="text-2xl font-extrabold text-blue-600 font-heading">99.4%</div>
                      <div className="text-xs font-semibold text-slate-800 mt-1">SLA Compliance</div>
                      <div className="text-[11px] text-slate-500">Dedicated sprint delivery</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
                      className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-heading font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-blue-400" />
                      <span>Speak with Our Strategists: {siteData.brand.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Our Principles
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-3">
              Values That Anchor Everything We Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => {
              const IconComponent = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10+ Year Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Our History
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-3">
              A Decade of Growth and Technological Evolution
            </h2>
          </div>

          <div className="relative border-l-2 border-blue-600/30 ml-4 sm:ml-32 space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                {/* Year Pill Left */}
                <div className="hidden sm:block absolute -left-32 top-0 font-heading font-extrabold text-lg text-blue-600 text-right w-24">
                  {item.year}
                </div>
                {/* Circle marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform" />
                
                <div className="sm:hidden text-xs font-bold text-blue-600 uppercase mb-1">
                  {item.year}
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Leadership
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-3">
              Meet the Visionaries Leading Dev Digit Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-1 mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Ready to Partner with a Real Growth Team?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Book a complimentary 30-minute discovery call with our senior leadership to audit your current architecture and outline your high-intent roadmap.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenEnquire}
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-sm shadow-xl shadow-blue-600/30 transition-all"
            >
              Start Conversation
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full border border-slate-700 hover:bg-slate-900 text-white font-heading font-semibold text-sm transition-all"
            >
              Visit Our Noida Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
