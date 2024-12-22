import React from 'react'
import "./css/lastWork.css"
import { workFive, workFour, workOne, workSix, workThree, workTwo } from '../assets'

export default function LastWork() {
  return (
    <section id='work' className='container-fluid py-5 px-5'>
        <div className="container">
        <h2 className='text-center py-4 fs-3 fw-semibold'>Last Work</h2>
            <div className="row">
                <div className="card-col col-4">
                    <img src={workOne} alt="" width={320} height={350} />
                    <h6 className='px-1 py-2 m-0'>Project title</h6>
                    <p className='px-1' > UI,Art Designe</p>
                </div>

                <div className="card-col col-4">
                <img src={workTwo} alt="" width={320} height={350} />
                    <h6 className='px-1 py-2 m-0'>Project title</h6>
                    <p className='px-1' > UI,Art Designe</p>
                </div>
                <div className="card-col col-4">
                    <img src={workThree} alt="" width={320} height={350} />
                    <h6 className='px-1 py-2 m-0'>Project title</h6>
                    <p className='px-1' > UI,Art Designe</p>
                </div>
            </div>
            {/* second  */}
            <div className="row">
                <div className="card-col col-4">
                    <img src={workFive} alt="" width={320} height={350} />
                    <h6 className='px-1 py-2 m-0'>Project title</h6>
                    <p className='px-1' > UI,Art Designe</p>
                </div>

                <div className="card-col col-4">
                <img src={workSix} alt="" width={320} height={350} />
                    <h6 className='px-1 py-2 m-0'>Project title</h6>
                    <p className='px-1' > UI,Art Designe</p>
                </div>
                <div className="card-col col-4">
                    <img src={workFour} alt="" width={320} height={350} />
                    <h6 className='px-1 py-2 m-0'>Project title</h6>
                    <p className='px-1' > UI,Art Designe</p>
                </div>
            </div>
        </div>
    </section>
  )
}
