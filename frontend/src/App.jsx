import { Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import './style.css'
import Home from "./components/Home"
import Update1 from "./components/Update1"
import NavBar from "./components/NavBar"
import Profile from "./components/Profile"
import AdminLogin from "./components/Admin/AdminLogin"
import Course from "./components/Admin/Course"
import ContactUs from "./components/ContactUs"
import AdminDashboard from "./components/Admin/AdminDashboard"
import AdminCourse from "./components/Admin/AdminCourse"
import EditCourse from "./components/Admin/EditCourse"
import AddCourse from "./components/Admin/AddCourse"
import ManageAdmin from "./components/Admin/ManageAdmin"
import AddAdmin from "./components/Admin/AddAdmin"
import EditAdmin from "./components/Admin/EditAdmin"



let App=()=>{
  return<>
    <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/update" element={<Update1/>}/>
    <Route path="/navbar" element={<NavBar/>}/>
    <Route path="/profile" element={<Profile/>} />
    <Route path="/adminlogin" element={<AdminLogin/>}/>
    <Route path="/course" element={<Course/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/dashboard" element={<AdminDashboard/>}/>
    <Route path="/admincourse" element={<AdminCourse/>}/>
    <Route path="/editcourse/:id" element={<EditCourse/>} />
    <Route path="/addcourse" element={<AddCourse/>}/>
    <Route path="/manageadmin" element={<ManageAdmin/>}/>
    <Route path="/addadmin" element={<AddAdmin/>}/>
    <Route path="/editadmin/:id" element={<EditAdmin/>} />
    </Routes>
    
  </>
}
export default App