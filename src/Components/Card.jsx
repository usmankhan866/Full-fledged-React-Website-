import React from 'react';

const Card = (props)=> {
  
    return(
  <>
    <div className='col-md-4 mx-auto mt-2'>
     <div className="card mb-3">
                    <img src={props.imgsrc} className="card-img-top" alt="images" height={"160px"} />
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold">{props.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">View Course</a>
                    </div>
</div>
</div>
  </>
  );
}

export default Card;
