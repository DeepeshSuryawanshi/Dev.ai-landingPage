import React from 'react'
import './css/Services.css'
import { artDirection,productDesigne,visualDesigne } from '../assets'

function Services() {
  return (
    <section id='about' className='container-fluid d-flex justify-content-evenly py-5'>
        {/* card 01  */}
        <div className="card01 d-flex flex-column gap-3">
            <div className="image">
                <img src={productDesigne} alt="product designe" width={125}/>
            </div>
            <h2>Product Designe</h2>
            <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>
        {/* card 01  */}
        <div className="card01 d-flex flex-column gap-3">
            <div className="image">
                <img src={visualDesigne} alt="product designe" width={125}/>
            </div>
            <h2>Visual Designe</h2>
            <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>
        {/* card 01  */}
        <div className="card01 d-flex flex-column gap-3">
            <div className="image">
                <img src={artDirection} alt="product designe" width={125}/>
            </div>
            <h2>Art Direction</h2>
            <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>
    </section>
  )
}

export default Services