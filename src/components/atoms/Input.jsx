import React from 'react';

// const Input = ({ placeholder, value, onChange }) => (
//   <input
//     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//     type="text"
//     placeholder={placeholder}
//     value={value}
//     onChange={onChange}
//   />
// );

const Input = ({ placeholder, value, onChange }) => (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );

export default Input;