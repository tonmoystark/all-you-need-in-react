import React, { useState } from 'react'

function Button({text, color, size, onClick, disabled}){


  return <button
    className={`
      ${size === 'small' ? 'px-2 py-1 text-sm' : 'px-3 py-2 text-md'}
      ${size === 'large' ? 'px-6 py-3 text-2xl' : 'px-3 py-2 text-md'}

      ${color === 'primary' ? 'bg-amber-400 text-black' : 'bg-white text-black'}
      ${color === 'secondary' ? 'bg-green-400 text-black' : 'bg-white text-black'}
      ${color === 'danger' ? 'bg-red-400 text-black' : 'bg-white text-black'}
      ${disabled ? 'opacity-10' : 'opacity-0'}
      `
    }
    onClick={onClick}
  >{text}</button>
}


const BasicProps = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div>
      <Button 
        text='Small Button' 
        size='small'
      />
      <div>
        <Button 
          onClick={() => setCounter(counter + 1)}
          text='Counter Button' />
      </div>
      
    </div>
  )
}

export default BasicProps