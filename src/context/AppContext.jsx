import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext(null);

const STORAGE_KEY = 'devdigit_agency_state_v1';

// Seed Initial Data
const initialSeedData = {
  // Roles: 'admin', 'developer', 'designer', 'hr', 'client'
  currentRole: 'admin',
  currentClientId: 'vitamuch',
  
  toast: null, // { message, type: 'success' | 'info' | 'warning' }

  // Team Directory
  teamMembers: [
    {
      id: 'emp-1',
      name: 'Aryan Varma',
      role: 'admin',
      roleTitle: 'Managing Director & Lead Strategist',
      department: 'Management',
      email: 'aryan@devdigitsolutions.com',
      phone: '+91 70715 01382',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
      activeProjectsCount: 8,
      status: 'Active',
      joinDate: '2016-04-10'
    },
    {
      id: 'emp-2',
      name: 'Rohan Deshmukh',
      role: 'developer',
      roleTitle: 'Senior Full-Stack Engineer',
      department: 'Engineering',
      email: 'rohan.d@devdigitsolutions.com',
      phone: '+91 98201 44521',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
      activeProjectsCount: 4,
      status: 'Active',
      joinDate: '2020-08-15',
      skills: ['React', 'Node.js', 'Next.js', 'PostgreSQL', 'Shopify Liquid']
    },
    {
      id: 'emp-3',
      name: 'Neha Kapoor',
      role: 'developer',
      roleTitle: 'Mobile & iOS Architect',
      department: 'Engineering',
      email: 'neha.k@devdigitsolutions.com',
      phone: '+91 97112 33456',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
      activeProjectsCount: 3,
      status: 'Active',
      joinDate: '2021-02-01',
      skills: ['Swift', 'Flutter', 'React Native', 'AWS Cloud']
    },
    {
      id: 'emp-4',
      name: 'Priya Sundaram',
      role: 'designer',
      roleTitle: 'Lead UI/UX & Brand Designer',
      department: 'Creative & Design',
      email: 'priya.s@devdigitsolutions.com',
      phone: '+91 98450 78219',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
      activeProjectsCount: 5,
      status: 'Active',
      joinDate: '2019-11-12',
      skills: ['Figma', 'Visual Identity', 'Design Systems', '3D Motion']
    },
    {
      id: 'emp-5',
      name: 'Kabir Mehta',
      role: 'designer',
      roleTitle: 'Visual & Motion Graphics Specialist',
      department: 'Creative & Design',
      email: 'kabir.m@devdigitsolutions.com',
      phone: '+91 99302 61209',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
      activeProjectsCount: 3,
      status: 'Active',
      joinDate: '2022-06-18',
      skills: ['After Effects', 'UGC Reels', 'Packaging', 'Meta Creative']
    },
    {
      id: 'emp-6',
      name: 'Ananya Sen',
      role: 'hr',
      roleTitle: 'Head of People & Operations',
      department: 'Human Resources',
      email: 'ananya.hr@devdigitsolutions.com',
      phone: '+91 98110 56782',
      avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=300&auto=format&fit=crop',
      activeProjectsCount: 0,
      status: 'Active',
      joinDate: '2018-05-20'
    }
  ],

  // Leave Requests for HR
  leaveRequests: [
    {
      id: 'leave-101',
      employeeId: 'emp-2',
      employeeName: 'Rohan Deshmukh',
      type: 'Paid Leave',
      startDate: '2026-09-15',
      endDate: '2026-09-17',
      days: 3,
      reason: 'Attending Next.js Global Developer Summit',
      status: 'Pending',
      appliedAt: '2026-09-04'
    },
    {
      id: 'leave-102',
      employeeId: 'emp-5',
      employeeName: 'Kabir Mehta',
      type: 'Casual Leave',
      startDate: '2026-09-22',
      endDate: '2026-09-23',
      days: 2,
      reason: 'Family function in Jaipur',
      status: 'Approved',
      appliedAt: '2026-09-02'
    }
  ],

  // Leads CRM
  leads: [
    {
      id: 'lead-1',
      name: 'Vikram Sethi',
      email: 'vikram@greenroots.in',
      phone: '+91 98101 22334',
      website: 'https://greenroots.in',
      source: 'Free Website Audit Modal',
      service: 'Search Engine Optimization (SEO)',
      budget: '₹1,50,000 - ₹3,00,000 / mo',
      message: 'Looking to dominate keywords in Delhi NCR and Mumbai for our organic tea export business.',
      status: 'New', // 'New' | 'Contacted' | 'In Discussion' | 'Proposal Sent' | 'Converted' | 'Lost'
      assignedTo: 'Aryan Varma',
      createdAt: '2026-09-05T09:30:00Z',
      notes: [
        { date: '2026-09-05', author: 'Aryan Varma', text: 'Initial inquiry received via audit tool. Domain authority 24.' }
      ]
    },
    {
      id: 'lead-2',
      name: 'Sunita Reddy',
      email: 'sunita@luxeinteriors.co',
      phone: '+91 99441 55667',
      website: 'https://luxeinteriors.co',
      source: 'Enquire Modal',
      service: 'Website & Software Development',
      budget: '₹4,00,000 one-time',
      message: 'Need complete custom Next.js portfolio with 3D interior renders showcase.',
      status: 'In Discussion',
      assignedTo: 'Rohan Deshmukh',
      createdAt: '2026-09-04T14:15:00Z',
      notes: [
        { date: '2026-09-04', author: 'Rohan Deshmukh', text: 'Scheduled preliminary scoping call for Friday 4 PM.' }
      ]
    },
    {
      id: 'lead-3',
      name: 'Manish Chawla',
      email: 'manish@chawlajewels.com',
      phone: '+91 98200 98765',
      website: 'https://chawlajewels.com',
      source: 'Audit CTA Section',
      service: 'Ad Management & ROAS',
      budget: '₹2,50,000 / mo ad spend',
      message: 'Currently struggling with Meta ad ROAS. Getting only 1.8x, need at least 4.0x.',
      status: 'Proposal Sent',
      assignedTo: 'Aryan Varma',
      createdAt: '2026-09-03T11:00:00Z',
      notes: [
        { date: '2026-09-03', author: 'Aryan Varma', text: 'Sent proposal breakdown with UGC hooks strategy.' }
      ]
    },
    {
      id: 'lead-4',
      name: 'Pooja Bhatt',
      email: 'pooja@fitflowapp.com',
      phone: '+91 97170 12345',
      website: 'https://fitflowapp.com',
      source: 'Contact Page Form',
      service: 'UGC & Video Production',
      budget: '₹1,00,000 / mo',
      message: 'Need 20 short-form video hooks per month for Instagram and YouTube shorts.',
      status: 'Contacted',
      assignedTo: 'Kabir Mehta',
      createdAt: '2026-09-02T16:45:00Z',
      notes: [
        { date: '2026-09-03', author: 'Kabir Mehta', text: 'Left initial WhatsApp message with creator portfolio.' }
      ]
    }
  ],

  // Ongoing Projects (Company Management)
  projects: [
    {
      id: 'proj-vitamuch',
      clientId: 'vitamuch',
      clientName: 'Vitamuch Wellness',
      clientContact: 'Kavita Singhal',
      clientPhone: '+91 98112 34567',
      clientEmail: 'kavita@vitamuch.com',
      title: 'Vitamuch D2C Nutrition Platform & Performance Retainer',
      service: 'Web Development & Performance ROAS',
      status: 'In Progress', // 'Discovery' | 'Design' | 'In Progress' | 'Review' | 'Completed'
      progress: 78,
      budget: '₹5,50,000',
      paidAmount: '₹4,00,000',
      dueDate: '2026-10-15',
      startDate: '2026-07-01',
      assignedTeam: [
        { id: 'emp-1', name: 'Aryan Varma', role: 'Project Director' },
        { id: 'emp-2', name: 'Rohan Deshmukh', role: 'Lead Developer' },
        { id: 'emp-4', name: 'Priya Sundaram', role: 'UI/UX Designer' }
      ],
      milestones: [
        { id: 'm1', title: 'Shopify 2.0 Theme Engineering & Core Web Vitals < 1.2s', status: 'Completed', date: '2026-07-25' },
        { id: 'm2', title: 'High-Converting Nutrition Quiz & Personalized Upsells', status: 'Completed', date: '2026-08-14' },
        { id: 'm3', title: 'Meta & Google Ads Full-Funnel Retargeting Scaled to 4.2x ROAS', status: 'In Progress', date: '2026-09-20' },
        { id: 'm4', title: 'Quarterly Conversion & Scaled Revenue Audit', status: 'Pending', date: '2026-10-10' }
      ],
      snapshots: [
        {
          id: 'snap-1',
          title: 'Storefront Homepage UI v2.4 (98 Mobile Speed Score)',
          imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
          uploadedAt: '2026-09-02',
          author: 'Priya Sundaram'
        },
        {
          id: 'snap-2',
          title: 'Meta Ads ROAS Analytics Dashboard (3.8x to 4.3x Blended)',
          imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
          uploadedAt: '2026-08-28',
          author: 'Aryan Varma'
        },
        {
          id: 'snap-3',
          title: 'Custom Subscription Bundle Checkout Flow',
          imageUrl: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop',
          uploadedAt: '2026-08-19',
          author: 'Rohan Deshmukh'
        }
      ],
      updates: [
        {
          id: 'upd-1',
          date: '2026-09-04 17:30',
          author: 'Rohan Deshmukh (Developer)',
          text: 'Completed one-click checkout integration and reduced mobile render blocking JavaScript by 42%. Server response time is now consistently 80ms.',
          progress: 78,
          whatsappSent: true
        },
        {
          id: 'upd-2',
          date: '2026-08-29 14:10',
          author: 'Aryan Varma (Director)',
          text: 'Scaled daily ad spend to ₹18,000 with steady 4.2x blended ROAS across Tier 1 metros.',
          progress: 72,
          whatsappSent: true
        }
      ]
    },
    {
      id: 'proj-rajjwellers',
      clientId: 'rajjwellers',
      clientName: 'Raj Jwellers',
      clientContact: 'Rajesh Mehra',
      clientPhone: '+91 98201 11223',
      clientEmail: 'info@rajjwellers.com',
      title: 'Raj Jwellers Luxury Bridal Showcase & Omnichannel Acquisition',
      service: 'Branding & Local Showroom SEM',
      status: 'In Progress',
      progress: 65,
      budget: '₹4,80,000',
      paidAmount: '₹3,00,000',
      dueDate: '2026-10-30',
      startDate: '2026-07-15',
      assignedTeam: [
        { id: 'emp-1', name: 'Aryan Varma', role: 'Project Director' },
        { id: 'emp-4', name: 'Priya Sundaram', role: 'Lead UI/UX Designer' },
        { id: 'emp-5', name: 'Kabir Mehta', role: 'Motion & Video Producer' }
      ],
      milestones: [
        { id: 'm10', title: 'Brand Identity & Luxury Palette Refresh', status: 'Completed', date: '2026-08-05' },
        { id: 'm11', title: 'Interactive Bridal Catalog & VIP Consultation Booking', status: 'Completed', date: '2026-08-26' },
        { id: 'm12', title: 'Geo-Targeted Showroom Footfall Campaign', status: 'In Progress', date: '2026-09-25' },
        { id: 'm13', title: 'Diwali Festive Video Campaign Production', status: 'In Progress', date: '2026-10-15' }
      ],
      snapshots: [
        {
          id: 'snap-10',
          title: 'Bridal Heritage Jewelry Interactive Lookbook UI',
          imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
          uploadedAt: '2026-09-01',
          author: 'Priya Sundaram'
        },
        {
          id: 'snap-11',
          title: 'Festive Gold Jewellery Promo Creative Reel (Format 9:16)',
          imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
          uploadedAt: '2026-08-20',
          author: 'Kabir Mehta'
        }
      ],
      updates: [
        {
          id: 'upd-10',
          date: '2026-09-03 11:20',
          author: 'Priya Sundaram (Designer)',
          text: 'Finalized high-resolution luxury bridal catalog. Gold foil textures approved and sent for front-end implementation.',
          progress: 65,
          whatsappSent: true
        }
      ]
    },
    {
      id: 'proj-wehere',
      clientId: 'wehere',
      clientName: 'Wehere App Ecosystem',
      clientContact: 'Amitabh Sen',
      clientPhone: '+91 97115 88990',
      clientEmail: 'amitabh@wehereapp.io',
      title: 'Wehere Native iOS & Scalable Microservices Architecture',
      service: 'Mobile Engineering & Cloud DevOps',
      status: 'In Progress',
      progress: 88,
      budget: '₹8,50,000',
      paidAmount: '₹7,00,000',
      dueDate: '2026-09-30',
      startDate: '2026-05-10',
      assignedTeam: [
        { id: 'emp-1', name: 'Aryan Varma', role: 'Project Director' },
        { id: 'emp-3', name: 'Neha Kapoor', role: 'Mobile iOS Architect' },
        { id: 'emp-2', name: 'Rohan Deshmukh', role: 'Cloud Backend Engineer' }
      ],
      milestones: [
        { id: 'm20', title: 'Swift 6 & iOS 18 Compatibility Architecture', status: 'Completed', date: '2026-06-20' },
        { id: 'm21', title: 'Low-Latency Push Notification & Socket Engine', status: 'Completed', date: '2026-07-15' },
        { id: 'm22', title: 'TestFlight External Beta (1,000 Users)', status: 'Completed', date: '2026-08-20' },
        { id: 'm23', title: 'App Store Production Submission & Security Audit', status: 'In Progress', date: '2026-09-25' }
      ],
      snapshots: [
        {
          id: 'snap-20',
          title: 'iOS App Store Staging Build & TestFlight Verification',
          imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
          uploadedAt: '2026-09-04',
          author: 'Neha Kapoor'
        }
      ],
      updates: [
        {
          id: 'upd-20',
          date: '2026-09-04 16:00',
          author: 'Neha Kapoor (iOS Architect)',
          text: 'Fixed socket reconnect loop on background thread. Memory footprint reduced to 42MB. Preparing final production IPA.',
          progress: 88,
          whatsappSent: true
        }
      ]
    }
  ],

  // Customer Ticketing System
  tickets: [
    {
      id: 'tkt-1001',
      ticketNumber: '#TKT-1001',
      clientId: 'vitamuch',
      clientName: 'Vitamuch Wellness',
      title: 'Add Cash on Delivery (COD) threshold restriction above ₹5,000',
      category: 'Feature Request', // 'Bug' | 'Feature Request' | 'Content Change' | 'Billing' | 'Urgent'
      priority: 'High', // 'Low' | 'Medium' | 'High' | 'Urgent'
      status: 'In Progress', // 'Open' | 'In Progress' | 'Waiting for Client' | 'Resolved' | 'Closed'
      assignedTo: 'Rohan Deshmukh',
      department: 'Engineering',
      createdAt: '2026-09-04T10:15:00Z',
      messages: [
        {
          id: 'msg-1',
          sender: 'Kavita Singhal (Client)',
          text: 'Hi Dev Digit team, we noticed high return-to-origin (RTO) on COD orders exceeding ₹5,000. Can we restrict COD for orders above this value and require UPI/Card prepayment?',
          date: '2026-09-04 10:15'
        },
        {
          id: 'msg-2',
          sender: 'Rohan Deshmukh (Developer)',
          text: 'Hi Kavita, absolutely. We are deploying custom Shopify checkout validation scripts. Testing in staging environment now.',
          date: '2026-09-04 11:30'
        }
      ]
    },
    {
      id: 'tkt-1002',
      ticketNumber: '#TKT-1002',
      clientId: 'rajjwellers',
      clientName: 'Raj Jwellers',
      title: 'Update Festive Gold Coin Banner on Homepage for upcoming season',
      category: 'Content Change',
      priority: 'Medium',
      status: 'Resolved',
      assignedTo: 'Priya Sundaram',
      department: 'Creative & Design',
      createdAt: '2026-09-03T15:20:00Z',
      messages: [
        {
          id: 'msg-3',
          sender: 'Rajesh Mehra (Client)',
          text: 'Please swap the hero slide banner with our 24K Gold Coin Diwali introductory rate.',
          date: '2026-09-03 15:20'
        },
        {
          id: 'msg-4',
          sender: 'Priya Sundaram (Designer)',
          text: 'Banner design created, verified and pushed live on production. Verified on mobile & desktop!',
          date: '2026-09-03 17:45'
        }
      ]
    },
    {
      id: 'tkt-1003',
      ticketNumber: '#TKT-1003',
      clientId: 'wehere',
      clientName: 'Wehere App Ecosystem',
      title: 'Request GST Invoicing Receipt for August Cloud Retainer',
      category: 'Billing',
      priority: 'Low',
      status: 'Open',
      assignedTo: 'Ananya Sen',
      department: 'Finance & HR',
      createdAt: '2026-09-05T08:45:00Z',
      messages: [
        {
          id: 'msg-5',
          sender: 'Amitabh Sen (Client)',
          text: 'Need official signed tax invoice copy for August sprint retainer for our CA filing.',
          date: '2026-09-05 08:45'
        }
      ]
    }
  ],

  // Financial History Between Admin and Client
  invoices: [
    {
      id: 'inv-2026-081',
      invoiceNumber: 'DDS/2026/081',
      clientId: 'vitamuch',
      clientName: 'Vitamuch Wellness',
      projectName: 'Vitamuch D2C Nutrition Platform & Performance Retainer',
      issueDate: '2026-08-01',
      dueDate: '2026-08-15',
      amount: 250000,
      paidAmount: 250000,
      balance: 0,
      status: 'Paid', // 'Paid' | 'Partial' | 'Due' | 'Overdue'
      paymentMethod: 'Bank Transfer (NEFT)',
      items: [
        { description: 'Monthly Performance Marketing & Google/Meta ROAS Management', qty: 1, rate: 150000, amount: 150000 },
        { description: 'Shopify Checkout Optimization & Speed Tuning Sprint', qty: 1, rate: 100000, amount: 100000 }
      ],
      gstRate: 18,
      gstAmount: 45000,
      totalAmount: 295000,
      paidDate: '2026-08-10'
    },
    {
      id: 'inv-2026-092',
      invoiceNumber: 'DDS/2026/092',
      clientId: 'vitamuch',
      clientName: 'Vitamuch Wellness',
      projectName: 'Vitamuch D2C Nutrition Platform & Performance Retainer',
      issueDate: '2026-09-01',
      dueDate: '2026-09-15',
      amount: 150000,
      paidAmount: 0,
      balance: 177000,
      status: 'Due',
      paymentMethod: 'Pending (UPI / IMPS)',
      items: [
        { description: 'September Growth Retainer & Attribution Modeling', qty: 1, rate: 150000, amount: 150000 }
      ],
      gstRate: 18,
      gstAmount: 27000,
      totalAmount: 177000,
      paidDate: null
    },
    {
      id: 'inv-2026-078',
      invoiceNumber: 'DDS/2026/078',
      clientId: 'rajjwellers',
      clientName: 'Raj Jwellers',
      projectName: 'Raj Jwellers Luxury Bridal Showcase',
      issueDate: '2026-07-20',
      dueDate: '2026-08-05',
      amount: 300000,
      paidAmount: 300000,
      balance: 0,
      status: 'Paid',
      paymentMethod: 'RTGS Transfer',
      items: [
        { description: 'Bridal Identity Design & Visual Lookbook Shoot Brief', qty: 1, rate: 300000, amount: 300000 }
      ],
      gstRate: 18,
      gstAmount: 54000,
      totalAmount: 354000,
      paidDate: '2026-08-02'
    },
    {
      id: 'inv-2026-095',
      invoiceNumber: 'DDS/2026/095',
      clientId: 'wehere',
      clientName: 'Wehere App Ecosystem',
      projectName: 'Wehere Native iOS & Scalable Microservices Architecture',
      issueDate: '2026-08-25',
      dueDate: '2026-09-10',
      amount: 350000,
      paidAmount: 200000,
      balance: 213000,
      status: 'Partial',
      paymentMethod: 'Bank Transfer (Split)',
      items: [
        { description: 'Milestone 3: TestFlight External Beta & Cloud Socket Engine', qty: 1, rate: 350000, amount: 350000 }
      ],
      gstRate: 18,
      gstAmount: 63000,
      totalAmount: 413000,
      paidDate: '2026-08-28'
    }
  ],

  // WhatsApp Notification History & Automated Log
  whatsappNotifications: [
    {
      id: 'wa-1',
      recipientName: 'Kavita Singhal (Vitamuch)',
      recipientPhone: '+91 98112 34567',
      projectName: 'Vitamuch D2C Nutrition Platform',
      type: 'Project Progress Update',
      message: '🚀 Dev Digit Solutions Progress Update: Completed one-click checkout integration and reduced mobile render blocking JavaScript by 42%. Current Project Progress: 78%. View details on your client portal.',
      sentAt: '2026-09-04 17:31',
      status: 'Delivered'
    },
    {
      id: 'wa-2',
      recipientName: 'Rajesh Mehra (Raj Jwellers)',
      recipientPhone: '+91 98201 11223',
      projectName: 'Raj Jwellers Luxury Bridal Showcase',
      type: 'Ticket Resolved',
      message: '✨ Dev Digit Solutions Alert: Ticket #TKT-1002 (Festive Gold Coin Banner) has been resolved and pushed live on your website. Please review.',
      sentAt: '2026-09-03 17:46',
      status: 'Delivered'
    },
    {
      id: 'wa-3',
      recipientName: 'Amitabh Sen (Wehere)',
      recipientPhone: '+91 97115 88990',
      projectName: 'Wehere Native iOS',
      type: 'Milestone Completed',
      message: '🎉 Dev Digit Solutions Milestone Alert: Milestone "TestFlight External Beta (1,000 Users)" is officially marked COMPLETED! Overall Progress: 88%.',
      sentAt: '2026-08-20 18:00',
      status: 'Delivered'
    }
  ]
};

