import { Outlet } from "react-router-dom";

import MainNavigation from "../components/Navigation/main-navigation";

function ProductRoot() {

    return (
        <>
            <MainNavigation />
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default ProductRoot;