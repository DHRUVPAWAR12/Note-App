import React, { useState } from 'react'
import Passwordinput from '../../components/input/passwordinput'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { validateEmail } from '../../utils/helper'
import {toast } from 'react-toastify';
const SignUp =() =>{ 
const [email, setEmail] = useState("")
const [name, setName] = useState("")
const [password, setpassword] = useState("")
const [error, setError] = useState("")
const navigate = useNavigate()


const handleSignup = async(e) => {
  e.preventDefault()
  if(!name){
    setError("Please enter your name");
    return
  }
  if(!validateEmail(email) ){
    setError("Invalid Email")
    return
  }
  if(!password ){
    setError("Password is required");
    return
}
setError("")

try{
    const res = await axios.post('https://note-app-frontend-gqid.onrender.com/api/auth/signup', { username: name, email, password},{withCredentials: true});

    if(res.data.success === false){
      setError(res.data.message)
      toast.error(res.data.message)
      return
    }
    toast.success(res.data.message)
    setError(""),
    navigate("/login")
}catch(error){
  toast.error(error.message)
  console.log(error.message)
  setError(error.message)
}
}
  return (
    <>
    
    
    <div className='flex items-center justify-center mt-28'>
    <div className='w-96 border rounded bg-white px-7 py-10'>
      <form onSubmit={handleSignup}>
        <h4 className='text-2xl mb-7 '>
            Sign Up
        </h4>
        <input type="text" placeholder='Name' className='input-box' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder='Email' className='input-box' value={email} onChange={(e) => setEmail(e.target.value)}/>
      
      
      
      <Passwordinput value={password} onChange={(e) => setpassword(e.target.value)}/>
        {error && <p className = "text-red-500 text-sm pb-1">{error}</p>}
        <button type='submit' className='btn-primary'>
          SIGN UP
        </button>
        
        <p className='text-sm text-center mt-4'>
          Already have an account ? {" "}
          <Link to={"/login"} className='font-medium text-[#2B85FF] underline'>
            login
          </Link>
        </p>
        </form>
    </div>
  </div>
  </>
  )
}

export default SignUp
