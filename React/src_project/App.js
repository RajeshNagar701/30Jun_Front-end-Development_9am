import React,{ Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Contact from "./website/pages/Contact";
import Service from "./website/pages/Service";
import Team from "./website/pages/Team";
import Project from "./website/pages/Project";
import Testimonial from "./website/pages/Testimonial";
import PNF from "./website/pages/PNF";
import Signup from "./website/pages/Signup";
import Login from "./website/pages/Login";






//import Dashboard from "./admin/pages/Dashboard";
import AHeader from "./admin/component/Header";
import AFooter from "./admin/component/Footer";
import Admin_login from "./admin/pages/Admin_login";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_services from "./admin/pages/Add_services";
import Manage_services from "./admin/pages/Manage_services";
import Manage_user from "./admin/pages/Manage_user";
import Add_emp from "./admin/pages/Add_emp";
import Manage_emp from "./admin/pages/Manage_emp";
import Manage_contact from "./admin/pages/Manage_contact";
import Manage_feedback from "./admin/pages/Manage_feedback";
import Profile from "./website/pages/Profile";
import View_services from "./website/pages/View_services";
const Dashboard = React.lazy(() => import('./admin/pages/Dashboard'));





function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<><Home/></>}></Route>
        <Route path="/signup" element={<><Signup/></>}></Route>
        <Route path="/login" element={<><Login/></>}></Route>
        <Route path="/profile" element={<><Profile/></>}></Route>
        <Route path="/about" element={<><About/></>}></Route>
        <Route path="/contact" element={<><Contact/></>}></Route>
        <Route path="/service" element={<><Service/></>}></Route>
        <Route path="/view_service/:cate_id" element={<><View_services/></>}></Route>
        <Route path="/team" element={<><Team/></>}></Route>
        <Route path="/project" element={<><Project/></>}></Route>
        <Route path="/testimonial" element={<><Testimonial/></>}></Route>
        <Route path="*" element={<><PNF/></>}></Route>

        { 
        // admin Routes 
        }

        <Route path="/admin-login" element={<Admin_login/>}></Route>
        <Route path="/admin-dashboard" element={<> 
          <Suspense fallback = { <div class="spinner-border text-danger"></div> }> <AHeader/><Dashboard/><AFooter/></Suspense> </>}>
        </Route>  
        <Route path="/add-categories" element={<> <AHeader/> <Add_categories/> <AFooter/></>}></Route>
        <Route path="/manage-categories" element={<> <AHeader/> <Manage_categories/> <AFooter/></>}></Route>
        <Route path="/add-services" element={<> <AHeader/> <Add_services/> <AFooter/></>}></Route>
        <Route path="/manage-services" element={<> <AHeader/> <Manage_services/> <AFooter/></>}></Route>
        <Route path="/manage-user" element={<> <AHeader/> <Manage_user/> <AFooter/></>}></Route>  
        <Route path="/add-employee" element={<> <AHeader/> <Add_emp/> <AFooter/></>}></Route>
        <Route path="/manage-employee" element={<> <AHeader/> <Manage_emp/> <AFooter/></>}></Route>
        <Route path="/manage-contact" element={<> <AHeader/> <Manage_contact/> <AFooter/></>}></Route>
        <Route path="/manage-feedback" element={<> <AHeader/> <Manage_feedback/> <AFooter/></>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
