import { useRef } from 'react'

const InputComp = () => {
  const ref = useRef()
  const showPassword = () => {
    ref.current.src = ref.current.src.includes('/src/assets/eye.png')
      ? '/src/assets/eye-hidden.png'
      : '/src/assets/eye.png'
  }

  return (
    <>
      <div className='input-container'>
        <input type='text' placeholder='Card Name' className='input-fields' />
        <input type='url' placeholder='Website URL' className='input-fields' />
        <input type='text' placeholder='Username' className='input-fields' />
        <div className='password-input-container'>
          <input
            type='password'
            placeholder='Password'
            className='input-fields'
          />
          <span className='show-password' onClick={showPassword}>
            <img ref={ref} src='/src/assets/eye.png' alt='' className='eye' />
          </span>
        </div>
      </div>
      <button className='save-btn'>SAVE</button>
    </>
  )
}

export default InputComp
