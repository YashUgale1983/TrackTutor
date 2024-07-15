import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrackTutor",
  description: "Get personalized course work and roadmap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={cn('min-h-screen h-max font-sans antialiased bg-gray-950',inter.className)}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
