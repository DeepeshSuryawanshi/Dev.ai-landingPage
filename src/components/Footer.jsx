import React from 'react'
import "./css/Footer.css"
import { discodeIcon,facebookIcon,ballIcon,instagramIcon, beIcon } from '../assets';

function Footer() {
  return (
    <section id='footer' className="container-fluid py-4 px-4">
        <h2>Lets work together</h2>
        <div className='main_container d-flex justify-content-between'>
            <div className="left_side">
                <p className='fs-5'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className="icons d-flex gap-4 mt-5">
                    <img src={discodeIcon} alt="Discode Icon" width={36} height={36} />
                    <img src={facebookIcon} alt="facebook Icon" width={36} height={36} />
                    <img src={ballIcon} alt="Ball Icon" width={36} height={36} />
                    <img src={instagramIcon} alt="Instagram Icon" width={36} height={36} />
                    <img src={beIcon} alt="be Icon" width={36} height={36} />
                </div>
            </div>
            <div className="right_side ">
                <form action="post" className='d-flex flex-column gap-4 '>
                    <input type="text" placeholder='Name' name="name" id="name" />
                    <input type="email" placeholder='Email' name="email" id="email" />
                    <button className='py-2 p-4 border-0' >
                        Submit
                    </button>
                </form>
            </div>
        </div>
        <p>This is test project Only For learning Purpose. 2024 no copyright</p>
    </section>
  )
}

export default Footer;