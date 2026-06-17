import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import ExploreProperty from "../components/ExploreProperty";
import InvestProperty from "../components/InvestProperty";
import HotSales from "../components/HotSales";


export default function ExplorePage() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
      <ExploreProperty />
      <InvestProperty />
      <HotSales />
      <Footer />
    </div>
  );
}