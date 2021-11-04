import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://travelo-server.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h1 className="mb-5 pb-5 text-center">Service Details</h1>
                    <div className="row align-items-center">
                        <div className="col">
                            <img src={service.img} alt={service.title} />
                        </div>
                        <div className="col">
                            <h3>{service.title}</h3>
                            <p>SKU: {serviceId}</p>
                            <p>{service.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;