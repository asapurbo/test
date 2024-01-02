import React from 'react'

const List = ({className,href,text}) => {
  return (
    <li className={`duration-300 text-[#fff] font-Nun text-base font-semibold hover:text-[#FF5A3C] rounded-md hover:bg-white p-2 ${className}`}><a  className="block" href={href}>{text}</a></li>
  )
}

export default List