import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://travelo-server.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <>
            <div className="container py-5">
                <div className="row text-center">
                    <div className="col-lg-6 mb-5 offset-lg-3">
                        <h1>Our Packages</h1>
                        <p>Visit our popular packages for your and also check destination rating</p>
                    </div>
                    <div className="row">
                        {
                            services.map(service => <Service
                                service={service}
                                key={service._id}
                            ></Service>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;