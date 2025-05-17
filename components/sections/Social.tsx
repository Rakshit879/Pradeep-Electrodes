import Image from 'next/image';
import { Button } from "@/components/ui/button";

const socialImages = [
  { 
    src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    alt: "Industrial machinery in action" 
  },
  { 
    src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    alt: "Modern manufacturing process" 
  },
  { 
    src: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80",
    alt: "Quality control inspection" 
  },
  { 
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    alt: "Advanced robotics system" 
  }
];

export function Social() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Follow us on social</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialImages.map((image, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">SOCIAL</Button>
        </div>
      </div>
    </section>
  );
} 