import React, { useState } from "react";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "Haircut", // Default service
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked Successfully!");
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      service: "Haircut",
    });
  };

  return (
    <section id="booknow" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Book Your Appointment</h2>
        <p className="text-xl text-gray-600 mb-10">
          Ready for a fresh cut? Fill out the form below to schedule your appointment!
        </p>

        {/* Appointment Booking Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Date Input */}
            <div>
              <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-2">
                Appointment Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Time Input */}
            <div>
              <label htmlFor="time" className="block text-lg font-medium text-gray-700 mb-2">
                Appointment Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label htmlFor="service" className="block text-lg font-medium text-gray-700 mb-2">
                Select Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="Haircut">Haircut</option>
                <option value="Shaving">Shaving</option>
                <option value="Beard Trim">Beard Trim</option>
                <option value="Facial">Facial</option>
                <option value="Hair Wash">Hair Wash</option>
                <option value="Head Massage">Head Massage</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-black rounded-lg font-semibold shadow-md hover:bg-yellow-400 transition-all duration-300"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
