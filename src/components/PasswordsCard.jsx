import { useEffect, useState } from 'react'
import './PasswordsCard.css'

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

  return (
    // <div className={setClassName} style={{ backgroundColor: cardBG() }}>
    <div className='card'>
      <div className='card-top'>
        <img src='/src/assets/delete.png' alt='' />
        <h2 className='card-heading'>{item.siteName}</h2>
        <img src='/src/assets/edit.png' alt='' />
      </div>
      <div className='username-container'>
        <p className='username-key'>Username:</p>
        <p className='username-value'>{item.userName}</p>
        <img src='/src/assets/copy.png' alt='' className='copy-icon' />
      </div>
      <div className='password-container'>
        <p className='password-key'>Password:</p>
        <p className='password-value'>{item.password}</p>
        <img src='/src/assets/copy.png' alt='' className='copy-icon' />
      </div>
      <div className='url-container'>
        <p className='url-key'>URL:</p>
        <a className='url-value'>{item.url}</a>
        <img src='/src/assets/copy.png' alt='' className='copy-icon' />
      </div>
    </div>
  )
}

export default PasswordsCard
