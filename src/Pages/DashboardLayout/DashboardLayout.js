import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../../Common/Navigation/Navigation';
import { AuthContex } from '../../Contex/Authprovider';
import SetBuyer from '../BuyerPage/BuyerAccount/BuyerAccount';
import SetSeller from '../Seller/SellerAccount/SellerAccount';
import SetAdmin from '../SetAdmin/SetAdmin';

const DashboardLayout = () => {
    const {user} = useContext(AuthContex);
    const [isAdmin] = SetAdmin(user?.email);
    const [isSeller] = SetSeller(user?.email);
    const [isBuyer] = SetBuyer(user?.email);
    return (
        <div>
            <Navigation></Navigation>
            <div className="drawer drawer-mobile">
                <input id="openDashBoard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>                
                </div> 
                <div className="drawer-side">
                    <label htmlFor="openDashBoard" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            isAdmin && <li><Link className='btn btn-outline btn-accent' to={'/dashboard/admin'}>Admin</Link></li>
                        }
                        {isSeller && <li><Link className='btn btn-outline btn-info' to={'/dashboard/Seller'}>Seller</Link></li>
                        }
                        {isBuyer && <li><Link className='btn btn-outline btn-primary' to={'/dashboard/buyer'}>Buyer</Link></li>
                        }
                        
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;