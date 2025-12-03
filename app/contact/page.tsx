// app/contact/page.tsx
import ContactPage from "./ContactPage"; // client component

export const metadata = {
  title: "Contact Pradeep Electrodes | Get Quotation on Welding Rods",
  description:
    "Contact Pradeep Electrodes today for bulk orders, enquiries & technical support. Call +91 9760120551 or email. ISI certified electrode supplier in Hapur, UP.",
  alternates: {
    canonical: "https://www.pradeepelectrode.com/contact",
  },
  keywords: [
    "welding electrode supplier India",
    "welding rod manufacturer contact",
    "Pradeep Electrodes Hapur",
    "best welding rods India",
    "E6013 E7018 electrode contact",
    "contact Pradeep Electrodes",
    "get quote welding rods",
    "bulk electrode order India",
    "welding electrode supplier contact",
    "E6013 E7018 bulk purchase",
    "welding rod distributor Hapur",
    "electrode enquiry form",
    "welding equipment support",
    "steel electrodes bulk order"
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large"
  },
  openGraph: {
    title: "Contact Pradeep Electrodes | Trusted Welding Electrode Supplier",
    description:
      "Reach out to Pradeep Electrodes for high-quality welding electrodes and support. We serve across India with ISI & ISO-certified products.",
    url: "https://www.pradeepelectrode.com/contact",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pradeep Electrodes",
    description: "Bulk orders & enquiries for premium welding electrodes. Call now!"
  }
};

export default function Page() {
  return <ContactPage />;
}
