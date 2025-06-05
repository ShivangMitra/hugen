import React, { useEffect, useState } from 'react'

function LoginPage({setLogin}) {

    const [name, setName] = useState('')
    const [age, setAge] = useState()
    const [gender, setGender] = useState('')

    const handleCLick = () => {
        setLogin(false)
    }

  return (
    <div className='loginContainer'>
        <div>
            Sign In
        </div>
        <input className='inputFields' placeholder='Enter your name' onChange={(e) => setName(e.target.value)}/>
        <input className='inputFields' placeholder='Enter your age' onChange={(e) => setAge(e.target.value)}/>
        <input className='inputFields' placeholder='Enter your gender' onChange={(e) => setGender(e.target.value)}/>
        <button className='btn' onClick={handleCLick} >Submit</button>
        <div style={{marginTop: '2%'}} >
            Already have a account?
        </div>
        <button className='btn' onClick={handleCLick} >Login</button>
    </div>
  )
}

export default LoginPage