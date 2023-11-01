import React from 'react'

export default function Input({ placeholder }) {
  return (
    <div>
      <input
        className='text-gray-400 bg-transparent outline-none border-none tablet:w-[350px] text-sm font-light'
        placeholder={placeholder}
      />
    </div>
  )
}
