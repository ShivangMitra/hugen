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
        <div>
            Already have a account? <button onClick={handleCLick} >Login</button>
        </div>
    </div>
  )
}

export default LoginPage