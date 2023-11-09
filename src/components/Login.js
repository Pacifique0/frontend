import { BrowserRouter as Router, Link,Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/logo.png'
import Dashboard from '../components/Dashboard'

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }
    

    const handleSubmit = (event)=>{
        event.preventDefault();
        if (validateForm()) {
           return <>
       
            <Route path="/" element={<Dashboard />} />
          
           </>
           
        } else {
            setError('Please Fill Out All Fields.');
        }
    }

    return (
    <div className="loginContainer">
        
        <div className="loginAlone">
            <div className="form">
            <header className='loginHeader'>
            <img className='logo1' src={logo} alt="logo"  width={80}/>
            <h4>ASYV REQUISTION SYSTEM</h4>
        </header>
                <h3 className='loginS'>Login</h3>
                <form className='loginForm' onSubmit={handleSubmit}>
                    <div className="form-group">
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    {error && <div className="error">{error}</div>}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login;