"use client";
import Image from "next/image";
import Link from "next/link";

export default function RoshanBanner() {
  return (
    <div className="bg-white rounded-lg shadow-md max-w-6xl mx-auto my-10 p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-200">
      {/* Left image */}
      <div className="w-full md:w-1/3">
        <Image
          src="/images/roshan-banner-left.png"
          alt="Roshan Buildings"
          width={300}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left flex-1">
        <h2 className="text-xl font-semibold text-black flex items-center justify-center md:justify-start gap-2">
          <Image src="/images/roshan-icon.png" alt="Icon" width={24} height={24} />
          Roshan Digital Account
        </h2>
        <p className="text-gray-600 mt-2">
          Learn more about Roshan Digital Accounts and avail all the exclusive benefits!
        </p>
      <Link href="/roshan/apna-ghar">
  <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
    Learn More
  </button>
</Link>     
      </div>
    </div>
  );
}
