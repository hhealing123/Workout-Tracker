// import { useRef, useState, useEffect } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import { LOGIN } from './utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from './utils/auth';

const LoginArea = (props) => {
    const userRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [login, { error }] = useMutation(LOGIN);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const mutationResponse = await login({
              variables: { email: email.email, password: pass.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
          } catch (e) {
            console.log(e);
          }
    }
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [succes, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={()=> props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    )
}

export default LoginArea