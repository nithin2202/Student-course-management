import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";

let ManageAdmin = () => {
  let [admin, setAdmin] = useState([]);
  let navigate = useNavigate();

  let handleData = async () => {
    let p = await fetch("http://localhost:8080/admin/fetchall");
    let details = await p.json();
    if (details.msg === "details got succesfully") {
      setAdmin(details.data);
    }
  };

  let handleDelete=async(aid)=>{
    let p=await fetch(`http://localhost:8080/admin/delete/${aid}`,{
      method:'DELETE'
    })
    let details=await p.json()
    if(details.msg=="admin details deleted succesfully"){
      alert("admin deleted")
      handleData()
    }else{
      alert("cannot delete")
    }
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Admin Details
      </h1>

      <table className="min-w-full  shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border-2">ID</th>
            <th className="p-3 border-2">First Name</th>
            <th className="p-3 border-2">Last Name</th>
            <th className="p-3 border-2">Email</th>
            <th className="p-3 border-2">Password</th>
            <th className="p-3 border-2">Address</th>
            <th className="p-3 border-2">Contact</th>
            <th className="p-3 border-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admin.map((val) => {
            let { aid, fname, lname, email, password, address, mobileNumber } =
              val;

            return (
              <tr
                key={aid}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="p-3 border-2">{aid}</td>
                <td className="p-3 border-2">{fname}</td>
                <td className="p-3 border-2">{lname}</td>
                <td className="p-3 border-2">{email}</td>
                <td className="p-3 border-2">{password}</td>
                <td className="p-3 border-2">{address}</td>
                <td className="p-3 border-2">{mobileNumber}</td>
                <td className="p-3 border flex gap-2 justify-center">
                  <button
            
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  ><Link to={`/editadmin/${aid}`}>
                    Edit
                    </Link>
                  </button>
                  <button
                    
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition" onClick={()=>{
                      handleDelete(aid)
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table><br />
      <button  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"><Link to='/addadmin'>Add Admin</Link></button>
    </div>
  );
};

export default ManageAdmin;
