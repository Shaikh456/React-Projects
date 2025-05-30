import React from 'react'
import "../styles/Resume.css";

const Resume = () => {
  return (
    
      <section id='Resume' className="Resume ">
        <h1>You Can Download My Resume From Here.</h1>
        <p>You can get all the information about me through my resume.</p>
        <a href="./MustafaShaikh_Resume.pdf "
        download="./MustafaShaikh_Resume.pdf"><button  className="btn btn-primary">DOWNLOAD </button></a>
        
      </section>
    
  )
}

export default Resume
