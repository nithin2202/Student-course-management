import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

let AdminLogin=()=>{
    let [admin,setAdmin]=useState({
        email:"",
        password:""
    })
    let {email,password}=admin
    let navigate=useNavigate()
    let handleChange=(e)=>{
        let {name,value}=e.target
        setAdmin({...admin,[name]:value})
    }
    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
        let p=await fetch("http://localhost:8080/admin/login",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(admin)
        })
        let details=await p.json()
        console.log(details);
        if(details.msg=='login succesful'){
           alert(details.msg)
           navigate('/dashboard')
        }else{
            toast.error("cannot perform login")
        }
        setAdmin({
            email:"",
            password:""
        })
        
    }catch(error){
        toast.error("cannot find admin")
    }
    }
    return <>
    <div className="flex justify-center items-center h-screen bg-cyan-100">
        <div className=" p-8 rounded-lg shadow-md w-full max-w-sm  bg-gradient-to-r from-[#2A7B9B] via-[#C757C5] to-[#EDDD53]" >
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" id="emailInput" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={handleChange} placeholder="Enter email" /><br /><br />
        <input type="password" name="password" id="passwordInput" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={handleChange} placeholder="Enter password"/><br /><br />
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200" type="submit">Login</button>
        </form>
        <ToastContainer/>
        </div>
    </div>
    </>
}
export default AdminLogin