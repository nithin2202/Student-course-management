import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

let EditAdmin = () => {
  let [admin, setAdmin] = useState({
    aid: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
    mobileNumber: ""
  });

  let { id } = useParams();
  let navigate = useNavigate();
  let { aid, fname, lname, email, password, address, mobileNumber } = admin;

  let getData = async () => {
    try {
      let p = await fetch(`http://localhost:8080/admin/find/${id}`);
      let details = await p.json();

      if (details.msg === 'admin found') {
        setAdmin({
          aid: details.data.aid,
          fname: details.data.fname,
          lname: details.data.lname,
          email: details.data.email,
          password: details.data.password,
          address: details.data.address,
          mobileNumber: details.data.mobileNumber
        });
      } else {
        toast.error("Admin not found.");
      }
    } catch (error) {
      toast.error("Failed to fetch admin details.");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let p = await fetch("http://localhost:8080/admin/update", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(admin)
      });
      let details = await p.json();
      if (details.msg === 'admin updated') {
        alert("Admin details updated successfully!");

          navigate('/manageadmin');
      } else {
        toast.error("Cannot update the admin.");
      }
    } catch (error) {
      toast.error("Failed to update admin details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Update Admin Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="aid" className="text-sm font-medium text-gray-600 mb-1">
              Admin ID
            </label>
            <input
              type="text"
              name="aid"
              id="aid"
              readOnly
              value={aid}
              className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-700 cursor-not-allowed focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="fname" className="text-sm font-medium text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                value={fname}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lname" className="text-sm font-medium text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                value={lname}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobileNumber" className="text-sm font-medium text-gray-600 mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mobile Number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm font-medium text-gray-600 mb-1">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              value={address}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Address"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
          >
            Update Admin
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default EditAdmin;