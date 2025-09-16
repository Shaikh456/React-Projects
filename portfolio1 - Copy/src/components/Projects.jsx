import React from 'react'
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div>
      <section id='Projects' className='Projects'>
        <div className="container">
            <h1 className='section-heading'><span>My</span> Projects</h1>
            <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study </p>


            <div className="card-wrapper grid grid-cols-2 gap-3 ">
                <div className="card">
                    <div className="overlay">
                        <span>Category</span>
                        <a href="#">Amazon clone</a>
                        <p >I have make the clone of the e-commerce website which is Amazon I have use Reactjs Tailwindcss and Html it is only a frontend website the backend is not available in it</p>
                        </div>
                    <img src="./Project4.png" alt="" />
                </div>
                <div className="card">
                    <div className="overlay">
                        <span>Category</span>
                        <a href="#">Thumbnail Generator</a>
                        <p>I have made the thumbnail generator website using the Reactjs TailwindCSS and Python which generates the thumbnail through using AI. </p>
                        </div>
                    <img src="./Project3.png" alt="" />
                </div>
                <div className="card">
                    <div className="overlay">
                        <span>Category</span>
                        <a href="#">Thumbnail generator</a>
                        <p>These project converts the text that is given through the user into a short summary by using AI. These Project is made using Reactjs Python TailwindCSS and MongoDB </p>
                        </div>
                    <img src="./Project1.png" alt="" />
                </div>
                <div className="card">
                    <div className="overlay">
                        <span>Category</span>
                        <a href="#">Landing WebPages</a>
                        <p>I have the Landing web Pages that help the business to advertise their brand and make it more popular through website.It is the Landing page having animations contact form and detail about brand made in ReactJs and TailwindCSS</p>
                        </div>
                    <img src="./Project2.png" alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
