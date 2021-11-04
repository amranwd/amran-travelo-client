import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="text-center">
                        <img src={notfound} alt="404" />
                    </div>
                    <div className="text-center mb-3">
                        <Link to="/home">
                            <button className="btn btn-lg btn-warning">Back Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;