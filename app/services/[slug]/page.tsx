import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <div className="min-h-screen px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-gray-700 text-lg mb-6">{product.description}</p>

          {/* Additional Details */}
          {product.usps && (
            <>
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {product.usps.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </>
          )}

          <div className="space-y-2 text-sm text-gray-600">
            {product.aws && <p><strong>AWS:</strong> {product.aws}</p>}
            {product.yieldStrength && <p><strong>Yield Strength:</strong> {product.yieldStrength} MPa</p>}
            {product.tensileStrength && <p><strong>Tensile Strength:</strong> {product.tensileStrength} MPa</p>}
            {product.elongation && <p><strong>Elongation:</strong> {product.elongation}%</p>}
            {product.impactValue && <p><strong>Impact Value:</strong> {product.impactValue} J</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
