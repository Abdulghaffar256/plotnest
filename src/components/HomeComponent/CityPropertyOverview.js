// src/components/tool/cost/CityPropertyOverview.js
"use client";

import Image from "next/image";

export default function CityPropertyOverview() {
  const houses = [
    "Houses for sale in Lahore (24,863)",
    "Houses for sale in Karachi (12,183)",
    "Houses for sale in Islamabad (9,567)",
    "Houses for sale in Rawalpindi (4,696)",
    "Houses for sale in Multan (2,120)",
    "Houses for sale in Faisalabad (1,300)",
    "Houses for sale in Gujranwala (1,156)",
    "Houses for sale in Peshawar (747)",
    "Houses for sale in Sialkot (265)",
    "Houses for sale in Bahawalpur (125)",
    "Houses for sale in Murree (105)",
    "Houses for sale in Abbottabad (97)",
    "Houses for sale in Sahiwal (57)",
    "Houses for sale in Sargodha (36)",
    "Houses for sale in Quetta",
  ];

  const flats = [
    "Flats for sale in Karachi (11,946)",
    "Flats for sale in Islamabad (3,806)",
    "Flats for sale in Lahore (3,438)",
    "Flats for sale in Rawalpindi (611)",
    "Flats for sale in Hyderabad (130)",
    "Flats for sale in Peshawar (128)",
    "Flats for sale in Faisalabad (22)",
  ];

  return (
    <div className="bg-white pt-12 pb-16 px-6">
      <h2 className="text-2xl font-semibold mb-6">
        Popular Cities to Buy Properties
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
        {/* Houses Section */}
        <div>
          <h3 className="font-bold mb-2">Houses</h3>
          <ul className="space-y-1 text-blue-700">
            {houses.map((item, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                ↗ {item}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-blue-700 font-medium hover:underline cursor-pointer">
            View all Cities
          </p>
        </div>

        {/* Flats Section */}
        <div>
          <h3 className="font-bold mb-2">Flats and Apartments</h3>
          <ul className="space-y-1 text-blue-700">
            {flats.map((item, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                ↗ {item}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-blue-700 font-medium hover:underline cursor-pointer">
            View all Cities
          </p>
        </div>
      </div>

      {/* Zameen App Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 p-6 rounded-lg shadow">
        <div>
          <h3 className="text-green-600 text-xl font-bold mb-2">
            Get the Zameen App
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Buy and Rent Property faster and better using our app.
          </p>
          <div className="flex space-x-4">
            <Image
              src="/assets/app-store.png"
              alt="App Store"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <Image
              src="/assets/google-play.png"
              alt="Google Play"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-2 text-xs">Scan the QR code to get the app</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/zameen-app-mockup.png"
            alt="Zameen App Preview"
            width={200}
            height={200}
            className="h-48 w-auto"
          />
        </div>
      </div>

      {/* Partner Logo */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h4 className="text-sm font-semibold mb-4">Our Home Partners</h4>
        <Image
          src="/assets/hbfclogo.png"
          alt="HBFC Logo"
          width={160}
          height={60}
          className="h-12 w-auto"
        />
      </div>
    </div>
  );
}
