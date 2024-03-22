import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
           
            <div className="p-5 bg-primary text-white text-center">
                <h1>My First Bootstrap 5 Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add_user">Add User</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header