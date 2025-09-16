import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from "react-icons/fa"; // Import icons for dropdown arrows
import { motion } from 'framer-motion';

// Add this new component for the logo
const Logo = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex items-center"
  >
    <Link to="/" className="flex items-center group">
      {/* Logo Container */}
      <div className="flex items-center">
        {/* Logo Symbol */}
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg shadow-lg flex items-center justify-center transform group-hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-white font-serif text-2xl font-bold tracking-wider">S</span>
              <div className="w-6 h-0.5 bg-white/80 mt-0.5"></div>
            </div>
          </div>
        </div>
        
        {/* Company Name */}
        <div className="ml-3 flex flex-col">
          <div className="flex items-baseline">
            <span className="text-2xl font-serif font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors duration-300">
              SAT
            </span>
            <span className="ml-2 text-xs font-medium text-blue-400 tracking-wider">
              EST. 2024
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-400 tracking-wide group-hover:text-gray-300 transition-colors duration-300">
              DESIGN & SOLUTIONS
            </span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] =
    useState(false);
  const [isDesignDropdownOpen, setIsDesignDropdownOpen] = useState(false);
  const [isMobileDesignDropdownOpen, setIsMobileDesignDropdownOpen] =
    useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
        setIsMobileServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleMobileServicesDropdown = () => {
    setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
  };

  const toggleDesignDropdown = () => {
    setIsDesignDropdownOpen(!isDesignDropdownOpen);
  };

  const toggleMobileDesignDropdown = () => {
    setIsMobileDesignDropdownOpen(!isMobileDesignDropdownOpen);
  };

  const serviceLinks = [
    { title: 'CAD-design', path: '/services/CAD-design' },
    { title: 'Manufacturing', path: '/services/manufacturing' },
  ];

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { 
      title: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: serviceLinks
    },
    { title: 'Contact', path: '/contact' },
  ];

  // Add function to check if link is active
  const isLinkActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Add function to check if services section is active
  const isServicesActive = () => {
    return location.pathname.includes('/services');
  };

  // Add this function to handle navigation
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
        <motion.header 
          className={`w-full rounded-lg transition-all duration-300 ${
            isScrolled 
              ? 'bg-[#1a1a1a] shadow-lg py-3' 
              : 'bg-[#1a1a1a]/95 backdrop-blur-sm py-4'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Replace the old logo with the new Logo component */}
              <Logo />

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.path} className="relative" ref={dropdownRef}>
                    {item.hasDropdown ? (
                      <div className="relative">
                        <button
                          onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                          className={`flex items-center relative group transition-colors duration-300`}
                        >
                          <span className={`relative z-10 ${
                            isServicesActive() 
                              ? 'text-blue-400' 
                              : 'text-white group-hover:text-blue-400'
                          }`}>
                            {item.title}
                          </span>
                          <FaChevronDown className={`ml-1 w-3 h-3 transition-transform duration-300 ${
                            isServicesDropdownOpen ? 'rotate-180' : ''
                          } ${isServicesActive() ? 'text-blue-400' : 'text-white group-hover:text-blue-400'}`} />
                          <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out ${
                            isServicesActive() ? 'w-full' : 'w-0 group-hover:w-full'
                          }`} />
                        </button>
                        
                        {/* Services Dropdown */}
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ 
                            opacity: isServicesDropdownOpen ? 1 : 0,
                            y: isServicesDropdownOpen ? 0 : -10,
                            display: isServicesDropdownOpen ? 'block' : 'none'
                          }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg py-2"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className={`block px-4 py-2 transition-colors ${
                                location.pathname === dropdownItem.path
                                  ? 'text-blue-400'
                                  : 'text-white hover:bg-gray-700'
                              }`}
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        onClick={handleNavClick}
                        className={({ isActive }) => `
                          relative group transition-colors duration-300
                          ${isActive ? 'text-blue-400' : 'text-white hover:text-blue-400'}
                        `}
                      >
                        <span className="relative z-10">{item.title}</span>
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out ${
                          isLinkActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`} />
                      </NavLink>
                    )}
                  </div>
                ))}
              </nav>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block"
              >
                <Link
                  to="/contact"
                  className={`
                    inline-flex items-center px-6 py-2
                    border-2 border-blue-500 rounded-lg
                    text-blue-400 hover:text-white
                    transition-all duration-300
                    hover:bg-blue-500 hover:shadow-lg
                    ${isScrolled ? 'scale-95' : 'scale-100'}
                  `}
                >
                  Get Quote
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isMobileMenuOpen ? 'auto' : 0,
                opacity: isMobileMenuOpen ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.path}>
                    {item.hasDropdown ? (
                      <div className="relative">
                        <button
                          onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}
                          className={`flex items-center w-full px-4 py-2 rounded-lg relative group transition-colors ${
                            isServicesActive() 
                              ? 'text-blue-400 bg-white/5' 
                              : 'text-white hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center justify-center w-full gap-2">
                            <span>{item.title}</span>
                            <motion.span
                              animate={{ rotate: isMobileServicesDropdownOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaChevronDown />
                            </motion.span>
                          </div>
                        </button>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: isMobileServicesDropdownOpen ? 'auto' : 0,
                            opacity: isMobileServicesDropdownOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-white/5 rounded-lg mt-1"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className={`block px-8 py-2 transition-colors ${
                                location.pathname === dropdownItem.path
                                  ? 'text-blue-400'
                                  : 'text-white hover:bg-white/10'
                              }`}
                              onClick={() => {
                                setIsMobileServicesDropdownOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        onClick={handleNavClick}
                        className={({ isActive }) => `
                          block px-4 py-2 text-center rounded-lg transition-colors
                          ${isActive 
                            ? 'text-blue-400 bg-white/5' 
                            : 'text-white hover:bg-white/10'
                          }
                        `}
                      >
                        {item.title}
                      </NavLink>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.header>
      </div>

      {/* Spacer for content below header */}
      <div className="h-24"></div>
    </>
  );
};

export default Header;