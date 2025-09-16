import React from "react";

const Card = ({ title, description, imageUrl}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {imageUrl && (
        <img
          className="w-full"
          src={imageUrl}
          alt={title || "Card image"}
        />
      )}
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-black">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    {/*   {actionText && onActionClick && (
        <div className="px-6 py-4">
          <button
            onClick={onActionClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {actionText}
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Card;
