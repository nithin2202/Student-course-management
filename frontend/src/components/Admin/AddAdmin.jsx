import { useState } from "react"
import { useNavigate } from "react-router-dom"

let AddAdmin = () => {
    let [admin, setAdmin] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        address: "",
        mobileNumber: ""
    })
    let navigate = useNavigate()

    let handleChange = (e) => {
        let { name, value } = e.target
        setAdmin({ ...admin, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch("http://localhost:8080/admin/save", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(admin)
            })
            let details = await response.json()
            if (details.msg === 'admin saved') {
                alert('Admin added successfully!')
                navigate('/manageadmin')
            } else {
                alert('Failed to add admin. Please try again.')
            }
        } catch (error) {
            console.error("Error saving admin:", error)
            alert('An error occurred. Please check the server connection.')
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-900">Add New Admin</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="First Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lname"
                        id="lname"
                        placeholder="Last Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="mobileNumber"
                        id="mobileNumber"
                        placeholder="Mobile Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                    >
                        Add Admin
                    </button>
                </form>
            </div>
        </div>
    )
}
export default AddAdmin