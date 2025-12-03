"use client";

import { products } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

type Props = {
  slug: string;
};

export default function ProductDetailPage({ slug }: Props) {
  const product = products.find(
    (p) => p.slug === slug || p.name.toLowerCase().includes(slug)
  );

  if (!product)
    return (
      <div className="text-center p-10 text-xl text-red-500">
        Product not found.
      </div>
    );

  // Product Schema JSON-LD
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "Pradeep Electrodes"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Pradeep Electrodes",
      "url": "https://www.pradeepelectrode.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Meerut Road, Near Income Tax Office",
        "addressLocality": "Hapur",
        "postalCode": "245101",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.pradeepelectrode.com/products/${product.slug}`,
      "priceCurrency": "INR",
      "price": "Contact for pricing",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Pradeep Electrodes",
        "url": "https://www.pradeepelectrode.com"
      }
    },
    "category": product.category,
    "keywords": [product.name, product.category, "welding electrode", "welding rod", "ISI certified", "ISO certified"].filter(Boolean)
  };

  // Breadcrumb Schema JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.pradeepelectrode.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://www.pradeepelectrode.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://www.pradeepelectrode.com/products/${product.slug}`
      }
    ]
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Navbar />

      {/* Breadcrumb Navigation */}
      <section className="pt-24 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-yellow-500">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-yellow-500">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full flex justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={450}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6">
              {product.name}
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              {product.description ||
                "Premium electrode for professional-grade performance across multiple welding needs."}
            </p>
            <Link href="/contact">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white text-lg px-8 py-3 rounded-full font-semibold shadow-md transition duration-300">
                Enquire Now
              </button>
            </Link>

            {product.usps && product.usps.length > 0 && (
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose This?
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {product.usps.map((usp, index) => (
                    <li key={index} className="text-base">
                      {usp}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {product.specs && product.specs.length > 0 && (
        <section className="mt-20 px-4 pb-24">
          <div className="container mx-auto max-w-5xl">
            <h3 className="text-3xl font-bold mb-8 text-center text-yellow-500">
              Technical Specification
            </h3>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="min-w-full table-auto border border-gray-300 text-sm md:text-base">
                <thead className="bg-yellow-500 text-white">
                  <tr>
                    <th className="px-6 py-4">Specification</th>
                    <th className="px-6 py-4">Value</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-center text-gray-700">
                  {product.specs.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="border px-6 py-4 font-semibold text-black">
                        {spec.label}
                      </td>
                      <td className="border px-6 py-4">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Related Products Section */}
      <section className="mt-20 px-4 pb-12">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">
            Explore Other <span className="text-yellow-500">Welding Electrodes</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(
                (p) =>
                  p.id !== product.id &&
                  (p.category === product.category || p.category.includes("Electrode"))
              )
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 border border-gray-200"
                >
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-2">
                    {relatedProduct.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {relatedProduct.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
                    Learn More →
                  </span>
                </Link>
              ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold transition">
                View All Welding Electrodes
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
