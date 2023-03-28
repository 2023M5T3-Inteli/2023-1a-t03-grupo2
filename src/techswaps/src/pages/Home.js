import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Masthead from '../components/MastHead'
import HomeNavbar from '../components/Navbar'
import { ProjectsPage } from './ProjectsPage'
import { HeroBg, HeroContainer } from '../components/HeroSection/HeroElements'
//import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  return (
    <>
      <HomeNavbar />
      <HeroContainer>
        <HeroBg>
          <Masthead />
          <HeroSection />
        </HeroBg>
      </HeroContainer>
    </>
  )
}

export default Home
