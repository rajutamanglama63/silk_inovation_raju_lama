import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './loginForm.css'
import { login } from '../../redux/actions/authActions'

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email : "",
        password : "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(credentials.email, credentials.password));
            setCredentials({
                email : "",
                password : ""
            });
            navigate('/dashboard');
    }

    return (
        <div>
            <div className="login_form">
                <div className="login_form_wrapper">
                    <h2 style={{color : "navy", fontWeight : "400"}}>Login</h2>
                    <p className="instruction">Please login to access your account.</p>
                    <form className="form" autoComplete="off" noValidate onSubmit={submitHandler}>
                        <input 
                         className="input_field"
                         placeholder="Email/Phone Number" 
                         type="text" 
                         value={credentials.email}
                         onChange={(e) => setCredentials({...credentials, email : e.target.value})}
                        />
                        
                        <input 
                         className="input_field"
                         placeholder="Password/PIN" 
                         type="text" 
                         value={credentials.password}
                         onChange={(e) => setCredentials({...credentials, password : e.target.value})}
                        />
                        
                        <button type="submit" className="signin_btn">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
