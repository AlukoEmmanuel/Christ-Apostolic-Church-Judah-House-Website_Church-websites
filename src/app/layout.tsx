import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import FloatingDonateButton from '@/components/FloatingDonateButton';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
});

export const metadata: Metadata = {
  title: "Christ Apostolic Church Judah House",
  description: "Welcome to Christ Apostolic Church Judah House - A place of worship, fellowship, and spiritual growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${crimsonPro.variable} font-sans`}>
        <Navigation />
        {children}
        <FloatingDonateButton />
      </body>
    </html>
  );
} 