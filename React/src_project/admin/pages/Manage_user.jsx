import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

function Manage_user() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
  }, []);
 
  // fetch data from api 
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/user`);
    console.log(res.data);
    setData(res.data); // set data from api in data var state
  }

  // delete 
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    fetch();
  }

  const statusHandel = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    if(res.data.status=="Block")
    {
      const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"Unblock"});
      if(res.status==200)
      {
        toast.success('Status Unblock success');
        fetch();
      }
    }
    else
    {
      const res = await axios.patch(`http://localhost:3000/user/${id}`,{status:"Block"});
      if(res.status==200)
      {
        localStorage.removeItem('userid');
        localStorage.removeItem('uname');
        toast.success('Status Block success');
        fetch();
      }
    }
  }
  
  return (
    <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">Manage User</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default">
            <div className="panel-heading">
              Advanced Tables
            </div>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                  <tr>
                        
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Mobile</th>
                        <th>Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map((value, index, arr) => {

                          return (
                            <tr className="odd gradeX">
                              <td>{value.id}</td>
                              <td>{value.name}</td>
                              <td>{value.email}</td>
                              <td>{value.password}</td>
                              <td>{value.mobile}</td>
                              <td><img src={value.img} alt="" width="50px"/></td>
                             
                              <td className="center">
                                <button className='btn btn-success' onClick={()=>statusHandel(value.id)}>{value.status}</button>
                                <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)}>Delete</button>
                                <button className='btn btn-primary'>Edit</button>
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
          {/*End Advanced Tables */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Manage_user