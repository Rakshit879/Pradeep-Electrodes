"use client";

import { useEffect, useState } from "react";

export default function ContactPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Ensure it runs only on the client
    if (typeof window !== "undefined") {
      const isSubmitted = localStorage.getItem("popup_submitted");
      if (!isSubmitted) {
        const timer = setTimeout(() => setShowPopup(true), 5000); // show after 5 seconds
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("popup_submitted", "true");
    setShowPopup(false);
    e.currentTarget.submit(); // let formsubmit.co handle the submission
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/rakshitgarg809@gmail.com"
        method="POST"
        className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl relative"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">Stay Connected</h2>

        {/* FormSubmit hidden fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Website Lead" />
        <input type="hidden" name="_next" value="http://localhost:3000/" />

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-semibold transition"
        >
          Submit & Continue
        </button>
      </form>
    </div>
  );
}
