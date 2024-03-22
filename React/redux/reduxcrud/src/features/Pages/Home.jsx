import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { showUser } from '../Userslice'


function Home() {

    const dispatch = useDispatch();
    
    const { users, isLoading } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(showUser());
    }, []);


    
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 align="center" className='mb-5'>Manage User</h2>
                        <Link to="/add_user" className='btn btn-primary float-end mb-5'>Add Data</Link>
                        <div className="container">
                            { isLoading ? <><h2>Data Loading ....</h2></> : null}
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
                                    {
                                        users && users.map((value, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.password}</td>
                                                    <td>{value.mobile}</td>
                                                    <td>
                                                        <img src={value.img} width="50px" alt="" />
                                                    </td>
                                                    <td align="center">
                                                        <button className='btn btn-danger m-1'>Delete</button>
                                                        <button className='btn btn-primary m-1'>Edit</button>
                                                        <button className='btn btn-success m-1'>Status</button>
                                                    </td>
                                                </tr>
                                            )
                                        })

                                    }

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