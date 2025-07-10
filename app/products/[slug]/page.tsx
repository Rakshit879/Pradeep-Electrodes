import ProductDetailPage from "./ProductDetailPage";
import { products } from "@/data/products";

// ✅ Define the expected props
type Props = {
  params: {
    slug: string;
  };
};

// ✅ For SEO metadata
export async function generateMetadata({ params }: Props) {
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
    description: `Buy ${product.name} – ${
      product.description?.slice(0, 150) ||
      "Explore top quality welding electrodes for all applications."
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

// ✅ Pass slug as prop to the component
export default function Page({ params }: Props) {
  return <ProductDetailPage slug={params.slug} />;
}
