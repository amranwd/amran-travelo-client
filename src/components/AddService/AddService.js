import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("https://travelo-server.herokuapp.com/services", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data Added Successfuly');
                    reset();
                }
            })
    };
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-6 offset-lg-3">
                    <h1 className="text-center mb-5">Add New Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control form-control-lg mb-3" {...register("title")} placeholder="Title" />
                        <textarea className="form-control form-control-lg mb-3" {...register("description")} placeholder="Description"></textarea>
                        <input className="form-control form-control-lg mb-3" {...register("price")} placeholder="Price" />
                        <input className="form-control form-control-lg mb-3" {...register("img")} placeholder="Image Link" />
                        <input className="btn btn-lg btn-warning" type="submit" value="Add New User" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;