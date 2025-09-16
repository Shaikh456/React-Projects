import "../styles/Footer.css";
import { FaFacebookF,FaTwitter,FaInstagram,FaGithub } from "react-icons/fa";
import {   MdWhatsapp,MdOutlineEmail } from "react-icons/md";


const Footer = () => {
  return (
    <footer>
        <div className="footer-logo">MUSTAFA</div>
        
        <div className="footer-socials  ">
            <a href="https://wa.me/9168545461" target="_blank" rel="noopener noreferree"className="image" ><MdWhatsapp className=""/></a>
            <a href="https://www.facebook.com/share/1XiydJGYSN/" className="image"><FaFacebookF/></a>
            <a href="https://www.instagram.com/mustafa_shaikh_786__" className="image"><FaInstagram/></a>
            <a href="https://github.com/Shaikh456" className="image"><FaGithub/></a>
            {/* <a href="#" className="image"><FaTwitter/></a> */}
            <a href="mailto:mustafashaikh1028@gmail.com" className="image"><MdOutlineEmail/></a>
        </div>

        <div className="copyright">
            Copyright 2025 © Mustafa SHaikh Template. All rghts Reserved.
        </div>
    </footer>
  )
}

export default Footer
