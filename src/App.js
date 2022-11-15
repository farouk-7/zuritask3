
import './App.css'
import React from 'react'
import Land from './pages/Land'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Placetostay from './pages/Placetostay'


function App() {
  
  return (
    <>
    <Router>
    <Routes>
    <Route path='/' element ={<Land />}/>
    <Route path='/placetostay' element ={<Placetostay />}/>
    </Routes>
   
    </Router>
   
   
    


    </>
  )
  }

export default App
