import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateService = () => {
    const [service, setService] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const service_url = `https://travelo-server.herokuapp.com/services/${id}`;
        fetch(service_url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id])

    const handleTitle = (e) => {
        const titleVal = e.target.value;
        const updateTitle = { title: titleVal, description: service.description, price: service.price, img: service.img }
        setService(updateTitle);
    }
    const handleDescription = (e) => {
        const descriptionVal = e.target.value;
        const updateDescription = { title: service.title, description: descriptionVal, price: service.price, img: service.img }
        setService(updateDescription);
    }
    const handlePrice = (e) => {
        const priceVal = e.target.value;
        const updatePrice = { title: service.title, description: service.description, price: priceVal, img: service.img }
        setService(updatePrice);
    }
    const handleImg = (e) => {
        const imgVal = e.target.value;
        const updateImg = { title: service.title, description: service.description, price: service.price, img: imgVal }
        setService(updateImg);
    }


    const handleUpdate = e => {
        const service_url = `https://travelo-server.herokuapp.com/services/${id}`;
        fetch(service_url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('User Update Successfully');
                    setService({});
                }
            })


        e.preventDefault();
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className="text-center mb-5">Update Service</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <form onSubmit={handleUpdate}>
                        <input type="text" onChange={handleTitle} value={service.title || ''} className="form-control form-control-lg mb-3" />
                        <input type="text" onChange={handlePrice} value={service.price || ''} className="form-control form-control-lg mb-3" />
                        <textarea className="form-control form-control-lg mb-3" onChange={handleDescription} value={service.description}></textarea>
                        <input type="text" onChange={handleImg} value={service.img || ''} className="form-control form-control-lg mb-3" />
                        <input className="btn btn-lg btn-warning" type="submit" value="Update Service" />

                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateService;