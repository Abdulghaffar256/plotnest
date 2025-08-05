"use client";

import { useState } from "react";
import AboutUs from "@/components/tool/homeload/Aboutus";
import Faq from "@/components/tool/homeload/Faq";
import UsefulLinks from "@/components/tool/homeload/UsefulLinks";
import RoshanBanner from "@/components/tool/homeload/RoshanBanner";


export default function HomeLoanCalculator() {
  const [price, setPrice] = useState(15000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [loanYears, setLoanYears] = useState(20);
  const [income, setIncome] = useState(150000); // New: Monthly Income
  const [result, setResult] = useState(null);

  const calculate = () => {
    const downPayment = (downPaymentPercent / 100) * price;
    const loanAmount = price - downPayment;
    const interestRate = 0.11;
    const months = loanYears * 12;
    const monthlyRate = interestRate / 12;

    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;

    // Recommendation based on real income input
    const emiPercent = (emi / income) * 100;
    let recommendation = "Average";
    if (emiPercent < 30) recommendation = "Good Investment";
    else if (emiPercent > 50) recommendation = "Risky Investment";

    setResult({
      downPayment,
      loanAmount,
      monthlyInstallment: emi,
      totalPayment,
      totalInterest,
      recommendation,
      emiPercent,
    });
  };

  const resetCalculator = () => setResult(null);

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-white min-h-screen space-y-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-700 mb-2">🏡 Home Loan Calculator</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Explore your options in detail using our home loan calculator to get the best loan package to achieve your dream home.
        </p>
      </div>

      {!result ? (
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-green-100 space-y-8">
          {/* Property Price */}
          <div>
            <label className="block mb-1 font-semibold text-gray-800">🏠 Property Price</label>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>PKR {price.toLocaleString()}</span>
              <span>{(price / 10000000).toFixed(2)} Crore</span>
            </div>
            <input
              type="range"
              min={1000000}
              max={50000000}
              step={100000}
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="w-full accent-green-600"
            />
          </div>

          {/* Down Payment */}
          <div>
            <label className="block mb-1 font-semibold text-gray-800">💰 Down Payment</label>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{downPaymentPercent}%</span>
              <span>{(price * downPaymentPercent / 100 / 100000).toFixed(0)} Lakh</span>
            </div>
            <input
              type="range"
              min={10}
              max={90}
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
              className="w-full accent-green-600"
            />
          </div>

          {/* Loan Period */}
          <div>
            <label className="block mb-1 font-semibold text-gray-800">📅 Loan Period</label>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{loanYears} Years</span>
              <span>{loanYears * 12} Months</span>
            </div>
            <input
              type="range"
              min={5}
              max={30}
              value={loanYears}
              onChange={(e) => setLoanYears(parseInt(e.target.value))}
              className="w-full accent-green-600"
            />
          </div>

          {/* Monthly Income */}
          <div>
            <label className="block mb-1 font-semibold text-gray-800">👤 Monthly Income (PKR)</label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(parseInt(e.target.value))}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              placeholder="Enter your income"
            />
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              onClick={calculate}
              className="bg-green-600 text-white px-8 py-2 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Calculate Loan
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white border border-green-200 p-8 rounded-xl shadow-md animate-fade-in-up">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">📊 Loan Summary</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li><strong>🏠 Property Price:</strong> PKR {price.toLocaleString()}</li>
            <li><strong>💸 Down Payment:</strong> PKR {result.downPayment.toLocaleString()}</li>
            <li><strong>🏦 Loan Amount:</strong> PKR {result.loanAmount.toLocaleString()}</li>
            <li><strong>📆 Monthly Installment:</strong> PKR {result.monthlyInstallment.toFixed(0)}</li>
            <li><strong>💰 Total Payable Amount:</strong> PKR {result.totalPayment.toFixed(0)}</li>
            <li><strong>📈 Total Interest Paid:</strong> PKR {result.totalInterest.toFixed(0)}</li>
            <li className="mt-4">
              <strong>📌 Investment Insight:</strong>{" "}
              <span
                className={`font-semibold ${
                  result.recommendation === "Good Investment"
                    ? "text-green-600"
                    : result.recommendation === "Risky Investment"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {result.recommendation}
              </span>{" "}
              <span className="text-gray-500">({result.emiPercent.toFixed(1)}% of income)</span>
            </li>
          </ul>

         {result.recommendation === "Risky Investment" && (
  <div className="mt-8 p-6 bg-gradient-to-br from-red-50 to-red-100 border border-red-300 rounded-xl shadow-sm animate-pulse-slow relative">
    {/* Alert Icon */}
    <div className="absolute -top-4 left-4 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 9v2m0 4h.01M12 5a7 7 0 110 14a7 7 0 010-14z" />
      </svg>
    </div>

    <div className="pl-12">
      <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ High Risk Detected</h3>
      <p className="text-sm text-red-700 mb-3">
        Your monthly installment exceeds a safe percentage of your income. This could impact your financial stability.
      </p>
      <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
        <li>Increase your <strong>down payment</strong> to reduce the loan amount</li>
        <li>Extend the <strong>loan duration</strong> to lower monthly EMI</li>
        <li>Choose a more affordable <strong>property</strong></li>
        <li>Explore <strong>subsidized loan programs</strong> if available</li>
      </ul>
      <div className="mt-4 text-xs italic text-red-600">
        Tip: Keep EMI under 30% of your monthly income for safer financial planning.
      </div>
    </div>
  </div>
)}

          <div className="mt-6 text-center">
            <button
              onClick={resetCalculator}
              className="mt-4 bg-gray-100 hover:bg-gray-200 text-sm text-gray-800 px-6 py-2 rounded-full transition"
            >
              🔁 Recalculate
            </button>
          </div>
        </div>
      )}

      {/* Extra Sections */}
      <AboutUs />
      <Faq />
      <UsefulLinks />
      <RoshanBanner />

    </div>
  );
}
