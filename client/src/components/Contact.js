import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendEmail();
  };

  const handleSendEmail = () => {
    const companyEmail = "aleaxmuiruri@gmail.com";
    const subject = `Contact from ${name}`;
    const body = `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Collaborate
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            className="bg-gray-800 rounded-xl p-6 shadow-2xl"
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg font-bold transition-transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-blue-400" />
                    <span className="text-gray-300">aleaxmuiruri@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-blue-400" />
                    <span className="text-gray-300">+254719571601</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Working Hours
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-blue-400" />
                    <span>Monday - Friday: 9 am - 5 pm</span>
                  </div>
                  <div className="pl-7">Weekends: 10 am - 1 pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;