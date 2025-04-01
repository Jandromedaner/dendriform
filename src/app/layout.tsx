import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dendriform",
  description:
    "Experience cutting-edge audiovisual performances and immersive installations",
  openGraph: {
    title: "Dendriform",
    description:
      "Audiovisual Resonance - Experimental sound and light experiences",
    url: "https://dendriform.vercel.app/",
    siteName: "Dendriform",
    images: [
      {
        url: "https://dendriform.vercel.app/logo-3d.png",
        width: 1200,
        height: 630,
        alt: "Dendriform Audiovisual Performance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
