import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Header2 from '../component/Header2'
import Footer from '../component/Footer'
import { useNavigate } from 'react-router-dom';

function Profile() {

    const redirect=useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
      if(localStorage.getItem('userid'))
      {  
        fetch()
      }
      else
      {
        redirect('/')
      }
    }, []);
   
    // fetch data from api 
    const fetch = async () => {
      const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('userid')}`);
      console.log(res.data);
      setData(res.data); // set data from api in data var state
    }

    return (
        <div className="container-xxl bg-white p-0">
            <Header2 title={"Team"} />
            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center"><span />My Profile<span /></p>
                        <h1 className="text-center mb-5">Edit Profile and Manage Profile</h1>
                    </div>
                    <div className="row g-4">

                        <div className="offset-lg-4 col-lg-4 col-md-6 offset-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item bg-light rounded">
                                <div className="text-center border-bottom p-4">
                                    <img className="img-fluid rounded-circle mb-4" src={data.img} alt />
                                    <h5>{data.name}</h5>
                                    <span>Email : {data.email}</span><br /><br />
                                    <span>ID : {data.id}</span><br /><br />
                                    <span>Mobile : {data.mobile}</span><br /><br />
                                    <a href='' className='btn btn-primary'>Edit Profile</a>
                                </div>
                               
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Team End */}
            <Footer />
        </div>

    )
}

export default Profile