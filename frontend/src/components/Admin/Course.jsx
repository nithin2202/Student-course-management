import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "../Profile";
import NavBar from "../NavBar";
import javaImg from "../../assets/java.jpeg";
import pythonImg from "../../assets/python.jpg";
import webtech from "../../assets/webtech.jpg";
import sqlImg from "../../assets/sql.jpg";
import reactImg from "../../assets/react.jpg";
import manualImg from "../../assets/manual.jpg";

let Course = () => {
    let [course, setCourse] = useState([]);
    let [addedCourses, setAddedCourses] = useState([]);

    let user = JSON.parse(localStorage.getItem("user"));
    let courseImg={
        java:javaImg,
        python:pythonImg,
        web:webtech,
        sql:sqlImg,
        react:reactImg,
        manual:manualImg
    }

    let getCourses = async () => {
        try {
            let p = await fetch("http://localhost:8080/course/findall");
            let details = await p.json();
            setCourse(details.data || []);
        } catch (error) {
            toast.error("⚠️ Failed to fetch courses");
        }
    };

    let getStudentCourses = async () => {
        try {
            let p = await fetch(`http://localhost:8080/student/fetchcourse/${user.sid}`);
            let details = await p.json();
            let courseIds = details.data.map(c => c.cid);
            setAddedCourses(courseIds);
        } catch (error) {
            toast.error("⚠️ Failed to fetch student courses");
        }
    };

    let handleAdd = async (cid) => {
        try {
            let p = await fetch(
                `http://localhost:8080/student/addcourse/${user.sid}/${cid}`,
                { method: 'GET' }
            );

            if (p.ok) {
                toast.success(` Course with ID ${cid} added successfully!`);
                setAddedCourses((prev) => [...prev, cid]);
            } else {
                toast.warning(" Course is already present for this student");
            }
        } catch (error) {
            toast.error(" Error adding course");
        }
    };

    useEffect(() => {
        getCourses();
        getStudentCourses(); // fetch existing added courses
    }, []);
   

    return (
        <div className="p-6">
            <NavBar/>
            <h1 className="text-3xl font-bold mb-6 text-gray-800 ">Courses</h1>

            <div className="flex flex-wrap gap-6 grid grid-cols-3 grid-rows-2">
                {course?.map((val) => {
                    let { cid, name, cost, duration } = val;
                    let isAdded = addedCourses.includes(cid);

                    return (
                        <div
                            key={cid}
                            className="border border-gray-300 rounded-xl shadow-md p-5 w-100 bg-white hover:shadow-lg transition-shadow"
                        >
                            <div><img src={courseImg[name]} alt=""  className="w-[25pc] h-[15pc]"/></div>
                            <div className="text-gray-500">ID: {cid}</div>
                            <div className="font-semibold text-lg mt-2 text-gray-800">{name}</div>
                            <div className="text-gray-700 mt-1">Cost: ₹{cost}</div>
                            <div className="text-gray-700">Duration: {duration}</div>

                            <button
                                onClick={() => handleAdd(cid)}
                                disabled={isAdded}
                                className={`mt-4 w-full py-2 rounded-lg transition-colors cursor-pointer
                                    ${isAdded
                                        ? "bg-green-500 text-white cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700 text-white"
                                    }`}
                            >
                                {isAdded ? "Added" : "Add"}
                            </button>
                        </div>
                    );
                })}
            </div>

            <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
        </div>
    );
};

export default Course;
