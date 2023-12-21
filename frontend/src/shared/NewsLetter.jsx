import React from 'react'
import './newsletter.css'

import { Container, Row, Col} from 'reactstrap'
// import maleTourist from '../assets/images/male-tourist.png'
import maleTourist from '../assets/images/male-tourist1.png'
// import maleTourist from '../assets/images/male-tourist2.png'
// import maleTourist from '../assets/images/male-tourist3.png'

const Newsletter = () => {
  return ( 
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newletter__content">
                    <h2>Enter your email now to get new travel information.</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Submit</button>
                    </div>

                    <p>Connect with us.. So you can get updates of new placess and itinerary</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
    
  )
}

export default Newsletter