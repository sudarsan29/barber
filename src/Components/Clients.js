import React from 'react';

const testimonials = [
  {
    name: "Mike Johnson",
    feedback:
      "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!",
    rating: 5,
  },
  {
    name: "David Martinez",
    feedback:
      "As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
    rating: 5,
  },
  {
    name: "Chris Taylor",
    feedback:
      "The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
    rating: 5,
  },
];

const Clients = () => {
  return (
    <section id="testimonials" className="py-16 px-6 md:px-20 bg-opacity-20  bg-gradient-to-br from-black via-gray-900 to-black">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 text-center mb-10">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-black dark:text-white transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <p className="mb-4 italic">"{testimonial.feedback}"</p>
            <div className="flex items-center justify-between mt-4">
              <h4 className="font-semibold">{testimonial.name}</h4>
              <div className="text-yellow-500">
                {'★'.repeat(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
