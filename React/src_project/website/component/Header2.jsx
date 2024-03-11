import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

function Header2({ title }) {
    return (
        <div>

            <Helmet>
                <link href="website/img/favicon.ico" rel="icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Jost:wght@500;600;700&display=swap" rel="stylesheet" />


                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />


                <link href="website/lib/animate/animate.min.css" rel="stylesheet" />
                <link href="website/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="website/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />


                <link href="website/css/bootstrap.min.css" rel="stylesheet" />

                <link href="website/css/style.css" rel="stylesheet" />

            </Helmet>

            {
                /*
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            */
            }
            {/* Spinner End */}
            {/* Navbar & Hero Start */}
            <div className="container-xxl position-relative p-0">
                <Navbar />
                <div className="container-xxl py-5 bg-primary hero-header">
                    <div className="container my-5 py-5 px-lg-5">
                        <div className="row g-5 py-5">
                            <div className="col-12 text-center">
                                <h1 className="text-white animated slideInDown">{title}</h1>
                                <hr className="bg-white mx-auto mt-0" style={{ width: 90 }} />
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                        <li className="breadcrumb-item text-white active" aria-current="page">{title}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header2