import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../../Common/Loader/Loader';
import { AuthContex } from '../../../Contex/Authprovider';
import SetSeller from '../SellerAccount/SellerAccount';

const SellerRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContex)
    const [isSeller, isSellerLoading] = SetSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loader></Loader>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoutes;