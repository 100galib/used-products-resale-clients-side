import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Common/Loader/Loader';
import { AuthContex } from '../Contex/Authprovider';
import SetAdmin from '../Pages/SetAdmin/SetAdmin';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContex)
    const [isAdmin, isAdminLoading] = SetAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;