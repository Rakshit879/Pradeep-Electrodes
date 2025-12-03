import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { products as allProducts } from "@/data/products";

const featuredProducts = [
  {
    name: "Stainless Steel Electrode",
    slug: "stainless-steel-electrode-308",
    image: "/images/WELD BOND IMAGE.jpg",
    alt: "Stainless steel welding electrodes - high-performance rods for corrosion-resistant welds"
  },
  {
    name: "Mild Steel Electrode",
    slug: "mild-steel-electrode-6013",
    image: "/images/Pradeep.png",
    alt: "Mild steel welding electrodes - E6013 and E7018 rods for general fabrication and construction"
  },
  {
    name: "Cutting Electrode",
    slug: "cutting-electrode",
    image: "/images/WELD BOND IMAGE.jpg",
    alt: "Cutting electrodes - specialized welding rods for cutting and gouging applications"
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-3">
        Featured <span className="text-yellow-400">Products</span>
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover our premium range of ISI and ISO certified welding electrodes designed for superior arc stability, low spatter, and crack-resistant performance.
      </p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.slug}`}
              className="group flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-yellow-400 transition-all duration-300 p-6 cursor-pointer"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-center text-lg group-hover:text-yellow-500 group-hover:underline">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <button
              className="rounded-full px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition-transform duration-300 hover:scale-105"
            >
              Explore All Welding Electrodes →
            </button>
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Browse our complete selection of <Link href="/products" className="text-yellow-500 font-medium hover:underline">welding rods and electrodes</Link> for all applications.
          </p>
        </div>
      </div>
    </section>
  );
}
