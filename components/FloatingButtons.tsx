"use client";
import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FloatingButtons() {
  const [isOpen, setIsOpen] = useState(true);

  return (
  <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="relative">
        {/* Arrow Toggle (always visible) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="w-14 h-14 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-l-xl shadow-2xl hover:bg-yellow-400/90 transition-colors duration-300"
        >
          {isOpen ? (
            <FaArrowRight className="text-white text-xl" />
          ) : (
            <FaArrowLeft className="text-white text-xl" />
          )}
        </button>

        {/* Dropdown-style buttons that appear below the arrow */}
        <div
          className={`absolute right-0 top-full flex flex-col items-stretch transition-all duration-200 origin-top ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {/* Container for the expanded icons with matching style (connected to toggle) */}
          <div className="bg-black/60 backdrop-blur-sm rounded-l-xl overflow-hidden shadow-2xl">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+919760120551?text=Hello%2C%20I%27m%20interested"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center hover:bg-yellow-400/90 transition-colors duration-300"
            >
              <FaWhatsapp className="text-white text-xl" />
            </a>

            {/* Phone Button */}
            <a
              href="tel:+919760120551"
              className="w-14 h-14 flex items-center justify-center hover:bg-yellow-400/90 transition-colors duration-300"
            >
              <FaPhoneAlt className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
