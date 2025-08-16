import { useState ,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

let Update1=()=>{
    let [update1,setUpdate1]=useState({
        sid:"",
        fname:"",
        lname:"",
        email:"",
        password:"",
        mobileNumber:"",
        address:""
    })
    let user=JSON.parse(localStorage.getItem("user"))
    let {sid,fname,lname,email,password,mobileNumber,address}=update1
    let navigate=useNavigate();
    let setValue1=async()=>{
        try{
        let p2=await fetch(`http://localhost:8080/student/findstudent/${user.sid}`)
        let details1=await p2.json()
        console.log(details1);
        if(details1.msg=='user existed with the given id'){
            setUpdate1({
                sid:user.sid,
                fname:user.fname,
                lname:user.lname,
                email:user.email,
                password:user.password,
                mobileNumber:user.mobileNumber,
                address:user.address
            })
        }else{
            toast.error("cannot find student")
        }
    }catch(error){
        toast.error("could not found")
    }
    }
     useEffect(() => {
        setValue1();
         }, []);

        let handleUpdate1=(e)=>{
         let {name,value}=e.target;
            setUpdate1({...update1,[name]:value})
         }
         let handleSubmit1=async(e)=>{
            e.preventDefault();
            try{
                let p1=await fetch("http://localhost:8080/student/updatestudent",{
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify(update1)
                })
                let details2=await p1.json()
                console.log(details2);
                if(details2.msg=='your details got updated'){
                    toast.success("updated succesfully");
                    localStorage.setItem("user",JSON.stringify(details2.data))

                        setTimeout(() => {
                            navigate('/profile');
                        }, 1500);
                        
                    
                }else{
                    toast.error("could not update")
                }
                
            }catch(error){
                toast.error("update error")
            }
         }

    return<>
     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Update Profile</h2>
        <form onSubmit={handleSubmit1} className="space-y-4">
            <input type="text" name="sid" id="id" className="w-full border px-3 py-2 rounded text-gray-700 bg-gray-100" value={sid} readOnly onChange={handleUpdate1}/><br />
            <input type="text" name="fname" id="fname" className="w-full border px-3 py-2 rounded" value={fname} onChange={handleUpdate1} /><br />
            <input type="text" name="lname" id="lname" className="w-full border px-3 py-2 rounded" value={lname} onChange={handleUpdate1}/><br />
            <input type="email" name="email" id="email"  className="w-full border px-3 py-2 rounded" value={email} onChange={handleUpdate1}/><br />
            <input type="password" name="password" id="password" className="w-full border px-3 py-2 rounded" value={password} onChange={handleUpdate1}/><br />
            <input type="text" name="mobileNumber" id="mobilenumber" className="w-full border px-3 py-2 rounded" value={mobileNumber} onChange={handleUpdate1} /><br />
            <textarea name="address" className="w-full border px-3 py-2 rounded" id="address" value={address} onChange={handleUpdate1}></textarea><br />
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit" >Update</button>
        </form>
        <ToastContainer/>
        </div>
    </>
}
export default Update1