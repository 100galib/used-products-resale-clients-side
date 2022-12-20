import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContex } from '../../../Contex/Authprovider';

const NewModal = ({showModl, setShowModal}) => {
    const {name, originalPrice, image} = showModl;
    const {user} = useContext(AuthContex);

    const modalHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const itemName= form.itemName.value;
        const itemPrice = form.itemPrice.value;
        const phone = form.phone.value;
        const meeting = form.meeting.value;

        const booking = {
            name,
            email,
            itemName,
            itemPrice,
            phone,
            meeting,
            picture: image
        }
        fetch('https://used-products-resale-server-side-taupe.vercel.app/wishList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.acknowledged){
                setShowModal(null);
                toast.success('Add to Wishlist')
            }
        })        

    }
    return (
        <>
        <input type="checkbox" id="category-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="category-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={modalHandler}>
                    <div className="form-control w-full">
                        <label className="label  mt-6">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered input-accent w-full" disabled/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} className="input input-bordered input-accent w-full" disabled/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name='itemName' defaultValue={name} className="input input-bordered input-accent w-full" disabled/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Item Price</span>
                        </label>
                        <input type="text" name='itemPrice' defaultValue={originalPrice} className="input input-bordered input-accent w-full" disabled/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name='phone' className="input input-bordered input-accent w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Meeting Location</span>
                        </label>
                        <input type="text" name='meeting' className="input input-bordered input-accent w-full"/>
                    </div>
                    <button className='btn btn-primary w-full mt-3' type='submit'>Submit</button>
                </form>
            </div>
        </div>    
        </>
    );
};

export default NewModal;