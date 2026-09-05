export const servicesNavigation = [
  {
    category: "STRATEGY & BRAND",
    items: [
      {
        title: "AI Generated Videos",
        slug: "ai-generated-videos",
        badge: "NEW",
        badgeType: "new",
        description: "Cutting-edge AI video generation and synthetic media for hyper-personalized brand campaigns."
      },
      {
        title: "Creative & Communication",
        slug: "creative-communication",
        hasSubmenu: true,
        description: "End-to-end brand strategy, identity, and 360° visual communication.",
        subItems: [
          { title: "View all →", slug: "creative-communication", isOverview: true },
          { title: "Brand Strategy", slug: "brand-strategy" },
          { title: "Brand Communication", slug: "brand-communication" },
          { title: "Logo & Identity Design", slug: "logo-identity-design" },
          { title: "Brochure & Presentation Design", slug: "brochure-presentation-design" },
          { title: "Product Packaging", slug: "product-packaging" },
          { title: "Art Direction", slug: "art-direction" },
          { title: "Animations & GIFs", slug: "animations-gifs" },
          { title: "Corporate Films & Explainers", slug: "corporate-films-explainers" },
          { title: "TVC & TV Ads", slug: "tvc-ads" },
          { title: "Print & Newspaper Ads", slug: "print-newspaper-ads" }
        ]
      },
      {
        title: "Content Marketing",
        slug: "content-marketing",
        hasSubmenu: true,
        description: "High-intent copywriting, narrative building, and collateral development.",
        subItems: [
          { title: "View all →", slug: "content-marketing", isOverview: true },
          { title: "SEO Copywriting", slug: "seo-copywriting" },
          { title: "Video & TVC Scripts", slug: "video-tvc-scripts" },
          { title: "Marketing Collaterals", slug: "marketing-collaterals" }
        ]
      }
    ]
  },
  {
    category: "SEO & PERFORMANCE",
    items: [
      {
        title: "SEO Services",
        slug: "seo-services",
        description: "Dominate Google search results and drive compounding organic revenue."
      },
      {
        title: "AEO Services",
        slug: "aeo-services",
        badge: "NEW",
        badgeType: "new",
        description: "Answer Engine Optimization for Perplexity, ChatGPT, and AI Search."
      },
      {
        title: "Generative Engine Optimization",
        slug: "geo-services",
        badge: "NEW",
        badgeType: "new",
        description: "Get cited and recommended by Google AI Overviews and LLMs."
      },
      {
        title: "Performance Marketing",
        slug: "performance-marketing",
        badge: "MOST DEMANDED",
        badgeType: "hot",
        description: "Scalable Google & Meta paid customer acquisition engineered for ROAS."
      },
      {
        title: "Search Engine Marketing",
        slug: "search-engine-marketing",
        hasSubmenu: true,
        description: "Paid search, shopping ads, and enterprise keyword domination.",
        subItems: [
          { title: "View all →", slug: "search-engine-marketing", isOverview: true },
          { title: "B2B SEO Company", slug: "b2b-seo" },
          { title: "Ecommerce SEO", slug: "ecommerce-seo" },
          { title: "Local SEO & GMB", slug: "local-seo" },
          { title: "Lead Generation with SEO", slug: "lead-gen-seo" },
          { title: "Multilingual SEO", slug: "multilingual-seo" }
        ]
      },
      {
        title: "Digital Marketing",
        slug: "digital-marketing",
        hasSubmenu: true,
        description: "Full-funnel digital acceleration across every modern touchpoint.",
        subItems: [
          { title: "View all →", slug: "digital-marketing", isOverview: true },
          { title: "Business Generation", slug: "business-generation" }
        ]
      }
    ]
  },
  {
    category: "SOCIAL",
    items: [
      {
        title: "Social Media Marketing",
        slug: "social-media-marketing",
        hasSubmenu: true,
        description: "Always-on organic storytelling, viral content, and community cultivation.",
        subItems: [
          { title: "View all →", slug: "social-media-marketing", isOverview: true },
          { title: "Facebook Marketing", slug: "facebook-marketing" },
          { title: "Instagram Marketing", slug: "instagram-marketing" },
          { title: "LinkedIn Marketing", slug: "linkedin-marketing" },
          { title: "Social Media Branding", slug: "social-media-branding" }
        ]
      },
      {
        title: "Influencer Marketing",
        slug: "influencer-marketing",
        description: "Pan-India creator network activations driving viral brand reach."
      },
      {
        title: "UGC Video",
        slug: "ugc-video",
        description: "High-converting user generated video ads designed for TikTok, Reels & Shorts."
      },
      {
        title: "BGC (Brand Generated Content)",
        slug: "bgc-content",
        description: "High-fidelity brand narratives, product animations, and visual assets."
      },
      {
        title: "Social + Performance Combo",
        slug: "social-performance-combo",
        badge: "BESTSELLER",
        badgeType: "hot",
        description: "The complete synergy of viral organic social and high-ROAS paid media."
      }
    ]
  },
  {
    category: "WEB & APPS",
    items: [
      {
        title: "Website Development",
        slug: "website-development",
        hasSubmenu: true,
        description: "Custom-engineered websites built for lightning speed and conversion.",
        subItems: [
          { title: "View all →", slug: "website-development", isOverview: true },
          { title: "Website Designing Services", slug: "website-designing" },
          { title: "Corporate Website Design", slug: "corporate-website-design" },
          { title: "Ecommerce Website", slug: "ecommerce-website" },
          { title: "Website Design Agency in Delhi NCR", slug: "website-agency-delhi-ncr" },
          { title: "WordPress Website Design", slug: "wordpress-website-design" },
          { title: "Website Design for Small Business", slug: "website-small-business" },
          { title: "Manufacturer Website Design", slug: "manufacturer-website-design" },
          { title: "Mobile App Development", slug: "mobile-app-development" }
        ]
      },
      {
        title: "Web Application Development",
        slug: "web-application-development",
        description: "Enterprise SaaS, portals, custom dashboards, and high-scale cloud platforms."
      }
    ]
  }
];

