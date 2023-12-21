import React from 'react';
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-7.jpg'
import ava02 from '../../assets/images/ava-6.jpg'
import ava03 from '../../assets/images/ava-5.jpg'
import ava04 from '../../assets/images/ava-4.jpg'

const Testimonials = () => {
    const settings={
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive:[
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
            }, 
        },
      ]
    }

  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>I am using this site for long years.Always helpfull and making my trip much more easy.</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Arun Mohan</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>I recoment this to everyone .My trip is well enjoyed and its a life time memory for me</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Monisha</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>This website is very convienent and user frendlly and also easy to know placess.</p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Ravi</h6>
                <p>Customer</p>
            </div>
        </div>

    </div>

    <div className="testimonial py-4 px-3">
        <p>This website is very helpfull.Thank you so much. </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Rahul</h6>
                <p>Customer</p>
            </div>
        </div>

    </div>
  </Slider>
    
  
};

export default Testimonials;