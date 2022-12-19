import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const SingleAdvertize = ({alldata, setShowModal}) => {
    const {image, name, location, reSalePrice ,originalPrice, yearofUse ,postTime, sellerName} = alldata;
    return (
        <div className="card shadow-xl my-6">
        <figure><img className='h-80' src={image} alt="Advertize" /></figure>
        <div className="card-body">
            <h1>This is Advertize</h1>
            <h2 className="card-title">{name}</h2>
            <p>Location: <span className='font-bold'>{location}</span></p>
            <p>Resale Price: <span className='font-bold'>{reSalePrice} /=</span></p>
            <p>Original Price: <span className='font-bold'>{originalPrice} /=</span></p>
            <p>Year of Use: <span className='font-bold'>{yearofUse}</span></p>
            <p>Time of Post: <span className='font-bold'>{postTime}</span></p>
            <p>Owner: <span className='font-bold'>{sellerName} <FaCheckCircle className='text-info inline'></FaCheckCircle></span> </p>
            <label htmlFor="category-modal" className="btn btn-primary">Book Now</label>
        </div>
    </div>
    );
};

export default SingleAdvertize;