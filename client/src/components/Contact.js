import React from "react";
import { useState } from "react";
import { FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with your desired functionality
    console.log("Form submitted with the following data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  const handleSendEmail = () => {
    const companyEmail = "aleaxmuiruri@gmail.com";
    const subject = '';
    const body = ` Company Email: ${companyEmail}.\n\nMy email: ${email}`;
  
    const mailtoLink = `mailto:${companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Open the default email client with a new email draft
    const emailWindow = window.open(mailtoLink, "_blank");
  
    // If the window wasn't blocked by a popup blocker, focus on it
    if (emailWindow && emailWindow.focus) {
      emailWindow.focus();
    } else {
      // Handle the case where the popup was blocked
      console.error("Unable to open email window. Please check your browser settings.");
      // You can provide alternative instructions or a fallback solution here
    }
  };
  

  return (
    <div id="contact" className="max-w-screen-md mx-auto p-6">
    <h1 className="text-4xl font-bold mb-6 text-left text-gray-800">Let's Collaborate</h1>
  
    <form
      className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 grid grid-cols-1 gap-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your Name"
        />
      </div>
  
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your Email"
        />
      </div>
  
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          className="p-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your Message"
        ></textarea>
      </div>
  
      <button
        type="submit"
        onClick={handleSendEmail}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Submit
      </button>
    </form>
  
    <div className="mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact</h1>
      <div className="flex flex-col items-center space-y-4 animate-pulse">
        <div className="flex items-center">
          <FaEnvelope className="text-xl mr-2 text-blue-500" />
          <span className="text-gray-700">Email: aleaxmuiruri@gmail.com</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-xl mr-2 text-blue-500" />
          <span className="text-gray-700">Telephone: +254719571601</span>
        </div>
      </div>
      <div className="text-gray-700 text-center mt-6">
        <h2 className="text-xl font-bold mb-2">Working Hours</h2>
        <p className="mb-2">Monday - Friday: 9 am - 5 pm</p>
        <p>Weekends: 10 am - 1 pm</p>
      </div>
    </div>
  </div>
  );
}

export default Contact;
