import React from "react";

const Inputx = React.forwardRef(
  ({ label, type = "text", className = "", error, ...props }, ref) => {
    return (
      <div className="mb-4">
        {label && (
          <label className="block text-sm">{label}</label>
        )}
        <input
          type={type}
          ref={ref} // isi se input ki value udhar connect kr payegi kyuki ye component hai na direct input nhi 
          className={`w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300 ${className}`}
          {...props}
          
        />
        {error && <p className="text-red-500 text-sm">{error.message}</p>}
      </div>
    );
  }
);

export default Inputx;
