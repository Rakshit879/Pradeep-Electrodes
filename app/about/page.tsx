import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/sections/Footer";

export const metadata = {
    title: "About Us | Pradeep Electrodes – Trusted Welding Electrode Manufacturer in India",
    description: "Learn about Pradeep Electrodes – an ISI & ISO-certified welding electrode manufacturer based in Hapur, Uttar Pradesh. Delivering quality E6013, E7018, stainless steel, and specialty welding rods across India.",
    keywords: [
        "about Pradeep Electrodes",
        "welding electrode manufacturer India",
        "E6013 rod supplier",
        "E7018 welding rod",
        "stainless steel electrodes",
        "welding company in Hapur",
        "trusted welding brands India"
    ],
    robots: {
        index: true,
        follow: true
    },
    openGraph: {
        title: "About Us | Pradeep Electrodes – Trusted Welding Electrode Manufacturer",
        description: "Discover Pradeep Electrodes' journey as a reliable supplier of certified welding rods across India, including E6013, E7018, and more.",
        // url: "https://yourdomain.com/about",
        type: "website",
        // images: [
        //   {
        //     url: "https://yourdomain.com/images/og-about.jpg",
        //     width: 1200,
        //     height: 630,
        //     alt: "About Pradeep Electrodes – Welding Rod Manufacturer"
        //   }
        // ]
    }
};


export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full h-[80vh] mt-16">
                <Image
                    src="/images/aboutHeroImage.jpg"
                    alt="Hero Image"
                    fill
                    className="object-cover brightness-[0.5]"
                    priority
                />
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white z-10 max-w-xl">
                    <h1 className="text-7xl font-bold mb-4">About Us</h1>
                    <p className="text-xl font-medium">
                        Pradeep Electrodes – a leading welding electrode manufacturer
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className={`py-12 px-6 md:px-16 flex flex-col md:flex-row gap-10`}>
                {/* Left Description */}
                <div className="flex-1 mt-7">
                    <h2 className="text-gray-700 mb-4 text-4xl"><strong>Who are we?</strong></h2>
                    <p className="text-gray-700 mb-4">Established with a commitment to engineering excellence and innovation, <strong>Pradeep Electrodes</strong> has steadily grown into a respected name in the Indian welding industry. Based in Hapur, Uttar Pradesh, we specialize in manufacturing high-performance welding electrodes that consistently meet demanding industrial standards.</p>

                    <p className="font-bold text-gray-700 mb-4">Founded with the vision of delivering quality, reliability, and customer-focused solutions, Pradeep Electrodes serves a wide range of sectors across India — from fabrication and construction to heavy engineering and maintenance. Our facility is equipped with advanced production machinery and testing systems to ensure precision and consistency in every batch we manufacture.</p>

                    <p className="text-gray-700 text-2xl mb-2 font-medium"><strong>Our product portfolio includes:</strong></p>
                    <ul className="list-disc text-gray-700 pl-5 mb-4">
                        <li>Mild Steel Welding Electrodes</li>
                        <li>Stainless Steel Welding Electrodes</li>
                        <li>Cast Iron Welding Electrodes</li>
                        <li>Hard V Welding Electrodes</li>
                        <li>Cutting Electrodes</li>
                        <li>7016 Welding Electrodes</li>
                        <li>7018 Welding Electrodes</li>
                    </ul>

                    <p className="mb-4 text-gray-700">Each product is manufactured under stringent quality control protocols to ensure high arc stability, low spatter, strong weld integrity, and superior finish — delivering optimum performance in even the most demanding environments.</p>

                    <p className="mb-4 text-gray-700">At Pradeep Electrodes, we continuously invest in process improvements, material innovations, and skilled workforce training to stay aligned with evolving industry requirements. Our commitment to continuous improvement and customer satisfaction drives us to deliver not just products, but welding solutions that our clients can rely on.</p>

                    <p className="mb-4 text-gray-700">With a well-structured distribution network, we ensure timely and efficient delivery of our products across the country. Our dedicated service and support team provides technical assistance and after-sales services, helping customers achieve consistent welding performance and reduce downtime.</p>

                    <p className="text-gray-700">Driven by quality, empowered by technology, and trusted by professionals,<strong> Pradeep Electrodes </strong>is your reliable partner for welding excellence.</p>
                </div>

                {/* Right Image Grid */}
                <div className="flex-1 mt-7">
                    <Image
                        src="/images/pradeepElectrode2.png"
                        alt="Pradeep Electrodes"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>

                {/* <div className="grid grid-cols-1 grid-rows-1 gap-2 flex-1 mt-16">
                    {[
                        "/images/ContactPageImage.jpg",
                        // "/images/ContactPageImage.jpg",
                        // "/images/ContactPageImage.jpg",
                        // "/images/ContactPageImage.jpg",
                        // "/images/ContactPageImage.jpg",
                        // "/images/ContactPageImage.jpg",
                    ].map((src, i) => (
                        <Image
                            key={i}
                            src={src}
                            alt={`Welding Image ${i + 1}`}
                            width={400}
                            height={400}
                            className="w-auto h-auto m-auto object-cover rounded-md shadow"
                        />
                    ))}
                </div> */}

            </section>
            <Footer />
            <FloatingButtons />
        </main>
    );
}
