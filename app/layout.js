import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LeftComp from "@/components/LeftComp";
import { Providers } from '@/store/provider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "RedKit",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased vsc-initialized`}
      >
        <Providers>
          <Navbar />
          <div className="flex">
            <div className="sticky top-14 h-[calc(100vh-3.5rem)]">
              <LeftComp />
            </div>
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
