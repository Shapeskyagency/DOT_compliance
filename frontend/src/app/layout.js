
import { Geist, Geist_Mono } from "next/font/google";

import './css/bootstrap.min.css';
import './css/flaticon.css';
import './css/pbminfotech-base-icons.css';
import './css/swiper.min.css';
import './css/magnific-popup.css';
import './css/shortcode.css';
import './css//themify-icons.css';
import './css/base.css';
import './css/aos.css';
import './css/style.css';
// import './css/demo-1.css';
// import './css/demo-2.css';
// import './css/demo-3.css';
import './css/demo-4.css';
// import './css/demo-5.css';
import './css/responsive.css';
// import "./globals.css";

// import './revolution/rs6.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>

        <link rel="shortcut icon" type="image/x-icon" href="/images/fevicon.png" />

      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="revolution/rslider.js"></script>
      <script src="revolution/rbtools.min.js"></script>
      <script src="revolution/rs6.min.js"></script> 

      </body>
    </html>
  );
}
