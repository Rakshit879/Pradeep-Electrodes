import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@/lib/fontawesome';
import RouteLoadingHandler from "../components/sections/RouteLoadingHandler";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

// export const metadata: Metadata = {
//   title: "Pradeep Electrodes - Manufacturing Excellence",
//   description: "Transforming the future of manufacturing with innovative solutions",
// };
export const metadata = {
  icons: {
    icon: "/favicon.ico", // ✅ This line is important
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <RouteLoadingHandler />
        {children}
      </body>
    </html>
  );
}
