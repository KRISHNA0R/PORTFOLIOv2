import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Krishna R ✌️",
  description: "B.Tech CSE student passionate about technology, innovation, and building real-world solutions.",
  keywords: "Krishna R, Cloud & DevOps, B.Tech CSE, Amity University Kolkata, Hackathon Finalist, Python, Web Development",
  authors: [{ name: "Krishna R" }],
  creator: "Krishna R",
  publisher: "Krishna R",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Krishna R - Cloud & DevOps",
    description: "B.Tech CSE student passionate about technology, innovation, and building real-world solutions.",
    url: "https://github.com/KRISHNA0R/PORTFOLIOv2",
    siteName: "Krishna R's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna R - Cloud & DevOps",
    description: "B.Tech CSE student passionate about technology, innovation, and building real-world solutions.",
  },
  verification: {
    google: "",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={'G-7WD4HM3XRE'}/>
    </html>
  );
}
