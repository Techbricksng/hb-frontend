import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import BlogArticlePageDetails from "../components/BlogDetailsOne";
import PopularBlogSection from "../components/PopularBlogSection";



export default function BlogsDetailsPage() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
      <BlogArticlePageDetails />
      <PopularBlogSection />
      <Footer />
    </div>
  );
}