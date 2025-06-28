import ProductDetailPage from "./ProductDetailPage";
import { products } from "@/data/products";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find(
    (p) => p.slug === params.slug || p.name.toLowerCase().includes(params.slug)
  );

  if (!product) {
    return {
      title: "Product Not Found | Pradeep Electrodes",
      description: "Sorry, the requested welding electrode could not be found.",
    };
  }

  return {
    title: `${product.name} | Pradeep Electrodes`,
    description: `Buy ${product.name} – ${product.description?.slice(0, 150) || "Explore top quality welding electrodes for all applications."}`,
    keywords: [
      `welding rod ${product.name}`,
      product.category,
      `buy ${product.name}`,
      product.slug,
      "welding electrode"
    ],
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: `${product.name} | Pradeep Electrodes`,
      description: `Buy ${product.name} – ${product.description?.slice(0, 150)}`,
      type: "website" // ✅ correct and safe
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.name,
        description: product.description,
        brand: {
          "@type": "Brand",
          name: "Pradeep Electrodes"
        }
      })
    }
  };
}

export default function Page() {
  return <ProductDetailPage />;
}
