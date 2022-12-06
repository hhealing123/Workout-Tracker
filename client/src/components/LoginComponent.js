// import { useRef, useState, useEffect } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { LOGIN } from './utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from './utils/auth';

const LoginArea = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const mutationResponse = await login({
              variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
          } catch (e) {
            console.log(e);
          }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };




    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="email" placeholder="example@email.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" placeholder="*********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <Link className="link-btn" to="/register">Don't have an account? Register here!</Link>
        </div>
    )
}

export default LoginArea