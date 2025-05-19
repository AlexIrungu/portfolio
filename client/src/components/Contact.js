import React, { useState, useRef } from "react";
import { PhoneIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";
import { Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
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
        'service_b2bid8p',
        'template_4txywfm',
        formRef.current,
        '0g4-XhSrtkVk_WbKh'
      );
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setShowNotification(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsError(true);
      setShowNotification(true);
    } finally {
      setIsLoading(false);
      setTimeout(() => setShowNotification(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-snow relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute left-0 top-0 w-1/3 h-64 bg-moss/10 rounded-r-full blur-3xl z-0"></div>
      <div className="absolute right-0 bottom-0 w-1/3 h-64 bg-cal-poly/10 rounded-l-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {showNotification && (
          <div className="fixed top-6 right-6 left-6 md:left-auto md:w-96 transition-all duration-300 ease-in-out transform">
            <Alert className={`${isError ? "bg-red-600" : "bg-moss"} text-snow border-none shadow-xl rounded-lg`}>
              <AlertDescription className="flex items-center text-sm font-medium">
                {isLoading ? "Sending your message..." : 
                 isError ? "Failed to send message. Please try again." : 
                 "Message sent successfully!"}
              </AlertDescription>
            </Alert>
          </div>
        )}

        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-moss/20 rounded-full text-sm font-medium text-moss inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cal-poly">
            Let's Work Together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-moss/10 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-cal-poly mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-moss/10 rounded-full flex items-center justify-center">
                    <PhoneIcon className="h-5 w-5 text-moss" />
                  </div>
                  <div>
                    <div className="text-sm text-cal-poly/70">Email</div>
                    <a href="mailto:aleaxmuiruri@gmail.com" className="text-cal-poly font-medium hover:text-moss transition-all duration-300">
                      aleaxmuiruri@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-moss/10 rounded-full flex items-center justify-center">
                    <PhoneIcon className="h-5 w-5 text-moss" />
                  </div>
                  <div>
                    <div className="text-sm text-cal-poly/70">Phone</div>
                    <a href="tel:+254719571601" className="text-cal-poly font-medium hover:text-moss transition-all duration-300">
                      +254 719 571 601
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-moss/10 rounded-full flex items-center justify-center">
                    <MapPinIcon className="h-5 w-5 text-moss" />
                  </div>
                  <div>
                    <div className="text-sm text-cal-poly/70">Location</div>
                    <div className="text-cal-poly font-medium">
                      Nairobi, Kenya
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-moss/10 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-cal-poly mb-4">Working Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-moss/10 rounded-full flex items-center justify-center">
                    <ClockIcon className="h-5 w-5 text-moss" />
                  </div>
                  <div>
                    <div className="text-sm text-cal-poly/70">Weekdays</div>
                    <div className="text-cal-poly font-medium">Monday - Friday: 9 am - 5 pm</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 opacity-0">
                    {/* Spacer for alignment */}
                  </div>
                  <div>
                    <div className="text-sm text-cal-poly/70">Weekends</div>
                    <div className="text-cal-poly font-medium">Saturday - Sunday: 10 am - 1 pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-moss/10 h-full transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-cal-poly mb-6">Send Me a Message</h3>
              
              <form 
                ref={formRef}
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-cal-poly font-medium mb-2 text-sm">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="user_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-moss/30 focus:border-moss focus:outline-none focus:ring-1 focus:ring-moss bg-vanilla/5 transition-all duration-200"
                      placeholder="Your name"
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-cal-poly font-medium mb-2 text-sm">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="user_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-moss/30 focus:border-moss focus:outline-none focus:ring-1 focus:ring-moss bg-vanilla/5 transition-all duration-200"
                      placeholder="Your email"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-cal-poly font-medium mb-2 text-sm">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-moss/30 focus:border-moss focus:outline-none focus:ring-1 focus:ring-moss bg-vanilla/5 transition-all duration-200"
                    placeholder="Message subject"
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-cal-poly font-medium mb-2 text-sm">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="6" 
                    className="w-full px-4 py-3 rounded-lg border border-moss/30 focus:border-moss focus:outline-none focus:ring-1 focus:ring-moss bg-vanilla/5 transition-all duration-200"
                    placeholder="Your message"
                    disabled={isLoading}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full py-4 bg-cal-poly text-snow hover:bg-moss rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;