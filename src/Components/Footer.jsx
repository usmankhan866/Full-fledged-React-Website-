import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';


const Footer = ()=> {
  return( 
  <>
     <div className='container-fluid'>
         <div className='row mb-5'>
             <div className='col-10 mx-auto'>
             <footer className="bg-light w-1 mt-4 text-center text-white">
                {/* Grid container --> */}
                <div className="container p-4 pb-0">
                    {/* Section: Social media --> */}
                    <section className="mb-4">
                    {/* Facebook --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#3b5998"}}
                        href="#!"
                        role="button"
                        ><FaFacebookF />
                    </a>

                    {/* Twitter --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#55acee"}}
                        href="#!"
                        role="button"
                        ><FaTwitter /></a>

                    {/* Google --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#dd4b39"}}
                        href="#!"
                        role="button"
                        ><FaGoogle /> </a>

                    {/* Instagram --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#ac2bac"}}
                        href="#!"
                        role="button"
                        ><FaInstagram /> </a>

                    {/* Linkedin --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#0082ca"}}
                        href="#!"
                        role="button"
                        ><FaLinkedin /></a>
                    {/* Github --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#333333"}}
                        href="#!"
                        role="button"
                        > <FaGithub /> </a>
                    </section>
                    {/* Section: Social media --> */}
                </div>
                {/* Grid container --> */}

                {/* Copyright --> */}
                <div class="text-center text-primary p-3" style={{backgroundColor: "rgba(0,0, 0, 0.2);"}}>
                    © 2020 Copyright:
                    <a class="text-primary" href=""> <strong>instabyte.com </strong>  </a>
                </div>
                {/* Copyright --> */}
</footer>
             </div>
         </div>
     </div>
  </>
  );
}

export default Footer;
