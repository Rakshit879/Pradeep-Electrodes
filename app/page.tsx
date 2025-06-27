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

export default function Home() {
  return (
    <main>
      <ContactPopup />
      <Hero />
      <FeaturedProducts />
      <Services/>
      <Booking />
      <BrandVision />
      {/* <Social /> */}
      <ContactPage/>
      <FloatingButtons/>
      <Footer/>
    </main>
  );
}
