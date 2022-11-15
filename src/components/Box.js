import React from 'react'
import "./Box.css"

function Box() {
  return (
    <div className='can'>
        <div className='box_container'>
            <div className='right'>
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFTs gift cards collections. Loyal<br/>
                    customers gets amazing gift cards which are<br/> traded for NFTs.
                    These NFTs gives our customers<br/> access to loads of exclusive services.
                </p>
                <button id='learn'>Learn more</button>

            </div>

            <div className='left'>
               <img src='./images/Frame.png'></img>
            </div>
        </div>
    
    </div>
  )
}

export default Box