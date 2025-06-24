import { FaFacebookF, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Company Overview */}
                <div>
                    <p className="text-gray-300 mb-6">
                        <span className="font-semibold text-yellow-400">Pradeep Electrodes</span> is dedicated to delivering top-quality and
                        cost-effective welding solutions while staying aligned with modern industry trends.
                    </p>
                    <div className="flex gap-4">
                        {/* <FaFacebookF className="text-yellow-400 hover:text-white cursor-pointer" />
            <FaTwitter className="text-yellow-400 hover:text-white cursor-pointer" /> */}
                    </div>
                </div>

                {/* Useful Links */}


                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Useful Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link href="/services" className="hover:text-yellow-400 cursor-pointer">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-yellow-400 cursor-pointer">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-yellow-400 cursor-pointer">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>


                {/* Products */}

                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Products</h3>
                    <ul className="space-y-2 text-gray-300">
                        {[
                            "Mild Steel Electrode",
                            "Stainless Steel Electrode",
                            "Cutting Electrode",
                            "Cast Iron Electrode",
                            "Hard Electrode",
                            "7016 Welding Electrode",
                            "7018 Welding Electrode",
                        ].map((item, index) => (
                            <li key={index}>
                                <Link href="/services" className="hover:text-yellow-400 cursor-pointer">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-4 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                            <span>Pradeep Electrodes,

                                Meerut Road, Near Income Tax Office,

                                Hapur-245101, Uttar Pradesh-India</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-yellow-400" />
                            <span>+91 9760120551</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaTelegramPlane className="text-yellow-400" />
                            <span>pradeepelectrodesofficial@gmail.com</span>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}
