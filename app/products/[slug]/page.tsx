import ProductDetailPage from "./ProductDetailPage";
import { products } from "@/data/products";
import { Metadata } from "next";

// ✅ SSG (for static generation)
export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

// ✅ Fixed metadata generation - await params before use
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug || p.name.toLowerCase().includes(slug)
  );

  if (!product) {
    return {
      title: "Product Not Found | Pradeep Electrodes",
      description: "Sorry, the requested product could not be found.",
      metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    };
  }

  return {
    title: `${product.name} | Pradeep Electrodes`,
    description: product.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    openGraph: {
      title: `${product.name} | Pradeep Electrodes`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

// ✅ Fixed main page component - await params before use
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductDetailPage slug={slug} />;
}