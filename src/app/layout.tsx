import type { Metadata } from "next";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Inspiration, Eczar } from "next/font/google";
import "./globals.css";

const inspiration = Inspiration({
  variable: "--font-inspiration",
  subsets: ["latin"],
  weight: "400"
});

const eczar = Eczar({
  variable: "--font-ezcar",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Immigrant Stories",
  description: "An archive of perspectives written by immigrants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inspiration.variable} ${eczar.variable} antialiased overflow-x-hidden`}
      >
        <NavBar />
        <div className="min-h-screen flex flex-col flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}