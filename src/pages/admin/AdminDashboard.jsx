import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Briefcase,
  Users,
  Ticket,
  Receipt,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function AdminDashboard() {
  const {
    currentRole,
    leads,
    projects,
    tickets,
    invoices,
    teamMembers,
    leaveRequests,
    whatsappNotifications,
    sendDirectWhatsApp
  } = useApp();

  // Financial metrics
  const totalInvoiced = invoices.reduce((acc, inv) => acc + inv.totalAmount, 0);
  const totalCollected = invoices.reduce((acc, inv) => acc + inv.paidAmount, 0);
  const totalDue = invoices.reduce((acc, inv) => acc + inv.balance, 0);

  // Leads count
  const newLeads = leads.filter((l) => l.status === 'New');
  const openTickets = tickets.filter((t) => t.status === 'Open' || t.status === 'In Progress');
  const pendingLeaves = leaveRequests.filter((l) => l.status === 'Pending');

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner Tailored by Role */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentRole.toUpperCase()} Active Workspace</span>
            </div>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              {currentRole === 'admin' && 'Executive Management & Agency Command'}
              {currentRole === 'developer' && 'Engineering Workspace & Active Sprints'}
              {currentRole === 'designer' && 'Design Studio & Creative Deliverables'}
              {currentRole === 'hr' && 'People Operations & Team Allocation'}
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              {currentRole === 'admin' && 'Real-time overview of inbound leads, ongoing client projects, WhatsApp automated notifications, and billing status.'}
              {currentRole === 'developer' && 'Track assigned code repositories, solve technical tickets, and report sprint milestone progress to clients.'}
              {currentRole === 'designer' && 'Upload UI/UX deliverables, review creative revisions, and monitor client design approvals.'}
              {currentRole === 'hr' && 'Manage team workloads, process pending leave requests, and track departmental staffing across active accounts.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/admin/projects"
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-lg shadow-blue-600/20 transition-all flex items-center gap-1.5"
            >
              <span>Manage Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/portal"
              className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-heading font-semibold text-xs transition-all flex items-center gap-1.5"
            >
              <span>View Client Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Top 4 Metric KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Metric 1 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {currentRole === 'hr' ? 'Team Members' : 'Active Projects'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            {currentRole === 'hr' ? teamMembers.length : projects.length}
          </div>
          <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>100% On-Track & Supervised</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {currentRole === 'admin' ? 'New CRM Leads' : 'Open Support Tickets'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              {currentRole === 'admin' ? <Users className="w-4 h-4" /> : <Ticket className="w-4 h-4" />}
            </div>
          </div>
          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            {currentRole === 'admin' ? newLeads.length : openTickets.length}
          </div>
          <div className="text-[11px] text-amber-600 font-semibold">
            Requires Attention / Follow-up
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {currentRole === 'hr' ? 'Pending Leaves' : 'Auto WhatsApp Updates'}
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            {currentRole === 'hr' ? pendingLeaves.length : whatsappNotifications.length}
          </div>
          <div className="text-[11px] text-emerald-600 font-semibold">
            {currentRole === 'hr' ? 'Awaiting HR Approval' : 'Delivered to Clients'}
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Total Invoiced (INR)
            </span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Receipt className="w-4 h-4" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
            ₹{(totalInvoiced / 100000).toFixed(2)}L
          </div>
          <div className="text-[11px] text-slate-500">
            Collected: ₹{(totalCollected / 100000).toFixed(2)}L • Due: ₹{(totalDue / 100000).toFixed(2)}L
          </div>
        </div>

      </div>

      {/* Grid: Ongoing Projects + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (8 cols): Ongoing Projects Health */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Ongoing Projects & Real-Time Progress
              </h3>
              <p className="text-xs text-slate-500">
                Live delivery velocity, milestone completion, and assigned specialists
              </p>
            </div>
            <Link
              to="/admin/projects"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>Manage All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {projects.map((p) => (
              <div
                key={p.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        {p.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700">
                        {p.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Client: <strong>{p.clientName}</strong> ({p.clientContact}) • Budget: {p.budget}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        sendDirectWhatsApp(
                          p.clientPhone,
                          `Hello ${p.clientContact}, sharing an update regarding your project ${p.title} with Dev Digit Solutions.`
                        )
                      }
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                      title="Direct WhatsApp to client"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                    <Link
                      to="/admin/projects"
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-[11px] font-bold transition-colors"
                    >
                      Update
                    </Link>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600 font-medium">Sprint Completion</span>
                    <span className="font-heading font-bold text-blue-600">{p.progress}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>

                {/* Assigned Team & Latest Update */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-200/60 gap-1">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="font-semibold text-slate-700">Team:</span>
                    <span>{p.assignedTeam.map((m) => m.name).join(', ')}</span>
                  </div>
                  {p.updates.length > 0 && (
                    <div className="text-[11px] text-slate-400 italic truncate max-w-sm">
                      Latest: "{p.updates[0].text}"
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (4 cols): Recent WhatsApp Dispatches & Quick Actions */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Automated WhatsApp Notifications Feed */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  WhatsApp Engine Activity
                </h3>
              </div>
              <Link
                to="/admin/whatsapp"
                className="text-[11px] font-bold text-emerald-700 hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="space-y-3">
              {whatsappNotifications.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-slate-800">{item.recipientName}</span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                      {item.status}
                    </span>
                  </div>
                  <div className="text-slate-500 text-[11px] line-clamp-2">
                    {item.message}
                  </div>
                  <div className="text-[10px] text-slate-400 pt-0.5">
                    {item.sentAt} • {item.type}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Role Quick Actions */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-md border border-slate-800 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Quick Shortcuts</span>
            </h4>
            
            <div className="space-y-2 text-xs">
              <Link
                to="/admin/projects"
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <span>Post Progress Update & WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
              </Link>
              <Link
                to="/admin/leads"
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <span>Review Inbound Website Leads</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold text-[10px]">
                  {newLeads.length} new
                </span>
              </Link>
              <Link
                to="/admin/tickets"
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <span>Customer Support Tickets</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px]">
                  {openTickets.length} open
                </span>
              </Link>
              <Link
                to="/admin/finance"
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <span>Generate Client Tax Invoice</span>
                <Receipt className="w-3.5 h-3.5 text-blue-400" />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Inbound Leads Table Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              Latest Inbound CRM Inquiries
            </h3>
            <p className="text-xs text-slate-500">
              Captured in real-time from Free Audit tools, Contact pages, and Service quote forms
            </p>
          </div>
          <Link
            to="/admin/leads"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <span>Full CRM Pipeline</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] font-bold">
                <th className="pb-3">Lead Name</th>
                <th className="pb-3">Service Interest</th>
                <th className="pb-3">Contact</th>
                <th className="pb-3">Source</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.slice(0, 4).map((l) => (
                <tr key={l.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 font-semibold text-slate-900">
                    <div>{l.name}</div>
                    {l.website && (
                      <a
                        href={l.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] text-blue-600 hover:underline"
                      >
                        {l.website}
                      </a>
                    )}
                  </td>
                  <td className="py-3 text-slate-600 max-w-[200px] truncate">
                    {l.service}
                  </td>
                  <td className="py-3 text-slate-600">
                    <div>{l.phone}</div>
                    <div className="text-[10px] text-slate-400">{l.email}</div>
                  </td>
                  <td className="py-3 text-[11px] text-slate-500">
                    {l.source}
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        l.status === 'New'
                          ? 'bg-blue-100 text-blue-700'
                          : l.status === 'In Discussion'
                          ? 'bg-amber-100 text-amber-700'
                          : l.status === 'Converted'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {l.status}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() =>
                          sendDirectWhatsApp(
                            l.phone,
                            `Hello ${l.name}, thank you for reaching out to Dev Digit Solutions regarding ${l.service}. Let's discuss your roadmap.`
                          )
                        }
                        className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-700 transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </button>
                      <Link
                        to="/admin/leads"
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold"
                      >
                        View CRM
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
