import React from 'react'
import "./Product.css"
import Images from "../Index2.js" 


function Product() {
  return (
    <div className='god'>
      <div className='christ'>
        {
        Images && Images.map((item)=>
        <div key={item.id}>
        <div className='container'>
          <img src={item.image}></img>
          <div className='details'>
              <div className='name'>{item.name}</div>
              <div className='price'>{item.price}</div>
          </div>
          <div className='others'>
              <div className='distance'>{item.distance}</div>
              <div className='time'>{item.time}</div>
          </div>
          <img src='./images/stars.png'></img>
        </div>
        </div>)
        }
        </div>
    </div>
  )
}

export default Product