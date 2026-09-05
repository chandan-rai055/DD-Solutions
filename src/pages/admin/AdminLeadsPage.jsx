import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  MessageSquare,
  Phone,
  Plus,
  X,
  Briefcase
} from 'lucide-react';

export default function AdminLeadsPage() {
  const {
    leads,
    addLead,
    updateLeadStatus,
    convertLeadToProject,
    teamMembers,
    sendDirectWhatsApp
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedLead, setSelectedLead] = useState(null); // for detail/notes modal
  const [newNoteText, setNewNoteText] = useState('');

  // Conversion Modal State
  const [convertingLead, setConvertingLead] = useState(null);
  const [convertForm, setConvertForm] = useState({
    title: '',
    budget: '',
    dueDate: '2026-11-30'
  });

  // Manual New Lead Modal
  const [newLeadModalOpen, setNewLeadModalOpen] = useState(false);
  const [manualLeadForm, setManualLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: 'Website & Software Development',
    budget: '₹2,00,000',
    message: ''
  });

  // Filter leads
  const filteredLeads = leads.filter((l) => {
    const matchesStatus = statusFilter === 'All' || l.status === statusFilter;
    const matchesSearch =
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.service.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const statuses = ['All', 'New', 'Contacted', 'In Discussion', 'Proposal Sent', 'Converted', 'Lost'];

  const handleStatusChange = (leadId, newStatus) => {
    updateLeadStatus(leadId, newStatus, `Status updated to ${newStatus}`);
  };

  const handleAddNote = (leadId) => {
    if (!newNoteText.trim()) return;
    updateLeadStatus(leadId, selectedLead.status, newNoteText);
    setNewNoteText('');
    setSelectedLead((prev) => ({
      ...prev,
      notes: [
        { date: new Date().toISOString().slice(0, 10), author: 'Staff', text: newNoteText },
        ...prev.notes
      ]
    }));
  };

  const handleOpenConvert = (lead) => {
    setConvertingLead(lead);
    setConvertForm({
      title: `${lead.name} - ${lead.service}`,
      budget: lead.budget || '₹3,00,000',
      dueDate: '2026-11-30'
    });
  };

  const handleConfirmConvert = (e) => {
    e.preventDefault();
    convertLeadToProject(convertingLead.id, convertForm);
    setConvertingLead(null);
  };

  const handleCreateManualLead = (e) => {
    e.preventDefault();
    addLead({
      ...manualLeadForm,
      source: 'Direct Phone / Admin Entry'
    });
    setNewLeadModalOpen(false);
    setManualLeadForm({
      name: '',
      email: '',
      phone: '',
      website: '',
      service: 'Website & Software Development',
      budget: '₹2,00,000',
      message: ''
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header & New Lead Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-900">
            Leads Management & CRM Pipeline
          </h1>
          <p className="text-xs text-slate-500">
            Track inquiries, update pipeline statuses, launch automated WhatsApp messages, and convert to active projects
          </p>
        </div>

        <button
          onClick={() => setNewLeadModalOpen(true)}
          className="px-4 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Inbound Lead</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search leads by name, email, phone, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>

          {/* Counts pill */}
          <div className="text-xs text-slate-500 self-center">
            Showing <strong>{filteredLeads.length}</strong> of {leads.length} total leads
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-full font-heading font-semibold whitespace-nowrap transition-colors ${
                statusFilter === st
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] font-bold">
                <th className="pb-3">Lead & Contact</th>
                <th className="pb-3">Requested Service</th>
                <th className="pb-3">Budget</th>
                <th className="pb-3">Source</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Assigned To</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-8 text-slate-500">
                    No leads found matching your search and filter.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                    
                    {/* Lead Contact Info */}
                    <td className="py-4">
                      <div className="font-heading font-bold text-slate-900 text-sm">
                        {lead.name}
                      </div>
                      <div className="text-slate-500 text-[11px] flex items-center gap-1 mt-0.5">
                        <Phone className="w-3 h-3 text-slate-400" />
                        <span>{lead.phone}</span>
                      </div>
                      <div className="text-slate-400 text-[10px]">
                        {lead.email}
                      </div>
                      {lead.website && (
                        <a
                          href={lead.website}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] text-blue-600 hover:underline block mt-0.5"
                        >
                          {lead.website}
                        </a>
                      )}
                    </td>

                    {/* Service */}
                    <td className="py-4 text-slate-700 max-w-[180px]">
                      <div className="font-medium text-xs truncate" title={lead.service}>
                        {lead.service}
                      </div>
                      {lead.message && (
                        <div className="text-[10px] text-slate-400 truncate mt-1 italic max-w-[180px]">
                          "{lead.message}"
                        </div>
                      )}
                    </td>

                    {/* Budget */}
                    <td className="py-4 font-semibold text-slate-800">
                      {lead.budget || 'N/A'}
                    </td>

                    {/* Source */}
                    <td className="py-4 text-[11px] text-slate-500">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-medium">
                        {lead.source}
                      </span>
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className={`text-[11px] font-bold rounded-full px-2.5 py-1 border focus:outline-none cursor-pointer ${
                          lead.status === 'New'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : lead.status === 'In Discussion'
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : lead.status === 'Converted'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : lead.status === 'Lost'
                            ? 'bg-red-50 text-red-700 border-red-200'
                            : 'bg-purple-50 text-purple-700 border-purple-200'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Discussion">In Discussion</option>
                        <option value="Proposal Sent">Proposal Sent</option>
                        <option value="Converted">Converted</option>
                        <option value="Lost">Lost</option>
                      </select>
                    </td>

                    {/* Assigned Manager */}
                    <td className="py-4 text-slate-600 font-medium">
                      <select
                        value={lead.assignedTo || 'Aryan Varma'}
                        onChange={(e) => updateLeadStatus(lead.id, lead.status, '', e.target.value)}
                        className="bg-transparent text-slate-700 text-xs border-b border-dashed border-slate-300 pb-0.5 focus:outline-none cursor-pointer"
                      >
                        {teamMembers.map((m) => (
                          <option key={m.id} value={m.name}>
                            {m.name} ({m.role.toUpperCase()})
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        
                        {/* WhatsApp Reply Button */}
                        <button
                          onClick={() =>
                            sendDirectWhatsApp(
                              lead.phone,
                              `Hello ${lead.name}, this is Aryan from Dev Digit Solutions regarding your inquiry for ${lead.service}. We have prepared initial scoping insights for you.`
                            )
                          }
                          className="p-2 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-700 transition-colors"
                          title="Chat on WhatsApp with Lead"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                        </button>

                        {/* View Notes / Detail */}
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] transition-colors"
                        >
                          Notes ({lead.notes?.length || 0})
                        </button>

                        {/* Convert to Project */}
                        {lead.status !== 'Converted' && (
                          <button
                            onClick={() => handleOpenConvert(lead)}
                            className="px-2.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] shadow-sm transition-colors flex items-center gap-1"
                            title="Convert lead into ongoing active project"
                          >
                            <Briefcase className="w-3 h-3" />
                            <span>Convert</span>
                          </button>
                        )}

                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Notes & Detail Slideout / Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute top-5 right-5 p-1 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                Lead Detail & Internal Notes
              </span>
              <h3 className="font-heading font-bold text-xl text-slate-900 mt-1">
                {selectedLead.name}
              </h3>
              <p className="text-xs text-slate-500">
                {selectedLead.service} • {selectedLead.phone}
              </p>
            </div>

            {/* Quick WhatsApp Templates Bar */}
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
              <div className="text-[11px] font-bold text-emerald-800 flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Quick WhatsApp Dispatch Templates</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() =>
                    sendDirectWhatsApp(
                      selectedLead.phone,
                      `Hello ${selectedLead.name}, thank you for reaching out to Dev Digit Solutions! We have reviewed your request for ${selectedLead.service} and would love to schedule a quick 15-min discovery call.`
                    )
                  }
                  className="px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-[10px] font-bold text-emerald-700 hover:bg-emerald-100"
                >
                  Discovery Call Invite
                </button>
                <button
                  onClick={() =>
                    sendDirectWhatsApp(
                      selectedLead.phone,
                      `Hi ${selectedLead.name}, great news! Your Free SEO & Tech Audit report for ${selectedLead.website || 'your website'} is complete. Check your email or reply here to view key findings.`
                    )
                  }
                  className="px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-[10px] font-bold text-emerald-700 hover:bg-emerald-100"
                >
                  Audit Ready Notification
                </button>
              </div>
            </div>

            {/* Add Note Form */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-bold text-slate-700">Add Internal CRM Note</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Client agreed on ₹2.5L retainer, call booked for Mon..."
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                />
                <button
                  onClick={() => handleAddNote(selectedLead.id)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold font-heading"
                >
                  Save Note
                </button>
              </div>
            </div>

            {/* Notes Timeline */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-700">Activity History</div>
              <div className="space-y-2">
                {selectedLead.notes && selectedLead.notes.length > 0 ? (
                  selectedLead.notes.map((note, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                        <span className="font-semibold text-slate-600">{note.author}</span>
                        <span>{note.date}</span>
                      </div>
                      <div className="text-slate-800">{note.text}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-slate-400 italic">No notes logged yet.</div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Convert Lead to Active Project Modal */}
      {convertingLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
            <button
              onClick={() => setConvertingLead(null)}
              className="absolute top-5 right-5 p-1 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                Convert To Active Project
              </span>
              <h3 className="font-heading font-bold text-xl text-slate-900 mt-1">
                Initiate Project for {convertingLead.name}
              </h3>
              <p className="text-xs text-slate-500">
                This will create a live project in the internal company management system with milestones, progress tracking, and client WhatsApp sync.
              </p>
            </div>

            <form onSubmit={handleConfirmConvert} className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  value={convertForm.title}
                  onChange={(e) => setConvertForm({ ...convertForm, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Agreed Budget (INR)</label>
                <input
                  type="text"
                  required
                  value={convertForm.budget}
                  onChange={(e) => setConvertForm({ ...convertForm, budget: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Target Completion Date</label>
                <input
                  type="date"
                  required
                  value={convertForm.dueDate}
                  onChange={(e) => setConvertForm({ ...convertForm, dueDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={() => setConvertingLead(null)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs shadow-md shadow-emerald-600/20"
                >
                  Create & Launch Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Manual New Lead Modal */}
      {newLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
            <button
              onClick={() => setNewLeadModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Add New CRM Lead
              </h3>
              <p className="text-xs text-slate-500">
                Log a walk-in, offline referral, or direct phone inquiry
              </p>
            </div>

            <form onSubmit={handleCreateManualLead} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Client Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra"
                  value={manualLeadForm.name}
                  onChange={(e) => setManualLeadForm({ ...manualLeadForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={manualLeadForm.phone}
                    onChange={(e) => setManualLeadForm({ ...manualLeadForm, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={manualLeadForm.email}
                    onChange={(e) => setManualLeadForm({ ...manualLeadForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Service Required</label>
                <select
                  value={manualLeadForm.service}
                  onChange={(e) => setManualLeadForm({ ...manualLeadForm, service: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                >
                  <option value="Website & Software Development">Website & Software Development</option>
                  <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                  <option value="Ad Management & ROAS">Ad Management & ROAS</option>
                  <option value="Creative & Communication">Creative & Communication</option>
                  <option value="UGC & Video Production">UGC & Video Production</option>
                  <option value="Full 360° Tech & Growth Retainer">Full 360° Tech & Growth Retainer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Budget</label>
                <input
                  type="text"
                  placeholder="e.g. ₹2,50,000 / mo"
                  value={manualLeadForm.budget}
                  onChange={(e) => setManualLeadForm({ ...manualLeadForm, budget: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Notes / Scope</label>
                <textarea
                  rows="2"
                  placeholder="Key discussion points or requirements..."
                  value={manualLeadForm.message}
                  onChange={(e) => setManualLeadForm({ ...manualLeadForm, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setNewLeadModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
