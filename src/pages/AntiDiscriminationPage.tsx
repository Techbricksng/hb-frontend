import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import PopularBlogSection from "../components/PopularBlogSection";
import RelatedArticlesSection from "../components/RelatedArticlesSection";
import AntiDiscriminationPageContent from "../components/AntiDiscrimniation";
import SearchPage from "../components/SearchPage";



export default function AntiDiscriminationPage() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
      <SearchPage />
      <AntiDiscriminationPageContent />
      <RelatedArticlesSection />
      <PopularBlogSection />
      <Footer />
    </div>
  );
}