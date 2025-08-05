"use client";
import { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      question: "What is a home loan calculator?",
      answer:
        "A home loan calculator helps you estimate your monthly installments based on the property price, down payment, interest rate, and loan tenure.",
    },
    {
      question: "Is the EMI shown accurate?",
      answer:
        "The EMI is an estimate. Actual EMI may vary depending on your bank's interest rate and other terms.",
    },
    {
      question: "Can I adjust the loan tenure?",
      answer:
        "Yes! Use the slider to set your desired loan tenure between 5 and 30 years.",
    },
    {
      question: "Is this tool free to use?",
      answer:
        "Absolutely! This calculator is 100% free to use with no login or personal information required.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 px-6 mt-20 rounded-lg shadow max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-3 cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-green-800">
                {faq.question}
              </h3>
              <span className="text-green-700 text-xl transform transition-transform duration-300">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-700 mt-2 transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
