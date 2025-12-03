// app/products/ProductsPage.tsx
"use client";

import FloatingButtons from "@/components/FloatingButtons";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";
import { products, categories } from "@/data/products";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

export default function ProductsPage() {
  const displayCategories = ["All", ...categories];
  const [selectedCategory, setSelectedCategory] = useState(displayCategories[0]);
  const filteredProducts = selectedCategory === "All" ? products : products.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Header Section */}
      <section className="relative w-full h-screen pt-32 px-4 overflow-hidden flex items-center justify-center">
        {/* Background Image - Blurred */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products.jpeg"
            alt="Products background"
            fill
            className="object-cover blur-sm"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight mb-4">
                Our <span className="text-yellow-500">Products</span>
              </h1>
              <div className="h-1 w-20 bg-yellow-500 mt-2 mb-6 rounded-full"></div>
            </div>

            <div>
              <p className="text-black text-lg leading-relaxed">
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
          <div className="flex flex-col md:flex-row min-h-screen gap-6">
            <div className="md:w-max w-full sm:px-12 md:px-0 text flex justify-center md:justify-start">
              <Sidebar
                categories={displayCategories}
                onSelect={setSelectedCategory}
                selected={selectedCategory}
              />
            </div>

            <div className="w-full flex flex-row flex-wrap justify-center gap-5">
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
