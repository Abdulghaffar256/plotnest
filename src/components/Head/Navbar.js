"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, User, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LoginModal from "./LoginModal";
import SearchBar from "@/components/Head/SearchBar";

export default function NavBar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const countryRef = useRef(null);
  const settingsRef = useRef(null);
  const toolsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
      if (toolsRef.current && !toolsRef.current.contains(event.target)) {
        setIsToolsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-green-600 text-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2 font-bold text-lg">
          <span>
            PlotNest<span className="font-light"></span>
          </span>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-wide relative">
          {[
            { name: "Home", href: "/" },
            { name: "Plot Finder", href: "/plotfinder" },
            { name: "Area Guides", href: "/area-guides" },
            { name: "Blog", href: "/blog" },
            { name: "Maps", href: "/maps" },
          ].map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-gray-200">
              {link.name}
            </Link>
          ))}

          {/* Tools Dropdown */}
          <div className="relative" ref={toolsRef}>
            <button
              onClick={() => setIsToolsOpen(!isToolsOpen)}
              className="hover:text-gray-200 flex items-center"
            >
              Tools <span className="ml-1">▾</span>
            </button>
            {isToolsOpen && (
              <div className="absolute bg-white text-gray-800 shadow-lg rounded mt-2 z-50 w-56">
                <Link href="/tools/home-loan-calculator" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Home Loan Calculator
                </Link>
                <Link href="/tools/area-unit-converter" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Area Unit Converter
                </Link>
                <Link href="/tools/land-record-pages" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Land Record Pages
                </Link>
                <Link href="/tools/construction-cost-calculator" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Construction Cost Calculator
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Search Bar */}
        <SearchBar />

        {/* Right side icons + actions */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="bg-white text-green-600 px-3 py-1 rounded shadow-sm hover:bg-gray-100"
          >
            + Add Property
          </button>

          {/* Country Selector */}
          <div className="relative" ref={countryRef}>
            <button
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              className="text-xl leading-none"
              title="Country"
            >
              🇵🇰
            </button>

            {isCountryOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg z-50 py-2 space-y-1">
                {[
                  { name: "UAE", code: "ae" },
                  { name: "Saudi Arabia", code: "sa" },
                  { name: "Jordan", code: "jo" },
                  { name: "Morocco", code: "ma" },
                  { name: "Bangladesh", code: "bd" },
                  { name: "Mexico", code: "mx" },
                  { name: "Philippines", code: "ph" },
                  { name: "Indonesia", code: "id" },
                ].map((country) => (
                  <button
                    key={country.name}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <Image
                      src={`/flags/${country.code}.png`}
                      alt={country.name}
                      width={20}
                      height={15}
                    />
                    {country.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Settings Dropdown */}
          <div className="relative" ref={settingsRef}>
            <button onClick={() => setIsSettingsOpen(!isSettingsOpen)} title="Settings">
              <Settings className="w-6 h-6" />
            </button>

            {isSettingsOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50 py-2 space-y-1">
                {["My Profile", "Settings", "Help", "Logout"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* User Icon */}
          <button onClick={() => setIsLoginOpen(true)}>
            <User className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" aria-label="Open menu">
          <Menu />
        </button>
      </div>

      {/* Login Modal */}
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </header>
  );
}
