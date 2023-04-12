import { Outlet } from "react-router-dom";

import MainNavigation from "../components/Navigation/main-navigation";
import logo from '../assets/images/asl_logo.jpg'

function ProductRoot() {

    return (
        <div className="product-container">
            <MainNavigation />
            <div className="container">
                <Outlet />
            </div>
            <div className="logo-wrapper">
                <img src={logo} alt='logo' width='90' height='90' />
            </div>
        </div>
    );
}

export default ProductRoot;