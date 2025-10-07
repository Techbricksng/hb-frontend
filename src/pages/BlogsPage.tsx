import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import BlogArticlesPage from "../components/BlogMain";
import PopularBlogGridPage from "../components/BlogSubMain";



export default function BlogsMainPage() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
       <BlogArticlesPage  />
       <PopularBlogGridPage />
      <Footer />
    </div>
  );
}