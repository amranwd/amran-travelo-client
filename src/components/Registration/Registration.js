import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
    const { signInUsingGoogle, registerNewUser, setUserName, setIsLoading, error, setUser, setError } = useAuth();

    // redireact to location
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/home";

    // declare of states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // email password login/ register init
    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        registerNewUser(email, password)
            .then(res => {
                setIsLoading(true);
                setUserName(name);
                setUser(res.user);
                history.push(url)
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false)
            })

    }
    // handle google login
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
                        <h1 className="text-center mb-5">Please Register</h1>
                        <form onSubmit={handleRegistration}>
                            <input className="form-control form-control-lg mb-3" type="text" placeholder="Name" onBlur={handleName} />
                            <input className="form-control form-control-lg mb-3" type="email" placeholder="Email" onBlur={handleEmail} />
                            <input className="form-control form-control-lg" type="password" placeholder="Password" onBlur={handlePassword} />
                            <p className="text-danger mt-3">{error}</p>
                            <input className="btn btn-lg bg-warning" type="submit" value="Register" />
                        </form>
                    </div>
                    <div className="text-center mb-5">
                        <button onClick={handleGoogleLogin} className="mb-3 with-google">Login With Google</button>
                        <p>Registered Already ? <Link to="/registration">Login Now</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;