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
            <h2 className='head'>Mortage Calculator</h2>
            <a href="">clear All</a>
          </div>
          <form action="">
            <div className='mortage-amount'>
              <label htmlFor="">Mortage Amount</label> <br />
              <input type="text" name="mortage-amount" id="" />
            </div>
            <div className='mortage-inputs'>
              <div style={{width: '50%'}}>
                <label htmlFor="">Mortage Team</label>
                <input type="text" name="years" id="" />
              </div>
              <div style={{width: '50%'}}>
                <label htmlFor="">Interest Rate</label>
                <input type="text" name="years" id="" />
              </div>
            </div>
            <div className="query-type">
              <label htmlFor="query-type"> Query Type <span className="required-input">*</span></label>
              <div className="radio-container" style={{ marginTop: '8px' }}>
                <div className="radio-option" style={{marginBottom: '1em'}}>
                  <input
                    type="radio"
                    id="repayment"
                    name="query-type"
                    value="repayment"
                    
                  />
                  <label htmlFor="repayment"> Repayment</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="interest-only"
                    name="query-type"
                    value="interest-only"
                   
                  />
                  <label htmlFor="interest-only"> Interest Only</label>
                </div>
              </div>
              </div>
            <button style={{ gap: '0.5em' }}>
            <img src="public/assets/images/icon-calculator.svg" alt="" />Calculate Repayments
          </button>
          </form>
        </div>
        <div className='right-container'>
          <div className='empty-container-image'>
          <img src="../assets/images/illustration-empty.svg" alt="" />           
          <h2 style={{color: 'var(--white)'}}>Results shown here</h2>
          <p style={{color: 'var( --slate-500)'}}>Complete the form and click "calculate reapymets" to see what your monthly repayments would be</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
