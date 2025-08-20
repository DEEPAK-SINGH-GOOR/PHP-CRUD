{
  /* <span className="font-medium">{error.firstName}</span>; 
        <span className="font-medium mt-2 text-sm text-red-600 dark:text-red-500">{error.firstName}</span>
    */
}
import React from 'react'


const Span = ({label}) => {
  return (
    // <button
    //   className={`w-[100px] border-2 border border-gray-300 p-2 bg${color} text-white cursor-pointer `}
    //   onClick={onClick}
    // >
    //   {label}
    // </button>
    <span className="font-medium mt-2 text-sm text-red-600 dark:text-red-500">{label}</span>
  );
};
export default Span;