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
      <div className="border p-4 rounded hover:shadow-md cursor-pointer w-full">
        <div className="relative w-[250px] h-[250px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />  
        </div>
        <h3 className="mt-2 font-bold text-center">{name}</h3>
      </div>
    </Link>
  );
}
