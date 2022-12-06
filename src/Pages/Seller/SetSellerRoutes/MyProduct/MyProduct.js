import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContex } from '../../../../Contex/Authprovider';

const MyProduct = () => {
    const {user} = useContext(AuthContex);
    const url = `https://b612-used-products-resale-server-side-100galib.vercel.app/Category?email=${user.email}`;

    const {data: myProduct = [], refetch} = useQuery({
        queryKey: ['Category', user?.email],
        queryFn: async() => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })
   const postProduct = (product) => {
    fetch('https://b612-used-products-resale-server-side-100galib.vercel.app/advertize', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {console.log(data)
        if(data.acknowledged){
            toast.success('Item is posted')
        }
    }) 
   }       

    const advertiseHandler = (id) => {
        fetch(`https://b612-used-products-resale-server-side-100galib.vercel.app/Category/${id}`, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.modifiedCount > 0){
                toast.success('It is now on Advertize')
            }
        })
    }
    const deleteProduct = (id) => {
        fetch(`https://b612-used-products-resale-server-side-100galib.vercel.app/Category/${id}`, {
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
            <h1 className='text-2xl font-bold text-center my-6'>My Product</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sale Status</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Delete Product</th>
                            <th>Advertise Product</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           myProduct && myProduct?.map((product) => <tr key={product._id}>
                            <td>
                                available
                            </td>
                            <td>
                                {product.name}
                            </td>
                            <td>
                                {product.reSalePrice}
                            </td>
                            <td><button onClick={() => deleteProduct(product._id)} className="btn btn-primary btn-xs">Delete</button></td>
                            <th>
                                <button onClick={() => {advertiseHandler(product._id);
                                        postProduct(product)
                                }} className="btn btn-xs">Advertise</button>
                            </th>
                        </tr>) 
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;