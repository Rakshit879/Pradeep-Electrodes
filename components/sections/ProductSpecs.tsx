import { products } from "@/data/products";
import Image from "next/image";

export function ProductSpecs() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Welding Electrodes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Engineered for superior arc stability, minimal spatter, and exceptional weld quality. Each electrode meets ISI & ISO certification standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Product Image */}
                <div className="flex items-center justify-center bg-gray-100 p-8 min-h-[300px]">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={`${product.name} - Premium welding electrode`}
                      width={250}
                      height={250}
                      className="object-contain max-w-[220px] max-h-[220px]"
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {product.category}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-base mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Key Specs */}
                    <div className="space-y-2 mb-4">
                      {product.specs.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="text-sm text-gray-700">
                          <span className="font-semibold text-gray-900">
                            {spec.label}:
                          </span>{" "}
                          <span className="text-gray-600">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`/products/${product.slug}`}
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg transition-colors w-fit text-base"
                  >
                    View Full Specs →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Pradeep Electrodes?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg text-black">
                ✓
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">ISI & ISO Certified</h4>
              <p className="text-sm text-gray-600">
                Full compliance with international quality standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg text-black">
                ✓
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Low Spatter</h4>
              <p className="text-sm text-gray-600">
                Superior arc control for cleaner, efficient welds
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg text-black">
                ✓
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">High Penetration</h4>
              <p className="text-sm text-gray-600">
                Strong, crack-resistant weld joints for reliability
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg text-black">
                ✓
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">All Positions</h4>
              <p className="text-sm text-gray-600">
                Smooth arc in flat, vertical, and overhead welding
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Explore All Products
          </a>
        </div>
      </div>
    </section>
  );
}
