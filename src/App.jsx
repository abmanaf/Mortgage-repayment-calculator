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
            <div className='mortage-amount'>
              <label htmlFor="">Mortage Amount</label> <br />
              <input type="text" name="mortage-amount" id="" />
            </div>
            <div className='mortage-inputs'>
              <div>
                <label htmlFor="">Mortage Team</label>
                <input type="text" name="years" id="" />
              </div>
              <div>
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
            <button style={{ padding: '0.5em', borderRadius: '2em', cursor: 'pointer', border: 'none', display: 'flex', justifyContent: 'center', gap: '0.5em', alignItems: 'center' }}>
            <img src="public/assets/images/icon-calculator.svg" alt="" />Calculate Repayments
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
