import React from 'react'
import './css/Hero.css'
import { HeaderImage } from '../assets'
function Hero() {
  return (
    <div className='container-fluid px-5'>
        <div className="constainer-fluid d-flex flex-column flex-lg-row px-md-5 align-items-center justify-content-evenly main-container">
            <div className="text-div">
                <h2 className='fs-4'>Branding | Image Markating</h2>
                <h1 >Visual Designer</h1>
                <p className='fs-6'>This is a template Figma file, turned into code using Anima. 
                Learn more at AnimaApp.com</p>
                <button className='py-3 p-5 border-0'>
                    Contact
                </button>
            </div>
            <div className="image-div d-flex justify-content-end" >
                <img src={HeaderImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero