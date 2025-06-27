import { Navbar } from '@/components/Navbar';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black">
      <Navbar />

      <div className="absolute inset-0 p-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-70"
        >
          <source src="/videos/welding.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <div className="relative h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Transforming the Future of Manufacturing
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
} 