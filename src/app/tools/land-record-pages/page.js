"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RecordModal from "./RecordModal";
import PunjabRecords from "./PunjabRecords";
import SindhRecords from "./SindhRecords";
import KPKRecords from "./KPKRecords";

export default function LandRecordsMainPage() {
  const [showModal, setShowModal] = useState(false);
  const [province, setProvince] = useState("");

  const openModal = (prov) => {
    setProvince(prov);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-green-50">

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="relative h-72 rounded-lg overflow-hidden shadow mb-10">
          <Image
            src="/land-records-banner.jpg"
            alt="Pakistan Land Records"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              📜 Pakistan Land Record Portal
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-12 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">📖 About Land Records</h2>
          <p className="text-gray-700 mb-3">
            Land records are official legal documents used to define the ownership, boundaries,
            and value of land across Pakistan. They play a crucial role in property transactions,
            disputes, inheritance, and taxation.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-2">
            <li>🏛️ <strong>Punjab:</strong> Punjab Land Records Authority (PLRA)</li>
            <li>🏛️ <strong>Sindh:</strong> Board of Revenue Sindh</li>
            <li>🏛️ <strong>KPK:</strong> Board of Revenue Khyber Pakhtunkhwa</li>
          </ul>
          <p className="text-xs text-gray-500 italic">
            ⚠️ This is a demo platform using mock data for testing and educational use only.
          </p>
        </section>

        {/* Province Record Access */}
        <section id="provinces" className="mb-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">🌍 Access Provincial Land Records</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { name: "Punjab", icon: "📍", desc: "View land ownership records for Punjab region.", href: "/punjab-records" },
              { name: "Sindh", icon: "🌍", desc: "Explore property documents from Sindh province.", href: "/sindh-records" },
              { name: "KPK", icon: "🏞️", desc: "Check land data for Khyber Pakhtunkhwa region.", href: "/kpk-records" },
            ].map((prov) => (
              <div key={prov.name} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2">{prov.icon} {prov.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{prov.desc}</p>
                <button
                  onClick={() => openModal(prov.name)}
                  className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition text-sm"
                >
                  Open Records
                </button>
                <div className="mt-2 text-xs text-green-700">
                  <Link href={prov.href} className="underline">View Full Page →</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section id="contact" className="bg-green-100 rounded-lg p-8 text-gray-800 shadow-md scroll-mt-24">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
            👥 About Us
          </h2>

          <p className="text-sm mb-4">
            We aim to provide a simple, user-friendly portal for accessing land ownership records across Pakistan.
            Whether you're a buyer, landowner, or legal advisor — this platform helps you start your search with confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {[
              { name: "Ahsan Khan", role: "Founder & Backend Developer", img: "/images/user1.jpg" },
              { name: "Sameen Fatima", role: "UI/UX & Frontend Developer", img: "/images/user2.jpg" },
              { name: "Ali Raza", role: "QA & Support", img: "/images/user3.jpg" },
            ].map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center">
                <Image
                  src={person.img}
                  alt={person.name}
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-green-400 shadow-sm hover:scale-105 transition-transform"
                />
                <h3 className="text-md font-semibold mt-2 text-green-800">{person.name}</h3>
                <p className="text-xs text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "🔍 Search Land Records", desc: "Quickly find land ownership details using district and CNIC filters." },
              { title: "🧾 Generate Reports", desc: "Download mock reports for educational reference or case study purposes." },
              { title: "📊 Visual Insights", desc: "Interactive maps and dashboards for a better understanding of property trends." },
              { title: "🔒 Privacy Focused", desc: "No real data is stored or processed — this is a mock educational project." },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-4 rounded-md shadow-inner">
                <h4 className="font-semibold text-green-600 mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-600 italic mt-6">
            🚧 Developed for educational use. All data is mock/test only.
          </p>
        </section>

        {/* Modal for Records */}
        <RecordModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={`${province} Land Records`}
        >
          {province === "Punjab" && <PunjabRecords />}
          {province === "Sindh" && <SindhRecords />}
          {province === "KPK" && <KPKRecords />}
        </RecordModal>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center text-sm py-4 mt-12 rounded-t-lg">
        <p>© {new Date().getFullYear()} Pakistan Land Record Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}
