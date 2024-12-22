import React from 'react'
import './css/Testimonial.css'
import { clientImage, stars } from '../assets'

export default function Testimonial() {
  return (
    
        <div className="container-fluid py-5 px-5">
        <h2 className='text-center py-4 fs-3 fw-semibold'>Testimonial</h2>
            <div className="row">
                <div className="card-col px-5 py-4 bg-card col-4">
                    <p className='fw-semibold text-20' >This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                    <div className='profile d-flex gap-3 aligne-items-center'> 
                      <img src={clientImage} alt="Client Image" width={50} height={50} />
                      <div className="text">
                          <img src={stars} alt="Rating"/>
                          <h5 className='m-0 py-1'>Gemma Nole</h5>
                          <p className='fs-5'>Google</p>  
                      </div>
                    </div>
                </div>

                <div className="card-col px-5 py-4 bg-card col-4">
                    <p className='fw-semibold text-20' >This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                    <div className='profile d-flex gap-3 aligne-items-center'> 
                      <img src={clientImage} alt="Client Image" width={50} height={50} />
                      <div className="text">
                          <img src={stars} alt="Rating"/>
                          <h5 className='m-0 py-1'>Gemma Nole</h5>
                          <p className='fs-5'>Google</p>  
                      </div>
                    </div>
                </div>

                <div className="card-col px-5 py-4 bg-card col-4">
                    <p className='fw-semibold text-20' >This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                    <div className='profile d-flex gap-3 aligne-items-center'> 
                      <img src={clientImage} alt="Client Image" width={50} height={50} />
                      <div className="text">
                          <img src={stars} alt="Rating"/>
                          <h5 className='m-0 py-1'>Gemma Nole</h5>
                          <p className='fs-5'>Google</p>  
                      </div>
                    </div>
                </div> 

            </div>
            <div className="row mt-3 gm-2">
                <div className="card-col bg-card col-4">
                    <p className='px-3 py-3 fw-semibold text-20' >This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                    <div className='profile px-5 d-flex gap-3 aligne-items-center'> 
                      <img src={clientImage} alt="Client Image" width={50} height={50} />
                      <div className="text">
                          <img src={stars} alt="Rating"/>
                          <h5 className='m-0 py-1'>Gemma Nole</h5>
                          <p className='fs-5'>Google</p>
                      </div>
                    </div>
                </div>

                <div className="card-col bg-card col-4">
                    <p className='px-3 py-3 fw-semibold text-20' >This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                    <div className='profile px-5 d-flex gap-3 aligne-items-center'> 
                      <img src={clientImage} alt="Client Image" width={50} height={50} />
                      <div className="text">
                          <img src={stars} alt="Rating"/>
                          <h5 className='m-0 py-1'>Gemma Nole</h5>
                          <p className='fs-5'>Google</p>
                      </div>
                    </div>
                </div>
                <div className="card-col bg-card col-4">
                    <p className='px-3 py-3 fw-semibold text-20' >This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                    <div className='profile px-5 d-flex gap-3 aligne-items-center'> 
                      <img src={clientImage} alt="Client Image" width={50} height={50} />
                      <div className="text">
                          <img src={stars} alt="Rating"/>
                          <h5 className='m-0 py-1'>Gemma Nole</h5>
                          <p className='fs-5'>Google</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
