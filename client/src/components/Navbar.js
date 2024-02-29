import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <div className='navbar'>
      
      <nav className="custom-nav bg-black text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to='/' className="hover:text-gray-300">
            Home
          </Link>
        </li>
        {/* <li>
          <Link to="/skills" className="hover:text-gray-300">
            Skills
          </Link>
        </li> */}
        <li>
          <Link to="/projects" className="hover:text-gray-300">
            Projects
          </Link>
        </li>
        {/* <li>
          <Link to="/interest" className="hover:text-gray-300">
            Interest
          </Link>
        </li> */}
        <li>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    </div>
    
    
  );
};
      
       
    

export default Navbar