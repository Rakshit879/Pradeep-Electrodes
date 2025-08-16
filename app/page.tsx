import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import Services from "@/components/sections/Services";
import { Booking } from "@/components/sections/Booking";
// import { Social } from "@/components/sections/Social";
import { BrandVision } from "@/components/sections/BrandVision";
import ContactPage from "@/components/sections/ContactPage";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "@/components/sections/Footer";
import ContactPopup from "@/components/ContactPopUp";

export const metadata = {
  title: "Pradeep Electrodes | Leading Welding Electrode Manufacturer in India",
  description: "Buy ISI and ISO certified welding electrodes including E6013, E7018, stainless steel, and special alloy rods. Trusted for high-performance, low-spatter, and crack-resistant welds.",
  keywords: [
    "welding electrodes", "E6013 welding rod", "E7018 electrode", "stainless steel welding rods",
    "welding electrode manufacturer India", "low hydrogen electrodes", "best welding rods",
    "arc welding electrodes", "cast iron electrodes", "cutting rods", "hard facing electrodes"
  ],
  robots: "index, follow",
  authors: [{ name: "Pradeep Electrodes" }],
  openGraph: {
    title: "Pradeep Electrodes | Leading Welding Electrode Manufacturer in India",
    description: "Premium welding electrodes certified by ISI & ISO – E6013, E7018, 308, 309 & more. Smooth finish, easy slag removal, and high-strength welds.",
    url: "https://pradeepelectrode.com",
    siteName: "Pradeep Electrodes",
    // images: [
    //   {
    //     url: "https://yourdomain.com/images/og-home.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Welding Electrodes by Pradeep Electrodes"
    //   }
    // ],
    type: "website"
  }
};


export default function Home() {
  return (
    <main>
      <ContactPopup />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Booking />
      <BrandVision />
      {/* <Social /> */}
      <ContactPage />
      <FloatingButtons />
      <Footer />
    </main>
  );
}
