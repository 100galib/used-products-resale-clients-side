import React from 'react';

const AllCategories = () => {
    return (
        <div>
            <div className='w-full h-80'>
                <div className='object-cover w-full h-full bg-center bg-no-repeat' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1602248349750-bc4d97d4c599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`}}>
                    <h1 className='text-center font-bold text-black text-6xl'>Get All Bikes</h1>
                </div>
            </div>
            <div className='my-6'>this is text</div>
        </div>
    );
};

export default AllCategories;