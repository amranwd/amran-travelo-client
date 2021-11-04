import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => { console.log(data) };
    return (
        <div className="container my-5">
            <div className="row">
                <h1 className="text-center mb-5">Contact With Us</h1>
                <div className="col-lg-8 offset-lg-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control form-control-lg mb-3" placeholder="Name" {...register("name")} />
                        <input className="form-control form-control-lg mb-3" placeholder="Email" {...register("email", { required: true })} />
                        <textarea placeholder="Message body" className="form-control mb-3 form-control-lg"></textarea>
                        <input className="btn btn-lg btn-warning" type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;