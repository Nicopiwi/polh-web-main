import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-gray-300
        hover:bg-primary-blueish
        rounded
        text:darker
        rounded-full
    `}
    >
      {children}
    </button>
  );
};

export default Button;
