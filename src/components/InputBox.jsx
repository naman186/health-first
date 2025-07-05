import React from 'react'

function InputBox({
    className = "",
    type = "text",
    ...props
}) {

    const id = React.useId();
  return (
    <div className='w-full'>
        {label && <label className='block mb-2 text-sm font-medium text-gray-700'>{label}</label>}
    <input
      type={type}
      className={`border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
      placeholder='Enter text...'
      ref={ref} // ref is used to get the input element in the parent component
      id={id} // id is used to get the input element in the parent component
    />
    </div>
  )
}

export default InputBox