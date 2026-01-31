import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${archivo.variable} font-sans antialiased bg-white text-black`}
      >
        <header className="fixed top-0 z-50 w-full border-b bg-white border-black">
          <div className="container mx-auto flex h-20 items-center justify-between px-4">
            <Link href="/" className="font-archivo text-xl md:text-2xl tracking-tighter hover:opacity-80 transition-opacity uppercase leading-none">
              THE BEST<br />PICKLEBALL STUFF
            </Link>
            <nav className="flex space-x-6 md:space-x-8 font-bold text-[10px] md:text-sm uppercase tracking-widest">
              <Link href="/" className="hover:text-brand transition-colors">Gear</Link>
              <Link href="/blog" className="hover:text-brand transition-colors">Blog</Link>
            </nav>
            <div className="flex items-center">
              <a href="mailto:thebestpickleballstuff@gmail.com" className="hidden sm:block bg-black text-white px-6 py-2 font-bold text-xs uppercase hover:bg-zinc-800 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </header>

        <main className="pt-20 min-h-screen">
          {children}
        </main>

        <footer className="bg-black text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="font-archivo text-2xl mb-4 tracking-tighter uppercase">THE BEST PICKLEBALL STUFF</div>
            <p className="text-zinc-400 text-sm max-w-md mx-auto mb-8">
              Copyright 2026 The Best Pickleball Stuff. Trusted Recommendations.
            </p>
            <div className="flex justify-center space-x-6 text-xs font-bold uppercase">
              <Link href="/" className="hover:text-brand">Home</Link>
              <Link href="/blog" className="hover:text-brand">Blog</Link>
              <Link href="/privacy" className="hover:text-brand">Privacy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
