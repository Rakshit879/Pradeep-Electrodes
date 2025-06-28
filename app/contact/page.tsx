// app/contact/page.tsx
import ContactPage from "./ContactPage"; // client component

export const metadata = {
  title: "Contact Pradeep Electrodes | Trusted Welding Electrode Supplier",
  description:
    "Contact Pradeep Electrodes for premium welding rods—E6013, E7018, stainless & cast iron electrodes. Based in Hapur (Uttar Pradesh), shipping across India.",
  keywords: [
    "welding electrode supplier India",
    "welding rod manufacturer contact",
    "Pradeep Electrodes Hapur",
    "buy welding rods India",
    "E6013 E7018 electrode contact"
  ],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Contact Pradeep Electrodes | Trusted Welding Electrode Supplier",
    description:
      "Reach out to Pradeep Electrodes for high-quality welding electrodes and support. We serve across India with ISI & ISO-certified products.",
    type: "website"
  }
};

export default function Page() {
  return <ContactPage />;
}
