import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Contex/Authprovider';

const Registration = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [singupError, setUpSingupError] = useState('');
    const {signIn, updateUser} = useContext(AuthContex);
    const navigate = useNavigate();

    const signup = data => {
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully')
            const userInfo = {
                displayName : data.name
            };
            updateUser(userInfo)
            .then(() => {
                userToDatabase(data.email, data.name, data.user)
            })
            .catch(error => console.error('error', error));
        })
        .catch(error => {console.error('error', error)
                        setUpSingupError(error.message);
    })
    }

    const userToDatabase = (email, displayname, role) => {
        const users = {email, displayname, role};
        fetch('https://b612-used-products-resale-server-side-100galib.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.acknowledged){
                getUserToken(email);
            }
        })
    }

    const getUserToken = email => {
        fetch(`https://b612-used-products-resale-server-side-100galib.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                navigate('/');
            }
        })

    }
    return (
        <div className='flex justify-center items-center my-20'>
            <div className='text-center w-96'>
                <h1 className='text-3xl font-bold'>Sign up</h1>
                <form onSubmit={handleSubmit(signup)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input {...register("name",{required: 'Name is Required'})} type="text" className="input input-bordered input-success" />
                        {errors.name && <p className='text-red-400 text-left ml-2 mt-2' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email",{required: 'Email is required'})} type="email" className="input input-bordered input-success" />
                        {errors.email && <p className='text-red-400 text-left ml-2 mt-2' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {required: 'Password is required', minLength: { value: 6, message: "Password at least six character" }})} type="password" className="input input-bordered input-success" />
                        {errors.password && <p className='text-red-400 text-left ml-2 mt-2' role="alert">{errors.password?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <select {...register("user", { required: true })} className="select select-success mt-7">
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                    </div>
                    {singupError && <p className='text-red-400 text-left ml-2 mt-2'>{singupError}</p>}
                    <input type="submit" className='btn btn-success w-full mt-7'/>
                </form>
                <p className='text-left ml-1 mt-2'>Already have an account<Link className='text-primary' to={'/login'}>Log in</Link></p>
            </div>
        </div>
    );
};

export default Registration;