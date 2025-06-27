"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const product = products.find(
    (p) => p.slug === slug || p.name.toLowerCase().includes(slug)
  );

  if (!product) return <div className="text-center p-10 text-xl text-red-500">Product not found.</div>;

  return (
    <main className="bg-gray-100 min-h-screen">
      <Navbar />
      <section className="pt-28 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full flex justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={450}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6">
              {product.name}
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              {product.description ||
                "Premium electrode for professional-grade performance across multiple welding needs."}
            </p>
            <Link href="/contact">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white text-lg px-8 py-3 rounded-full font-semibold shadow-md transition duration-300">
                Enquire Now
              </button>
            </Link>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose This?</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {product.usps?.map((usp, index) => (
                  <li key={index} className="text-base">{usp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Table */}
      <section className="mt-20 px-4 pb-24">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl font-bold mb-8 text-center text-yellow-500">
            Technical Specification
          </h3>
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="min-w-full table-auto border border-gray-300 text-sm md:text-base">
              <thead className="bg-yellow-500 text-white">
                <tr>
                  <th className="px-6 py-4">Specification</th>
                  <th className="px-6 py-4">Value</th>
                </tr>
              </thead>
              <tbody className="bg-white text-center text-gray-700">
                {product.specs?.map((spec, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="border px-6 py-4 font-semibold text-black">
                      {spec.label}
                    </td>
                    <td className="border px-6 py-4">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      <Footer />
      <FloatingButtons />
    </main>
  );
}
