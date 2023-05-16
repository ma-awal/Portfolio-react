import React from 'react'
import './footer.css'
import facebook from '../../assets/facebook.png'
import linkdin from '../../assets/linkedin.png'
import Whatsup from './Whatsup'
const Footer = () => {
  return (
    <footer className='footer position-relative'>
       <div className="blur" style={{top:"36%",left:"-8rem"}}></div>
     <div className="container">
      <div className="row align-items-center justify-content-center text-center">
             <h6>follow me</h6>
           <div className="icon d-flex gap-2 justify-content-center">
  
            <a href="https://www.facebook.com/profile.php?id=100077524644610" target='_blank' className='text-decoration-none'><img src={facebook} className='img-fluid' alt="face" /></a>
            <a href="#" target='_blank'  className='text-decoration-none'><img src={linkdin} className='img-fluid' alt="link" /></a>
           </div>
      </div>
     </div>
     <Whatsup/>
    </footer>
  )
}

export default Footer
