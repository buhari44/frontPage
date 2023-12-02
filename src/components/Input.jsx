import React from 'react'
import "./Register.css"

const Input = (props) => {

    const { errorMessage, onChange, id, ...inputProps} =props;
  return (
    <div className='formInput'>
{props.children}
      {/* <label>{label}</label>   */}
        <input {...inputProps} onChange={onChange}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default Input