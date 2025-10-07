import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import ReportConcernContent from "../components/ReportConcern";



export default function ReportConcernPage() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
      <ReportConcernContent />
      <Footer />
    </div>
  );
}