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
        </div>
    )
}

export default login