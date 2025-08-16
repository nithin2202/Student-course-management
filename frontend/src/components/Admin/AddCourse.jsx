import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

let AddCourse = () => {
  let [course, setCourse] = useState({
    name: "",
    cost: "",
    duration: ""
  });
  let { name, cost, duration } = course;
  let navigate = useNavigate();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let p = await fetch("http://localhost:8080/course/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course)
    });
    let details = await p.json();
    if (details.msg === "course added") {
        alert("course has been added")
      toast.success("Course added successfully!");
      navigate("/admincourse");
    } else {
      toast.error("Cannot add course");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add Course Details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter course name"
            value={name}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-300"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="cost"
            placeholder="Enter the cost"
            value={cost}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-300"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="duration"
            placeholder="Enter the duration"
            value={duration}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-purple-300"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition duration-300"
          >
            Add Course
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddCourse;
