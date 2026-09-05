import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { siteData } from '../../data/siteData';
import {
  Receipt,
  Plus,
  Search,
  Printer,
  X,
  CreditCard,
  ShieldCheck
} from 'lucide-react';

export default function AdminFinancePage() {
  const {
    invoices,
    addInvoice,
    recordPayment,
    projects
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState(null); // for printable receipt modal
  const [paymentModalInvoice, setPaymentModalInvoice] = useState(null); // for recording payment
  const [newInvoiceModalOpen, setNewInvoiceModalOpen] = useState(false);

  // Record Payment Form
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Bank Transfer (NEFT)');

  // New Invoice Form
  const [newInvoiceForm, setNewInvoiceForm] = useState({
    clientId: 'vitamuch',
    clientName: 'Vitamuch Wellness',
    projectName: 'Vitamuch D2C Nutrition Platform & Performance Retainer',
    description: 'Monthly Performance Growth Retainer & Attribution Modeling',
    amount: '150000',
    dueDate: '2026-10-15',
    paymentMethod: 'Bank Transfer (NEFT / RTGS)'
  });

  // Calculate high-level financial metrics
  const totalInvoiced = invoices.reduce((acc, inv) => acc + inv.totalAmount, 0);
  const totalCollected = invoices.reduce((acc, inv) => acc + inv.paidAmount, 0);
  const totalPending = invoices.reduce((acc, inv) => acc + inv.balance, 0);

  const filteredInvoices = invoices.filter((inv) => {
    return (
      inv.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inv.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleRecordPaymentSubmit = (e) => {
    e.preventDefault();
    if (!paymentAmount || Number(paymentAmount) <= 0) return;
    recordPayment(paymentModalInvoice.id, Number(paymentAmount), paymentMethod);
    setPaymentModalInvoice(null);
    setPaymentAmount('');
  };

  const handleCreateInvoiceSubmit = (e) => {
    e.preventDefault();
    addInvoice({
      clientId: newInvoiceForm.clientId,
      clientName: newInvoiceForm.clientName,
      projectName: newInvoiceForm.projectName,
      amount: Number(newInvoiceForm.amount),
      description: newInvoiceForm.description,
      dueDate: newInvoiceForm.dueDate,
      paymentMethod: newInvoiceForm.paymentMethod
    });
    setNewInvoiceModalOpen(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-slate-900">
            Financial History, Invoicing & Ledger
          </h1>
          <p className="text-xs text-slate-500">
            Contract ledger between Dev Digit Solutions and enterprise clients with tax receipts and payment tracking
          </p>
        </div>

        <button
          onClick={() => setNewInvoiceModalOpen(true)}
          className="px-4 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Generate Tax Invoice</span>
        </button>
      </div>

      {/* Top 3 Financial Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Billed to Date</div>
          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
            ₹{totalInvoiced.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-slate-500">Includes 18% GST compliant billing</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Realized / Collected Revenue</div>
          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-emerald-600">
            ₹{totalCollected.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-emerald-700 font-semibold">Deposited into corporate bank accounts</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Outstanding Receivable Balance</div>
          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-amber-600">
            ₹{totalPending.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-amber-700 font-semibold">Pending milestone completions & terms</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search invoices by number, client name, or project..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="text-xs text-slate-500">
          Showing <strong>{filteredInvoices.length}</strong> invoices
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] font-bold">
                <th className="pb-3">Invoice #</th>
                <th className="pb-3">Client & Project</th>
                <th className="pb-3">Issue / Due</th>
                <th className="pb-3">Total Amount</th>
                <th className="pb-3">Paid Amount</th>
                <th className="pb-3">Balance Due</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 font-mono font-bold text-blue-600 text-xs">
                    {inv.invoiceNumber}
                  </td>
                  <td className="py-4">
                    <div className="font-heading font-bold text-slate-900 text-sm">
                      {inv.clientName}
                    </div>
                    <div className="text-[11px] text-slate-500 max-w-[220px] truncate" title={inv.projectName}>
                      {inv.projectName}
                    </div>
                  </td>
                  <td className="py-4 text-slate-500 text-[11px]">
                    <div>Issue: {inv.issueDate}</div>
                    <div className="text-slate-400">Due: {inv.dueDate}</div>
                  </td>
                  <td className="py-4 font-bold text-slate-900">
                    ₹{inv.totalAmount.toLocaleString('en-IN')}
                    <div className="text-[9px] text-slate-400 font-normal">incl. 18% GST</div>
                  </td>
                  <td className="py-4 font-bold text-emerald-600">
                    ₹{inv.paidAmount.toLocaleString('en-IN')}
                  </td>
                  <td className="py-4 font-bold text-slate-800">
                    {inv.balance > 0 ? (
                      <span className="text-amber-600">₹{inv.balance.toLocaleString('en-IN')}</span>
                    ) : (
                      <span className="text-slate-400">₹0 (Settled)</span>
                    )}
                  </td>
                  <td className="py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        inv.status === 'Paid'
                          ? 'bg-emerald-100 text-emerald-700'
                          : inv.status === 'Partial'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setSelectedInvoice(inv)}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] transition-colors flex items-center gap-1"
                        title="View printable tax invoice receipt"
                      >
                        <Receipt className="w-3 h-3" />
                        <span>Receipt</span>
                      </button>

                      {inv.status !== 'Paid' && (
                        <button
                          onClick={() => {
                            setPaymentModalInvoice(inv);
                            setPaymentAmount(inv.balance);
                          }}
                          className="px-2.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-sm transition-colors flex items-center gap-1"
                        >
                          <CreditCard className="w-3 h-3" />
                          <span>Pay</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Printable Invoice Receipt Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedInvoice(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Printable Invoice Paper Area */}
            <div id="printable-invoice" className="space-y-6">
              
              {/* Header: Company & Tax Details */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-6 gap-4">
                <div>
                  <div className="font-heading font-extrabold text-2xl text-blue-600">
                    Dev Digit Solutions
                  </div>
                  <div className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
                    {siteData.brand.address.street}, {siteData.brand.address.city}, {siteData.brand.address.state} - {siteData.brand.address.pin}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Phone: {siteData.brand.phone} • GSTIN: 09AAACD4421P1Z9
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono font-extrabold text-lg text-slate-900">
                    TAX INVOICE
                  </div>
                  <div className="font-mono text-sm text-blue-600 font-bold">
                    {selectedInvoice.invoiceNumber}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Date: {selectedInvoice.issueDate}
                  </div>
                  <div className="text-xs text-slate-500">
                    Due Date: {selectedInvoice.dueDate}
                  </div>
                </div>
              </div>

              {/* Bill To & Project Info */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Billed To (Client):</div>
                  <div className="font-bold text-slate-900 text-sm mt-1">{selectedInvoice.clientName}</div>
                  <div className="text-slate-600 mt-0.5">Enterprise Client Account</div>
                  <div className="text-slate-500 mt-0.5">Payment Term: Net 15 Days</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Project Scope:</div>
                  <div className="font-bold text-slate-900 text-sm mt-1">{selectedInvoice.projectName}</div>
                  <div className="text-slate-600 mt-0.5">Payment Method: {selectedInvoice.paymentMethod}</div>
                  <div className="text-slate-500 mt-0.5">Invoice Status: <strong className="text-blue-600">{selectedInvoice.status}</strong></div>
                </div>
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] font-bold">
                      <th className="pb-2">Description</th>
                      <th className="pb-2 text-center">Qty</th>
                      <th className="pb-2 text-right">Rate (INR)</th>
                      <th className="pb-2 text-right">Amount (INR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {selectedInvoice.items.map((it, idx) => (
                      <tr key={idx}>
                        <td className="py-3 text-slate-800 font-medium">{it.description}</td>
                        <td className="py-3 text-center text-slate-600">{it.qty}</td>
                        <td className="py-3 text-right text-slate-700">₹{it.rate.toLocaleString('en-IN')}</td>
                        <td className="py-3 text-right font-bold text-slate-900">₹{it.amount.toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Calculations Box */}
              <div className="border-t pt-4 space-y-1 text-xs text-right ml-auto max-w-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal:</span>
                  <span className="font-semibold">₹{selectedInvoice.amount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Integrated GST (18%):</span>
                  <span className="font-semibold">₹{selectedInvoice.gstAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 border-t pt-2">
                  <span>Total Amount:</span>
                  <span className="text-blue-600">₹{selectedInvoice.totalAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs text-emerald-600 font-bold">
                  <span>Amount Paid:</span>
                  <span>-₹{selectedInvoice.paidAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs text-amber-600 font-bold border-t pt-1">
                  <span>Balance Due:</span>
                  <span>₹{selectedInvoice.balance.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Stamp & Authorized Signature */}
              <div className="pt-6 border-t flex items-center justify-between text-xs text-slate-500">
                <div>
                  <div className="flex items-center gap-1 font-bold text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Digitally Generated by Dev Digit Solutions</span>
                  </div>
                  <div className="text-[10px]">No physical signature required under IT Act 2000.</div>
                </div>

                <div className="text-right">
                  <div className="font-heading font-bold text-slate-900">Dev Digit Solutions</div>
                  <div className="text-[10px] text-slate-400">Authorized Accounts Signatory</div>
                </div>
              </div>

            </div>

            {/* Print Action Bar */}
            <div className="pt-4 border-t flex justify-end gap-3">
              <button
                onClick={handlePrint}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save as PDF</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Record Payment Modal */}
      {paymentModalInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
            <button
              onClick={() => setPaymentModalInvoice(null)}
              className="absolute top-5 right-5 p-1 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                Payment Collection
              </span>
              <h3 className="font-heading font-bold text-xl text-slate-900 mt-1">
                Record Payment for {paymentModalInvoice.invoiceNumber}
              </h3>
              <p className="text-xs text-slate-500">
                Client: {paymentModalInvoice.clientName} • Pending Balance: ₹{paymentModalInvoice.balance.toLocaleString('en-IN')}
              </p>
            </div>

            <form onSubmit={handleRecordPaymentSubmit} className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Payment Amount to Credit (INR) *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  max={paymentModalInvoice.balance}
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                >
                  <option value="Bank Transfer (NEFT)">Bank Transfer (NEFT)</option>
                  <option value="RTGS Transfer">RTGS Transfer</option>
                  <option value="UPI / QR Code">UPI / QR Code</option>
                  <option value="IMPS Immediate Payment">IMPS Immediate Payment</option>
                  <option value="Corporate Credit Card">Corporate Credit Card</option>
                  <option value="Cheque Deposit">Cheque Deposit</option>
                </select>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentModalInvoice(null)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs shadow-md shadow-emerald-600/20"
                >
                  Record Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Generate New Invoice Modal */}
      {newInvoiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setNewInvoiceModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Generate Tax Invoice
              </h3>
              <p className="text-xs text-slate-500">
                Bill client with standard 18% GST calculation
              </p>
            </div>

            <form onSubmit={handleCreateInvoiceSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Select Client Account</label>
                <select
                  value={newInvoiceForm.clientId}
                  onChange={(e) => {
                    const id = e.target.value;
                    const matchedProj = projects.find(p => p.clientId === id) || projects[0];
                    setNewInvoiceForm({
                      ...newInvoiceForm,
                      clientId: id,
                      clientName: matchedProj.clientName,
                      projectName: matchedProj.title
                    });
                  }}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                >
                  {projects.map((p) => (
                    <option key={p.id} value={p.clientId}>
                      {p.clientName} ({p.title.slice(0, 25)}...)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Service Line Description</label>
                <input
                  type="text"
                  required
                  value={newInvoiceForm.description}
                  onChange={(e) => setNewInvoiceForm({ ...newInvoiceForm, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Taxable Amount (INR) *</label>
                  <input
                    type="number"
                    required
                    value={newInvoiceForm.amount}
                    onChange={(e) => setNewInvoiceForm({ ...newInvoiceForm, amount: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Payment Due Date</label>
                  <input
                    type="date"
                    required
                    value={newInvoiceForm.dueDate}
                    onChange={(e) => setNewInvoiceForm({ ...newInvoiceForm, dueDate: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-2xl text-xs text-blue-900 space-y-1">
                <div className="flex justify-between">
                  <span>Taxable:</span>
                  <strong>₹{Number(newInvoiceForm.amount || 0).toLocaleString('en-IN')}</strong>
                </div>
                <div className="flex justify-between">
                  <span>18% GST:</span>
                  <strong>₹{(Number(newInvoiceForm.amount || 0) * 0.18).toLocaleString('en-IN')}</strong>
                </div>
                <div className="flex justify-between border-t border-blue-200 pt-1 font-bold">
                  <span>Invoice Total:</span>
                  <span>₹{(Number(newInvoiceForm.amount || 0) * 1.18).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setNewInvoiceModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs shadow-md shadow-blue-600/20"
                >
                  Create Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
