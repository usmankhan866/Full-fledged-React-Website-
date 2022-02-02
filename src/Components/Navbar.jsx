import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { NavLink } from 'react-router-dom';

const Navbar = ()=> {
  return( 
  <>

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-10 mx-auto'>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a className="navbar-brand" to='/'> <span className='brand_style'> Insta Bytes </span> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to='/'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to='/services'>Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to='/about'>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " to='/contact'>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>
  </div>
  </div>
  
  </>
  );
}

export default Navbar;
