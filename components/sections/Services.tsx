import { FaQuoteLeft } from "react-icons/fa";

export default function Services() {
  return (
    <section className="bg-white py-16 px-6 md:px-24 flex flex-col md:flex-row items-center gap-10">
      {/* Left Section */}
      <div className="flex-1 text-left">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-tight">
          Driven by innovation and built on trust, <br />
          <span className="text-yellow-400">Pradeep Electrodes</span> is redefining welding excellence with unmatched quality and performance.
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex-1 border-l-4 border-yellow-400 pl-6 relative">
        <FaQuoteLeft className="text-yellow-400 text-4xl absolute -left-7 -top-4" />
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to engineer precision-driven welding solutions that empower industries to build stronger, safer, and smarter. Every electrode we create carries the strength of technology and the spirit of craftsmanship.
        </p>
      </div>
    </section>
  );
}
