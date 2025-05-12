import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

function CADDesign() {
     const [openIndex, setOpenIndex] = useState(null);
     const [showAll, setShowAll] = useState(false);
     const navigate = useNavigate();
   
          
            const faqs = [
              {question:'What is CAD design, and why is it important?', answer:'CAD (Computer-Aided Design) is the use of software to create precise 2D or 3D designs, models, and drawings. It ensures accuracy, reduces errors, and accelerates the design-to-manufacturing process.'},
              {question:' What industries do you serve?', answer:'We serve various industries, including manufacturing, automotive, aerospace, industrial equipment, material handling, and more.'},
              {question:'Do you offer both 2D and 3D CAD design services?', answer:'Yes, we provide both 2D drafting for layouts and detailed drawings, as well as 3D modeling for visualization, prototyping, and manufacturing.'},
              {question:'Can you design custom machines or equipment?', answer:'Absolutely! We specialize in custom machine design, including Special Purpose Machines (SPMs), jigs, fixtures, and material handling equipment.'},
              {question:'Do you provide sheet metal design services?', answer:'Yes, we offer comprehensive sheet metal design services, including fabrication-ready drawings and optimized designs for manufacturing.'},
              {question:'Can you help with product development from concept to manufacturing?', answer:'Yes, we assist in the entire product lifecycle, from initial concept design to detailed manufacturing drawings and prototyping.'},
              {question:'What CAD software do you use?', answer:'We primarily use SolidWorks, but we can work with other industry-standard CAD tools depending on your requirements.'},
              {question:'Can you assist in improving or redesigning existing machines or products?', answer:'Yes, we offer redesign and improvement services to optimize existing machines and products for better performance or cost efficiency.'},
              {question:'Do you provide structural and fabrication design?', answer:'Yes, we specialize in industrial structural and fabrication designs, ensuring strength, durability, and compliance with standards.'},
              {question:'What file formats can you provide?', answer:'We deliver designs in commonly used formats like STEP, IGES, STL, DWG, DXF, and native SolidWorks formats.'},
              {question:'Can you conduct simulations or analysis on designs?', answer:'Yes, we offer simulation services like stress analysis, motion studies, and thermal analysis to validate and optimize designs.'},
              {question:'How do you ensure the accuracy of your designs?', answer:'We use advanced CAD software, follow industry standards, and conduct thorough reviews and validations before delivery.'},
              {question:'What is your typical turnaround time?', answer:'Turnaround time depends on the complexity of the project. We strive to deliver high-quality designs within agreed timelines.'},
              {question:'Do you offer support for prototypes or manufacturing?', answer:'Yes, we collaborate with manufacturers and prototyping facilities to bring your designs to life.'},
              {question:'How do I get started with your CAD design services?', answer:'You can contact us via our website or email with your project details. We’ll discuss your requirements and provide a customized solution.'},
              {question:'', answer:''},
            ];


            const toggleFAQ = (index) => {
              setOpenIndex(openIndex === index ? null : index);
            };
          
            const displayedFAQs = showAll ? faqs : faqs.slice(0, 3);
          
    
    
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

      const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: 0.5
          }
        }
      };

      // Add refs for scroll animations
      const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
      const [workflowRef, workflowInView] = useInView({ threshold: 0.2, triggerOnce: true });
      const [industriesRef, industriesInView] = useInView({ threshold: 0.2, triggerOnce: true });
      const [faqRef, faqInView] = useInView({ threshold: 0.2, triggerOnce: true });

      return (
    
        <div className="bg-gray-50">
        {/* Section: Computational Fluid Dynamics Services */}
        <motion.section 
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center py-12 px-4"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-gray-800"
            variants={itemVariants}
          >
            CAD Design Services
          </motion.h2>
          <motion.p 
            className="mt-4 text-sm md:text-base text-gray-600"
            variants={itemVariants}
          >
            Expert analysis and <span className="text-green-600 font-semibold">Simulation</span> for optimized product performance
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center mt-4 space-x-2 md:space-x-4"
            variants={containerVariants}
          >
            {[
              'Development of new Products/machine',
              'Material Handeling equipments Design.',
              'Jig & fixture design',
              'Inspection fixtures design.',
              'Special Purpose Machine (SPM) design.',
              'Structural/Fabrication Design (Industrial Only) Standard Machines',
              'Sheet metal Design',
            ].map((service, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="text-sm md:text-base text-gray-700 flex items-center space-x-1"
              >
                ✅ <span>{service}</span>
              </motion.span>
            ))}
          </motion.div>
          <motion.button 
            onClick={() => navigate("/Contact")}
            className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-gray-800 text-white text-sm md:text-base font-medium rounded-md hover:bg-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started here
          </motion.button>
        </motion.section>

         {/* Form Component */}
      {/* {showForm && <ContactForm onClose={() => setShowForm(false)} />} */}

    
        {/* Section: Workflow */}
        <motion.section 
          ref={workflowRef}
          initial="hidden"
          animate={workflowInView ? "visible" : "hidden"}
          className="py-12 bg-white px-4"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center text-gray-800"
            variants={itemVariants}
          >
            Workflow or CAD Design Process
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 max-w-7xl mx-auto"
            variants={containerVariants}
          >
            {[
              {
                id: 1,
                title: 'Define and Plan',
                description:
                  'Gather project requirements and specifications.Outline objectives and constraints.Choose the appropriate CAD software and set up the workspace (units, templates, etc.).',
              },
              {
                id: 2,
                title: 'Create the Base Design',
                description:
                  'Develop 2D sketches or layouts.Use tools like extrude, revolve, or loft to build 3D models.Apply constraints for accuracy (e.g., dimensions, alignment).',
              },
              {
                id: 3,
                title: 'Refine and Detail',
                description:
                  'Add features like fillets, chamfers, holes, or threads.Combine parts into assemblies (if applicable) and define relationships.Assign materials, textures, or other visual details.',
              },
              {
                id: 4,
                title: 'Validate and Finalize',
                description:
                'Perform simulations (e.g., stress, thermal, motion) if needed.Optimize the design based on analysis results.Export the model in required formats (e.g., STL, STEP, DWG) for manufacturing or presentation.'
                  ,
              },
            ].map((step) => (
              <motion.div 
                key={step.id} 
                className="text-center"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-green-700 text-3xl font-semibold">{step.id.toString().padStart(2, '0')}.</h3>
                <h4 className="mt-2 text-lg font-medium text-gray-800">{step.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
    
        {/* Section: Industries Served */}
        <motion.section 
          ref={industriesRef}
          initial="hidden"
          animate={industriesInView ? "visible" : "hidden"}
          className="py-12 bg-gray-50 px-4"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center text-gray-800"
            variants={itemVariants}
          >
            Industries Served
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 max-w-7xl mx-auto"
            variants={containerVariants}
          >
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
    
    
    
         {/* Typewriter Script  */}
           {/* <div>
           <Typewriter
           words={["Mechanical Engineering", "Innovative Designs", "Prototyping Solutions"]}
           loop={true}
           cursor
           cursorStyle="|"
           typeSpeed={70}
           deleteSpeed={50}
           delaySpeed={1000}
           />
           </div> */}
            {/* Typewriter code End here  */}
    
    
    
            {/* FAQs Section  */}
            <motion.div 
              ref={faqRef}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
              className="max-w-4xl mx-auto p-4"
              variants={containerVariants}
            >
      <motion.h1 
        className="text-2xl font-bold text-center mb-6"
        variants={itemVariants}
      >
        CAD Designs FAQs
      </motion.h1>
      <motion.p 
        className="text-center mb-6"
        variants={itemVariants}
      >
        Find answers to frequently asked questions about CAD Designs
      </motion.p>
      <motion.div 
        className="space-y-4"
        variants={containerVariants}
      >
        {displayedFAQs.map((faq, index) => (
          <motion.div 
            key={index} 
            className="border rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? '-' : '+'}
              </motion.span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? 'auto' : 0,
                opacity: openIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 text-gray-600">{faq.answer}</div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
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
  )
}

export default CADDesign
