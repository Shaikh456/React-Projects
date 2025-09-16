import React from 'react'

// Functional component for the Mario game page
const Mario = () => {
  return (
    <div className='snake'> {/* Container div with class 'snake' for styling */}
      <header className="header custom-header"> {/* Header section with custom styles */}
        <h1>
          <span className='sorry'>Sorry! </span> {/* Highlighted 'Sorry!' message */}
          For Inconvinience by <span>GameHub</span> {/* Mentioning the site name */}
        </h1>
        <p>
          These Games is <span>under construction !</span> {/* Message about game availability */}
        </p>
      </header>
    </div>
  )
}

export default Mario // Exporting the Mario component
