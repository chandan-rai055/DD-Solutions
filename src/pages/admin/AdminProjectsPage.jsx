import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  CheckCircle2,
  MessageSquare,
  Plus,
  UploadCloud,
  ExternalLink,
  X
} from 'lucide-react';

export default function AdminProjectsPage() {
  const {
    projects,
    addProjectUpdate,
    updateMilestoneStatus,
    sendDirectWhatsApp
  } = useApp();

  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || null);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedSnapshot, setSelectedSnapshot] = useState(null);

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  // Update Form State
  const [updateForm, setUpdateForm] = useState({
    updateText: '',
    progress: activeProject ? activeProject.progress : 75,
    snapshotTitle: '',
    snapshotUrl: '',
    notifyWhatsapp: true
  });

  const handleOpenUpdateModal = (project) => {
    setActiveProjectId(project.id);
    setUpdateForm({
      updateText: '',
      progress: project.progress,
      snapshotTitle: '',
      snapshotUrl: '',
      notifyWhatsapp: true
    });
    setUpdateModalOpen(true);
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    addProjectUpdate(activeProjectId, {
      updateText: updateForm.updateText,
      progress: Number(updateForm.progress),
      snapshotTitle: updateForm.snapshotTitle,
      snapshotUrl: updateForm.snapshotUrl,
      notifyWhatsapp: updateForm.notifyWhatsapp
    });
    setUpdateModalOpen(false);
  };

  // Sample snapshot presets for convenience
  const sampleSnapshots = [
    { title: 'Core Web Vitals 98 Mobile Speed Score', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
    { title: 'Interactive Luxury Showcase UI Mockup', url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { title: 'iOS Native App TestFlight Build v2.1', url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop' },
    { title: 'Meta ROAS Scaling Attribution Chart', url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-900">
            Internal Company Project Management
          </h1>
          <p className="text-xs text-slate-500">
            Monitor active client deliverables, track sprint milestones, upload design snapshots, and auto-dispatch WhatsApp client updates
          </p>
        </div>

        {activeProject && (
          <button
            onClick={() => handleOpenUpdateModal(activeProject)}
            className="px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Post Progress Update & WhatsApp</span>
          </button>
        )}
      </div>

      {/* Projects Horizontal Selector Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        {projects.map((p) => {
          const isSelected = p.id === activeProjectId;
          return (
            <button
              key={p.id}
              onClick={() => setActiveProjectId(p.id)}
              className={`px-5 py-3 rounded-2xl border text-left flex-shrink-0 transition-all ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
              }`}
            >
              <div className="text-[10px] uppercase tracking-wider font-bold opacity-75">
                {p.clientName}
              </div>
              <div className="font-heading font-bold text-xs truncate max-w-[200px] mt-0.5">
                {p.title}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-16 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
                <span className="text-[10px] font-bold">{p.progress}%</span>
              </div>
            </button>
          );
        })}
      </div>

      {activeProject && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (8 cols): Project Overview, Milestones, Text Updates & Snapshots */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Active Project Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700">
                      {activeProject.status}
                    </span>
                    <span className="text-xs text-slate-400">Due: {activeProject.dueDate}</span>
                  </div>
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mt-1">
                    {activeProject.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Service: <strong>{activeProject.service}</strong> • Budget: <strong>{activeProject.budget}</strong>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      sendDirectWhatsApp(
                        activeProject.clientPhone,
                        `Hello ${activeProject.clientContact}, here is the latest sprint status for ${activeProject.title}. Overall progress is at ${activeProject.progress}%.`
                      )
                    }
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Client</span>
                  </button>
                  <button
                    onClick={() => handleOpenUpdateModal(activeProject)}
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
                  >
                    Post Update
                  </button>
                </div>
              </div>

              {/* Progress Slider Display */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-700">Sprint Delivery Velocity</span>
                  <span className="font-heading font-extrabold text-blue-600 text-base">
                    {activeProject.progress}%
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500"
                    style={{ width: `${activeProject.progress}%` }}
                  />
                </div>
              </div>

              {/* Milestones Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Project Milestones & Deliverables
                </div>
                <div className="space-y-2">
                  {activeProject.milestones.map((m) => (
                    <div
                      key={m.id}
                      className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateMilestoneStatus(
                              activeProject.id,
                              m.id,
                              m.status === 'Completed' ? 'In Progress' : 'Completed'
                            )
                          }
                          className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                            m.status === 'Completed'
                              ? 'bg-emerald-600 text-white'
                              : 'border-2 border-slate-300 hover:border-emerald-500'
                          }`}
                        >
                          {m.status === 'Completed' && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </button>
                        <div>
                          <div
                            className={`font-semibold text-slate-800 ${
                              m.status === 'Completed' ? 'line-through text-slate-400' : ''
                            }`}
                          >
                            {m.title}
                          </div>
                          <div className="text-[10px] text-slate-400">Target Date: {m.date}</div>
                        </div>
                      </div>

                      <select
                        value={m.status}
                        onChange={(e) =>
                          updateMilestoneStatus(activeProject.id, m.id, e.target.value)
                        }
                        className={`text-[10px] font-bold rounded-full px-2 py-0.5 border focus:outline-none cursor-pointer ${
                          m.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                            : m.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-800 border-blue-200'
                            : 'bg-slate-200 text-slate-700 border-slate-300'
                        }`}
                      >
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Pending">Pending</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              {/* Snapshots Deliverables Gallery */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Snapshots & Visual Deliverables ({activeProject.snapshots.length})
                  </div>
                  <button
                    onClick={() => handleOpenUpdateModal(activeProject)}
                    className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <UploadCloud className="w-3.5 h-3.5" />
                    <span>Upload Snapshot</span>
                  </button>
                </div>

                {activeProject.snapshots.length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
                    No visual deliverables uploaded yet. Click "Post Progress Update" to attach a snapshot.
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {activeProject.snapshots.map((snap) => (
                      <div
                        key={snap.id}
                        onClick={() => setSelectedSnapshot(snap)}
                        className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={snap.imageUrl}
                            alt={snap.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-2.5 bg-white">
                          <div className="text-[11px] font-bold text-slate-900 truncate">
                            {snap.title}
                          </div>
                          <div className="text-[9px] text-slate-400 flex justify-between mt-0.5">
                            <span>{snap.author}</span>
                            <span>{snap.uploadedAt}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Text Updates Timeline */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Progress Updates Feed ({activeProject.updates.length})
                </div>
                <div className="space-y-2.5">
                  {activeProject.updates.map((upd) => (
                    <div
                      key={upd.id}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-slate-900">{upd.author}</span>
                        <div className="flex items-center gap-2">
                          {upd.whatsappSent && (
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                              <MessageSquare className="w-2.5 h-2.5" />
                              <span>WhatsApp Notified</span>
                            </span>
                          )}
                          <span className="text-slate-400">{upd.date}</span>
                        </div>
                      </div>
                      <div className="text-slate-700 leading-relaxed font-normal">
                        {upd.text}
                      </div>
                      <div className="text-[10px] text-blue-600 font-semibold pt-0.5">
                        Sprint Status at time: {upd.progress}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (4 cols): Client Info & Assigned Team */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Client Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-sm text-slate-900">
                Client Contact Information
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">Client Organization</div>
                  <div className="font-bold text-slate-900 text-sm mt-0.5">{activeProject.clientName}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">Primary Contact Person</div>
                  <div className="font-medium text-slate-800 mt-0.5">{activeProject.clientContact}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">Phone / WhatsApp</div>
                  <div className="font-medium text-slate-800 mt-0.5">{activeProject.clientPhone}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-semibold">Email</div>
                  <div className="font-medium text-slate-800 mt-0.5">{activeProject.clientEmail}</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() =>
                    sendDirectWhatsApp(
                      activeProject.clientPhone,
                      `Hello ${activeProject.clientContact}, this is the Dev Digit Solutions management team checking in regarding ${activeProject.title}.`
                    )
                  }
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Launch WhatsApp Chat</span>
                </button>
              </div>
            </div>

            {/* Assigned Specialists */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-sm text-slate-900">
                  Assigned Team Specialists
                </h3>
                <span className="text-xs text-slate-400">{activeProject.assignedTeam.length} members</span>
              </div>

              <div className="space-y-2.5">
                {activeProject.assignedTeam.map((member) => (
                  <div
                    key={member.id}
                    className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-slate-900">{member.name}</div>
                      <div className="text-[10px] text-blue-600 font-semibold">{member.role}</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active On Project" />
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Status Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-sm space-y-3">
              <h4 className="font-heading font-bold text-sm text-white">
                Project Financial Health
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Contract Value:</span>
                  <strong className="text-white">{activeProject.budget}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Collected to Date:</span>
                  <strong className="text-emerald-400">{activeProject.paidAmount}</strong>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Progress Update & WhatsApp Modal */}
      {updateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setUpdateModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                Live Milestone Dispatch
              </span>
              <h3 className="font-heading font-bold text-xl text-slate-900 mt-1">
                Post Progress Update for {activeProject?.clientName}
              </h3>
              <p className="text-xs text-slate-500">
                Log the sprint accomplishments and automatically notify the client on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmitUpdate} className="space-y-4 pt-2">
              
              {/* Progress Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">Set Updated Project Progress (%)</span>
                  <span className="font-heading font-extrabold text-blue-600 text-base">
                    {updateForm.progress}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={updateForm.progress}
                  onChange={(e) => setUpdateForm({ ...updateForm, progress: Number(e.target.value) })}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Text update */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Progress Description / Work Completed *
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="e.g. Completed payment gateway webhook integration, conducted security review, and improved mobile checkout speed by 35%."
                  value={updateForm.updateText}
                  onChange={(e) => setUpdateForm({ ...updateForm, updateText: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none resize-none"
                />
              </div>

              {/* Snapshot Deliverable */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700">
                  Attach Snapshot / Deliverable Image (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Snapshot Title (e.g. Homepage Redesign v2 Preview)"
                  value={updateForm.snapshotTitle}
                  onChange={(e) => setUpdateForm({ ...updateForm, snapshotTitle: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none mb-2"
                />
                <input
                  type="url"
                  placeholder="Snapshot Image URL (e.g. https://images.unsplash.com/...)"
                  value={updateForm.snapshotUrl}
                  onChange={(e) => setUpdateForm({ ...updateForm, snapshotUrl: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                />

                {/* Quick Sample Presets */}
                <div className="pt-1">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">Or choose sample deliverable:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {sampleSnapshots.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() =>
                          setUpdateForm({
                            ...updateForm,
                            snapshotTitle: preset.title,
                            snapshotUrl: preset.url
                          })
                        }
                        className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-[10px] text-slate-700 border border-slate-200"
                      >
                        {preset.title.slice(0, 22)}...
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Automatic WhatsApp Checkbox */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="notifyWaCheckbox"
                  checked={updateForm.notifyWhatsapp}
                  onChange={(e) => setUpdateForm({ ...updateForm, notifyWhatsapp: e.target.checked })}
                  className="mt-0.5 w-4 h-4 text-emerald-600 rounded cursor-pointer"
                />
                <label htmlFor="notifyWaCheckbox" className="text-xs text-emerald-900 cursor-pointer">
                  <strong>Automatically Send WhatsApp Update to Client</strong> ({activeProject?.clientPhone})
                  <div className="text-[11px] text-emerald-700 mt-0.5">
                    Prepares and opens the WhatsApp notification message formatted with the progress %, text details, and Client Portal link.
                  </div>
                </label>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setUpdateModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20"
                >
                  Save & Notify Client
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

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
            <div className="p-4 sm:p-6 bg-white flex items-center justify-between">
              <div>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  {selectedSnapshot.title}
                </h4>
                <div className="text-xs text-slate-500">
                  Uploaded by {selectedSnapshot.author} on {selectedSnapshot.uploadedAt}
                </div>
              </div>
              <a
                href={selectedSnapshot.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold font-heading flex items-center gap-1.5"
              >
                <span>Full Res</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
