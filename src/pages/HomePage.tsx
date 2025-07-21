import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import MainContent from "../components/HomePage";
import PropertyGuide from "../components/PropertyGuide";
import TopOffers from "../components/TopOffers";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
      <MainContent />
      <TopOffers />
      <PropertyGuide />
      <FAQ />
      <ContactSection  />
      <Footer />
    </div>
  );
}