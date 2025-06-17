import FloatingButtons from "@/components/FloatingButtons";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
  
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <h1 className="text-5xl md:text-6xl font-normal">
              Our Services
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to the forefront of manufacturing, where cutting-edge technology
              meets unparalleled expertise to transform your visions into tangible success.
              Our commitment to innovation ensures every service we provide transcends
              the ordinary, setting new standards in excellence and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Precision Crafted Solutions */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?w=800&q=80"
                  alt="Precision manufacturing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-normal">Precision Crafted Solutions</h2>
                <p className="text-xl font-medium text-gray-900">$99</p>
                <p className="text-gray-600 leading-relaxed">
                  Redefining the manufacturing landscape with tailored solutions that blend 
                  innovative technology and craftsmanship. Our services transcend traditional 
                  boundaries to engineer excellence in every product.
                </p>
                <Button variant="outline" className="rounded-full px-8">
                  BOOK NOW
                </Button>
              </div>
            </div>

            {/* CertiGuard */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
                  alt="Quality certification"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-normal">CertiGuard</h2>
                <p className="text-xl font-medium text-gray-900">$149</p>
                <p className="text-gray-600 leading-relaxed">
                  Elevate your manufacturing standards with CertiGuard, the ultimate 
                  assurance in quality certifications. Our innovative processes ensure 
                  your products meet the highest industry benchmarks, setting a new 
                  paradigm of excellence.
                </p>
                <Button variant="outline" className="rounded-full px-8">
                  BOOK NOW
                </Button>
              </div>
            </div>

            {/* TechForge Solutions */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80"
                  alt="Advanced manufacturing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-normal">TechForge Solutions</h2>
                <p className="text-xl font-medium text-gray-900">$199</p>
                <p className="text-gray-600 leading-relaxed">
                  Pioneering the future of manufacturing, TechForge Solutions harnesses 
                  cutting-edge technology to revolutionize production capabilities, 
                  pushing the boundaries of innovation every step of the way.
                </p>
                <Button variant="outline" className="rounded-full px-8">
                  BOOK NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FloatingButtons/>
    </main>
  );
} 