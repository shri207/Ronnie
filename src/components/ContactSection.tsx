import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, Clock, Send, CheckCircle2, MessageCircle, ExternalLink, Instagram } from 'lucide-react';
import { GYM_PHONE_DISPLAY, GYM_PHONE, GYM_WHATSAPP_LINK, GOOGLE_MAPS_LINK, INSTAGRAM_LINK } from '../data/gymData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: 'Professional Plan (₹1500)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        plan: 'Professional Plan (₹1500)',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#080808] overflow-hidden border-t border-white/5">
      
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#E31E24]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="font-bebas text-xl tracking-[0.2em] text-[#E31E24] uppercase">
              GET IN TOUCH
            </span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>

          <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-wider uppercase leading-none mb-4">
            START YOUR <span className="text-[#E31E24]">TRANSFORMATION</span>
          </h2>

          <p className="font-sans text-gray-300 text-base md:text-lg">
            Have questions or ready to join? Send us a message or visit our Tiruchirappalli center.
          </p>
        </motion.div>

        {/* Split Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 glass-card-red rounded-3xl p-8 border border-[#E31E24]/40 shadow-2xl"
          >
            <h3 className="font-bebas text-3xl text-white tracking-wide uppercase mb-2">
              SEND US A MESSAGE
            </h3>
            <p className="font-sans text-xs text-gray-400 mb-8">
              Fill out the form below and our team will get back to you within 2 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-[#E31E24]/20 border border-[#E31E24] rounded-2xl text-center flex flex-col items-center gap-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#E31E24]" />
                <h4 className="font-bebas text-2xl text-white">MESSAGE SENT SUCCESSFULLY!</h4>
                <p className="font-sans text-sm text-gray-300">
                  Thank you for reaching out to Ronnie Fitness. Our representative will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-rajdhani font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Siva Balan"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#E31E24] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-rajdhani font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#E31E24] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-rajdhani font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#E31E24] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-rajdhani font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Interested Plan
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#E31E24] transition-colors text-sm"
                    >
                      <option value="Starter Plan (₹1000)">Starter Plan (₹1000/mo)</option>
                      <option value="Professional Plan (₹1500)">Professional Plan (₹1500/mo)</option>
                      <option value="Elite Plan (₹3000)">Elite Personal Training (₹3000/mo)</option>
                      <option value="1-Day Free Trial">1-Day Free Trial Pass</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-rajdhani font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Your Goals / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your fitness goals..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#E31E24] transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E31E24] text-white font-bebas text-xl tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(227,30,36,0.6)] hover:bg-[#c2141a] transition-all"
                >
                  <span>SEND INQUIRY</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Details, Hours & Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Contact Details Card */}
            <div className="glass-card rounded-3xl p-6 border border-white/10 space-y-4">
              <h3 className="font-bebas text-2xl text-white tracking-wide uppercase mb-4 border-b border-white/10 pb-2">
                CONTACT INFORMATION
              </h3>

              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:bg-white/5 p-2 rounded-2xl transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] flex-shrink-0 group-hover:bg-[#E31E24] group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bebas text-base text-white block group-hover:text-[#E31E24] transition-colors">Ronnie Fitness & Gym</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#E31E24]" />
                  </div>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    Old Post Office Road, Bhima Nagar, Tiruchirappalli, Tamil Nadu - 620012
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-2">
                <div className="w-10 h-10 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bebas text-base text-white block">PHONE</span>
                  <a href={`tel:${GYM_PHONE}`} className="font-sans text-xs text-gray-400 hover:text-[#E31E24] transition-colors">
                    {GYM_PHONE_DISPLAY} ({GYM_PHONE})
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <MessageCircle className="w-5 h-5 fill-[#25D366]" />
                </div>
                <div>
                  <span className="font-bebas text-base text-white block">WHATSAPP CHAT</span>
                  <a
                    href={GYM_WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs text-[#25D366] hover:underline transition-colors font-semibold"
                  >
                    Chat on WhatsApp ({GYM_PHONE_DISPLAY})
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2">
                <div className="w-10 h-10 rounded-full bg-[#E1306C]/10 border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C] flex-shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bebas text-base text-white block">INSTAGRAM</span>
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs text-[#E1306C] hover:underline transition-colors font-semibold"
                  >
                    @ronnie_fitness_gym ↗
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-2">
                <div className="w-10 h-10 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/40 flex items-center justify-center text-[#E31E24] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bebas text-base text-white block">EMAIL</span>
                  <a href="mailto:info@ronniefitness.com" className="font-sans text-xs text-gray-400 hover:text-[#E31E24] transition-colors">
                    info@ronniefitness.com
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="glass-card rounded-3xl p-6 border border-white/10">
              <h3 className="font-bebas text-2xl text-white tracking-wide uppercase mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#E31E24]" />
                <span>OPENING HOURS</span>
              </h3>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center text-gray-300">
                  <span className="font-bold">Monday - Saturday</span>
                  <span className="text-[#E31E24] font-semibold">5:00 AM - 10:00 PM</span>
                </div>
                <div className="border-t border-white/10 pt-2 flex justify-between items-center text-gray-300">
                  <span className="font-bold">Sunday</span>
                  <span className="text-[#E31E24] font-semibold">6:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>

            {/* Interactive Google Map Card */}
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-red rounded-3xl p-4 border border-[#E31E24]/50 hover:border-[#E31E24] transition-all relative h-40 overflow-hidden flex items-center justify-center group shadow-xl hover:shadow-[0_0_30px_rgba(227,30,36,0.4)]"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                alt="Map Tiruchirappalli Location"
                className="w-full h-full object-cover filter brightness-50 contrast-125 rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#E31E24]/10 backdrop-blur-[1px] group-hover:bg-[#E31E24]/5 transition-colors" />
              <div className="absolute flex flex-col items-center gap-2 text-center p-2">
                <div className="w-10 h-10 rounded-full bg-[#E31E24] text-white flex items-center justify-center shadow-[0_0_20px_#E31E24] animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="font-bebas text-base text-white tracking-wider bg-black/90 px-4 py-1.5 rounded-full border border-[#E31E24] shadow-lg flex items-center gap-2 group-hover:bg-[#E31E24] transition-all">
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
