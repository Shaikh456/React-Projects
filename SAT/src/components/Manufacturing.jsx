import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

function Manufacturing() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const faqs = [
    { question: 'What is manufacturing?', answer: 'Manufacturing is the process of converting raw materials or components into finished goods using machinery, tools, and labor.' },
    { question: ' What industries do you serve in manufacturing?', answer: 'We serve various industries, including automotive, aerospace, consumer goods, electronics, industrial equipment, and material handling.' },
    { question: 'Can you assist with prototyping?', answer: 'Yes, we specialize in creating prototypes to validate designs, test functionality, and prepare for mass production.' },
    { question: ' Do you offer custom manufacturing services?', answer: 'Absolutely! We offer tailored solutions to meet unique project requirements, including custom parts, machines, and assemblies.' },
    { question: 'What materials do you work with?', answer: 'We work with a wide range of materials, including metals, plastics, composites, and sheet metal, depending on the project’s requirements.' },
    { question: ' What is your typical manufacturing lead time?', answer: 'Lead times vary based on project complexity and volume. We strive to provide realistic timelines and deliver on schedule.' },
    { question: 'Do you offer end-to-end manufacturing solutions?', answer: 'Yes, we provide complete solutions, from concept design and prototyping to full-scale production and delivery.' },
    { question: 'How do you ensure quality in manufacturing?', answer: 'We follow strict quality control processes, use advanced equipment, and conduct inspections at every stage of production.' },
    { question: 'Can you help improve or redesign existing products?', answer: 'Yes, we offer design optimization and reengineering services to enhance performance, reduce costs, or adapt to new requirements.' },
    { question: 'Do you handle low-volume or high-volume manufacturing?', answer: 'We handle both low-volume and high-volume manufacturing, adapting to the needs of startups, small businesses, and large-scale industries.' },
    { question: 'What types of machines or tools do you use?', answer: 'We use advanced CNC machines, 3D printers, laser cutters, and other specialized equipment for precision manufacturing.' },
    { question: ' Do you comply with industry standards?', answer: 'Yes, we comply with relevant industry standards such as ISO, ASTM, and others, depending on the project requirements.' },
    { question: 'What file formats do you accept for manufacturing designs?', answer: 'We accept formats like STEP, IGES, STL, DXF, DWG, and native CAD files such as SolidWorks and AutoCAD.' },
    { question: 'Can you handle sheet metal fabrication?', answer: 'Yes, we offer comprehensive sheet metal fabrication services, including cutting, bending, welding, and finishing.' },
    { question: 'How do I get started with your manufacturing services?', answer: 'You can get started by contacting us with your project details. We’ll review your requirements and provide a customized solution.' },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFAQs = showAll ? faqs : faqs.slice(0, 3);

  // Add refs for scroll animations
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [workflowRef, workflowInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5
      }
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center py-12 px-4"
      >
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-gray-800">
          Manufacturing Services
        </motion.h2>
        <span className="text-green-600 font-semibold">We Turn your ideas into Reality</span>
        <p className="mt-4 text-sm md:text-base text-gray-600">
          Expert analysis and <span className="text-green-600 font-semibold">Tested</span> for optimized product performance
        </p>
        <div className="flex flex-wrap justify-center mt-4 space-x-2 md:space-x-4">
          {[
            'Machining',
            'SPM',
            'Handling',
            'Jigs',
            'Inspection',
            'Trolleys',
            'Conveyors',
            'Assembly',
          ].map((service, index) => (
            <span
              key={index}
              className="text-sm md:text-base text-gray-700 flex items-center space-x-1"
            >
              ✅ <span>{service}</span>
            </span>
          ))}
        </div>
        <button
           onClick={() => navigate("/Contact")}
          className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-gray-800 text-white text-sm md:text-base font-medium rounded-md hover:bg-gray-900">
          Get Started here
        </button>
      </motion.section>

      {/* {showForm && <ContactForm onClose={() => setShowForm(false)} />} */}

      {/* Workflow Section */}
      <motion.section 
        ref={workflowRef}
        initial="hidden"
        animate={workflowInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-12 bg-white px-4"
      >
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Workflow or Manufacturing Process
        </motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-7xl mx-auto">
          {[
            {
              id: 1,
              title: 'Concept & Design',
              description:
                'Develop the product idea based on requirements.Create detailed CAD designs, including 2D drawings and 3D models.Perform design validation through simulations and feasibility studies.',
            },
            {
              id: 2,
              title: 'Prototyping & Testing',
              description:
                'Create prototypes using CNC machining, 3D printing, or other methods.Test prototypes for functionality, durability, and performance.Make design iterations based on testing results.',
            },
            {
              id: 3,
              title: ' Production & Fabrication',
              description:
                'Prepare materials such as sheet metal, plastics, or composites.Manufacture components using processes like CNC machining, laser cutting, or welding.Assemble parts into the final product.',
            },
            {
              id: 4,
              title: 'Quality Control & Delivery',
              description:
                'Inspect and test the final product for compliance with quality standards.Perform finishing processes like painting, coating, or polishing.Package and deliver the product to the customer.',
            },
          ].map((step) => (
            <motion.div key={step.id} variants={itemVariants} className="text-center">
              <h3 className="text-green-700 text-3xl font-semibold">{step.id.toString().padStart(2, '0')}.</h3>
              <h4 className="mt-2 text-lg font-medium text-gray-800">{step.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Industries Section */}
      <motion.section 
        ref={industriesRef}
        initial="hidden"
        animate={industriesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-12 bg-gray-50 px-4"
      >
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Industries Served
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 max-w-7xl mx-auto">
          {[
            {
              id: 1,
              title: 'Automobile Industries',
              image: '/Images/Automobile.webp',
              description: 'Enhance vehicle aerodynamics. Cooling systems for better performance.',
            },
            {
              id: 2,
              title: 'Fabrication Industries',
              image: '/Images/metal-fabrication-industry.jpg',
              description: 'Improve flight efficiency and safety through precise aerodynamic analysis.',
            },
            {
              id: 3,
              title: 'Material Handling',
              image: '/Images/materialHandling.jpeg',
              description:
                'Thermal management in heating, ventilation, and air conditioning systems.',
            },
            {
              id: 4,
              title: 'Product Design Industry',
              image: '/Images/productDesign.jpg',
              description:
                'Support the design and optimization of fluid flow in power generation systems.',
            },
            {
              id: 5,
              title: 'jig & Fixture',
              image: '/Images/Jig&Fixture.jpg',
              description:
                'Support the design and optimization of fluid flow in power generation systems.',
            },
            {
              id: 6,
              title: 'Sheet Metal industry',
              image: '/Images/sheetMetal.jpg',
              description:
                'Support the design and optimization of fluid flow in power generation systems.',
            },
            {
              id: 7,
              title: 'Special Purpose Machine',
              image: '/Images/spm.jpg',
              description:
                'Support the design and optimization of fluid flow in power generation systems.',
            },
          ].map((industry) => (
            <motion.div
              key={industry.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <motion.img
                src={industry.image}
                alt={industry.title}
                className="w-full h-48 object-cover"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              />
              <motion.div 
                className="p-4"
                whileHover={{
                  backgroundColor: "rgba(249, 250, 251, 0.9)",
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="text-lg font-medium text-gray-800">{industry.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{industry.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* FAQs Section */}
      <motion.div 
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-4xl mx-auto p-4"
      >
        <motion.h1 variants={itemVariants} className="text-2xl font-bold text-center mb-6">
          Manufacturing Related FAQs
        </motion.h1>
        <p className="text-center mb-6">Find answers to frequently asked questions about Manufacturing</p>
        <div className="space-y-4">
          {displayedFAQs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        {!showAll && faqs.length > 3 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(true)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
            >
              Show More
            </button>
          </div>
        )}
        {showAll && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(false)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
            >
              Show Less
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Manufacturing;
