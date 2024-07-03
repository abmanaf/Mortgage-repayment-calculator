import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container" >
        <div className='left-container'>
          <div className='header' >
            <h2 className='header'>Mortage Calculator</h2>
            <a href="">clear All</a>
          </div>
          <form action="">
            <div>
              <label htmlFor="">Mortage Amount</label> <br />
              <input type="text" name="mortage-amount" id="" />
            </div>
          <button style={{ padding: '0.8em', borderRadius: '2em', cursor: 'pointer', border: 'none', backgroundColor: 'var(--Dark-gray-blue)', color: 'var(--White)' }}>
            Continue
          </button>
          </form>
        </div>
        <div className='right-container'>
          <span className="product-name" style={{fontWeight: '800'}}>Summary</span>
           
          
        </div>
      </div>
    </>
  )
}

export default App
