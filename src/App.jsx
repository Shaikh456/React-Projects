import './App.css'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import "aos/dist/aos.css";
import Aos from 'aos';

function App() {
//  useEffect(() => {
//     AOS.init({
//       duration: 800,       // Animation duration in ms
//       once: false,         // Allow animation every time it scrolls into view
//       easing: 'ease-in-out',
//     });
//   }, []);

  return (
    <div className="">
      <Header  />
      <About/>
      <Services/>
      <Resume/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
