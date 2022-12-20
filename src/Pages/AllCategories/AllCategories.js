import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Common/Loader/Loader';
import { useState } from 'react';
import AllSIngleCategories from './AllSIngleCategories';
import Modal from '../Category/Modal'

const AllCategories = () => {
    const [showModl, setShowModal] = useState(null);
    const url = 'http://localhost:5000/Category';

    const {data: allCategory = [], isLoading} = useQuery({
        queryKey: ['Category'],
        queryFn: async() => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <div className='w-full h-80'>
                <div className='object-cover w-full h-full bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1602248349750-bc4d97d4c599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`}}>
                    <h1 className='text-right pt-20 font-bold text-black text-6xl'>Get All Bikes</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center'>
                {
                    allCategory.map(everyItem => <AllSIngleCategories key={everyItem._id} everyItem={everyItem} setShowModal={setShowModal}></AllSIngleCategories>)
                }
            </div>
            {showModl && <Modal  showModl={showModl} setShowModal={setShowModal}></Modal>}
        </div>
    );
};

export default AllCategories;