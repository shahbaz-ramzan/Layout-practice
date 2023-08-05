import { useState } from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Dropdown from './Dropdown'
import Contact from './Contact'

function App() {

  return (
    <>
      <div className='container-for-all'>
     
     <nav className='navbar'>
     <div className='logo'>ARSHA</div>
     <Home />
     <About />
     <Services />
     <Portfolio />
     <Dropdown />
     <Contact />
     <a href='https://www.google.com' style={{textDecoration:"none" ,color:"white"}}>Get Started</a>
     
     </nav>
    <div className='container'>
    <div className='content-container'>
      <h1>Better Solution For Your Business</h1>
      <h3>We are team of talented designers making websites with Bootstrap</h3>
      <div className='ancher'>
      <a  href='https://www.google.com' style={{textDecoration:"none"}}>Get Started</a>
      <a href='https://www.youtube.com' style={{textDecoration:"none"}}>Watch Video</a>
      </div>
      </div>
     <div className='img'>
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9YaWbhK4QRQgoMnW8jYMgDAY7tJEzgzCdXxOVtfIzQ&s" alt='Image' style={{height:"400px",width:"450px"}}></img>
     </div>
    </div>
    <div className='footer'>
      <p>@ Copyright Arsha. All Rights Reversed </p>
      <p>Designed by BootstrapMade </p>
    </div>
      </div>
    </>
  )
}

export default App
