import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import BecomeRealtor from "../components/RealtorSlide";
import WhyJoinUs from "../components/RealtorWhyJoin";
import FeaturesSection from "../components/RealtorFeaturesSection";
import BenefitsSection from "../components/RealtorBenefitsSection";
import WhyChooseUsPage from "../components/RealtorWhyChooseUs";
import BlogSection from "../components/BlogSection";


export default function RealtorLanding() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
      <BecomeRealtor />
      <WhyJoinUs />
      <FeaturesSection />
      <BenefitsSection />
      <WhyChooseUsPage />
      <BlogSection />
      <Footer />
    </div>
  );
}