import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { PricingSection } from './components/PricingSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TrainersSection } from './components/TrainersSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TransformationSection } from './components/TransformationSection';
import { StatisticsSection } from './components/StatisticsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { CtaBanner } from './components/CtaBanner';
import { FooterSection } from './components/FooterSection';
import { JoinModal } from './components/JoinModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { GalleryLightboxModal } from './components/GalleryLightboxModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { GalleryItem } from './types';

export function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string>('professional');
  
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const handleOpenJoinModal = (planId?: string) => {
    if (planId) {
      setSelectedPlanForModal(planId);
    }
    setIsJoinModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-[#E31E24] selection:text-white antialiased overflow-x-hidden">
      
      {/* 1. Glass Capsule Navbar */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      <main>
        {/* 2. Hero Section */}
        <HeroSection onOpenJoinModal={handleOpenJoinModal} />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Why Choose Ronnie Section */}
        <WhyChooseSection />

        {/* 5. Membership Pricing Section */}
        <PricingSection onOpenJoinModal={handleOpenJoinModal} />

        {/* 6. Training Programs Section */}
        <ProgramsSection
          onSelectProgram={(id) => setSelectedProgramId(id)}
          onOpenJoinModal={() => handleOpenJoinModal('professional')}
        />

        {/* 7. Trainers Section */}
        <TrainersSection />

        {/* 8. Gallery Section */}
        <GallerySection
          onOpenLightbox={(item) => setLightboxItem(item)}
          onOpenJoinModal={() => handleOpenJoinModal('professional')}
        />

        {/* 9. Testimonials Section */}
        <TestimonialsSection />

        {/* 10. Transformation Section */}
        <TransformationSection onStartJourney={() => handleOpenJoinModal('professional')} />

        {/* 11. Statistics Section */}
        <StatisticsSection />

        {/* 12. FAQ Section */}
        <FaqSection />

        {/* 13. Contact Section */}
        <ContactSection />

        {/* 14. CTA Banner (Discipline Builds Freedom) */}
        <CtaBanner onJoinToday={() => handleOpenJoinModal('professional')} />
      </main>

      {/* 16. Footer Section */}
      <FooterSection />

      {/* Interactive Modals */}
      <JoinModal
        isOpen={isJoinModalOpen}
        selectedPlanId={selectedPlanForModal}
        onClose={() => setIsJoinModalOpen(false)}
      />

      <ProgramDetailModal
        programId={selectedProgramId}
        onClose={() => setSelectedProgramId(null)}
        onOpenJoinModal={handleOpenJoinModal}
      />

      <GalleryLightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      {/* Floating Sticky WhatsApp Quick Chat Widget */}
      <WhatsAppFloatingButton />

    </div>
  );
}

export default App;
