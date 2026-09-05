export const siteData = {
  brand: {
    name: "Dev Digit Solutions",
    tagline: "The Digital Solutions Company",
    heroTitle: "Award-Winning Digital Marketing & Tech Agency",
    heroSubtitle: "Data-Driven Strategy. Creative Precision. Measurable Growth.",
    heroDescription: "At Dev Digit Solutions, we turn ambitious ideas into scalable market impact. Combining performance marketing, custom software engineering, and high-converting visual branding, we empower businesses to dominate search, scale customer acquisition, and achieve sustainable revenue velocity.",
    phone: "+91 70715 01382",
    email: "contact@devdigitsolutions.com",
    whatsappUrl: "https://wa.me/917071501382?text=Hi%20Dev%20Digit%20Solutions%20team%2C%20I%20would%20like%20a%20free%20audit%20for%20my%20website.%20Please%20get%20in%20touch.",
    address: {
      street: "4th Floor, B-130, Sector 65",
      city: "Noida",
      state: "Uttar Pradesh",
      pin: "201301",
      country: "India",
      googleMaps: "https://maps.google.com/?q=B-130,+Sector+65,+Noida,+Uttar+Pradesh+201301"
    },
    experienceYears: "10+",
    awardsBadge: "Top Rated Digital Growth & Web Engineering Agency",
    marcomBadge: "10+ Years of Enterprise Tech & Marketing Excellence"
  },

  stats: [
    { value: 10, suffix: "+", label: "Years Of Excellence", desc: "Empowering businesses through tech & media" },
    { value: 250, suffix: "+", label: "Brands Scaled", desc: "Across retail, tech, health, jewellery & B2B" },
    { value: 5, suffix: "+", label: "Years Avg Client Retention", desc: "Long-term relationships, sustained growth" },
    { value: 45, suffix: "+", label: "Specialist Team", desc: "Engineers, growth marketers & designers" },
  ],

  services: [
    {
      id: "creative",
      title: "Creative & Communication",
      iconName: "Palette",
      description: "Brand strategy, identity and creative communication that elevates how customers perceive and trust your brand.",
      highlights: ["Brand Strategy & Positioning", "Logo & Identity Design", "Corporate Films & Explainers", "Packaging & Visual Collateral"],
      color: "from-blue-500/20 to-blue-600/10"
    },
    {
      id: "sem",
      title: "Search Engine Marketing",
      iconName: "Search",
      description: "SEM strategy, paid search and SEO that put your brand directly in front of high-intent buyers ready to convert.",
      highlights: ["Enterprise & Local SEO", "Google Ads & PPC Management", "AI Search & AEO Optimization", "High-Intent Keyword Domination"],
      color: "from-blue-600/20 to-cyan-500/10"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & Growth",
      iconName: "TrendingUp",
      description: "Full-funnel growth campaigns — from awareness to conversion — built on actionable data and high-performing creative.",
      highlights: ["B2B & B2C Lead Generation", "Conversion Rate Optimization (CRO)", "Multi-Channel Media Mix", "Predictive Analytics"],
      color: "from-indigo-500/20 to-blue-500/10"
    },
    {
      id: "web-development",
      title: "Website & Software Development",
      iconName: "Code2",
      description: "Custom websites, web apps, and enterprise platforms — engineered to load lightning fast, look stunning, and convert visitors.",
      highlights: ["High-Performance Web Platforms", "Enterprise React / Next.js Architecture", "Mobile-First UX/UI Design", "E-commerce & Shopify Solutions"],
      color: "from-sky-500/20 to-blue-600/10"
    },
    {
      id: "ad-management",
      title: "Ad Management & ROAS",
      iconName: "Target",
      description: "Paid search, Meta, LinkedIn, and video ads — strategy, creative, and bidding that turn budget into measurable revenue.",
      highlights: ["Meta & LinkedIn Paid Ads", "Programmatic & Retargeting", "ROAS Optimization", "Real-Time Attribution Tracking"],
      color: "from-blue-500/20 to-indigo-600/10"
    },
    {
      id: "ugc",
      title: "UGC & Video Production",
      iconName: "Video",
      description: "Performance-ready user-generated content from real creators that scrolls, engages, and drives immediate action.",
      highlights: ["Short-Form Reels & Shorts", "Authentic Creator Network", "High-Converting Ad Hooks", "Complete Studio Production"],
      color: "from-cyan-500/20 to-blue-500/10"
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      iconName: "Share2",
      description: "Always-on social strategy, content creation, and community management that builds a dedicated, loyal audience.",
      highlights: ["Omnichannel Content Calendars", "Viral Storytelling Hooks", "Community Engagement", "Brand Resonance"],
      color: "from-blue-600/20 to-sky-500/10"
    },
    {
      id: "influencer",
      title: "Influencer Marketing",
      iconName: "Users2",
      description: "Creator-led campaigns at scale — from casting and creative brief to execution, content rights, and ROI reporting.",
      highlights: ["Pan-India Influencer Discovery", "Campaign Briefing & Scripting", "Usage Rights Management", "Sales Tracking"],
      color: "from-indigo-600/20 to-blue-500/10"
    },
  ],

  // Real client roster provided by user & GitHub portfolio
  clients: [
    { name: "Vitamuch", industry: "Health & Nutrition", badge: "D2C Wellness" },
    { name: "Ranworks", industry: "Engineering & Tech", badge: "Enterprise Tech" },
    { name: "Sai Sewa Sansthan", industry: "Social Impact & Trust", badge: "Non-Profit" },
    { name: "Board Brush & Light", industry: "Architectural Lighting", badge: "ADlights" },
    { name: "Raj Jwellers", industry: "Luxury Jewellery", badge: "Fine Jewels" },
    { name: "Querwell", industry: "Healthcare & Pharma", badge: "MedTech" },
    { name: "Tryfit", industry: "Fitness & Activewear", badge: "Lifestyle Brand" },
    { name: "Apexoutbond", industry: "Corporate Outbound", badge: "Enterprise B2B" },
    { name: "Wehere App", industry: "Mobile & iOS Ecosystem", badge: "Tech Product" },
    { name: "Sai Sewa Hotel", industry: "Hospitality & Tourism", badge: "Hotels & Stays" },
    { name: "Aarikatensile", industry: "Tensile Architecture", badge: "Industrial Design" },
    { name: "Kayasth Shaadi", industry: "Matrimonial Network", badge: "Web Platform" },
    { name: "Skyom", industry: "Digital Solutions", badge: "Tech Cloud" },
    { name: "Mintol", industry: "Consumer Goods", badge: "Retail Brand" },
    { name: "Swastik", industry: "Manufacturing & Industrial", badge: "Heavy Systems" },
  ],

  // Real verified case studies for these clients
  caseStudies: [
    {
      client: "Vitamuch",
      sector: "Health & Wellness D2C",
      metric: "+340%",
      metricLabel: "Online Revenue Growth",
      description: "Full-funnel digital marketing overhaul, performance ads optimization, and conversion-first Shopify architecture that scaled D2C wellness sales exponentially.",
      tag: "D2C Growth",
      accent: "#2563eb"
    },
    {
      client: "Raj Jwellers",
      sector: "Luxury Fine Jewellery",
      metric: "+280%",
      metricLabel: "High-Intent Inquiries",
      description: "Visual identity branding, interactive digital bridal jewelry showcase, and geo-targeted social performance ads driving unprecedented showroom footfall.",
      tag: "Luxury Branding",
      accent: "#3b82f6"
    },
    {
      client: "Wehere App Ecosystem",
      sector: "iOS & Mobile App Architecture",
      metric: "50K+",
      metricLabel: "Active App Users",
      description: "Complete iOS mobile app development (Swift) and resilient cloud backend engineering delivering sub-second response times and 99.9% uptime.",
      tag: "Mobile App Tech",
      accent: "#1d4ed8"
    },
    {
      client: "Tryfit Active",
      sector: "Fitness & Apparel",
      metric: "4.6x",
      metricLabel: "Average Meta ROAS",
      description: "High-converting UGC video hooks, influencer partnerships, and dynamic retargeting funnels turning cold traffic into repeat fitness apparel buyers.",
      tag: "Performance Ads",
      accent: "#2563eb"
    }
  ],

  // Real featured projects portfolio matching user's roster
  portfolioProjects: [
    {
      title: "Vitamuch D2C Nutrition Platform",
      category: "D2C E-Commerce & Growth",
      tagline: "High-Converting Storefront & Performance Marketing Engine",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop",
      stats: "+340% Sales Velocity"
    },
    {
      title: "Raj Jwellers Heritage Showcase",
      category: "Luxury Branding & E-Commerce",
      tagline: "Bespoke Bridal Catalog, Visual Identity & High-Intent Acquisition",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
      stats: "280% Footfall Surge"
    },
    {
      title: "Wehere iOS & Cloud Ecosystem",
      category: "Web & Mobile Development",
      tagline: "Native iOS Application & Microservices Backend Engineering",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
      stats: "50K+ Installs"
    },
    {
      title: "Board Brush & Light (ADlights)",
      category: "Architectural & Product Tech",
      tagline: "Commercial Lighting Showcase & Interactive Catalog Platform",
      image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=1000&auto=format&fit=crop",
      stats: "3.8x B2B Inquiries"
    },
    {
      title: "Tryfit Activewear & Fitness",
      category: "Influencer & Performance Marketing",
      tagline: "UGC Video Ads, Creator Campaigns & ROAS Scaling",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
      stats: "4.6x Commercial ROAS"
    },
    {
      title: "Apexoutbond Corporate Platform",
      category: "Enterprise Web Application",
      tagline: "B2B Outbound Operations, Corporate Portal & Lead Funnels",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      stats: "+310% Corporate Leads"
    },
    {
      title: "Sai Sewa Hotel & Sansthan",
      category: "Hospitality & Booking Engine",
      tagline: "Direct Room Booking System, Social Impact & Trust Portal",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
      stats: "99.9% Uptime"
    },
    {
      title: "Aarikatensile Architectural Systems",
      category: "Industrial & Manufacturing Web",
      tagline: "Tensile Membrane Engineering Portfolio & Quote Engine",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
      stats: "+190% Quote Velocity"
    }
  ],

  testimonials: [
    {
      name: "Founder, Vitamuch",
      role: "D2C Wellness & Nutrition",
      rating: 5.0,
      theme: "white",
      quote: "Dev Digit Solutions transformed our digital footprint. From redesigning our high-speed store to scaling our paid ads across Meta and Google, our revenue grew over 340% within 6 months."
    },
    {
      name: "Director, Raj Jwellers",
      role: "Luxury Retail & Bridal Jewelry",
      rating: 4.9,
      theme: "blue",
      quote: "Jewellery branding requires deep emotional elegance and precision. Dev Digit crafted our luxury visual identity and brought thousands of qualified bridal buyers straight to our showroom."
    },
    {
      name: "Product Head, Wehere App",
      role: "Mobile Ecosystem",
      rating: 5.0,
      theme: "white",
      quote: "Their engineering team built our iOS app and cloud infrastructure flawlessly. Scalable, zero-latency, and exceptional code quality. A genuine technology partner."
    },
    {
      name: "Managing Partner, Apexoutbond",
      role: "Enterprise B2B Solutions",
      rating: 4.9,
      theme: "blue",
      quote: "Dev Digit Solutions' data-backed SEO and B2B digital acquisition strategies generated high-ticket corporate enterprise contracts for our outbound operations."
    },
  ],

  faqs: [
    {
      q: "What makes Dev Digit Solutions different from traditional marketing agencies?",
      a: "Most agencies only do surface-level marketing or outsource their development. Dev Digit Solutions is an integrated technology and growth engineering powerhouse. We build modern React/Next.js/iOS platforms and scale them with data-driven SEO, performance marketing, and high-converting video creative under one accountable roof."
    },
    {
      q: "How fast can you launch a custom website or growth campaign for brands like Vitamuch or Raj Jwellers?",
      a: "Performance campaigns typically launch within 5 to 7 business days following tracking and creative alignment. Full-scale enterprise web and mobile applications are delivered through agile 2-week sprint cycles with live staging environments."
    },
    {
      q: "Do you provide transparent reporting and direct ROAS tracking?",
      a: "Yes. Every client gets a real-time live attribution dashboard showing cost-per-acquisition (CAC), blended return on ad spend (ROAS), keyword ranking velocity, and revenue generated."
    },
    {
      q: "How does your Free SEO & Technology Audit work?",
      a: "Our senior technical analysts inspect your domain's Core Web Vitals, crawl architecture, backlink profile, competitor ad bidding, and conversion leakage. You receive a bespoke, actionable 15+ page roadmap within 24 hours — zero obligation."
    }
  ],

  press: [
    "Featured in Tech Growth India",
    "Digital Leadership Awards",
    "E-Commerce Excellence Forum",
    "Enterprise Software Review",
    "Agency Innovation Spotlight",
    "B2B Growth Summit"
  ]
};
