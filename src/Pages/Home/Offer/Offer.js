import React from 'react';

const Offer = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.unsplash.com/photo-1591216105236-5ba45970702a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt='Offer 20%' className="rounded-lg shadow-2xl" />
                    <div className='w-4/5 lg:w-2/5'>
                        <h1 className="text-5xl font-bold">Get 20% offer Now</h1>
                        <p className="py-6">We are now on special offer for special few bikes, Which will last for a month. If want to make your dream come true, this is your chance. So don't waste no more time lets get to it</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;