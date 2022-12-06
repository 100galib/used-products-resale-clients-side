import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LoopSingleCatagories from '../LoopSingleCatagories/LoopSingleCatagories';

const Categorys = () => {

    const {data: catagories = []} = useQuery({
        queryKey:['categories'],
        queryFn: async() => {
            const res = await fetch('https://b612-used-products-resale-server-side-100galib.vercel.app/categories');
            const data = res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-12'>CHOOSE YOUR CATEGORIES</h1>
            <div className='ml-8 my-12 grid grid-cols-1 gap-4 md:grid-cols-3'>
                {
                    catagories.map(catagore => <LoopSingleCatagories key={catagore._id} catagore={catagore}></LoopSingleCatagories>)
                }
            </div>
        </div>
    );
};

export default Categorys;