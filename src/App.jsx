import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Hero, Navbar,BrandBar,Services,LastWork,Testimonial,Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app container-fluid">
      <Navbar/>
      <Hero/>
      <BrandBar/>
      <Services/>
      <LastWork/>
      <Testimonial/>
      <Footer/>
   </div>
  )
}

export default App
