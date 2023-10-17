"use client"
import  signIn  from 'next-auth'
import React from 'react'

const Login = () => {
  return (
    <div>
      <button type='submit' onChange={()=>{signIn}} >
        sign in
      </button>
    </div>
  )
}

export default Login