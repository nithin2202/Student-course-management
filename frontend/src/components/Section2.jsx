import { Link } from "react-router-dom"

let Section2=()=>{
    let user=JSON.parse(localStorage.getItem("user"))
    return <>
        <div className=" flex justify-center items-center gap-[100px] h-[40pc]">
       
    {/* Card 1 */}
    
    <div className=" shadow-lg rounded-2xl p-6 hover:shadow-xl transition w-[300px] h-[25pc] flex flex-col justify-center   bg-gradient-to-r from-rose-200 via-pink-200 to-yellow-200 ">
      <div className="text-4xl mb-4">🎓</div>
      <h2 className="text-xl font-semibold mb-2">Course Registration</h2>
      <p className="text-gray-600 mb-4">
        Seamlessly enroll in courses with a user-friendly interface. View course details and prerequisites before adding them to your schedule.
      </p>
      {user?(
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"> 
        <Link 
        to='/course'
        >
        Add Courses
      </Link>
      </button>):(<button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        <Link to='/login'>Add Courses</Link>
      </button>)
    }
    </div>

    {/* Card 2 */}
    <div className=" shadow-lg rounded-2xl  p-6 hover:shadow-xl transition w-[300px]  h-[25pc] flex flex-col justify-center  bg-gradient-to-b from-yellow-300 to-orange-500 p-6">
      <div className="text-4xl mb-4">👤</div>
      <h2 className="text-xl font-semibold mb-2">Profile Management</h2>
      <p className="text-gray-600 mb-4">
        Effortlessly update and manage your personal information, contact details, and academic history. Maintain an accurate and up-to-date student profile.
      </p>
      {user?(
      <button  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
      <Link
        to="/profile"
       
      >
        Manage Profile
      </Link>
      </button>):(<button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        <Link to='/login'>Manage Profile</Link>
      </button>)
    }
    </div>
    {/* card-3 */}
    {user?(<div className=" shadow-lg w-[300px] h-[25pc] rounded-2xl p-6 flex flex-col justify-center items-center hover:shadow-xl transition   bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">🛠 Admin Login</h2>
          <p className="text-gray-600 mb-4">Gain exclusive access to the system's administrative features with a dedicated admin login. Manage student records, course offerings, and system-wide settings with ease.</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-center">
        <Link
          to="/adminlogin"
          
        >
          Admin Login
        </Link>
        </button>
      </div>):( <div className="flex justify-center shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-6 w-[300px] h-[25pc]">
        <div>
          <div className="text-4xl mb-4">👨‍🎓</div>
          <h2 className="text-xl font-semibold mb-2"> Student Login</h2>
          <p className="text-gray-600 mb-4">Securely access your personalized dashboard with a unique student login. View your enrolled courses, grades, and academic resources in one place.</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-center">
        <Link
          to="/login"
        >
          Student Login
        </Link>
        </button>
      </div>)}
  </div>


    </>
}
export default Section2