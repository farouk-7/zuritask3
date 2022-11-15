import React from 'react'

import './Home.css'

function Home() {
   const handleClick=()=>{
     const location = document.querySelector('#location');
     if(!location.value){
      alert("INSERT LOCATION")
     }
     else{
       alert("LOCATION CONFIRMED")
     }
   }
  return (
  <div className='all'>
    <div className='home'>
      <div className='home_container'>
        <div className='home_first'>
          <div className='home_text'>
            <h1>Rent a <span>Place</span> away from<br/> <span>Home</span> in the <span>Metaverse</span></h1>
            <p>We provide you access to luxury and affordable houses<br/>
              in the metaverse, get a chance to turn your<br/> imagination to reality at your comfort zone
            </p>
            <div className='btn2'>
              <input required type='text' id='location' placeholder='Search for location'></input>
              <button className='search' onClick={handleClick}>search</button>
            </div>
          </div>
        </div>
        <div className='home_second'>
           <div className='img_sec1'>
             <img src='./images/image 4.png'></img>
             <img src='./images/image 6.png'></img>

           </div>
           <div className='img_sec2'>
              <img src='./images/image 3.png'></img>
              <img src='./images/image 5.png'></img>

           </div>
        </div>

      </div>
    </div>






      <div className='ads'>
        <div className='ad_content'>
          <img src='./images/ad1.svg' className='one'></img>
          <img src='./images/ad2.svg' className='two'></img>
          <img src='./images/ad3.svg' className='three'></img>
        </div>
      </div>

      <div className='cards'>
        <h1>Inspiration for your next adventure</h1>
      </div>
      
</div> 

  )
}

export default Home