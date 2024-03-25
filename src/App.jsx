import './App.css'
import InputComp from './components/InputComp'
import HeadingComp from './components/HeadingComp'
import PasswordsCard from './components/PasswordsCard'
import React, { useState } from 'react'

function App () {
  return (
    <>
      <div className='container'>
        <HeadingComp />
        <InputComp />
      </div>
    </>
  )
}

export default App
