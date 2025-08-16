import NavBar from "./NavBar"
import '../style.css'
import set1 from "../assets/set1.jpg"
import home1 from "../assets/home1.jpg"
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Section2 from "./Section2";
import Section3 from "./Section3";
import ContactUs from "./ContactUs";
let Home=()=>{
    let user=JSON.parse(localStorage.getItem("user"))
    let navigate=useNavigate()
   
    return <>
     {/* 1) navbar */}
         <div className="relative z-50">
                <NavBar />
            </div>
        {/* <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 h-[30pc] flex justify-center items-center flex-col"  >
            <h1 className="font-bold text-4xl">Welcome to Student Course Managment System</h1><br />
            <button className="border-2 w-[130px] bg-green-600 text-2xl hover:text-blue-600 cursor-pointer">Login</button>
        </div> */}
        {/* 2)header */}
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 h-[38pc] flex items-center justify-between px-10 relative z-0">

    {/* Left Side Content */}
    <div className="flex flex-col justify-center p-[5px]">
        <h1 className="font-bold text-4xl text-black  ">
            Student Course Management System
        </h1><br /><br />
       <p className="text-white flex items-center text-lg italic leading-relaxed max-w-md">
           
            "The Student Course Management System is a comprehensive platform designed to streamline the process of course enrollment, scheduling, and academic progress tracking. It allows students to browse available courses, register for classes, access learning materials, and monitor grades in real-time. Instructors can manage course content, track student performance, and communicate efficiently through built-in messaging tools. The system aims to improve academic administration, enhance student engagement, and provide a seamless learning experience for both educators and learners."
            
        </p>
        <br /><br />
        <div className="flex gap-[40px]">
        <button className=" w-[130px] bg-green-600 text-2xl text-white hover:text-blue-600 cursor-pointer h-[50px] ">
           <Link to='/login'>Login</Link> 
        </button>
        <button className=" w-[130px] bg-green-600 text-2xl text-white hover:text-blue-600 cursor-pointer">
            <Link to='/register'>Register</Link>
        </button>
        </div>
    </div>

    {/* Right Side Image */}
    <div className="w-[700px] h-[500px] flex items-center justify-center">
        <img 
            src={home1} /* Place your image in public folder */
            alt="Student Illustration"
            className="w-full h-full object-contain"
            
        />
    </div>
   </div>
   {/* 2)section */}
   <Section2></Section2>
{/* 
   3)section */}
   <Section3/>
   {/* 4)Contact us */}
   <ContactUs/>
    {/* footer */}
    <Footer/>


    </>
}
export default Home