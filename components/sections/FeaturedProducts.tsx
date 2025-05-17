import Image from 'next/image';
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "HyperMat Tech Suite",
    price: "$25",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
  },
  {
    name: "CertiGuard Precision",
    price: "$25",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80"
  },
  {
    name: "TechFusion Dynamics",
    price: "$25",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
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
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-center hover:underline cursor-pointer">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="rounded-full px-8">
            SHOP ALL
          </Button>
        </div>
      </div>
    </section>
  );
} 