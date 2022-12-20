import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const {data: allSeller = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async() => {
            const res = await fetch('https://used-products-resale-server-side-taupe.vercel.app/users/Seller');
            const data = res.json();
            return data;
        }
    })
    const deleteProduct = (id) => {
        fetch(`https://used-products-resale-server-side-taupe.vercel.app/users/${id}`, {
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
    const makeVerified = (email) => {
        fetch(`https://used-products-resale-server-side-taupe.vercel.app/Category?email=${email}`, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Verified Complete')
            }
        })
    }
    return (
<div>
            <h1 className='text-2xl font-bold text-center my-6'>All Seller</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Delete Buyer</th>
                            <th>User Verified</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           allSeller && allSeller?.map((seller) => <tr key={seller._id}>
                            <td>
                               
                            </td>
                            <td>
                                {seller.email}
                            </td>
                            <td>
                                {seller.displayname}
                            </td>
                            <td><button onClick={() => deleteProduct(seller._id)} className="btn btn-primary btn-xs">Delete</button></td>
                            <td><button onClick={() => makeVerified(seller.email)} className="btn btn-primary btn-xs">Verified</button></td>
                        </tr>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;