import React from 'react'
import '../styles/Services.css'
import { FaHtml5,FaReact ,FaNode,FaJsSquare,FaDatabase,FaGithub,FaPython } from "react-icons/fa";
import { SiMongodb ,SiExpress} from "react-icons/si";

const Services = () => {
  return (
    <div>
      <section id='Skills' className='services'>
        <div className='container'>
            <h1 className='section-heading'><span>My</span> SKills</h1>
            <p>I have some sort of Skills in different languages mentioned below</p>

            <div className='card-wrapper'>
                <div className="card">
                    <div className='image-logo-div'><FaHtml5 className='image' /></div>
                    <h2>HTML and CSS</h2>
                    <p>I know Bais Html tags Attributes and many more . Also I use vanilla CSS as well as the frameworks of CSS</p>
                </div>
                <div className="card">
                    <div className='image-logo-div'>
                        <FaReact className='image' />
                    </div>
                    <h2>React JS</h2>
                    <p>I have used Reactjs in many of my projects for making the frontend of the projects </p>
                </div>
                <div className="card">
                    <div className='image-logo-div'>< FaNode className="image" /></div>
                    <h2>Node JS</h2>
                    <p>I have also  used nodejs in many of my projects that has not mentioned for making backend   </p>
                </div>
                <div className="card">
                    <div className='image-logo-div'><SiExpress className="image" /></div>
                    <h2>Express JS</h2>
                    <p>I know much about the Express js for making API's in project I have worked with that also. </p>
                </div>
                <div className="card">
                    <div className='image-logo-div'><SiMongodb className='image' /></div>
                    <h2>MongoDB</h2>
                    <p>For the unstructured Databases i have used these type of databases I have used it in my mern stack project </p>
                </div>
                <div className="card">
                    <div className='image-logo-div'>< FaJsSquare className='image' /></div>
                    <h2>JavaScript</h2>
                    <p>As I have mentioned some of the frameworks of javascript above I also have Knowledge of vanilla javascript </p>
                </div>
                <div className="card">
                    <div className='image-logo-div'>< FaDatabase className='image' /></div>
                    <h2>Databases</h2>
                    <p>I have Knowledge of different databases such PgSQL, MySQL, MongoDB and i can learn more if needed. </p>
                </div>
                <div className="card">
                    <div className='image-logo-div'>< FaPython className='image' /></div>
                    <h2>Python</h2>
                    <p>I have handson experience on the python language I have used python in one of my project mentioned below . </p>
                </div>
                <div className="card">
                    <div className='image-logo-div'>< FaGithub className='image' /></div>
                    <h2>Git and GitHub</h2>
                    <p>I have basic knowledge about the git and github that can be used for working simultaneously in companies.</p>
                </div>
                
            </div>
        </div>
      </section>
    </div>
  )
}

export default Services
