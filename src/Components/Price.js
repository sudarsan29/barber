import React from "react";

const pricingPlans = [
  {
    title: "Classic Services",
    price: "$25",
    frequency: "/mo",
    features: [
      "Men's Haircut",
      "Kids Haircut (12 & under)",
      "Senior Haircut (65+)",
      "Military/First Responder Cut",
      "Basic Beard Trim",
      "Neck & Line Cleanup (between cuts)",
    ],
    cta: "Book Now",
  },
  {
    title: "Premium Services",
    price: "$35",
    frequency: "/mo",
    features: [
      "Haircut & Beard Combo",
      "Hot Towel Shave",
      "Full Beard Shaping & Design",
      "Color Camo (Gray Blending)",
      "Hair & Scalp Treatment",
      "Head Shave with Hot Towel",
    ],
    cta: "Book Now",
  },
  {
    title: "Packages",
    price: "$50",
    frequency: "/mo",
    features: [
      "The Works (Cut, Shave, Treatment)",
      "Father & Son Combo",
      "Groom's Package",
      "Monthly Membership (2 cuts/mo)",
      "First-Time Client Special",
      "Loyalty Program",
    ],
    cta: "Inquire",
  },
];

const Price = () => {
  return (
    <section id="pricing" className="py-20  bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">
          Quality Barbering at Fair Prices
        </h2>
        <p className="text-xl text-grey-400 mb-12">
          Choose from our range of professional barbering services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-black text-yellow-400 border border-yellow-500 rounded-2xl shadow-md p-6 transition duration-300 hover:scale-105 hover:shadow-yellow-400/30"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <div className="text-4xl font-extrabold mb-4">
                {plan.price}
                <span className="text-xl font-medium text-yellow-300">
                  {plan.frequency}
                </span>
              </div>
              <ul className="text-left mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-yellow-500 font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#booknow" // Navigate to Book Now section
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition duration-300"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
