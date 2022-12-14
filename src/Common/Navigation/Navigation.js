import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Contex/Authprovider';

const Navigation = () => {
    const {user, logOut} = useContext(AuthContex);
    const signOut = () => {
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }

    return (
            <div className="navbar bg-emerald-400 text-emerald-900">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-emerald-400 rounded-box w-52">
                        <li><Link to={'/blog'}>Blogs</Link></li>
                        {user?.email ? 
                        <>
                            <li><Link to={'/dashboard'}>Dashboard</Link></li>
                            <li><button onClick={signOut} className="btn btn-ghost">Logout</button></li>
                        </>
                        : <li><Link to={'/login'}>Login</Link></li>}
                    </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">BD Motors Entertainer</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/blog'}>Blogs</Link></li>
                        {user?.email ? 
                            <>
                                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                                <li><button onClick={signOut} className="btn btn-ghost">Logout</button></li>
                            </>
                            : <li><Link to={'/login'}>Login</Link></li>}
                    </ul>
                </div>
                <label htmlFor="openDashBoard" tabIndex={2} className="btn btn-ghost ml-36 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
    );
};

export default Navigation;