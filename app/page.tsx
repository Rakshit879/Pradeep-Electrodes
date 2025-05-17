import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Services } from "@/components/sections/Services";
import { Booking } from "@/components/sections/Booking";
import { Social } from "@/components/sections/Social";
import { BrandVision } from "@/components/sections/BrandVision";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Booking />
      <BrandVision />
      <Social />
    </main>
  );
}
