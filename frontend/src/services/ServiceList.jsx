import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Calculate the weather in your destination.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "We will provide you a good experience with our full suport.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "You can change your tours without any problems.",
    },
]

const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=>(
         <Col lg='3'md='6' sm='12' className='mb-4' key={index}>
        <ServiceCard item={item}/>
        </Col>      
  ))}
  </>
    
  
};

export default ServiceList;