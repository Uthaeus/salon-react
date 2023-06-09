import { useContext, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/asl_logo.jpg";
import { AuthContext } from "../../store/auth-context";

function MainNavigation() {
    const [loggedIn, setLoggedIn] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const log = authCtx.isLoggedIn;

  useEffect(() => {
    setLoggedIn(log);
  }, [log]);

  function logoutHandler() {
    setLoggedIn(false);
    authCtx.logout();
    navigate("/");
  }

  return (
    <header className="py-3 mb-3 border-bottom">
      <div className=" nav-container">
        <div className="container d-flex justify-content-evenly align-items-center">
          <img src={logo} alt="logo" width="20" height="20" />
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="lashcare"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Lash Care
          </NavLink>
          <NavLink
            to="faqs"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            FAQs
          </NavLink>
          <NavLink
            to="appointments"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Appointments
          </NavLink>

          <div className="dropdown d-flex nav-link px-2">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Hair
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <Link to="hair-services" className="dropdown-item">
                  Hair Services
                </Link>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  Cuts
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  Colors
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  Perm
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  Weave
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  Highlights
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  Eyebrows
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  Nails
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  Paraffin
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  Waxing
                </button>
              </li>
            </ul>
          </div>

          <div className="dropdown d-flex nav-link px-2">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Lashes
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <Link to="lash-services" className="dropdown-item">
                  Lash Services
                </Link>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  Full Set
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  2wk Fill
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  3wk Fill
                </button>
              </li>
              <li>
                <button className="dropdown-item" href="#">
                  Hybrid
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-end">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link mx-2 active" : "nav-link mx-2"
          }
        >
          Products 
        </NavLink>

          {loggedIn ? (
            <>
              <NavLink
                to="edit-profile"
                className={({ isActive }) =>
                  isActive ? "nav-link mx-2 active" : "nav-link mx-2"
                }
              >
                Edit Profile
              </NavLink>
              <div onClick={logoutHandler} className="nav-link mx-2">
                Logout
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? "nav-link mx-2 active" : "nav-link mx-2"
                }
              >
                Log In
              </NavLink>
              <NavLink
                to="sign-up"
                className={({ isActive }) =>
                  isActive ? "nav-link mx-2 active" : "nav-link mx-2"
                }
              >
                Sign Up
              </NavLink>
            </>
          )}

          <Link to="about" className="mx-5 nav-link">
            aslsalon@gmail.com
          </Link>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
