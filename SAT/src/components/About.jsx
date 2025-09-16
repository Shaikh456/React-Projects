import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from './Backgroundimage'
import Card from './card'
import { motion } from 'framer-motion'

const About = () => {
  /* const handleActionClick = () => {
    alert("Action button clicked!");
  }; */

  return (
    <div className="bg-white">
      {/* Hero Section with parallax and fade effects */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070')`,
          }}
        ></motion.div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.div
            className="h-1 w-24 bg-blue-500 mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>
      </section>

      {/* Mission Statement with stagger effect */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            <motion.h2 
              className="text-3xl font-light mb-8 tracking-wider"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              OUR MISSION
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-xl leading-relaxed font-light"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              We are dedicated to delivering exceptional metal fabrication solutions with precision and innovation. 
              Our commitment to quality craftsmanship and customer satisfaction drives everything we do.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Values with hover and stagger effects */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-light mb-16 tracking-wider text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            OUR CORE VALUES
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                title: "Quality",
                description: "We maintain the highest standards in metal fabrication, ensuring precision and durability in every project.",
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We embrace cutting-edge technology and innovative solutions to meet complex fabrication challenges.",
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Reliability",
                description: "We deliver on our promises, maintaining strict deadlines and professional standards throughout every project.",
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-3 bg-blue-50 rounded-full">
                    {value.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section with enhanced hover effects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-4 tracking-wider">OUR TEAM</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our skilled team of fabrication experts brings years of experience and technical expertise
              to deliver outstanding results on every project.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            {[
              {
                name: "John Smith",
                role: "Lead Fabricator",
                image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070"
              },
              {
                name: "Mike Johnson",
                role: "Project Manager",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
              },
              {
                name: "David Wilson",
                role: "Design Engineer",
                image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-6 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500">
                  <motion.img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 font-light">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
