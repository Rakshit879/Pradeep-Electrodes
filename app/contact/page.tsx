'use client';

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      
      <section className="pt-32 px-4 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <h1 className="text-5xl md:text-6xl font-normal text-black mb-6">
                Contact us
              </h1>
              <p className="text-black/80 text-lg">
                Interested in working together? Fill out some info and we will
                be in touch shortly. We can't wait to hear from you!
              </p>
            </div>

            {/* Right Column - Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <p className="text-sm text-black/60 mb-1">Name (required)</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full px-4 py-3 rounded-full bg-transparent border border-black/20 focus:outline-none focus:border-black placeholder:text-black/40"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="w-full px-4 py-3 rounded-full bg-transparent border border-black/20 focus:outline-none focus:border-black placeholder:text-black/40"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-black/60">Email (required)</p>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-full bg-transparent border border-black/20 focus:outline-none focus:border-black"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-1">
                <p className="text-sm text-black/60">Message (required)</p>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-3xl bg-transparent border border-black/20 focus:outline-none focus:border-black resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="newsletter" 
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => 
                    setFormData({...formData, newsletter: checked as boolean})
                  }
                  className="border-black/20 data-[state=checked]:bg-black data-[state=checked]:border-black"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm leading-none text-black/80"
                >
                  Sign up for news and updates
                </label>
              </div>

              <Button 
                type="submit"
                className="bg-black text-white rounded-full px-8 py-6 h-auto hover:bg-black/80"
              >
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 