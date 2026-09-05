import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ArrowLeft, ArrowRight, MessageSquareQuote, Star } from 'lucide-react';

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => (prev === 0 ? siteData.testimonials.length - 2 : prev - 1));
  };

  const next = () => {
    setStartIndex((prev) => (prev >= siteData.testimonials.length - 2 ? 0 : prev + 1));
  };

  const visible = [
    siteData.testimonials[startIndex % siteData.testimonials.length],
    siteData.testimonials[(startIndex + 1) % siteData.testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold uppercase tracking-wider mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5" /> Client Testimonials
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Our <span className="text-blue-600">clients say</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-lg">
              Hear directly from corporate leaders, managing directors, and founders who scale with Dev Digit Solutions.
            </p>
          </div>

          {/* Slider Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-slate-300 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-700 flex items-center justify-center transition-all shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-slate-300 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-700 flex items-center justify-center transition-all shadow-sm"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dual Card Carousel Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visible.map((t, idx) => {
            const isBlue = t.theme === 'blue';

            return (
              <div
                key={`${t.name}-${idx}`}
                className={`rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 ${
                  isBlue
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-50 border border-slate-200 text-slate-900'
                }`}
              >
                {/* Card Upper Body */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                  <div
                    className={`font-serif text-6xl sm:text-7xl font-bold leading-none mb-3 select-none ${
                      isBlue ? 'text-white/80' : 'text-blue-600'
                    }`}
                  >
                    &ldquo;
                  </div>

                  <p className={`text-base sm:text-lg leading-relaxed font-normal mb-8 ${
                    isBlue ? 'text-blue-50' : 'text-slate-700'
                  }`}>
                    {t.quote}
                  </p>

                  <div className={`flex items-center gap-3 pt-4 border-t ${
                    isBlue ? 'border-white/20' : 'border-slate-200'
                  }`}>
                    <div className={`flex ${isBlue ? 'text-white' : 'text-blue-600'}`}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className={`font-heading font-bold text-sm ${
                      isBlue ? 'text-white' : 'text-slate-900'
                    }`}>
                      {t.rating} / 5.0
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className={`${isBlue ? 'bg-blue-700' : 'bg-slate-900'} text-white p-6 sm:px-10`}>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {siteData.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`h-2 rounded-full transition-all ${
                startIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
