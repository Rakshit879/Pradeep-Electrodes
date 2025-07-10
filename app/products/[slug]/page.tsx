import ProductDetailPage from "./ProductDetailPage";
import { products } from "@/data/products";

type Props = {
  params: {
    slug: string;
  };
};

// ✅ generateMetadata with awaited params
export async function generateMetadata({ params }: Props) {
  const { slug } = await Promise.resolve(params);

  const product = products.find(
    (p) => p.slug === slug || p.name.toLowerCase().includes(slug)
  );

  if (!product) {
    return {
      title: "Product Not Found | Pradeep Electrodes",
      description: "Sorry, the requested welding electrode could not be found.",
    };
  }

  return {
    title: `${product.name} | Pradeep Electrodes`,
    description: `Buy ${product.name} – ${
      product.description?.slice(0, 150) || "Explore top quality welding electrodes."
    }`,
    keywords: [
      `welding rod ${product.name}`,
      product.category,
      `buy ${product.name}`,
      product.slug,
      "welding electrode",
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${product.name} | Pradeep Electrodes`,
      description: `Buy ${product.name} – ${product.description?.slice(0, 150)}`,
      type: "website",
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.name,
        description: product.description,
        brand: {
          "@type": "Brand",
          name: "Pradeep Electrodes",
        },
      }),
    },
  };
}

// ✅ FIXED: async function to await params
export default async function Page({ params }: Props) {
  const { slug } = await Promise.resolve(params);
  return <ProductDetailPage slug={slug} />;
}
