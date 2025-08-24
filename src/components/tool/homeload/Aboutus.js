"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative mt-20">
      {/* Background Header Section */}
      <div className="relative h-[350px] w-full overflow-hidden rounded-xl shadow-lg">
        <Image
          src="/images/about-wallpaper.jpg"
          alt="Office workspace representing about us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-green-900/40 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center">
            About Us
          </h2>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-16 px-6 md:px-12 rounded-xl shadow-xl max-w-5xl mx-auto -mt-24 relative z-10 border border-green-100">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Floating Profile Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/images/team.jpg"
              alt="Roshan Financial team"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>

          {/* Main Description */}
          <p className="text-gray-700 text-md leading-relaxed max-w-3xl">
            At <strong>Roshan Financial</strong>, we believe everyone deserves access
            to simple, transparent, and empowering financial solutions. From
            first-time buyers to seasoned homeowners, our tools—like the{" "}
            <strong>Home Loan Calculator</strong>—are designed to help you make
            confident, informed decisions.
          </p>

          {/* Sub Description */}
          <p className="text-gray-600 text-sm max-w-2xl mt-2">
            By blending innovation with deep financial insight, we make complex
            mortgage options easy to understand. Let’s turn uncertainty into
            clarity—and bring your dream home within reach, one smart step at a
            time.
          </p>
        </div>
      </div>
    </div>
  );
}
