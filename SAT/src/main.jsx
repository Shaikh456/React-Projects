import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Manufacturing from './components/Manufacturing.jsx'
import CADDesign from './components/CADDesign.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path = "" element={<Home/>}/>
      <Route path = "about" element={<About/>}/>
      <Route path = "contact" element={<Contact/>}/>
      <Route path="services/CAD-design" element={<CADDesign />} />
      <Route path="services/manufacturing" element={<Manufacturing />} />
      
      {/* <Route 
      loader={githubInfoLoader}
      path = "github" element={<Github/>}/> */}
    </Route>
        )
)  
  /* Another Syntax for creating route and also nesting route */ 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)