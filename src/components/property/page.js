'use client';
import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

export default function PropertyTrends() {
  const [activeTab, setActiveTab] = useState('Buy');
  const [city, setCity] = useState('Lahore');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Houses');
  const [areaSize, setAreaSize] = useState('');

  return (
    <section className="bg-gradient-to-r from-[#e6f4ed] to-[#f7f7f7] px-4 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Property Price Trends and Index by Zameen
        </h2>
        <p className="text-gray-600 mt-2">
          Explore the latest price trends and index across various cities and localities in Pakistan
        </p>

        {/* Buy / Rent Toggle */}
        <div className="mt-4 inline-flex items-center bg-white shadow-md rounded-full overflow-hidden">
          {['Buy', 'Rent'].map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 font-medium text-sm ${
                activeTab === tab
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Row */}
      <div className="bg-white shadow-md rounded-xl mt-8 p-6 grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto items-end">
        {/* City */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
          <button className="w-full text-left border rounded-md px-3 py-2 text-green-600 font-medium flex items-center justify-between">
            {city} <ChevronDown size={16} />
          </button>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Locations</label>
          <button className="w-full text-left border rounded-md px-3 py-2 text-gray-400 flex items-center justify-between">
            Select Location <ChevronDown size={16} />
          </button>
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Property Type</label>
          <button className="w-full text-left border rounded-md px-3 py-2 text-green-600 font-medium flex items-center justify-between">
            {type} <ChevronDown size={16} />
          </button>
        </div>

        {/* Area Size */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Area Size</label>
          <button className="w-full text-left border rounded-md px-3 py-2 text-gray-400 flex items-center justify-between">
            Select Area Size <ChevronDown size={16} />
          </button>
        </div>

        {/* View Button */}
        <div>
          <button className="bg-green-500 hover:bg-green-600 w-full text-white font-semibold py-2 rounded-md text-sm">
            View
          </button>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Recently Viewed Price Trends</h3>
        <div className="bg-white shadow-sm border rounded-md px-4 py-3 text-sm text-gray-700">
          <div className="font-medium">7 Marla Houses for Rent</div>
          <div className="text-gray-500 flex items-center gap-1 mt-1">
            <MapPin size={14} /> Lahore
          </div>
        </div>
      </div>
    </section>
  );
}
