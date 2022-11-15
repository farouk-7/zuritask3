import React from 'react'
import './Module.css'

function Module({closeModal}) {
  return (
    <div className='module_background'>
        
        <div className='module_container'>
            <div className='titl'>
                <h1>Connect Wallet</h1>
                <button className='cancle' onClick={()=> closeModal(false)}>X</button>
            </div>
            <div className='hl'></div>
            <div className='body'>
            <h2>Choose your preferred wallet:</h2>
            <img src='./images/modal1.png'></img>
            <img src='./images/modal2.png'></img>
            </div>
        </div>
        
    </div>

  )
}

export default Module