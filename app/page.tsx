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
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Pradeep Electrodes – Best Welding Electrodes Manufacturer in India</title>
        <meta name="description" content="ISI & ISO‑certified welding electrodes – E6013, E7018, 308, 309 & more. Premium dip‑coated rods with smooth weld beads, low spatter, and crack‑resistant joints. Call today!" />
        <meta name="keywords" content="welding electrodes, best welding rods, E6013 rod, E7018 electrode, E7016 electrode, stainless steel welding rod, welding electrode manufacturer, cast iron electrode, cutting electrode, hard V electrode, arc welding, electric arc, material, machine, steel, metal, electrode, welding, arc welding electrode" />
      </Head>
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
