import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Add_user from "./features/Pages/Add_user";
import Home from "./features/Pages/Home";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
    <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Home/></>}></Route>
          <Route path="/add_user" element={<><Add_user/></>}></Route>
        </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
