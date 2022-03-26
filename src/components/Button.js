import React from 'react'

const Button = ({color , text , onClick , showAdd}) => { // use props inside Button function
  return (
        <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{showAdd ? 'close' : text }</button>
  )
}

export default Button
