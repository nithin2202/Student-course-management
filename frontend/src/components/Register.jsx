import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
let Register=()=>{
    let [student,setStudent]=useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        mobileNumber:"",
        address:""
    })
    let {fname,lname,email,password,mobileNumber,address}=student
    let navigate=useNavigate()
    let handleStudent=(e)=>{
        let {name,value}=e.target
        setStudent({...student,[name]:value})
        
    }
    let handleSubmit=async(e)=>{
        e.preventDefault();
        try{
        let p=await fetch("http://localhost:8080/student/signup",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(student)
        })
        if (!p.ok) {
             const errorText = await p.text();
             toast.error(errorText); // Will show "Email already exists!"
             return;
            }

        let details=await p.json()
        alert(details.msg)

        if(details.msg=='Data saved'){
            toast.success("Registered Succesfully!!!!!")
            navigate("/login")
            
            
        }
        else{
            toast.error("email alredy exist")
        }
        console.log(student);
        setStudent({
            fname:"",
            lname:"",
            email:"",
            password:"",
            address:"",
            mobileNumber:""
        })
        }catch (error) {
            toast.error("Enter valid details");
            console.error(error);
        }
        
    }
    return <>
      <section className="flex flex-col  justify-center items-center h-[43.4pc] bg-sky-200"> 
        <div className="flex flex-col border-2 h-[600px] w-[600px] justify-center items-center" id="linear">
        <h1 className="h-[30px] font-bold text-[25px]">Registration</h1><br /><br />
        <form action="">
            <input type="text" name="fname" id="fnameInput" placeholder="Enter fname" value={fname} onChange={handleStudent} className="border-2 h-[40px] w-[20pc] p-2"/><br /><br />
             <input type="text" name="lname" id="lnameInput" placeholder="Enter lname" value={lname} onChange={handleStudent} className="border-2 h-[40px] w-[20pc] p-2"/><br /><br />
             <input type="email" name="email" id="emailInput" placeholder="Enter email" value={email} onChange={handleStudent} className="border-2 h-[40px] w-[20pc] p-2" required/><br /><br />
             <input type="password" name="password" id="passwordInput" placeholder="Emter password" value={password} onChange={handleStudent} className="border-2 h-[40px] w-[20pc] p-2" required/><br /><br />
             <input type="tel" name="mobileNumber" id="mobileNumberInput"  placeholder="Enter mobilenumber" value={mobileNumber} onChange={handleStudent} className="border-2 h-[40px] w-[20pc] p-2"/><br /><br />
            <textarea name="address" id="addressInput" placeholder="Enter address" value={address} onChange={handleStudent} className="border-2 h-[40px] w-[20pc] p-2"></textarea><br /><br />
            <button onClick={handleSubmit} className="border-2 h-[40px] w-[20pc] bg-green-500 font-semibold">Register</button> 
        </form>
        </div>
        <ToastContainer/>
        </section> 
    </>
}
export default Register;