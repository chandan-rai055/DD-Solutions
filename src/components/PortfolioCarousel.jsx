import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, Award } from 'lucide-react';

export default function PortfolioCarousel({ onOpenEnquire }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(siteData.portfolioProjects.map(p => p.category)))];

  const filteredProjects = selectedFilter === 'All'
    ? siteData.portfolioProjects
    : siteData.portfolioProjects.filter(p => p.category === selectedFilter);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const displayedProjects = filteredProjects.length <= 3
    ? filteredProjects
    : Array.from({ length: 3 }, (_, i) => filteredProjects[(currentIndex + i) % filteredProjects.length]);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Featured Work & Campaigns
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              A glimpse of <span className="text-blue-600">digital excellence</span> <br className="hidden sm:block"/>
              conceptualized with innovation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              From enterprise automotive rollouts and high-converting platforms to viral campaigns.
            </p>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="w-12 h-12 rounded-full border border-slate-300 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-700 flex items-center justify-center transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="w-12 h-12 rounded-full border border-slate-300 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-700 flex items-center justify-center transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedFilter(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-heading font-semibold whitespace-nowrap transition-all ${
                selectedFilter === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid / Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col"
            >
              {/* Image Container with Fallback/Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Metric pill */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 text-[11px] font-heading font-bold text-blue-600 flex items-center gap-1.5 shadow-md">
                  <Award className="w-3 h-3" />
                  <span>{project.stats}</span>
                </div>

                {/* Category tag */}
                <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-medium text-white">
                  {project.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Case breakdown</span>
                  <button
                    onClick={onOpenEnquire}
                    className="inline-flex items-center gap-1 text-xs font-heading font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Enquire Similar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
