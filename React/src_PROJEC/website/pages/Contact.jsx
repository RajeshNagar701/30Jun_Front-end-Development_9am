import React, { useState } from 'react'
import axios from 'axios';
import Header2 from '../component/Header2'
import Footer from '../component/Footer'

function Contact() {

  const [formvalue,setFormvalue]=useState({
    id:"",
    name:"",
    email:"",
    comment:""
  });

  const getform=(e)=>{
    setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    const res = await axios.post(`http://localhost:3000/contact`,formvalue);
    //console.log(res);
    if(res.status==201)
    {
      setFormvalue({...formvalue,name:"",email:"",comment:""});
      alert('Contact submited success');
      return false;
    }
  }

  return (
    <div className="container-xxl bg-white p-0">
      <Header2 title={"Contact"}/>
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center"><span />Contact Us<span /></p>
            <h1 className="text-center mb-5">Contact For Any Query</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                <form action="" method='post' onSubmit={submithandel}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" name='name' value={formvalue.name} onChange={getform} className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" name='email' value={formvalue.email} onChange={getform} className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                  
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" name='comment' value={formvalue.comment} onChange={getform} placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
      <Footer/>
    </div>

  )
}

export default Contact