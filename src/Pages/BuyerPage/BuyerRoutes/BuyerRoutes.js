import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../../Common/Loader/Loader';
import { AuthContex } from '../../../Contex/Authprovider';
import SetBuyer from '../BuyerAccount/BuyerAccount';

const BuyerRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContex)
    const [isBuyer, isBuyerrLoading] = SetBuyer(user?.email);
    const location = useLocation();

    if (loading || isBuyerrLoading) {
        return <Loader></Loader>
    }

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoutes;