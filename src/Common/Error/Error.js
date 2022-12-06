import React from 'react';

const Error = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-9xl font-bold">404</h1>
            <p className="mb-5 text-2xl">Ooops Page Not Found</p>
            </div>
        </div>
        </div>
    );
};

export default Error;