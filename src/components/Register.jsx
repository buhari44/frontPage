import React from 'react'
import Input from './Input'
import { useState } from 'react'
import './Register.css'


const Register = () => {
const [values, setValues]
= useState({
  name:"",
  alias:"",
  salary:"",
  budget:"",


})

const inputs =[
  {
    id:1,
    name:"Firstname",
    type:"text",
    placeholder:"Firstname",
    errorMessage:"Name should be letters only without any special character!",
    label:"Firstname", 
    pattern:"^[a-zA-Z]",
   required:true


  },

  {
    id:2,
    name:"alias",
    type:"text",
    placeholder:"Nickname",
    errorMessage:"alias should be 4-10 characters",
    label:"Nickname",
    required:true

  },

  {
    id:3,
    name:"Salary",
    type:"number",
    placeholder:"Salary",
    errorMessage:"Salary should be in number",
    label:"Salary",
    pattern:"[1-9][0-9]*",
    required:true
  },

  {
    id:4,
    name:"Budget",
    type:"number",
    placeholder:"Budget",
    errorMessage:"Budget should be in number",
    required:true,
    label:"Budget"

  },

]
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
  
    
  }

  const onChange = (e) =>{
   setValues({ ...values, [e.target.name]: e.target.value})


  }

  console.log(values)
  return (
    <div className='register'>
    <form onSubmit={handleSubmit}>
      {inputs.map((input)=>(
 <Input key={input.id} {...input} value={values[input.name]} onChange={onChange} />

      )
      )}
   
   
    <button>Submit</button>

    </form>
    </div>
    
  )
}

export default Register