export function AppProvider({ children }) {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse saved state:', e);
    }
    return initialSeedData;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save state to localStorage:', e);
    }
  }, [state]);

  // Toast Helper
  const showToast = (message, type = 'success') => {
    setState((prev) => ({ ...prev, toast: { message, type } }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, toast: null }));
    }, 4500);
  };

  const closeToast = () => {
    setState((prev) => ({ ...prev, toast: null }));
  };

  // Role Switcher
  const setCurrentRole = (role) => {
    setState((prev) => ({ ...prev, currentRole: role }));
    showToast(`Switched active view to: ${role.toUpperCase()}`, 'info');
  };

  // Client Switcher for Client Portal
  const setCurrentClientId = (clientId) => {
    setState((prev) => ({ ...prev, currentClientId: clientId }));
  };

  // Leads CRM methods
  const addLead = (leadData) => {
    const newLead = {
      id: `lead-${Date.now()}`,
      name: leadData.name || 'Anonymous Inquiry',
      email: leadData.email || '',
      phone: leadData.phone || '',
      website: leadData.website || '',
      source: leadData.source || 'Website Form',
      service: leadData.service || 'General Tech & Marketing',
      budget: leadData.budget || 'Custom Scope',
      message: leadData.message || leadData.notes || '',
      status: 'New',
      assignedTo: 'Aryan Varma',
      createdAt: new Date().toISOString(),
      notes: [
        { date: new Date().toISOString().slice(0, 10), author: 'System', text: 'Lead captured from public website.' }
      ]
    };

    setState((prev) => ({
      ...prev,
      leads: [newLead, ...prev.leads]
    }));

    showToast('Your inquiry has been submitted! Our strategists will contact you shortly.', 'success');
    return newLead;
  };

  const updateLeadStatus = (leadId, newStatus, noteText = '', assignedTo = null) => {
    setState((prev) => ({
      ...prev,
      leads: prev.leads.map((lead) => {
        if (lead.id === leadId) {
          const updatedNotes = noteText
            ? [
                {
                  date: new Date().toISOString().slice(0, 10),
                  author: prev.currentRole === 'admin' ? 'Admin' : prev.currentRole,
                  text: noteText
                },
                ...lead.notes
              ]
            : lead.notes;

          return {
            ...lead,
            status: newStatus,
            assignedTo: assignedTo || lead.assignedTo,
            notes: updatedNotes
          };
        }
        return lead;
      })
    }));

    showToast(`Lead status updated to: ${newStatus}`, 'success');
  };

  const convertLeadToProject = (leadId, projectData) => {
    const lead = state.leads.find((l) => l.id === leadId);
    if (!lead) return;

    const newProject = {
      id: `proj-${Date.now()}`,
      clientId: lead.name.toLowerCase().replace(/[^a-z0-9]/g, '') || `client-${Date.now()}`,
      clientName: lead.name,
      clientContact: lead.name,
      clientPhone: lead.phone,
      clientEmail: lead.email,
      title: projectData.title || `${lead.name} - ${lead.service}`,
      service: lead.service,
      status: 'In Progress',
      progress: 10,
      budget: projectData.budget || lead.budget || '₹2,50,000',
      paidAmount: '₹0',
      dueDate: projectData.dueDate || '2026-11-30',
      startDate: new Date().toISOString().slice(0, 10),
      assignedTeam: [
        { id: 'emp-1', name: 'Aryan Varma', role: 'Project Director' },
        { id: 'emp-2', name: 'Rohan Deshmukh', role: 'Lead Developer' }
      ],
      milestones: [
        { id: `m-${Date.now()}-1`, title: 'Project Kickoff & Technical Architecture Blueprint', status: 'In Progress', date: new Date().toISOString().slice(0, 10) },
        { id: `m-${Date.now()}-2`, title: 'Design Mockups & Client Approval', status: 'Pending', date: '2026-10-15' }
      ],
      snapshots: [],
      updates: [
        {
          id: `upd-${Date.now()}`,
          date: new Date().toLocaleString(),
          author: 'Admin',
          text: 'Project initiated and converted from qualified inbound lead.',
          progress: 10,
          whatsappSent: true
        }
      ]
    };

    setState((prev) => ({
      ...prev,
      projects: [newProject, ...prev.projects],
      leads: prev.leads.map((l) => (l.id === leadId ? { ...l, status: 'Converted' } : l))
    }));

    showToast(`Lead converted into active project: ${newProject.title}`, 'success');
  };

  // Projects & WhatsApp Updates
  const addProjectUpdate = (projectId, { updateText, progress, snapshotUrl, snapshotTitle, notifyWhatsapp = true }) => {
    const project = state.projects.find((p) => p.id === projectId);
    if (!project) return;

    const newProgress = progress !== undefined ? Number(progress) : project.progress;
    const updateId = `upd-${Date.now()}`;
    const authorRoleName =
      state.currentRole === 'admin'
        ? 'Admin'
        : state.currentRole === 'developer'
        ? 'Developer'
        : state.currentRole === 'designer'
        ? 'Designer'
        : 'Team';

    const newUpdateItem = {
      id: updateId,
      date: new Date().toLocaleString(),
      author: `${authorRoleName}`,
      text: updateText,
      progress: newProgress,
      whatsappSent: notifyWhatsapp
    };

    let newSnapshots = [...project.snapshots];
    if (snapshotUrl) {
      newSnapshots.unshift({
        id: `snap-${Date.now()}`,
        title: snapshotTitle || `Progress Snapshot (${newProgress}%)`,
        imageUrl: snapshotUrl,
        uploadedAt: new Date().toISOString().slice(0, 10),
        author: authorRoleName
      });
    }

    // Auto-create WhatsApp Notification
    const formattedWaMsg = `🚀 *Dev Digit Solutions Update* for *${project.title}*:\n\n` +
      `📌 *Latest Update*: ${updateText}\n` +
      `📊 *Current Progress*: ${newProgress}%\n` +
      (snapshotUrl ? `🖼️ *Snapshot Deliverable Attached*\n` : '') +
      `\nView live interactive progress, snapshots, and milestone logs in your Client Dashboard: https://devdigitsolutions.com/portal\n\n` +
      `- Dev Digit Solutions Engineering & Growth Team`;

    const waNotification = {
      id: `wa-${Date.now()}`,
      recipientName: `${project.clientContact} (${project.clientName})`,
      recipientPhone: project.clientPhone,
      projectName: project.title,
      type: 'Project Progress Update',
      message: formattedWaMsg,
      sentAt: new Date().toLocaleString(),
      status: 'Delivered'
    };

    setState((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => {
        if (p.id === projectId) {
          return {
            ...p,
            progress: newProgress,
            updates: [newUpdateItem, ...p.updates],
            snapshots: newSnapshots
          };
        }
        return p;
      }),
      whatsappNotifications: [waNotification, ...prev.whatsappNotifications]
    }));

    // If notifyWhatsapp is true, trigger WhatsApp URL opening helper
    if (notifyWhatsapp && project.clientPhone) {
      const cleanPhone = project.clientPhone.replace(/\D/g, '');
      const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(formattedWaMsg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      showToast(`Progress saved & WhatsApp dispatch opened for ${project.clientName}!`, 'success');
    } else {
      showToast('Project progress & snapshots saved successfully.', 'success');
    }
  };

  const updateMilestoneStatus = (projectId, milestoneId, newStatus) => {
    setState((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => {
        if (p.id === projectId) {
          return {
            ...p,
            milestones: p.milestones.map((m) =>
              m.id === milestoneId ? { ...m, status: newStatus } : m
            )
          };
        }
        return p;
      })
    }));
    showToast(`Milestone updated to ${newStatus}`, 'info');
  };

  // Ticketing System
  const addTicket = (ticketData) => {
    const ticketNumber = `#TKT-${1000 + state.tickets.length + 1}`;
    const newTicket = {
      id: `tkt-${Date.now()}`,
      ticketNumber,
      clientId: ticketData.clientId || state.currentClientId,
      clientName: ticketData.clientName || 'Client Request',
      title: ticketData.title,
      category: ticketData.category || 'General Support',
      priority: ticketData.priority || 'Medium',
      status: 'Open',
      assignedTo: ticketData.assignedTo || 'Unassigned',
      department: ticketData.department || 'Engineering',
      createdAt: new Date().toISOString(),
      messages: [
        {
          id: `msg-${Date.now()}`,
          sender: ticketData.clientName ? `${ticketData.clientName} (Client)` : 'Client',
          text: ticketData.message || ticketData.title,
          date: new Date().toLocaleString()
        }
      ]
    };

    setState((prev) => ({
      ...prev,
      tickets: [newTicket, ...prev.tickets]
    }));

    showToast(`Support Ticket ${ticketNumber} created successfully!`, 'success');
    return newTicket;
  };

  const addTicketReply = (ticketId, replyText, notifyWhatsapp = true) => {
    const ticket = state.tickets.find((t) => t.id === ticketId);
    if (!ticket) return;

    const senderName =
      state.currentRole === 'client'
        ? `${ticket.clientName} (Client)`
        : `${state.currentRole.toUpperCase()} Specialist`;

    const newReply = {
      id: `msg-${Date.now()}`,
      sender: senderName,
      text: replyText,
      date: new Date().toLocaleString()
    };

    let waNotification = null;
    if (notifyWhatsapp && state.currentRole !== 'client') {
      const clientProject = state.projects.find((p) => p.clientId === ticket.clientId);
      const targetPhone = clientProject ? clientProject.clientPhone : '+91 70715 01382';
      const cleanPhone = targetPhone.replace(/\D/g, '');

      const waMsg = `🎫 *Dev Digit Solutions Ticket Update*\n` +
        `Ticket: *${ticket.ticketNumber} - ${ticket.title}*\n\n` +
        `💬 *Response*: ${replyText}\n\n` +
        `Status: *${ticket.status}*\nView full ticket thread: https://devdigitsolutions.com/portal`;

      waNotification = {
        id: `wa-${Date.now()}`,
        recipientName: ticket.clientName,
        recipientPhone: targetPhone,
        projectName: ticket.title,
        type: 'Ticket Reply',
        message: waMsg,
        sentAt: new Date().toLocaleString(),
        status: 'Delivered'
      };

      const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(waMsg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    setState((prev) => ({
      ...prev,
      tickets: prev.tickets.map((t) =>
        t.id === ticketId
          ? {
              ...t,
              status: state.currentRole === 'client' ? 'Open' : 'Waiting for Client',
              messages: [...t.messages, newReply]
            }
          : t
      ),
      whatsappNotifications: waNotification
        ? [waNotification, ...prev.whatsappNotifications]
        : prev.whatsappNotifications
    }));

    showToast('Reply posted to ticket.', 'success');
  };

  const updateTicketStatus = (ticketId, status, priority, assignedTo) => {
    setState((prev) => ({
      ...prev,
      tickets: prev.tickets.map((t) => {
        if (t.id === ticketId) {
          return {
            ...t,
            status: status || t.status,
            priority: priority || t.priority,
            assignedTo: assignedTo || t.assignedTo
          };
        }
        return t;
      })
    }));
    showToast('Ticket updated successfully', 'info');
  };

  // Financial History & Invoicing
  const addInvoice = (invoiceData) => {
    const invNumber = `DDS/2026/0${state.invoices.length + 90}`;
    const amount = Number(invoiceData.amount) || 0;
    const gstRate = 18;
    const gstAmount = (amount * gstRate) / 100;
    const totalAmount = amount + gstAmount;

    const newInvoice = {
      id: `inv-${Date.now()}`,
      invoiceNumber: invNumber,
      clientId: invoiceData.clientId,
      clientName: invoiceData.clientName,
      projectName: invoiceData.projectName,
      issueDate: invoiceData.issueDate || new Date().toISOString().slice(0, 10),
      dueDate: invoiceData.dueDate || '2026-10-15',
      amount: amount,
      paidAmount: 0,
      balance: totalAmount,
      status: 'Due',
      paymentMethod: invoiceData.paymentMethod || 'Bank Transfer / UPI',
      items: invoiceData.items || [
        { description: invoiceData.description || 'Digital Services Retainer', qty: 1, rate: amount, amount: amount }
      ],
      gstRate,
      gstAmount,
      totalAmount,
      paidDate: null
    };

    setState((prev) => ({
      ...prev,
      invoices: [newInvoice, ...prev.invoices]
    }));

    showToast(`Invoice ${invNumber} generated for ${invoiceData.clientName}!`, 'success');
    return newInvoice;
  };

  const recordPayment = (invoiceId, paidAmount, paymentMethod = 'Bank Transfer (NEFT)') => {
    setState((prev) => ({
      ...prev,
      invoices: prev.invoices.map((inv) => {
        if (inv.id === invoiceId) {
          const newPaid = Number(inv.paidAmount) + Number(paidAmount);
          const newBalance = Math.max(0, inv.totalAmount - newPaid);
          const newStatus = newBalance === 0 ? 'Paid' : 'Partial';

          return {
            ...inv,
            paidAmount: newPaid,
            balance: newBalance,
            status: newStatus,
            paymentMethod,
            paidDate: new Date().toISOString().slice(0, 10)
          };
        }
        return inv;
      })
    }));

    showToast('Payment recorded successfully and invoice balance updated.', 'success');
  };

  // HR & Leave Requests
  const addLeaveRequest = (leaveData) => {
    const newLeave = {
      id: `leave-${Date.now()}`,
      employeeId: leaveData.employeeId || 'emp-2',
      employeeName: leaveData.employeeName || 'Rohan Deshmukh',
      type: leaveData.type || 'Casual Leave',
      startDate: leaveData.startDate,
      endDate: leaveData.endDate,
      days: leaveData.days || 1,
      reason: leaveData.reason,
      status: 'Pending',
      appliedAt: new Date().toISOString().slice(0, 10)
    };

    setState((prev) => ({
      ...prev,
      leaveRequests: [newLeave, ...prev.leaveRequests]
    }));

    showToast('Leave request submitted to HR department.', 'success');
  };

  const updateLeaveStatus = (leaveId, status) => {
    setState((prev) => ({
      ...prev,
      leaveRequests: prev.leaveRequests.map((l) =>
        l.id === leaveId ? { ...l, status } : l
      )
    }));
    showToast(`Leave request ${status}`, 'info');
  };

  // Direct WhatsApp Launcher Utility
  const sendDirectWhatsApp = (phone, text) => {
    const cleanPhone = (phone || '').replace(/\D/g, '');
    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Reset Data to Seed Defaults
  const resetToDefaults = () => {
    setState(initialSeedData);
    localStorage.removeItem(STORAGE_KEY);
    showToast('Reset all demo state to fresh default values!', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        state,
        currentRole: state.currentRole,
        setCurrentRole,
        currentClientId: state.currentClientId,
        setCurrentClientId,
        leads: state.leads,
        addLead,
        updateLeadStatus,
        convertLeadToProject,
        projects: state.projects,
        addProjectUpdate,
        updateMilestoneStatus,
        tickets: state.tickets,
        addTicket,
        addTicketReply,
        updateTicketStatus,
        invoices: state.invoices,
        addInvoice,
        recordPayment,
        teamMembers: state.teamMembers,
        leaveRequests: state.leaveRequests,
        addLeaveRequest,
        updateLeaveStatus,
        whatsappNotifications: state.whatsappNotifications,
        sendDirectWhatsApp,
        showToast,
        closeToast,
        resetToDefaults
      }}
    >
      {children}

      {/* Global Toast Notification Container */}
      {state.toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div
            className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border text-sm font-medium ${
              state.toast.type === 'success'
                ? 'bg-slate-900 text-white border-emerald-500/40 shadow-emerald-950/20'
                : state.toast.type === 'info'
                ? 'bg-blue-600 text-white border-blue-400/40 shadow-blue-950/20'
                : 'bg-amber-600 text-white border-amber-400/40 shadow-amber-950/20'
            }`}
          >
            <span>{state.toast.message}</span>
            <button
              onClick={closeToast}
              className="ml-2 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
