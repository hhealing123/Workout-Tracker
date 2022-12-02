import { useRef, useState, useEffect } from 'react';

const login = () => {
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
                <input 
                type="text" 
                ref={userRef} 
                id="username" 
                autocomplete="off" 
                onChange={(e) => setUser(e.target.value)}
                value={user}
                 />
            </form>
        </div>
    )
}

export default login