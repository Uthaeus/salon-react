import { NavLink, Link } from "react-router-dom";

function MainNavigation() {

    return (
        <header class="py-3 mb-3 border-bottom">
            <div class="container-fluid d-grid gap-3 align-items-center" style={{gridTemplateColumns: "2fr 1fr;"}}>

                <div class='container d-flex justify-content-evenly align-items-center'>
                    <img src='../assets/asl_logo.jpg' alt='logo' />
                    <NavLink to='/' end>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='contact'>Contact</NavLink>
                    <NavLink to='lashcare'>Lash Care</NavLink>
                    <NavLink to='faqs'>FAQs</NavLink>
                    <NavLink to='appointments'>Appointments</NavLink>
                    

                    <div class="dropdown d-flex nav-link px-2">

                        <button class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" aria-expanded="false">Hair</button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><Link to='services'>Hair Services</Link></li>
                            <li><button class="dropdown-item" href="#">Cuts</button></li>
                            <li><button class="dropdown-item" href="#">Colors</button></li>
                            <li><button class="dropdown-item" href="#">Perm</button></li>
                            <li><button class="dropdown-item" href="#">Weave</button></li>
                            <li><button class="dropdown-item" href="#">Highlights</button></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><button class="dropdown-item" href="#">Eyebrows</button></li>
                            <li><button class="dropdown-item" href="#">Nails</button></li>
                            <li><button class="dropdown-item" href="#">Paraffin</button></li>
                            <li><button class="dropdown-item" href="#">Waxing</button></li>
                        </ul>
                    </div>

                    <div class="dropdown d-flex nav-link px-2">

                        <button class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" aria-expanded="false">Lashes</button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><Link to='lashes'>Lash Services</Link></li>
                            <li><button class="dropdown-item" href="#">Full Set</button></li>
                            <li><button class="dropdown-item" href="#">2wk Fill</button></li>
                            <li><button class="dropdown-item" href="#">3wk Fill</button></li>
                            <li><button class="dropdown-item" href="#">Hybrid</button></li>
                        </ul>
                    </div>
                </div>

            <div class="d-flex align-items-center justify-content-end">
                login links
                
            </div>
            </div>
        </header>
    );
}

export default MainNavigation;