import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileNavigation, DesktopNavigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FurGroove",
  description:
    "Events made by furries for furries. We host different events throughout the year ranging from regular dance parties to 18+ events. Whether you wanna dance along to our DJ’s, have a drink with your friends or strut around in your fursuit Furgroove has something for everyone to enjoy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#Skip"
          className="absolute z-auto -translate-y-full transform opacity-0 focus-within:translate-y-[300%] focus-within:opacity-100"
        >
          Skip to content
        </a>
        <DesktopNavigation />
        {children}
        <Footer />
        <MobileNavigation />
      </body>
    </html>
  );
}
