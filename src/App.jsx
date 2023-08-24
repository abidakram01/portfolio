import React from 'react'
import Home from './assets/Home'
import Olx from './components/pages/Olx'
import Footer from "../src/components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/olx" element={<Olx />} />
       </Routes>
       <Footer/>
    </>
  )
}

export default App