import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="ml-4 text-white">About</Link>
          <Link to="/contact" className="ml-4 text-white">Contact</Link>
        </div>
        <div>
          {currentUser ? (
            <>
              <button onClick={logout} className="text-white">Logout</button>
            </>
          ) : (
            <>
              <Link to="/signin" className="text-white">Sign In</Link>
              <Link to="/signup" className="ml-4 text-white">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
