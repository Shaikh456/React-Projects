import React from "react";

const BackgroundImage = ({ imageUrl, className = "", children }) => {
  return (
    <div
      className={`relative bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay for darkening or coloring the background */}
      <div className="absolute inset-0  bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
