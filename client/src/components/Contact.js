import React, { useState, useRef } from "react";
import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import { Alert, AlertDescription } from "./ui/alert";
import { Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isError, setIsError] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
  
    try {
      await emailjs.sendForm(
        'service_b2bid8p', // Your Service ID from the screenshot
        'template_4txywfm', // You need to create a template in EmailJS
        formRef.current, // Reference to the form
        '0g4-XhSrtkVk_WbKh' // Your public key (should match the one in App.js)
      );
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setShowNotification(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsError(true);
      setShowNotification(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <div id="contact" className="bg-snow py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        {showNotification && (
          <div className="absolute top-4 right-4 left-4 md:left-auto md:w-96 transition-all duration-300 ease-in-out transform translate-y-0">
            <Alert className={`${isError ? "bg-red-600" : "bg-moss"} text-snow border-none shadow-lg`}>
              <AlertDescription>
                {isLoading ? "Sending your message..." : 
                 isError ? "Failed to send message. Please try again." : 
                 "Message sent successfully!"}
              </AlertDescription>
            </Alert>
          </div>
        )}

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-cal-poly">
            Let's Collaborate
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            ref={formRef}
            className="bg-vanilla rounded-xl p-6 shadow-2xl"
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-cal-poly mb-2">Name</label>
                <input
                  type="text"
                  name="user_name" // Important: Add name attributes for EmailJS
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-snow border border-moss rounded-lg focus:outline-none focus:ring-2 focus:ring-cal-poly text-cal-poly transition-all duration-200"
                  placeholder="Your Name"
                  disabled={isLoading}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cal-poly mb-2">Email</label>
                <input
                  type="email"
                  name="user_email" // Important: Add name attributes for EmailJS
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-snow border border-moss rounded-lg focus:outline-none focus:ring-2 focus:ring-cal-poly text-cal-poly transition-all duration-200"
                  placeholder="Your Email"
                  disabled={isLoading}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-cal-poly mb-2">Message</label>
                <textarea
                  name="message" // Important: Add name attributes for EmailJS
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 bg-snow border border-moss rounded-lg focus:outline-none focus:ring-2 focus:ring-cal-poly text-cal-poly transition-all duration-200"
                  placeholder="Your Message"
                  disabled={isLoading}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-moss text-snow rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:bg-cal-poly disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="bg-cal-poly rounded-xl p-6 shadow-2xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-vanilla">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-moss" />
                    <span className="text-snow">aleaxmuiruri@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-moss" />
                    <span className="text-snow">+254719571601</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-vanilla">
                  Working Hours
                </h3>
                <div className="space-y-2 text-snow">
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-moss" />
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