import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

function Header1() {
  return (
    <div>
      
      <Helmet>
      
	
  <link href="website/img/favicon.ico" rel="icon"/>


  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Jost:wght@500;600;700&display=swap" rel="stylesheet"/> 


  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>

 
  <link href="website/lib/animate/animate.min.css" rel="stylesheet"/>
  <link href="website/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
  <link href="website/lib/lightbox/css/lightbox.min.css" rel="stylesheet"/>


  <link href="website/css/bootstrap.min.css" rel="stylesheet"/>

  <link href="website/css/style.css" rel="stylesheet"/>

      </Helmet>
    
      {/* Spinner End */}
      {/* Navbar & Hero Start */}
      <div className="container-xxl position-relative p-0">
        <Navbar/>
        <div className="container-xxl bg-primary hero-header">
          <div className="container px-lg-5">
            <div className="row g-5 align-items-end">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="text-white mb-4 animated slideInDown">A Digital Agency Of Inteligents &amp; Creative People</h1>
                <p className="text-white pb-3 animated slideInDown">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                <a href className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</a>
                <a href className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
              </div>
              <div className="col-lg-6 text-center text-lg-start">
                <img className="img-fluid animated zoomIn" src="website/img/hero.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header1