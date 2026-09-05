import React from 'react';
import { siteData } from '../data/siteData';
import { Calendar, Briefcase, Users, HeartHandshake } from 'lucide-react';

export default function StatsCounter() {
  const icons = [Calendar, Briefcase, HeartHandshake, Users];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {siteData.stats.map((stat, idx) => {
            const Icon = icons[idx] || Briefcase;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''
                } group`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-blue-600">
                    {stat.suffix}
                  </span>
                </div>
                <div className="font-heading font-semibold text-sm sm:text-base text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 hidden sm:block">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
