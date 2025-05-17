import Image from 'next/image';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const services = [
  {
    name: "Precision Crafted Solutions",
    price: "$99",
    image: "https://images.unsplash.com/photo-1533630018502-93c3c9e0a620?w=800&q=80",
    description: "Redefining the manufacturing landscape with tailored solutions that blend innovative technology and craftsmanship."
  },
  {
    name: "CertiGuard",
    price: "$149",
    image: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?w=800&q=80",
    description: "Elevate your manufacturing standards with CertiGuard, the ultimate assurance in quality certifications."
  },
  {
    name: "TechForge Solutions",
    price: "$199",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    description: "Pioneering the future of manufacturing, TechForge Solutions harnesses cutting-edge technology to revolutionize production capabilities."
  }
];

export function Services() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Discover our services</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2 p-6">
                <h3 className="font-semibold text-xl">{service.name}</h3>
                <p className="text-xl font-bold text-gray-900">{service.price}</p>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 