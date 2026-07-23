import React, { useState, useEffect } from 'react';
import { RonnieLogo } from './RonnieLogo';
import { Menu, X, ArrowRight, PhoneCall, MessageCircle } from 'lucide-react';
import { GYM_PHONE_DISPLAY, GYM_PHONE, GYM_WHATSAPP_LINK } from '../data/gymData';

interface NavbarProps {
  onOpenJoinModal: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'programs', label: 'PROGRAMS', href: '#programs' },
    { id: 'trainers', label: 'TRAINERS', href: '#trainers' },
    { id: 'membership', label: 'MEMBERSHIP', href: '#membership' },
    { id: 'gallery', label: 'GALLERY', href: '#gallery' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-[#080808]/90 backdrop-blur-lg border-b border-white/10 shadow-2xl' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <RonnieLogo size="md" layout="horizontal" showTagline={true} />
        </a>

        {/* Desktop Central Glass Capsule Navbar */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#121212]/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-2xl shadow-black/80">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href, link.id)}
                className={`relative px-4 py-1.5 font-bebas text-sm md:text-base tracking-wider transition-colors ${
                  isActive ? 'text-[#E31E24]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#E31E24] rounded-full shadow-[0_0_8px_#E31E24]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={GYM_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)]"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>

          <a
            href={`tel:${GYM_PHONE}`}
            className="hidden xl:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/15 text-white font-rajdhani text-sm font-semibold tracking-wider hover:border-[#E31E24] transition-all"
          >
            <PhoneCall className="w-4 h-4 text-[#E31E24]" />
            <span>{GYM_PHONE_DISPLAY}</span>
          </a>

          <button
            onClick={() => onOpenJoinModal('professional')}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E31E24] text-white font-bebas text-base tracking-wider shadow-[0_0_20px_rgba(227,30,36,0.5)] hover:shadow-[0_0_30px_rgba(227,30,36,0.8)] hover:bg-[#c2141a] transition-all duration-300 border border-red-500/50"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0c0c0c]/98 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href, link.id)}
                className="py-2 font-bebas text-xl text-gray-300 hover:text-[#E31E24] transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal('professional');
              }}
              className="w-full py-3 rounded-xl bg-[#E31E24] text-white font-bebas text-lg tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(227,30,36,0.6)]"
            >
              <span>JOIN NOW</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={GYM_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-xl bg-[#25D366] text-white font-bebas text-base tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.4)]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WHATSAPP</span>
              </a>

              <a
                href={`tel:${GYM_PHONE}`}
                className="py-2.5 rounded-xl bg-white/5 text-gray-300 font-rajdhani text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 border border-white/10"
              >
                <PhoneCall className="w-4 h-4 text-[#E31E24]" />
                <span>{GYM_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
