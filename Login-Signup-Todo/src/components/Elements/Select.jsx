import React from "react";

const Select = ({ name, value, onChange, options, className }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 ${className}`}
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
