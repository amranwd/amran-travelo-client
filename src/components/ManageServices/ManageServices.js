import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://travelo-server.herokuapp.com/services/`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = (id) => {
        const url = `https://travelo-server.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainService = services.filter(service => service._id !== id);
                    setServices(remainService);
                    alert("Service Deleted Successfully");
                }
            })
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className="text-center pb-5">Manage Servics</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul>
                        {
                            services.map(service => <li className="d-flex rounded mb-3 align-items-center p-3 bg-dark justify-content-between" key={service._id}>
                                <div>
                                    <h4 className="text-white">{service.title}</h4>
                                </div>
                                <div>
                                    <Link to={`/updateService/${service._id}`}><button className="btn btn-sm btn-primary">Edit Service</button></Link>
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-sm btn-danger ms-3">Delete Service</button>
                                </div>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;