import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function Booking() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-normal mb-6">Secure your spot</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Transform your production journey by booking an appointment with
              our experts, who are revolutionizing manufacturing with cutting-edge
              solutions tailored to elevate your operations. Discover
              groundbreaking strategies that set the standard in innovation, and
              let's redefine the future of your industry, together.
            </p>
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
                alt="Manufacturing equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <Card className="p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Select Appointment</span>
                </div>
              </div>

              {/* Service Options */}
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b">
                  <div>
                    <h3 className="font-medium">Free Consultation</h3>
                    <p className="text-sm text-gray-500">30 minutes</p>
                  </div>
                  <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
                    BOOK
                  </Button>
                </div>

                <div className="flex justify-between items-center py-4 border-b">
                  <div>
                    <h3 className="font-medium">Basic Service</h3>
                    <p className="text-sm text-gray-500">1 hour @ $99.00</p>
                  </div>
                  <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
                    BOOK
                  </Button>
                </div>

                <div className="flex justify-between items-center py-4 border-b">
                  <div>
                    <h3 className="font-medium">Advanced Service</h3>
                    <p className="text-sm text-gray-500">1 hour @ $199.00</p>
                  </div>
                  <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
                    BOOK
                  </Button>
                </div>
              </div>

              {/* Powered By */}
              <div className="mt-12 text-center">
                <p className="text-sm text-gray-500">Powered by</p>
                <p className="font-medium">acuity:scheduling</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 