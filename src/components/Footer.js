import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='f1'>
                <img src='./images/flogo.svg'></img>
                <div className='socials'>
                    <img src='./images/fb.png'></img>
                    <img src='./images/ig.png'></img>
                    <img src='./images/twitter.png'></img>
                </div>
                <img src='./images/license.png'></img>
            </div>

            <div className='f2'>
                <h1 className='head'>Community</h1>
                <p className='bot'>NFT</p>
                <p className='bot'>Tokens</p>
                <p className='bot'>Landlords</p>
                <p className='bot'>Discords</p>
            </div>

            <div className='f3'>
                 <h1 className='head'>Places</h1>
                <p className='bot'>Castle</p>
                <p className='bot'>Farms</p>
                <p className='bot'>Beach</p>
                <p className='bot'>Learn more</p>
            </div>

            <div className='f4'>
                 <h1 className='head'>About us</h1>
                <p className='bot'>Road map</p>
                <p className='bot'>Creators</p>
                <p className='bot'>Careers</p>
                <p className='bot'>contact us</p>
            </div>
        </div>
    </div>
  )
}

export default Footer