import { createBrowserRouter } from "react-router-dom";
import Error from "../Common/Error/Error";
import Main from "../Common/Main/Main";
import AllBuyers from "../Pages/All Buyers/AllBuyers";
import AllSellers from "../Pages/All Sellers/AllSellers";
import AllCategories from "../Pages/AllCategories/AllCategories";
import Blog from "../Pages/Blog/Blog";
import BuyerRoutes from "../Pages/BuyerPage/BuyerRoutes/BuyerRoutes";
import Category from "../Pages/Category/Category";
import DashboardLayout from "../Pages/DashboardLayout/DashboardLayout";
import AdminDashBoard from "../Pages/Dashboardpages/AdminDashBoard/AdminDashBoard";
import Seller from "../Pages/Dashboardpages/Seller/Seller";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/MyOrders/MynormalOrder/MyOrders";
import Registration from "../Pages/Registration/Registration";
import SellerRoutes from "../Pages/Seller/SellerRoutes/SellerRoutes";
import AddAProduct from "../Pages/Seller/SetSellerRoutes/AddAProduct/AddAProduct";
import MyProduct from "../Pages/Seller/SetSellerRoutes/MyProduct/MyProduct";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

export const  routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><Category></Category></PrivateRoutes>,
                loader: ({params}) => fetch(`https://used-products-resale-server-side-taupe.vercel.app/Category/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allCategory',
                element: <AllCategories></AllCategories>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/buyer',
                element: <BuyerRoutes><MyOrders></MyOrders></BuyerRoutes>
            },
            {
                path: '/dashboard/admin',
                element: <AdminRoutes><AdminDashBoard></AdminDashBoard></AdminRoutes>
            },
            {
                path: '/dashboard/Seller',
                element: <SellerRoutes><Seller></Seller></SellerRoutes>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoutes><AddAProduct></AddAProduct></SellerRoutes>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRoutes><MyProduct></MyProduct></SellerRoutes>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])