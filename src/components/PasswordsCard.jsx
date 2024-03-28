import { useEffect, useRef, useState } from 'react'
import './PasswordsCard.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PasswordsCard = ({
  item,
  passwordsArray,
  deletePassword,
  editPassword
}) => {
  const ref = useRef()
  const [passwordText, setPasswordText] = useState('******')

  function hidePassword () {
    if (ref.current.src.includes('/src/assets/eye-hidden.png')) {
      ref.current.src = '/src/assets/eye.png'
      setPasswordText(item.password)
    } else if (ref.current.src.includes('/src/assets/eye.png')) {
      ref.current.src = '/src/assets/eye-hidden.png'
      setPasswordText('******')
    }
  }
  const copyText = copiedItem => {
    toast.success(copiedItem + ' Copied to clipboard', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    })
    navigator.clipboard.writeText(copiedItem)
  }
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='dark'
      />
      <div className='card'>
        <div className='card-top'>
          <img
            onClick={() => {
              deletePassword(item.id)
            }}
            src='/src/assets/delete.png'
            alt=''
          />
          <h2 className='card-heading'>{item.siteName}</h2>
          <img
            onClick={() => editPassword(item.id)}
            src='/src/assets/edit.png'
            alt=''
          />
        </div>
        <div className='username-container'>
          <p className='username-key'>Username:</p>
          <p className='username-value'>{item.userName}</p>
          <img
            onClick={() => {
              copyText(item.userName)
            }}
            src='/src/assets/copy.png'
            alt=''
            className='copy-icon'
          />
        </div>
        <div className='password-container'>
          <p className='password-key'>Password:</p>
          <p className='password-value'>{passwordText}</p>
          <img
            onClick={() => {
              copyText(item.password)
            }}
            src='/src/assets/copy.png'
            alt=''
            className='copy-icon'
          />
          <span onClick={() => hidePassword()}>
            <img
              ref={ref}
              src='/src/assets/eye-hidden.png'
              alt=''
              className='eye'
            />
          </span>
        </div>
        <div className='url-container'>
          <p className='url-key'>URL:</p>
          <a href={item.url} target='_blank' className='url-value'>
            {item.url}
          </a>
          <img
            onClick={() => {
              copyText(item.url)
            }}
            src='/src/assets/copy.png'
            alt=''
            className='copy-icon'
          />
        </div>
      </div>
    </>
  )
}

export default PasswordsCard
