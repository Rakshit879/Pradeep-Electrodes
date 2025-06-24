"use client";
import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-0 right-0 transform -translate-y-1/2 z-50">
      <div className="flex flex-col bg-black rounded-l-xl overflow-hidden shadow-2xl transition-all duration-300">
        {/* Arrow Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
        >
          {isOpen ? (
            <FaArrowRight className="text-white text-xl" />
          ) : (
            <FaArrowLeft className="text-white text-xl" />
          )}
        </button>

        {/* Conditional Buttons */}
        {isOpen && (
          <>
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+919760120551?text=Hello%2C%20I%27m%20interested"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
            >
              <FaWhatsapp className="text-white text-xl" />
            </a>

            {/* Phone Button */}
            <a
              href="tel:+919760120551"
              className="w-14 h-14 flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300"
            >
              <FaPhoneAlt className="text-white text-xl" />
            </a>
          </>
        )}
      </div>
    </div>
  );
}
