import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Calculator,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function RoiCalculatorPage() {
  const { addLead } = useApp();

  // Inputs
  const [monthlyVisitors, setMonthlyVisitors] = useState(25000);
  const [conversionRate, setConversionRate] = useState(1.5);
  const [avgOrderValue, setAvgOrderValue] = useState(2500);
  const [monthlyAdSpend, setMonthlyAdSpend] = useState(150000);

  // Form submit state
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadContact, setLeadContact] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Growth & ROAS Calculator | Dev Digit Solutions";
  }, []);

  // Current calculations
  const currentOrders = Math.round(monthlyVisitors * (conversionRate / 100));
  const currentMonthlyRevenue = currentOrders * avgOrderValue;

  // Optimized projections with Dev Digit Solutions:
  // 1. Traffic multiplier (+140% organic + paid efficiency) -> 2.4x
  // 2. Conversion rate boost (+60% from speed, CRO & checkout optimization) -> conversionRate * 1.6
  // 3. ROAS boost on ad spend -> 3.8x
  const optimizedVisitors = Math.round(monthlyVisitors * 1.9);
  const optimizedConversionRate = Number((conversionRate * 1.55).toFixed(2));
  const optimizedOrders = Math.round(optimizedVisitors * (optimizedConversionRate / 100));
  const optimizedMonthlyRevenue = Math.round(optimizedOrders * avgOrderValue);
  const monthlyRevenueLift = Math.max(0, optimizedMonthlyRevenue - currentMonthlyRevenue);
  const annualRevenueLift = monthlyRevenueLift * 12;
  const projectedRoas = Number(((optimizedMonthlyRevenue * 0.45) / (monthlyAdSpend || 1)).toFixed(1));

  const handleCaptureLead = (e) => {
    e.preventDefault();
    addLead({
      name: leadContact.name,
      phone: leadContact.phone,
      email: leadContact.email,
      service: 'Growth & ROAS Strategy Retainer',
      source: 'ROI Calculator Page',
      message: `Calculated Projection: Current Revenue ₹${currentMonthlyRevenue.toLocaleString('en-IN')}/mo -> Projected Revenue ₹${optimizedMonthlyRevenue.toLocaleString('en-IN')}/mo (Monthly Lift: ₹${monthlyRevenueLift.toLocaleString('en-IN')}). Ad Spend: ₹${monthlyAdSpend.toLocaleString('en-IN')}.`
    });
    setLeadSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-20">
      
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-4">
            <Calculator className="w-3.5 h-3.5" /> Interactive Revenue Forecasting Engine
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Calculate Your Revenue Growth & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Blended ROAS Potential
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            See how much incremental revenue Dev Digit Solutions can unlock through conversion rate optimization (CRO), sub-second engineering, and data-driven ad management.
          </p>
        </div>
      </section>

      {/* Calculator Body */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Interactive Sliders */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h2 className="font-heading font-bold text-xl text-slate-900">
                  Your Current Digital Metrics
                </h2>
                <span className="text-xs text-slate-500">Adjust sliders to fit your brand</span>
              </div>

              {/* Slider 1: Monthly Visitors */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-700">Monthly Website Traffic</span>
                  <span className="text-blue-600 font-heading font-bold text-base">
                    {monthlyVisitors.toLocaleString('en-IN')} visitors
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="200000"
                  step="1000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-600">
                  <span>2,000</span>
                  <span>100,000</span>
                  <span>200,000+</span>
                </div>
              </div>

              {/* Slider 2: Current Conversion Rate */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-700">Current Conversion Rate (Lead or Sale)</span>
                  <span className="text-blue-600 font-heading font-bold text-base">
                    {conversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.4"
                  max="6.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-600">
                  <span>0.4% (Industry Avg: 1.2%)</span>
                  <span>3.0%</span>
                  <span>6.0%</span>
                </div>
              </div>

              {/* Slider 3: Average Order Value / Deal Value */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-700">Average Order Value (AOV) / Customer Value</span>
                  <span className="text-blue-600 font-heading font-bold text-base">
                    ₹{avgOrderValue.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-600">
                  <span>₹500</span>
                  <span>₹25,000</span>
                  <span>₹50,000</span>
                </div>
              </div>

              {/* Slider 4: Monthly Ad Spend */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-700">Monthly Performance Ad Spend (Meta & Google)</span>
                  <span className="text-blue-600 font-heading font-bold text-base">
                    ₹{monthlyAdSpend.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1500000"
                  step="10000"
                  value={monthlyAdSpend}
                  onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-600">
                  <span>₹20,000</span>
                  <span>₹7,50,000</span>
                  <span>₹15,00,000</span>
                </div>
              </div>

              {/* Baseline Summary */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex justify-between items-center">
                <span>Current Baseline Monthly Revenue:</span>
                <strong className="text-slate-900 font-heading font-bold text-sm">
                  ₹{currentMonthlyRevenue.toLocaleString('en-IN')} / mo
                </strong>
              </div>
            </div>

            {/* Right Column: Projected Impact with Dev Digit Solutions */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
                      Forecasted Potential
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl text-white mt-0.5">
                      With Dev Digit Solutions
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/40 text-blue-300 text-xs font-bold">
                    100% Data-Driven
                  </span>
                </div>

                {/* Primary Metric: Projected Annual Revenue Lift */}
                <div className="py-6 space-y-1">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Projected Annual Revenue Lift
                  </div>
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    +₹{annualRevenueLift.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-slate-400">
                    That is an extra <strong className="text-emerald-400">+₹{monthlyRevenueLift.toLocaleString('en-IN')}</strong> per month in net revenue.
                  </div>
                </div>

                {/* 3 Pillars Breakdown Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs text-slate-400">Optimized Conv. Rate</div>
                    <div className="text-xl font-bold font-heading text-white mt-1">
                      {optimizedConversionRate}%
                    </div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">+55% Lift (CRO)</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-xs text-slate-400">Target Monthly Sales</div>
                    <div className="text-xl font-bold font-heading text-white mt-1">
                      {optimizedOrders}
                    </div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">+{optimizedOrders - currentOrders} orders/mo</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                    <div className="text-xs text-slate-400">Projected Ad ROAS</div>
                    <div className="text-xl font-bold font-heading text-blue-400 mt-1">
                      {Math.max(2.8, projectedRoas)}x
                    </div>
                    <div className="text-[10px] text-slate-300 mt-0.5">Meta & Google Blended</div>
                  </div>
                </div>

                {/* What Delivers This Lift */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Next.js & Shopify sub-second page speed (+28% checkout completion)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>High-intent SEO + Answer Engine Optimization (AEO) search domination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>UGC video ad creative scaling with 4.2x commercial ROAS</span>
                  </div>
                </div>

              </div>

              {/* Lead Capture Box for this Calculation */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm">
                {leadSubmitted ? (
                  <div className="text-center py-6 space-y-2">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-slate-900">
                      Strategy Roadmap Queued!
                    </h4>
                    <p className="text-xs text-slate-600">
                      Our growth analysts have saved your custom model. We will prepare your step-by-step roadmap and connect shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleCaptureLead} className="space-y-3">
                    <div>
                      <h4 className="font-heading font-bold text-base text-slate-900">
                        Lock In This Growth Strategy
                      </h4>
                      <p className="text-xs text-slate-500">
                        Leave your contact to get a full 15-page bespoke execution roadmap tailored to these numbers.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={leadContact.name}
                        onChange={(e) => setLeadContact({ ...leadContact, name: e.target.value })}
                        className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="+91 Mobile Phone"
                        value={leadContact.phone}
                        onChange={(e) => setLeadContact({ ...leadContact, phone: e.target.value })}
                        className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                      />
                    </div>

                    <input
                      type="email"
                      required
                      placeholder="Work Email"
                      value={leadContact.email}
                      onChange={(e) => setLeadContact({ ...leadContact, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Claim My Custom Growth Roadmap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
