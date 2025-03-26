import React from 'react'

const Button = (props) => {
    const backgroundColor = props.backgroundColor;
  return (
    <div>
        <button className='bg-blue-500 text-white rounded px-4 py-2'>Click Me</button>
    </div>
  )
}

export default Button