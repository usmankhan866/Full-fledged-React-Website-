import React from 'react';
import Common from './Common';
import Virtual from '../Images/virtual-learing.jpg';

const About = ()=> {
  return( 
  <>
    <Common 
           name="About Page" 
           Imgsrc={Virtual}
           visit="/contact" 
           btnName="Connect"/>
  </>
  );
}

export default About;
