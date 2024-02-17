import React from 'react'
import Header2 from '../component/Header2'
import Footer from '../component/Footer'

function Service() {
    return (
        <div className="container-xxl bg-white p-0">
            <Header2 title={"Sevice"}/>
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center"><span />Our Services<span /></p>
                        <h1 className="text-center mb-5">What Solutions We Provide</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex flex-column text-center rounded">
                                <div className="service-icon flex-shrink-0">
                                    <i className="fa fa-search fa-2x" />
                                </div>
                                <h5 className="mb-3">SEO Optimization</h5>
                                <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <a className="btn btn-square" href><i className="fa fa-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item d-flex flex-column text-center rounded">
                                <div className="service-icon flex-shrink-0">
                                    <i className="fa fa-laptop-code fa-2x" />
                                </div>
                                <h5 className="mb-3">Web Design</h5>
                                <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <a className="btn btn-square" href><i className="fa fa-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item d-flex flex-column text-center rounded">
                                <div className="service-icon flex-shrink-0">
                                    <i className="fab fa-facebook-f fa-2x" />
                                </div>
                                <h5 className="mb-3">Social Media Marketing</h5>
                                <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <a className="btn btn-square" href><i className="fa fa-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item d-flex flex-column text-center rounded">
                                <div className="service-icon flex-shrink-0">
                                    <i className="fa fa-mail-bulk fa-2x" />
                                </div>
                                <h5 className="mb-3">Email Marketing</h5>
                                <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <a className="btn btn-square" href><i className="fa fa-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item d-flex flex-column text-center rounded">
                                <div className="service-icon flex-shrink-0">
                                    <i className="fa fa-thumbs-up fa-2x" />
                                </div>
                                <h5 className="mb-3">PPC Advertising</h5>
                                <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <a className="btn btn-square" href><i className="fa fa-arrow-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item d-flex flex-column text-center rounded">
                                <div className="service-icon flex-shrink-0">
                                    <i className="fab fa-android fa-2x" />
                                </div>
                                <h5 className="mb-3">App Development</h5>
                                <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                <a className="btn btn-square" href><i className="fa fa-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
            {/* Newsletter Start */}
            <div className="container-xxl bg-primary newsletter py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5 px-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <p className="section-title text-white justify-content-center"><span />Newsletter<span /></p>
                            <h1 className="text-center text-white mb-4">Stay Always In Touch</h1>
                            <p className="text-white mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo</p>
                            <div className="position-relative w-100 mt-3">
                                <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{ height: 48 }} />
                                <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Newsletter End */}
            {/* Testimonial Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5 px-lg-5">
                    <p className="section-title text-secondary justify-content-center"><span />Testimonial<span /></p>
                    <h1 className="text-center mb-5">What Say Our Clients!</h1>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item bg-light rounded my-4">
                            <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3" />Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{ width: 65, height: 65 }} />
                                <div className="ps-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded my-4">
                            <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3" />Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{ width: 65, height: 65 }} />
                                <div className="ps-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded my-4">
                            <p className="fs-5"><i className="fa fa-quote-left fa-4x text-primary mt-n4 me-3" />Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{ width: 65, height: 65 }} />
                                <div className="ps-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
            <Footer/>
        </div>

    )
}

export default Service