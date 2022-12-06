import React from 'react';
import { Link } from 'react-router-dom';

const LoopSingleCatagories = ({catagore}) => {
    const {_id, title, image, location} = catagore;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}CC Bike</h2>
                <p className='font-bold'>Bike Location: {location}</p>
                <div className="card-actions justify-end">
                <Link to={`/category/${_id}`}><button className="btn btn-primary">See Category</button></Link>
                </div>
            </div>
        </div>
    );
};

export default LoopSingleCatagories;