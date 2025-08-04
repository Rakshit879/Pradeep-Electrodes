import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Stainless Steel Electrode",
    image: "/images/WELD BOND IMAGE.jpg",
  },
  {
    name: "Mild Steel Electrode",
    image: "/images/Pradeep.png",
  },
  {
    name: "Cutting Electrode",
    image: "/images/WELD BOND IMAGE.jpg",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Products
      </h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              href="/products"
              className="group flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-black transition-all duration-300 p-6 cursor-pointer"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-center text-lg group-hover:underline">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/products">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 transition-transform duration-300 hover:scale-105"
            >
              SHOP ALL
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
