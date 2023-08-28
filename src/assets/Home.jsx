import React from 'react'
import Header from "../components/Header"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Brands from '../components/Brands'

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Brands />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home