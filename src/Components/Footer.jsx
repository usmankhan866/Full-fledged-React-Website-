import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';


const Footer = ()=> {
  return( 
  <>
     <div className='container-fluid'>
         <div className='row mb-5'>
             <div className='col-10 mx-auto'>
             <footer className="w-1 mt-4 text-center text-white">
                {/* Grid container --> */}
                <div className="container p-4 pb-0">
                    {/* Section: Social media --> */}
                    <section className="mb-4 footer_style">
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
                        href="https://twitter.com/home"
                        target='_blank'
                        role="button"
                        ><FaTwitter /></a>

                    {/* Google --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#dd4b39"}}
                        href="https://www.google.com/"
                        target='_blank'
                        role="button"
                        ><FaGoogle /> </a>

                    {/* Instagram --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#ac2bac"}}
                        href="https://www.instagram.com/?hl=en"
                        target='_blank'
                        role="button"
                        ><FaInstagram /> </a>

                    {/* Linkedin --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#0082ca"}}
                        href="https://www.linkedin.com/feed/"
                        target='_blank'
                        role="button"
                        ><FaLinkedin /></a>
                    {/* Github --> */}
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{backgroundColor: "#333333"}}
                        href="https://github.com/usmankhan866"
                        target='_blank'
                        role="button"
                        > <FaGithub /> </a>
                    </section>
                    {/* Section: Social media --> */}
                </div>
                {/* Grid container --> */}

                {/* Copyright --> */}
                <div class="text-center text-white p-3" style={{backgroundColor: "rgba(0,0, 0, 0.2);"}}>
                    © 2020 Copyright:
                    <a class="text-primary text-decoration-none" href=""> <strong>instabyte.com </strong>  </a>
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
