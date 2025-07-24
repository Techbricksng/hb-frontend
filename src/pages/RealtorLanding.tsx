import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import BecomeRealtor from "../components/RealtorSlide";
import WhyJoinUs from "../components/RealtorWhyJoin";
import FeaturesSection from "../components/RealtorFeaturesSection";


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
      <Footer />
    </div>
  );
}