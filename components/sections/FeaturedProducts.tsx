import Image from 'next/image';
import Link from 'next/link'; // ✅ Import Link
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Mild Steel Electrode",
    image: "/images/Pradeep.png"
  },
  {
    name: "Stainless Steel Electrode",
    image: "/images/Pradeep.png"
  },
  {
    name: "Cutting Electrode",
    image: "/images/Pradeep.png"
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-64 h-64 rounded-full bg-gray-100 overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-center hover:underline cursor-pointer">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* ✅ Link wraps the Button */}
        <div className="text-center mt-8">
          <Link href="/products">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              SHOP ALL
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
