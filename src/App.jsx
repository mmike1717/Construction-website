// import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/navBar';
import './App.css'
import HomePage from './components/HomePage/homePage';
import AboutUs from './components/AboutUsPage/aboutUsPage';
import ContactPage from './components/ContactUs/ContactPage';
import ServicesPage from './components/Services/ServicesPage';

function App() {



  return (
    <>
      <NavBar/>

      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>

        <Route exact path='/AboutUs' element={<AboutUs/>}></Route>

        <Route exact path='/Contact' element={<ContactPage/>}></Route>

        <Route exact path='/Services' element={<ServicesPage/>}></Route>


      </Routes>

    </>
  )
}

export default App
