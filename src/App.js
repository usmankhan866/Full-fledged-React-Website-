import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = ()=> {
  return( 
  <>
    <Navbar />
     
     <BrowserRouter>
      <Routes>

          <Route  path='/' element={<Home />} /> 
          <Route  path='/services' element={<Services />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/contact' element={<Contact />} />
          <Route element={<Home />} /> 
      </Routes> 
      </BrowserRouter>
      <Footer />
  </>
  );
}

export default App;
