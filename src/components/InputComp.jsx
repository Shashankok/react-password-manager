import { useEffect, useRef, useState } from 'react'
import PasswordsCard from './PasswordsCard'

const InputComp = ({ form, handleChange }) => {
  const ref = useRef()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordsArray, setPasswordsArray] = useState([])

  useEffect(() => {
    // localStorage.clear()
    let passwords = localStorage.getItem('passwords')
    if (passwords) {
      setPasswordsArray(JSON.parse(passwords))
    }
  }, [])

  // const [form, setform] = useState({
  //   siteName: '',
  //   url: '',
  //   userName: '',
  //   password: ''
  // })

  const showPassword = () => {
    ref.current.src = ref.current.src.includes('/src/assets/eye.png')
      ? '/src/assets/eye-hidden.png'
      : '/src/assets/eye.png'

    setPasswordVisible(!passwordVisible)
  }

  const savePassword = () => {
    setPasswordsArray([...passwordsArray, form])
    console.log('New passwordsArray length:', passwordsArray.length)
    localStorage.setItem('passwords', JSON.stringify([...passwordsArray, form]))
  }

  // const handleChange = e => {
  //   setform({ ...form, [e.target.name]: e.target.value })
  // }

  return (
    <>
      <div className='input-container'>
        <input
          name='siteName'
          value={form.siteName}
          type='text'
          placeholder='Card Name'
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
      <div className='card-container'>
        {passwordsArray.map(item => (
          <PasswordsCard item={item} arrayLength={passwordsArray.length} />
        ))}
      </div>
    </>
  )
}

export default InputComp
