import React from 'react'
import TopBar from './components/TopBar.jsx'
import Intro from './components/Intro.jsx'
import Skill from './components/Skill.jsx'
import Service from './components/Service.jsx'
import Port from './components/Port.jsx'
import Trust from './components/Trust.jsx'
import Testimonial from './components/Testimonial.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="skill" element={<Skill />} />
            <Route path="port" element={<Port />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Intro />
      <Skill />
      <Service />
      <Port />
      <Trust />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
