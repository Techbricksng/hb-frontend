import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import InvestmentPropertyDetailPage from "../components/InvestmentDetails";
import InspirationSection from "../components/InspirationSection";
import SimilarPropertiesSection from "../components/InvestmentSimilarProperty";


export default function InvestmentDetails() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
      <InvestmentPropertyDetailPage />
      <SimilarPropertiesSection />
      <InspirationSection />
      <Footer />
    </div>
  );
}