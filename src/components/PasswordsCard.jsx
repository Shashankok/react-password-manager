import { useEffect, useState } from 'react'
import './PasswordsCard.css'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const PasswordsCard = ({ item, arrayLength }) => {
  // const [cardClass, setCardClass] = useState('card')
  // // console.log('item is ' + item)
  // console.log('username is ' + item.userName)
  // const cardBG = () => {
  //   const colors = ['#92fc88', '#ffb663', '#a763ff']
  //   return colors[arrayLength % colors.length]
  // }

  // const setClassName = () => {
  //   let rem = colors[arrayLength % colors.length]
  //   setCardClass(cardClass + ' card' + rem)
  // }
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
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      {/* // <div className={setClassName} style={{ backgroundColor: cardBG() }}> */}
      <div className='card'>
        <div className='card-top'>
          <img src='/src/assets/delete.png' alt='' />
          <h2 className='card-heading'>{item.siteName}</h2>
          <img src='/src/assets/edit.png' alt='' />
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
          <p className='password-value'>{item.password}</p>
          <img
            onClick={() => {
              copyText(item.password)
            }}
            src='/src/assets/copy.png'
            alt=''
            className='copy-icon'
          />
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
