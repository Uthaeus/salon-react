import { Outlet } from "react-router";
import MainNavigation from "../components/Navigation/main-navigation";

function RootLayout() {

    return (
        <>
            <MainNavigation />
            <div class='container'>
                <Outlet />
            </div>
            
        </>
    );
}

export default RootLayout;