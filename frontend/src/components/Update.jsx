import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"

let Update=()=>{
    let [update,setUpdate]=useState({
        sid : 4,
        fname:"",
        lname:"",
        email:"",
        password:"",
        mobileNumber:"",
        address:""
    });
    let {sid,fname,lname,email,password,mobileNumber,address}=update
    let navigate=useNavigate()
    let setValues=async(e)=>{
        try{
        let p=await fetch("http://localhost:8080/student/findstudent/4")
        let details=await p.json()
        console.log(details);
        if(details.msg=='user existed with the given id'){
            setUpdate({
                sid : 4,
                fname: details.data.fname,
                lname: details.data.lname,
                email: details.data.email,
                password: details.data.password,
                mobileNumber: details.data.mobileNumber,
                address: details.data.address
            })
        }
        
    }catch(error){
        toast.error("could not found id")
    }
        
    }
    useEffect(() => {
        setValues();
        }, []);
    let handleUpdate=(e)=>{
        let {name,value}=e.target;
        setUpdate({...Update,[name]:value})
    }

    let handleSubmit=async(e)=>{
        try{
        let fetching=await fetch("http://localhost:8080/student/updatestudent",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(update)
        })
       
        let details=await fetching.json()
        console.log(details);
        if(details.msg=='your details got updated'){
            toast.success("updated")
            navigate('/home')
        }
         
    }catch(error){
        toast.error("something probleem")
    }
        
    }


    return <>
        <h1>This is update page</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="id" id="id1" className="border-2" value='4' readOnly /><br />
            <input type="text" name="fname" id="fname1" className="border-2" value={update.fname} onChange={handleUpdate} /><br />
            <input type="text" name="lname" id="lname1" className="border-2" value={update.lname} onChange={handleUpdate}/><br />
            <input type="text" name="email" id="email1" className="border-2" value={update.email} onChange={handleUpdate}/><br />
            <input type="text" name="password" id="password1" className="border-2" value={update.password} onChange={handleUpdate}/><br />
            <input type="text" name="mobileNumber" id="mobileNumber1" className="border-2" value={update.mobileNumber} onChange={handleUpdate}/><br />
            <textarea name="address" id="address1" value={update.address} onChange={handleUpdate} className="border-2"></textarea><br />
            <button type="submit" className="border-2">Update</button>
        </form>
        <ToastContainer/>
    </>
}
export default Update