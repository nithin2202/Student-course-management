import React from "react";
import contact from "../assets/contact.jpg"
import set1 from "../assets/set1.jpg"
 function ContactUs() {
  let handleSubmit=(e)=>{
    alert("message has been sent")
  }
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-20 ">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-cyan-600 rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Send us a message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
             <input
              type="text"
              placeholder="Your Contact"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-blue-600 transition" onClick={handleSubmit}
            >
              Send Message
            </button>
          </form>
        </div>

       <div>
        <img src={contact} alt="" className="h-[35pc] w-[40pc]" />
       </div>
      </div>
    </div>
  );
}
export default ContactUs
