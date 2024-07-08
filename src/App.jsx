import { useState } from 'react';
import './App.css';

function App() {
const [mortgageAmount, setMortgageAmount] = useState("");
const [mortgageTerm, setMortgageTerm] = useState("");
const [interestRate, setInterestRate] = useState("");
const [mortgageType, setMortgageType] =useState("");
const [error, setError] = useState({
  mortgageAmount: false,
  mortgageTerm: false,
  interestRate: false,
  mortgageType: false
})
const submitForms = () => {

}
  return (
    <>
      <div className="container">
        <div className='left-container'>
          <form action="" onSubmit={submitForms}>
            <div className='header'>
              <h2 className='head'>Mortgage Calculator</h2>
              <a href="">Clear All</a>
            </div>
            <div className='mortgage-amount'>
              <div className='label'>
                <label htmlFor="">Mortgage Amount</label> <br />
              </div>
              <div className="input-container" style={{ marginTop: '8px' }}>
                <span style={{ textAlign: 'center', color: 'var(--slate-900)' }} className='icon'>£</span>
                <input className="input-field" type="text" name="amount" value={mortgageAmount} onChange={(e)=> setMortgageAmount(e.target.value)}  />
              </div>
            </div>
            <div className='mortage-inputs'>
              <div className='label' style={{ width: '100%' }}>
                <label htmlFor="mortgage-term">Mortgage Term</label>
                <div className="input-container" style={{ marginTop: '8px' }}>
                  <input className="input-field" type="text" name="mortgage-term" value={mortgageTerm} onChange={(e)=>setMortgageTerm(e.target.value)}/>
                  <span style={{ textAlign: 'center', color: 'var(--slate-900)' }} className='icon'>Years</span>
                </div>
              </div>
              <div className='label' style={{ width: '100%' }}>
                <label htmlFor="interest-rate">Interest Rate</label>
                <div className="input-container" style={{ marginTop: '8px' }}>
                  <input className="input-field" type="text" name="interest-rate" value={interestRate} onChange={(e)=>setInterestRate(e.target.value)}/>
                  <span style={{
                    textAlign: 'center', color: 'var(--slate-900)' }} className='icon'>%</span>
                </div>
              </div>
            </div>
            <div className="mortgage-type">
              <label htmlFor="mortgage-type">Mortgage Type</label>
              <div className="radio-container" style={{ marginTop: '8px' }}>
                <div className="radio-option" style={{ marginBottom: '1em' }}>
                  <input
                    type="radio"
                    id="repayment"
                    name="mortgage-type"
                    value="repayment"
                  />
                  <label htmlFor="repayment"> Repayment</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="interest-only"
                    name="mortgage-type"
                    value="interest-only"
                  />
                  <label htmlFor="interest-only"> Interest Only</label>
                </div>
              </div>
            </div>
            <button style={{ gap: '0.5em' }}>
              <img src="/assets/images/icon-calculator.svg" alt="icon-calculator" />Calculate Repayments
            </button>
          </form>
        </div>
        <div className='right-container'>
          <div className='empty-container-image'>
            <img src="../assets/images/illustration-empty.svg" alt="illustration-empty" />
            <h2 style={{ color: 'var(--white)' }}>Results shown here</h2>
            <p style={{ color: 'var(--slate-500)' }}>Complete the form and click "calculate repayments" to see what your monthly repayments would be</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
