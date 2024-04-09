import React from 'react'
import Project from './Project'
function Hero() {
  return (
    <>
  <section>
    <div className="container">
       <header>
        <a href="#" className="logo">KEC</a>
        <ul>
          <li><a href="#ProductSection" className="active">Guidelines</a></li>
          {/* <li><a href="#">Contact</a></li>  */}
        </ul>
      </header> 
      <div className="content">
        <h2>Workmen Rakhsha - DMRC DE-04 Project</h2>
        <p>Workmen Rakhsha is a safety initiative implemented within the DMRC DE-04 Project, It aims to enhance safety measures at project sites by providing safety awareness to workers involved in construction projects. The initiative is tailored to safeguard workers and ensure the upkeep of a risk-free work environment.</p>
        <a href="#ProductSection">Guidelines</a>
      </div>
      <div className="imgBox">
        <img src="/assets/workImage1.png" alt />
      </div>
      <ul className="sci">
        <li><a href="https://www.facebook.com/Prem.kumar2145" target="_blank"><img src="/assets/facebook.png" alt /></a></li>
        <li><a href="https://twitter.com/PREMCHANDRAKUM1" target="_blank"><img src="/assets/twitter.png" alt /></a></li>
        <li><a href="https://www.linkedin.com/in/prem-chandra-kumar-2391ab1a0/" target="_blank"><img src="/assets/linkedin.png" alt /></a></li>
      </ul>
    </div>
  </section>
  <Project/>
  </>

    
  )
}

export default Hero