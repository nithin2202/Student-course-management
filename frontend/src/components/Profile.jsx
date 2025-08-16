import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Course from "./Admin/Course";

let Profile=(props)=>{
    let [userDate,setUserDate]=useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        mobileNumber:"",
        address:""
    })
    

    let [file,setFile]=useState(null)
    let [imageUrl,setImageUrl]=useState("")
    

    let [courses,setCourses]=useState([])
    let navigate=useNavigate()

    let user=JSON.parse(localStorage.getItem("user"))
    let {fname,lname,email,password,mobileNumber,address}=userDate;
    // let fetchingData=async()=>{
    //     let p=await fetch("http://localhost:8080/student/findstudent/4")
    //      let details=await p.json()
    //      console.log(details);
    //      setUserDate({
    //         fname:details.data.fname,
    //         lname:details.data.lname,
    //         email:details.data.email,
    //         password:details.data.password,
    //         mobileNumber:details.data.mobileNumber,
    //         address:details.data.address
    //      })
        
         
    // }
    let fetchingData=()=>{
        // console.log(user);
        setUserDate({
            fname:user.fname,
            lname:user.lname,
            email:user.email,
            mobileNumber:user.mobileNumber,
            address:user.address
        })
       
       
       
        
        
    }
    let handleChange=(e)=>{
        setFile(e.target.files[0])
    }
    let handleUpload=async(e)=>{
        let formData=new FormData()
        formData.append("file",file)

        let p=await fetch(`http://localhost:8080/student/uploadimage/${user.sid}`,{
            method:'PUT',
            body:formData
        })
        setImageUrl(`http://localhost:8080/student/fetchimage/${user.sid}`)
        if(p.ok){
            alert("image uploaded succesfully")
            fetchImage();
        }else{
            alert("image upload failed!!!!!!!")
        }
    }
    let fetchImage=async()=>{
        let th=await fetch(`http://localhost:8080/student/fetchimage/${user.sid}`,{
            method:'GET'
        })
         if (th.ok) {
            let blob = await th.blob();
            let imageUrl = URL.createObjectURL(blob);
            setImageUrl(imageUrl);
        } 
    }
    let handleCourse=async(e)=>{
        let fetching=await fetch(`http://localhost:8080/student/fetchcourse/${user.sid}`)
        let details=await fetching.json()
        
        
        if(details.msg=="course details fetched succesfully"){
            setCourses(details.data)
        }
    }
    useEffect(()=>{
        fetchingData();
        fetchImage();
        handleCourse();
        
    },[])

    let handleDelete=async()=>{
        let p=await fetch(`http://localhost:8080/student/deletestudent/${user.sid}`,{
            method:'DELETE',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify(userDate)
        })
       let details=await p.json()
       console.log(details);
       if(details.msg=="details of the student got deleted"){
        alert(details.msg)
        localStorage.clear()
        navigate('/')
       }
       
       
        
    }
    let handleCourseRemove=async(cid)=>{
        
        let p=await fetch(`http://localhost:8080/student/deletecourse/${user.sid},${cid}`,{
            method:'DELETE'
        })
        let details=await p.json()
        if(details.msg=="course has delted from student"){
            alert("course has been removed")
            handleCourse()
        }else{
            alert("cannot remove the course")
        }
       }
       
   

    return <>
    <NavBar/>
    
    {/* <div className=" flex flex-col">
    <div className="text-xl flex gap-[20px]">
    <span>FirstName</span> :<span>{fname}</span>
    </div>
    <div className="text-xl flex gap-[20px] ">
        <span>LastName</span>:
        <span>{lname}</span>
    </div>
    <div className="text-xl flex gap-[20px] ">
        <span>Email</span>:
        <span>{email}</span>
    </div>
    <div className="text-xl flex gap-[20px]">
        <span>Contact</span>:
        <span>{mobileNumber}</span>
    </div>
    <div className="text-xl flex gap-[20px]">
        <span>Address</span>:
        <span>{address}</span>
    </div>
    </div>
    <button className="border-2">Edit</button>
    <button className="border-2">Delete</button> */}
    <div  className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-6">
    <div className="flex flex-col items-center gap-4 ">
        <div  className=" w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 shadow-md">
            <img src={imageUrl} alt="issue" className="object-cover w-full h-full" />
        </div>
        <div className="flex items-center gap-3">
         <input type="file" name="" id="" onChange={handleChange} className="file:mr-4 file:py-2 file:px-4 file:rounded-full 
                         file:border-0 file:text-sm file:font-semibold
                         file:bg-blue-50 file:text-blue-700
                         hover:file:bg-blue-100"  />
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition" onClick={handleUpload}>Upload</button>
       </div>
    
    <h1 className="text-3xl font-bold text-center mt-8 mb-4">Personal Details</h1><br />
    <table className="w-[80%] rounded-lg overflow-hidden">
        <tbody>
            <tr className="border-b border-2" >
                <td className="border-2 font-bold p-5 align-top">FirstName</td>
                <td className="p-5">{fname}</td>
            </tr>
            <tr className="border-2">
                <td className="border-2 font-bold p-5">LastName</td>
                <td className="p-5">{lname}</td>
            </tr>
            <tr className="border-2">
                <td className="border-2 font-bold p-5">Email</td>
                <td className="border-2 p-5">{email}</td>
            </tr>
            <tr className="border-2">
                <td  className="border-2 font-bold p-5">Contact</td>
                <td className="p-5">{mobileNumber}</td>
            </tr>
            <tr className="border-2">
                <td className="border-2  font-bold p-5">Address</td>
                <td className="p-5">{address}</td>
            </tr>
            <tr className="border-2">
                <td className="border-2 p-5"><button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded cursor-pointer"><Link to='/update'>Edit</Link></button></td>
                <td className="p-5"><button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer" onClick={handleDelete}>Delete</button></td>
            </tr>
        </tbody>
        
    </table>
        <h1 className="text-3xl font-bold text-center mt-8 mb-4">Course Details</h1>
   <div className="overflow-x-auto">
  {courses.length === 0 ? (
    <p className="text-gray-500 text-center py-4">
      No Courses Found in your profile
    </p>
  ) : (
    <table className="w-[40pc]  border-2 rounded-lg ">
      <thead className="border-2">
        <tr>
          <th className="px-4 py-2 text-left font-semibold  border-2">
            Name of the Course
          </th>
          <th className="px-4 py-2 text-left font-semibold  border-2">
            Cost
          </th>
          <th className="px-4 py-2 text-left font-semibold  border-2">
            Duration
          </th>
          <th className="px-4 py-2 text-left font-semibold  border">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {courses.map(({ cid, name, cost, duration }) => (
          <tr
            key={cid}
            className="hover:bg-gray-50 transition-colors"
          >
            <td className="px-4 py-2 border-2 font-medium ">
              {name}
            </td>
            <td className="px-4 py-2 border-2">{cost}</td>
            <td className="px-4 py-2 border-2">{duration}</td>
            <td className="px-4 py-2 border-2">
              <button
                onClick={() => handleCourseRemove(cid)}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

      
    </div>
    </div>
    
 
    </>
}
export default Profile;