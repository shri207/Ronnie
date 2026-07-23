import React, { useState } from 'react';
import { RonnieLogo } from './RonnieLogo';
import { Instagram, Facebook, Youtube, Send, MapPin, Phone, Mail, ArrowUp, MessageCircle, ExternalLink } from 'lucide-react';
import { GYM_PHONE_DISPLAY, GYM_PHONE, GYM_WHATSAPP_LINK, GOOGLE_MAPS_LINK, INSTAGRAM_LINK } from '../data/gymData';

export const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-8 border-t border-white/10 overflow-hidden">
      
      {/* Background Red Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E31E24]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info & Motto */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <a href="#home" className="mb-6">
              <RonnieLogo size="lg" layout="horizontal" showTagline={true} />
            </a>

            <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6">
              Ronnie Fitness & Gym is a premier fitness center dedicated to helping you achieve your personal best through expert coaching, state-of-the-art equipment, and a supportive community.
            </p>

            {/* Address & Contacts */}
            <div className="space-y-2.5 font-sans text-xs text-gray-400">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#E31E24] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#E31E24] flex-shrink-0 mt-0.5" />
                <span>Old Post Office Road, Bhima Nagar, Tiruchirappalli, Tamil Nadu - 620012 ↗</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                <a href={`tel:${GYM_PHONE}`} className="hover:text-white transition-colors">{GYM_PHONE_DISPLAY} ({GYM_PHONE})</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0 fill-[#25D366]" />
                <a href={GYM_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline transition-colors">
                  WhatsApp: {GYM_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                <a href="mailto:info@ronniefitness.com" className="hover:text-white transition-colors">info@ronniefitness.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bebas text-2xl text-white tracking-wider uppercase mb-5 border-b border-[#E31E24]/60 pb-2 inline-block">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 font-sans text-sm text-gray-300">
              <li><a href="#home" className="hover:text-[#E31E24] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#E31E24] transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-[#E31E24] transition-colors">Training Programs</a></li>
              <li><a href="#trainers" className="hover:text-[#E31E24] transition-colors">Expert Trainers</a></li>
              <li><a href="#membership" className="hover:text-[#E31E24] transition-colors">Membership Pricing</a></li>
              <li><a href="#gallery" className="hover:text-[#E31E24] transition-colors">Gym Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#E31E24] transition-colors">Contact Center</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-3">
            <h4 className="font-bebas text-2xl text-white tracking-wider uppercase mb-5 border-b border-[#E31E24]/60 pb-2 inline-block">
              OUR PROGRAMS
            </h4>
            <ul className="space-y-3 font-sans text-sm text-gray-300">
              <li><a href="#programs" className="hover:text-[#E31E24] transition-colors">Strength Training</a></li>
              <li><a href="#programs" className="hover:text-[#E31E24] transition-colors">Muscle Building</a></li>
              <li><a href="#programs" className="hover:text-[#E31E24] transition-colors">Fat Loss & Weight Loss</a></li>
              <li><a href="#programs" className="hover:text-[#E31E24] transition-colors">Functional Cross-Training</a></li>
              <li><a href="#programs" className="hover:text-[#E31E24] transition-colors">Cardio & Stamina</a></li>
              <li><a href="#programs" className="hover:text-[#E31E24] transition-colors">1-on-1 Personal Coaching</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Working Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-bebas text-2xl text-white tracking-wider uppercase mb-5 border-b border-[#E31E24]/60 pb-2 inline-block">
              STAY CONNECTED
            </h4>
            <p className="font-sans text-xs text-gray-400 mb-4">
              Subscribe to receive workout tips, motivation, and special membership offers.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#E31E24]/20 border border-[#E31E24] rounded-xl text-xs text-white font-sans text-center mb-6">
                ✓ Thank you for subscribing to Ronnie Fitness!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 mb-6">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#E31E24]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#E31E24] text-white font-bebas text-base tracking-wider hover:bg-[#c2141a] transition-all flex items-center justify-center flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Operating Hours */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 font-sans text-xs space-y-2">
              <span className="font-bebas text-sm text-[#E31E24] tracking-wider block uppercase">WORKING HOURS</span>
              <div className="flex justify-between text-gray-300">
                <span>Mon - Sat:</span>
                <span className="text-white font-semibold">5:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Sunday:</span>
                <span className="text-white font-semibold">6:00 AM - 1:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-gray-400">
          <p>© 2025 Ronnie Fitness & Gym. All Rights Reserved. Built with Discipline & Strength.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E31E24] hover:border-[#E31E24] transition-all" title="Follow @ronnie_fitness_gym on Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E31E24] hover:border-[#E31E24] transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E31E24] hover:border-[#E31E24] transition-all">
              <Youtube className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-4 w-9 h-9 rounded-full bg-[#E31E24] text-white flex items-center justify-center shadow-[0_0_15px_#E31E24] hover:bg-[#c2141a] transition-all"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
