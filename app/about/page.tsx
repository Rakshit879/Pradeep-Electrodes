import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/sections/Footer";
import { FaShieldAlt, FaCogs, FaHandsHelping } from "react-icons/fa";
import { products } from "@/data/products";

export const metadata = {
    title: "Pradeep Electrodes | ISI & ISO Certified Manufacturer",
    description: "Pradeep Electrodes – an industry-leading manufacturer in Hapur, UP. 20+ years of expertise in producing ISI & ISO certified E6013, E7018, stainless steel rods.",
    alternates: {
        canonical: "https://www.pradeepelectrode.com/about",
    },
    keywords: [
        "about Pradeep Electrodes",
        "welding electrode manufacturer India",
        "E6013 rod supplier",
        "E7018 welding rod manufacturer",
        "stainless steel electrodes manufacturer",
        "welding manufacturer in Hapur UP",
        "trusted welding brands India",
        "ISI certified electrode maker",
        "ISO 9001 welding rod producer",
        "welding electrode supplier Uttar Pradesh"
    ],
    robots: { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
        title: "About Pradeep Electrodes | Trusted Welding Rod Manufacturer",
        description: "Learn about our 20+ years of expertise in manufacturing high-quality ISI & ISO certified welding electrodes for construction, fabrication & heavy engineering.",
        url: "https://www.pradeepelectrode.com/about",
        type: "website",
        locale: "en_IN"
        // images: [
        //   {
        //     url: "https://yourdomain.com/images/og-about.jpg",
        //     width: 1200,
        //     height: 630,
        //     alt: "About Pradeep Electrodes – Welding Rod Manufacturer"
        //   }
        // ]
    },
    twitter: {
        card: "summary_large_image",
        title: "About Pradeep Electrodes",
        description: "20+ years of trusted welding electrode manufacturing."
    },
};


export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-100">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full h-[80vh] mt-16">
                <Image
                    src="/images/aboutHeroImage.jpg"
                    alt="Pradeep Electrodes manufacturing facility - welding electrode production and quality control"
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

            {/* Intro + Image */}
            <section className="py-12 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Who are we?</h2>
                        <p className="text-gray-700 mb-4">Established with a commitment to engineering excellence and innovation, <strong>Pradeep Electrodes</strong> has steadily grown into a respected name in the Indian welding industry. Based in Hapur, Uttar Pradesh, we specialize in manufacturing high-performance welding electrodes that consistently meet demanding industrial standards.</p>

                        <p className="font-medium text-gray-700 mb-4">Founded with the vision of delivering quality, reliability, and customer-focused solutions, Pradeep Electrodes serves a wide range of sectors across India — from fabrication and construction to heavy engineering and maintenance.</p>

                        <p className="text-gray-700 mb-4">Each product is manufactured under stringent quality control protocols to ensure high arc stability, low spatter, strong weld integrity, and superior finish — delivering optimum performance in even the most demanding environments.</p>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/images/pradeepElectrode2.png"
                            alt="Pradeep Electrodes - manufacturer of high-quality welding rods and electrodes in India"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-8 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Values</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow">
                            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-yellow-400 text-black mb-4"><FaShieldAlt /></div>
                            <h4 className="font-semibold mb-2">Quality First</h4>
                            <p className="text-sm text-gray-600">Strict QC and certifications ensure consistent performance.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow">
                            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-yellow-400 text-black mb-4"><FaCogs /></div>
                            <h4 className="font-semibold mb-2">Technical Excellence</h4>
                            <p className="text-sm text-gray-600">Modern production and testing for reliable electrodes.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow">
                            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-yellow-400 text-black mb-4"><FaHandsHelping /></div>
                            <h4 className="font-semibold mb-2">Customer Support</h4>
                            <p className="text-sm text-gray-600">Responsive service and technical assistance across India.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate (placed below Our Values) */}
            <section className="py-8 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Quality Certifications</h3>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-items-center p-0">
                        <div className="overflow-hidden text-center p-0 bg-transparent">
                            <Image
                                src="/images/certificate.png"
                                alt="Pradeep Electrodes ISO Certificate"
                                width={320}
                                height={220}
                                className="object-contain mx-auto  w-full h-auto"
                            />
                        </div>
                        <div className="overflow-hidden text-center p-0 bg-transparent">
                            <Image
                                src="/images/certificate2.jpg"
                                alt="Pradeep Electrodes CE Certificate"
                                width={320}
                                height={220}
                                className="object-contain mx-auto  w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-8 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our <span className="text-yellow-500">Product Range</span></h3>
                    <p className="text-gray-700 mb-8">Pradeep Electrodes manufactures a comprehensive range of <strong>welding electrodes</strong> certified by ISI and ISO standards. Our products are engineered for superior arc stability, low spatter, and crack-resistant performance across diverse industrial applications.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map((prod) => (
                            <a key={prod.id} href={`/products/${prod.slug}`} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:border-yellow-400 border border-gray-200 transition-all duration-300">
                                <h4 className="font-medium mb-2 text-gray-900 group-hover:text-yellow-500">{prod.name}</h4>
                                <p className="text-sm text-gray-600 mb-3">{prod.description?.slice(0, 120) ?? 'High arc stability and superior finish for industrial use.'}</p>
                                <span className="inline-block text-yellow-500 text-sm font-medium hover:underline">View Details →</span>
                            </a>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a href="/products" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition">
                            Explore All Welding Electrodes
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 px-6 md:px-16">
                <div className="max-w-4xl mx-auto text-center bg-yellow-50 border border-yellow-100 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold mb-2">Ready to talk?</h3>
                    <p className="text-gray-700 mb-6">Contact our sales team to discuss product specifications, pricing, or bulk orders.</p>
                    <a href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-full">Contact Us</a>
                </div>
            </section>
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

            <Footer />
            <FloatingButtons />
        </main>
    );
}

