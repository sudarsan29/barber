import React, { useState } from "react";

const faqs = [
  {
    category: "General",
    question: "Do I need an appointment or can I walk in?",
    answer:
      "While walk-ins are welcome, we recommend making an appointment to ensure availability and minimize wait time.",
  },
  {
    category: "General",
    question: "How long does a typical haircut take?",
    answer: "A standard haircut usually takes around 30 minutes.",
  },
  {
    category: "Pricing",
    question: "What form of payment do you accept?",
    answer: "We accept cash, UPI, credit/debit cards, and most major payment apps.",
  },
  {
    category: "Support",
    question: "Do you offer any loyalty programs or discounts?",
    answer:
      "Yes! We have monthly memberships, referral discounts, and loyalty punch cards for frequent visitors.",
  },
  {
    category: "Services",
    question: "What hair products do you use and sell?",
    answer:
      "We use premium salon-grade products. We also sell select grooming products at the shop.",
  },
];

const categories = ["All", "General", "Services", "Pricing", "Support"];

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16  bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-4">Common Questions</h2>
        <p className="text-center text-gray-300 text-lg mb-8">
          Answers to common questions about our barbershop services.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap text-grey-300 gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full bg-grey-300 text-grey-300 text-sm font-semibold border transition duration-300 ${
                activeCategory === cat
                  ? "bg-yellow-500 text-grey-300"
                  : "border-yellow-500 text-grey hover:bg-yellow-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-xl p-4 border border-yellow-500 transition duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
              >
                {faq.question}
                <span className="text-yellow-500 text-xl">
                  {openQuestionIndex === index ? "−" : "+"}
                </span>
              </button>
              {openQuestionIndex === index && (
                <p className="mt-3 text-gray-700 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
