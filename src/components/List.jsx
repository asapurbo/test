import React from 'react'

const List = ({className,href,text}) => {
  return (
    <li className={`duration-300 text-[#5C5B7B] font-Nun text-base font-semibold hover:text-white rounded-md hover:bg-slate-500 p-2 ${className}`}><a  className="block" href={href}>{text}</a></li>
  )
}

export default List