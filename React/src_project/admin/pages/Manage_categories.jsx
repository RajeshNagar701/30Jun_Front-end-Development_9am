import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Manage_categories() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  }
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/categories/${id}`);
    fetch();
  }

  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="row pad-botm">
          <div className="col-md-12">
            <h4 className="header-line">Manage Categories</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Advanced Tables */}
            <div className="panel panel-default">
              <div className="panel-heading">
                Manage Categories
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
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
                              <td>{value.cate_name}</td>
                              <td><img src={value.cate_img} alt="" width="50px"  /></td>
                              <td className="center">
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

export default Manage_categories