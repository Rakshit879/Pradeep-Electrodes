"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+91',
    message: ''
  });

  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const payload = new FormData();
      payload.append('firstName', formData.firstName);
      payload.append('lastName', formData.lastName);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('message', formData.message);
      // Helpful FormSubmit fields: disable captcha, set subject, and return URL
      payload.append('_captcha', 'false');
      payload.append('_subject', 'Website Lead');
      try {
        payload.append('_next', window.location.href);
      } catch (e) {
        // window may be undefined in some contexts; ignore
      }
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: payload,
      });
      const text = await res.text().catch(() => '');
      console.log('FormSubmit response', res.status, text);

      if (res.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        // Try HTML form fallback (avoids CORS by navigating)
        try {
          const f = document.createElement('form');
          f.method = 'POST';
          f.action = '/api/contact';
          const entries: Record<string, string> = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          };
          Object.entries(entries).forEach(([k, v]) => {
            const inp = document.createElement('input');
            inp.type = 'hidden';
            inp.name = k;
            inp.value = v;
            f.appendChild(inp);
          });
          // add helpful FormSubmit fields to fallback
          const captcha = document.createElement('input'); captcha.type = 'hidden'; captcha.name = '_captcha'; captcha.value = 'false'; f.appendChild(captcha);
          const subj = document.createElement('input'); subj.type = 'hidden'; subj.name = '_subject'; subj.value = 'Website Lead'; f.appendChild(subj);
          try { const next = document.createElement('input'); next.type = 'hidden'; next.name = '_next'; next.value = window.location.href; f.appendChild(next); } catch (e) {}
          document.body.appendChild(f);
          f.submit();
        } catch (err) {
          setStatus('error');
        }
      }
    } catch (err) {
      // network error - try HTML form fallback
      try {
        const f = document.createElement('form');
        f.method = 'POST';
        f.action = '/api/contact';
        const entries: Record<string, string> = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        };
        Object.entries(entries).forEach(([k, v]) => {
          const inp = document.createElement('input');
          inp.type = 'hidden';
          inp.name = k;
          inp.value = v;
          f.appendChild(inp);
        });
        const captcha = document.createElement('input'); captcha.type = 'hidden'; captcha.name = '_captcha'; captcha.value = 'false'; f.appendChild(captcha);
        const subj = document.createElement('input'); subj.type = 'hidden'; subj.name = '_subject'; subj.value = 'Website Lead'; f.appendChild(subj);
        try { const next = document.createElement('input'); next.type = 'hidden'; next.name = '_next'; next.value = window.location.href; f.appendChild(next); } catch (e) {}
        document.body.appendChild(f);
        f.submit();
      } catch (err) {
        setStatus('error');
      }
    }
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFB] py-16">
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Visual Hero + Contact Info */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-[420px] shadow-lg">
              <img
                src="/images/ContactPageImage.png"
                alt="Pradeep Electrodes contact team ready to assist with welding electrode enquiries and technical support"
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute left-6 bottom-6 text-white">
                <h2 className="text-3xl md:text-4xl font-semibold">Get in touch</h2>
                <p className="mt-2 max-w-md text-sm md:text-base text-white/90">
                  We're here to help with product enquiries, orders, and technical support. Reach out and we'll respond promptly.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-start gap-3 bg-white text-black p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-black text-white">
                  <FaMapMarkerAlt />
                </div>
                <p className="text-sm font-medium">Head Office</p>
                <p className="text-xs text-gray-700">Pradeep Electrodes, Meerut Road, Near Income Tax Office</p>
              </div>

              <div className="flex flex-col items-start gap-3 bg-white text-black p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-green-600 text-white">
                  <FaWhatsapp />
                </div>
                <p className="text-sm font-medium">WhatsApp</p>
                <div className="flex flex-col gap-1 text-xs text-gray-700">
                  <a href="https://wa.me/+919760120551">+91 97601 20551</a>
                  <a href="https://wa.me/+919837030492">+91 98370 30492</a>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 bg-white text-black p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-600 text-white">
                  <FaEnvelope />
                </div>
                <p className="text-sm font-medium">Email</p>
                <a href="mailto:marketing@pradeepelectrode.com" className="block w-full break-all text-xs text-gray-700">marketing@pradeepelectrode.com</a>
              </div>
            </div>
          </div>

          {/* Right - Form Card */}
          <div className="bg-white text-black rounded-2xl shadow-xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Send us a message</h3>
            <p className="text-sm text-gray-600 mb-6">Fill the form below and our team will reach out within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 placeholder:text-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 placeholder:text-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (+91)"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 placeholder:text-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 placeholder:text-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your enquiry..."
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none text-black"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <div className="flex items-center justify-between gap-4">
                <Button type="submit" className="bg-black text-white rounded-full px-6 py-3 hover:bg-black/90">
                  Send Message
                </Button>
                <div className="text-sm text-gray-600">Or call us: <a href="tel:+919760120551" className="font-medium text-yellow-400">+91 97601 20551</a> / <a href="tel:+919837030492" className="font-medium text-yellow-400">+91 98370 30492</a></div>
              </div>
              {status === 'sending' && <p className="text-sm text-gray-500 mt-2">Sending...</p>}
              {status === 'success' && <p className="text-sm text-green-600 mt-2">Message sent — we will contact you shortly.</p>}
              {status === 'error' && <p className="text-sm text-red-600 mt-2">Something went wrong. Please try again or email us directly.</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}