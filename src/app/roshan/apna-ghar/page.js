"use client";
import Image from "next/image";
import Link from "next/link";

export default function RoshanDetails() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
 {/* Header with Background */}
<div className="relative bg-cover bg-center h-[300px] md:h-[400px] rounded-xl shadow-md overflow-hidden mb-16" style={{ backgroundImage: "url('/images/roshan-header-bg.jpg')" }}>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-green-800/60 to-green-600/50 backdrop-blur-sm"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Roshan Digital Account</h1>
    <p className="text-white text-sm md:text-base mt-3 max-w-2xl drop-shadow-sm">
      SBP Initiative for Digital Onboarding of Overseas Pakistanis. Explore seamless investment, banking, and financial opportunities—remotely.
    </p>
    <div className="mt-6">
      <a
        href="#lifestyle-banking"
        className="inline-block bg-white text-green-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-green-50 transition"
      >
      </a>
    </div>
  </div>
</div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 p-5 rounded shadow-sm">
          <Image src="/images/roshan-apna-ghar.png" alt="Roshan Apna Ghar" width={60} height={60} />
          <h3 className="text-md font-semibold mt-4">Roshan Apna Ghar</h3>
          <p className="text-sm text-gray-600 mt-2">
            Enables NRPs to build or buy homes in Pakistan.
          </p>
          <Link href="/roshan/apna-ghar">
            <span className="text-green-600 text-sm mt-2 inline-block cursor-pointer">Learn More →</span>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 p-5 rounded shadow-sm">
          <Image src="/images/roshan-apni-car.png" alt="Roshan Apni Car" width={60} height={60} />
          <h3 className="text-md font-semibold mt-4">Roshan Apni Car</h3>
          <p className="text-sm text-gray-600 mt-2">
            Car financing facility for NRPs for their loved ones in Pakistan.
          </p>
          <Link href="/roshan/apni-car">
            <span className="text-green-600 text-sm mt-2 inline-block cursor-pointer">Learn More →</span>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-200 p-5 rounded shadow-sm">
          <Image src="/images/roshan-samaji-khidmat.png" alt="Roshan Samaji Khidmat" width={60} height={60} />
          <h3 className="text-md font-semibold mt-4">Roshan Samaji Khidmat</h3>
          <p className="text-sm text-gray-600 mt-2">
            Donate to registered charities in Pakistan with ease.
          </p>
          <Link href="/roshan/samaji-khidmat">
            <span className="text-green-600 text-sm mt-2 inline-block cursor-pointer">Learn More →</span>
          </Link>
        </div>

        {/* Card 4 */}
        <div className="bg-white border border-gray-200 p-5 rounded shadow-sm">
          <Image src="/images/naya-pakistan.png" alt="Naya Pakistan" width={60} height={60} />
          <h3 className="text-md font-semibold mt-4">Naya Pakistan</h3>
          <p className="text-sm text-gray-600 mt-2">
            Invest in Naya Pakistan Certificates (NPCs) in multiple currencies.
          </p>
          <Link href="/roshan/naya-pakistan">
            <span className="text-green-600 text-sm mt-2 inline-block cursor-pointer">Learn More →</span>
          </Link>
        </div>
      </div>
{/* Lifestyle Banking Section */}
<div className="text-center mb-16">
  <h2 className="text-2xl font-bold text-green-700 mb-4">Lifestyle Banking</h2>
  <p className="text-gray-600 max-w-3xl mx-auto text-sm">
    The Roshan Digital Account fully integrates the Pakistani diaspora with Pakistan’s banking and payment system by:
  </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
  {[
    {
      label: "Digital Access",
      desc: "Digital onboarding, bill payments, fund transfers.",
      icon: "/icons/digital-access.png",
    },
    {
      label: "Non-Resident Facilitation",
      desc: "Seamless service for NRPs & POC holders.",
      icon: "/icons/non-resident.png",
    },
    {
      label: "Roshan Samaji Khidmat",
      desc: "Contribute to social causes directly from abroad.",
      icon: "/icons/social-service.png",
    },
    {
      label: "Investment Opportunities",
      desc: "Invest in Pakistani markets and real estate.",
      icon: "/icons/investment.png",
    },
    {
      label: "Naya Pakistan Certificates",
      desc: "Earn high returns in PKR, USD, GBP, EUR.",
      icon: "/icons/certificates.png",
    },
    {
      label: "Currency Facilitation",
      desc: "Easy repatriation and currency conversion.",
      icon: "/icons/currency.png",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-green-50 hover:bg-green-100 transition-all duration-200 border border-green-200 p-6 rounded-lg shadow-md text-center"
    >
      <div className="flex justify-center mb-4">
        <Image src={item.icon} alt={item.label} width={48} height={48} />
      </div>
      <h3 className="text-md font-semibold text-green-800 mb-2">{item.label}</h3>
      <p className="text-sm text-gray-700">{item.desc}</p>
    </div>
  ))}
</div>


{/* New Era Section */}
<div className="flex flex-col items-center text-center mb-20 px-4 py-10 border border-green-200 rounded-lg bg-white shadow-sm">
  <div className="bg-green-50 p-4 rounded-full mb-6">
    <Image
      src="/images/roshan-new-era.png"
      alt="New Era of Banking"
      width={60}
      height={60}
      className="object-contain"
    />
  </div>

<h2 className="text-2xl font-semibold text-gray-800 mb-3 animate-float">
  A New Era of Banking in Pakistan
</h2>

  <p className="text-gray-600 max-w-4xl text-sm leading-relaxed">
    Roshan Digital Account is a major initiative of State Bank of Pakistan, in collaboration with commercial banks operating in Pakistan. It has successfully provided innovative banking solutions for millions of Non-Resident Pakistanis (NRPs), including Roshan Pakistan Origin Card (POC) holders, enabling them to undertake banking, payment, and investment activities in Pakistan.
  </p>
</div>


     {/* Eligibility */}
<div className="bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl shadow-md p-10 max-w-4xl mx-auto text-center">
  <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center justify-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4 -4M12 2a10 10 0 100 20a10 10 0 000-20z" />
    </svg>
    Eligibility
  </h2>
  <ul className="text-left text-gray-700 space-y-4 max-w-md mx-auto">
    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✔</span>
      Non-Resident Pakistanis with valid <strong>NICOP / POC / CNIC</strong>
    </li>
    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✔</span>
      <strong>Self-employed</strong>, <strong>salaried</strong>, or <strong>students</strong> abroad
    </li>
    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">✔</span>
      <strong>Companies</strong> or <strong>entities</strong> can open RDAs
    </li>
  </ul>
</div>

    </div>
  );
}
