import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { TransfersSection } from "@/components/TransfersSection";
import { CircuitsSection } from "@/components/CircuitsSection";
import { ExcursionsSection } from "@/components/ExcursionsSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { DestinationsSection } from "@/components/DestinationsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <CircuitsSection />
      <ExcursionsSection />
      <ActivitiesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <DestinationsSection />
      <TransfersSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
