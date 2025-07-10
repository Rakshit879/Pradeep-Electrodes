"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+91',
    message: ''
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log(formData);
  // };

  return (
    <main className="min-h-screen bg-gray-100">

      <section className="pt-20 px-4 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <h1 className="text-5xl md:text-6xl font-normal text-black mb-6">
                Contact Us
              </h1>
              <p className="text-black/80 text-lg">
                Interested in working together? Fill out some info and we will
                be in touch shortly. We can't wait to hear from you!
              </p>
            </div>

            {/* Right Column - Form */}
            <form
              action="https://formsubmit.co/pradeepelectrodesofficial@gmail.com"
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
        </div>
      </section>
    </main>
  );
} 