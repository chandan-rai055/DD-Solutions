import React from 'react';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import ClientTicker from '../components/ClientTicker';
import ServicesSection from '../components/ServicesSection';
import MarcomBanner from '../components/MarcomBanner';
import PortfolioCarousel from '../components/PortfolioCarousel';
import CaseStudySpotlight from '../components/CaseStudySpotlight';
import Testimonials from '../components/Testimonials';
import PressCoverage from '../components/PressCoverage';
import FAQSection from '../components/FAQSection';
import AuditCTASection from '../components/AuditCTASection';

export default function HomePage({ onOpenEnquire, onOpenAudit }) {
  return (
    <>
      <Hero
        onOpenEnquire={() => onOpenEnquire()}
        onOpenAudit={() => onOpenAudit()}
      />
      <StatsCounter />
      <ClientTicker />
      <ServicesSection />
      <MarcomBanner
        onOpenEnquire={() => onOpenEnquire()}
      />
      <PortfolioCarousel
        onOpenEnquire={() => onOpenEnquire()}
      />
      <CaseStudySpotlight
        onOpenAudit={() => onOpenAudit()}
      />
      <Testimonials />
      <PressCoverage />
      <FAQSection />
      <AuditCTASection />
    </>
  );
}
