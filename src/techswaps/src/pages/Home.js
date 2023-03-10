import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import HomeNavbar from '../components/Navbar'
import { ProjectsPage } from './ProjectsPage'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const Home = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ProjectsPage/>}></Route>
    )
  )
  return (
    <>
    <RouterProvider router={router}/>
      <HomeNavbar/>
      <HeroSection />
    </>
  )
}

export default Home
