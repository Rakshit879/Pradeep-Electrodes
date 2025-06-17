import { Navbar } from "@/components/Navbar";
import styles from "./about.module.css";
import Image from "next/image";
import FloatingButtons from "@/components/FloatingButtons";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-100">
            <Navbar />
            <section className={styles.aboutSection}>
                <div className={styles.aboutLeftSection}>
                    <h1 className={styles.aboutHeading}>Who are we?</h1>
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
                <div className={styles.aboutRightSection}>
                    <Image 
                        src="https://images.unsplash.com/photo-1579618215542-2ed5e10b65ed?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        width={300}
                        height={500}
                        layout="responsive"
                        style={{ objectFit: "cover" }} alt="Pradeep Electrodes">    
                    </Image>
                </div>
            </section>
            <FloatingButtons/>
        </main>
    )
}