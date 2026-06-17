import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import ReportScamContent from "../components/ReportScam";



export default function ReportScamPage() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
      <ReportScamContent />
      <Footer />
    </div>
  );
}