// Map of comprehensive service details for every page
export const servicesDetailMap = {
  // 1. Creative & Communication
  "creative-communication": {
    title: "Creative & Communication",
    category: "STRATEGY & BRAND",
    tagline: "Unforgettable Brand Identities & 360° Visual Storytelling",
    overview: "At Dev Digit Solutions, we craft compelling brand narratives and distinctive visual identities that captivate audiences and establish enduring market authority. From luxury corporate identities to high-impact TVCs, our creative studio conceptualizes and executes campaigns that command attention.",
    heroStat: "300+ Brands Transformed",
    deliverables: [
      "Brand Positioning & Architecture",
      "Complete Visual Identity & Guidelines",
      "Corporate Film & Explainer Production",
      "Packaging, Label & Merchandise Design",
      "Print, Outdoor & Newspaper Advertising",
      "2D/3D Motion Graphics & Micro-Animations"
    ],
    features: [
      { title: "Human-Centric Brand Strategy", desc: "We uncover your company's core archetype to build emotional resonance with your exact target audience." },
      { title: "Cross-Platform Cohesion", desc: "Ensuring your identity speaks with absolute clarity across digital interfaces, print media, and physical collateral." },
      { title: "Conversion-Focused Aesthetics", desc: "Beauty engineered with purpose — our creative assets directly support your pipeline and customer acquisition goals." }
    ],
    process: [
      { step: "01", title: "Discovery & Archetyping", desc: "Audit existing assets, competitor landscapes, and consumer perception." },
      { step: "02", title: "Creative Concepting", desc: "Develop multiple creative territories, moodboards, and narrative hooks." },
      { step: "03", title: "Execution & Crafting", desc: "Precision design, typography, color theory, and full collateral rollout." },
      { step: "04", title: "Brand Guidelines Delivery", desc: "Comprehensive documentation for consistent multi-channel deployment." }
    ]
  },

  // 2. SEO Services
  "seo-services": {
    title: "Search Engine Optimization (SEO)",
    category: "SEO & PERFORMANCE",
    tagline: "Dominate Search Results with Data-Driven Organic Architecture",
    overview: "Search Engine Optimization is the highest-ROI sustainable growth channel for modern business. Dev Digit Solutions delivers end-to-end technical SEO, enterprise content strategy, and authoritative digital PR that catapults your website to the top of Google for commercially valuable search queries.",
    heroStat: "+280% Avg Organic Traffic Growth",
    deliverables: [
      "Technical Core Web Vitals & Crawl Optimization",
      "High-Intent Commercial Keyword Mapping",
      "Authoritative White-Hat Link Building",
      "On-Page Content Optimization & Topical Clustering",
      "Local SEO & Google Business Profile Management",
      "Real-Time Google Search Console & GA4 Attribution"
    ],
    features: [
      { title: "Technical Crawl Perfection", desc: "Fix render-blocking scripts, crawl anomalies, pagination issues, and schema structured data." },
      { title: "Revenue-First Keywords", desc: "We bypass vanity search volume to target high-intent transactional search queries that generate pipeline revenue." },
      { title: "Topical Authority Clustering", desc: "Structure your website as the definitive source in your industry to earn compounding organic backlinks." }
    ],
    process: [
      { step: "01", title: "Technical & Content Audit", desc: "Identify 100+ health parameters, crawl blockers, and keyword leakage." },
      { step: "02", title: "Keyword & Entity Mapping", desc: "Map exact buyer-journey stages to high-converting landing pages." },
      { step: "03", title: "On-Page & Architecture Fixes", desc: "Implement schema markup, metadata, speed enhancements, and internal linking." },
      { step: "04", title: "Authority Growth & PR", desc: "Acquire high-DA editorial mentions and measure ranking velocity weekly." }
    ]
  },

  // 3. Performance Marketing
  "performance-marketing": {
    title: "Performance Marketing",
    category: "SEO & PERFORMANCE",
    badge: "MOST DEMANDED",
    tagline: "Scalable Customer Acquisition Engineered for Maximum ROAS",
    overview: "We turn advertising budgets into predictable revenue engines. Dev Digit Solutions manages millions in media spend across Google Search, Meta (Instagram & Facebook), LinkedIn, YouTube, and programmatic ad exchanges with razor-sharp audience targeting and relentless creative testing.",
    heroStat: "4.8x Average Commercial ROAS",
    deliverables: [
      "Google Search, Shopping & Performance Max Campaigns",
      "Meta Ads (Instagram / Facebook) Creative Testing",
      "B2B LinkedIn Precision Account-Based Targeting",
      "Dynamic Retargeting & Cart Recovery Funnels",
      "Full-Funnel Creative Iterations & Ad Copy Matrix",
      "Server-Side Conversion API (CAPI) & Attribution Modeling"
    ],
    features: [
      { title: "Granular Audience Segmentation", desc: "Deploy lookalike models, behavioral filters, and custom CRM audiences to reach buyers with high purchase intent." },
      { title: "Rapid Creative Iteration", desc: "Weekly multivariate testing of hooks, thumbnails, UGC angles, and headlines to prevent ad fatigue." },
      { title: "Transparent ROI Dashboard", desc: "Live client dashboards showing spend, blended CAC, ROAS, and customer lifetime value in real time." }
    ],
    process: [
      { step: "01", title: "Tracking & Pixel Infrastructure", desc: "Implement GA4, Meta CAPI, and enhanced conversions tracking." },
      { step: "02", title: "Audience & Offer Architecture", desc: "Craft irresistible lead magnets, high-intent landing pages, and offer structures." },
      { step: "03", title: "Live Launch & Split Testing", desc: "Launch ad sets across micro-budgets to identify winning angles and creatives." },
      { step: "04", title: "Aggressive Scaling", desc: "Scale budget into winning ad sets while systematically lowering customer acquisition costs." }
    ]
  },

  // 4. Website Development
  "website-development": {
    title: "Website Development",
    category: "WEB & APPS",
    tagline: "High-Performance Web Platforms Engineered for Lightning Speed & Conversion",
    overview: "Your website is your ultimate digital headquarters. Dev Digit Solutions designs and engineers enterprise-grade websites and web applications with modern frameworks (React, Next.js, WordPress, Shopify, Tailwind CSS) optimized for sub-second load times, mobile perfection, and maximum lead generation.",
    heroStat: "95+ Core Web Vitals Score",
    deliverables: [
      "Custom UI/UX Wireframing & High-Fidelity Figma Prototypes",
      "Full-Stack React, Next.js, or Headless CMS Engineering",
      "Mobile-First Responsive Layouts & Fluid Micro-Interactions",
      "E-Commerce & Shopify Plus Store Development",
      "Security Hardening, SSL, & CDN Acceleration",
      "Integrated CRM, Analytics & Payment Gateway Integrations"
    ],
    features: [
      { title: "Zero Bloat, Pure Speed", desc: "Built with clean, modern codebases guaranteeing top scores on Google PageSpeed Insights." },
      { title: "Conversion-Focused UX", desc: "Every button, headline, and user flow is strategically placed to maximize consultation requests and sales." },
      { title: "Built-In SEO Architecture", desc: "Semantic HTML5, automated XML sitemaps, open graph metadata, and structured schema natively integrated." }
    ],
    process: [
      { step: "01", title: "Strategy & Wireframing", desc: "Define user journeys, site architecture, and conversion funnels in Figma." },
      { step: "02", title: "Design System & UI", desc: "Craft bespoke visual components matching your brand identity and typography." },
      { step: "03", title: "Modern Code Development", desc: "Engineer with React/Next.js/WordPress with modular, clean components." },
      { step: "04", title: "Testing, QA & Launch", desc: "Rigorous cross-browser, mobile responsiveness, and security penetration checks." }
    ]
  },

  // 5. AI Generated Videos
  "ai-generated-videos": {
    title: "AI Generated Videos",
    category: "STRATEGY & BRAND",
    badge: "NEW",
    tagline: "Next-Gen AI Video Production for Hyper-Targeted Brand Engagement",
    overview: "Harness the power of cutting-edge generative video AI. Dev Digit Solutions crafts lifelike digital avatars, multilingual video variants, dynamic product demonstrations, and AI visual effects at a fraction of traditional film production timelines and costs.",
    heroStat: "10x Faster Production Cycles",
    deliverables: [
      "Synthetic AI Actor Commercials & Explainers",
      "Multilingual Automatic Voice & Lip-Sync Translation",
      "Personalized Video Campaigns at Scale",
      "Automated Product Video Catalog Generation",
      "AI B-Roll & Visual Concept Generation"
    ],
    features: [
      { title: "Infinite Scalability", desc: "Produce hundreds of personalized video iterations for segmented ad targeting without reshooting." },
      { title: "Global Localization", desc: "Translate your video message into 40+ international languages with natural accents and perfect lip-syncing." },
      { title: "Cost Efficiency", desc: "Achieve cinema-grade storytelling without massive production crew overhead." }
    ],
    process: [
      { step: "01", title: "Script & Persona Conception", desc: "Develop high-converting scripts and select AI avatar or custom voice clones." },
      { step: "02", title: "AI Generation & VFX", desc: "Generate neural video clips and composite graphics, music, and subtitles." },
      { step: "03", title: "Post-Production Polish", desc: "Professional color grading, audio leveling, and brand overlay integration." },
      { step: "04", title: "Multi-Format Export", desc: "Deliver 16:9 widescreen and 9:16 vertical reels ready for ad deployment." }
    ]
  },

  // 6. AEO Services
  "aeo-services": {
    title: "AEO Services (Answer Engine Optimization)",
    category: "SEO & PERFORMANCE",
    badge: "NEW",
    tagline: "Be the Direct Answer on ChatGPT, Perplexity, Siri & AI Assistants",
    overview: "Search behavior is shifting from ten blue links to direct AI answers. Answer Engine Optimization (AEO) ensures your brand is the verified, cited, and recommended answer when potential customers query ChatGPT, Perplexity, Claude, or Google Gemini.",
    heroStat: "#1 Cited Source in AI Search",
    deliverables: [
      "Knowledge Graph & Entity Schema Structuring",
      "Conversational QA Content Architecture",
      "Direct Answer Snippet Optimization",
      "AI Crawler Accessibility & LLM Optimization",
      "Brand Sentiment & Authority Seeding across AI Training Corpora"
    ],
    features: [
      { title: "Entity-Based SEO", desc: "Anchor your brand entity firmly within Wikidata, Google Knowledge Graph, and authoritative directories." },
      { title: "Conversational Query Capture", desc: "Structure answers to natural language prompts like 'Who is the best B2B software agency in India?'." },
      { title: "Future-Proof Visibility", desc: "Maintain top market share as AI-driven search engines replace traditional keyword browsing." }
    ],
    process: [
      { step: "01", title: "LLM Citation Audit", desc: "Test how AI engines currently perceive and answer questions about your niche." },
      { step: "02", title: "Knowledge Base Construction", desc: "Publish authoritative, fact-dense data sheets and definitive FAQs." },
      { step: "03", title: "Schema Entity Linking", desc: "Implement JSON-LD Organization, Service, and FAQ schemas with SameAs references." },
      { step: "04", title: "AI Search Monitoring", desc: "Track how often your company is cited in Perplexity and ChatGPT responses." }
    ]
  },

  // 7. Generative Engine Optimization (GEO)
  "geo-services": {
    title: "Generative Engine Optimization (GEO)",
    category: "SEO & PERFORMANCE",
    badge: "NEW",
    tagline: "Get Featured in Google AI Overviews & Search Generative Experiences",
    overview: "Google's AI Overviews now answer complex multi-step queries at the very top of the search engine results page. Dev Digit Solutions' Generative Engine Optimization strategies ensure your site's data, research, and expertise are prominently quoted and linked within Google AI responses.",
    heroStat: "Top Google AI Overview Placement",
    deliverables: [
      "Google AI Overview Readiness Audit",
      "Data-Dense Research & Statistics Publishing",
      "Semantic Passage Structuring",
      "Information Gain Optimization",
      "Continuous GEO Algorithm Alignment"
    ],
    features: [
      { title: "Information Gain Architecture", desc: "Produce unique primary research and verified statistics that Google AI Overviews rely upon." },
      { title: "Passage Indexation", desc: "Format complex solutions into concise, authoritative modular snippets easily consumed by LLMs." },
      { title: "Zero-Click Search Capture", desc: "Win the source citations that drive educated, ready-to-buy executive buyers directly to your domain." }
    ],
    process: [
      { step: "01", title: "AI Overview Gap Analysis", desc: "Audit which search terms in your sector trigger AI Overviews and who is currently cited." },
      { step: "02", title: "Unique Value Seeding", desc: "Inject proprietary data, case figures, and expert commentary into your core service pages." },
      { step: "03", title: "Microdata & Structural Refinement", desc: "Apply precise HTML heading hierarchies and definition tables." },
      { step: "04", title: "Citation Tracking & Refinement", desc: "Monitor appearance rates in Google AI Overviews and optimize continuously." }
    ]
  },

  // 8. Social Media Marketing
  "social-media-marketing": {
    title: "Social Media Marketing",
    category: "SOCIAL",
    tagline: "Cultivate a Dedicated Community & Drive Viral Organic Reach",
    overview: "We transform social channels from passive feeds into vibrant community hubs and high-velocity customer acquisition engines. Dev Digit Solutions manages always-on storytelling, creative assets, and community engagement across LinkedIn, Instagram, Facebook, and YouTube.",
    heroStat: "25M+ Annual Organic Reach",
    deliverables: [
      "Omnichannel Monthly Content Strategy & Calendars",
      "High-Fidelity Graphic Design, Carousels & Motion Assets",
      "Short-Form Video Production (Reels, TikTok & YouTube Shorts)",
      "Dedicated Community Management & Comment Moderation",
      "Viral Trend Hijacking & Real-Time Relevance Strategy",
      "Monthly Growth Analytics & Follower Quality Reports"
    ],
    features: [
      { title: "Platform-Native Storytelling", desc: "LinkedIn thought leadership for B2B executives, vibrant reels for Instagram, and viral hooks for consumer brands." },
      { title: "Consistent Brand Voice", desc: "Every visual asset and caption is carefully curated to elevate your brand's unique identity." },
      { title: "Community to Pipeline", desc: "Drive social conversations directly into your CRM with interactive story stickers, DMs, and link funnels." }
    ],
    process: [
      { step: "01", title: "Channel Audit & Content Pillars", desc: "Establish core brand themes, visual style guides, and publishing cadence." },
      { step: "02", title: "Content Creation Sprint", desc: "Batch design carousels, edit reels, and draft engaging captions." },
      { step: "03", title: "Scheduled Publishing & Engagement", desc: "Post during peak activity times and engage with community comments within minutes." },
      { step: "04", title: "Insights & Optimization", desc: "Analyze engagement rates, top-performing hooks, and follower growth trends." }
    ]
  },

  // 9. Influencer Marketing
  "influencer-marketing": {
    title: "Influencer Marketing",
    category: "SOCIAL",
    tagline: "Creator-Led Campaigns That Build Authenticity & Drive Sales at Scale",
    overview: "Connect with verified micro, macro, and celebrity creators who genuinely resonate with your audience. Dev Digit Solutions handles everything from discovery and contract negotiations to creative briefs, usage rights, and performance tracking.",
    heroStat: "2,000+ Verified Creators Network",
    deliverables: [
      "Influencer Discovery & Audience Authenticity Vetting",
      "Campaign Concepting & Creative Briefing",
      "Contracting, Deliverable Agreements & Usage Rights",
      "Content Approval & Live Campaign Management",
      "Promo Codes, Affiliate Tracking & UTM Attribution",
      "Comprehensive ROI & Earned Media Value (EMV) Reporting"
    ],
    features: [
      { title: "Zero Fake Followers", desc: "We use proprietary vetting tools to audit engagement authenticity, audience location, and bot percentages." },
      { title: "Whitelisted Paid Ads", desc: "Run high-converting paid ads directly through creator handles (Partnership Ads) for 3x higher click-through rates." },
      { title: "End-to-End Rights Management", desc: "Secure commercial advertising rights so you can reuse creator assets across your website and paid campaigns." }
    ],
    process: [
      { step: "01", title: "Creator Casting & Vetting", desc: "Handpick creators whose audience demographic matches your buyer persona." },
      { step: "02", title: "Creative Brief & Product Seeding", desc: "Ship products and provide loose briefs that allow creators to remain authentic." },
      { step: "03", title: "Campaign Launch Coordination", desc: "Synchronize creator posting schedules for maximum algorithmic impact." },
      { step: "04", title: "Attribution & Content Repurposing", desc: "Track conversions and scale top-performing creator posts via paid ads." }
    ]
  },

  // 10. UGC Video Agency
  "ugc-video": {
    title: "UGC Video Creation",
    category: "SOCIAL",
    tagline: "High-Converting User Generated Content That Scrolls, Sells & Converts",
    overview: "Modern consumers trust relatable creators 5x more than traditional corporate studio ads. Dev Digit Solutions produces thumb-stopping User Generated Content (UGC) videos featuring authentic creators testing, reviewing, and recommending your product in native vertical formats.",
    heroStat: "3.5x Higher Conversion Over Studio Ads",
    deliverables: [
      "Vetted Creator Sourcing & Diverse Demographic Casting",
      "Direct-Response Scriptwriting & Hook Variations",
      "Native 9:16 Vertical Video Production (4K iPhone Quality)",
      "Multiple Hook & Call-To-Action Iterations for Ad Testing",
      "Captions, Dynamic Subtitles, & Sound Design Included",
      "Full Commercial Licensing for Paid Ads (TikTok, Meta, YouTube)"
    ],
    features: [
      { title: "Hook-Centric Direct Response", desc: "Every video is engineered with a powerful 3-second hook designed to stop social scrolling instantly." },
      { title: "Unboxing, Reviews & Demos", desc: "Showcase genuine reactions, problem-solution storytelling, and clear product benefits in action." },
      { title: "Ad-Ready Modular Assets", desc: "Get 3 hooks, 2 bodies, and 2 CTAs per creator to test 12 combinations in your ad account." }
    ],
    process: [
      { step: "01", title: "Creative Concept & Scripting", desc: "Draft high-converting direct response scripts based on competitor ad research." },
      { step: "02", title: "Creator Matching & Delivery", desc: "Ship products to our pre-screened creator roster." },
      { step: "03", title: "Filming & Editing", desc: "Creators film native clips; our in-house editors add captions, pacing, and hooks." },
      { step: "04", title: "Deployment & Scaling", desc: "Upload ad-ready MP4s directly into your Meta and TikTok ad accounts." }
    ]
  },

  // 11. Social + Performance Combo
  "social-performance-combo": {
    title: "Social + Performance Marketing Combo",
    category: "SOCIAL",
    badge: "BESTSELLER",
    tagline: "The Full Synergy of Viral Organic Content & High-ROAS Paid Ads",
    overview: "Why choose between organic reach and paid scale when you can dominate both? Our bestselling Social + Performance Combo couples high-velocity organic content creation with targeted Meta & Google ad management, creating a self-reinforcing flywheel that lowers customer acquisition costs.",
    heroStat: "Bestseller Growth Engine",
    deliverables: [
      "Complete Social Media Content Creation & Management",
      "High-Converting Paid Ad Campaigns (Meta & Google)",
      "Continuous Ad Creative Iterations from Top Organic Posts",
      "Omnichannel Attribution & Funnel Optimization",
      "Bi-Weekly Strategy Sessions with Senior Directors"
    ],
    features: [
      { title: "The Organic-To-Paid Flywheel", desc: "Top-performing organic posts are immediately boosted and scaled into winning paid ads." },
      { title: "Unified Brand Consistency", desc: "One strategic team managing your organic brand voice and paid conversion funnels." },
      { title: "Maximizes Every Marketing Rupee", desc: "Slash your customer acquisition costs by up to 40% through integrated retargeting." }
    ],
    process: [
      { step: "01", title: "Unified Growth Strategy", desc: "Align organic storytelling pillars with paid acquisition targets." },
      { step: "02", title: "Simultaneous Launch", desc: "Publish organic content daily while launching cold-traffic paid campaigns." },
      { step: "03", title: "Retargeting & Whitelisting", desc: "Retarget social profile visitors with high-intent conversion offers." },
      { step: "04", title: "Compound Scaling", desc: "Scale the winning creative combinations for sustained revenue growth." }
    ]
  },

  // 12. Web Application Development
  "web-application-development": {
    title: "Web Application Development",
    category: "WEB & APPS",
    tagline: "Scalable Enterprise Web Applications, SaaS & Custom Cloud Portals",
    overview: "We engineer resilient, secure, and modern web applications that automate operations and power enterprise workflows. From customer self-service portals to bespoke SaaS platforms, Dev Digit Solutions delivers full-stack excellence with React, Node, Next.js, and cloud architecture.",
    heroStat: "99.9% Uptime Architecture",
    deliverables: [
      "Custom SaaS Architecture & Database Schema Design",
      "Modern React / Next.js Single Page Applications (SPAs)",
      "Secure REST & GraphQL API Engineering",
      "Role-Based Access Control (RBAC) & Authentication",
      "Third-Party API Integrations (CRMs, ERPs, Payment Gateways)",
      "Automated CI/CD Deployment & Cloud Infrastructure (AWS / Azure)"
    ],
    features: [
      { title: "Scalable Microservices", desc: "Engineered to handle hundreds of thousands of concurrent users with zero latency degradation." },
      { title: "Enterprise-Grade Security", desc: "Strict OWASP compliance, encrypted data transmission, and automated vulnerability scanning." },
      { title: "Intuitive Product UX", desc: "Complex business logic made effortlessly intuitive for your team and customers." }
    ],
    process: [
      { step: "01", title: "Technical Architecture & Specs", desc: "Map database schemas, API contracts, and user roles." },
      { step: "02", title: "Interactive Prototype", desc: "Test clickable Figma prototypes with stakeholders before writing code." },
      { step: "03", title: "Agile Sprint Development", desc: "Two-week development sprints with live staging demo environments." },
      { step: "04", title: "Deployment & Maintenance", desc: "Containerized Docker deployment with continuous monitoring and SLAs." }
    ]
  }
};
