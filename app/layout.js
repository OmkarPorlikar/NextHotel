import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactIcons from "@/components/Home/FloatingContactIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Hotel Sunshine Pauni',
    template: '%s | Hotel Sunshine Pauni',
  },
  description:
    'Affordable hotel near Pauni Dam & Indira Sagar. Book clean, peaceful rooms in Kashi of Vidarbha.',
  keywords:
    'hotel sunshine pauni, pauni, indira sagar project, vidarbha tourism',
  openGraph: {
    siteName: 'Hotel Sunshine Pauni',
    images: [
      {
        url: 'https://hotelsunshinepauni.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hotel Sunshine Pauni Front View',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hotelsunshinepauni',
    images: ['https://hotelsunshinepauni.com/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and meta links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        


<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>

        
      </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen pt-0">{children}</main>
         <FloatingContactIcons />
        <Footer />
      </body>
    </html>
  );
}
