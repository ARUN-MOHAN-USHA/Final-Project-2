import React from 'react';
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import experienceImg from '../assets/images/imgDownloaded.png'; //changed image
//import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
// import ServiceList from '../services/ServiceList';
import Landingpage from '../shared/landingpage';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MesonryImagesGallery from '../components/Image-gallery/MesonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/NewsLetter';



const Home = () => {
  return  <>
  {/* ========== hero section start ========== */}
  <section>
    <Container>
      <Row>
        
         <Landingpage/>
        
        <SearchBar />
      </Row>
    </Container>
  
  </section>
   {/* ========== hero section start ========== */}


   {/* <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services__subtitle">what we serve</h5>
          <h2 className='services__title'>We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
   </section> */}
  

    {/* ========== featured tour section start ========== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle Subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our feature tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
     {/* ========== featured tour section end ========== */}

     {/* ========== experience section start ========== */}
      <setion>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle Subtitle={'Experience'}/>

              <h2>With our all experience <br/> we will serve you</h2>
              <p>Join with us to be a member and plan a memorable trip.
                <br/>
                  Our customer is our king so we are always with you..
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt=''/>  
              </div>
            </Col>
          </Row>
        </Container>
      </setion>
     {/* ========== experience section end ========== */}

      {/* ========== gallery section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle Subtitle={'Gallery'}/>
              <h2 className="gallery__title">
                Visit our customers tour gallery
                </h2>
            </Col>
            <Col lg='12'>
              <MesonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
       {/* ========== gallery section end ========== */}


       {/* ========== testimonial section start ========== */}
        <section>
          <Container>
            <Row>
              <Col lg='12'>
                <Subtitle Subtitle={'Members Review'}/>
                <h2 className="testimonial__title">What our members say about as</h2>
               </Col>
               <Col lg='12'>
                <Testimonials/>
               </Col>
            </Row>
          </Container>
        </section> 
       {/* ========== testimonial section end ========== */}
       <Newsletter/>
  </>
    
  
};

export default Home;