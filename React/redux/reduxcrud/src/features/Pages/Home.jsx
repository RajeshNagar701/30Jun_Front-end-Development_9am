import React, { useEffect,useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { showUser, deletedata,updatedata } from '../Userslice'
import { toast } from 'react-toastify'


function Home() {
    const redirect = useNavigate();
    const dispatch = useDispatch();

    const { users, isLoading } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(showUser());
    }, []);

    const deletehandel = async (id) => {
        dispatch(deletedata(id));
        dispatch(showUser());
    }

    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        img: "",
    });

    const edithandel = async (id) => {
        const editdata=users.filter((value)=>{ return value.id==id});
        setForm(editdata[0]);
    }

    const changeHandel = (e) => {
        setForm({ ...form,[e.target.name]:e.target.value});
        console.log(form);
    }

    const vadidation = () => {
        var result = true;
        if (form.name == "") {
            toast.error('Name Field is required !')
            result = false;
            return false;
        }
        if (form.email == "") {
            toast.error('email Field is required !')
            result = false;
            return false;
        }

        if (form.mobile == "") {
            toast.error('mobile Field is required !')
            result = false;
            return false;
        }
        if (form.img == "") {
            toast.error('img Field is required !')
            result = false;
            return false;
        }
        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (vadidation()) {
            dispatch(updatedata(form.id,form));
            dispatch(showUser());
            return false;
        }

    }



    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 align="center" className='mb-5'>Manage User</h2>
                        <Link to="/add_user" className='btn btn-primary float-end mb-5'>Add Data</Link>
                        <div className="container">
                            {isLoading ? <><h2>Data Loading ....</h2></> : null}
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
                                        users && users.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.password}</td>
                                                    <td>{item.mobile}</td>
                                                    <td>
                                                        <img src={item.img} width="50px" alt="" />
                                                    </td>
                                                    <td align="center">
                                                        <button className='btn btn-danger m-1' onClick={() => { deletehandel(item.id) }}>Delete</button>
                                                        <button className='btn btn-primary m-1' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => { edithandel(item.id) }}>Edit</button>
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
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <form action="" method='post'  >
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Name:</label>
                                    <input type="text" value={form.name} onChange={changeHandel} className="form-control" placeholder="Enter Name" name="name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" value={form.email} onChange={changeHandel} className="form-control" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Mobile:</label>
                                    <input type="number" value={form.mobile} onChange={changeHandel} className="form-control" placeholder="Enter Mobile" name="mobile" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email" className="form-label">Upload Image:</label>
                                    <input type="url" value={form.img} onChange={changeHandel} className="form-control" name="img" />
                                </div>

                                <button type="submit" onClick={submitHandel} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>




            <Footer />
        </>

    )
}

export default Home