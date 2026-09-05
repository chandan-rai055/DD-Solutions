import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  MessageSquare,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

export default function AdminWhatsAppPage() {
  const {
    whatsappNotifications,
    projects,
    sendDirectWhatsApp,
    showToast
  } = useApp();

  const [copiedId, setCopiedId] = useState(null);
  const [customPhone, setCustomPhone] = useState('+91 98112 34567');
  const [selectedTemplate, setSelectedTemplate] = useState('progress');
  const [customMessage, setCustomMessage] = useState(
    '🚀 *Dev Digit Solutions Sprint Update*: We have completed your scheduled milestones for this week. Please review snapshots on your Client Portal.'
  );

  const templates = {
    progress: '🚀 *Dev Digit Solutions Progress Update*:\n\nWe have pushed fresh code updates and visual assets live on your staging environment. Current sprint progress is on track.\n\nView live interactive progress, snapshots, and milestone logs in your Client Dashboard: https://devdigitsolutions.com/portal\n\n- Dev Digit Solutions Engineering & Growth Team',
    milestone: '🎉 *Dev Digit Solutions Milestone Alert*:\n\nYour milestone deliverable has been officially verified, tested, and marked as COMPLETED by our lead architect.\n\nLogin to download files and review benchmarks: https://devdigitsolutions.com/portal',
    ticket: '✨ *Dev Digit Solutions Support Alert*:\n\nYour revision ticket has received an update from our specialist. The resolution has been deployed to production.\n\nReply here or visit your portal for details: https://devdigitsolutions.com/portal',
    invoice: '📄 *Dev Digit Solutions Accounts Notice*:\n\nA new tax invoice has been generated for your ongoing project retainer. You can view, verify GST, and download the official receipt at: https://devdigitsolutions.com/portal'
  };

  const handleSelectTemplate = (key) => {
    setSelectedTemplate(key);
    setCustomMessage(templates[key]);
  };

  const handleSendCustomWhatsApp = (e) => {
    e.preventDefault();
    if (!customPhone || !customMessage) return;
    sendDirectWhatsApp(customPhone, customMessage);
    showToast(`WhatsApp message dispatched to ${customPhone}!`, 'success');
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    showToast('Message copied to clipboard', 'info');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-900">
            WhatsApp Client Automation Engine
          </h1>
          <p className="text-xs text-slate-500">
            Audit logs of automated milestone dispatches, template configurations, and instant direct messaging
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>WhatsApp API Webhook Sync Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Live WhatsApp Notification Logs (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="font-heading font-bold text-lg text-slate-900">
                Automated Message Dispatch Log
              </h2>
              <p className="text-xs text-slate-500">
                Messages generated when project milestones or tickets are updated
              </p>
            </div>
            <span className="text-xs text-slate-400 font-semibold">
              {whatsappNotifications.length} logged
            </span>
          </div>

          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
            {whatsappNotifications.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{item.recipientName}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{item.recipientPhone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-blue-100 text-blue-800">
                      {item.type}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      <span>{item.status}</span>
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-slate-700 font-mono text-[11px] whitespace-pre-wrap leading-relaxed">
                  {item.message}
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                  <span>Project: <strong>{item.projectName}</strong> • {item.sentAt}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(item.message, item.id)}
                      className="hover:text-slate-700 flex items-center gap-1 text-[11px]"
                    >
                      {copiedId === item.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>Copy</span>
                    </button>
                    <button
                      onClick={() => sendDirectWhatsApp(item.recipientPhone, item.message)}
                      className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Open WA</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Instant WhatsApp Dispatcher & Template Preview (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Instant WhatsApp Dispatcher</span>
            </h3>
            <p className="text-xs text-slate-500">
              Broadcast progress reports or urgent notices directly to client mobile phones.
            </p>

            <form onSubmit={handleSendCustomWhatsApp} className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Recipient Client Phone Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    required
                    value={customPhone}
                    onChange={(e) => setCustomPhone(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                  />
                  <select
                    onChange={(e) => setCustomPhone(e.target.value)}
                    className="px-2.5 py-2 rounded-xl bg-slate-100 text-xs font-semibold focus:outline-none text-slate-700"
                  >
                    <option value="">Quick Pick Client</option>
                    {projects.map((p) => (
                      <option key={p.id} value={p.clientPhone}>
                        {p.clientName} ({p.clientPhone})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Template Buttons */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Load Pre-Built Template
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleSelectTemplate('progress')}
                    className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-bold text-left ${
                      selectedTemplate === 'progress'
                        ? 'bg-blue-50 border-blue-400 text-blue-700'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    🚀 Sprint Progress
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectTemplate('milestone')}
                    className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-bold text-left ${
                      selectedTemplate === 'milestone'
                        ? 'bg-blue-50 border-blue-400 text-blue-700'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    🎉 Milestone Done
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectTemplate('ticket')}
                    className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-bold text-left ${
                      selectedTemplate === 'ticket'
                        ? 'bg-blue-50 border-blue-400 text-blue-700'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    ✨ Ticket Resolved
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectTemplate('invoice')}
                    className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-bold text-left ${
                      selectedTemplate === 'invoice'
                        ? 'bg-blue-50 border-blue-400 text-blue-700'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    📄 Tax Invoice Ready
                  </button>
                </div>
              </div>

              {/* Message text area */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message Text (WhatsApp Markdown Enabled)
                </label>
                <textarea
                  rows="6"
                  required
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 focus:bg-white focus:outline-none resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Launch Message on WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
}
