import { Outlet } from "react-router";

import MainNavigation from "../components/Navigation/main-navigation";
import logo from '../assets/images/asl_logo.jpg';

function RootLayout() {

    return (
        <div className="root-container">
            <MainNavigation />
            <div class='container'>
                <Outlet />
            </div>
            <div className="logo-wrapper">
                <img src={logo} alt='logo' width='90' height='90' />
            </div>
            
        </div>
    );
}

export default RootLayout;