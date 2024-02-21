import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <Link to="/" className="navbar-brand p-0">
                <h1 className="m-0">DGital</h1>
                {/* <img src="img/logo.png" alt="Logo"> */}
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                    <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                    <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                    <NavLink to="/project" className="nav-item nav-link">Project</NavLink>
                    <div className="nav-item dropdown">
                        <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                        <div className="dropdown-menu m-0">
                            <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                            <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                            <NavLink to="/404" className="dropdown-item">404 Page</NavLink>
                        </div>
                    </div>
                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                </div>
                <Link to="/login" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Login</Link>
            </div>
        </nav>

    )
}

export default Navbar