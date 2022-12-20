import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../../Common/Loader/Loader';
import Modal from '../../Category/Modal';
import SingleAdvertize from './SingleAdvertize';

const Advartize = () => {
    const [showModl, setShowModal] = useState(null);
    const url = 'https://used-products-resale-server-side-taupe.vercel.app/advertize';

    const {data: myProduct = [], isLoading} = useQuery({
        queryKey: ['advertize'],
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
            <div>
                {myProduct.length > 0 ? <h1 className='text-3xl font-bold text-center my-5'>Advertize Section</h1> : ''}
            </div>
            <div  className='grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center'>
                {myProduct.length > 0 ? 
                myProduct.map(alldata => <SingleAdvertize key={alldata._id} alldata={alldata}  setShowModal={setShowModal}></SingleAdvertize>)
                : 
                ''
                }
            </div>
            {showModl && <Modal  showModl={showModl} setShowModal={setShowModal}></Modal>}
        </div>
    );
};

export default Advartize;