import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function Booking() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-100">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Crafting <span className="text-yellow-400">Excellence</span> in Every Spark
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="text-yellow-400 font-semibold">Pradeep Electrodes</span>, we don't just manufacture welding electrodes —
              we engineer performance, reliability, and trust. With decades of expertise, we empower industries with
              precision-engineered solutions that spark quality and consistency in every weld.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <Link href="/products">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold">
                  Browse Electrodes
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-50 px-6 py-2 rounded-full font-semibold">
                  Our Story
                </Button>
              </Link>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/Gemini_Generated_Image_bzj82ybzj82ybzj8.png"
                alt="Advanced welding electrode manufacturing equipment at Pradeep Electrodes facility"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.5a2 2 0 110 4H5a2 2 0 01-2-2zM17 5a2 2 0 012-2h3.5a2 2 0 110 4H19a2 2 0 01-2-2zM2 12a10 10 0 0120 0 10 10 0 01-20 0zm10 6a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900">
                Explore Our Electrode Range
              </h3>
            </div>

            <div className="space-y-5">
              {[
                "Mild Steel Electrode",
                "Stainless Steel Electrode",
                "Cast Iron Electrode",
                "Cutting Electrode",
                "Hard Electrode",
                "7016 Welding Electrode",
                "7018 Welding Electrode",
              ].map((type, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 px-4 bg-gray-50 hover:bg-orange-50 rounded-md transition"
                >
                  <span className="text-gray-800 font-medium">{type}</span>
                  <Link href="/products">
                    <Button
                      variant="outline"
                      className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white transition"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
