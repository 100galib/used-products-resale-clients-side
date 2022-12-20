import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContex } from '../../../Contex/Authprovider';

const MyOrders = () => {
    const {user} = useContext(AuthContex);
    const url = `https://used-products-resale-server-side-taupe.vercel.app/bookins?email=${user?.email}`;

    const {data: allbookings = []} = useQuery({
        queryKey: ['bookins', user?.email],
        queryFn: async() => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-2xl font-bold text-center my-6'>My Orders</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Pay Button</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           allbookings && allbookings?.map((booking, index) => <tr key={booking._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={booking.picture} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {booking.itemName}
                            </td>
                            <td>{booking.itemPrice} =/</td>
                            <th>
                                <button className="btn btn-primary btn-xs">Pay</button>
                            </th>
                        </tr>) 
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;