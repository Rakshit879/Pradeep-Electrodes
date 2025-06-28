// app/products/page.tsx
import ProductsPage from "./ProductPage"; // client component

export const metadata = {
  title: "Explore Welding Electrodes – E6013, E7018, 308 & 309 – Pradeep Electrodes",
  description:
    "Browse our full range of electrodes: mild steel, stainless steel, cast iron & corrosive resistant. Discover specs, arc characteristics, packaging & download datasheets.",
  keywords: [
    "welding electrodes",
    "best welding rods",
    "E6013 rod",
    "E7018 electrode",
    "E7016 electrode",
    "cast iron electrode",
    "cutting electrode",
    "hard V electrode",
    "mild steel electrode",
    "stainless steel rod",
    "E308 welding rod",
    "E309 welding rod",
    "welding electrode types"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Explore Welding Electrodes – E6013, E7018, 308 & 309 – Pradeep Electrodes",
    description:
      "Browse top-quality welding electrodes including mild steel, stainless steel, cast iron & specialty rods. Get specs and datasheets online.",
    type: "website"
  },
};

export default function Page() {
  return <ProductsPage />;
}
