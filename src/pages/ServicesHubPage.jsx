import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesNavigation } from '../data/servicesData';
import { Search, Sparkles, Layers, ArrowUpRight, ChevronDown } from 'lucide-react';

export default function ServicesHubPage({ onOpenAudit }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold uppercase tracking-wider text-blue-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Complete Service Directory
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Our 360° Marketing & <br />
            <span className="text-blue-600">Technology Services</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Explore our end-to-end digital solutions designed to accelerate brand reach, dominate search, and engineer world-class platforms.
          </p>

          {/* Quick Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. SEO, AEO, Website, Reels)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900 text-sm shadow-sm"
            />
          </div>
        </div>

        {/* 4 Pillars Grid Matching DigiStreet Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesNavigation.map((col, idx) => {
            const filteredItems = col.items.filter((item) => {
              if (!searchTerm) return true;
              const matchesTitle = item.title.toLowerCase().includes(searchTerm.toLowerCase());
              const matchesSub = item.subItems?.some(s => s.title.toLowerCase().includes(searchTerm.toLowerCase()));
              return matchesTitle || matchesSub;
            });

            if (filteredItems.length === 0) return null;

            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Title with Brand Blue top bar */}
                  <div className="pb-3 mb-6 border-b-2 border-blue-600 flex items-center justify-between">
                    <h2 className="font-heading font-bold text-sm tracking-wider text-slate-900 uppercase">
                      {col.category}
                    </h2>
                    <Layers className="w-4 h-4 text-blue-600" />
                  </div>

                  {/* Items list */}
                  <div className="space-y-4">
                    {filteredItems.map((item, iIdx) => {
                      const hasSub = !!item.subItems;
                      const isHovered = hoveredSubmenu === item.slug;

                      if (!hasSub) {
                        return (
                          <div key={iIdx} className="py-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Link
                                to={`/services/${item.slug}`}
                                className="font-heading font-bold text-sm sm:text-base text-slate-800 hover:text-blue-600 transition-colors"
                              >
                                {item.title}
                              </Link>
                              {item.badge && (
                                <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider ${
                                  item.badge === 'NEW'
                                    ? 'bg-slate-900 text-white'
                                    : 'bg-blue-600 text-white font-bold shadow-sm'
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={iIdx}
                          className="py-1 group/item relative"
                          onMouseEnter={() => setHoveredSubmenu(item.slug)}
                          onMouseLeave={() => setHoveredSubmenu(null)}
                        >
                          <div className="flex items-center justify-between gap-2 cursor-pointer select-none">
                            <Link
                              to={`/services/${item.slug}`}
                              className={`font-heading font-bold text-sm sm:text-base transition-colors ${
                                isHovered ? 'text-blue-600' : 'text-slate-800 hover:text-blue-600'
                              }`}
                            >
                              {item.title}
                            </Link>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                                isHovered ? 'rotate-180 text-blue-600' : 'group-hover/item:text-slate-600'
                              }`}
                            />
                          </div>

                          {/* Hover Popup: Only opens when mouse cursor is on this service */}
                          {isHovered && (
                            <div className="mt-2 pl-3 py-2.5 pr-3 bg-blue-50/60 rounded-r-2xl border-l-2 border-blue-600 space-y-1.5 animate-in fade-in duration-150 shadow-sm">
                              {item.subItems.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  to={`/services/${sub.slug}`}
                                  className={`block text-xs py-0.5 transition-colors ${
                                    sub.isOverview
                                      ? 'font-bold text-slate-900 hover:text-blue-600'
                                      : 'text-slate-600 hover:text-blue-600'
                                  }`}
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200">
                  <button
                    onClick={onOpenAudit}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Request Category Audit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
