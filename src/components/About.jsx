import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram,FaGithub } from "react-icons/fa";
import "../styles/About.css"

const About = () => {
  return (
    <div id="About"className='container'>
    <section className='about'>
        <div className="container flex items-center about-inner-wrap">
            <div className='flex-1/2'>
                <img className='about-me-img' src="./Aboutimg.jpg.jpg" alt="" />
            </div>

            <div className='right flex-1/2'>
                <h1>About <span>Me</span></h1>
                <h3>Hello I'm Mustafa Shaikh</h3>
                <p>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span><a href="#Projects" >Projects</a></span> section.</p>
                <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to connect with me on <span><a href="">LinkedIn</a></span>  and <span><a href="">Instagram</a></span> .</p>
                <p>'m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span><a href="#Contact">contact</a></span> me.</p>

                <div className='social flex'>
                    <a href="https://www.facebook.com/share/1XiydJGYSN/ "><div><FaFacebookF className='' /></div></a>
                    {/* <a href="https://www.twitter.com/"><div><FaTwitter /></div></a> */}
                    <a href="https://www.instagram.com/mustafa_shaikh_786__"><div><FaInstagram /></div></a>
                    <a href="https://github.com/Shaikh456"><div><FaGithub /></div></a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
