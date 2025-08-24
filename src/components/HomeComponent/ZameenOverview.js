"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaCalculator,
  FaChartLine,
  FaMapMarkedAlt,
  FaRulerCombined,
} from "react-icons/fa";
import {
  MdOutlineTrendingUp,
  MdSearch,
  MdHomeWork,
  MdLocationCity,
} from "react-icons/md";

export const exploreItems = [
  {
    icon: <MdHomeWork />,
    title: "New Projects",
    desc: "The best investment opportunities",
    link: "/projects",
  },
  {
    icon: <FaCalculator />,
    title: "Construction Cost Calculator",
    desc: "Get construction cost estimates",
    link: "/tools/construction-cost-calculator",
  },
  {
    icon: <FaCalculator />,
    title: "Home Loan Calculator",
    desc: "Find affordable loan packages",
    link: "/tools/home-loan-calculator",
  },
  {
    icon: <MdLocationCity />,
    title: "Area Guides",
    desc: "Explore housing societies in Pakistan",
    link: "/area-guides",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Plot Finder",
    desc: "Find plots in any housing society",
    link: "/plotfinder",
  },
  {
    icon: <FaChartLine />,
    title: "Property Index",
    desc: "Track changes in real estate prices",
    link: "/property-index",
  },
  {
    icon: <FaRulerCombined />,
    title: "Area Unit Converter",
    desc: "Convert any area unit instantly",
    link: "/tools/area-unit-converter",
  },
  {
    icon: <MdOutlineTrendingUp />,
    title: "Property Trends",
    desc: "Find popular areas to buy property",
    link: "/blog",
  },
];

const agencies = [
  { name: "Haram Real Estate & Builders", city: "Lahore", logo: "/placeholder.png" },
  { name: "Chishti Estate", city: "Lahore", logo: "/placeholder.png" },
  { name: "Buraq Associates", city: "Lahore", logo: "/placeholder.png" },
  { name: "Chawla Estate", city: "Lahore", logo: "/placeholder.png" },
  { name: "Property Manager", city: "Lahore", logo: "/placeholder.png" },
  { name: "Hafiz Brothers Estate", city: "Lahore", logo: "/placeholder.png" },
  { name: "Bravo Estate", city: "Lahore", logo: "/placeholder.png" },
  { name: "Safa Real Estate", city: "Lahore", logo: "/placeholder.png" },
];

const projects = [
  {
    title: "Madison Square Mall, Lahore",
    slug: "madison-square-lahore",
    price: "PKR 1.13 Crore to 7.26 Crore",
    location: "Main Boulevard, Lahore",
    type: "Shops",
    size: "110 sqft to 718 sqft",
    badge: "HOT",
  },
  {
    title: "Warda Hamna Residences, Islamabad",
    slug: "warda-hamna-islamabad",
    price: "PKR 4.25 Crore to 5.25 Crore",
    location: "G-11 Markaz, Islamabad",
    type: "Flats",
    size: "1660 sqft to 1960 sqft",
    badge: "HOT",
  },
  {
    title: "Tower 21, Lahore",
    slug: "tower-21-lahore",
    price: "PKR 82.1 Lakh to 37.49 Crore",
    location: "Gulberg 3, Lahore",
    type: "Flats, Commercial",
    size: "809 sqft to 8914 sqft",
    badge: "HOT",
  },
  {
    title: "Downtown, Multan",
    slug: "downtown-multan",
    price: "PKR 35 Lakh to 2.5 Crore",
    location: "DHA, Multan",
    type: "Flats, Shops",
    size: "500 sqft",
    badge: "",
  },
];

export default function ZameenOverview() {
  return (
    <div className="space-y-12 px-6 py-12 bg-white">
      {/* Explore More */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Explore more on Zameen</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {exploreItems.map((item, idx) => (
            <Link href={item.link} key={idx} passHref>
              <div
                className="flex items-start p-4 bg-gray-100 rounded-md hover:bg-green-100 transition cursor-pointer"
                role="link"
                tabIndex={0}
              >
                <div className="text-2xl text-green-500 mr-3">{item.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Searches */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Recent Searches</h2>
        <div className="bg-gray-100 p-4 rounded-md inline-block text-sm text-gray-700">
          <MdSearch className="inline mr-2 text-green-500" />
          Plots for Sale{" "}
          <span className="ml-2 text-gray-500 text-xs">All areas</span>
          <div className="text-xs mt-1 text-gray-400">
            DHA Defence, Any price
          </div>
        </div>
      </section>

      {/* Titanium Agencies */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Titanium Agencies</h2>
        <div className="flex overflow-x-auto gap-4 pb-2">
          {agencies.map((agency, idx) => (
            <div
              key={idx}
              className="min-w-[150px] flex-shrink-0 bg-white border shadow-sm p-4 rounded-md text-center"
            >
              <Image
                src={agency.logo}
                alt={`${agency.name} Logo`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover mx-auto mb-2"
              />
              <h3 className="text-sm font-medium truncate">{agency.name}</h3>
              <p className="text-xs text-gray-500">{agency.city}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zameen Projects */}
      <section className="bg-blue-50 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Zameen Projects</h2>
          <Link href="/blog" className="text-sm text-green-600 hover:underline">
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {projects.map((project, idx) => (
            <Link href={`/blog/${project.slug}`} key={idx}>
              <div className="bg-white p-4 rounded-md shadow-sm cursor-pointer hover:shadow-md transition">
                <div className="h-32 bg-gray-200 mb-2 relative flex items-center justify-center text-gray-400 text-xs">
                  Image Placeholder
                  {project.badge && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      HOT
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-semibold">{project.price}</h3>
                <p className="text-xs text-gray-500">{project.title}</p>
                <p className="text-xs text-gray-400">{project.location}</p>
                <div className="text-xs text-gray-500 mt-2">
                  <p>🏢 {project.type}</p>
                  <p>📐 {project.size}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
