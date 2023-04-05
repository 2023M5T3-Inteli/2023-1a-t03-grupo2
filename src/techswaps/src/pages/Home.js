import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Masthead from '../components/MastHead'
import HomeNavbar from '../components/Navbar'
import { ProjectsPage } from './ProjectsPage'
import { HeroBg, HeroContainer } from '../components/HeroSection/HeroElements'
import GlobalStyle from '../components/globalstyle'
//import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  return (
    <>
      <GlobalStyle/>
      <HomeNavbar />
      <HeroContainer>
        <HeroBg>
          <Masthead />

        </HeroBg>
      </HeroContainer>
    </>
  )
}

export default Home
