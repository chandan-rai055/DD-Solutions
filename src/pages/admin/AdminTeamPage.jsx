import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Plus,
  X
} from 'lucide-react';

export default function AdminTeamPage() {
  const {
    teamMembers,
    leaveRequests,
    addLeaveRequest,
    updateLeaveStatus
  } = useApp();

  const [roleFilter, setRoleFilter] = useState('All');
  const [leaveModalOpen, setLeaveModalOpen] = useState(false);
  const [leaveForm, setLeaveForm] = useState({
    employeeId: 'emp-2',
    employeeName: 'Rohan Deshmukh',
    type: 'Casual Leave',
    startDate: '2026-09-28',
    endDate: '2026-09-29',
    days: 2,
    reason: 'Personal family event'
  });

  const filteredMembers = teamMembers.filter((m) => {
    if (roleFilter === 'All') return true;
    return m.role === roleFilter.toLowerCase();
  });

  const handleApplyLeave = (e) => {
    e.preventDefault();
    addLeaveRequest(leaveForm);
    setLeaveModalOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-900">
            Internal Company Team Directory & HR Hub
          </h1>
          <p className="text-xs text-slate-500">
            Staff directory across Developers, Designers, HR, and Leadership with leave tracking and capacity allocations
          </p>
        </div>

        <button
          onClick={() => setLeaveModalOpen(true)}
          className="px-4 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Submit Leave Request</span>
        </button>
      </div>

      {/* Role Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {['All', 'Admin', 'Developer', 'Designer', 'HR'].map((role) => (
          <button
            key={role}
            onClick={() => setRoleFilter(role)}
            className={`px-4 py-1.5 rounded-full font-heading font-semibold transition-all ${
              roleFilter === role
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all space-y-4"
          >
            <div className="flex items-start gap-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-14 h-14 rounded-2xl object-cover border border-slate-200 flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-bold text-base text-slate-900 truncate">
                    {member.name}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase ${
                      member.role === 'admin'
                        ? 'bg-indigo-100 text-indigo-700'
                        : member.role === 'developer'
                        ? 'bg-emerald-100 text-emerald-700'
                        : member.role === 'designer'
                        ? 'bg-pink-100 text-pink-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {member.role}
                  </span>
                </div>
                <div className="text-xs text-slate-500 truncate mt-0.5">
                  {member.roleTitle}
                </div>
                <div className="text-[10px] text-blue-600 font-semibold mt-1">
                  Department: {member.department}
                </div>
              </div>
            </div>

            {/* Technical Skills / Badges */}
            {member.skills && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-[10px] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Contact Details & Workload */}
            <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
              <div className="flex items-center justify-between">
                <span>Active Accounts:</span>
                <strong className="text-slate-900">{member.activeProjectsCount} Projects</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Joined Team:</span>
                <span>{member.joinDate}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 hover:underline text-[11px] truncate max-w-[180px]"
                >
                  {member.email}
                </a>
                <span className="text-slate-700 font-medium text-[11px]">{member.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leave Management System Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
          <div>
            <h2 className="font-heading font-bold text-lg text-slate-900">
              Leave Applications & Time-Off Approvals
            </h2>
            <p className="text-xs text-slate-500">
              Process staff leave requests and track calendar availability
            </p>
          </div>
          <span className="text-xs text-slate-400">
            {leaveRequests.filter((l) => l.status === 'Pending').length} Pending Requests
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] font-bold">
                <th className="pb-3">Employee Name</th>
                <th className="pb-3">Leave Type</th>
                <th className="pb-3">Dates</th>
                <th className="pb-3">Days</th>
                <th className="pb-3">Reason</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">HR Decision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leaveRequests.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 font-bold text-slate-900">
                    {req.employeeName}
                  </td>
                  <td className="py-3 text-slate-600">
                    {req.type}
                  </td>
                  <td className="py-3 text-slate-500">
                    {req.startDate} to {req.endDate}
                  </td>
                  <td className="py-3 font-semibold text-slate-700">
                    {req.days} days
                  </td>
                  <td className="py-3 text-slate-600 max-w-[200px] truncate" title={req.reason}>
                    {req.reason}
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        req.status === 'Approved'
                          ? 'bg-emerald-100 text-emerald-700'
                          : req.status === 'Rejected'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    {req.status === 'Pending' ? (
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => updateLeaveStatus(req.id, 'Approved')}
                          className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px]"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateLeaveStatus(req.id, 'Rejected')}
                          className="px-2.5 py-1 rounded-lg bg-slate-200 hover:bg-red-100 hover:text-red-700 text-slate-700 font-bold text-[10px]"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-[11px] text-slate-400 italic">Decision Logged</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Apply Leave Modal */}
      {leaveModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
            <button
              onClick={() => setLeaveModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Apply for Leave
              </h3>
              <p className="text-xs text-slate-500">
                Submit time-off for HR review and scheduling
              </p>
            </div>

            <form onSubmit={handleApplyLeave} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Applying As</label>
                <select
                  value={leaveForm.employeeId}
                  onChange={(e) => {
                    const id = e.target.value;
                    const matched = teamMembers.find(m => m.id === id);
                    setLeaveForm({ ...leaveForm, employeeId: id, employeeName: matched ? matched.name : '' });
                  }}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                >
                  {teamMembers.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.role.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Leave Type</label>
                <select
                  value={leaveForm.type}
                  onChange={(e) => setLeaveForm({ ...leaveForm, type: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                >
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Paid Leave">Paid Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Compensatory Off">Compensatory Off</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    required
                    value={leaveForm.startDate}
                    onChange={(e) => setLeaveForm({ ...leaveForm, startDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">End Date</label>
                  <input
                    type="date"
                    required
                    value={leaveForm.endDate}
                    onChange={(e) => setLeaveForm({ ...leaveForm, endDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Reason for Leave</label>
                <textarea
                  rows="2"
                  required
                  placeholder="Explain reason for leave..."
                  value={leaveForm.reason}
                  onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setLeaveModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20"
                >
                  Submit to HR
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
