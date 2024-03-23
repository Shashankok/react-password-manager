import './App.css'
import InputComp from './components/InputComp'
import HeadingComp from './components/HeadingComp'
import PasswordsCard from './components/PasswordsCard'
import React, { useState } from 'react'

function App () {
  const [form, setform] = useState({
    siteName: '',
    url: '',
    userName: '',
    password: ''
  })

  const handleChange = e => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='container'>
        <HeadingComp />
        <InputComp form={form} handleChange={handleChange} />
        <hr />
      </div>
    </>
  )
}

export default App
