import {useState} from 'react';
import "./Form.css"

function Form() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    const handleEmailValidation = (e) => {
        const value = e.target.value;
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailRegex.test(value)) {
            setError('Please provide a valid email address');
            setHasError(true);
        } else {
            setError('');
            setHasError(false);
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Your email address...' 
        value={email} 
        onInput={handleEmailValidation}
        className={hasError ? 'input-error' : ''}/>
       {hasError &&  <p className='error'>{error}</p>}
        
        <button type='Submit'>Notify Me</button>
      </form>
    </div>
  )
}

export default Form
