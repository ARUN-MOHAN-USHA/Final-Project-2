import React from 'react'
import '../styles/about.css'


const About = () => {
  return ( 
 
  <>
  <div className='heading'>
     <h1>About us</h1>
     <p>Welcome to Around the world - Your Gateway to Unforgettable Journeys!</p>
  </div>
  <div className="container">
    <section className='about'>
      <div className="about-image">
      <img src="https://greatloveart.com/wp-content/uploads/2022/04/Beautiful-Places-In-The-World-wallpaper.jpg" alt="" />
      </div>
      <div className="about-content">
        <h2>Booking your dream vacation should be a joy, not a hassle.</h2>
        <p>At Around the world, we believe in the transformative power of travel. Our mission is to inspire and enable people to explore the world, discover new cultures, and create lasting memories. Whether you're a seasoned globetrotter or a first-time traveler, we're here to make your journey seamless, memorable, and filled with extraordinary experiences.</p>
          <a href="https://en.wikipedia.org/wiki/Tourism" className='read-more'>Read More</a>
      </div>
    </section>
  </div>
  </>
  ) 
}




export default About

