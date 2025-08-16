import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import {Link, useNavigate} from 'react-router-dom';
import logo2 from "../assets/logo2.png"

let NavBar=()=>{
    let [isRegister,setRegister]=useState(false);
    let [isLog,setLog]=useState(false);

    let navigate=useNavigate()

    let handleLogout=()=>{
        localStorage.clear()
        navigate('/')
    }

    let user=JSON.parse(localStorage.getItem("user"))
    let handleRegister=()=>{
        setRegister(!isRegister)
    }
    let handleLog=()=>{
        setLog(!isLog)
    }
    
    return <>
        <div className="flex  h-[80px] items-center place-content-evenly bg-gray-900 text-white">
            <ul  className="h-[80px] items-center flex">
                <li className="hover:text-teal-200 transition-colors duration-200 font-medium cursor-pointer flex items-center gap-[20px]  w-[600px]"><img src={logo2} alt="cannot fetch" className="h-[100px] w-[100px]" /><p className="font-bold text-2xl">Student Course Managment System</p></li>
            </ul>
        <ul className="flex  h-[80px] items-center place-content-evenly gap-15  w-[700px]" >
             <li className="hover:text-teal-200 transition-colors duration-200 font-medium  cursor-pointer"><Link to='/'>Home</Link></li>
            {user?(<li className="hover:text-teal-200 transition-colors duration-200 font-medium  cursor-pointer"><Link to='/profile'>Profile</Link></li>):(
            <li className="hover:text-teal-200 transition-colors duration-200 font-medium  cursor-pointer flex items-center relative" onClick={handleRegister}>Register
                {isRegister?<IoMdArrowDropup />:<IoMdArrowDropdown/>}
                {isRegister &&(
                    <ul className="absolute top-full left-0 mt-3 bg-blue-600  text-white  border rounded shadow-lg min-w-[100px] p-[5px]">
                       <li className="border-2 bg-white text-black"> <Link>Admin</Link><br /></li>
                       <li className="border-2 bg-white text-black"> <Link to='/register'>Student</Link></li>
                    </ul>
                )}

            </li>)}
            {user&&
            <li className="hover:text-teal-200 transition-colors duration-200 font-medium  cursor-pointer" ><Link to="/course">Courses</Link></li>}
            {user?(<li className="hover:text-teal-200 transition-colors duration-200 font-medium  cursor-pointer" onClick={handleLogout}>Logout</li>):(
            <li className="hover:text-teal-200 transition-colors duration-200 font-medium  cursor-pointer flex items-center relative" onClick={handleLog}>Login
            {isLog?<IoMdArrowDropup />:<IoMdArrowDropdown/>}
            {isLog &&(
                    <ul className="absolute top-full left-0 mt-3 bg-blue-600 text-white border rounded shadow-lg min-w-[100px] p-[5px]">
                        <li className="border-2 bg-white text-black"><Link to='adminlogin'>Admin</Link><br /></li>
                        <li className="border-2 bg-white text-black"><Link to='/login'>Student</Link></li>
                    </ul>
                )}
            </li>)}
            <li className="hover:text-teal-200 transition-colors duration-200 font-medium  cursor-pointer"><Link to='/contact'>Contact</Link></li>
        </ul>
        </div>
    </>
}
export default NavBar;