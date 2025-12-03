import { Hero } from "@/components/sections/Hero";
import { ProductSpecs } from "@/components/sections/ProductSpecs";
import { Booking } from "@/components/sections/Booking";
// import { Social } from "@/components/sections/Social";
import { BrandVision } from "@/components/sections/BrandVision";
import OurCustomers from "@/components/sections/OurCustomers";
import ContactPage from "@/components/sections/ContactPage";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "@/components/sections/Footer";
import ContactPopup from "@/components/ContactPopUp";
import { Metadata, Viewport } from "next";
import Script from "next/script";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0
};

export const metadata = {
  title: "Pradeep Electrodes | Leading Manufacturer in India",
  description: "Buy ISI & ISO certified welding electrodes.High Quality welding rods for fabrication, construction & heavy engineering. Low spatter, high strength welds.",
  keywords: [
    "welding electrodes", "E6013 welding rod", "E7018 electrode", "stainless steel welding rods",
    "welding electrode manufacturer India", "low hydrogen electrodes", "best welding rods",
    "arc welding electrodes", "cast iron electrodes", "cutting rods", "hard facing electrodes",
    "welding electrode supplier Hapur", "ISI certified electrodes", "ISO 9001 welding rods",
    "mild steel electrodes", "welding electrodes in UP"
  ],
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  authors: [{ name: "Pradeep Electrodes" }],
  creator: "Pradeep Electrodes",
  publisher: "Pradeep Electrodes",
  formatDetection: { email: false, telephone: false, address: false },
  openGraph: {
    title: "Pradeep Electrodes | Premium Welding Electrode Manufacturer",
    description: "Industry-leading welding electrodes with ISI & ISO certification. E6013, E7018, stainless steel & specialty rods. Trusted by fabricators & engineers across India.",
    url: "https://www.pradeepelectrode.com",
    siteName: "Pradeep Electrodes",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradeep Electrodes | Welding Electrode Manufacturer",
    description: "Premium ISI & ISO certified welding electrodes. Quality guaranteed."
  },
  alternates: {
    canonical: "https://www.pradeepelectrode.com"
  }
};


export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pradeep Electrodes",
    "description": "ISI and ISO certified welding electrode manufacturer in India",
    "url": "https://www.pradeepelectrode.com",
    "telephone": "+919760120551",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Meerut Road, Near Income Tax Office",
      "addressLocality": "Hapur",
      "postalCode": "245101",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "areaServed": "IN",
    "priceRange": "₹₹",
    "image": "https://www.pradeepelectrode.com/images/pradeepElectrode2.png",
    "sameAs": [
      "https://www.linkedin.com/company/pradeep-electrodes"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <main>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        strategy="afterInteractive"
      />
      <ContactPopup />
      <Hero />
      <BrandVision />
      <ProductSpecs />
      <Booking />
      {/* <OurCustomers /> */}    
      {/* our customers is commented out for now */}
      {/* <Social /> */}
      <ContactPage />
      <FloatingButtons />
      <Footer />
    </main>
  );
}