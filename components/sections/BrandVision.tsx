import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; // ✅ Import Link

export function BrandVision() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80"
            alt="Advanced welding and manufacturing"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-left">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Our <span className="text-yellow-400">Brand Vision</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At <span className="font-semibold text-yellow-400">Pradeep Electrodes</span>, our vision is to spark transformation in the welding industry—
            one innovation at a time. We believe in building a future where precision, safety, and performance are
            uncompromised. Through relentless R&D, premium-grade electrodes, and a commitment to global standards,
            we strive to empower industries with reliability that ignites progress.
          </p>

          <Link href="/about">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-full">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
