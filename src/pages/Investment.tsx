import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import PropertyFilterHeader from "../components/Investment";
import PropertyListingsPage from "../components/InvestmentPropertyListing";
import InspirationSection from "../components/InspirationSection";


export default function Investment() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
      <PropertyFilterHeader />
      <PropertyListingsPage />
      <InspirationSection />
      <Footer />
    </div>
  );
}