import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

let AdminCourse = () => {
  let [course, setCourse] = useState([]);

  let handleCourse = async () => {
    let p = await fetch("http://localhost:8080/course/findall");
    let details = await p.json();
    if (details.msg === "getting courses details") {
      setCourse(details.data);
    } else {
      console.warn("cannot fetch course details");
    }
  };

  let handleDelete = async (cid) => {
    let p = await fetch(`http://localhost:8080/course/delete/${cid}`, {
      method: "DELETE",
    });
    let details = await p.json();
    handleCourse();
    if (details.msg === "course has deleted") {
      toast.success("course successfully deleted");
    } else {
      toast.error("cannot delete the course");
    }
  };

  useEffect(() => {
    handleCourse();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Course Management
        </h1>

        <div className="overflow-x-auto border-2">
          <table className="w-full border-2 rounded-lg overflow-hidden">
            <thead className="bg-gray-200 border-2">
              <tr>
                <th className="py-3 px-4 border-2">ID</th>
                <th className="py-3 px-4 border-2">Name</th>
                <th className="py-3 px-4 border-2">Cost</th>
                <th className="py-3 px-4 border-2">Duration</th>
                <th className="py-3 px-4 text-center border-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {course.map(({ cid, name, cost, duration }) => (
                <tr key={cid} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4 border-2">{cid}</td>
                  <td className="py-3 px-4 border-2">{name}</td>
                  <td className="py-3 px-4 border-2">₹{cost}</td>
                  <td className="py-3 px-4 border-2">{duration}</td>
                  <td className="py-3 px-4 flex gap-3 justify-center">
                    <Link
                      to={`/editcourse/${cid}`}
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                      onClick={() => handleDelete(cid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <div className="mt-6 text-right max-w-6xl mx-auto">
        <Link
          to="/addcourse"
          className="bg-green-500 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Add Course
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminCourse;
