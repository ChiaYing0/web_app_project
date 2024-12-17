import React from 'react';

// const DesignThinkingCard = ({ title, content }) => (
//   <div className="bg-white shadow-md rounded-lg p-4 w-full">
//     <h3 className="text-lg font-bold mb-2">{title}</h3>
//     <p>{content}</p>
//   </div>
// );

const DesignThinkingCard = ({ title, content }) => (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );

export default DesignThinkingCard;
