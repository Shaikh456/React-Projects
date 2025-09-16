import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header/>
      {/* Header and footer will be same */}
       <Outlet/>
       {/*//for reload the middle part of the page */}
      <Footer/>
    </>
  )
}

export default Layout
