import React from 'react'

const Button = ({className,btn}) => {
  return (
    <button className={`pt-4 pb-3 px-7 bg-btnColor text-white font-pop text-sm font-normal ${className}`} type='button'>{btn}</button>
  )
}

export default Button