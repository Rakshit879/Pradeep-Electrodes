// app/products/[slug]/page.tsx
import ProductDetailPage from "./ProductDetailPage";
import { products } from "@/data/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ✅ Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // ✅ await here
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.pradeepelectrode.com";

  const product = products.find(
    (p) => p.slug === slug || p.name.toLowerCase().includes(slug)
  );

  if (!product) {
    return {
      title: "Product Not Found | Pradeep Electrodes",
      description: "Sorry, the requested product could not be found.",
      metadataBase: new URL(baseUrl),
      alternates: { canonical: `${baseUrl}/products/${slug}` },
    };
  }

  return {
    title: `${product.name} | Pradeep Electrodes`,
    description: product.description,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: `${baseUrl}/products/${slug}` },
    openGraph: {
      title: `${product.name} | Pradeep Electrodes`,
      description: product.description,
      url: `${baseUrl}/products/${slug}`,
      images: [{ url: product.image }],
    },
  };
}

// ✅ Default export: React component
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const productExists = products.some(
    (p) => p.slug === slug || p.name.toLowerCase().includes(slug)
  );

  if (!productExists) return notFound(); // shows 404 page

  return <ProductDetailPage slug={slug} />;
}
