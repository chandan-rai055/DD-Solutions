import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { siteData } from '../../data/siteData';
import {
  CheckCircle2,
  Clock,
  MessageSquare,
  Ticket,
  Receipt,
  Printer,
  ExternalLink,
  Plus,
  X,
  Layers,
  ArrowUpRight,
  Eye
} from 'lucide-react';

export default function ClientPortalPage() {
  const {
    projects,
    tickets,
    invoices,
    addTicket,
    addTicketReply,
    currentClientId,
    setCurrentClientId,
    sendDirectWhatsApp
  } = useApp();

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'snapshots' | 'tickets' | 'invoices'
  const [selectedSnapshot, setSelectedSnapshot] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // New ticket state
  const [newTicketModalOpen, setNewTicketModalOpen] = useState(false);
  const [newTicketForm, setNewTicketForm] = useState({
    title: '',
    category: 'Feature Request',
    priority: 'Medium',
    message: ''
  });

  // Client Ticket Reply state
  const [replyTicketId, setReplyTicketId] = useState(null);
  const [clientReplyText, setClientReplyText] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = "Client Portal & Live Project Dashboard | Dev Digit Solutions";
  }, []);

  // Find project corresponding to currentClientId or fallback
  const clientProject =
    projects.find((p) => p.clientId === currentClientId) ||
    projects[0];

  // Invoices for this client
  const clientInvoices = invoices.filter(
    (inv) => inv.clientId === clientProject?.clientId
  );

  // Tickets for this client
  const clientTickets = tickets.filter(
    (t) => t.clientId === clientProject?.clientId
  );

  // Financial summary
  const totalInvoiced = clientInvoices.reduce((a, b) => a + b.totalAmount, 0);
  const totalPaid = clientInvoices.reduce((a, b) => a + b.paidAmount, 0);
  const totalBalance = clientInvoices.reduce((a, b) => a + b.balance, 0);

  const handleCreateTicketSubmit = (e) => {
    e.preventDefault();
    addTicket({
      clientId: clientProject.clientId,
      clientName: clientProject.clientName,
      title: newTicketForm.title,
      category: newTicketForm.category,
      priority: newTicketForm.priority,
      department: newTicketForm.category === 'Bug' ? 'Engineering' : 'Creative & Design',
      message: newTicketForm.message
    });
    setNewTicketModalOpen(false);
    setNewTicketForm({
      title: '',
      category: 'Feature Request',
      priority: 'Medium',
      message: ''
    });
  };

  const handleSendClientReply = (ticketId) => {
    if (!clientReplyText.trim()) return;
    addTicketReply(ticketId, clientReplyText, true);
    setClientReplyText('');
    setReplyTicketId(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-body flex flex-col">
      
      {/* Top Client Portal Bar */}
      <header className="sticky top-0 z-40 bg-slate-950 text-white border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-heading font-black text-white text-base">
                D
              </div>
              <div>
                <div className="font-heading font-extrabold text-sm text-white">
                  Dev Digit Solutions
                </div>
                <div className="text-[10px] text-blue-400 font-mono uppercase tracking-wider">
                  Client Project Portal
                </div>
              </div>
            </Link>

            <span className="hidden sm:inline-block text-slate-700">|</span>

            {/* Client Account Switcher */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-slate-400 hidden sm:inline">Logged in as:</span>
              <select
                value={clientProject?.clientId}
                onChange={(e) => setCurrentClientId(e.target.value)}
                className="bg-slate-900 border border-slate-700 text-white font-bold text-xs rounded-xl px-2.5 py-1 focus:outline-none cursor-pointer"
              >
                {projects.map((p) => (
                  <option key={p.id} value={p.clientId}>
                    {p.clientName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() =>
                sendDirectWhatsApp(
                  '+917071501382',
                  `Hi Aryan, this is ${clientProject?.clientContact} from ${clientProject?.clientName} checking in regarding our project.`
                )
              }
              className="px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Lead Strategist</span>
            </button>

            <Link
              to="/admin"
              className="px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-semibold"
            >
              Admin Suite →
            </Link>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Project Welcome Card */}
        {clientProject ? (
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                    {clientProject.status}
                  </span>
                  <span className="text-xs text-slate-400">Target Delivery: {clientProject.dueDate}</span>
                </div>
                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  {clientProject.title}
                </h1>
                <p className="text-slate-400 text-xs sm:text-sm max-w-2xl">
                  Service Capability: <strong className="text-slate-200">{clientProject.service}</strong> • Directed by <strong>Aryan Varma</strong>
                </p>
              </div>

              {/* Big Progress Metric */}
              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 text-center flex-shrink-0 min-w-[200px] space-y-2">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Sprint Completion
                </div>
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {clientProject.progress}%
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    style={{ width: `${clientProject.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200 pb-2 text-xs font-heading font-bold">
          {[
            { id: 'overview', label: 'Sprint Milestones & Updates', icon: Layers },
            { id: 'snapshots', label: `Deliverables & Snapshots (${clientProject?.snapshots.length || 0})`, icon: Eye },
            { id: 'tickets', label: `Support & Revision Tickets (${clientTickets.length})`, icon: Ticket },
            { id: 'invoices', label: `Billing & Tax Invoices (${clientInvoices.length})`, icon: Receipt }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-2xl flex items-center gap-2 transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Sprint Milestones & Text Updates */}
        {activeTab === 'overview' && clientProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Milestones Card (6 cols) */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Scheduled Sprint Milestones
              </h3>
              <p className="text-xs text-slate-500">
                Key phase deliverables outlined in your service level agreement
              </p>

              <div className="space-y-3 pt-2">
                {clientProject.milestones.map((m) => (
                  <div
                    key={m.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs flex items-start gap-3"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        m.status === 'Completed'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {m.status === 'Completed' ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <Clock className="w-3.5 h-3.5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`font-semibold text-sm ${
                            m.status === 'Completed' ? 'text-slate-900 font-bold' : 'text-slate-700'
                          }`}
                        >
                          {m.title}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                            m.status === 'Completed'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {m.status}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">Target Date: {m.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Updates Timeline (6 cols) */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    Live Progress Log
                  </h3>
                  <p className="text-xs text-slate-500">
                    Sprint text updates documented by your assigned engineering & growth team
                  </p>
                </div>
                <button
                  onClick={() =>
                    sendDirectWhatsApp(
                      '+917071501382',
                      `Hi Dev Digit team, question about the latest update on ${clientProject.title}: "${clientProject.updates[0]?.text}"`
                    )
                  }
                  className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss on WhatsApp</span>
                </button>
              </div>

              <div className="space-y-3 pt-2">
                {clientProject.updates.map((upd) => (
                  <div
                    key={upd.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{upd.author}</span>
                      <span className="text-slate-400 text-[10px]">{upd.date}</span>
                    </div>
                    <div className="text-slate-700 leading-relaxed font-normal">
                      {upd.text}
                    </div>
                    <div className="text-[10px] text-blue-600 font-semibold pt-1">
                      Sprint Completion at this point: {upd.progress}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Snapshots & Visual Deliverables */}
        {activeTab === 'snapshots' && clientProject && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Visual Deliverables, UI Mockups & Performance Snapshots
              </h3>
              <p className="text-xs text-slate-500">
                High-resolution previews of web interfaces, advertising analytics, and technical architecture builds
              </p>
            </div>

            {clientProject.snapshots.length === 0 ? (
              <div className="p-12 text-center text-xs text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
                No visual snapshots uploaded yet for this account.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {clientProject.snapshots.map((snap) => (
                  <div
                    key={snap.id}
                    onClick={() => setSelectedSnapshot(snap)}
                    className="group rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-slate-900">
                      <img
                        src={snap.imageUrl}
                        alt={snap.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h4 className="font-heading font-bold text-sm text-slate-900 truncate">
                        {snap.title}
                      </h4>
                      <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                        <span>Prepared by {snap.author}</span>
                        <span>{snap.uploadedAt}</span>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-bold">
                        <span>Click to Inspect Full Res</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Customer Support & Revision Ticketing */}
        {activeTab === 'tickets' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900">
                  Account Support & Revision Tickets
                </h3>
                <p className="text-xs text-slate-500">
                  Submit change requests, report issues, or query billing with direct engineering replies
                </p>
              </div>

              <button
                onClick={() => setNewTicketModalOpen(true)}
                className="px-4 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Submit New Ticket</span>
              </button>
            </div>

            {clientTickets.length === 0 ? (
              <div className="p-12 text-center text-xs text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
                No tickets filed yet. Click "Submit New Ticket" if you need revisions or support.
              </div>
            ) : (
              <div className="space-y-4">
                {clientTickets.map((t) => (
                  <div
                    key={t.id}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md">
                          {t.ticketNumber}
                        </span>
                        <h4 className="font-heading font-bold text-sm text-slate-900">
                          {t.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 text-slate-700">
                          {t.priority} Priority
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            t.status === 'Resolved'
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {t.status}
                        </span>
                      </div>
                    </div>

                    {/* Messages Thread */}
                    <div className="space-y-2 pt-2 border-t border-slate-200/60">
                      {t.messages.map((m) => (
                        <div key={m.id} className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                          <div className="flex justify-between text-[10px] text-slate-400">
                            <span className="font-bold text-slate-800">{m.sender}</span>
                            <span>{m.date}</span>
                          </div>
                          <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                            {m.text}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Client Reply Bar */}
                    {replyTicketId === t.id ? (
                      <div className="pt-2 space-y-2">
                        <textarea
                          rows="2"
                          placeholder="Type your response to the Dev Digit team..."
                          value={clientReplyText}
                          onChange={(e) => setClientReplyText(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs focus:outline-none"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setReplyTicketId(null)}
                            className="px-3 py-1.5 rounded-lg text-slate-500 hover:bg-slate-200 text-[11px]"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleSendClientReply(t.id)}
                            className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px]"
                          >
                            Post Reply
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="pt-1 flex justify-end">
                        <button
                          onClick={() => setReplyTicketId(t.id)}
                          className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-[11px] transition-colors"
                        >
                          Reply to Ticket
                        </button>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Invoices & Financial History */}
        {activeTab === 'invoices' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Financial Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-slate-100">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Contract Billed</div>
                <div className="font-heading font-extrabold text-2xl text-slate-900 mt-1">
                  ₹{totalInvoiced.toLocaleString('en-IN')}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Total Settled / Paid</div>
                <div className="font-heading font-extrabold text-2xl text-emerald-800 mt-1">
                  ₹{totalPaid.toLocaleString('en-IN')}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">Pending Payable Balance</div>
                <div className="font-heading font-extrabold text-2xl text-amber-800 mt-1">
                  ₹{totalBalance.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] font-bold">
                    <th className="pb-3">Invoice #</th>
                    <th className="pb-3">Description</th>
                    <th className="pb-3">Issue / Due Date</th>
                    <th className="pb-3">Total Amount</th>
                    <th className="pb-3">Paid Amount</th>
                    <th className="pb-3">Balance</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right">Tax Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {clientInvoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 font-mono font-bold text-blue-600">
                        {inv.invoiceNumber}
                      </td>
                      <td className="py-3.5 text-slate-700 max-w-[200px] truncate" title={inv.projectName}>
                        {inv.projectName}
                      </td>
                      <td className="py-3.5 text-slate-500">
                        <div>{inv.issueDate}</div>
                        <div className="text-[10px] text-slate-400">Due: {inv.dueDate}</div>
                      </td>
                      <td className="py-3.5 font-bold text-slate-900">
                        ₹{inv.totalAmount.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3.5 font-bold text-emerald-600">
                        ₹{inv.paidAmount.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3.5 font-bold text-amber-600">
                        ₹{inv.balance.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3.5">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            inv.status === 'Paid'
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {inv.status}
                        </span>
                      </td>
                      <td className="py-3.5 text-right">
                        <button
                          onClick={() => setSelectedInvoice(inv)}
                          className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-[11px] flex items-center gap-1.5 ml-auto"
                        >
                          <Receipt className="w-3.5 h-3.5" />
                          <span>View Receipt</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

      </main>

      {/* Snapshot Lightbox Viewer */}
      {selectedSnapshot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedSnapshot(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={selectedSnapshot.imageUrl}
                alt={selectedSnapshot.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-white flex items-center justify-between">
              <div>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  {selectedSnapshot.title}
                </h4>
                <div className="text-xs text-slate-500">
                  Prepared by {selectedSnapshot.author} on {selectedSnapshot.uploadedAt}
                </div>
              </div>
              <a
                href={selectedSnapshot.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold font-heading flex items-center gap-1.5"
              >
                <span>Open Full Size</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Receipt Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedInvoice(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b pb-4">
              <div className="font-heading font-bold text-xl text-blue-600">Dev Digit Solutions</div>
              <div className="text-xs text-slate-500">{siteData.brand.address.street}, Noida UP</div>
              <div className="font-mono text-xs font-bold text-slate-900 mt-2">
                TAX INVOICE: {selectedInvoice.invoiceNumber}
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Billed To:</span>
                <strong className="text-slate-900">{selectedInvoice.clientName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Project:</span>
                <strong className="text-slate-900">{selectedInvoice.projectName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Due Date:</span>
                <span>{selectedInvoice.dueDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <strong className="text-blue-600">{selectedInvoice.status}</strong>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-sm text-slate-900">
                <span>Total Amount (incl. 18% GST):</span>
                <span>₹{selectedInvoice.totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="pt-4 border-t flex justify-end">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Official Receipt</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Client Ticket Modal */}
      {newTicketModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
            <button
              onClick={() => setNewTicketModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Submit Support or Revision Request
              </h3>
              <p className="text-xs text-slate-500">
                Our senior engineering or design specialists will inspect and respond shortly
              </p>
            </div>

            <form onSubmit={handleCreateTicketSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Subject / Summary *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Update promotional banner on mobile homepage"
                  value={newTicketForm.title}
                  onChange={(e) => setNewTicketForm({ ...newTicketForm, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Type</label>
                  <select
                    value={newTicketForm.category}
                    onChange={(e) => setNewTicketForm({ ...newTicketForm, category: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                  >
                    <option value="Feature Request">Feature Request</option>
                    <option value="Content Change">Content Change</option>
                    <option value="Bug">Bug / Issue</option>
                    <option value="Billing">Billing Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Urgency</label>
                  <select
                    value={newTicketForm.priority}
                    onChange={(e) => setNewTicketForm({ ...newTicketForm, priority: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Detailed Description *</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Provide any specific links, wording, or references..."
                  value={newTicketForm.message}
                  onChange={(e) => setNewTicketForm({ ...newTicketForm, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setNewTicketModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20"
                >
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
