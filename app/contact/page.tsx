'use client';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+91',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission (e.g., send data to server)
    console.log(formData);

    // Clear form after submit
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '+91',
      message: ''
    });
  };


  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="pt-32 px-4 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="pl-4">
              <h1 className="text-5xl md:text-6xl font-normal text-black mb-8">
                Contact Us
              </h1>
              <p className="text-black/80 text-lg mb-20">
                Interested in working together? Fill out some info and we will
                be in touch shortly. We can't wait to hear from you!
              </p>

              <form
                action="https://formsubmit.co/rakshitgarg809@gmail.com"
                method="POST"
                className="space-y-8"
              >

                <div>
                  <p className="text-sm text-black/60 mb-1">Name (required)</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 rounded-full bg-transparent border border-black/20 focus:outline-none focus:border-black placeholder:text-black/40"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        className="w-full px-4 py-3 rounded-full bg-transparent border border-black/20 focus:outline-none focus:border-black placeholder:text-black/40"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-black/60">Phone No. (required)</p>
                  <input
                    type="tel"
                    required
                    name="phone"
                    className="w-full px-4 py-3 rounded-full bg-transparent border border-black/20 focus:outline-none focus:border-black"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onKeyDown={(e) => {
                      const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', '+', '-'];
                      const isNumber = /^[0-9]$/.test(e.key);
                      if (!allowedKeys.includes(e.key) && !isNumber) {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>


                <div className="space-y-1">
                  <p className="text-sm text-black/60">Email (required)</p>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-full bg-transparent border border-black/20 focus:outline-none focus:border-black"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-black/60">Message (required)</p>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-3xl bg-transparent border border-black/20 focus:outline-none focus:border-black resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <div className="flex justify-center md:justify-start md:mx-4">
                  <Button
                    type="submit"
                    className="bg-black text-white rounded-full px-8 py-6 h-auto hover:bg-black/80"
                  >
                    SUBMIT
                  </Button>
                </div>

              </form>
            </div>

            {/* Right Column - Form */}
            <div className="hidden md:flex items-center justify-center h-full">
              <Image
                src="/images/ContactPageImage.jpg"
                alt="Pradeep Electrodes"
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-xl max-h-[500px] max-w-[450px]"
              />
            </div>



          </div>
        </div>
      </section>
      <section className="px-4 pb-16 pt-7">
        <div className="container mx-auto bg-gray-200 py-12 px-6 mt-20 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch!</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Address */}
            <div className="flex flex-col items-center space-y-3">
              <FontAwesomeIcon icon={faIndustry} className="text-6xl text-black" />
              <h3 className="text-xl font-semibold">Pradeep Electrodes</h3>
              <p className="text-sm text-black/80">Pradeep Electrodes,</p>
              <p className="text-sm text-black/80">Meerut Road, Near Income Tax Office,</p>
              <p className="text-sm text-black/80">Hapur-245101, Uttar Pradesh-India</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center space-y-3">
              <FontAwesomeIcon icon={faPhone} className="text-6xl text-black" />
              <h3 className="text-xl font-semibold">Phone Number</h3>
              <p className="text-sm text-black/80">+91 9760120551</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center space-y-3 break-words">
              <FontAwesomeIcon icon={faEnvelope} className="text-6xl text-black" />
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-sm text-black/80 px-2 break-words">
                pradeepelectrodesofficial@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side Text */}
          <div className="text-left">
            <h2 className="text-4xl text-center md:text-start md:text-5xl font-semibold leading-snug">
              Find us on the map
            </h2>
            {/* <p className="text-lg text-gray-300 mt-6">
              Let’s turn your ideas into a <br />
              successful and profitable business reality.
            </p> */}
          </div>

          {/* Right Side Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.511179821734!2d77.76652547375753!3d28.734151079461956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c850026dffe4f%3A0x7b7a31e26d199028!2sPradeep%20Electrodes!5e0!3m2!1sen!2sin!4v1750164194321!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
      <Footer/>
      <FloatingButtons/>
    </main>
  );
}

