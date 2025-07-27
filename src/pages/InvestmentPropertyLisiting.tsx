import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import ListPropertyPage from "../components/PropertyListing";


export default function InvestmentPropertyListing() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
      <ListPropertyPage />
      <Footer />
    </div>
  );
}