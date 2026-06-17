import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import HelpSearchPage from "../components/HelpCenterSearch";
import RecommendedSection from "../components/HelpCenterRecommendations";
import HelpCenterArticlesSection from "../components/HelpCenterTopics";
import FAQ from "../components/FAQ";
import BlogSection from "../components/BlogSection";



export default function HelpCenterPage() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
       <HelpSearchPage />
       <RecommendedSection />
       <HelpCenterArticlesSection />
       <FAQ />
       <BlogSection />
      <Footer />
    </div>
  );
}