'use client';

import HeroSection from '@/components/sections/HeroSection';
import TodaysFlowSection from '@/components/sections/TodaysFlowSection';
import FamilyIntroductionSection from '@/components/sections/FamilyIntroductionSection';
import ThankYouSection from '@/components/sections/ThankYouSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <HeroSection />
      <TodaysFlowSection />
      <FamilyIntroductionSection />
      <ThankYouSection />
    </div>
  );
}