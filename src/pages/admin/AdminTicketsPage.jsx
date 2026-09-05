import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  MessageSquare,
  Send,
  Plus,
  X
} from 'lucide-react';

export default function AdminTicketsPage() {
  const {
    tickets,
    addTicket,
    addTicketReply,
    updateTicketStatus,
    teamMembers,
    currentRole
  } = useApp();

  const [selectedTicketId, setSelectedTicketId] = useState(tickets[0]?.id || null);
  const [replyText, setReplyText] = useState('');
  const [notifyWaOnReply, setNotifyWaOnReply] = useState(true);

  // Filters
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');

  // New Ticket Modal
  const [newTicketModalOpen, setNewTicketModalOpen] = useState(false);
  const [newTicketForm, setNewTicketForm] = useState({
    title: '',
    clientName: 'Vitamuch Wellness',
    clientId: 'vitamuch',
    category: 'Bug',
    priority: 'High',
    department: 'Engineering',
    message: ''
  });

  const selectedTicket = tickets.find((t) => t.id === selectedTicketId) || tickets[0];

  const filteredTickets = tickets.filter((t) => {
    const matchesDept = departmentFilter === 'All' || t.department === departmentFilter;
    const matchesStatus = statusFilter === 'All' || t.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || t.priority === priorityFilter;
    return matchesDept && matchesStatus && matchesPriority;
  });

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    addTicketReply(selectedTicket.id, replyText, notifyWaOnReply);
    setReplyText('');
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    const created = addTicket(newTicketForm);
    setSelectedTicketId(created.id);
    setNewTicketModalOpen(false);
    setNewTicketForm({
      title: '',
      clientName: 'Vitamuch Wellness',
      clientId: 'vitamuch',
      category: 'Bug',
      priority: 'High',
      department: 'Engineering',
      message: ''
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-900">
            Customer Support & Revision Ticketing
          </h1>
          <p className="text-xs text-slate-500">
            Resolve client tickets across Engineering, Design, and Billing with live conversation history and WhatsApp alerts
          </p>
        </div>

        <button
          onClick={() => setNewTicketModalOpen(true)}
          className="px-4 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New Support Ticket</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-slate-400 uppercase text-[10px]">Filter:</span>
          
          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Waiting for Client">Waiting for Client</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
          </select>

          {/* Department filter */}
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none"
          >
            <option value="All">All Departments</option>
            <option value="Engineering">Engineering (Dev)</option>
            <option value="Creative & Design">Creative & Design</option>
            <option value="Finance & HR">Finance & HR</option>
          </select>

          {/* Priority filter */}
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none"
          >
            <option value="All">All Priorities</option>
            <option value="Urgent">Urgent</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="text-slate-500 text-xs">
          <strong>{filteredTickets.length}</strong> matching tickets
        </div>
      </div>

      {/* Main Grid: Ticket List (4 cols) & Thread (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Ticket List Column (4 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {filteredTickets.length === 0 ? (
            <div className="p-8 text-center bg-white border border-slate-200 rounded-3xl text-xs text-slate-500">
              No tickets found matching the selected filters.
            </div>
          ) : (
            filteredTickets.map((t) => {
              const isSelected = t.id === selectedTicket?.id;
              return (
                <div
                  key={t.id}
                  onClick={() => setSelectedTicketId(t.id)}
                  className={`p-4 rounded-3xl border transition-all cursor-pointer space-y-2 ${
                    isSelected
                      ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-600/10'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-blue-600">{t.ticketNumber}</span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                          t.priority === 'Urgent'
                            ? 'bg-red-100 text-red-700'
                            : t.priority === 'High'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {t.priority}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                          t.status === 'Resolved'
                            ? 'bg-emerald-100 text-emerald-700'
                            : t.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {t.status}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-heading font-bold text-sm text-slate-900 line-clamp-1">
                    {t.title}
                  </h4>

                  <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1 border-t border-slate-100">
                    <span className="font-medium text-slate-600">{t.clientName}</span>
                    <span>Dept: {t.department}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Conversation Thread Column (7 cols) */}
        <div className="lg:col-span-7">
          {selectedTicket ? (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              {/* Ticket Top Header */}
              <div className="pb-4 border-b border-slate-100 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-200">
                      {selectedTicket.ticketNumber}
                    </span>
                    <span className="text-xs text-slate-400">
                      Client: <strong className="text-slate-700">{selectedTicket.clientName}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Status Changer */}
                    <select
                      value={selectedTicket.status}
                      onChange={(e) =>
                        updateTicketStatus(selectedTicket.id, e.target.value, null, null)
                      }
                      className="px-3 py-1 rounded-full text-xs font-bold bg-slate-50 border border-slate-200 focus:outline-none cursor-pointer"
                    >
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Waiting for Client">Waiting for Client</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Closed">Closed</option>
                    </select>

                    {/* Priority Changer */}
                    <select
                      value={selectedTicket.priority}
                      onChange={(e) =>
                        updateTicketStatus(selectedTicket.id, null, e.target.value, null)
                      }
                      className="px-3 py-1 rounded-full text-xs font-bold bg-slate-50 border border-slate-200 focus:outline-none cursor-pointer"
                    >
                      <option value="Urgent">Urgent</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>

                <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
                  {selectedTicket.title}
                </h2>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                  <span>Category: <strong>{selectedTicket.category}</strong></span>
                  <span>•</span>
                  <span>Dept: <strong>{selectedTicket.department}</strong></span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <span>Assigned:</span>
                    <select
                      value={selectedTicket.assignedTo}
                      onChange={(e) =>
                        updateTicketStatus(selectedTicket.id, null, null, e.target.value)
                      }
                      className="bg-transparent text-blue-600 font-semibold border-b border-dashed border-blue-300 pb-0.5 focus:outline-none cursor-pointer"
                    >
                      {teamMembers.map((m) => (
                        <option key={m.id} value={m.name}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message History List */}
              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                {selectedTicket.messages.map((msg) => {
                  const isClient = msg.sender.toLowerCase().includes('client');
                  return (
                    <div
                      key={msg.id}
                      className={`p-4 rounded-2xl text-xs space-y-1.5 ${
                        isClient
                          ? 'bg-slate-50 border border-slate-200 ml-0 mr-8'
                          : 'bg-blue-50/80 border border-blue-200 ml-8 mr-0'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className={`font-bold ${isClient ? 'text-slate-800' : 'text-blue-900'}`}>
                          {msg.sender}
                        </span>
                        <span className="text-slate-400 text-[10px]">{msg.date}</span>
                      </div>
                      <div className="text-slate-800 leading-relaxed whitespace-pre-wrap">
                        {msg.text}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Reply Form */}
              <form onSubmit={handleSendReply} className="pt-4 border-t border-slate-100 space-y-3">
                <textarea
                  rows="3"
                  required
                  placeholder={`Type reply as ${currentRole.toUpperCase()} specialist...`}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none resize-none"
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifyWaOnReply}
                      onChange={(e) => setNotifyWaOnReply(e.target.checked)}
                      className="rounded text-emerald-600 cursor-pointer"
                    />
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Notify Client on WhatsApp Immediately</span>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Post Reply</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

            </div>
          ) : (
            <div className="p-12 text-center bg-white border border-slate-200 rounded-3xl text-sm text-slate-500">
              Select a ticket from the left to view the thread and respond.
            </div>
          )}
        </div>

      </div>

      {/* New Support Ticket Modal */}
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
                Create Support Ticket
              </h3>
              <p className="text-xs text-slate-500">
                Log a client revision, technical bug, or task ticket
              </p>
            </div>

            <form onSubmit={handleCreateTicket} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Ticket Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Optimize checkout script for UPI auto-redirect"
                  value={newTicketForm.title}
                  onChange={(e) => setNewTicketForm({ ...newTicketForm, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Client Account</label>
                <select
                  value={newTicketForm.clientId}
                  onChange={(e) => {
                    const id = e.target.value;
                    const name = id === 'vitamuch' ? 'Vitamuch Wellness' : id === 'rajjwellers' ? 'Raj Jwellers' : 'Wehere App Ecosystem';
                    setNewTicketForm({ ...newTicketForm, clientId: id, clientName: name });
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                >
                  <option value="vitamuch">Vitamuch Wellness</option>
                  <option value="rajjwellers">Raj Jwellers</option>
                  <option value="wehere">Wehere App Ecosystem</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Department</label>
                  <select
                    value={newTicketForm.department}
                    onChange={(e) => setNewTicketForm({ ...newTicketForm, department: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                  >
                    <option value="Engineering">Engineering (Dev)</option>
                    <option value="Creative & Design">Creative & Design</option>
                    <option value="Finance & HR">Finance & HR</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Priority</label>
                  <select
                    value={newTicketForm.priority}
                    onChange={(e) => setNewTicketForm({ ...newTicketForm, priority: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Initial Description / Note</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Explain the issue or revision..."
                  value={newTicketForm.message}
                  onChange={(e) => setNewTicketForm({ ...newTicketForm, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none resize-none"
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
                  Create Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
