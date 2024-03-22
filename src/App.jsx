import './App.css'
import InputComp from './components/InputComp'
import HeadingComp from './components/HeadingComp'
import PasswordsCard from './components/PasswordsCard'

function App () {
  return (
    <>
      <div className='container'>
        <HeadingComp />
        <InputComp />
        <hr />
        <div className='card-container'>
          <PasswordsCard />
          <PasswordsCard />
          <PasswordsCard />
          <PasswordsCard />
          <PasswordsCard />
          <PasswordsCard />
          <PasswordsCard />
        </div>
      </div>
    </>
  )
}

export default App
