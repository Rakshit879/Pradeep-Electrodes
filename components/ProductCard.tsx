import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  slug: string;
  image: string;
}
  
export default function ProductCard({ name, slug, image }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`}>
      <div
        className="
          group
          flex flex-col items-center
          bg-white
          border border-gray-200
          rounded-xl
          p-4
          transition-transform
          duration-300
          hover:scale-105
          hover:shadow-lg
          cursor-pointer
        "
      >
        <div
          className="
            relative
            w-56
            h-56
            bg-gray-50
            rounded-lg
            flex
            items-center
            justify-center
            overflow-hidden
            mb-4
          "
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />  
        </div>
        <h3
          className="
            mt-1
            text-center
            font-semibold
            text-gray-800
            group-hover:text-blue-600
          "
        >
          {name}
        </h3>
      </div>
    </Link>
  );
}
