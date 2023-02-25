import React from "react";
import '../css/Header.css'
import { Link } from 'react-router-dom';



const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('employeeID');
    };

    const EmployeeID = localStorage.getItem('employeeID');
    const token = localStorage.getItem('token');

  return (
    <div className='header_div'> 
    <p className="center_text"> Welcome to DBS Employee Insurance Claim </p>
        {/* {token && (<Link onClick={handleLogout}>Logout</Link>)} */}
    </div>
  );
};
export default Header;