// File: src/app/layout.js or src/app/layout.jsx

import "../styles/globals.css";
import Navbar from "@/components/Head/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Finder – Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
