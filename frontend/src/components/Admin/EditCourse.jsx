import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

let EditCourse = () => {
  let [course, setCourse] = useState({
    cid: "",
    name: "",
    cost: "",
    duration: ""
  });
  let { cid, name, cost, duration } = course;

  let navigate = useNavigate();
  let { id } = useParams();

  let getData = async () => {
    let p = await fetch(`http://localhost:8080/course/find/${id}`);
    let details = await p.json();
    if (details.msg === "course found") {
      setCourse({
        cid: details.data.cid,
        name: details.data.name,
        cost: details.data.cost,
        duration: details.data.duration
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let p = await fetch(`http://localhost:8080/course/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course)
    });
    let details = await p.json();
    if (details.msg === "course details has updated") {
      toast.success(details.msg);
      alert("Course details updated");
      navigate("/admincourse");
    } else {
      toast.error("Cannot update course details");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Edit Course
        </h1>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Course ID
            </label>
            <input
              type="text"
              name="cid"
              value={cid}
              readOnly
              className="border border-gray-300 p-3 w-full rounded-lg bg-gray-100 text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Course Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter Course Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Cost
            </label>
            <input
              type="text"
              name="cost"
              value={cost}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter Cost"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={duration}
              onChange={handleChange}
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter Duration"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Update Course
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditCourse;
