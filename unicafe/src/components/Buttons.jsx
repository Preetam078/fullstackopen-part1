import React from 'react'

const Buttons = ({handleClick, value, label}) => {
  return (
    <>
        <button style={{margin:"10px"}} onClick={()=>handleClick(value+1)}>{label}</button>
    </>
  )
}

export default Buttons