import { useEffect, useRef, useState } from 'react'
import PasswordsCard from './PasswordsCard'
import { v4 as uuidv4 } from 'uuid'

const InputComp = () => {
  const ref = useRef()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordsArray, setPasswordsArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem('passwords')
    if (passwords) {
      setPasswordsArray(JSON.parse(passwords))
    }
  }, [])

  const [form, setform] = useState({
    siteName: '',
    url: '',
    userName: '',
    password: ''
  })

  const showPassword = () => {
    ref.current.src = ref.current.src.includes('/src/assets/eye.png')
      ? '/src/assets/eye-hidden.png'
      : '/src/assets/eye.png'

    setPasswordVisible(!passwordVisible)
  }
  const deletePassword = id => {
    setPasswordsArray(passwordsArray.filter(item => item.id !== id))
    localStorage.setItem(
      'passwords',
      JSON.stringify(passwordsArray.filter(item => item.id !== id))
    )
  }

  const savePassword = () => {
    setPasswordsArray([...passwordsArray, { ...form, id: uuidv4() }])
    localStorage.setItem(
      'passwords',
      JSON.stringify([...passwordsArray, { ...form, id: uuidv4() }])
    )
  }

  const handleChange = e => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='input-container'>
        <input
          name='siteName'
          value={form.siteName}
          type='text'
          placeholder='App Name'
          className='input-fields'
          onChange={handleChange}
        />
        <input
          name='url'
          value={form.url}
          type='url'
          placeholder='Website URL'
          className='input-fields'
          onChange={handleChange}
        />
        <input
          name='userName'
          value={form.userName}
          type='text'
          placeholder='Username'
          className='input-fields'
          onChange={handleChange}
        />
        <div className='password-input-container'>
          <input
            name='password'
            value={form.password}
            type={passwordVisible ? 'text' : 'password'}
            placeholder='Password'
            className='input-fields'
            onChange={handleChange}
          />
          <span className='show-password' onClick={showPassword}>
            <img ref={ref} src='/src/assets/eye.png' alt='' className='eye' />
          </span>
        </div>
      </div>
      <button className='save-btn' onClick={savePassword}>
        SAVE
      </button>
      <hr />
      <div className='card-container'>
        {passwordsArray.map(item => (
          <PasswordsCard
            item={item}
            deletePassword={deletePassword}
            passwordsArray={passwordsArray}
          />
        ))}
      </div>
    </>
  )
}

export default InputComp
