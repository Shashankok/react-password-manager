import { useEffect, useRef, useState } from 'react'
import PasswordsCard from './PasswordsCard'
import { v4 as uuidv4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const InputComp = () => {
  const ref = useRef()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [passwordsArray, setPasswordsArray] = useState([])
  const [currentId, setCurrentId] = useState()

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
    console.log('delete clicked')
    setPasswordsArray(passwordsArray.filter(item => item.id !== id))
    localStorage.setItem(
      'passwords',
      JSON.stringify(passwordsArray.filter(item => item.id !== id))
    )
  }

  const editPassword = id => {
    console.log('edit clicked')
    setform(passwordsArray.filter(item => item.id === id)[0])
    setIsEditing(true)
    setCurrentId(id)
  }

  const savePassword = () => {
    if (!form.siteName || !form.userName || !form.password) {
      toast.error('Please fill all the fields', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'dark'
      })
      return
    }

    if (isEditing) {
      setPasswordsArray(prevPasswordsArray => {
        const updatedPasswordsArray = prevPasswordsArray.map(item => {
          if (item.id === currentId) {
            return { ...form, id: currentId }
          }
          return item
        })
        localStorage.setItem('passwords', JSON.stringify(updatedPasswordsArray))
        return updatedPasswordsArray
      })
      setIsEditing(false)
      setCurrentId(null)
    } else {
      setPasswordsArray(prevPasswordsArray => {
        const updatedPasswordsArray = [
          ...prevPasswordsArray,
          { ...form, id: uuidv4() }
        ]
        localStorage.setItem('passwords', JSON.stringify(updatedPasswordsArray))
        return updatedPasswordsArray
      })
    }

    // Clear the form after saving
    setform({
      siteName: '',
      url: '',
      userName: '',
      password: ''
    })
  }

  const handleChange = e => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme='dark'
      />
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
            showPassword={showPassword}
            editPassword={editPassword}
          />
        ))}
      </div>
    </>
  )
}

export default InputComp
