import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import Auth from './utils/auth';
import { ADD_USER } from './utils/mutations';

const Register = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const mutationResponse = await addUser({
            
             variables: {
              email: formState.email,
              password: formState.password,
              username: formState.username,
            },
          });
          const token = mutationResponse.data.addUser.token;
          Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input onChange={handleChange} name="username" id="username" placeholder="UserName"/>
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="email" placeholder="example@email.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input  onChange={handleChange} type="password" placeholder="*********" id="password" name="password" />
            <button type="submit">Sign Up</button>
        </form>
        <Link className="link-btn" to="/login">Already have an account? Login here</Link>
        </div>
    )
}

export default Register