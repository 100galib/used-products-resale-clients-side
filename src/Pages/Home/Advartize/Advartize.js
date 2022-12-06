import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleAdvertize from './SingleAdvertize';

const Advartize = () => {
    const url = 'https://b612-used-products-resale-server-side-100galib.vercel.app/advertize';

    const {data: myProduct = []} = useQuery({
        queryKey: ['Category'],
        queryFn: async() => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })
    return (
        <div>
            <div>
            {myProduct.length > 0 ? <h1 className='text-3xl font-bold text-center my-5'>Advertize Section</h1> : ''}
            </div>
            <div  className='flex justify-center gap-9 my-9'>
                {myProduct.length > 0 ? 
                myProduct.map(alldata => <SingleAdvertize key={alldata._id} alldata={alldata}></SingleAdvertize>)
                : 
                ''
                }
            </div>
        </div>
    );
};

export default Advartize;