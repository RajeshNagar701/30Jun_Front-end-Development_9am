import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'



function Home() {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 align="center" className='mb-5'>Manage User</h2>
                        <Link to="/add_user" className='btn btn-primary float-end mb-5'>Add Data</Link>
                        <div className="container">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Mobile</th>
                                        <th>Image</th>
                                        <th align="center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td>Id</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Password</td>
                                        <td>Mobile</td>
                                        <td>Image</td>
                                        <td align="center">
                                            <button className='btn btn-danger m-1'>Delete</button>
                                            <button className='btn btn-primary m-1'>Edit</button>
                                            <button className='btn btn-success m-1'>Status</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>

                </div>
            </div>
            <Footer />
        </>

    )
}

export default Home