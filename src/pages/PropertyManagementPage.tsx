import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import PropertyManagementContent from "../components/PropertyManagementSlide";
import PropertyServicesPage from "../components/PropertyManagementServices";
import PropertyManagementWhyChooseUsPage from "../components/PropertyManagementWhyChooseUs";
import PropertyManagementTypesPage from "../components/PropertyManagementPropertyTypes";
import ContactSection from "../components/ContactSection";
import BlogSection from "../components/BlogSection";


export default function PropertyManagementPage() {
  const [mode] = useState<string>("light");

  return (
    <div
      className={`${mode} w-full mx-auto h-[100vh] bg-[color:var(--color-bg)] font-poppins`}
    >
      <Header />
       <PropertyManagementContent />
       <PropertyServicesPage />
       <PropertyManagementWhyChooseUsPage />
       <PropertyManagementTypesPage />
       <ContactSection />
       <BlogSection />
      <Footer />
    </div>
  );
}