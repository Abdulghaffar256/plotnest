"use client";

import { useState, useRef, useEffect } from "react";
import { Settings } from "lucide-react";

export default function SettingsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 rounded-full hover:bg-white/20 transition"
      >
        <Settings className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            Change Area Unit
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
            Change Currency
          </button>
        </div>
      )}
    </div>
  );
}
