import React, { useState, useEffect } from 'react';
import { PRICING_PLANS } from '../data/gymData';
import { X, Check, Shield, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  selectedPlanId?: string;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, selectedPlanId = 'professional', onClose }) => {
  const [activePlanId, setActivePlanId] = useState(selectedPlanId);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    startDate: '',
    timeSlot: 'Morning (6:00 AM - 10:00 AM)',
    paymentMethod: 'UPI / GPay'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedPlanId) {
      setActivePlanId(selectedPlanId);
    }
  }, [selectedPlanId]);

  if (!isOpen) return null;

  const currentPlan = PRICING_PLANS.find(p => p.id === activePlanId) || PRICING_PLANS[1];
  const registrationFee = 500;
  const totalPrice = currentPlan.price + registrationFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-[#121212] border border-[#E31E24]/60 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(227,30,36,0.5)] overflow-hidden max-h-[90vh] overflow-y-auto font-sans">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-[#E31E24] text-white transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#E31E24] text-white flex items-center justify-center shadow-[0_0_30px_#E31E24]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-bebas text-4xl text-white tracking-wider uppercase">WELCOME TO RONNIE FITNESS!</h3>
            <p className="text-gray-300 text-sm max-w-md">
              Your membership pass for <span className="text-[#E31E24] font-bold">{currentPlan.name}</span> has been provisioned! Our team will contact you at <span className="text-white font-bold">{formData.phone}</span> to confirm your slot.
            </p>

            <div className="w-full bg-[#1c1c1c] rounded-2xl p-4 border border-white/10 text-left font-mono text-xs text-gray-300 my-4 space-y-1">
              <div>MEMBERSHIP: {currentPlan.name} (₹{currentPlan.price})</div>
              <div>REGISTRATION FEE: ₹500</div>
              <div className="text-[#E31E24] font-bold text-sm pt-2 border-t border-white/10">TOTAL DUE AT CENTER: ₹{totalPrice}</div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-8 py-3.5 rounded-xl bg-[#E31E24] text-white font-bebas text-lg tracking-wider"
            >
              DONE & RETURN
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#E31E24]" />
              <span className="font-bebas text-sm text-[#E31E24] tracking-widest uppercase">RONNIE FITNESS MEMBERSHIP</span>
            </div>
            <h3 className="font-bebas text-3xl md:text-4xl text-white font-black tracking-wide uppercase mb-6">
              JOIN THE <span className="text-[#E31E24]">BROTHERHOOD</span>
            </h3>

            {/* Plan Selector Buttons */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {PRICING_PLANS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePlanId(p.id)}
                  className={`py-3 px-2 rounded-xl font-bebas text-sm md:text-base tracking-wider border transition-all ${
                    activePlanId === p.id
                      ? 'bg-[#E31E24] text-white border-[#E31E24] shadow-[0_0_15px_#E31E24]'
                      : 'bg-[#1a1a1a] text-gray-400 border-white/10 hover:text-white'
                  }`}
                >
                  {p.name} (₹{p.price})
                </button>
              ))}
            </div>

            {/* Summary Price Card */}
            <div className="bg-[#1c1c1c] rounded-2xl p-4 border border-white/10 mb-6 flex justify-between items-center text-xs">
              <div>
                <span className="text-gray-400 block uppercase">SELECTED PLAN</span>
                <span className="font-bebas text-xl text-white">{currentPlan.name} — ₹{currentPlan.price}/MO</span>
              </div>
              <div className="text-right">
                <span className="text-gray-400 block uppercase">+ REGISTRATION FEE</span>
                <span className="font-bebas text-xl text-[#E31E24]">₹500 (TOTAL: ₹{totalPrice})</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Siva Balan"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#E31E24] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#E31E24] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Preferred Time Slot</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#E31E24] text-sm"
                  >
                    <option value="Morning (6:00 AM - 10:00 AM)">Morning (6:00 AM - 10:00 AM)</option>
                    <option value="Evening (6:00 PM - 10:00 PM)">Evening (6:00 PM - 10:00 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Payment Method</label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#E31E24] text-sm"
                  >
                    <option value="UPI / GPay">GPay / PhonePe / UPI</option>
                    <option value="Cash at Gym Desk">Pay Cash at Desk</option>
                    <option value="Credit/Debit Card">Credit / Debit Card</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#E31E24] text-white font-bebas text-xl tracking-wider shadow-[0_0_25px_rgba(227,30,36,0.6)] hover:bg-[#c2141a] transition-all mt-4"
              >
                CONFIRM & PAY ₹{totalPrice}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
