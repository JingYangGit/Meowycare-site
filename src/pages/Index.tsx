import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsBar from "@/components/landing/StatsBar";

import FloatingTestimonials from "@/components/landing/FloatingTestimonials";
import PainPointsSection from "@/components/landing/PainPointsSection";
import ServiceFeaturesSection from "@/components/landing/ServiceFeaturesSection";
import ExpectationsSection from "@/components/landing/ExpectationsSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import NewPricingSection from "@/components/landing/NewPricingSection";
import TeamSection from "@/components/landing/TeamSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import SectionDivider from "@/components/landing/SectionDivider";
import GettingStartedSection from "@/components/landing/GettingStartedSection";
import FreeConsultationSection from "@/components/landing/FreeConsultationSection";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <header>
        <HeroSection />
      </header>
      <StatsBar />
      <SectionDivider />
      <FloatingTestimonials />
      <SectionDivider />
      <section aria-label="We Understand Your Pain">
        <PainPointsSection />
      </section>
      <SectionDivider />
      <section aria-label="How We Help">
        <ServiceFeaturesSection />
      </section>
      <SectionDivider />
      <section aria-label="What You Can Expect">
        <ExpectationsSection />
      </section>
      <SectionDivider />
      <section aria-label="Why Us">
        <WhyUsSection />
      </section>
      <SectionDivider />
      <section aria-label="How It Works">
        <GettingStartedSection />
      </section>
      <SectionDivider />
      <section aria-label="Pricing">
        <NewPricingSection />
      </section>
      <SectionDivider />
      <section aria-label="Free Consultation">
        <FreeConsultationSection />
      </section>
      <SectionDivider />
      <section aria-label="FAQ">
        <FAQSection />
      </section>
      <SectionDivider />
      <section aria-label="Our Team">
        <TeamSection />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
