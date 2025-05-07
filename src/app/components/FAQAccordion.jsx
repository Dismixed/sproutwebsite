"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Is Sprout really free?",
    answer: "Sprout's core budgeting chat will always have a free tier for students."
  },
  {
    question: "When will Sprout launch?",
    answer: "We're sprouting soon—alpha invites roll out next semester. Join the waitlist to be first."
  },
  {
    question: "What banks does Sprout support?",
    answer: "We use bank-level secure connections (Stripe) to link most U.S. institutions, plus planning for debit cards and student loan servicers."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
          >
            <button
              className="w-full px-6 py-4 text-left font-medium flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="ml-2">
                {openIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-250 ${
                openIndex === index ? "max-h-40 py-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 