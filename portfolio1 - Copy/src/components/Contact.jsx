import { useRef , useState} from 'react'
import "../styles/Contact.css";
import {  MdOutlinePhoneAndroid, MdWhatsapp, MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com"
import { motion } from "framer-motion";


const Contact = () => {
   const [showPopup, setShowPopup] = useState(false);
   const form = useRef();


    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rr3g1su",      // e.g. service_abc123
      "template_gyvatvf",     // e.g. template_xyz456
      form.current,
      "QwU5nhcooXc-5YIRy"       // e.g. your_public_key from EmailJS
    )
    .then((result) => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      form.current.reset();
    })
    .catch((error) => {
      alert("Failed to send message. Error: " + error.text);
    });
  };



  return (
    <div>
      <section id='Contact' className="contact">
        <div className="container">
            <h1 className='section-heading'>Contact <span>Me</span></h1>
            <p>For Contacting the details and a contact form is given below </p>

            <div className="card-wrapper grid grid-cols-3 ">
                <div className="card">
                    <MdOutlinePhoneAndroid className='image'/>
                    <h1>Contact Number</h1>
                    <h6>+91 9168545461</h6>
                </div>
                <div className="card">
                    <MdOutlineEmail
                    className='image' />
                    <h1>E-mail ID</h1>
                    <h6>mustafashaikh1028@gmail.com</h6>
                </div>
                <div className="card">
                    <MdWhatsapp 
                    className='image'/>
                    <h1>Whatsapp Number</h1>
                    <h6>+91 9168545461</h6>
                </div>
            </div>

           <form action="" ref={form} onSubmit={sendEmail}>
             <div className="input-wrap">
                <input type="text" placeholder='Your Name' name='name' required />
                <input type="email" placeholder='Your E-mail' name='email' required  />
            </div>
            
                <div className="input-wrap-2">
                    <input type="text" placeholder='Your Subject... ' name='subject' required  />
                    <textarea cols="30" rows="10" placeholder='Your Message...' name='message' required ></textarea>
                </div>
            
                <div className='btn-wrapper'>
                    <button className='btn btn-primary' type='submit'>Send Message</button>
                </div>
           </form>
        </div>
      </section>

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
            <p className="text-blue-500 font-medium text-lg m-2">
              Message sent successfully!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors m-2"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}


    </div>
  )
}

export default Contact
