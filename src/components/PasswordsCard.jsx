import './PasswordsCard.css'

const PasswordsCard = () => {
  return (
    <div className='card'>
      <div className='card-top'>
        <img src='/src/assets/delete.png' alt='' />
        <h2 className='card-heading'>Facebook Account</h2>
        <img src='/src/assets/edit.png' alt='' />
      </div>
      <div className='username-container'>
        <p className='username-key'>Username:</p>
        <p className='username-value'>Shashank</p>
        <img src='/src/assets/copy.png' alt='' className='copy-icon' />
      </div>
      <div className='password-container'>
        <p className='password-key'>Password:</p>
        <p className='password-value'>Test@123</p>
        <img src='/src/assets/copy.png' alt='' className='copy-icon' />
      </div>
      <div className='url-container'>
        <p className='url-key'>URL:</p>
        <p className='url-value'>https://badabano.com</p>
        <img src='/src/assets/copy.png' alt='' className='copy-icon' />
      </div>
    </div>
  )
}

export default PasswordsCard
