import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Services = ()=> {
  return( 
  <>
    <div className='text-center my-4'>
        <h2> Our Services </h2>
    </div> 
     <div className='container-fluid'>
       <div className='row'>
         <div className='col-10 mx-auto'>
           <div className='row'>
             

            {
               Sdata.map((val, ind)=>{
                 return <Card 
                            key={ind}
                            imgsrc = {val.imgsrc}
                            title = {val.title} 
             />
               })
              
            } 
            
           </div>
         
         </div>
       </div>
     </div>
  </>
  );
}

export default Services;
