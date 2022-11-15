import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Placetostay.css'
import Imageses from "../index3.js"


function Placetostay() {
 
  
  return (
    <div className='pts'>
      <Navbar/>

    <div className='cod'>
      <div className='drop flex items-center gap-[65px]'>
        <ul className='list flex mb-[91px] mt-[70px] gap-[48px] text-[20px]' id='wow'>
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>fantast city</li>
          <li>beach</li>
          <li>Cabins</li>
          <li>Off-grid</li>
          <li>Farm</li>
          <img src='./images/locate.png' className='cursor-pointer mb-[25px]'>
        </img>
        </ul>
        
      </div>
      <div className='ghrist'>
        {
        Imageses && Imageses.map((item)=>
        <div key={item.id}>
        <div className='c_ontainer'>
          <img src={item.image}></img>
          {/* <div className='details'>
              <div className='name'>{item.name}</div>
              <div className='price'>{item.price}</div>
          </div> */}
          {/* <div className='others'>
              <div className='distance'>{item.distance}</div>
              <div className='time'>{item.time}</div>
          </div>
          <img src='./images/stars.png'></img> */}
        </div>
        </div>)
        }
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Placetostay