import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashBoard = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Link className='my-8' to={'/dashboard/allseller'}><button className='btn btn-primary'>All Sellers</button></Link>
            <Link className='my-8'  to={'/dashboard/allbuyer'}><button className='btn btn-primary'>All Buyers</button></Link>
        </div>
    );
};

export default AdminDashBoard;