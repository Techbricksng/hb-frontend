import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import PrivacyPolicyContent from "../components/PrivacyPolicy";
import SearchPage from "../components/SearchPage";
import RelatedArticlesSection from "../components/RelatedArticlesSection";
import PopularBlogSection from "../components/PopularBlogSection";



export default function PrivacyPolicyPage() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
      <SearchPage />
      <PrivacyPolicyContent />
      <RelatedArticlesSection />
      <PopularBlogSection />
      <Footer />
    </div>
  );
}