import React from 'react'
import './landingpage.css'
import heroVideo from '../assets/images/video2.mp4'


const Landingpage = () => {
  return (
     <section class="py-5 text-center container">
    <div className='content text-center container'>

        <video src={heroVideo} autoPlay muted loop class='back-video'/>
        <div className='bg-overlay'></div>
        <h1>Explore The World</h1>

    </div>
    </section>
  )
}

export default Landingpage;