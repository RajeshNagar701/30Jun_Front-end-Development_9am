import React from 'react'
import { Helmet } from 'react-helmet'

function Footer() {
    return (
        <div>
            {/* Footer Start */}
            <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3">
                            <p className="section-title text-white h5 mb-4">Address<span /></p>
                            <p><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
                            <p><i className="fa fa-envelope me-3" />info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
                                <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-outline-light btn-social" href><i className="fab fa-instagram" /></a>
                                <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <p className="section-title text-white h5 mb-4">Quick Link<span /></p>
                            <a className="btn btn-link" href>About Us</a>
                            <a className="btn btn-link" href>Contact Us</a>
                            <a className="btn btn-link" href>Privacy Policy</a>
                            <a className="btn btn-link" href>Terms &amp; Condition</a>
                            <a className="btn btn-link" href>Career</a>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <p className="section-title text-white h5 mb-4">Gallery<span /></p>
                            <div className="row g-2">
                                <div className="col-4">
                                    <img className="img-fluid" src="img/portfolio-1.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="img/portfolio-2.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="img/portfolio-3.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="img/portfolio-4.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="img/portfolio-5.jpg" alt="Image" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src="img/portfolio-6.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <p className="section-title text-white h5 mb-4">Newsletter<span /></p>
                            <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                            <div className="position-relative w-100 mt-3">
                                <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{ height: 48 }} />
                                <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-lg-5">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href>Home</a>
                                    <a href>Cookies</a>
                                    <a href>Help</a>
                                    <a href>FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
            <Helmet>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="website/lib/wow/wow.min.js"></script>
                <script src="website/lib/easing/easing.min.js"></script>
                <script src="website/lib/waypoints/waypoints.min.js"></script>
                <script src="website/lib/counterup/counterup.min.js"></script>
                <script src="website/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="website/lib/isotope/isotope.pkgd.min.js"></script>
                <script src="website/lib/lightbox/js/lightbox.min.js"></script>
                <script src="website/js/main.js"></script>
            </Helmet>
        </div>

    )
}

export default Footer