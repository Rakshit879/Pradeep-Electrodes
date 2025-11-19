import ProductDetailPage from "./ProductDetailPage";
import { products } from "@/data/products";
import { Metadata } from "next";

// ✅ SSG (for static generation)
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  
  const { slug } = await params;
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.pradeepelectrode.com";

  const product = products.find(
    (p) => p.slug === slug || p.name.toLowerCase().includes(slug)
  );

  if (!product) {
    return {
      title: "Product Not Found | Pradeep Electrodes",
      description: "Sorry, the requested product could not be found.",
      metadataBase: new URL(baseUrl),
      alternates: {
        canonical: `${baseUrl}/product/${slug}`,
      },
    };
  }

  return {
    title: `${product.name} | Pradeep Electrodes`,
    description: product.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/product/${slug}`,  // 👈 IMPORTANT
    },
    openGraph: {
      title: `${product.name} | Pradeep Electrodes`,
      description: product.description,
      url: `${baseUrl}/product/${slug}`,
      images: [{ url: product.image }],
    },
  };
}
