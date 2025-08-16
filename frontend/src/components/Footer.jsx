import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <div>
          <div> <img src={logo2} alt="cannot load" className="w-[150px] h-[150px] ml-[-40px] mt-[-20px]" /></div>
          <p className="text-sm text-gray-400">
            Your one-stop solution for course registration and profile management.  
            Learn, grow, and achieve with us.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li  className="hover:text-white"><Link to='/'>Home</Link></li>
            <li className="hover:text-white"><Link to='/course'>Courses</Link></li>
            <li className="hover:text-white"><Link to='/profile'>Profile</Link></li>
            <li className="hover:text-white"><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-gray-400">📍 J Spiders, Punjagutta</p>
          <p className="text-gray-400">📞 +91 99660 82866</p>
          <p className="text-gray-400">✉ support@scmsportal.com</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-900 text-center text-gray-500 py-4 text-sm">
        © {new Date().getFullYear()} SCMSPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
