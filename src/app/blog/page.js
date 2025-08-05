'use client';

import Link from "next/link";
import BlogCard from "@/components/Blog/blogcard";
import Image from "next/image";

const featuredPost = {
  title: "Own a Piece of Lahore’s Defining Landmark – Zameen Vault",
  slug: "zameen-vault-lahore",
  image: "/zameen-vault.jpg",
  category: "Commercial",
  author: "Zameen Blog",
  date: "July 24, 2025",
};

const blogPosts = [
  {
    title: "Live the View – 360 The Residences Brings Luxury to Main Murree Road",
    slug: "360-residences-murree",
    image: "/360.jpg",
    category: "Property",
    author: "Zameen Team",
    date: "July 22, 2025",
  },
  {
    title: "Oasis Park Residence: A New Standard of Gated Living in Karachi",
    slug: "oasis-park-karachi",
    image: "/oasis.jpg",
    category: "Housing",
    author: "Zameen Team",
    date: "July 20, 2025",
  },
  {
    title: "Real Estate with Real Returns: Tower 21 in Gulberg, Lahore",
    slug: "tower-21-gulberg",
    image: "/tower21.jpg",
    category: "Investment",
    author: "Zameen Blog",
    date: "July 18, 2025",
  },
  {
    title: "Zameen.com Brings the Biggest Property Showcase to Multan",
    slug: "multan-showcase",
    image: "/multan.jpg",
    category: "Event",
    author: "Zameen Team",
    date: "July 17, 2025",
  },
  {
    title: "Zameen Developments Brings Pakistan’s Future-Ready Projects to Karachi",
    slug: "zameen-karachi-projects",
    image: "/karachi-projects.jpg",
    category: "Projects",
    author: "Zameen",
    date: "July 15, 2025",
  },
  {
    title: "Invest Smarter: Islamabad’s Top Property Showcase at Marriott",
    slug: "islamabad-showcase-marriott",
    image: "/islamabad-show.jpg",
    category: "Event",
    author: "Zameen News",
    date: "July 14, 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Featured Blog */}
      <div className="mb-10">
        <Link href={`/blog/${featuredPost.slug}`}>
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
              <span className="text-white text-xs uppercase mb-2">{featuredPost.category}</span>
              <h1 className="text-white text-2xl md:text-4xl font-bold">{featuredPost.title}</h1>
              <p className="text-gray-300 text-sm mt-1">
                {featuredPost.author} | {featuredPost.date}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar on Left */}
        <div className="space-y-6 md:col-span-1">
          {/* Newsletter */}
          <div className="bg-yellow-400 p-4 rounded-md shadow-md text-center">
            <h3 className="font-bold text-lg mb-2">NEWS LETTER</h3>
            <p className="text-sm mb-3">Subscribe For Daily Blog Alert</p>
            <input
              type="text"
              placeholder="Name"
              className="w-full mb-2 p-2 rounded text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-2 rounded text-black"
            />
            <button className="w-full bg-black text-white py-2 rounded">
              SUBSCRIBE
            </button>
          </div>

    {/* Instagram Box */}
<div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center rounded-md p-6">
  <h3 className="text-xl font-bold mb-2">Instagram</h3>
  <Link href="https://www.instagram.com" target="_blank" className="bg-white text-pink-600 px-4 py-2 rounded-md font-semibold text-sm hover:bg-pink-100 transition">
    Follow Us
  </Link>
</div>

{/* Facebook Box */}
<div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center rounded-md p-6">
  <h3 className="text-xl font-bold mb-2">Facebook</h3>
  <Link href="https://www.facebook.com" target="_blank" className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold text-sm hover:bg-blue-100 transition">
    Like Page
  </Link>
</div>

{/* Twitter Box */}
<div className="bg-gradient-to-r from-sky-400 to-sky-600 text-white text-center rounded-md p-6">
  <h3 className="text-xl font-bold mb-2">Twitter</h3>
  <Link href="https://www.twitter.com" target="_blank" className="bg-white text-sky-500 px-4 py-2 rounded-md font-semibold text-sm hover:bg-sky-100 transition">
    Follow Us
  </Link>
</div>

{/* LinkedIn Box */}
<div className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white text-center rounded-md p-6">
  <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
  <Link href="https://www.linkedin.com" target="_blank" className="bg-white text-blue-700 px-4 py-2 rounded-md font-semibold text-sm hover:bg-blue-100 transition">
    Connect
  </Link>
</div>

{/* YouTube Box */}
<div className="bg-gradient-to-r from-red-600 to-red-800 text-white text-center rounded-md p-6">
  <h3 className="text-xl font-bold mb-2">YouTube</h3>
  <Link href="https://www.youtube.com" target="_blank" className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold text-sm hover:bg-red-100 transition">
    Subscribe
  </Link>
</div>

        </div>
        {/* Blog Cards */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={i} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
