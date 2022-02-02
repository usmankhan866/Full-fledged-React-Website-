import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Img from '../Images/image 3.jfif';
import Common from './Common';

const Home = ()=> {
  return( 
  <>
    <Common 
           name="Develop your" 
           Imgsrc={Img} 
           visit="/services" 
           btnName="Get Started"/>
  </>
  );
}

export default Home;
