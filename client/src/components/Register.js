import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import Auth from './utils/auth';
import { ADD_USER } from './utils/mutations';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setName] = useState('');
    const [addUser] = useMutation(ADD_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const mutationResponse = await addUser({
            

            
             variables: {
              email: email.email,
              password: pass.password,
              username: username.username,
            },
          });
          const token = mutationResponse.data.addUser.token;
          Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={username} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="UserName"/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password" />
            <button type="submit">Sign Up</button>
        </form>
        <Link className="link-btn" to="/login">Already have an account? Login here</Link>
        </div>
    )
}

export default Register