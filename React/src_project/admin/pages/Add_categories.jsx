
import React, { useState } from 'react'
import axios from 'axios';


function Add_categories() {

  const [formvalue,setFormvalue]=useState({
    id:"",
    cate_name:"",
    cate_img:""
  });

  const getform=(e)=>{
    setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
    console.log(formvalue);
  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    const res = await axios.post(`http://localhost:3000/categories`,formvalue);
    //console.log(res);
    if(res.status==201)
    {
      setFormvalue({...formvalue,cate_name:"",cate_img:""});
      alert('Categories submited success');
      return false;
    }
  }

  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="row pad-botm">
          <div className="col-md-12">
            <h4 className="header-line">Add Categories</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel panel-info">
              <div className="panel-heading">
              Add Categories
              </div>
              <div className="panel-body">
                <form role="form" action="" method='post' onSubmit={submithandel}>
                  <div className="form-group">
                    <label>Categories Name</label>
                    <input className="form-control" name='cate_name' value={formvalue.cate_name} onChange={getform} type="text" />
                    <p className="help-block">Help text here.</p>
                  </div>
                  <div className="form-group">
                    <label>Image Upload</label>
                    <input className="form-control" name="cate_img" value={formvalue.cate_img}  onChange={getform} type="url" />
                    <p className="help-block">Help text here.</p>
                  </div>
                  
                  <button type="submit" className="btn btn-info">Submit </button>
                </form></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add_categories