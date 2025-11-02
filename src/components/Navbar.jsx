import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-8">
          <img src="https://i.postimg.cc/Pf8ZGvCf/H2H.jpg" alt="Heritage to Health Logo" className="h-8 w-auto" loading="lazy" />
          <span className="text-xl font-bold">Heritage to Health</span>
        </Link>
        <ul className="flex space-x-2">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/programs" className="hover:underline">Programs</Link></li>
          <li><Link to="/impact" className="hover:underline">Impact</Link></li>
          <li><Link to="/health-services" className="hover:underline">Health Services</Link></li>
          <li><Link to="/partnerships" className="hover:underline">Partnerships</Link></li>
          <li><Link to="/updates" className="hover:underline">Updates</Link></li>
          <li><Link to="/donate" className="hover:underline">Donate</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/admin" className="hover:underline text-yellow-300">Admin</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
