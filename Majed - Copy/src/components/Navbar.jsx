import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'; // Hooks and components for routing
import '../styles/Navbar.css'; // Import CSS styles for Navbar

const Navbar = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const location = useLocation(); // Hook to get current route pathname

  const isLoggedIn = localStorage.getItem('loggedIn') === 'true'; // Check if user is logged in

  // Handles the Side-Scroller click based on login state
  const handleSideScrollerClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (isLoggedIn) {
      navigate('/side-scroller'); // Navigate directly if logged in
    } else {
      navigate('/login'); // Redirect to login if not logged in
    }
  };

  // Checks if the current path is Side-Scroller or Login to apply active class
  const isSideScrollerActive = location.pathname === '/side-scroller' || location.pathname === '/login';

  // Handles login/logout button click
  const handleLoginClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem('loggedIn'); // Clear login state on logout
      navigate('/'); // Redirect to home after logout
    } else {
      navigate('/login'); // Redirect to login
    }
  };

  return (
    <nav className="navbar"> {/* Main navbar wrapper */}
      <div className="logo"> {/* Logo section */}
        <span role="img" aria-label="game">🎮</span> <strong>GameHub</strong>
      </div>

      <div className="nav-container"> {/* Wrapper for navigation links and button */}
        <ul className="nav-links"> {/* Navigation links list */}
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <a
              href="/side-scroller"
              onClick={handleSideScrollerClick} // Use conditional redirection logic
              className={isSideScrollerActive ? 'active' : ''} // Add active class if on this route
            >
              Side-Scroller
            </a>
          </li>
          <li>
            <NavLink to="/snake" className={({ isActive }) => (isActive ? 'active' : '')}>
              Snake
            </NavLink>
          </li>
          <li>
            <NavLink to="/mario" className={({ isActive }) => (isActive ? 'active' : '')}>
              Mario
            </NavLink>
          </li>
        </ul>

        {/* Login or Logout button on the right side */}
        <button className="login-btn" onClick={handleLoginClick}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; // Export the Navbar component
