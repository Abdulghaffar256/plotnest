'use client';
import { useState } from 'react';
import { FaHome, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const data = [
  {
    icon: <FaHome className="text-green-500 text-2xl" />,
    title: 'Homes',
    tabs: ['Popular', 'Type', 'Area Size'],
    items: [
      { label: '5 Marla', type: 'Houses', category: 'Area Size' },
      { label: '10 Marla', type: 'Houses', category: 'Area Size' },
      { label: '3 Marla', type: 'Houses', category: 'Area Size' },
      { label: 'New', type: 'Houses', category: 'Type' },
      { label: 'Low Price', type: 'All Homes', category: 'Popular' },
      { label: 'Small', type: 'Houses', category: 'Popular' },
    ],
  },
  {
    icon: <FaMapMarkerAlt className="text-green-500 text-2xl" />,
    title: 'Plots',
    tabs: ['Popular', 'Type', 'Area Size'],
    items: [
      { label: '5 Marla', type: 'Residential Plots', category: 'Area Size' },
      { label: '10 Marla', type: 'Residential Plots', category: 'Area Size' },
      { label: '7 Marla', type: 'Residential Plots', category: 'Area Size' },
      { label: '3 Marla', type: 'Residential Plots', category: 'Area Size' },
      { label: 'On Instalments', type: 'Residential Plots', category: 'Type' },
      { label: 'On Instalments', type: 'Commercial Plots', category: 'Type' },
    ],
  },
  {
    icon: <FaBuilding className="text-green-500 text-2xl" />,
    title: 'Commercial',
    tabs: ['Popular', 'Type', 'Area Size'],
    items: [
      { label: 'Small', type: 'Offices', category: 'Area Size' },
      { label: 'New', type: 'Offices', category: 'Type' },
      { label: 'On Instalments', type: 'Shops', category: 'Type' },
      { label: 'Small', type: 'Shops', category: 'Area Size' },
      { label: 'New', type: 'Shops', category: 'Type' },
      { label: 'Running', type: 'Shops', category: 'Popular' },
    ],
  },
];

const BrowseProperties = () => {
  const [activeTabs, setActiveTabs] = useState(
    data.map(() => 'Popular') // default tab for each category
  );

  const handleTabClick = (categoryIndex, tabName) => {
    setActiveTabs((prevTabs) => {
      const updated = [...prevTabs];
      updated[categoryIndex] = tabName;
      return updated;
    });
  };

  return (
    <section className="px-6 py-12 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Browse Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((category, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-lg font-medium">{category.title}</h3>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 text-sm text-green-600 font-semibold border-b pb-2 mb-4">
              {category.tabs.map((tab, tabIdx) => (
                <span
                  key={tabIdx}
                  onClick={() => handleTabClick(idx, tab)}
                  className={`cursor-pointer ${
                    activeTabs[idx] === tab
                      ? 'border-b-2 border-green-500 pb-1'
                      : ''
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>

            {/* Filtered Items */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              {category.items
                .filter((item) => item.category === activeTabs[idx])
                .map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-gray-100 hover:bg-green-100 px-3 py-2 rounded-md cursor-pointer"
                  >
                    <div className="font-medium">{item.label}</div>
                    <div className="text-gray-500 text-xs">{item.type}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseProperties;
