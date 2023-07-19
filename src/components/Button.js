import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, attachClickHandler }) => {
  return (
    <button 
      type='button' 
      style={{ backgroundColor: bgColor, color, borderRadius }} 
      className={`text-${size} p-3 w-${width}  hover:bg-${bgHoverColor}`}
      onClick={attachClickHandler}
    >
      {icon} {text}
    </button>
  )
}

export default Button;