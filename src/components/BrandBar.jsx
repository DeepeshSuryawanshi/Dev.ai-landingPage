import React from 'react'
import { googleLogo,nikeLogo,samsungLogo,appleLogo,addidsLogo } from '../assets'

export const BrandBar = () => {
  return (
    <div className='container-fluid d-flex aligne-items-center justify-content-between py-5 px-5'>
        <img src={googleLogo} alt="Google logo" />
        <img src={nikeLogo} alt="nike logo" />
        <img src={samsungLogo} alt="samsung logo" />
        <img src={appleLogo} alt="apple logo" />
        <img src={addidsLogo} alt="addidas logo" />
    </div>
  )
}
