import { useState } from 'react';
import './App.css';

function App() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [error, setError] = useState({
    mortgageAmount: false,
    mortgageTerm: false,
    interestRate: false,
    mortgageType: false
  });
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calculateRepayments = () => {
    const principal = parseFloat(mortgageAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(mortgageTerm) * 12;

    let monthly = 0;
    if (mortgageType === "repayment") {
      monthly = (principal * calculatedInterest) / (1 - Math.pow(1 + calculatedInterest, -calculatedPayments));
    } else if (mortgageType === "interest-only") {
      monthly = principal * calculatedInterest;
    }

    return {
      monthly: monthly.toFixed(2),
      total: (monthly * calculatedPayments).toFixed(2)
    };
  };

  const submitForms = (e) => {
    e.preventDefault();

    const newError = {
      mortgageAmount: mortgageAmount.trim() === "",
      mortgageTerm: mortgageTerm.trim() === "",
      interestRate: interestRate.trim() === "",
      mortgageType: mortgageType === ""
    };
    const isValid = !Object.values(newError).some(value => value);

    setError(newError);

    if (isValid) {
      const { monthly, total } = calculateRepayments();
      setMonthlyPayment(monthly);
      setTotalPayment(total);
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className='left-container'>
          <form action="" onSubmit={submitForms}>
            <div className='header'>
              <h2 className='head'>Mortgage Calculator</h2>
              <a href="" onClick={() => {
                setMortgageAmount("");
                setMortgageTerm("");
                setInterestRate("");
                setMortgageType("");
                setError({
                  mortgageAmount: false,
                  mortgageTerm: false,
                  interestRate: false,
                  mortgageType: false,
                });
                setIsSubmitted(false);
                setMonthlyPayment(null);
                setTotalPayment(null);
              }}>Clear All</a>
            </div>
            <div className='mortgage-amount'>
              <div className='label'>
                <label htmlFor="">Mortgage Amount</label> <br />
              </div>
              <div className="input-container" style={{ marginTop: '8px' }}>
                <span style={{ textAlign: 'center', color: 'var(--slate-900)' }} className='icon'>£</span>
                <input
                  className="input-field"
                  type="text"
                  name="amount"
                  value={mortgageAmount} 
                  onChange={(e) => setMortgageAmount(e.target.value)} 
                 />
              </div>
              {error.mortgageAmount && <span className='error-message'>This field is required</span>}
            </div>
            <div className='mortage-inputs'>
              <div className='label' style={{ width: '100%' }}>
                <label htmlFor="mortgage-term">Mortgage Term</label>
                <div className="input-container" style={{ marginTop: '8px' }}>
                  <input 
                    className="input-field"
                    type="text"
                    name="mortgage-term"
                    value={mortgageTerm}
                    onChange={(e) => setMortgageTerm(e.target.value)}
                  />
                   <span style={{ textAlign: 'center', color: 'var(--slate-900)' }} className='icon'>Years</span>
                </div>
                {error.mortgageTerm && <span className='error-message'>This field is required</span>}
              </div>
              <div className='label' style={{ width: '100%', marginBottom: '15px' }}>
                <label htmlFor="interest-rate">Interest Rate</label>
                <div className="input-container" style={{ marginTop: '8px' }}>
                  <input 
                    className="input-field"
                    type="text"
                    name="interest-rate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />

                  <span style={{ textAlign: 'center', color: 'var(--slate-900)' }} className='icon'> %</span>
                </div>
                {error.interestRate && <span className='error-message'>This field is required</span>}
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
                    checked={mortgageType === "repayment"}
                    onChange={(e) => setMortgageType(e.target.value)}
                  />
                  <label htmlFor="repayment"> Repayment</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="interest-only"
                    name="mortgage-type"
                    value="interest-only"
                    checked={mortgageType === "interest-only"}
                    onChange={(e) => setMortgageType(e.target.value)}
                  />
                  <label htmlFor="interest-only"> Interest Only</label>
                </div>
              </div>
              {error.mortgageType && <span className='error-message'>This field is required</span>}
            </div>
            <button type='submit' style={{ gap: '0.5em' }}>
              <img src="/assets/images/icon-calculator.svg" alt="icon-calculator" />Calculate Repayments
            </button>
          </form>
        </div>
        <div className='right-container'>
          {isSubmitted ? (
            <div className='results-container'>
              <h2 style={{color: 'var(--white)', marginBottom: '8px'}}>Your results</h2>
              <p style={{color: 'var(--slate-100)', opacity: '0.5', fontSize: '0.89em'}}>Your results are shown below based on the information you provided. To adjust the results,
                 edit the form and click "calculate repayments" again.
              </p>
              <div className='inner-results-container'>
              <h2 style={{color: 'var(--slate-100)', fontSize: '1em', opacity: '0.5'}} > Your monthly repayments </h2><span className="monthly-result"> £{monthlyPayment} </span>
              <hr className='line'/>
              <h2 style={{ color: 'var(--white)',fontSize: '1em', opacity: '0.5' }}>Total you'll repay over the term</h2><span style={{fontSize:'1.5em',  color: 'var(--white)'}}> £{totalPayment}</span>
              </div>
            </div>
          ) : (
            <div className='empty-container-image' style={{display: 'flex', justifyContent: 'center',alignItems: 'center',textAlign: 'center',}}>
              <div>
              <img src="../assets/images/illustration-empty.svg" alt="illustration-empty" />
              <h2 style={{ color: 'var(--white)' }}>Results shown here</h2>
              <p style={{ color: 'var(--slate-500)' }}>Complete the form and click "calculate repayments" to see what your monthly repayments would be</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
