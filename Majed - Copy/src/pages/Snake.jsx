import React from 'react'

// Functional component for the Snake game placeholder page
const Snake = () => {
  return (
    <div className='snake'> {/* Outer container with class 'snake' for styling */}
      <header className="header custom-header"> {/* Header section with combined classes for layout/styling */}
        <h1>
          <span className='sorry'>Sorry! </span> {/* Styled "Sorry!" text */}
          For Inconvinience by <span>GameHub</span> {/* Brand mention */}
        </h1>
        <p>
          These Games is <span>under construction !</span> {/* Under construction notice */}
        </p>
      </header>
    </div>
  )
}

export default Snake // Exporting the Snake component as default
