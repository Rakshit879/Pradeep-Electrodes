// app/contact/ContactPage.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faPhone, faEnvelope, faExpand, faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/sections/Footer";

// ... keep your full ContactPage component here
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
   useEffect(() => {
    // trigger fade-in after mount
    setMounted(true);
  }, []);

  const [copied, setCopied] = useState(false);
  const addressText = `Meerut Road, Near Income Tax Office, Hapur-245101, Uttar Pradesh, India`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Pradeep Electrodes Hapur')}`;

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(addressText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // ignore
    }
  };

  const [expanded, setExpanded] = useState(false);
  const [errors, setErrors] = useState<{ firstName?: string; email?: string; phone?: string; message?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // client-side validation
    const newErrors: typeof errors = {};
    if (!formData.firstName || formData.firstName.trim().length === 0) newErrors.firstName = 'Please enter your first name';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    // Accept international phone numbers: allow +, spaces, parentheses; validate 7-15 digits per E.164 guidance
    const combined = `${formData.country || ''}${formData.phone || ''}`;
    const digits = (combined).replace(/\D/g, '');
    if (!digits || digits.length < 7 || digits.length > 15) newErrors.phone = 'Please enter a valid international phone number (7-15 digits)';
    if (!formData.message || formData.message.trim().length === 0) newErrors.message = 'Please enter a message';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      // Send form data as JSON
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (res.ok && result.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', country: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
    }
    // reset status after a short delay
    setTimeout(() => setStatus('idle'), 4000);
  };


  return (
    <main className="min-h-screen bg-[#FAFAFB]">
      <Navbar />
      {/* Hero video with centered text (autoplay muted loop) */}
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-500"
          src="/videos/welding2.mp4"
          poster="/images/ContactPageImage.png"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/welding2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-white/90 max-w-2xl">Pradeep Electrodes – a leading welding electrode manufacturer</p>
        </div>
      </section>

      {/* Main contact area (form + cards) */}
      <section id="contact-form" className="pt-12 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-8 text-center max-w-3xl mx-auto transition-opacity duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-gray-700">Established with a commitment to quality and reliability, Pradeep Electrodes serves industries across India with high-performance welding electrodes, certified processes, and expert technical support.</p>
            <div className="mt-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">20+</div>
                <div className="text-sm text-gray-600">Years in business</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: Form card */}
            <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">Interested in working together? Fill out the form and our team will contact you shortly.</p>

              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="w-full">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        required
                        aria-invalid={errors.firstName ? 'true' : 'false'}
                        className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} placeholder:text-gray-400 text-black focus:outline-none ${errors.firstName ? 'focus:ring-2 focus:ring-red-200' : 'focus:ring-2 focus:ring-yellow-400'}`}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                      {errors.firstName && <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>}
                    </div>

                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 placeholder:text-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="w-full">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 min-w-0 w-full">
                          <input
                            type="text"
                            name="country"
                            id="country"
                            placeholder="+91"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-20 flex-shrink-0 px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            aria-label="Country code"
                          />

                          <input
                            type="tel"
                            name="phone"
                            placeholder="e.g. 9760120551"
                            required
                            aria-invalid={errors.phone ? 'true' : 'false'}
                            aria-describedby="phone-help"
                            className={`min-w-0 flex-1 px-4 py-3 rounded-lg bg-white border ${errors.phone ? 'border-red-500' : 'border-gray-200'} placeholder:text-gray-400 text-black focus:outline-none ${errors.phone ? 'focus:ring-2 focus:ring-red-200' : 'focus:ring-2 focus:ring-yellow-400'}`}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                      {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div className="w-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                        aria-invalid={errors.email ? 'true' : 'false'}
                        className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.email ? 'border-red-500' : 'border-gray-200'} placeholder:text-gray-400 text-black focus:outline-none ${errors.email ? 'focus:ring-2 focus:ring-red-200' : 'focus:ring-2 focus:ring-yellow-400'}`}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your enquiry..."
                      required
                      aria-invalid={errors.message ? 'true' : 'false'}
                      className={`w-full px-4 py-3 rounded-lg bg-white border ${errors.message ? 'border-red-500' : 'border-gray-200'} placeholder:text-gray-400 focus:outline-none ${errors.message ? 'focus:ring-2 focus:ring-red-200' : 'focus:ring-2 focus:ring-yellow-400'} resize-none text-black`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex items-center gap-4">
                    <Button type="submit" className="bg-black text-white rounded-full px-6 py-3 hover:bg-black/90">
                      Send Message
                    </Button>
                    <span className="text-sm text-gray-600">Or call us: <a href="tel:+919760120551" className="text-yellow-400 font-medium">+91 97601 20551</a> / <a href="tel:+919837030492" className="text-yellow-400 font-medium">+91 98370 30492</a></span>
                  </div>
                  {status === 'sending' && <p className="text-sm text-gray-500 mt-2">Sending...</p>}
                  {status === 'success' && <p className="text-sm text-green-600 mt-2">Message sent — we will contact you shortly.</p>}
                  {status === 'error' && <p className="text-sm text-red-600 mt-2">Something went wrong. Please try again or email us directly.</p>}
                </form>
              </div>
            </div>

            {/* Right: Contact cards (aligned with form) */}
            <div className={`space-y-6 flex flex-col justify-start transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="grid grid-cols-1 gap-4 w-full">
                <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-6 w-full">
                  <FontAwesomeIcon icon={faIndustry} className="text-2xl text-yellow-500" />
                  <div>
                    <h4 className="font-semibold text-lg">Head Office</h4>
                    <p className="text-base text-gray-700">Meerut Road, Near Income Tax Office, Hapur-245101, Uttar Pradesh</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-6 w-full">
                  <FontAwesomeIcon icon={faPhone} className="text-2xl text-green-600" />
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-base text-gray-700">+91 9760120551</p>
                    <p className="text-base text-gray-700">+91 9837030492</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-6 w-full">
                  <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-base text-gray-700 break-all">marketing@pradeepelectrode.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-16 pt-7">
        <div className="container mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side Text */}
          <div className="text-left">
            <h2 className="text-4xl text-center md:text-start md:text-5xl font-semibold leading-snug">
              Find us on the map
            </h2>
          </div>

          {/* Right Side Map (card with header + controls) */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-yellow-400 text-black flex items-center justify-center">
                    <FontAwesomeIcon icon={faIndustry} />
                  </div>
                  <div>
                    <div className="font-semibold">Pradeep Electrodes</div>
                    <div className="text-xs text-gray-600">Hapur, Uttar Pradesh</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a href={mapsLink} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-md hover:bg-gray-100 flex items-center gap-2">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <span className="hidden sm:inline">Open</span>
                  </a>
                  <button onClick={() => setExpanded(true)} className="text-sm px-3 py-1 rounded-md hover:bg-gray-100 flex items-center gap-2">
                    <FontAwesomeIcon icon={faExpand} />
                    <span className="hidden sm:inline">Expand</span>
                  </button>
                </div>
              </div>

              <div className="relative h-[400px]">
                {/* small overlay action inside card */}
                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm rounded-md p-2 shadow-sm text-xs">
                  <div className="font-medium">Address</div>
                  <div className="text-gray-700">Meerut Rd, Near Income Tax Office</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button onClick={copyAddress} className="px-2 py-1 border rounded text-xs">Copy</button>
                    {copied && <span className="text-green-600">Copied</span>}
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.511179821734!2d77.76652547375753!3d28.734151079461956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c850026dffe4f%3A0x7b7a31e26d199028!2sPradeep%20Electrodes!5e0!3m2!1sen!2sin!4v1750164194321!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Fullscreen modal for expanded map */}
          {expanded && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
              <div className="relative w-[90%] max-w-5xl h-[80vh] bg-white rounded-xl overflow-hidden">
                <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                  <a href={mapsLink} target="_blank" rel="noreferrer" className="px-3 py-1 bg-yellow-400 text-black rounded-md flex items-center gap-2">Open in Maps <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                  <button onClick={() => setExpanded(false)} className="px-3 py-1 bg-white border rounded-md"><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.511179821734!2d77.76652547375753!3d28.734151079461956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c850026dffe4f%3A0x7b7a31e26d199028!2sPradeep%20Electrodes!5e0!3m2!1sen!2sin!4v1750164194321!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Featured Products Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-2">Featured Welding Electrodes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Explore our premium range of ISI & ISO certified welding electrodes designed for superior performance across all industrial applications.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Pradeep E-6013", slug: "mild-steel-electrode-6013", desc: "Versatile rutile-coated electrode with smooth arc and easy slag removal" },
              { name: "7018 Welding Electrode", slug: "7018-welding-electrode", desc: "Low-hydrogen iron powder for high-strength crack-resistant welds" },
              { name: "Weld Bond 308", slug: "stainless-steel-electrode-308", desc: "Austenitic stainless steel electrode with exceptional corrosion resistance" },
              { name: "7016 Welding Electrode", slug: "7016-welding-electrode", desc: "Premium basic-coated electrode ideal for root pass welding" }
            ].map((prod) => (
              <a
                key={prod.slug}
                href={`/products/${prod.slug}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border border-gray-100 hover:border-yellow-400"
              >
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{prod.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{prod.desc}</p>
                <span className="inline-block text-yellow-500 font-medium hover:underline">Learn More →</span>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="/products" className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition font-semibold">
              View All Electrodes
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}

