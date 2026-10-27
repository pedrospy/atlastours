import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Calculator } from "@/components/Calculator";
import { Offers } from "@/components/Offers";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Calculator />
        <Offers />
        <Process />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
