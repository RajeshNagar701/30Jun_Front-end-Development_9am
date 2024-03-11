import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

function Header() {

    return (
        <div>

            <Helmet>

                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />

                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />

                <link href="admin/assets/js/dataTables/dataTables.bootstrap.css" rel="stylesheet" />

                <link href="admin/assets/css/style.css" rel="stylesheet" />

                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

            </Helmet>

            <div className="navbar navbar-inverse set-radius-zero">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <NavLink className="navbar-brand" to="/admin-dashboard">
                            <img src="admin/assets/img/logo.png" />
                        </NavLink>
                    </div>
                    <div className="right-div">
                        <NavLink to="#" className="btn btn-danger pull-right">LOG ME OUT</NavLink>
                    </div>
                </div>
            </div>
            {/* LOGO HEADER END*/}
            <section className="menu-section">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="navbar-collapse collapse ">
                                <ul id="menu-top" className="nav navbar-nav navbar-right">
                                    <li><NavLink to="/admin-dashboard" className="menu-top-active">DASHBOARD</NavLink></li>
                                    <li>
                                        <NavLink to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Categories <i className="fa fa-angle-down" /></NavLink>
                                        <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                            <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/add-categories">Add categories</NavLink></li>
                                            <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/manage-categories">Manage Categories</NavLink></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Employee <i className="fa fa-angle-down" /></NavLink>
                                        <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                            <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/add-employee">Add Employee</NavLink></li>
                                            <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/manage-employee">Manage Employee</NavLink></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Services <i className="fa fa-angle-down" /></NavLink>
                                        <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                                            <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/add-services">Add Services</NavLink></li>
                                            <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/manage-services">Manage Services</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/manage-user">User</NavLink></li>
                                    <li><NavLink to="/manage-contact">Contact</NavLink></li>
                                    <li><NavLink to="/manage-feedback">Feedback</NavLink></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default Header