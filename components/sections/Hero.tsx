import Image from 'next/image';
import { Navbar } from '@/components/Navbar';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black">
      <Navbar />
      
      <div className="absolute inset-0 p-10">
        <Image
          src="https://images.unsplash.com/photo-1416949929422-a1d9c8fe84af?w=1600&q=80"
          alt="Manufacturing background"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      <div className="relative h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Transforming the Future of Manufacturing
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
} 