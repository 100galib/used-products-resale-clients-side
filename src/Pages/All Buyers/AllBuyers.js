import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const {data: allbuyer = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async() => {
            const res = await fetch('https://b612-used-products-resale-server-side-100galib.vercel.app/users/Buyer');
            const data = res.json();
            return data;
        }
    })
    const deleteProduct = (id) => {
        fetch(`https://b612-used-products-resale-server-side-100galib.vercel.app/userrole/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.deletedCount > 0){
                toast.success('delete successfully')
                refetch()
            }
        })
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-center my-6'>All Buyer</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Delete Buyer</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           allbuyer && allbuyer?.map((buyer) => <tr key={buyer._id}>
                            <td>
                               
                            </td>
                            <td>
                                {buyer.email}
                            </td>
                            <td>
                                {buyer.displayname}
                            </td>
                            <td><button onClick={() => deleteProduct(buyer._id)} className="btn btn-primary btn-xs">Delete</button></td>
                        </tr>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;