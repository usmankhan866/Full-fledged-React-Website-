import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Common = (props)=> {
  return( 
  <>
    <section id='header' className='d-flex align-item-center'>
     <div className='container-fluid'>
         <div className='row'>
             <div className='col-10 mx-auto'>
               <div className='row'>
                 <div className='col-md-6 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                   <h1 className='mt-6'>{props.name} <strong className='strong_style'> Own Skills </strong></h1>
                   <h2 className='my-3'>we are team of talented Developer and Enterprenuers</h2>
                   <div className='mt-3'>
                   <a href={props.visit} className='get-started'>{props.btnName}</a>
                  </div>

                 </div>
                 <div className='col-lg-6 order-1 order-lg-2 img d-flex justify-content-center mt-5'>
                     <img src={props.Imgsrc} alt="image" width={'100%'} className='img-fluid animated'/>
                 </div>
               </div>
              
              <div>
                  
              </div>
             </div>
         </div>
     </div>
     </section>
  </>
  );
}

export default Common;
