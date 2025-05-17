import { Button } from "@/components/ui/button";
import Image from "next/image";

export function BrandVision() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80"
              alt="Brand vision - Advanced manufacturing facility"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our<br />brand vision
            </h2>
            <p className="text-gray-600 mb-8">
              Pioneering the future of manufacturing, we design and create
              solutions that redefine what's possible. Our innovative approach
              constantly challenges conventional methods, propelling us to lead
              the industry with cutting-edge advancements.
            </p>
            <Button variant="outline" size="lg">LEARN MORE</Button>
          </div>
        </div>
      </div>
    </section>
  );
} 