import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Contex/Authprovider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const {logIn, googleSignIn} = useContext(AuthContex);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

const logSubmit = data => {
    setLoginError('')
    logIn(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
    })
    .catch(error => {console.error('error', error)
                    setLoginError(error.message);
    })
}

const googleLogin = () => {
    googleSignIn()
    .then(result => {
        const user = result.user;
        console.log(user);
        userToDatabase(user?.email, user?.displayName)
    })
    .catch(error => console.error('error', error))
}

const userToDatabase = (email, displayname, role="Buyer") => {
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
            navigate('/');
        }
    })
}
    return (
        <div className='flex justify-center items-center my-20'>
            <div className='text-center w-96'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <form onSubmit={handleSubmit(logSubmit)}>
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
                        <input {...register("password", {required: 'Password is required'})} type="password" className="input input-bordered input-success" />
                        {errors.password && <p className='text-red-400 text-left ml-2 mt-2' role="alert">{errors.password?.message}</p>}
                        {loginError && <p className='text-left text-red-400 ml-2 mt-2'>Wrong Passord</p>}
                    </div>
                    <div className="form-control w-full">
                        <select {...register("logUser", { required: true })} className="select select-success mt-7">
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <input type="submit" className='btn btn-success w-full mt-7'/>
                </form>
                <p className='text-left ml-1 mt-2'>Don't have account <Link className='text-primary' to={'/registration'}>Sign Up</Link></p>
                <div className="divider">OR</div>
                <button onClick={googleLogin} className="btn btn-outline btn-accent w-full">Login With Google</button>
            </div>
        </div>
    );
};

export default Login;