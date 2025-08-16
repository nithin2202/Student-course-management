import { Link } from "react-router-dom";

let AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center py-10">
      {/* Header */}
      <h1 className="font-bold text-4xl text-gray-800 mb-10">
        Admin Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        <Link
          to="/admincourse"
          className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200"
        >
          <p className="text-2xl font-semibold text-purple-600 mb-2">
            Manage Courses
          </p>
          <span className="text-gray-500 text-center">
            Add, edit, or delete course details
          </span>
        </Link>

        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 cursor-pointer">
          <Link to='/manageadmin'>
          <p className="text-2xl font-semibold text-pink-600 mb-2 text-center">
            Manage Admin
          </p>
          <span className="text-gray-500 text-center">
            Update admin details and roles
          </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
