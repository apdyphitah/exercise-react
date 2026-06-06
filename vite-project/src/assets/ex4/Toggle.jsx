import React, { useState } from 'react'

const Toggle = () => {
  const [isOn, setIsOn] = useState(false)

  const toggle = () => {
    setIsOn(!isOn)
  }

  return (   
    
    <>
      <p> {isOn ? 'button is on' : 'button is off'}</p>
      <button onClick={toggle}> {isOn ? 'on' : 'off'} </button>
    </>
  )
}

export default Toggle