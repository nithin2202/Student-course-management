import { useState } from "react"
import { useNavigate ,Link} from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

let Login=()=>{
    let [login,setLogin]=useState({
        email:"",
        password:""
    })
    let {email,password}=login
    let navigate=useNavigate()
    let handleLogin=(e)=>{
        let {name,value}=e.target
        setLogin({...login,[name]:value})
    }

    let handleSubmit=async(e)=>{
         e.preventDefault()
        try{
        let p=await fetch("http://localhost:8080/student/login",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(login)
        })
        

        
        
        // if (!p.ok) {
        //     const errorText = await p.text();
        //     toast.error(errorText); // Will show "Email already exists!"
        //     return;
        //     }
        let details=await p.json();
        console.log(details);
        
        alert(details.msg)
        if(details.msg=="login success"){
            // sessionStorage.setItem("user", JSON.stringify(details.data)); 
            localStorage.setItem("user",JSON.stringify(details.data))
            toast.success("login succesful")
            navigate('/')
        }
        console.log(login);
        
        setLogin({
            email:"",
            password:""
        })}catch{
            toast.error("email not exist")
        }
        
    }

    return <>
    <section className="flex flex-col justify-center items-center  h-[43pc] bg-cyan-100">
        <div className="border-2 flex flex-col w-[500px] justify-start items-center h-100 p-[50px]  flex items-center justify-center bg-gradient-to-r from-[#2A7B9B] via-[#C757C5] to-[#EDDD53]">
        <h1 className="font-bold text-xl h-[30px]">Login</h1><br /><br />
        
        <form action="">
            <input type="email" name="email" id="emailInput"  placeholder="Enter email" value={email} onChange={handleLogin} className="border-2 h-[45px] w-[300px] p-[4px]" /><br /><br />
            <input type="password" name="password" id="passwordInput"  placeholder="Ener Password" value={password} onChange={handleLogin} className="border-2 h-[45px] p-[4px] w-[300px]" /><br /><br />
            <button onClick={handleSubmit} className="border-2 h-[45px] w-[300px] bg-blue-500 bg-green-500 cursor-pointer">Login</button><br /><br />
            <button className="border-2 h-[45px] w-[300px] bg-blue-500 bg-blue-400 cursor-pointer"><Link to='/register'>Register</Link></button>
        </form>
       
       </div>
       
        </section>
        <ToastContainer/>
    </>
}
export default Login