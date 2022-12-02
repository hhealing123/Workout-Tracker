import { useRef, useState, useEffect } from 'react';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [succes, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMeg('');
    }, [user, pwd])

    return (
        <div>
            <p ref={errRef} className={errMsg ? "errMsg" : "offscreeen"} aria-live="assertive"></p>
            <h1>Sign In</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" name="" id="username" />
            </form>
        </div>
    )
}

export default Login