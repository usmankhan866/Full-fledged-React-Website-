import React, { useState } from 'react';

const Contact = ()=> {

  const [data, setData] = useState({
     
    fullName: '',
    phone: '',
    Address: '',
    email: '',
    msg: ''
  })

  const inpEvent = (event)=>{

    const {name, value} = event.target;
    
    setData((preVal)=>{

        return {
          ...preVal,
             [name] : value 
        }
    })
  }

  const formSubmit = (e)=>{
     
    e.preventDefault();
    alert(`My name is ${data.fullName}. And phone number is ${data.phone}. 
    And my Address ${data.Address}. And my email is ${data.email}. And my message is ${data.msg}`);
  }

  return( 
  <>

    <div className='text-center mt-4'>
      <h2> Our Contects </h2>
    </div>
     <div className='container-fluid'>
       <div className='row mt-3'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit= {formSubmit}>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">FullName</label>
                    <input type="text"
                           class="form-control" 
                           id="exampleFormControlInput1" 
                           name='fullName'
                           value={data.fullName}
                           onChange={inpEvent}
                           required
                           placeholder="Enter Your FullName" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                    <input type="number" 
                           class="form-control" 
                           id="exampleFormControlInput1" 
                           name='phone'
                           value={data.phone}
                           onChange={inpEvent}
                           required
                           placeholder="Enter Your Ph Number" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"> Address</label>
                    <input type="text" 
                           class="form-control" 
                           id="exampleFormControlInput1" 
                           name='Address'
                           value={data.Address}
                           onChange={inpEvent}
                           required
                           placeholder="Enter Your Address" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" 
                           class="form-control" 
                           id="exampleFormControlInput1" 
                           name='email'
                           value={data.email}
                           onChange={inpEvent}
                           required
                           placeholder="name@example.com" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" 
                              id="exampleFormControlTextarea1" 
                              name='msg'
                              value={data.msg}
                              onChange={inpEvent}
                              required
                              rows="3"> 
                              </textarea>
                  </div>

                  <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                  </div>
            </form>
          </div>
       </div>
     </div>
  </>
  );
}

export default Contact;
