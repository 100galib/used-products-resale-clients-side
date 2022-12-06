import React from 'react';
import { Link } from 'react-router-dom';

const Seller = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Link className='my-8' to={'/dashboard/addProduct'}><button className='btn btn-primary'>Add Product</button></Link>
            <Link className='my-8'  to={'/dashboard/myProduct'}><button className='btn btn-primary'>My Product</button></Link>
        </div>
    );
};

export default Seller;