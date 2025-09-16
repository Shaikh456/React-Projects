import React, { useState, useRef } from 'react'
import { motion } from "framer-motion";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const fadeInUp = {
    initial: { opacity: 0, y: 20, scale: 1 },
    animate: { opacity: 1, y: 0, scale: 1.15 },
    transition: { 
      duration: 0.8,
      delay: 0.5,
      ease: "easeOut"
    },
}

function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [msg, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const servicesRef = useRef(null);

  const collectData = async (e) => {
    e.preventDefault();

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_dakku8e", // Replace with your Service ID
        "template_786qh2n", // Replace with your Template ID
        {
          firstname,
          lastname,
          email,
          phonenumber,
          message: msg,
        },
        "QwU5nhcooXc-5YIRy" // Replace with your Public Key
      );

      // Show success popup
      setShowPopup(true);

      // Reset form fields
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhonenumber("");
      setMessage("");

      // Hide the popup message after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen text-white">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden m-[10px]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070")',
              backgroundPosition: 'center',
              animation: 'zoomIn 15s ease-in-out 0.5s both',
            }}
          >
            {/* Dark overlay with fade in */}
            <div 
              className="absolute inset-0 bg-black opacity-0 rounded-lg"
              style={{
                animation: 'fadeIn 0.5s ease-in-out 1s forwards',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20, scale: 1 }}
                animate={{ opacity: 1, y: 0, scale: 1.15 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.5,
                  ease: "easeOut"
                }}
              >
                Precision Engineering & 
                <span className="block mt-2">Manufacturing Excellence</span>
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20, scale: 1 }}
                animate={{ opacity: 1, y: 0, scale: 1.15 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.7,
                  ease: "easeOut"
                }}
              >
                Transforming ideas into engineered reality with cutting-edge design and manufacturing solutions
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20, scale: 1 }}
                animate={{ opacity: 1, y: 0, scale: 1.15 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.9,
                  ease: "easeOut"
                }}
              >
                <button 
                  onClick={scrollToServices}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Our Services
                </button>
                <button 
                onClick={() => navigate("/Contact")}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-all duration-300 hover:shadow-lg">
                  Get Quote
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Al-hamd Clinic Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Title and Subtitle */}
            <div className="text-center mb-20">
              <motion.h2 
                className="text-4xl font-bold mb-4 text-[#333333]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About SAT Design & Solutions
              </motion.h2>
              <motion.p 
                className="text-[#333333] text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Established in 2023, we prioritize compassionate care and community health.
              </motion.p>
            </div>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Our History */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#333333]">Our History</h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  Al-hamd Clinic was founded to meet the healthcare needs of Malappuram. Our dedicated team focuses on providing exceptional care and building lasting relationships with our patients.
                </p>
              </motion.div>

              {/* Our Values */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#333333]">Our Values</h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  We believe in compassionate care, integrity, and excellence. Our commitment to accessibility ensures that everyone in the community receives the healthcare they deserve.
                </p>
              </motion.div>

              {/* Meet Our Team */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#333333]">Meet Our Team</h3>
                <p className="text-[#333333] text-base leading-relaxed">
                  Our experienced medical professionals, including Dr. Alpha Khan and Dr. Rey Patel, are dedicated to providing high-quality healthcare tailored to each patient's needs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section 
          ref={servicesRef} 
          className="py-20 bg-[#1a1a1a] text-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light text-center mb-16">WHAT WE DO</h2>
            
            {/* Decorative Line with Dot */}
            <div className="flex items-center justify-center mb-16">
              <div className="h-[1px] bg-gray-600 w-1/3"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500 mx-4"></div>
              <div className="h-[1px] bg-gray-600 w-1/3"></div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Project Design */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.5,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <h3 className="mb-2">
                  <span className="text-blue-400">PROJECT</span>
                  <span className="font-bold"> DESIGN</span>
                </h3>
                <p className="text-gray-400 mb-8">
                  Create custom solutions for our clients by helping you design your project from scratch, or by helping you modify existing designs to fit your needs.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" 
                  alt="Project Design - CAD Design Work"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              {/* Metal Fabrication */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 1, // 0.5s after first card
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <h3 className="mb-2">
                  <span className="text-blue-400">METAL</span>
                  <span className="font-bold"> FABRICATION</span>
                </h3>
                <p className="text-gray-400 mb-8">
                  Our in-house team will take your design and custom project and bring your idea to life by fabricating to the industry's highest quality standards.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070" 
                  alt="Metal Fabrication Process"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              {/* Delivery & Installation */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  delay: 1.5, // 0.5s after second card
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <h3 className="mb-2">
                  <span className="text-blue-400">DELIVERY &</span>
                  <span className="font-bold"> INSTALLATION</span>
                </h3>
                <p className="text-gray-400 mb-8">
                  Once complete our team will deliver your project to you and install any needed parts to meet your specifications. We off custom delivery solutions.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070" 
                  alt="Delivery and Installation"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-20 bg-transparent">
          <div className="container mx-auto px-4">
            {/* Title and Subtitle Container */}
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[32px] md:text-[48px] font-bold mb-4 md:mb-6 text-[#333333]">
                Customers Feedback
              </h2>
              <p className="text-lg md:text-xl text-[#333333] px-4 md:px-0">
                Hear from our satisfied customers who trust Sat Design & Solutions for their needs.
              </p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 max-w-7xl mx-auto">
              {/* John Doe */}
              <motion.div 
                className="flex flex-col items-center px-4 md:px-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[32px] md:text-[42px] font-script mb-6 md:mb-8 text-[#333333]">John Doe</h3>
                <p className="text-center text-[14px] md:text-[15px] leading-relaxed mb-12 md:mb-16 max-w-[300px] text-[#333333]">
                  "The staff at Al-hamd Clinic were incredibly caring and attentive. I felt valued and well taken care of during my visit."
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&q=80" 
                    alt="John Doe" 
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full object-cover mb-3 md:mb-4"
                  />
                  <h4 className="text-[16px] md:text-[18px] font-semibold mb-1 text-[#333333]">John Doe</h4>
                  <p className="text-[13px] md:text-[14px] text-[#333333]">Patient, Al-hamd Clinic</p>
                </div>
              </motion.div>

              {/* Jane Smith */}
              <motion.div 
                className="flex flex-col items-center px-4 md:px-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[32px] md:text-[42px] font-tech mb-6 md:mb-8 text-[#333333]">Jane Smith</h3>
                <p className="text-center text-[14px] md:text-[15px] leading-relaxed mb-12 md:mb-16 max-w-[300px] text-[#333333]">
                  "I received prompt and professional care at Al-hamd Clinic. Highly recommend for anyone needing medical attention!"
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&h=500&q=80" 
                    alt="Jane Smith" 
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full object-cover mb-3 md:mb-4"
                  />
                  <h4 className="text-[16px] md:text-[18px] font-semibold mb-1 text-[#333333]">Jane Smith</h4>
                  <p className="text-[13px] md:text-[14px] text-[#333333]">Patient, Al-hamd Clinic</p>
                </div>
              </motion.div>

              {/* Michael Brown */}
                <motion.div
                className="flex flex-col items-center px-4 md:px-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[32px] md:text-[42px] font-script mb-6 md:mb-8 text-[#333333]">Michael Brown</h3>
                <p className="text-center text-[14px] md:text-[15px] leading-relaxed mb-12 md:mb-16 max-w-[300px] text-[#333333]">
                  "The team at Al-hamd Clinic made my experience seamless and stress-free. I will definitely return for future needs."
                </p>
                <div className="flex flex-col items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&h=500&q=80" 
                    alt="Michael Brown" 
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full object-cover mb-3 md:mb-4"
                  />
                  <h4 className="text-[16px] md:text-[18px] font-semibold mb-1 text-[#333333]">Michael Brown</h4>
                  <p className="text-[13px] md:text-[14px] text-[#333333]">Patient, Al-hamd Clinic</p>
                </div>
                </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Us Section */}
      <section className="relative py-20 text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=2680')`,
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Information */}
              <motion.div variants={fadeInUp} className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-200 mb-8">
                  Have a question or project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <motion.svg 
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 text-blue-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </motion.svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300">info@isdfab.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <motion.svg 
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 text-blue-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </motion.svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-gray-300">(713) 697-0028</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={fadeInUp} className="lg:w-1/2">
                <form onSubmit={collectData} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-gray-400/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                        required
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-gray-400/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-400/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <PhoneInput
                      country={'in'}
                      value={phonenumber}
                      onChange={setPhonenumber}
                      inputStyle={{
                        width: '100%',
                        height: '48px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(156, 163, 175, 0.2)',
                        color: 'white'
                      }}
                      containerStyle={{
                        width: '100%'
                      }}
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <textarea
                      placeholder="Message"
                      value={msg}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="4"
                      className="w-full px-4 py-3 bg-white/10 border border-gray-400/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                      required
                    ></textarea>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {showPopup && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
        >
          <motion.div 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="bg-white px-6 py-4 rounded-lg shadow-lg text-center border border-gray-200"
          >
            <p className="text-blue-500 font-medium text-lg">
              Message sent successfully!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
      </section>

      {/* Map Section */}
      <section className="relative min-h-[400px] w-full p-4 md:p-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Card - Left Side */}
            <div className="w-full md:w-1/3">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-xl h-full"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Visit Us</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 text-lg mb-2">1159 Aldine Bender Rd</p>
                    <p className="text-gray-600 text-lg mb-4">Houston, TX 77032</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(713) 697-0028</span>
                    </div>
                  </div>

                  <a 
                    href="https://maps.google.com/?q=1159+Aldine+Bender+Rd,+Houston,+TX+77032"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full justify-center py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    Get Directions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Map - Right Side */}
            <div className="w-full md:w-2/3 h-[400px] relative">
              <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.7642475563844!2d-95.3528847!3d29.9397799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b5c1f94c941f%3A0x68f69d772392bfd1!2s1159%20Aldine%20Bender%20Rd%2C%20Houston%2C%20TX%2077032%2C%20USA!5e0!3m2!1sen!2sin!4v1709704844034!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Update the styles */}
      <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Home
