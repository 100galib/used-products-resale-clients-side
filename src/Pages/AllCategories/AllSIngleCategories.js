import React from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle } from "react-icons/fa";

const AllSIngleCategories = ({everyItem, setShowModal}) => {
    const {_id, image, name, location, reSalePrice, originalPrice, yearofUse, postTime, sellerName} = everyItem;

    const setToWishList = (id) => {
            fetch(`https://used-products-resale-server-side-taupe.vercel.app/Category/${id}`, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Add to Wish List')
            }
        }) 
    }

    return (
            <div className="card w-96 bg-base-100 shadow-xl my-6">
                <figure><img  className='h-80' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Location: <span className='font-bold'>{location}</span></p>
                    <p>Resale Price: <span className='font-bold'>{reSalePrice} /=</span></p>
                    <p>Original Price: <span className='font-bold'>{originalPrice} /=</span></p>
                    <p>Year of Use: <span className='font-bold'>{yearofUse}</span></p>
                    <p>Time of Post: <span className='font-bold'>{postTime}</span></p>
                    <p>Owner: <span className='font-bold'>{sellerName} <FaCheckCircle className='text-info inline'></FaCheckCircle></span> </p>
                    <div className="card-actions justify-end">
                    <button className='btn btn-primary' onClick={() => setToWishList(_id)}>Wish list</button>
                    <label onClick={() => {setShowModal(everyItem)}} htmlFor="category-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
    );
};

export default AllSIngleCategories;