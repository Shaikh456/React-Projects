import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the phone input styles
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [msg, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col lg:flex-row px-4 sm:px-8 py-8 bg-white"
    >
      {/* Contact Information Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="lg:w-1/2 flex flex-col space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          Contact us, we reply within 12 hours
        </h2>

        {/* Phone Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-500 rounded-full">
            {/* Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.5v-1A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 16.5v-1m0-7h18m-18 4h18m-10 4h6"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-800 flex items-start">
              +91 7378671377
            </p>
            <p className="text-sm text-gray-500">
              We use WhatsApp, Zalo, WeChat
            </p>
          </div>
        </motion.div>

        {/* Email Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-500 rounded-full">
            {/* Email Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.25 9L12 12.25m0 0L7.75 9m4.25 3.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 006.75 19.5h10.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25H12z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-800 flex items-start">
              Email Address:
            </p>
            <p className="text-sm text-blue-500">sales@abc-vietnam.com</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8"
      >
        <form className="space-y-4" onSubmit={collectData}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              placeholder="First Name*"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
            />
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              placeholder="Last Name*"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Address*"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
            />
            <PhoneInput
              country={"in"}
              value={phonenumber}
              onChange={(phone) => setPhonenumber(phone)}
              inputStyle={{
                width: "100%",
                height: "42px",
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "0.5rem",
                color: "#1F2937",
              }}
              dropdownStyle={{
                background: "white",
                color: "#1F2937",
                borderRadius: "0.5rem",
                border: "1px solid #E5E7EB",
              }}
              buttonStyle={{
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "0.5rem 0 0 0.5rem",
              }}
            />
          </div>
          <textarea
            placeholder="Your Message..."
            name="msg"
            value={msg}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Submit
          </button>
        </form>
      </motion.div>

      {/* Success Popup */}
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
    </motion.div>
  );
};

export default Contact;
