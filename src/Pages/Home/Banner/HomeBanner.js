import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1508357941501-0924cf312bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Get Your Dream Come true</h1>
                        <p className="mb-5">With BD Motors Entertainer You can get to your dream faster. Because we have the most used second hand bike on bangladesh</p>
                        <Link to={'/allCategory'}><button className="btn btn-primary">Choose Your Ride</button></Link>
                        </div>
                    </div>
                </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Long Run Support, When Your need</h1>
                        <p className="mb-5">BD Motors Entertainer give you the premium services. Which will fill like a pro.</p>
                        <Link to={'/allCategory'}><button className="btn btn-primary">Choose Your Ride</button></Link>
                        </div>
                    </div>
                </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1606907568258-d095a110889a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Get Celebrated BD Motors Entertainer</h1>
                        <p className="mb-5">No faking, No delay, No Dream Just go to Real and Celebrate with BD Motors Entertainer</p>
                        <Link to={'/allCategory'}><button className="btn btn-primary">Choose Your Ride</button></Link>
                        </div>
                    </div>
                </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
    );
};

export default HomeBanner;