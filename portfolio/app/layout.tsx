import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// imports for navbar component.
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/profile.jpeg",
  },
  title: "Shrikar's Portfolio",
  description: "Made w/ Love lol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased custom-gradient`}
      >
        <div className="sticky top-0 z-50 w-full">
          <Navbar />
        </div>
        <main className="max-w-7xl mx-auto px-2">{children}</main>
        <div className="sticky top-0 z-50 w-full">
          <Footer />
        </div>
        <Script
          src="https://kit.fontawesome.com/8cc2d7e0f6.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></Script>
      </body>
    </html>
  );
}
