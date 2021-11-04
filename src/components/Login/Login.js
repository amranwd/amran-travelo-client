import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, singinWithEmailPassword, setIsLoading, setUser, error, setError } = useAuth();
    // declare states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // redirect loactions
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/home";

    // email password login/ register init
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    // login with email and password
    const handleLogin = (e) => {
        e.preventDefault();
        singinWithEmailPassword(email, password)
            .then(res => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // google login init
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(res => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="travelo-form my-5">
                        <h1 className="text-center mb-5">Please Login</h1>
                        <form onSubmit={handleLogin}>
                            <input className="form-control form-control-lg mb-3" type="email" onBlur={handleEmail} placeholder="Email" />
                            <input className="form-control form-control-lg mb-3" type="password" onBlur={handlePassword} placeholder="Password" />
                            <p className="text-danger">{error}</p>
                            <input className="btn btn-lg bg-warning" type="submit" value="Login" />
                        </form>
                    </div>
                    <div className="text-center mb-5">
                        <button onClick={handleGoogleLogin} className="with-google mb-3">Login With Google</button>
                        <p>Not Registered yet ? <Link to="/registration">Register Now</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;