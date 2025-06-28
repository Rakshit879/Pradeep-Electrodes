// app/products/ProductsPage.tsx
"use client";

import FloatingButtons from "@/components/FloatingButtons";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";
import { products, categories } from "@/data/products";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/sections/Footer";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const filteredProducts = products.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Our <span className="text-yellow-500">Products</span>
              </h1>
              <div className="h-1 w-20 bg-yellow-500 mt-2 mb-6 rounded-full"></div>
            </div>

            <div>
              <p className="text-gray-700 text-lg leading-relaxed">
                At <span className="font-semibold text-black">Pradeep Electrodes</span>, we are committed to delivering
                high-quality welding solutions that meet the highest standards of
                strength, reliability, and precision.
                <br /><br />
                With state-of-the-art manufacturing processes and strict quality control,
                our electrodes ensure excellent performance across a wide range of
                industrial applications. Certified with <strong>ISI</strong> and <strong>ISO</strong> standards, every product that
                leaves our facility is a testament to our dedication to durability,
                safety, and innovation.
                <br /><br />
                Trusted by professionals across sectors, Pradeep Electrodes continues
                to power projects with consistent quality and unmatched dependability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row min-h-screen gap-12">
            <div className="md:w-max w-full sm:px-12 md:px-0 text flex justify-center md:justify-start">
              <Sidebar
                categories={categories}
                onSelect={setSelectedCategory}
                selected={selectedCategory}
              />
            </div>

            <div className="w-full flex flex-row flex-wrap justify-center gap-7">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  name={prod.name}
                  slug={prod.slug}
                  image={prod.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
