import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    className = "", // ye jo bhi wo particular className pass karega wo button ke sath add ho jayegi
    ...props //props is used taaki hum button ke andar koi bhi extra props pass kar sakein jaise onClick, disabled, ya koi style etc.

}) {

  return (
    <button
      type={type}
      className={`${bgColor} ${textColor} px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>   
  )
}

export default Button