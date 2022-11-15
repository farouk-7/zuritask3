import React from 'react'
import './Navbar.css'
import Module from './Module'
import{ Link } from 'react-router-dom'
import {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {
  const [openModal, setOpenModal]= useState(false)
  const [nav, setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <div className='Navbar '>
        <div className='navbar_container'>
        <Link to='/' ><img src='./images/logo.png' id='logo'></img></Link>
            <div className='list'>
            <ul className={nav ? 'nav-mobile': 'menu'} onClick={()=>setNav(false)}>
                <Link to='/' className='home'><li id='tag'>Home</li></Link>
                <Link to='/placetostay'className='placetostay'><li id='tag'>Place to stay</li></Link>
                <Link to='/' className='nfts'><li id='tag'>NFTs</li></Link>
                <Link to='/' className='community'><li id='tag'>Community</li></Link> 
            <button id='btn1' onClick={()=>{setOpenModal(true)}}>connect wallet</button>
               
            </ul>
            </div>
            <div onClick={handleNav} id='toggle'>
              {nav ? <AiOutlineClose/>: <AiOutlineMenu/>}
            </div>

            <button id='btn' onClick={()=>{setOpenModal(true)}}>connect wallet</button>  
        </div>
        {openModal &&  <Module closeModal={setOpenModal}/>}
        
        
    </div>
  )
}

export default Navbar