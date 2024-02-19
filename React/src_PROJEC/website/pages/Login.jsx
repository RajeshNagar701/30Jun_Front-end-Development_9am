import React from 'react'
import Header2 from '../component/Header2'
import Footer from '../component/Footer'

function Login() {
  return (
    <div className="container-xxl bg-white p-0">
      <Header2 title={"Login"}/>
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center"><span />Login Us<span /></p>
            <h1 className="text-center mb-5">Login For Services</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <form>
                  <div className="row g-3">
                   
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="password" className="form-control" id="name" placeholder="Your Password" />
                        <label htmlFor="name">Your Password</label>
                      </div>
                    </div>
                 
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
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

export default Login