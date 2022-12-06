import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Common/Loader/Loader';
import { AuthContex } from '../Contex/Authprovider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    const location = useLocation();
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;