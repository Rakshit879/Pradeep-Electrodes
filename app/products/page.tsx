// app/products/page.tsx
import ProductsPage from "./ProductPage"; // client component

export const metadata = {
  title: "Welding Electrodes | E6013, E7018, Stainless Steel & More",
  description:
    "Catalogue of ISI & ISO certified welding electrodes. Browse E6013, E7018, stainless steel 308 & more. Get technical specs, pricing & fast delivery across India.",
  alternates: {
    canonical: "https://www.pradeepelectrode.com/products",
  },
  keywords: [
    "welding electrodes catalog",
    "E6013 welding rod price",
    "E7018 electrode supplier",
    "stainless steel welding electrodes",
    "welding consumables India",
    "electrode types and uses",
    "mild steel rod E7018",
    "welding rod specifications",
    "bulk electrode order",
    "welding equipment supplier",
    "fabrication electrodes",
    "construction welding rods",
    "high tensile electrodes",
    "welding solutions Hapur"
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large"
  },
  openGraph: {
    title: "Premium Welding Electrodes Catalog | E6013, E7018 & More",
    description: "Explore our complete range of ISI & ISO certified welding electrodes with technical specifications, competitive pricing & nationwide fast delivery.",
    url: "https://www.pradeepelectrode.com/products",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Welding Electrodes Catalog",
    description: "Premium ISI & ISO certified electrodes with fast delivery across India."
  }
};

export default function Page() {
  return <ProductsPage />;
}
