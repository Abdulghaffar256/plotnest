"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Jobs</li>
            <li>Help & Support</li>
            <li>Advertise On Zameen</li>
            <li>Terms Of Use</li>
          </ul>
        </div>

        {/* Connect Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>News</li>
            <li>Forum</li>
            <li>Expo</li>
            <li>Real Estate Agents</li>
            <li>Add Property</li>
          </ul>
        </div>

        {/* Head Office Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Head Office</h4>
          <ul className="space-y-2">
            <li>
              📍 Pearl One, 94-B/I, MM Alam Road,
              <br />
              Gulberg III, Lahore, Pakistan
            </li>
            <li>
              ☎️ 0800-ZAMEEN (92633)
              <br />
              Monday to Sunday 9AM to 6PM
            </li>
            <li>📧 Email Us</li>
          </ul>
        </div>

        {/* Roshan + Social */}
        <div className="flex flex-col items-start">
          <h4 className="text-white font-semibold mb-4">Roshan Digital Account</h4>
          <img
            src="/assets/roshan-logo.png"
            alt="Roshan Digital Account"
            className="h-10 mb-6"
          />
          <h4 className="text-white font-semibold mb-2">Get Connected</h4>
          <div className="flex space-x-3 text-xl">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-10 flex justify-between items-center text-xs text-gray-400">
        <p>© Copyright 2007 - 2025 Zameen.com. All Rights Reserved</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-1 text-gray-300 hover:text-white"
        >
          <span>Top</span>
          <ChevronUp size={16} />
        </button>
      </div>
    </footer>
  );
}
