import Image from "next/image";

export default function OurCustomers() {
  const customers = [
    {
      id: 1,
      name: "Google",
      logo: "https://www.google.com/favicon.ico",
      alt: "Google - trusted customer of Pradeep Electrodes welding solutions"
    },
    {
      id: 2,
      name: "Apple",
      logo: "https://www.apple.com/favicon.ico",
      alt: "Apple - global technology company using Pradeep Electrodes"
    },
    {
      id: 3,
      name: "Microsoft",
      logo: "https://www.microsoft.com/favicon.ico",
      alt: "Microsoft - enterprise partner utilizing Pradeep welding electrodes"
    },
    {
      id: 4,
      name: "Amazon",
      logo: "https://www.amazon.com/favicon.ico",
      alt: "Amazon - major corporation partnering with Pradeep Electrodes"
    },
    {
      id: 5,
      name: "Meta",
      logo: "https://www.facebook.com/favicon.ico",
      alt: "Meta (Facebook) - technology leader using Pradeep welding solutions"
    },
    {
      id: 6,
      name: "Tesla",
      logo: "https://www.tesla.com/favicon.ico",
      alt: "Tesla - electric vehicle manufacturer using Pradeep Electrodes"
    },
    {
      id: 7,
      name: "IBM",
      logo: "https://www.ibm.com/favicon.ico",
      alt: "IBM - Fortune 500 company partnering with Pradeep Electrodes"
    },
    {
      id: 8,
      name: "Intel",
      logo: "https://www.intel.com/favicon.ico",
      alt: "Intel - semiconductor leader using Pradeep welding rods"
    }
  ];

  return (
    <section className="py-12 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">Our Customers</h2>
        <p className="text-gray-600 mb-8">Trusted by leading companies worldwide</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center h-20 w-20">
              <img
                src={customer.logo}
                alt={customer.alt}
                className="object-contain max-w-full max-h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">...and many more trusted partners across the globe</p>
      </div>
    </section>
  );
}
