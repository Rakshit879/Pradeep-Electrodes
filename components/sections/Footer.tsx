"use client";
 
import { FaPhoneAlt, FaMapMarkerAlt, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/data/products";

export default function Footer() {
    const [email, setEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState<'idle'|'sent'|'error'>('idle');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            setNewsletterStatus('error');
            return;
        }
        // Placeholder: no backend—just show success state
        setNewsletterStatus('sent');
        setEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 3000);
    };

    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Image src="/images/PradeepElectrodesLogo.jpg" alt="Pradeep Electrodes" width={48} height={48} className="rounded-md" />
                        <div>
                            <div className="font-bold text-lg">Pradeep Electrodes</div>
                            <div className="text-sm text-gray-300">Trusted welding electrode manufacturer</div>
                        </div>
                    </div>
                    <p className="text-gray-400">Delivering high-quality electrodes with consistent performance and industry certifications. Serving fabrication, construction and heavy engineering sectors.</p>

                    <div className="flex items-center gap-3 mt-2">
                        <a aria-label="LinkedIn" className="p-2 bg-yellow-400 text-black rounded-full" href="https://www.linkedin.com/company/pradeep-electrode/"><FaLinkedinIn /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-yellow-400 font-semibold mb-3">Useful Links</h4>
                    <ul className="text-gray-300 space-y-2">
                        <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
                        <li><Link href="/products" className="hover:text-yellow-400">Products</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-yellow-400 font-semibold mb-3">Products</h4>
                    <ul className="text-gray-300 space-y-2">
                        {products.slice(0,6).map((p) => (
                            <li key={p.id}><Link href={`/products/${p.slug}`} className="hover:text-yellow-400">{p.name}</Link></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-yellow-400 font-semibold mb-3">Contact & Newsletter</h4>
                    <div className="text-gray-300 text-sm space-y-3">
                        <div className="flex items-start gap-2"><FaMapMarkerAlt className="text-yellow-400 mt-1" /><div>Meerut Road, Near Income Tax Office, Hapur-245101, Uttar Pradesh</div></div>
                        <div className="flex flex-col gap-1"><div className="flex items-center gap-2"><FaPhoneAlt className="text-yellow-400" /><a href="tel:+919760120551" className="hover:text-yellow-400">+91 97601 20551</a></div><div className="flex items-center gap-2"><FaPhoneAlt className="text-yellow-400" /><a href="tel:+919837030492" className="hover:text-yellow-400">+91 98370 30492</a></div></div>
                        <div className="flex items-center gap-2"><FaTelegramPlane className="text-yellow-400" /><a href="mailto:marketing@pradeepelectrode.com" className="hover:text-yellow-400">marketing@pradeepelectrode.com</a></div>

                        {/* <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                            <label htmlFor="newsletter" className="sr-only">Email</label>
                            <input id="newsletter" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-3 py-2 rounded-md text-black bg-white border border-gray-200" />
                            <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md border border-red-700 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors">Subscribe</button>
                        </form> */}
                        {newsletterStatus === 'sent' && <div className="text-sm text-green-500">Thanks — subscription saved (demo).</div>}
                        {newsletterStatus === 'error' && <div className="text-sm text-red-400">Enter a valid email.</div>}
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-6">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <div className="flex justify-center w-full">© {new Date().getFullYear()} Pradeep Electrodes. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
}
