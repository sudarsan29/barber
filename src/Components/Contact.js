import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const newErrors = {};
    
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!message) newErrors.message = 'Message is required';
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is not valid';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-16  bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6">Contact Us</h2>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-8 rounded-xl border-2 border-yellow-400 bg-black text-yellow-400 hover:border-black transition-all duration-300 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4">
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 border border-yellow-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              whileFocus={{ scale: 1.02 }}
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 border border-yellow-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              whileFocus={{ scale: 1.02 }}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 border border-yellow-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              whileFocus={{ scale: 1.02 }}
            />
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-black hover:text-yellow-400 transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
