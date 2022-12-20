import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContex } from '../../../../Contex/Authprovider';

const AddAProduct = () => {
    const {user} = useContext(AuthContex);
    const {data: getSeller = []} = useQuery({
        queryKey:['users'],
        queryFn: async() => {
            const res = await fetch(`https://used-products-resale-server-side-taupe.vercel.app/userrole?email=${user?.email}`);
            const data = res.json();
            return data;
        }
    })

    const addProductHandler = event => {
        event.preventDefault();
        const form = event.target;
        const category = form.category.value;
        let categoryID;
        if(category === '160'){
            categoryID = '63808db2b8fd403ed5b46326'
        } else if(category === '150'){
            categoryID = '63808db2b8fd403ed5b46327'
        }
        else if(category === '135'){
            categoryID = '63808db2b8fd403ed5b46328'
        }
        const name = form.name.value;
        const image = form.image.value;
        const location = form.location.value;
        const reSalePrice = form.reSalePrice.value;
        const originalPrice = form.originalPrice.value;
        const yearofUse = form.yearofUse.value;
        const postTime = new Date();
        const sellerName = getSeller[0].displayname;
        const condition = form.condition.value;
        const mobile = form.mobile.value;
        const description = form.description.value;
        const email = getSeller[0].email;
        const role = getSeller[0].role;
        const status = "verified";

        const postData = {
            cat_id : categoryID,
            name,
            image,
            location,
            reSalePrice,
            originalPrice,
            category,
            yearofUse,
            postTime,
            sellerName,
            condition,
            mobile,
            description,
            email,
            role,
            status,
        }
        fetch('https://used-products-resale-server-side-taupe.vercel.app/Category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(data => {console.log(data)
            if(data.acknowledged){
                toast.success('Item is post')
            }
        })  


    }
    return (
        <div className="w-3/5">
            <h1 className='text-center text-3xl font-bold mt-5'>Give Product Infomation</h1>
                <form onSubmit={addProductHandler}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name='name' className="input input-bordered input-accent w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Image (URL)</span>
                        </label>
                        <input type="text" name='image' className="input input-bordered input-accent w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Location</span>
                        </label>
                        <input type="text" name='location' className="input input-bordered input-accent w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input type="text" name='reSalePrice' className="input input-bordered input-accent w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input type="text" name='originalPrice' className="input input-bordered input-accent w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Years Of Use</span>
                        </label>
                        <input type="text" name='yearofUse' className="input input-bordered input-accent w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Seller Mobile</span>
                        </label>
                        <input type="text" name='mobile' className="input input-bordered input-accent w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Condition type(excellent, good, fair)</span>
                        </label>
                        <input type="text" name='condition' className="input input-bordered input-accent w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Bike CC</span>
                        </label>
                        <input type="text" name='category' className="input input-bordered input-accent w-full"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' className="input input-bordered input-accent w-full"/>
                    </div>



                    <button className='btn btn-primary w-full my-3' type='submit'>Submit</button>
                </form>
        </div> 
    );
};

export default AddAProduct;