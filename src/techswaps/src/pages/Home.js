import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import HomeNavbar from '../components/Navbar'
import { ProjectsPage } from './ProjectsPage'

const Home = () => {
  
  return (
    <>
      <HomeNavbar/>
      <HeroSection />
    </>
  )
}

export default Home